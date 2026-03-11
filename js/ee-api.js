/**
 * Early Explorers CPD Academy - API Client
 * Supabase Integration Layer
 *
 * Notes:
 * - This file assumes the Supabase JS v2 library is loaded FIRST:
 *   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 */

// ============================================
// CONFIGURATION
// ============================================
window.SUPABASE_CONFIG = window.SUPABASE_CONFIG || {
  url: 'https://pwbmhszugdoauphbbida.supabase.co',
  // NOTE: keep this as a PUBLIC anon key (safe to embed)
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYm1oc3p1Z2RvYXVwaGJiaWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNTkxNzEsImV4cCI6MjA4NjkzNTE3MX0.aHvIhtcnVYqgAPIKLQ9kCOIl5IUc-l9aRX4RkkAkm4g',
};

// ============================================
// INIT
// ============================================
(function initSupabaseClient() {
  let retryCount = 0;
  const maxRetries = 30;
  
  function go() {
    if (!window.supabase) {
      retryCount++;
      if (retryCount < maxRetries) {
        console.log(`⏳ Waiting for Supabase library... (${retryCount}/${maxRetries})`);
        setTimeout(go, 100);
      } else {
        console.error('❌ Supabase library failed to load after 30 attempts');
        console.error('Please check internet connection and refresh the page');
      }
      return;
    }

    if (!window.supabaseClient) {
      window.supabaseClient = window.supabase.createClient(
        window.SUPABASE_CONFIG.url,
        window.SUPABASE_CONFIG.anonKey
      );
      console.log('✅ Early Explorers API initialized');
    }
  }
  go();
})();

// ============================================
// HELPERS
// ============================================
function _isDuplicateInsert(err) {
  if (!err) return false;
  // PostgREST duplicate key is usually 409 with code 23505
  return err.code === '23505' || err.status === 409 || String(err.message || '').toLowerCase().includes('duplicate');
}

function _ensureClient() {
  if (!window.supabaseClient) {
    throw new Error('Supabase client not initialized. Ensure supabase-js loads before ee-api.js');
  }
}

// ============================================
// AUTHENTICATION
// ============================================
async function signIn(email, password) {
  _ensureClient();
  const { data, error } = await window.supabaseClient.auth.signInWithPassword({ email, password });
  if (error) throw error;
  const profile = await getUserProfile(data.user.id);
  return { user: data.user, session: data.session, profile };
}

async function signOut() {
  _ensureClient();
  const { error } = await window.supabaseClient.auth.signOut();
  if (error) throw error;
  localStorage.clear();
  sessionStorage.clear();
  return true;
}

async function getCurrentUser() {
  try {
    _ensureClient();
    const { data, error } = await window.supabaseClient.auth.getUser();
    if (error) throw error;
    return data.user || null;
  } catch (e) {
    return null;
  }
}

// ============================================
// USER PROFILE
// ============================================
async function getUserProfile(userId) {
  _ensureClient();
  const { data, error } = await window.supabaseClient
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();
  if (error) throw error;
  return data;
}

// ============================================
// MODULES
// ============================================
async function getModules() {
  _ensureClient();
  const { data, error } = await window.supabaseClient
    .from('modules')
    .select('*')
    .eq('is_active', true)
    .order('sort_order');
  if (error) throw error;
  return data || [];
}

// ============================================
// PROGRESS
// ============================================
async function getUserProgress(userId) {
  _ensureClient();
  const { data, error } = await window.supabaseClient
    .from('user_module_progress')
    .select('*, modules:module_id(*)')
    .eq('user_id', userId);
  if (error) throw error;
  return data || [];
}

async function getDashboardStats(userId) {
  const fallback = {
    completed_count: 0,
    in_progress_count: 0,
    overdue_count: 0,
    not_started_count: 0,
    avg_progress: 0,
  };

  try {
    _ensureClient();
    const { data, error } = await window.supabaseClient
      .from('dashboard_stats')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle(); // ✅ prevents 406 if 0 rows

    if (error) throw error;
    return data || fallback;
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    return fallback;
  }
}

