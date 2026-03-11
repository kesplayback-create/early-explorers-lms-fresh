/**
 * Early Explorers CPD Academy - Progress Tracking
 *
 * Works in two contexts:
 * 1) Main LMS (index.html)
 * 2) Module pages (modules/*.html)
 *
 * On module pages it:
 * - Ensures a progress row exists (status=in_progress) ONLY when the learner actually opens the module.
 * - Marks each lesson complete when the learner reaches the last slide of that lesson.
 */

(function () {
  const log = (...a) => console.log('[progress]', ...a);
  const warn = (...a) => console.warn('[progress]', ...a);

  function getApi() {
    // Prefer current window (modules now load EE_API directly)
    if (window.EE_API) return window.EE_API;
    // Fallback to opener if modules are opened as popups
    if (window.opener && !window.opener.closed && window.opener.EE_API) return window.opener.EE_API;
    return null;
  }

  async function getUserId(api) {
    // Prefer Supabase session
    try {
      const u = await api.getCurrentUser();
      if (u?.id) return u.id;
    } catch (_) {}

    // Fallback to localStorage (set by index.html login)
    const ls = localStorage.getItem('user_id');
    return ls || null;
  }

  async function getModuleByCode(api, code) {
    const modules = await api.getModules();
    return (modules || []).find(m => String(m.code).toUpperCase() === String(code).toUpperCase()) || null;
  }

  function computeLessonMaxSlides() {
    const slides = Array.from(document.querySelectorAll('.slide[data-lesson][data-slide]'));
    const map = new Map();
    slides.forEach(s => {
      const lesson = Number(s.dataset.lesson || 0);
      const slide = Number(s.dataset.slide || 0);
      if (!lesson) return;
      const cur = map.get(lesson);
      if (cur === undefined || slide > cur) map.set(lesson, slide);
    });
    return map;
  }

  function getActiveSlide() {
    return document.querySelector('.slide.active[data-lesson][data-slide]');
  }

  function getActiveLessonSlideKey(slideEl) {
    if (!slideEl) return null;
    const lesson = Number(slideEl.dataset.lesson || 0);
    const slide = Number(slideEl.dataset.slide || 0);
    if (!lesson) return null;
    return { lesson, slide, key: `L${lesson}-S${slide}` };
  }

  async function ensureStarted(api, userId, moduleRow) {
    // Only create/flip to in_progress when they actually open the module
    const existing = await api.getModuleProgress(userId, moduleRow.id);
    if (!existing) {
      await api.updateModuleProgress(userId, moduleRow.id, {
        status: 'in_progress',
        progress_percentage: 0,
        started_at: new Date().toISOString(),
        last_accessed_at: new Date().toISOString(),
      });
      return;
    }

    if (!existing.started_at || existing.status === 'not_started') {
      await api.updateModuleProgress(userId, moduleRow.id, {
        status: 'in_progress',
        started_at: existing.started_at || new Date().toISOString(),
        last_accessed_at: new Date().toISOString(),
      });
    } else {
      // touch last accessed
      await api.updateModuleProgress(userId, moduleRow.id, {
        last_accessed_at: new Date().toISOString(),
      });
    }
  }

  async function markLesson(api, userId, moduleRow, lessonNumber) {
    try {
      const res = await api.markLessonComplete(userId, moduleRow.id, lessonNumber);
      log('Lesson complete tracked', moduleRow.code, lessonNumber, res);
    } catch (e) {
      // duplicates are tolerated in ee-api.js
      warn('markLessonComplete failed', e);
    }
  }

  async function initModuleTracking() {
    const api = getApi();
    if (!api) {
      warn('EE_API not ready yet');
      return;
    }

    const code = window.MODULE_CODE;
    // If we're not on a module page, just exit quietly.
    if (!code) return;

    const userId = await getUserId(api);
    if (!userId) {
      warn('No user session found; progress tracking paused.');
      return;
    }

    const moduleRow = await getModuleByCode(api, code);
    if (!moduleRow) {
      warn('Module not found for code:', code);
      return;
    }

    const lessonMax = computeLessonMaxSlides();
    const completedLessons = new Set();
    const seenSlides = new Set();

    // Start module as soon as it opens
    await ensureStarted(api, userId, moduleRow);

    // Watch slide changes
    const observer = new MutationObserver(async () => {
      const slideEl = getActiveSlide();
      const info = getActiveLessonSlideKey(slideEl);
      if (!info) return;

      // Avoid spam
      if (seenSlides.has(info.key)) return;
      seenSlides.add(info.key);

      // Touch last accessed occasionally
      try {
        await api.updateModuleProgress(userId, moduleRow.id, {
          status: 'in_progress',
          last_accessed_at: new Date().toISOString(),
        });
      } catch (_) {}

      const maxSlide = lessonMax.get(info.lesson);
      if (maxSlide !== undefined && info.slide >= maxSlide) {
        if (!completedLessons.has(info.lesson)) {
          completedLessons.add(info.lesson);
          await markLesson(api, userId, moduleRow, info.lesson);
        }
      }
    });

    observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class'] });

    log('✅ Module progress tracking ready for', code);
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Delay slightly to allow module inline JS to set .active states
    setTimeout(initModuleTracking, 150);
  });
})();
