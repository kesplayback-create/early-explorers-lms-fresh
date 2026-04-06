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
        {question: "What is the correct starting position before lifting a child from the floor?", options: ["Stand with feet together to keep a stable base", "Bend at the knees, feet shoulder-width apart, back straight", "Bend forward from the hips to keep your arms free", "Squat fully to the floor before engaging the lift"], correct: 1},
        {question: "When should you avoid lifting a child alone?", options: ["When the child is distressed or uncooperative", "When the weight exceeds what you can safely manage", "When you have not completed a risk assessment that day", "When the child is over 18 months old"], correct: 1},
        {question: "Why should you always communicate with a child before lifting?", options: ["To check their name against the register", "To meet an Ofsted requirement for verbal interaction", "To prepare them, reduce sudden movement and build trust", "So a colleague can witness that consent was given"], correct: 2},
        {question: "Which part of the body should NEVER be the primary bending point when lifting?", options: ["Knees", "Ankles", "Waist / lower back", "Hips"], correct: 2},
        {question: "If a staff member experiences back pain after a lift, what should they do?", options: ["Apply heat and continue if pain is manageable", "Report immediately to the manager and document in the accident book", "Stretch and continue their shift, reporting at end of day", "Complete a self-referral to occupational health within the week"], correct: 1},
        {question: "What is the 'power zone' for lifting?", options: ["The area above your shoulders", "Between mid-thigh and mid-chest height", "The floor level", "Behind your back"], correct: 1},
        {question: "When lifting a child from a cot, you should:", options: ["Reach over the cot rail and lift straight up quickly to minimise contact time", "Lower the cot rail first, then lift", "Lean over the side rail and support the child's head throughout", "Lift over the rail with assistance only"], correct: 1},
        {question: "What should you do if a child resists being lifted?", options: ["Lift them anyway as delay increases risk", "Use a two-person lift to ensure control", "Pause, reassure them, and try gentle communication first", "Distract them with a toy before attempting the lift"], correct: 2},
        {question: "When carrying a child, you should hold them:", options: ["At arm's length to protect your posture", "Close to your body, centered over your feet", "On one hip to keep one hand free", "As high as possible to maintain eye contact"], correct: 1},
        {question: "How long should you hold a child continuously before adjusting?", options: ["As long as needed provided your technique is correct", "No more than 30 seconds at any time", "2-3 minutes before adjusting or putting down", "Until the child indicates they want to be put down"], correct: 2}
      ]
    },
    'SG-L1': {
      moduleCode: 'SG-L1',
      moduleName: 'Safeguarding Level 1 Refresher',
      passMark: 80,
      questions: [
        {question: "What is the primary purpose of safeguarding in early years?", options: ["To meet Ofsted requirements and avoid enforcement action", "To protect children from harm and promote their welfare", "To monitor parent behaviour and home circumstances", "To ensure accurate incident recording for legal purposes"], correct: 1},
        {question: "Who is the Designated Safeguarding Lead (DSL)?", options: ["Any senior staff member who has completed training", "The room leader, as they have most contact with children", "The named person responsible (check your setting)", "The manager, who holds overall responsibility"], correct: 2},
        {question: "If you have a concern about a child, what should you do FIRST?", options: ["Call the parents to discuss your concerns directly", "Investigate yourself to gather more evidence first", "Record and report to DSL immediately", "Wait to see if it happens again before escalating"], correct: 2},
        {question: "Which is a possible indicator of neglect?", options: ["Wearing yesterday's clothes on one occasion", "Persistent hunger, poor hygiene, inadequate clothing", "Being tired on a Monday morning", "Difficulty sharing toys with peers"], correct: 1},
        {question: "What should you do if a child makes a disclosure of abuse?", options: ["Reassure them you will keep it between you so they feel safe to talk", "Listen, don't interrogate, reassure, report to DSL", "Call police immediately before speaking to your DSL", "Gently ask follow-up questions to get a clearer picture"], correct: 1},
        {question: "Mobile phones in the setting should be:", options: ["Used freely as long as they are not used to photograph children", "Kept in lockers, not used in rooms with children", "Only permitted for taking developmental observations", "Restricted to manager use only during sessions"], correct: 1},
        {question: "What does 'it could happen here' mean?", options: ["Our setting is statistically more at risk than others", "Be vigilant - abuse can happen anywhere including here", "Staff in this setting are more likely to be perpetrators", "We have a duty to assume the worst in all cases"], correct: 1},
        {question: "If you have concerns about a colleague's behaviour:", options: ["Raise it with them privately first to give them a chance to explain", "Confront them directly so other staff are aware", "Report to DSL or manager immediately", "Gather more evidence by monitoring them before reporting"], correct: 2},
        {question: "Which requires immediate DSL notification?", options: ["A minor scratch sustained during outdoor play", "Unexplained bruising, disclosure, serious welfare concerns", "A child who forgot their water bottle two days running", "A parent arriving 5 minutes late without prior notice"], correct: 1},
        {question: "Main principle of 'Working Together to Safeguard Children'?", options: ["Social services hold primary responsibility and lead all action", "Everyone who works with children shares responsibility", "Safeguarding training is only mandatory for qualified teachers", "Parents hold sole responsibility for their child's safety"], correct: 1}
      ]
    },
    'HS-01': {
      moduleCode: 'HS-01',
      moduleName: 'Health & Safety Procedures',
      passMark: 80,
      questions: [
        {question: "What should you do FIRST when you discover a fire?", options: ["Try to put it out if it appears small and manageable", "Raise the alarm immediately", "Call 999 before doing anything else", "Begin evacuating the nearest children first"], correct: 1},
        {question: "Where is the assembly point for fire evacuation?", options: ["The nearest car park away from the building", "Check your setting's specific assembly point", "The pavement on the nearest public street", "The office, where the register is kept"], correct: 1},
        {question: "How often should fire drills be conducted?", options: ["Once a year as a minimum requirement", "Whenever a new member of staff joins the team", "At least once per term (every 12 weeks)", "Monthly to keep responses sharp"], correct: 2},
        {question: "If a child has a minor bump to the head:", options: ["Monitor for 10 minutes — if fine, no further action needed", "Apply ice, inform parents immediately, monitor, complete form", "Tell parents at collection as they need to decide next steps", "Send to hospital as all head injuries require assessment"], correct: 1},
        {question: "Broken toy with sharp edges - what do you do?", options: ["Return it to the shelf until a risk assessment can be completed", "Remove immediately, report, dispose safely", "Set it aside and inform the room leader at the next opportunity", "Keep it out of reach until it can be repaired"], correct: 1},
        {question: "Daily safety check should include:", options: ["Checking the register and confirming ratios are correct", "Full visual inspection indoor/outdoor for hazards", "Checking only outdoor areas as indoor risks are managed by cleaning staff", "A written log submitted to the manager each morning"], correct: 1},
        {question: "If you spill liquid on floor:", options: ["Leave to dry naturally if it is a small amount", "Clean immediately and put wet floor sign", "Inform the cleaning staff and cordon off the area", "Only act immediately if children are in the immediate vicinity"], correct: 1},
        {question: "What must be recorded in accident book?", options: ["The child's name and a brief description of the injury", "Name, date/time, what happened, injury, treatment, signatures", "The injury and treatment given — other details can be added later", "Only accidents that required first aid treatment"], correct: 1},
        {question: "Who can administer medication?", options: ["Any member of staff present if the trained person is unavailable", "Only trained staff with written consent and form", "The room leader, as they hold responsibility for children in their room", "Any staff member in a genuine emergency"], correct: 1},
        {question: "If you notice a hazard you can't fix immediately:", options: ["Ignore it and report at the next team meeting", "Cordon off, report to manager immediately, record in log", "Avoid the area yourself and brief other staff verbally", "Wait until end of day when the setting is quiet to address it"], correct: 1}
      ]
    },
    'BH-01': {
      moduleCode: 'BH-01',
      moduleName: 'Behaviour Approach at Early Explorers',
      passMark: 80,
      questions: [
        {question: "Our primary approach to managing behaviour?", options: ["Consistent consequence-based management to set clear boundaries", "Positive behaviour management - catch them being good", "Ignoring minor negative behaviour to avoid reinforcing it", "A structured time out system for repeated incidents"], correct: 1},
        {question: "When should you use positive reinforcement?", options: ["Only when a child achieves something noteworthy", "Frequently, for effort and positive choices", "Sparingly, so it retains its impact and meaning", "Only with older children who can understand the connection"], correct: 1},
        {question: "If a child hits another child:", options: ["Apply an immediate natural consequence to deter repetition", "Use a calm warning system before escalating your response", "Ensure safety, explain calmly, help understand impact, teach alternative", "Separate the children and monitor — intervening can escalate tension"], correct: 2},
        {question: "What is 'Time In' instead of 'Time Out'?", options: ["Allowing the child to choose their own way to calm down", "Stay with child, co-regulate, help calm together", "A softer version of time out used for less serious behaviour", "A technique used only by SENCOs and key workers"], correct: 1},
        {question: "If a child is having a tantrum:", options: ["Walk away calmly to remove the audience and reduce escalation", "Ensure safety, stay calm, offer comfort when ready, don't negotiate", "Offer a choice to give them back a sense of control", "Raise your voice briefly to break through the emotional state"], correct: 1},
        {question: "What does 'model behaviour' mean?", options: ["Following a scripted interaction model during challenging moments", "Demonstrate positive behaviours - children copy adults", "Using visual aids and puppets to show expected conduct", "Applying the same response model consistently across the team"], correct: 1},
        {question: "When to talk about behaviour?", options: ["Immediately after the incident while it is fresh in the child's mind", "When calm, privately, at child's level, simple language", "In the presence of parents so everyone is aligned", "In a group setting so all children learn from the situation"], correct: 1},
        {question: "Realistic expectation for 2-year-old?", options: ["Able to share with prompting and adult support", "Still learning impulse control, needs adult support", "Can follow simple rules if consistently reinforced", "Should be able to manage minor frustrations independently"], correct: 1},
        {question: "If challenging behaviour persists:", options: ["Continue the current approach — consistency is key", "Observe, record patterns, discuss team/SENCO, adjust approach", "Increase the use of consequences to create a clearer boundary", "Speak to parents first as the cause is likely home-based"], correct: 1},
        {question: "Purpose of visual cues and schedules?", options: ["To create a professional-looking environment for inspections", "Help predict what's next, reduce anxiety, support transitions", "To support children with SEND — not required for all children", "To reduce the need for verbal instruction from staff"], correct: 1}
      ]
    },
    'PP-01': {
      moduleCode: 'PP-01',
      moduleName: 'Policies & Procedures Overview',
      passMark: 80,
      questions: [
        {question: "Where can you find Early Explorers' policies?", options: ["On the setting's public website for transparency", "Staff room folder and shared drive", "Held by the manager and available on request", "Distributed to staff at induction and updated annually by email"], correct: 1},
        {question: "How often are policies reviewed?", options: ["Every two years as standard good practice", "Every 5 years unless legislation changes", "Annually, or when legislation changes", "Only when Ofsted requests a review during inspection"], correct: 2},
        {question: "A parent's friend arrives but is not on the authorised collection list:", options: ["Allow collection if the parent has called ahead to inform you", "Politely refuse, contact parent for authorisation first", "Ask for photo ID and release the child if identity is confirmed", "Allow collection if the child clearly knows and is comfortable with them"], correct: 1},
        {question: "Opening procedure at 7:00 AM?", options: ["Unlock, check ratios are met and wait for the first family to arrive", "Unlock, disarm alarm, safety check, heating/lights, registers, set up", "Disarm alarm and complete the safety checklist before unlocking", "Unlock, set up the main room and brief arriving staff on the day"], correct: 1},
        {question: "During drop-off you should:", options: ["Focus on settling children quickly to maintain ratios efficiently", "Greet families, sign in, note messages, visual health check", "Allow parents to settle their child and sign in at their own pace", "Minimise conversation to keep transitions calm and efficient"], correct: 1},
        {question: "Security protocol for visitors?", options: ["Visitors accompanied by a member of staff do not need to sign in", "All visitors sign in, wear badge, never prop doors", "Delivery drivers use the side entrance and do not need to sign in", "Visitors to the office area only do not require a badge"], correct: 1},
        {question: "Professional boundaries mean:", options: ["Remaining formally distant to avoid any perception of favouritism", "Friendly but not friends - no personal social media, maintain distance", "Being warm and approachable while avoiding physical contact", "Keeping all communication with families via official channels only"], correct: 1},
        {question: "Gross misconduct includes:", options: ["Persistent lateness despite formal warnings", "Breaching confidentiality, inappropriate relationships, safeguarding failures, dishonesty", "Failure to follow the behaviour management policy on one occasion", "Using personal mobile phone during a session without permission"], correct: 1},
        {question: "If unsure about a policy:", options: ["Use your professional judgement and document your reasoning", "Ask room leader, manager, or check policy document", "Follow what experienced colleagues do in that situation", "Act in the best interest of the child and review the policy later"], correct: 1},
        {question: "Why is confidentiality important?", options: ["It is a contractual obligation included in all staff employment agreements", "Builds trust, legal duty, protects children and families", "It protects the setting from reputational and legal risk", "It ensures information is only shared on a need-to-know basis"], correct: 1}
      ]
    },
    'GDPR-01': {
      moduleCode: 'GDPR-01',
      moduleName: 'Confidentiality & GDPR',
      passMark: 80,
      questions: [
        {question: "Under GDPR, what is the legal basis most commonly used for processing staff and child data in a nursery setting?", options: ["Explicit consent obtained at registration from every individual", "Legitimate interests and legal obligation", "Public interest, as early years is a regulated sector", "Contractual necessity, as data is required to deliver the service"], correct: 1},
        {question: "A parent asks to see all the information you hold about their child. What is this called?", options: ["A freedom of information request", "A subject access request (SAR)", "A data audit", "A GDPR compliance review"], correct: 1},
        {question: "How long do you have to respond to a subject access request?", options: ["7 working days as standard good practice", "14 days from the date of the request", "1 month", "3 months if the request is complex"], correct: 2},
        {question: "A member of staff leaves a child's learning journal on a table visible to other parents during collection. This is:", options: ["Acceptable as parents in the setting are trusted individuals", "A data breach that must be reported to the manager", "Only a concern if another parent actually reads the document", "Permissible as learning journals do not contain sensitive data"], correct: 1},
        {question: "Which organisation must be notified of a serious data breach within 72 hours?", options: ["Ofsted, as the regulatory body for early years settings", "The Information Commissioner's Office (ICO)", "The local authority early years team", "The Department for Education"], correct: 1},
        {question: "A colleague asks you to share a child's address so they can send a birthday card. You should:", options: ["Share it — it is a well-intentioned personal gesture outside work", "Refuse — personal data cannot be shared without proper justification", "Check with the child's key person before deciding", "Share it only if the colleague is also employed by the setting"], correct: 1},
        {question: "Child records must be kept securely. Which of the following is NOT acceptable?", options: ["Password-protected digital files on an authorised device", "Locked filing cabinets in a staff-only area", "Paper records left on a desk overnight", "Encrypted cloud storage with role-based access controls"], correct: 2},
        {question: "When a child leaves the setting, their records should be:", options: ["Destroyed within 6 months to minimise data retention risk", "Retained for the required period (typically until the child is 25) then securely destroyed", "Transferred immediately to the child's new setting or school", "Kept indefinitely as they may be needed for future reference"], correct: 1},
        {question: "You accidentally send a child's personal details to the wrong email address. What must you do?", options: ["Delete the sent email and ask the recipient to do the same", "Report it to the manager immediately as a potential data breach", "Monitor the situation and report only if the data is misused", "Notify the parent directly before informing your manager"], correct: 1},
        {question: "Confidentiality in early years settings has one key exception. Information must always be shared when:", options: ["A parent with parental responsibility formally requests it", "There is a safeguarding concern — child safety overrides confidentiality", "A trusted colleague with relevant experience asks for guidance", "Ofsted requests sight of a specific child's file during inspection"], correct: 1}
      ]
    },
    'PV-01': {
      moduleCode: 'PV-01',
      moduleName: 'Prevent Duty Awareness',
      passMark: 80,
      questions: [
        {question: "What is the Prevent Duty?", options: ["A fire safety regulation that applies to public buildings", "The legal duty to have due regard to preventing people from being drawn into terrorism", "A safeguarding framework specifically covering domestic abuse and exploitation", "An Ofsted inspection requirement for settings in high-risk areas"], correct: 1},
        {question: "Prevent is one part of the government's counter-terrorism strategy. What is that strategy called?", options: ["CONTEST", "CHANNEL", "WRAP", "PURSUE"], correct: 0},
        {question: "Which of the following is a vulnerability factor that might indicate radicalisation risk?", options: ["Being consistently shy, withdrawn or reluctant to engage with peers", "A sense of grievance or injustice, identity crisis, or exposure to extremist ideology", "Missing nursery sessions without a clear or consistent explanation", "Holding strong cultural or religious beliefs within their family"], correct: 1},
        {question: "If you have a concern about a child or family member being radicalised, who should you report to first?", options: ["Contact the police directly using the non-emergency 101 line", "Your Designated Safeguarding Lead (DSL)", "Ofsted, as radicalisation concerns fall outside standard safeguarding", "The local authority Prevent coordinator"], correct: 1},
        {question: "What is the CHANNEL programme?", options: ["A government-funded media education initiative for schools", "A voluntary, confidential programme that provides support to people at risk of radicalisation", "A national database used by police to record persons of interest", "A joint police and social services surveillance and monitoring operation"], correct: 1},
        {question: "Extremism includes which of the following?", options: ["Actively celebrating cultural or religious festivals in a public setting", "Vocal or active opposition to fundamental British values", "Strongly disagreeing with government policy or legislation", "Expressing deeply held religious faith in conversations with others"], correct: 1},
        {question: "What are the four fundamental British Values promoted under Prevent?", options: ["Loyalty, tradition, respect for authority, and social obedience", "Democracy, rule of law, individual liberty, mutual respect and tolerance", "Freedom of speech, equality, social justice, and community cohesion", "Honesty, kindness, inclusion, and celebration of diversity"], correct: 1},
        {question: "A parent regularly makes comments about a particular religious or ethnic group that concern you. You should:", options: ["Ignore it — freedom of speech means they are entitled to their views", "Record your concerns and report to the DSL", "Challenge them directly and clearly in front of other parents to deter repetition", "Discuss it informally with colleagues to see whether others have noticed"], correct: 1},
        {question: "Prevent training for early years staff is required:", options: ["Only for managers and designated safeguarding leads", "Only if the setting is located in a government-designated high-risk area", "For all staff as part of their safeguarding responsibilities", "Only when prompted by an Ofsted inspection or local authority review"], correct: 2},
        {question: "Which statement about radicalisation is correct?", options: ["It predominantly affects teenagers and young adults, not young children", "Young children cannot be radicalised as they lack the cognitive capacity", "Children of any age can be affected by radicalisation in their home environment", "Radicalisation is always gradual and can be identified early with vigilance"], correct: 2}
      ]
    },
    'CP-01': {
      moduleCode: 'CP-01',
      moduleName: 'Communication & Partnerships with Parents',
      passMark: 80,
      questions: [
        {question: "What does the EYFS statutory framework say about partnerships with parents?", options: ["Professional boundaries should be maintained to avoid over-involvement", "Providers must maintain a policy of working in partnership with parents", "Parent engagement is encouraged but not a statutory requirement", "Parents should primarily be contacted when a concern has been identified"], correct: 1},
        {question: "A parent becomes upset and raises their voice at drop-off in front of other families. What should you do first?", options: ["Ask them to leave and return when they are calm", "Match their tone briefly to show empathy before de-escalating", "Calmly invite them to speak somewhere private", "Acknowledge their concern publicly so other families are reassured"], correct: 2},
        {question: "A parent shares that their child has been experiencing nightmares. Where should you record this information?", options: ["This does not need to be recorded as it is a home concern", "In the child's daily log or communication diary", "On the general staff noticeboard so all key workers are aware", "Pass it to the manager verbally to decide whether recording is needed"], correct: 1},
        {question: "A child's parent speaks limited English. Which of the following is the correct approach to communication?", options: ["Ask a bilingual member of staff or another parent to assist with translation", "Speak slowly and clearly, using visual aids to support understanding", "Arrange a professional interpreter or use translated written materials", "Use simple written notes in English, keeping language accessible"], correct: 2},
        {question: "Which of the following is a professional boundary you must always maintain?", options: ["Accepting small gifts from parents at Christmas", "Adding parents on your personal social media accounts", "Giving parents your personal mobile number for updates", "Sharing another child's information with a curious parent"], correct: 0},
        {question: "A parent complains that their child hasn't been doing enough painting activities. The correct response is to:", options: ["Explain that the EYFS curriculum is prescribed and cannot be adjusted", "Acknowledge the concern but clarify that staff make all planning decisions", "Listen, acknowledge, explain your approach, and follow up with the manager if needed", "Agree to adjust the planning immediately to maintain the relationship"], correct: 2},
        {question: "Under the SEND Code of Practice, parents of children with SEND must be:", options: ["Kept informed through termly written reports and annual review meetings", "Actively involved in planning and reviewing their child's support at all times", "Involved only in decisions that directly affect their child's placement", "Consulted when requested, in line with their preference for involvement"], correct: 1},
        {question: "You overhear a colleague telling another parent details about a different family's situation. You should:", options: ["Ignore it — it is not your responsibility to monitor colleagues' conversations", "Join the conversation to redirect it towards appropriate topics", "Speak to the colleague privately first, then report to your manager if it continues", "Report it to the manager immediately without speaking to the colleague first"], correct: 2},
        {question: "When should you discuss sensitive information about a child with their parent?", options: ["During handover at the door, keeping it brief and discreet", "At the end of the day when fewer families are present", "In a private space away from other children and families", "Via a written note so the parent has time to process the information"], correct: 2},
        {question: "A parent asks for your personal opinion on whether their child should start school this year or defer. You should:", options: ["Share your professional view based on your knowledge of the child", "Decline to engage — this is a decision solely for the parent", "Provide factual information about options and suggest they speak to the school, remaining neutral", "Refer them to the SENCO, as school readiness falls within their remit"], correct: 2}
      ]
    },
    'FH-01': {
      moduleCode: 'FH-01',
      moduleName: 'Food Safety & Medication Management (Level 2)',
      passMark: 80,
      questions: [
        {question: "What does HACCP stand for?", options: ["Hygiene And Cleaning Control Procedures", "Hazard Analysis and Critical Control Points", "Health Assessment and Compliance Check Process", "Hazardous Area Control and Containment Plan"], correct: 1},
        {question: "What is the temperature danger zone in which bacteria multiply most rapidly?", options: ["0°C to 100°C — the full range between freezing and boiling", "15°C to 45°C — the range covering room and body temperature", "8°C to 63°C", "5°C to 75°C — covering fridge temperature to near-boiling"], correct: 2},
        {question: "Which colour chopping board should be used for raw poultry?", options: ["Red — used for all raw meat to prevent cross-contamination", "Yellow", "Blue — used for all raw proteins in commercial kitchens", "Green — reserved for poultry as it is the lowest risk raw meat"], correct: 1},
        {question: "You have cooked chicken for lunch. What minimum core temperature must it reach to be safe to serve?", options: ["63°C — the legal minimum for hot-held food in the UK", "70°C — sufficient to kill most common food-borne pathogens", "75°C", "82°C — the recommended temperature for all poultry products"], correct: 2},
        {question: "Raw meat must be stored in the fridge:", options: ["On the top shelf in a sealed container to prevent odour transfer", "On the middle shelf, away from ready-to-eat foods", "On the bottom shelf below all other foods", "In a dedicated section — it does not matter which shelf if it is sealed"], correct: 2},
        {question: "A member of staff had diarrhoea and vomiting yesterday but feels better today. Can they handle food?", options: ["Yes — they feel well and are no longer presenting symptoms", "Yes — provided at least 24 hours have passed since the last episode", "No — they must be symptom-free for 48 hours before returning to food handling", "Only if they wear gloves and avoid direct contact with ready-to-eat food"], correct: 2},
        {question: "Which of the following is NOT one of the 14 major allergens under UK food law?", options: ["Lupin", "Sesame", "Garlic", "Sulphur dioxide"], correct: 2},
        {question: "A child with a nut allergy is showing hives and lip swelling after eating. What is your first action?", options: ["Administer an antihistamine from the first aid kit and monitor closely", "Call the parent immediately to confirm the allergy and seek guidance", "Shout for manager and first aider, stay with child, prepare to use EpiPen and call 999", "Move the child to a calm, quiet area and check their allergy care plan"], correct: 2},
        {question: "A parent verbally asks you to give their child antibiotics at lunchtime but has not completed a medication form. You should:", options: ["Administer the medication — parental verbal consent is legally sufficient", "Skip the dose to be safe and raise it with the parent at collection", "Contact the parent before the dose is due and ask them to complete a signed medication form", "Ask a senior colleague to make the decision and administer if they agree"], correct: 2},
        {question: "What is the correct order for cleaning a food preparation surface?", options: ["Disinfect first to kill bacteria, then clean with detergent to remove residue", "Wipe thoroughly with a damp antibacterial cloth and allow to air dry", "Clean with detergent, rinse, disinfect, allow to air dry", "Apply disinfectant spray, leave for the contact time, then wipe immediately"], correct: 2}
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
              score_percentage: scorePercent,
              questions_correct: correct,
              questions_total: window.currentQuizQuestions.length,
              passed,
              attempt_number: 1,
              completed_at: new Date().toISOString(),
              time_taken_seconds: durationMinutes ? durationMinutes * 60 : null,
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