async function getModuleProgress(userId, moduleId) {
  try {
    _ensureClient();
    const { data, error } = await window.supabaseClient
      .from('user_module_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('module_id', moduleId)
      .maybeSingle();

    if (error) throw error;
    return data || null;
  } catch (error) {
    console.error('Get module progress error:', error);
    return null;
  }
}

async function updateModuleProgress(userId, moduleId, updates) {
  _ensureClient();

  const payload = {
    user_id: userId,
    module_id: moduleId,
    ...updates,
  };

  ['started_at', 'last_accessed_at', 'completed_at'].forEach((k) => {
    if (payload[k] instanceof Date) payload[k] = payload[k].toISOString();
  });

  const { data, error } = await window.supabaseClient
    .from('user_module_progress')
    .upsert(payload, { onConflict: 'user_id,module_id' })
    .select('*')
    .single();

  if (error) throw error;
  return data;
}

async function markLessonComplete(userId, moduleId, lessonNumber) {
  _ensureClient();

  // Insert completion row (ignore duplicates)
  const { error: lessonError } = await window.supabaseClient
    .from('lesson_completions')
    .insert([
      {
        user_id: userId,
        module_id: moduleId,
        lesson_number: lessonNumber,
      },
    ]);

  if (lessonError && !_isDuplicateInsert(lessonError)) {
    throw lessonError;
  }

  // Count completed lessons
  const { data: completions, error: countError } = await window.supabaseClient
    .from('lesson_completions')
    .select('lesson_number')
    .eq('user_id', userId)
    .eq('module_id', moduleId);

  if (countError) throw countError;

  // Determine total lesson count
  const { data: moduleRow, error: moduleErr } = await window.supabaseClient
    .from('modules')
    .select('total_lessons')
    .eq('id', moduleId)
    .single();

  if (moduleErr) throw moduleErr;

  const totalLessons = Number(moduleRow.total_lessons || 0) || 0;
  const completedCount = Array.isArray(completions) ? completions.length : 0;
  const pct = totalLessons > 0 ? Math.min(100, Math.round((completedCount / totalLessons) * 100)) : 0;

  const existing = await getModuleProgress(userId, moduleId);
  const nowIso = new Date().toISOString();

  const updates = {
    status: existing?.status && existing.status !== 'not_started' ? existing.status : 'in_progress',
    progress_percentage: pct,
    last_accessed_at: nowIso,
  };
  if (!existing?.started_at) updates.started_at = nowIso;

  await updateModuleProgress(userId, moduleId, updates);
  return { completedCount, totalLessons, pct };
}

// ============================================
// CERTIFICATES
// ============================================
async function getUserCertificates(userId) {
  _ensureClient();
  const { data, error } = await window.supabaseClient
    .from('certificates')
    .select('*, modules:module_id (title, code)')
    .eq('user_id', userId)
    .eq('is_valid', true)
    .order('issued_date', { ascending: false });

  if (error) throw error;
  return data || [];
}

async function issueCertificate({ userId, moduleId, certificateNumber, score }) {
  _ensureClient();
  const payload = {
    user_id: userId,
    module_id: moduleId,
    certificate_number: certificateNumber,
    score,
    issued_date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
    is_valid: true,
  };

  const { data, error } = await window.supabaseClient
    .from('certificates')
    .insert([payload])
    .select('*')
    .single();

  if (error) throw error;
  return data;
}

// ============================================
// EXPORT
// ============================================
window.EE_API = {
  signIn,
  signOut,
  getCurrentUser,
  getUserProfile,
  getModules,
  getUserProgress,
  getDashboardStats,
  getModuleProgress,
  updateModuleProgress,
  markLessonComplete,
  getUserCertificates,
  issueCertificate,
};

console.log('✅ Early Explorers API functions loaded');
