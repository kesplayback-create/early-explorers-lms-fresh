/**
 * COMPLETE QUIZ SYSTEM - All 5 Modules
 * Combined quiz bank + quiz interface
 */

// Prevent double-load
if (typeof window.QUIZ_BANK === 'undefined') {

  // =====================================================
  // QUIZ BANK
  // =====================================================
  window.QUIZ_BANK = window.QUIZ_BANK || {};

  // (Bank copied from your existing file)
  window.QUIZ_BANK = {
    'MH-01': {
      moduleCode: 'MH-01',
      moduleName: 'Safe Moving & Handling in Early Years',
      passMark: 80,
      questions: [
        {question: "What is the correct starting position before lifting a child from the floor?", options: ["Stand upright and reach down quickly", "Bend at the knees, feet shoulder-width apart, back straight", "Sit on the floor next to the child", "Ask a colleague to lift for you"], correct: 1},
        {question: "When should you avoid lifting a child alone?", options: ["When the child is awake", "When the weight exceeds what you can safely manage", "When other children are watching", "During mealtimes only"], correct: 1},
        {question: "Why should you always communicate with a child before lifting?", options: ["To check their name", "To meet an Ofsted requirement", "To prepare them, reduce sudden movement and build trust", "It is optional and not required"], correct: 2},
        {question: "Which part of the body should NEVER be the primary bending point when lifting?", options: ["Knees", "Ankles", "Waist / lower back", "Hips"], correct: 2},
        {question: "If a staff member experiences back pain after a lift, what should they do?", options: ["Continue and report at end of day", "Report immediately to the manager and document in the accident book", "Stretch and continue their shift", "Only report if pain lasts more than a week"], correct: 1},
        {question: "What is the 'power zone' for lifting?", options: ["The area above your shoulders", "Between mid-thigh and mid-chest height", "The floor level", "Behind your back"], correct: 1},
        {question: "When lifting a child from a cot, you should:", options: ["Reach over the cot rail and lift straight up", "Lower the cot rail first, then lift", "Ask the child to climb out themselves", "Lift over the rail with assistance only"], correct: 1},
        {question: "What should you do if a child resists being lifted?", options: ["Lift them anyway", "Use more force", "Pause, reassure them, and try gentle communication first", "Leave them alone"], correct: 2},
        {question: "When carrying a child, you should hold them:", options: ["At arm's length", "Close to your body, centered over your feet", "On one hip only", "As high as possible"], correct: 1},
        {question: "How long should you hold a child continuously before adjusting?", options: ["As long as needed", "30 seconds", "2-3 minutes before adjusting or putting down", "30 minutes"], correct: 2}
      ]
    },
    'SG-L1': {
      moduleCode: 'SG-L1',
      moduleName: 'Safeguarding Level 1 Refresher',
      passMark: 80,
      questions: [
        {question: "What is the primary purpose of safeguarding in early years?", options: ["To meet Ofsted requirements", "To protect children from harm and promote their welfare", "To monitor parent behavior", "To record incidents"], correct: 1},
        {question: "Who is the Designated Safeguarding Lead (DSL)?", options: ["Any senior staff", "The room leader", "The named person responsible (check your setting)", "Manager only"], correct: 2},
        {question: "If you have a concern about a child, what should you do FIRST?", options: ["Call the parents", "Investigate yourself", "Record and report to DSL immediately", "Wait to see if it happens again"], correct: 2},
        {question: "Which is a possible indicator of neglect?", options: ["Wearing yesterday's clothes", "Persistent hunger, poor hygiene, inadequate clothing", "Tired one morning", "Won't share toys"], correct: 1},
        {question: "What should you do if a child makes a disclosure of abuse?", options: ["Promise to keep it secret", "Listen, don't interrogate, reassure, report to DSL", "Call police immediately", "Ask leading questions"], correct: 1},
        {question: "Mobile phones in the setting should be:", options: ["Used freely", "Kept in lockers, not used in rooms with children", "Only for photos", "Manager use only"], correct: 1},
        {question: "What does 'it could happen here' mean?", options: ["Only happens elsewhere", "Be vigilant - abuse can happen anywhere including here", "We're more at risk", "Parents are always abusers"], correct: 1},
        {question: "If you have concerns about a colleague's behavior:", options: ["Ignore if they're your friend", "Confront them directly", "Report to DSL or manager immediately", "Tell other staff first"], correct: 2},
        {question: "Which requires immediate DSL notification?", options: ["Minor scratch from playing", "Unexplained bruising, disclosure, serious welfare concerns", "Forgot water bottle", "Parent 5 mins late"], correct: 1},
        {question: "Main principle of 'Working Together to Safeguard Children'?", options: ["Only social services responsible", "Everyone who works with children shares responsibility", "Only teachers need training", "Parents solely responsible"], correct: 1}
      ]
    },
    'HS-01': {
      moduleCode: 'HS-01',
      moduleName: 'Health & Safety Procedures',
      passMark: 80,
      questions: [
        {question: "What should you do FIRST when you discover a fire?", options: ["Try to put it out", "Raise the alarm immediately", "Call 999", "Evacuate children"], correct: 1},
        {question: "Where is the assembly point for fire evacuation?", options: ["Car park", "Check your setting's specific assembly point", "Nearest street", "Inside office"], correct: 1},
        {question: "How often should fire drills be conducted?", options: ["Once a year", "Only when Ofsted visits", "At least once per term (every 12 weeks)", "Monthly"], correct: 2},
        {question: "If a child has a minor bump to the head:", options: ["Ignore if fine", "Apply ice, inform parents immediately, monitor, complete form", "Tell parents at collection", "Send to hospital"], correct: 1},
        {question: "Broken toy with sharp edges - what do you do?", options: ["Put back", "Remove immediately, report, dispose safely", "Only if child complains", "Give to another room"], correct: 1},
        {question: "Daily safety check should include:", options: ["Just register", "Full visual inspection indoor/outdoor for hazards", "Only outdoor", "Only if manager asks"], correct: 1},
        {question: "If you spill liquid on floor:", options: ["Leave to dry", "Clean immediately and put wet floor sign", "Just tell someone", "Only if children nearby"], correct: 1},
        {question: "What must be recorded in accident book?", options: ["Only child's name", "Name, date/time, what happened, injury, treatment, signatures", "Just injury", "Only serious accidents"], correct: 1},
        {question: "Who can administer medication?", options: ["Any staff", "Only trained staff with written consent and form", "Only managers", "Anyone in emergency"], correct: 1},
        {question: "If you notice a hazard you can't fix immediately:", options: ["Ignore it", "Cordon off, report to manager immediately, record in log", "Just avoid area", "Wait until end of day"], correct: 1}
      ]
    },
    'BH-01': {
      moduleCode: 'BH-01',
      moduleName: 'Behaviour Approach at Early Explorers',
      passMark: 80,
      questions: [
        {question: "Our primary approach to managing behavior?", options: ["Punishment-based", "Positive behavior management - catch them being good", "Ignore all negative", "Time out for everything"], correct: 1},
        {question: "When should you use positive reinforcement?", options: ["Only when perfect", "Frequently, for effort and positive choices", "Never - spoils children", "Only older children"], correct: 1},
        {question: "If a child hits another child:", options: ["Immediate time out", "Shout at them", "Ensure safety, explain calmly, help understand impact, teach alternative", "Ignore it"], correct: 2},
        {question: "What is 'Time In' instead of 'Time Out'?", options: ["Let them do whatever", "Stay with child, co-regulate, help calm together", "Same as time out", "Punishment technique"], correct: 1},
        {question: "If a child is having a tantrum:", options: ["Walk away", "Ensure safety, stay calm, offer comfort when ready, don't negotiate", "Give them what they want", "Raise your voice"], correct: 1},
        {question: "What does 'model behavior' mean?", options: ["Walk in a line", "Demonstrate positive behaviors - children copy adults", "Use puppets", "Only managers do this"], correct: 1},
        {question: "When to talk about behavior?", options: ["In front of all children", "When calm, privately, at child's level, simple language", "Never discuss", "Only with parents present"], correct: 1},
        {question: "Realistic expectation for 2-year-old?", options: ["Perfect sharing", "Still learning impulse control, needs adult support", "Can control all emotions", "Should never tantrum"], correct: 1},
        {question: "If challenging behavior persists:", options: ["Keep doing same thing", "Observe, record patterns, discuss team/SENCO, adjust approach", "Blame parents", "Give up"], correct: 1},
        {question: "Purpose of visual cues and schedules?", options: ["Just decoration", "Help predict what's next, reduce anxiety, support transitions", "Only for SEN", "Look professional"], correct: 1}
      ]
    },
    'PP-01': {
      moduleCode: 'PP-01',
      moduleName: 'Policies & Procedures Overview',
      passMark: 80,
      questions: [
        {question: "Where can you find Early Explorers' policies?", options: ["Online only", "Staff room folder and shared drive", "Only managers have access", "Not written down"], correct: 1},
        {question: "How often are policies reviewed?", options: ["Never", "Every 5 years", "Annually, or when legislation changes", "Only when Ofsted requires"], correct: 2},
        {question: "Parent's friend arrives but not on authorized list:", options: ["Let them if parent called", "Politely refuse, contact parent for authorization first", "Ask for ID then release", "Fine if child knows them"], correct: 1},
        {question: "Opening procedure at 7:00 AM?", options: ["Just unlock", "Unlock, disarm alarm, safety check, heating/lights, registers, set up", "Only managers", "Unlock and wait"], correct: 1},
        {question: "During drop-off you should:", options: ["Just wave", "Greet families, sign in, note messages, visual health check", "Only talk to children", "Avoid parent interaction"], correct: 1},
        {question: "Security protocol for visitors?", options: ["Anyone can walk in", "All visitors sign in, wear badge, never prop doors", "Only delivery drivers", "Doesn't matter during day"], correct: 1},
        {question: "Professional boundaries mean:", options: ["Be unfriendly", "Friendly but not friends - no personal social media, maintain distance", "Add all on Facebook", "Share phone number"], correct: 1},
        {question: "Gross misconduct includes:", options: ["5 mins late once", "Breaching confidentiality, inappropriate relationships, safeguarding failures, dishonesty", "Forgetting paperwork", "Minor disagreements"], correct: 1},
        {question: "If unsure about a policy:", options: ["Guess", "Ask room leader, manager, or check policy document", "Do what you think", "Ask parents"], correct: 1},
        {question: "Why is confidentiality important?", options: ["Just a rule", "Builds trust, legal duty, protects children and families", "Only protects setting", "It's optional"], correct: 1}
      ]
    },
    'GDPR-01': {
      moduleCode: 'GDPR-01',
      moduleName: 'Confidentiality & GDPR',
      passMark: 80,
      questions: [
        {question: "Under GDPR, what is the legal basis most commonly used for processing staff and child data in a nursery setting?", options: ["Consent from every individual", "Legitimate interests and legal obligation", "Public interest only", "Contractual necessity only"], correct: 1},
        {question: "A parent asks to see all the information you hold about their child. What is this called?", options: ["A freedom of information request", "A subject access request (SAR)", "A data audit", "A GDPR complaint"], correct: 1},
        {question: "How long do you have to respond to a subject access request?", options: ["7 days", "14 days", "1 month", "3 months"], correct: 2},
        {question: "A member of staff leaves a child's learning journal on a table visible to other parents during collection. This is:", options: ["Acceptable as parents are trusted", "A data breach that must be reported to the manager", "Only a problem if a parent complains", "Fine as the data isn't sensitive"], correct: 1},
        {question: "Which organisation must be notified of a serious data breach within 72 hours?", options: ["Ofsted", "The Information Commissioner's Office (ICO)", "The local authority", "The DfE"], correct: 1},
        {question: "A colleague asks you to share a child's address so they can send a birthday card. You should:", options: ["Share it — it's a kind gesture", "Refuse — personal data cannot be shared without proper justification", "Check with the child first", "Share it as long as no one finds out"], correct: 1},
        {question: "Child records must be kept securely. Which of the following is NOT acceptable?", options: ["Password-protected digital files", "Locked filing cabinets", "Paper records left on a desk overnight", "Encrypted cloud storage"], correct: 2},
        {question: "When a child leaves the setting, their records should be:", options: ["Immediately destroyed", "Retained for the required period (typically until the child is 25) then securely destroyed", "Kept forever", "Given to the parents to keep"], correct: 1},
        {question: "You accidentally send a child's personal details to the wrong email address. What must you do?", options: ["Delete the sent email and say nothing", "Report it to the manager immediately as a potential data breach", "Wait to see if anyone notices", "Only report if the recipient contacts you"], correct: 1},
        {question: "Confidentiality in early years settings has one key exception. Information must always be shared when:", options: ["A parent requests it", "There is a safeguarding concern — child safety overrides confidentiality", "A colleague asks", "Ofsted requests a file"], correct: 1}
      ]
    },
    'PV-01': {
      moduleCode: 'PV-01',
      moduleName: 'Prevent Duty Awareness',
      passMark: 80,
      questions: [
        {question: "What is the Prevent Duty?", options: ["A fire safety regulation", "The legal duty to have due regard to preventing people from being drawn into terrorism", "A safeguarding policy for domestic abuse", "An Ofsted inspection requirement only"], correct: 1},
        {question: "Prevent is one part of the government's counter-terrorism strategy. What is that strategy called?", options: ["CONTEST", "CHANNEL", "WRAP", "PURSUE"], correct: 0},
        {question: "Which of the following is a vulnerability factor that might indicate radicalisation risk?", options: ["Being shy or quiet", "A sense of grievance or injustice, identity crisis, or exposure to extremist ideology", "Missing one day of nursery", "Having strong cultural or religious beliefs"], correct: 1},
        {question: "If you have a concern about a child or family member being radicalised, who should you report to first?", options: ["The police directly", "Your Designated Safeguarding Lead (DSL)", "Ofsted", "The local MP"], correct: 1},
        {question: "What is the CHANNEL programme?", options: ["A TV education initiative", "A voluntary, confidential programme that provides support to people at risk of radicalisation", "A government database of extremists", "A police surveillance operation"], correct: 1},
        {question: "Extremism includes which of the following?", options: ["Celebrating cultural festivals", "Vocal or active opposition to fundamental British values", "Disagreeing with a colleague's opinion", "Expressing religious faith openly"], correct: 1},
        {question: "What are the four fundamental British Values promoted under Prevent?", options: ["Loyalty, tradition, respect, obedience", "Democracy, rule of law, individual liberty, mutual respect and tolerance", "Freedom, equality, justice, community", "Honesty, kindness, inclusion, diversity"], correct: 1},
        {question: "A parent regularly makes comments about a particular religious or ethnic group that concern you. You should:", options: ["Ignore it — they have a right to their opinions", "Record your concerns and report to the DSL", "Challenge them directly in front of other parents", "Discuss it with other staff members only"], correct: 1},
        {question: "Prevent training for early years staff is required:", options: ["Only for managers", "Only if the setting is in a high-risk area", "For all staff as part of their safeguarding responsibilities", "Only when Ofsted asks"], correct: 2},
        {question: "Which statement about radicalisation is correct?", options: ["It only affects teenagers and adults", "It cannot happen to young children", "Children of any age can be affected by radicalisation in their home environment", "It is always obvious and easy to spot"], correct: 2}
      ]
    },
    'CP-01': {
      moduleCode: 'CP-01',
      moduleName: 'Communication & Partnerships with Parents',
      passMark: 80,
      questions: [
        {question: "What does the EYFS statutory framework say about partnerships with parents?", options: ["Parents should be kept at a distance to maintain professional boundaries", "Providers must maintain a policy of working in partnership with parents", "Parent engagement is optional but encouraged", "Parents should only be contacted when there is a problem"], correct: 1},
        {question: "A parent becomes upset and raises their voice at drop-off in front of other families. What should you do first?", options: ["Ask them to leave immediately", "Match their energy to show you understand", "Calmly invite them to speak somewhere private", "Ignore it and continue the session"], correct: 2},
        {question: "A parent shares that their child has been experiencing nightmares. Where should you record this information?", options: ["You do not need to record it", "In the child's daily log or communication diary", "On a sticky note on the board", "Tell your manager verbally only"], correct: 1},
        {question: "A child's parent speaks limited English. Which of the following is the correct approach to communication?", options: ["Use the child to translate important messages", "Speak slowly and loudly", "Arrange a professional interpreter or use translated written materials", "Only communicate via written notes in English"], correct: 2},
        {question: "Which of the following is a professional boundary you must always maintain?", options: ["Accepting small gifts from parents at Christmas", "Adding parents on your personal social media accounts", "Giving parents your personal mobile number for updates", "Sharing another child's information with a curious parent"], correct: 0},
        {question: "A parent complains that their child hasn't been doing enough painting activities. The correct response is to:", options: ["Tell them the curriculum is set and cannot be changed", "Dismiss the concern as it is minor", "Listen, acknowledge, explain your approach, and follow up with the manager if needed", "Agree to change all activities immediately"], correct: 2},
        {question: "Under the SEND Code of Practice, parents of children with SEND must be:", options: ["Informed only at annual reviews", "Actively involved in planning and reviewing their child's support at all times", "Kept separate from professional discussions", "Only involved if they request it"], correct: 1},
        {question: "You overhear a colleague telling another parent details about a different family's situation. You should:", options: ["Ignore it as it is not your concern", "Join the conversation", "Speak to the colleague privately first, then report to your manager if it continues", "Immediately report it to Ofsted"], correct: 2},
        {question: "When should you discuss sensitive information about a child with their parent?", options: ["Loudly at the door during busy drop-off", "At collection in front of other waiting parents", "In a private space away from other children and families", "Via a note in their bag"], correct: 2},
        {question: "A parent asks for your personal opinion on whether their child should start school this year or defer. You should:", options: ["Give a clear personal recommendation", "Refuse to engage with the question at all", "Provide factual information about options and suggest they speak to the school, remaining neutral", "Tell them what the manager thinks"], correct: 2}
      ]
    },
    'FH-01': {
      moduleCode: 'FH-01',
      moduleName: 'Food Safety & Medication Management (Level 2)',
      passMark: 80,
      questions: [
        {question: "What does HACCP stand for?", options: ["Hygiene And Cleaning Control Procedures", "Hazard Analysis and Critical Control Points", "Health Assessment and Compliance Check Process", "Hazardous Area Control and Containment Plan"], correct: 1},
        {question: "What is the temperature danger zone in which bacteria multiply most rapidly?", options: ["0°C to 100°C", "15°C to 45°C", "8°C to 63°C", "5°C to 75°C"], correct: 2},
        {question: "Which colour chopping board should be used for raw poultry?", options: ["Red", "Yellow", "Blue", "Green"], correct: 1},
        {question: "You have cooked chicken for lunch. What minimum core temperature must it reach to be safe to serve?", options: ["63°C", "70°C", "75°C", "82°C"], correct: 2},
        {question: "Raw meat must be stored in the fridge:", options: ["On the top shelf above everything else", "In the middle shelf", "On the bottom shelf below all other foods", "It does not matter as long as it is sealed"], correct: 2},
        {question: "A member of staff had diarrhoea and vomiting yesterday but feels better today. Can they handle food?", options: ["Yes — they feel well enough to work", "Yes — as long as 24 hours have passed", "No — they must be symptom-free for 48 hours before returning to food handling", "Only if they wear gloves"], correct: 2},
        {question: "Which of the following is NOT one of the 14 major allergens under UK food law?", options: ["Lupin", "Sesame", "Garlic", "Sulphur dioxide"], correct: 2},
        {question: "A child with a nut allergy is showing hives and lip swelling after eating. What is your first action?", options: ["Give an antihistamine and monitor", "Call the parent to ask about their allergy history", "Shout for manager and first aider, stay with child, prepare to use EpiPen and call 999", "Move the child to a quiet room and wait"], correct: 2},
        {question: "A parent verbally asks you to give their child antibiotics at lunchtime but has not completed a medication form. You should:", options: ["Administer it — verbal consent is sufficient", "Skip the dose and mention it at collection", "Contact the parent before the dose is due and ask them to complete a signed medication form", "Ask another member of staff to give it instead"], correct: 2},
        {question: "What is the correct order for cleaning a food preparation surface?", options: ["Disinfect, then clean with detergent", "Wipe with a damp cloth and leave to dry", "Clean with detergent, rinse, disinfect, allow to air dry", "Spray with disinfectant and wipe immediately"], correct: 2}
      ]
    }
  };

  // =====================================================
  // STATE
  // =====================================================
  window.currentQuiz = null;              // { moduleCode, moduleName, passMark }
  window.currentQuizModule = null;        // module code
  window.currentQuizQuestions = [];
  window.currentQuizAnswers = [];
  window.quizStartTime = null;

  function _api() {
    return window.EE_API || (window.opener && !window.opener.closed ? window.opener.EE_API : null);
  }

  async function _getUserId(api) {
    try {
      const u = await api.getCurrentUser();
      if (u?.id) return u.id;
    } catch (_) {}
    return localStorage.getItem('user_id') || null;
  }

  async function _getModuleRow(api, moduleCode) {
    const modules = await api.getModules();
    return (modules || []).find(m => String(m.code).toUpperCase() === String(moduleCode).toUpperCase()) || null;
  }

  function _makeCertNumber(moduleCode, userId) {
    const dt = new Date();
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, '0');
    const d = String(dt.getDate()).padStart(2, '0');
    const shortUser = String(userId || '').replace(/-/g, '').slice(-8).toUpperCase();
    return `EE-${moduleCode}-${y}${m}${d}-${shortUser}`;
  }

  // =====================================================
  // QUIZ UI
  // =====================================================
  window.startQuiz = function (moduleCode) {
    const quizData = window.QUIZ_BANK[moduleCode];
    if (!quizData) {
      alert('Quiz not available for this module yet');
      return;
    }

    window.currentQuizModule = moduleCode;
    window.currentQuiz = {
      moduleCode: quizData.moduleCode,
      moduleName: quizData.moduleName,
      passMark: quizData.passMark,
    };

    window.currentQuizQuestions = quizData.questions;
    window.currentQuizAnswers = new Array(window.currentQuizQuestions.length).fill(null);
    window.quizStartTime = new Date();

    // Show quiz screen (these functions exist in index.html)
    if (typeof showScreen === 'function') showScreen('screen-app');
    if (typeof showTab === 'function') showTab('quiz', null);

    // Set quiz header
    const titleEl = document.getElementById('quiz-module-name');
    if (titleEl) titleEl.textContent = quizData.moduleName;

    window.renderQuiz();
  };

  window.renderQuiz = function () {
    const container = document.getElementById('quiz-questions-container');
    if (!container) return;

    container.innerHTML = '';

    window.currentQuizQuestions.forEach((q, qIndex) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'quiz-question';
      questionDiv.innerHTML = `
        <div class="q-number">Question ${qIndex + 1} of ${window.currentQuizQuestions.length}</div>
        <div class="q-text">${q.question}</div>
        <div class="q-options">
          ${q.options
            .map(
              (opt, oIndex) => `
            <div class="q-option" onclick="selectAnswer(${qIndex}, ${oIndex})">
              <div class="q-option-letter">${String.fromCharCode(65 + oIndex)}</div>
              <div class="q-option-text">${opt}</div>
              <div class="q-option-check">✓</div>
            </div>
          `
            )
            .join('')}
        </div>
      `;
      container.appendChild(questionDiv);
    });

    const submitBtn = document.getElementById('quiz-submit-btn');
    if (submitBtn) {
      submitBtn.style.display = 'block';
      submitBtn.disabled = true;
      submitBtn.textContent = '0/' + window.currentQuizQuestions.length + ' Answered';
    }

    const resultDiv = document.getElementById('quiz-result');
    if (resultDiv) resultDiv.style.display = 'none';
  };

  window.selectAnswer = function (questionIndex, optionIndex) {
    window.currentQuizAnswers[questionIndex] = optionIndex;

    const questions = document.querySelectorAll('.quiz-question');
    if (questions[questionIndex]) {
      const options = questions[questionIndex].querySelectorAll('.q-option');
      options.forEach((opt, idx) => {
        opt.classList.toggle('selected', idx === optionIndex);
      });
    }

    window.updateSubmitButton();
  };

  window.updateSubmitButton = function () {
    const answeredCount = window.currentQuizAnswers.filter((a) => a !== null).length;
    const allAnswered = answeredCount === window.currentQuizQuestions.length;
    const submitBtn = document.getElementById('quiz-submit-btn');
    if (submitBtn) {
      submitBtn.disabled = !allAnswered;
      submitBtn.textContent = allAnswered ? 'Submit Quiz' : `${answeredCount}/${window.currentQuizQuestions.length} Answered`;
    }
  };

  // =====================================================
  // SUBMIT + SAVE + CERTIFICATE
  // =====================================================
  window.submitQuiz = async function () {
    try {
      // Validate state
      if (!window.currentQuizModule || !Array.isArray(window.currentQuizQuestions) || !window.currentQuizQuestions.length) {
        alert('Quiz state missing. Please restart the quiz.');
        return;
      }

      // Calculate score
      let correct = 0;
      window.currentQuizQuestions.forEach((q, idx) => {
        if (window.currentQuizAnswers[idx] === q.correct) correct++;
      });

      const scorePercent = Math.round((correct / window.currentQuizQuestions.length) * 100);
      const passMark = window.QUIZ_BANK[window.currentQuizModule].passMark;
      const passed = scorePercent >= passMark;

      // Duration
      const durationMinutes = window.quizStartTime
        ? Math.round((Date.now() - window.quizStartTime.getTime()) / 60000)
        : null;

      // Show results
      const resultDiv = document.getElementById('quiz-result');
      if (resultDiv) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
          <div class="quiz-score ${passed ? 'passed' : 'failed'}">
            <div class="score-number">${scorePercent}%</div>
            <div class="score-text">${passed ? 'PASSED ✅' : 'NOT PASSED ❌'}</div>
            <div class="score-details">You got ${correct} out of ${window.currentQuizQuestions.length} correct (Pass mark: ${passMark}%)</div>
          </div>
        `;
      }

      // Save attempt + update progress + certificate
      const api = _api();
      if (!api) {
        console.warn('EE_API not available - cannot save quiz attempt/certificate.');
        return;
      }

      const userId = await _getUserId(api);
      if (!userId) {
        console.warn('No userId - cannot save quiz attempt/certificate.');
        return;
      }

      const moduleRow = await _getModuleRow(api, window.currentQuizModule);
      if (!moduleRow) {
        console.warn('Module not found for code', window.currentQuizModule);
        return;
      }

      // 1) Record attempt
      try {
        const { error } = await window.supabaseClient
          .from('quiz_attempts')
          .insert([
            {
              user_id: userId,
              module_id: moduleRow.id,
              score: scorePercent,
              passed,
              attempt_number: 1, // DB can handle if you later want increment
              completed_at: new Date().toISOString(),
              duration_minutes: durationMinutes,
            },
          ]);
        if (error) throw error;
      } catch (e) {
        // If table isn't accessible via RLS, keep UX working but log.
        console.warn('Quiz attempt save failed:', e);
      }

      // 2) Update module progress
      try {
        const nowIso = new Date().toISOString();
        const progressUpdates = {
          status: passed ? 'completed' : 'in_progress',
          progress_percentage: passed ? 100 : 90,
          completed_at: passed ? nowIso : null,
          last_accessed_at: nowIso,
          quiz_score: scorePercent,
          quiz_passed: passed,
        };
        if (passed) {
          progressUpdates.last_completed_at = nowIso;
          const renewalMonths = Number(moduleRow.renewal_months || 12);
          const dueDate = new Date();
          dueDate.setMonth(dueDate.getMonth() + renewalMonths);
          progressUpdates.due_date = dueDate.toISOString().slice(0, 10);
        }
        await api.updateModuleProgress(userId, moduleRow.id, progressUpdates);
      } catch (e) {
        console.warn('Progress update failed:', e);
      }

      // 3) If passed, issue certificate + show download link
      if (passed) {
        let certRow = null;
        const certNumber = _makeCertNumber(moduleRow.code, userId);

        try {
          certRow = await api.issueCertificate({
            userId,
            moduleId: moduleRow.id,
            certificateNumber: certNumber,
            score: scorePercent,
          });
        } catch (e) {
          console.warn('Certificate insert failed (may already exist):', e);
        }

        // Provide a button to open certificate template
        const fullName = encodeURIComponent(localStorage.getItem('user_name') || localStorage.getItem('staff_name') || '');
        const certNo = encodeURIComponent(certRow?.certificate_number || certNumber);
        const issued = encodeURIComponent(certRow?.issued_date || new Date().toISOString().slice(0, 10));
        const moduleName = encodeURIComponent(moduleRow.title || window.currentQuiz?.moduleName || moduleRow.code);
        const score = encodeURIComponent(String(scorePercent));

        const url = `certificate-template.html?name=${fullName}&module=${moduleName}&date=${issued}&cert=${certNo}&score=${score}`;

        const actions = document.createElement('div');
        actions.style.marginTop = '14px';
        actions.innerHTML = `
          <button class="btn" onclick="window.open('${url}','_blank')">📄 Download / Print Certificate</button>
        `;
        if (resultDiv) resultDiv.appendChild(actions);
      }

      // Disable submit after attempt
      const submitBtn = document.getElementById('quiz-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitted';
      }

      // 4) Auto-tick linked induction checklist items on pass
      if (passed && userId) {
        try {
          const { data: linkedItems } = await window.supabaseClient
            .from('induction_checklist_items')
            .select('id')
            .eq('linked_module_code', window.currentQuizModule)
            .eq('is_active', true);

          if (linkedItems && linkedItems.length > 0) {
            const nowIso = new Date().toISOString();
            const upserts = linkedItems.map(item => ({
              user_id: userId,
              item_id: item.id,
              completed: true,
              completed_by: userId,
              completed_at: nowIso,
            }));
            const { error: inductionError } = await window.supabaseClient
              .from('induction_checklist_completions')
              .upsert(upserts, { onConflict: 'user_id,item_id' });
            if (inductionError) {
              console.warn('Induction auto-tick failed:', inductionError);
            } else {
              console.log(`✅ Auto-ticked ${linkedItems.length} induction item(s) for ${window.currentQuizModule}`);
            }
          }
        } catch (e) {
          console.warn('Induction checklist auto-tick error:', e);
        }
      }

      console.log('✅ Quiz submitted', { module: window.currentQuizModule, scorePercent, passed });

    } catch (error) {
      console.error('submitQuiz error:', error);
      alert('There was an error submitting your quiz. Check the console for details.');
    }
  };

  console.log('✅ Quiz system loaded successfully');
}
