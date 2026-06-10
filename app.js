const TRANSLATIONS = {
  en: {
    site_title: "TransferChek | Engineering Transfer Strategy Engine",
    site_subtitle: "Engineering Transfer Advisory",
    nav_pricing: "Subscription Plans",
    nav_solution: "Features",
    nav_statcompass: "01. StatCompass",
    ad_eligibility_title: "01. StatCompass (Eligibility)",
    ad_eligibility_headline: "Don't miss hidden transfer opportunities matched to your current stats.",
    ad_eligibility_b1: "Instantly evaluates your transfer eligibility across 30+ top universities in 1 click.",
    ad_eligibility_b2: "Analyzes credit transfer limits and highlights risk warnings for international transcripts.",
    ad_eligibility_b3: "Recommends smart target alternatives to ensure you don't face rejection regret.",
    ad_eligibility_btn: "Analyze My Stats Now",
    ad_requirements_title: "02. ReqRadar (Prerequisite Search)",
    ad_requirements_headline: "No more digging through outdated PDFs or confusing university catalogs.",
    ad_requirements_b1: "Accesses canonical prerequisite lists for 349 engineering programs directly from our verified database.",
    ad_requirements_b2: "Displays specific grade thresholds (minimum C/B grades required) and lab requirements.",
    ad_requirements_b3: "Marks data confidence ratings (Verified / Needs Review) to prevent scheduling errors.",
    ad_requirements_btn: "Search Prerequisites Now",
    ad_roadmap_title: "03. Pathfinder (Roadmap Builder)",
    ad_roadmap_headline: "Consolidate multiple target schools' requirements into a single optimized plan.",
    ad_roadmap_b1: "Automatically resolves complex prerequisite dependency chains (e.g. Calculus -> Physics -> CS).",
    ad_roadmap_b2: "Maximizes transfer credit efficiency under strict semester unit limits (up to 4 lectures + labs).",
    ad_roadmap_b3: "Schedules buffer terms for writing recommendations, transcripts, and essay drafting.",
    ad_roadmap_btn: "Build My Roadmap Now",
    ad_essay_title: "04. EssayAI (AI Essay Strategist)",
    ad_essay_headline: "Calibrated with over 120,000+ successful engineering transfer essays.",
    ad_essay_b1: "Directs you through a 5-step interactive interview to extract your hidden achievements and personal fit.",
    ad_essay_b2: "Generates a bespoke 3-paragraph outline matching the target university's unique admissions rubric.",
    ad_essay_b3: "Provides real-time DOs & DON'Ts and high-quality writing examples for your target program.",
    ad_essay_btn: "Start Essay Strategy Now",
    nav_reqradar: "02. ReqRadar",
    nav_pathfinder: "03. Pathfinder",
    nav_essayai: "04. EssayAI",
    nav_feedback: "Feedback",
    btn_login: "Log in",
    btn_signup: "Sign up",
    btn_logout: "Log out",
    hero_eyebrow: "Data-driven transfer admissions platform",
    hero_title: "The Ultimate End-to-End Strategy Engine for Top-Tier Engineering Transfer",
    hero_lead: "From verifying program prerequisites and building course roadmaps to structuring winning essays—everything you need for a successful transfer in one premium platform.",
    hero_cta_demo: "View Strategy Engine",
    hero_cta_solution: "Explore Features",
    hero_proof_regret: "Regret Prevention",
    hero_proof_regret_desc: "Discover hidden transfer opportunities matchable to your current stats.",
    hero_proof_time: "Save Time",
    hero_proof_time_desc: "Cut down hundreds of hours navigating complex program prerequisites.",
    hero_proof_cost: "Optimize Tuition",
    hero_proof_cost_desc: "Focus only on required courses to prevent wasting time and money.",
    disclaimer_title: "📋 TransferChek Information Notice & Guidance",
    disclaimer_body: "TransferChek is a data integration and strategy tool designed to help you organize your transfer plans. Because university admissions requirements (GPA, course prerequisites, and exam scores) can change frequently at the discretion of each institution, please use this analysis as a reference guide. We recommend that you verify all final requirements directly on the official university website before submitting your application. TransferChek continues to perform data validation (latest audit completed in June 2026) to support your transfer journey.",
    coverage_eyebrow: "Covered universities",
    coverage_title: "Access prerequisite requirements for top engineering programs in one place.",
    coverage_desc: "Compare target program qualifications, course roadmaps, required exam scores, and requirement coverage ratings dynamically based on active database profiles.",
    feature_eyebrow: "Why TransferChek?",
    feature_heading: "The most expensive transfer mistake is taking course credits that do not transfer.",
    feature1_title: "Prerequisite Eligibility Analyzer",
    feature1_body: "Avoid missing out on target programs. Instantly cross-reference your GPA and completed courses against official requirements to check if you qualify for admissions application.",
    feature2_title: "Prerequisite Finder",
    feature2_body: "Skip the endless hunt through confusing university catalog sites and broken PDF guides. Search any school or engineering major to load canonical prerequisite lists and grade thresholds instantly.",
    feature3_title: "Optimized Roadmap Builder",
    feature3_body: "Perfect for early planning 1-2 years ahead. Build prerequisite-compliant, term-by-term course paths to protect your GPA and ensure every single credit transfers without wasting tuition.",
    feature4_title: "AI Essay Strategist",
    feature4_body: "Convert your personal projects, robotics club activities, or coding achievements into a cohesive academic story. Powered by pattern analysis of over 120,000 successful engineering transfer essays, generate an admissions-aligned, 3-paragraph strategy essay outline instantly.",
    demo_eyebrow: "Interactive product dashboard",
    demo_title: "Prerequisite Eligibility Analyzer",
    tab_eligibility: "Eligibility Diagnostics",
    tab_requirements: "Prerequisite Finder",
    tab_roadmap: "Roadmap Builder",
    tab_essay: "AI Essay Strategist",
    profile_title: "Academic Profile",
    profile_desc: "Input your current GPA, credits, residency status, and completed courses.",
    label_gpa: "Current college GPA",
    label_credits: "Completed Semester Credits",
    label_international: "International Applicant",
    label_english_type: "Exam Type",
    label_english_score: "Score",
    label_completed_courses: "Completed Core Courses",
    label_english_waiver: "English Exam Waiver (U.S. College / SAT / ACT)",
    target_title: "Select Targets",
    target_desc: "Search and select target programs (Free Plan: max 5 targets).",
    btn_check_eligibility: "Analyze Coverage",
    btn_recommend: "Recommended Targets",
    recommend_title: "Smart Target Recommendations",
    recommend_desc: "Programs with high coverage score based on your academic profile. Subject to official verification.",
    req_title: "Prerequisite Finder Search",
    req_desc: "Search top engineering programs to instantly load official prerequisite criteria.",
    label_search_school: "Search School or Major",
    roadmap_title: "Optimized Roadmap Builder Planner",
    roadmap_desc: "Generate a semester roadmap ensuring no wasted time, credits, or GPA.",
    label_admission_year: "Expected Admission Year",
    label_admission_term: "Expected Term",
    label_roadmap_target: "Target Program",
    btn_build_roadmap: "Generate Efficiency Roadmap",
    essay_title: "AI Essay Strategist Planner",
    essay_desc: "Input your key achievements to generate an admissions-focused essay blueprint.",
    label_essay_target: "Target University & Program",
    label_essay_activity: "Core Activities & Projects",
    btn_generate_essay: "Generate Essay Storyline Guide",
    btn_essay_example1: "📝 Example 1: CS Project (U-Mich)",
    btn_essay_example2: "⚙️ Example 2: ME Robotics (Georgia Tech)",
    essay_outline_title: "AI Essay Blueprint",
    essay_outline_desc: "Tailored paragraph structure connecting your activities to school goals.",
    essay_placeholder: "Enter your activities on the left and click generate to build your custom outline guide.",
    feedback_eyebrow: "Feedback",
    feedback_title: "Help improve TransferChek.",
    feedback_desc: "Your comments are anonymous and stored locally on your browser. Used for dashboard review purposes.",
    label_feedback_input: "Anonymous Feedback",
    btn_submit_feedback: "Submit Feedback",
    btn_inbox: "Owner Inbox",
    inbox_title: "Private Feedback Inbox",
    btn_clear: "Clear",
    feedback_empty_alert: "Please write feedback before submitting.",
    feedback_sending: "Sending feedback...",
    feedback_success: "Thank you! Your feedback has been sent successfully.",
    feedback_failed: "Feedback submission failed:",
    auth_note: "Demo accounts are simulated in this browser session. Official security configurations require secure database sync.",
    label_email: "Email",
    label_password: "Password",
    pricing_modal_title: "Subscription Plans",
    pricing_modal_upgrade: "Upgrade Your Access",
    pricing_modal_subtitle: "Select the best plan to optimize your engineering transfer path. Upgrade anytime.",
    pricing_free_beta_notice: "We are currently offering the service for free. Select the plan you want and use it immediately.",
    active_plan_label: "Your Current Plan:",
    tier_free_name: "Free Plan",
    tier_free_price: "0 KRW",
    tier_free_desc: "For initial exploration",
    tier_free_feature1: "Analyze up to 5 target programs in StatCompass",
    tier_free_feature2: "No access to ReqRadar, Pathfinder, or EssayAI",
    tier_pro_name: "Pro Plan",
    tier_pro_price: "9,900 KRW/mo",
    tier_pro_desc: "Unlimited feasibility analyzer",
    tier_pro_feature1: "Unlimited target evaluations in StatCompass (Service 1)",
    tier_pro_feature2: "No access to ReqRadar, Pathfinder, or EssayAI",
    tier_premium_name: "Premium Plan",
    tier_premium_price: "29,900 KRW/mo",
    tier_premium_desc: "Full transfer planner suite (Credits expire monthly)",
    tier_premium_feature1: "Unlimited access to StatCompass, ReqRadar, and Pathfinder",
    tier_premium_feature2: "5 EssayAI (Service 4) outline generations included (non-cumulative)",
    tier_essay_pass_name: "AI Essay 5-Pack",
    tier_essay_pass_price: "6,900 KRW",
    tier_essay_pass_desc: "Standalone addon package (Valid for 3 months)",
    tier_essay_pass_feature1: "5 uses of EssayAI (Service 4) essay strategizer",
    tier_essay_pass_feature2: "Must be used within 3 months of purchase",
    btn_choose_plan: "Subscribe",
    btn_free_action: "Select Free",
    btn_pro_action: "Subscribe Pro",
    btn_premium_action: "Subscribe Premium",
    btn_essay_pass_action: "Buy 5-Pack",
    essay_credits_remaining: "Remaining Credits:",
    btn_buy_credits: "Buy 5 Credits (6,900 KRW)",
    essay_out_of_credits: "You have no remaining essay credits. Please buy credits or subscribe to the Premium Plan to use EssayAI.",
    alert_essay_pass_purchased: "Successfully purchased AI Essay 5-Pack! 5 credits (valid for 3 months) have been added to your account.",
    display_fallback: "Official Unspecified",
    display_fallback_none: "None",
    display_credits_unspecified: "Credits Unspecified",
    display_gpa_unspecified: "GPA Unspecified",
    uc_notice_label: "UC Data Verification Recommended",
    uc_notice_desc: "UC requirements can vary. Verification against ASSIST.org and major-specific guidelines is recommended.",
    roadmap_multi_notice_title: "Planning for {count} Target Programs (Merged)",
    roadmap_multi_notice_desc: "Prerequisites combined from: ",
    roadmap_multi_warning: "Selecting more target schools may increase the required duration of coursework.",
    roadmap_targets_label: "Roadmap Target Programs (Max 7)",
    req_finder_placeholder_title: "Search Target Program",
    req_finder_placeholder_desc: "Type a university or major in the search box above to view prerequisite details, official notes, and minimum transfer criteria.",
    badge_verified_tag: "✓ Official Ref",
    badge_high_risk_tag: "⚠ High Risk",
    badge_needs_review_tag: "⚠ Needs Review",
    review_opt_desc: "Verify choice condition combinations",
    review_enroll_desc: "Verify enrollment/post-admission timeline",
    review_dept_desc: "Check departmental prerequisite courses",
    review_credit_desc: "Check minimum credits or transfer limits",
    review_course_desc: "Prerequisite course conditions",
    review_extra_desc: "Other validation items",
    choice_note: "Prerequisite choice original terms",
    review_reason: "Special check required",
    choice_label_pref: "Choose one:",
    review_count_alert: "Important: {count} items require verification",
    search_empty: "No results found",
    search_select_school_first: "Select school first",
    status_pass_review: "Eligible (Needs Review)",
    status_pass: "Eligible",
    status_fail: "High Risk",
    eng_review_reason: "Manually verify English exam terms",
    rec_course_detail: "Recommended",
    rec_choice_label: "Choose one (Recommended):",
    rec_choice_detail: "Recommended choice • Optional",
    rec_choice_raw_detail: "Recommended choice text • Optional",
    rec_other_detail: "Recommended or post-admission • Optional",
    tag_pass: "Covered",
    tag_fail: "Risk",
    roadmap_extra_summary: "Other required items: {count}",
    roadmap_extra_note: "These requirements are factored into analysis, not just recommendations.",
    roadmap_recommended_summary: "Recommended items: {count} • Optional",
    roadmap_review_summary: "Manual review required: {count}",
    no_targets_selected: "No target programs selected.",
    no_recs_found: "No active recommendations. Check common courses or risk factors.",
    no_mapped_items: "No mapping items",
    mapped_items_desc: "No additional items listed",
    no_review_items: "No review items",
    review_items_desc: "Mapping and classification complete",
    no_extra_info: "No additional info",
    extra_info_desc: "Decision based strictly on listed minimum conditions",
    opt_condition_desc: "Choose one of these choices",
    no_opt_conditions: "No choice conditions",
    opt_conditions_desc: "Straight prerequisites only",
    no_enroll_conditions: "No post-admission timeline rules",
    enroll_conditions_desc: "Prerequisites only",
    note_fallback: "No advisory note available",
    section_required_title: "Required Courses",
    section_recommended_title: "Recommended Courses",
    section_choices_title: "Choice Conditions",
    section_enroll_title: "Enrollment Timeline Conditions",
    section_review_title: "Requires Review",
    section_extra_title: "Additional Info",
    roadmap_tag_required: "Required",
    roadmap_tag_recommended: "Recommended",
    roadmap_tag_choice: "Choose one",
    roadmap_eng_first_term: "First semester fixed",
    roadmap_eng_second_term: "Second semester fixed",
    buffer_term_title: "Buffer Term",
    buffer_term_desc: "Review application, recommendations, essays",
    essay_alert_no_activity: "Please enter your core activities!",
    essay_loading_text: "AI is mapping your activities to target prerequisites. Please wait...",
    essay_generating_label: "Generating...",
    essay_generation_failed: "Outline generation failed",
    essay_error_occurred: "An error occurred:",
    essay_error_desc: "API rate limits or connectivity issues may apply. Please retry shortly.",
    essay_generate_btn_label: "Generate Essay Storyline Guide",
    req_search_placeholder: "Type school name or engineering major...",
    essay_activity_placeholder: "E.g., Led the community college robotics club, designed a database project in Java, tutored calculus students...",
    search_school_placeholder: "Search School",
    search_major_placeholder: "Search Major",
    gpa_ref: "GPA Reference: ",
    credits_ref: "Credits Reference: ",
    label_school: "School",
    label_major: "Major",
    alert_subscribed: "Successfully subscribed to the {plan}!",
    btn_clear_courses: "Clear All",
    auth_consent_text: "I agree to the Terms of Service and Privacy Policy.",
    auth_consent_link: "Read details",
    auth_consent_error: "You must agree to the Terms and Privacy Policy to register.",
    auth_email_exists: "An account with this email already exists on this browser.",
    auth_invalid_credentials: "Email or password does not match.",
    label_essay_question: "Essay Question / Prompt",
    essay_question_placeholder: "Paste the university essay question or prompt here...",
    label_essay_limit: "Word Limit / Length",
    essay_limit_placeholder: "E.g., 350 words, 500 words, 1 page...",
    essay_alert_no_question: "Please enter the essay question / prompt!",
    essay_style_guide_title: "University Transfer Essay Style Guide",
    tag_dos: "DOs (Key Strengths to Highlight)",
    tag_donts: "DON'Ts (Mistakes to Avoid)",
    tag_example: "High-Quality Writing Example",
    essay_info_banner_title: "Calibrated AI Knowledge Base & Legal Safeguards",
    essay_info_banner_body: "Our AI engine is calibrated with admissions criteria and transfer essay style guides for 30 top engineering schools (349 programs in our local database), leveraging data patterns from 120,000+ successful transfer essays. This is an educational brainstorming assistant; to comply with plagiarism and academic integrity policies, it does not draft essays for you and does not guarantee admissions.",
    essay_mode_direct: "Direct Input",
    essay_mode_interview: "AI Interview Guide",
    interview_start_desc: "Answer 5 tailored questions based on your target program to extract your key engineering experiences and fit.",
    btn_start_interview: "Start AI Interview",
    btn_prev: "Previous",
    btn_next: "Next",
    btn_complete: "Complete",
    interview_answer_placeholder: "Type your answer here...",
    interview_complete_msg: "AI Interview completed! Your answers have been successfully consolidated into the activity pool. Click 'Generate' to create your outline.",
    stat_universities: "universities",
    stat_programs: "engineering programs",
    stat_programs_small: "programs",
    stat_essays: "successful transfer essays calibrated",
    holistic_eval_title: "Holistic Review Institution Guide",
    holistic_eval_desc: "This institution does not enforce specific required prerequisite courses. Admissions are evaluated holistically based on overall academic achievements and potential. The absence of a prerequisite checklist is normal and is not a database error. Transfer applicants are highly encouraged to complete the most challenging math, science, and fundamental engineering courses available to demonstrate academic excellence.",
    btn_profile: "My Profile",
    profile_modal_title: "Account Dashboard",
    profile_modal_header: "My Profile",
    profile_modal_subtitle: "Manage your account settings, subscription tier, and security preferences.",
    profile_email_label: "Email Address",
    profile_plan_label: "Subscription Level",
    profile_essay_credits_label: "EssayAI Credits",
    btn_upgrade_short: "Upgrade",
    btn_topup_short: "Buy Credits",
    profile_security_header: "Security Settings",
    label_current_password: "Current Password",
    label_new_password: "New Password",
    btn_update_password: "Update Password",
    locked_card_title: "Pro / Premium Plan Only",
    locked_card_desc: "6th target and beyond require Pro Plan or higher for evaluation.",
    btn_upgrade_now: "Upgrade Now",
    password_change_success: "Password updated successfully!",
    password_change_invalid: "Current password does not match.",
    statcompass_limit_help: "Free Plan maintains a cumulative history limit of 5 analyzed schools. Upgrade to Pro/Premium for unlimited analyses.",
    btn_toggle_recommended: "Toggle Recommended Courses",
    label_birthdate: "Birthdate",
    auth_underage_error: "You must be 14 or older (13 for US/other) to register.",
    auth_birthdate_required: "Please enter your birthdate.",
    payment_consent_minor_text: "I confirm that I am of legal age or have obtained consent from my legal guardian (parent) for this payment. (Minor consent required)",
    payment_consent_disclaimer_text: "I agree that TransferChek is a reference tool that does not guarantee admission. I understand that I must verify requirements on official university websites, and all university names are properties of their respective trademark owners.",
    payment_consent_error: "You must agree to all legal consents (Minor check, Disclaimer) to proceed with payment.",
    payment_sdk_error: "Payment module is loading. Please try again in a moment.",
    payment_failed: "Payment failed: {error}",
  },
  ko: {
    site_title: "TransferChek | 미국 공대 편입 준비 플랫폼",
    site_subtitle: "미국 공대 편입 전문 컨설팅",
    nav_pricing: "구독 요금 플랜",
    nav_solution: "주요 서비스",
    nav_statcompass: "01. 지원 가능 판단",
    ad_eligibility_title: "01. 지원 가능 판단 (지원자격 진단)",
    ad_eligibility_headline: "현재 내 성적과 수강 과목에 딱 맞는 숨겨진 명문대 편입 기회를 놓치지 마세요.",
    ad_eligibility_b1: "클릭 한 번으로 30개 명문대, 349개 전공의 편입 지원 자격을 즉시 진단합니다.",
    ad_eligibility_b2: "이수 학점 한도 초과 리스크 및 유학생 기준 영어 성적 장벽을 자동으로 체크합니다.",
    ad_eligibility_b3: "합격 안정성을 높일 수 있는 최적의 대체 추천 대학 풀을 AI가 탐색해 드립니다.",
    ad_eligibility_btn: "지원 자격 진단해보기",
    ad_requirements_title: "02. 학교 학과별 편입 요건 파악 (선수과목 검색)",
    ad_requirements_headline: "더 이상 대학 홈페이지나 깨진 PDF 가이드를 헤매지 마세요.",
    ad_requirements_b1: "검증된 공식 데이터베이스에서 349개 공학 프로그램의 필수 과목 리스트를 즉시 로드합니다.",
    ad_requirements_b2: "과목별 이수 성적 기준(최소 C 또는 B 이상) 및 실험 과목 필수 여부를 명확히 표기합니다.",
    ad_requirements_b3: "데이터의 신뢰도 등급(Verified / Needs Review)을 표시하여 잘못된 정보 수집 리스크를 차단합니다.",
    ad_requirements_btn: "필수 선수과목 검색하기",
    ad_roadmap_title: "03. 수강 로드맵 생성 (수강 로드맵 빌더)",
    ad_roadmap_headline: "여러 대학의 서로 다른 요구사항을 만족하는 단 하나의 최적화 수강 계획.",
    ad_roadmap_b1: "복잡한 선수과목 순서 의존성(미적분학 -> 물리 -> 전공 기초)을 고려하여 일정을 자동 자동 배치합니다.",
    ad_roadmap_b2: "학기별 이수 한도(최대 4개 강의 + 실험) 내에서 수강 효율을 극대화합니다.",
    ad_roadmap_b3: "추천서 준비, 에세이 초안 작성 및 서류 제출을 위한 최적의 버퍼 학기를 안내합니다.",
    ad_roadmap_btn: "수강 로드맵 짜보기",
    ad_essay_title: "04. EssayAI (에세이 전략가)",
    ad_essay_headline: "120,000건 이상의 명문 공대 합격 에세이 패턴 분석 데이터 탑재.",
    ad_essay_b1: "5단계의 정교한 대화형 인터뷰를 통해 본인이 잊고 있었던 공학적 성과와 활동을 모두 이끌어냅니다.",
    ad_essay_b2: "목표 대학의 에세이 질문과 인재상에 완벽히 정렬된 3문단 맞춤형 설계도를 실시간 제공합니다.",
    ad_essay_b3: "문단별 서술 요령(DOs & DON'Ts) 및 실제 합격생 수준의 고품질 우수 영문 서술 예시를 열람할 수 있습니다.",
    ad_essay_btn: "에세이 가이드 생성하기",
    nav_reqradar: "02. 학교 학과별 편입 요건 파악",
    nav_pathfinder: "03. 수강 로드맵 생성",
    nav_essayai: "04. EssayAI",
    nav_feedback: "피드백",
    btn_login: "로그인",
    btn_signup: "회원가입",
    btn_logout: "로그아웃",
    hero_eyebrow: "데이터 기반 공대 편입 지원 자격 분석 플랫폼",
    hero_title: "미국 명문 공대 편입을 위한 정밀 엔드투엔드 전략 엔진",
    hero_lead: "요건 충족 확인부터 수강 로드맵, 합격 에세이까지 성공적인 공대 편입에 필요한 모든 것을 프리미엄 플랫폼에서 제공합니다.",
    hero_cta_demo: "전략 엔진 시작하기",
    hero_cta_solution: "서비스 특장점 보기",
    hero_proof_regret: "후회 방지",
    hero_proof_regret_desc: "내 현재 스펙으로 지원 가능한 대학 범위를 빠짐없이 발굴합니다.",
    hero_proof_time: "시간 대폭 절약",
    hero_proof_time_desc: "학과마다 복잡하고 다른 선수과목 요건 분석 시간을 단축합니다.",
    hero_proof_cost: "수강료 및 학점 최적화",
    hero_proof_cost_desc: "편입에 직접 인정되는 과목들만 골라 들어 시간과 돈 낭비를 방지합니다.",
    disclaimer_title: "📋 TransferChek 학업 정보 안내 및 고지",
    disclaimer_body: "TransferChek은 미국 공대 편입 요강을 통합 정리하여 효율적인 계획 수립을 돕는 데이터 분석 도구입니다. 각 대학의 최소 GPA, 필수 선수과목, 어학 성적 등 입학 조건은 학교 측 정책에 따라 수시로 변동될 수 있습니다. 본 플랫폼의 진단 결과와 로드맵을 참고용 가이드로 활용하시되, 최종 지원서 접수 전 각 대학 공식 홈페이지 정보를 최종 확인하시는 것을 권장합니다. TransferChek는 신뢰도 높은 서비스 제공을 위해 상시 데이터 검증(2026년 6월 최종 검사 완료)을 성실히 수행하고 있습니다.",
    coverage_eyebrow: "분석 지원 대학",
    coverage_title: "명문 공대들의 편입 선수 과목 요건을 한자리에서 비교 확인하세요.",
    coverage_desc: "데이터베이스에 포함된 각 대학/학과별 요건 커버리지 점수, 수강 로드맵, 필요 영어 시험 점수 등을 입체적으로 비교 분석합니다.",
    feature_eyebrow: "왜 TransferChek인가?",
    feature_heading: "편입 준비에서 가장 치명적인 실수는, 편입에 인정되지 않는 과목을 수강하는 것입니다.",
    feature1_title: "지원 자격 충족 진단기",
    feature1_body: "내 스펙으로 지원 가능한 대학을 즉시 발굴하세요. '이 학교도 이수 요건을 채웠었구나!'라는 후회가 남지 않도록, 현재 GPA와 이수 과목을 공식 대학 요강과 대조하여 충족 자격을 진단해 줍니다.",
    feature2_title: "선수과목 통합 검색기",
    feature2_body: "대학 홈페이지를 직접 돌아다니며 요강을 해석하는 삽질을 멈추세요. 대학과 전공만 입력하면 공식 이수 과목, 과목별 최소 성적 기준, 어학 요건까지 공식 대시보드에서 한눈에 보여줍니다.",
    feature3_title: "최적화 수강 로드맵 빌더",
    feature3_body: "편입 준비생과 1-2년 후 편입을 준비할 학생 모두를 위한 최적의 수강 설계도. 불필요한 과목을 수강하여 시간, GPA, 비싼 등록금을 낭비하지 않도록, 선수과목 연결고리를 고려한 가장 효율적인 학기별 로드맵을 자동으로 빌드해 줍니다.",
    feature4_title: "AI 에세이 전략가",
    feature4_body: "교내 동아리, 코딩 프로젝트, 로봇 공학 활동 등의 경험을 명문대 편입 양식에 맞추어 하나의 공학적 스토리로 연결합니다. 12만 건 이상의 실제 명문 공과대학 합격 에세이 패턴 분석 데이터를 바탕으로, 각 대학의 채점 기준과 에세이 스타일에 맞춤화된 3문단 전략 에세이 설계도를 즉시 생성합니다.",
    demo_eyebrow: "대화형 제품 대시보드",
    demo_title: "지원 자격 충족 진단기",
    tab_eligibility: "지원 자격 충족 진단기",
    tab_requirements: "선수과목 통합 검색기",
    tab_roadmap: "최적화 수강 로드맵 빌더",
    tab_essay: "AI 에세이 전략가",
    profile_title: "나의 학업 프로필 입력",
    profile_desc: "현재까지의 GPA, 이수 학점, 유학생 여부 및 이수한 핵심 과목들을 체크하세요.",
    label_gpa: "현재 대학 GPA",
    label_credits: "이수 완료한 학점 (Credits)",
    label_international: "국제 학생 (유학생)",
    label_english_type: "영어 시험 종류",
    label_english_score: "획득 점수",
    label_completed_courses: "이미 수강 완료한 핵심 과목 목록",
    label_english_waiver: "영어 시험 면제 대상 (미국 대학 이수 / SAT 등)",
    target_title: "목표 대학 및 학과 선택",
    target_desc: "지원하는 타겟 학교를 검색해 추가하세요. (무료 플랜: 최대 5개 선택)",
    btn_check_eligibility: "전략 리스크 분석",
    btn_recommend: "추천 타겟 대학 보기",
    recommend_title: "프로필 기반 스마트 추천 대학",
    recommend_desc: "현재까지 입력한 이수 과목 기준으로 가장 자격 요건 충족률(Coverage)이 높은 대학 목록입니다. 지원 전 최종 대조는 필수입니다.",
    req_title: "선수과목 통합 검색기",
    req_desc: "대학과 학과를 검색하면 필수 선수과목 및 검증된 편입 요건 명세가 즉시 로드됩니다.",
    label_search_school: "대학 또는 학과 이름 검색",
    roadmap_title: "최적화 수강 로드맵 빌더 플래너",
    roadmap_desc: "낙제 과목이나 중복 수강 없이, 목표 학기 내 편입 자격을 갖출 수 있는 학기별 추천 선수를 즉시 설계합니다.",
    label_admission_year: "편입 목표 입학 연도",
    label_admission_term: "편입 목표 학기",
    label_roadmap_target: "설계 대상 목표 대학/학과",
    btn_build_roadmap: "최적화 수강 로드맵 빌드",
    essay_title: "AI 에세이 전략가 플래너",
    essay_desc: "본인이 진행한 프로젝트나 교내 활동을 입력하여 전공 적합성에 최적화된 에세이 골격을 만듭니다.",
    label_essay_target: "에세이 대상 목표 대학교 및 전공",
    label_essay_activity: "핵심 활동 및 프로젝트 내용",
    btn_generate_essay: "에세이 문단 가이드라인 생성",
    btn_essay_example1: "📝 예시 1: 컴공 프로젝트 (U-Mich)",
    btn_essay_example2: "⚙️ 예시 2: 기계공 로보틱스 (Georgia Tech)",
    essay_outline_title: "AI 에세이 전략 가이드",
    essay_outline_desc: "작성자의 활동 경험을 전공 요구 인재상과 논리적으로 연결한 3문단 가이드라인입니다.",
    essay_placeholder: "왼쪽에서 활동 내용을 입력하거나 AI 인터뷰에 답변한 뒤 가이드 생성 버튼을 클릭하세요.",
    feedback_eyebrow: "피드백 보내기",
    feedback_title: "서비스 개선에 동참해 주세요.",
    feedback_desc: "익명으로 작성되며 사용자 브라우저에만 기록됩니다. 관리자가 주기적으로 확인하여 요강 데이터 정정에 반영합니다.",
    label_feedback_input: "의견 입력란",
    btn_submit_feedback: "피드백 제출",
    btn_inbox: "수신된 관리자 보관함",
    inbox_title: "익명 피드백 보관함 (로컬)",
    btn_clear: "모두 지우기",
    feedback_empty_alert: "피드백 내용을 입력해 주세요.",
    feedback_sending: "피드백을 전송하는 중입니다...",
    feedback_success: "감사합니다! 피드백이 정상적으로 전송되었습니다.",
    feedback_failed: "피드백 전송에 실패했습니다:",
    auth_note: "데모용 계정 정보는 브라우저 로컬 저장소에 보관됩니다. 상용 제품 출시 시에는 안전한 DB 동기화가 적용됩니다.",
    label_email: "이메일 주소",
    label_password: "비밀번호",
    pricing_modal_title: "구독 멤버십 플랜",
    pricing_modal_upgrade: "멤버십 플랜 업그레이드",
    pricing_modal_subtitle: "성공적인 공대 편입 전략 수립을 위한 최적의 플랜을 선택하세요. 언제든 변경 가능합니다.",
    pricing_free_beta_notice: "현재 무료로 제공 중입니다. 원하시는 모델을 선택하신 후 바로 사용하시면 됩니다.",
    active_plan_label: "현재 이용 중인 플랜:",
    tier_free_name: "무료 플랜 (Free Plan)",
    tier_free_price: "0원",
    tier_free_desc: "기본 기능 탐색용",
    tier_free_feature1: "지원 가능 판단 기능 내 대학 분석 최대 5개 한도 제공",
    tier_free_feature2: "학교 학과별 편입 요건 파악, 수강 로드맵 생성, AI 에세이 전략가 모든 기능 접근 제한",
    tier_pro_name: "Pro 플랜",
    tier_pro_price: "월 9,900원",
    tier_pro_desc: "무제한 지원 가능 판단",
    tier_pro_feature1: "지원 가능 판단 기능 내 목표 대학 무제한 분석 지원",
    tier_pro_feature2: "학교 학과별 편입 요건 파악, 수강 로드맵 생성, AI 에세이 전략가 모든 기능 접근 제한",
    tier_premium_name: "Premium 플랜",
    tier_premium_price: "29,900원 / 월",
    tier_premium_desc: "통합 편입 계획 패키지 (당월 소멸)",
    tier_premium_feature1: "지원 가능 판단, 학교 학과별 편입 요건 파악, 수강 로드맵 생성 무제한 제공",
    tier_premium_feature2: "AI 에세이 전략가(EssayAI) 5회 이용권 포함 (결제 월 내 사용 필수)",
    tier_essay_pass_name: "AI 에세이 5회권",
    tier_essay_pass_price: "6,900원",
    tier_essay_pass_desc: "에세이 5회 이용권 (3개월 유효)",
    tier_essay_pass_feature1: "AI 에세이 전략가(EssayAI) 5회 이용권 제공",
    tier_essay_pass_feature2: "3개월(90일) 이내 사용 필수 (어떤 플랜에서도 추가 구매 가능)",
    btn_choose_plan: "구독하기",
    btn_free_action: "무료 선택",
    btn_pro_action: "Pro 구독하기",
    btn_premium_action: "Premium 구독하기",
    btn_essay_pass_action: "5회권 구매",
    essay_credits_remaining: "남은 이용 횟수:",
    btn_buy_credits: "5회 이용권 구매 (6,900원)",
    essay_out_of_credits: "남은 에세이 이용 횟수가 없습니다. 5회 이용권을 구매하거나 Premium 플랜을 구독해 주세요.",
    alert_essay_pass_purchased: "AI 에세이 5회 이용권을 성공적으로 구매하였습니다! 5개의 크레딧(3개월 유효)이 추가되었습니다.",
    display_fallback: "공식 미명시",
    display_fallback_none: "없음",
    display_credits_unspecified: "이수 학점 미명시",
    display_gpa_unspecified: "최소 GPA 미명시",
    uc_notice_label: "UC 데이터 개별 확인 권장",
    uc_notice_desc: "UC 계열은 캠퍼스/학과/ASSIST 기준에 따라 조건이 달라질 수 있어 현재 앱에서는 확인 필요 대상으로 표시합니다. 최종 판정 전 학과별 공식 자료와 ASSIST 대조가 필요합니다.",
    roadmap_multi_notice_title: "선택한 {count}개 목표 전공 공동 설계 중 (병합됨)",
    roadmap_multi_notice_desc: "병합된 대상 대학: ",
    roadmap_multi_warning: "목표 학교를 여러개 선택할 수록 수강 기간이 오래 걸릴 수 있습니다.",
    roadmap_targets_label: "로드맵 설계 대상 목표 대학 (최대 7개)",
    req_finder_placeholder_title: "타겟 대학 및 학과 검색",
    req_finder_placeholder_desc: "위 검색창에 대학 또는 학과명을 입력하시면 필요한 필수/권장 선수과목 정보와 공식 가이드를 이곳에서 상세히 볼 수 있습니다.",
    badge_verified_tag: "✓ 공식 요강 기준",
    badge_high_risk_tag: "⚠ High Risk (검증 필요)",
    badge_needs_review_tag: "⚠ Needs Review (확인 필요)",
    review_opt_desc: "선택 조건에서 어떤 과목 조합이 인정되는지 확인",
    review_enroll_desc: "등록 후/입학 후 조건인지 확인",
    review_dept_desc: "해당 학과의 별도 선수과목 표가 있는지 확인",
    review_credit_desc: "최소 이수 학점 또는 이전 가능 학점 제한 확인",
    review_course_desc: "과목 조건",
    review_extra_desc: "추가 확인 항목",
    choice_note: "선택 조건 원문",
    review_reason: "별도 확인 항목",
    choice_label_pref: "택1:",
    review_count_alert: "꼭 확인해주세요: 원문 확인 필요 {count}개",
    search_empty: "검색 결과 없음",
    search_select_school_first: "학교를 먼저 선택하세요",
    status_pass_review: "추천 검토 · 확인 필요",
    status_pass: "추천 검토",
    status_fail: "리스크 높음",
    eng_review_reason: "영어 점수 원문 별도 확인",
    rec_course_detail: "권장",
    rec_choice_label: "택1 권장:",
    rec_choice_detail: "권장 선택 조건 · 필수 아님",
    rec_choice_raw_detail: "권장 선택 조건 원문 · 필수 아님",
    rec_other_detail: "권장 또는 추후 확인 · 필수 아님",
    tag_pass: "커버됨",
    tag_fail: "리스크",
    roadmap_extra_summary: "나머지 필수 요건 {count}개",
    roadmap_extra_note: "아래 항목은 권장이 아니라 requirement coverage와 리스크 분석에 포함되는 요건입니다.",
    roadmap_recommended_summary: "권장 요건 {count}개 · 필수 아님",
    roadmap_review_summary: "별도 확인 필요 {count}개",
    no_targets_selected: "선택한 목표 대학/학과가 없습니다.",
    no_recs_found: "현재 추가 추천 없음. 공통 과목을 더 체크하거나 리스크 항목을 검토하세요.",
    no_mapped_items: "매핑 항목 없음",
    mapped_items_desc: "추가 표시 항목 없음",
    no_review_items: "확인 필요 항목 없음",
    review_items_desc: "자동 매핑 또는 분류 완료",
    no_extra_info: "추가 참고 정보 없음",
    extra_info_desc: "명시된 최소 조건 중심으로 판정",
    opt_condition_desc: "둘 중 하나를 택하는 선택 조건",
    no_opt_conditions: "택1 조건 없음",
    opt_conditions_desc: "공통 필수 과목으로 직접 판정",
    no_enroll_conditions: "분리된 등록/추후 조건 없음",
    enroll_conditions_desc: "지원 전 조건 중심",
    note_fallback: "검증 노트 없음",
    section_required_title: "필수 과목",
    section_recommended_title: "권장 과목 (필수 아님)",
    section_choices_title: "선택 조건",
    section_enroll_title: "등록/추후 조건",
    section_review_title: "별도 확인 필요",
    section_extra_title: "추가 정보",
    roadmap_tag_required: "필수과목",
    roadmap_tag_recommended: "권장과목",
    roadmap_tag_choice: "택1 필수",
    roadmap_eng_first_term: "첫 번째 학기 고정",
    roadmap_eng_second_term: "두 번째 학기 고정",
    buffer_term_title: "Buffer term",
    buffer_term_desc: "지원서, 추천서, 에세이 점검",
    essay_alert_no_activity: "주요 교내외 활동 내용을 입력해 주세요!",
    essay_loading_text: "AI가 목표 대학의 편입 요건에 맞추어 에세이 아웃라인을 설계하고 있습니다. 잠시만 기다려 주세요...",
    essay_generating_label: "생성 중...",
    essay_generation_failed: "아웃라인 생성 실패",
    essay_error_occurred: "오류가 발생했습니다:",
    essay_error_desc: "API 할당량 초과이거나 서버 연결 상태가 불안정할 수 있습니다. 잠시 후 다시 시도해 주세요.",
    essay_generate_btn_label: "에세이 문단 가이드라인 생성",
    req_search_placeholder: "대학 이름 또는 공학 전공을 입력하세요...",
    essay_activity_placeholder: "예: 커뮤니티 칼리지 로봇 동아리 회장 역임, 자바로 데이터베이스 프로젝트 설계, 미적분 튜터 활동 등...",
    search_school_placeholder: "학교 검색",
    search_major_placeholder: "전공 검색",
    gpa_ref: "GPA 요구사항: ",
    credits_ref: "학점 요구사항: ",
    label_school: "학교",
    label_major: "전공",
    alert_subscribed: "성공적으로 {plan} 요금제를 구독했습니다!",
    btn_clear_courses: "모두 지우기",
    auth_consent_text: "서비스 이용약관 및 개인정보 처리방침에 동의합니다.",
    auth_consent_link: "자세히 보기",
    auth_consent_error: "회원가입을 하려면 서비스 이용약관 및 개인정보 처리방침에 동의해야 합니다.",
    auth_email_exists: "이미 이 이메일로 가입된 계정이 존재합니다.",
    auth_invalid_credentials: "이메일 또는 비밀번호가 올바르지 않습니다.",
    label_essay_question: "에세이 질문 / 프롬프트",
    essay_question_placeholder: "여기에 대학 공식 에세이 질문이나 프롬프트를 붙여넣으세요...",
    label_essay_limit: "글자 수 또는 분량 제한",
    essay_limit_placeholder: "예: 350단어, 500단어, 1페이지 등...",
    essay_alert_no_question: "에세이 질문 / 프롬프트를 입력해 주세요!",
    essay_style_guide_title: "해당 대학 공대 편입 에세이 심사 기준 & 스타일 가이드",
    tag_dos: "추천 서술 방향 (DOs)",
    tag_donts: "작성 시 금기 사항 (DON'Ts)",
    tag_example: "우수 영문 서술 예시",
    essay_info_banner_title: "AI 에세이 학습 상태 및 법적 안내",
    essay_info_banner_body: "본 AI 엔진은 30개 명문 대학(349개 공대 전공)의 편입 요건뿐만 아니라, 120,000건 이상의 실제 명문 공대 합격 에세이 패턴 분석 데이터에 기반하여 정교하게 칼리브레이션되어 있습니다. 입력하신 학생 활동을 최적의 뼈대로 엮는 브레인스토밍 가이드를 제공하며, 대학의 학업적 성실성 원칙에 의거하여 대필은 제공하지 않으며 입학을 보장하지 않습니다.",
    essay_mode_direct: "직접 입력",
    essay_mode_interview: "AI 인터뷰 가이드",
    interview_start_desc: "목표 대학 및 학과에 특화된 5가지 질문에 답변하며 본인의 핵심 공학 활동과 성향을 빠짐없이 이끌어내세요.",
    btn_start_interview: "AI 인터뷰 시작",
    btn_prev: "이전",
    btn_next: "다음",
    btn_complete: "인터뷰 완료",
    interview_answer_placeholder: "여기에 답변을 입력하세요...",
    interview_complete_msg: "AI 인터뷰가 완료되었습니다! 답변하신 내용들이 활동 항목으로 정제되었습니다. 하단의 '에세이 가이드 생성' 버튼을 클릭하여 맞춤 가이드를 확인하세요.",
    stat_universities: "연계 대학",
    stat_programs: "공학 학과",
    stat_programs_small: "개 전공",
    stat_essays: "합격 에세이 패턴 분석 완료",
    holistic_eval_title: "종합 평가(Holistic Review) 대학 안내",
    holistic_eval_desc: "본 대학교는 공식적인 필수 선이수 과목 지정이 없으며, 지원자의 전반적인 학업 성취도 및 역량을 종합적으로 평가(Holistic Review)합니다. 따라서 필수 과목 체크리스트가 표시되지 않는 것은 정보 누락이나 데이터 오류가 아닌 실제 대학의 편입 요강에 따른 정상적인 상태입니다. 이전 대학에서 본인이 이수할 수 있는 가장 높은 수준의 물리, 수학 및 전공 기초 과목을 적극적으로 수강하여 학업적 성실성과 도전 정신을 입증하는 것이 합격률을 높이는 최선의 방법입니다.",
    btn_profile: "내 프로필",
    profile_modal_title: "계정 대시보드",
    profile_modal_header: "내 프로필",
    profile_modal_subtitle: "계정 설정, 구독 등급 및 비밀번호 등 보안 설정을 관리하세요.",
    profile_email_label: "이메일 주소",
    profile_plan_label: "이용 중인 플랜",
    profile_essay_credits_label: "에세이 남은 횟수",
    btn_upgrade_short: "업그레이드",
    btn_topup_short: "이용권 구매",
    profile_security_header: "보안 설정",
    label_current_password: "현재 비밀번호",
    label_new_password: "새로운 비밀번호",
    btn_update_password: "비밀번호 변경",
    locked_card_title: "Pro / Premium 플랜 전용",
    locked_card_desc: "6번째 대학부터는 Pro 플랜 이상에서 분석 가능합니다.",
    btn_upgrade_now: "지금 업그레이드",
    password_change_success: "비밀번호가 성공적으로 변경되었습니다!",
    password_change_invalid: "현재 비밀번호가 올바르지 않습니다.",
    statcompass_limit_help: "무료 플랜은 분석 가능한 대학이 누적 최대 5개로 제한됩니다. 무제한 분석을 원하시면 Pro/Premium 플랜으로 업그레이드하세요.",
    btn_toggle_recommended: "추천 과목 보기/숨기기",
    label_birthdate: "생년월일 (Birthdate)",
    auth_underage_error: "만 14세 미만(미국/기타 국적은 만 13세 미만)은 회원가입이 제한됩니다.",
    auth_birthdate_required: "생년월일을 입력해 주세요.",
    payment_consent_minor_text: "[필수] 본인은 성인이거나 법정대리인(부모)의 결제 동의를 받았음을 확인합니다. (미성년자 결제 시 부모 동의 필수)",
    payment_consent_disclaimer_text: "[필수] TransferChek의 매칭 결과는 참고용 가이드이며 입학을 보장하지 않으며, 대학 정보의 공식 요건을 입학처 웹사이트를 통해 직접 재확인해야 하고, 모든 대학명은 개별 상표권에 귀속됨에 동의합니다.",
    payment_consent_error: "결제를 진행하려면 모든 법적 고지(미성년자 동의, 면책 동의)에 동의하셔야 합니다.",
    payment_sdk_error: "결제 모듈이 아직 로드 중입니다. 잠시 후 다시 시도해 주세요.",
    payment_failed: "결제에 실패하였습니다: {error}",
  },
  zh: {
    site_title: "TransferChek | 工程学院转学策略分析平台",
    site_subtitle: "工程学院转学专业咨询",
    nav_pricing: "订阅会员方案",
    nav_solution: "主要服务",
    nav_statcompass: "01. StatCompass",
    ad_eligibility_title: "01. StatCompass (转学可行性分析)",
    ad_eligibility_headline: "根据您当前的成绩与已修课程，全面发掘您可能忽略的顶尖转学机会。",
    ad_eligibility_b1: "一键瞬间比对 30 所全美名校、349 个工程专业的官方录取准入门槛。",
    ad_eligibility_b2: "精准诊断已修学分限制以及国际生语言成绩要求，提前规避申请风险。",
    ad_eligibility_b3: "基于数据智能匹配，为您推荐更具成功率的替代性保底与冲刺名校方案。",
    ad_eligibility_btn: "立即评估转学资格",
    ad_requirements_title: "02. ReqRadar (先修课程搜索引擎)",
    ad_requirements_headline: "告别冗长复杂的官网指引与陈旧失效的 PDF 手册。",
    ad_requirements_b1: "汇聚 349 个工程专业的官方先修要求，专业名称与课号一目了然。",
    ad_requirements_b2: "明示各科最低成绩门槛（如最低要求 C 或 B）以及实验课联合修读要求。",
    ad_requirements_b3: "标注数据可信度评级（Verified / Needs Review），防止因信息滞后导致选课失误。",
    ad_requirements_btn: "立即检索先修课要求",
    ad_roadmap_title: "03. Pathfinder (最优选课路线规划)",
    ad_roadmap_headline: "将多所目标院校的先修课门槛，融汇为一套完美的学期修读路线图。",
    ad_roadmap_b1: "自动解析前置课程依赖链（如微积分 -> 物理 -> 工程核心课），防止课程顺序错乱。",
    ad_roadmap_b2: "在每学期严格学分限制（最多4门主课+实验）下，最大化转学分效率。",
    ad_roadmap_b3: "为材料递交、教授推荐信沟通及文书打磨预留最佳的缓冲学期时间。",
    ad_roadmap_btn: "开始规划学习路线",
    ad_essay_title: "04. EssayAI (转学文书策略家)",
    ad_essay_headline: "融合 120,000+ 篇顶尖工程学院成功转学文书的套路与规律。",
    ad_essay_b1: "通过 5 步互动面试，全面唤醒并提炼您在专业实践及课外活动中的潜在闪光点。",
    ad_essay_b2: "针对目标院校文书题目与招生官偏好，定制阻碍其评审标准的 3 段式叙事蓝图。",
    ad_essay_b3: "提供逐段的写作黄金法则（DOs & DON'Ts）以及可供参考的高水平英文范例。",
    ad_essay_btn: "立即定制文书指南",
    nav_reqradar: "02. ReqRadar",
    nav_pathfinder: "03. Pathfinder",
    nav_essayai: "04. EssayAI",
    nav_feedback: "反馈意见",
    btn_login: "登录",
    btn_signup: "注册",
    btn_logout: "登出",
    hero_eyebrow: "数据驱动型工程学院转学申请分析平台",
    hero_title: "全美顶尖工科转学一站式端到端决策引擎",
    hero_lead: "从比对专业先修课程、规划学期选课路线，到定制冲刺名校的文书策略——成功转学所需的一切，尽在一个高端平台。",
    hero_cta_demo: "启动策略分析",
    hero_cta_solution: "了解服务特色",
    hero_proof_regret: "避免遗憾",
    hero_proof_regret_desc: "根据您当前的成绩与课程，全面逆向匹配您可能忽略的顶尖工程学院转学机会。",
    hero_proof_time: "大幅节省时间",
    hero_proof_time_desc: "无需耗费数百小时去研究各大学繁琐而截然不同的先修课规则。",
    hero_proof_cost: "优化课程学分",
    hero_proof_cost_desc: "精准定位可转学分的先修课程，防止浪费高昂的学费和宝贵的学期时间。",
    disclaimer_title: "📋 TransferChek 学业信息指南与特别说明",
    disclaimer_body: "TransferChek 是一款旨在整合美国工科转学要求并帮助您制定高效规划的数据分析工具。各大学的最低 GPA、先修课程和语言要求等录取条件可能会根据校方政策随时变动。请将本平台的评估结果 and 路线图作为参考指南，并建议在正式提交申请前与目标大学官方招生网站的信息进行最终核对。TransferChek 持续进行数据验证（最新审核完成于 2026 年 6 月），以全力支持您的转学旅程。",
    coverage_eyebrow: "已覆盖大学",
    coverage_title: "一站式比对顶尖工程学院的先修课程和录取标准。",
    coverage_desc: "动态对比目标专业的先修课程匹配度、学期路线图、语言成绩门槛，基于本地最新数据库提供全面覆盖率评分。",
    feature_eyebrow: "为什么选择 TransferChek？",
    feature_heading: "转学申请中最昂贵的错误，是修读了无法转为目标大学学分的无效课程。",
    feature1_title: "转学先修资格评估仪",
    feature1_body: "避免遗漏申请机会。通过系统精准比对已修学分与GPA是否满足各大学官方先修课资格线，助您快速判定是否具备申请资格。",
    feature2_title: "先修课程搜索引擎",
    feature2_body: "无需再逐个翻阅繁琐的大学官网和失效的 PDF 指南。只需搜索目标专业，即可瞬间载入官方公布的先修课程列表和最低成绩要求。",
    feature3_title: "最优选课路线规划",
    feature3_body: "专为计划在1-2年后转学的学生量身定制。自动构建符合先修关系的学期选课计划，保护您的 GPA，确保每学分均能成功转换，杜绝浪费学费。",
    feature4_title: "AI转学文书策略家",
    feature4_body: "将您的个人项目、机器人社团或编程成果转化为富有逻辑的学术故事。基于对 120,000+ 篇成功工程转学文书的模式分析，瞬间生成与名校录取偏好契合的3段式策略性文书大纲指南。",
    demo_eyebrow: "交互式产品仪表盘",
    demo_title: "转学先修资格评估仪",
    tab_eligibility: "转学先修资格评估仪",
    tab_requirements: "先修课程搜索引擎",
    tab_roadmap: "最优选课路线规划",
    tab_essay: "AI转学文书策略家",
    profile_title: "输入您的学术档案",
    profile_desc: "填写当前的 GPA、已完成学分、是否为国际生，并勾选已修读的课程。",
    label_gpa: "当前大学 GPA",
    label_credits: "已修满学分 (Credits)",
    label_international: "国际申请生",
    label_english_type: "语言考试类型",
    label_english_score: "获得分数",
    label_completed_courses: "已修完的核心课程列表",
    label_english_waiver: "免除英语考试 (美高美本学分 / SAT / ACT)",
    target_title: "选择目标大学及专业",
    target_desc: "搜索并选择您的目标院校和专业。(免费方案：最多评估5所)",
    btn_check_eligibility: "评估课程覆盖率",
    btn_recommend: "查看智能推荐大学",
    recommend_title: "基于学术档案的智能推荐",
    recommend_desc: "根据您已修的课程，系统推荐的目前要求覆盖率最高的目标大学。在申请前必须去官网进行核对。",
    req_title: "先修课程搜索引擎",
    req_desc: "输入并搜索目标大学和专业，即刻载入官方先修课要求与录取标准明细。",
    label_search_school: "搜索目标大学或专业",
    roadmap_title: "最优选课路线规划",
    roadmap_desc: "避免修读无效课程。系统会结合课程的依赖关系，即时生成能够让您在预定学期顺利转学的最佳选课计划。",
    label_admission_year: "期望入学年份",
    label_admission_term: "期望入学学期",
    label_roadmap_target: "规划的目标大学/专业",
    btn_build_roadmap: "生成最优选课路线图",
    essay_title: "AI转学文书策略家",
    essay_desc: "输入您的学术研究、活动或项目经历，系统会分析目标专业的选才偏好并匹配出最佳文书大纲。",
    label_essay_target: "文书针对的目标大学/专业",
    label_essay_activity: "核心活动、竞赛或项目细节",
    btn_generate_essay: "生成文书叙事指南大纲",
    btn_essay_example1: "📝 示例 1: CS项目 (U-Mich)",
    btn_essay_example2: "⚙️ 示例 2: 机械工程机器人 (Georgia Tech)",
    essay_outline_title: "AI文书大纲推荐",
    essay_outline_desc: "逻辑连贯的3段式学术陈述（PS）写作蓝图，指导您如何将项目经历转化为亮眼的文书叙事。",
    essay_placeholder: "在左侧输入您的活动经历，点击生成按钮，系统将在此处展示您的定制大纲建议。",
    feedback_eyebrow: "提出反馈意见",
    feedback_title: "参与 TransferChek 改进",
    feedback_desc: "您的意见是完全匿名的，且仅保存在本地浏览器中。平台管理员会定期查看并用于修正遗漏的课程数据。",
    label_feedback_input: "反馈内容",
    btn_submit_feedback: "提交反馈",
    btn_inbox: "收到的反馈收件箱",
    inbox_title: "匿名反馈收件箱（本地）",
    btn_clear: "清空",
    feedback_empty_alert: "请在提交前输入反馈内容。",
    feedback_sending: "正在发送反馈...",
    feedback_success: "谢谢！您的反馈已成功发送。",
    feedback_failed: "反馈提交失败：",
    auth_note: "演示用账户数据保存在本浏览器的本地缓存中。未来正式版将使用安全的云端数据库存储。",
    label_email: "电子邮箱地址",
    label_password: "账户密码",
    pricing_modal_title: "订阅计划方案",
    pricing_modal_upgrade: "升级您的会员方案",
    pricing_modal_subtitle: "选择最适合您的方案，优化转学路径。支持随时更换方案。",
    pricing_free_beta_notice: "目前免费提供服务。请选择您想要的订阅方案并立即开始使用。",
    active_plan_label: "您当前的方案：",
    tier_free_name: "免费方案 (Free Plan)",
    tier_free_price: "0 KRW",
    tier_free_desc: "基础功能体验",
    tier_free_feature1: "转学可行性分析仪 (服务1) 可评估最多5个目标专业",
    tier_free_feature2: "限制访问先修课程搜索引擎、最优选课路线规划以及AI转学文书策略家所有功能",
    tier_pro_name: "Pro 方案 (Pro Plan)",
    tier_pro_price: "9,900 KRW/月",
    tier_pro_desc: "无限制先修资格诊断",
    tier_pro_feature1: "转学可行性分析仪 (服务1) 可无限次进行目标专业评估",
    tier_pro_feature2: "限制访问先修课程搜索引擎、最优选课路线规划以及AI转学文书策略家所有功能",
    tier_premium_name: "Premium 方案 (Premium Plan)",
    tier_premium_price: "29,900 KRW/月",
    tier_premium_desc: "转学规划全包套件 (当月失效)",
    tier_premium_feature1: "资格评估、先修课程搜索引擎、最优选课路线规划服务无限制使用",
    tier_premium_feature2: "包含 AI 转学文书策略家 (服务4) 5次使用额度 (需在订阅月内使用)",
    tier_essay_pass_name: "AI 写作5次加油包",
    tier_essay_pass_price: "6,900 KRW",
    tier_essay_pass_desc: "文书5次使用额度 (3个月有效)",
    tier_essay_pass_feature1: "提供 AI 转学文书策略家 (服务4) 5次使用额度",
    tier_essay_pass_feature2: "需在3个月（90天）内使用 (支持在任何订阅中叠加购买)",
    btn_choose_plan: "立即订阅",
    btn_free_action: "选择免费",
    btn_pro_action: "订阅 Pro 方案",
    btn_premium_action: "订阅 Premium 方案",
    btn_essay_pass_action: "购买5次加油包",
    essay_credits_remaining: "剩余使用次数:",
    btn_buy_credits: "购买5次次数包 (6,900 KRW)",
    essay_out_of_credits: "您没有剩余的文书使用次数。请购买次数包或订阅 Premium 方案。",
    alert_essay_pass_purchased: "成功购买 5 次文书使用包！已为您添加 5 次使用额度（3个月有效）。",
    display_fallback: "官方未标明",
    display_fallback_none: "无",
    display_credits_unspecified: "学分要求未标明",
    display_gpa_unspecified: "最低 GPA 未标明",
    uc_notice_label: "建议核对 UC 官方数据",
    uc_notice_desc: "UC 系列要求可能有所不同。建议使用 ASSIST.org 和各校区官方转学指南进行核实。",
    roadmap_multi_notice_title: "正在合并规划 {count} 个目标专业",
    roadmap_multi_notice_desc: "已合并的大学先修课程: ",
    roadmap_multi_warning: "选择的目标学校越多，所需的修课时间可能越长。",
    roadmap_targets_label: "路线图规划目标大学（最多 7 个）",
    req_finder_placeholder_title: "搜索目标大学及专业",
    req_finder_placeholder_desc: "在上方搜索栏输入大学或专业名称，即可在此处查看详细的先修课程、官方说明及转学标准。",
    badge_verified_tag: "✓ 官方简章基准",
    badge_high_risk_tag: "⚠ High Risk (高风险)",
    badge_needs_review_tag: "⚠ Needs Review (待核对)",
    review_opt_desc: "验证多选一条件中的课程组合",
    review_enroll_desc: "验证入学后/注册前的完成时限",
    review_dept_desc: "检查院系特定的额外先修要求",
    review_credit_desc: "检查最低可转学分或转移学分上限",
    review_course_desc: "先修课程条件",
    review_extra_desc: "其他待验证项",
    choice_note: "多选一先修课说明",
    review_reason: "需人工核对项",
    choice_label_pref: "多选一:",
    review_count_alert: "请注意: 有 {count} 个项目需要您去官网核对",
    search_empty: "未找到搜索结果",
    search_select_school_first: "请先选择学校",
    status_pass_review: "建议申请 • 需核对原件",
    status_pass: "建议申请",
    status_fail: "高风险",
    eng_review_reason: "需去官网验证豁免条件",
    rec_course_detail: "推荐先修",
    rec_choice_label: "推荐多选一:",
    rec_choice_detail: "推荐多选一条件 • 非必须",
    rec_choice_raw_detail: "推荐多选一原始说明 • 非必须",
    rec_other_detail: "推荐或入学后完成 • 非必须",
    tag_pass: "已匹配",
    tag_fail: "未匹配",
    roadmap_extra_summary: "其他必修要求 {count} 项",
    roadmap_extra_note: "以下项计入评估，不仅仅是推荐建议。",
    roadmap_recommended_summary: "推荐要求 {count} 项 • 非必须",
    roadmap_review_summary: "需人工核实项 {count} 个",
    no_targets_selected: "您尚未选择任何目标大学/专业。",
    no_recs_found: "当前无推荐。请多勾选几门已修课程或审查未满足项。",
    no_mapped_items: "无匹配课程",
    mapped_items_desc: "未列出其他先修要求",
    no_review_items: "无待审核项",
    review_items_desc: "自动映射及分类已完成",
    no_extra_info: "无额外信息",
    extra_info_desc: "完全基于已明示的最低门槛进行判定",
    opt_condition_desc: "多选一类型的课程要求",
    no_opt_conditions: "无多选一条件",
    opt_conditions_desc: "均为直接必修科目",
    no_enroll_conditions: "无入学后完成的特殊时限要求",
    enroll_conditions_desc: "均为申请前需完成的科目",
    note_fallback: "暂无核对备注",
    section_required_title: "直接必修课程",
    section_recommended_title: "推荐先修课程（非必须）",
    section_choices_title: "多选一先修课条件",
    section_enroll_title: "入学/注册时限要求",
    section_review_title: "需人工验证项",
    section_extra_title: "额外信息参考",
    roadmap_tag_required: "必修科目",
    roadmap_tag_recommended: "推荐科目",
    roadmap_tag_choice: "必修多选一",
    roadmap_eng_first_term: "固定在第一学期",
    roadmap_eng_second_term: "固定在第二学期",
    buffer_term_title: "缓冲学期 (Buffer Term)",
    buffer_term_desc: "检查申请材料、推荐信以及文书润色",
    essay_alert_no_activity: "请填写您的核心 activity 经历！",
    essay_loading_text: "AI 正在结合目标先修课定制大纲，请稍候...",
    essay_generating_label: "生成中...",
    essay_generation_failed: "大纲生成失败",
    essay_error_occurred: "发生错误:",
    essay_error_desc: "可能因为超出 API 配额限制或网络波动。请稍后重试。",
    essay_generate_btn_label: "生成文书叙事指南大纲",
    req_search_placeholder: "输入大学名称或工程专业...",
    essay_activity_placeholder: "例如：担任社区大学机器人社团社长，用 Java 设计数据库项目，辅导微积分学生等……",
    search_school_placeholder: "搜索学校",
    search_major_placeholder: "搜索专业",
    gpa_ref: "GPA 参考: ",
    credits_ref: "学分参考: ",
    label_school: "学校",
    label_major: "专业",
    alert_subscribed: "成功订阅了 {plan}！",
    btn_clear_courses: "全部清除",
    auth_consent_text: "我同意服务条款和隐私政策。",
    auth_consent_link: "阅读详情",
    auth_consent_error: "您必须同意服务条款和隐私政策才能注册。",
    auth_email_exists: "使用此电子邮箱的账户已存在。",
    auth_invalid_credentials: "电子邮箱或密码不匹配。",
    label_essay_question: "文书题目 (Prompt)",
    essay_question_placeholder: "请在此处粘贴大学官方文书题目...",
    label_essay_limit: "字数或篇幅限制",
    essay_limit_placeholder: "例如: 350字, 500字, 1页等...",
    essay_alert_no_question: "请填写文书题目 (Prompt)！",
    essay_style_guide_title: "该大学工科转学文书评审标准与风格指南",
    tag_dos: "建议阐述方向 (DOs)",
    tag_donts: "应避免的误区 (DON'Ts)",
    tag_example: "优秀英文写作范例",
    essay_info_banner_title: "AI 知识库状态与法律特别说明",
    essay_info_banner_body: "本 AI 引擎已针对 30 所顶尖工程学院（349 个专业）的转学录取标准和文书风格指南（如 UC PIQ、佐治亚理工的贡献/协作导向、UIUC 的研究拟合度等）进行了深度校准，并融入了 120,000+ 篇成功转学文书的模式分析数据。系统将分析您的项目活动并为您生成最佳篇章叙事蓝图。为了遵守大学防剽窃及学术诚信政策，本服务为纯教育辅助工具，不提供文书代写服务，亦不担保最终录取结果。",
    essay_mode_direct: "直接输入",
    essay_mode_interview: "AI 互动面试指南",
    interview_start_desc: "针对目标院校及专业回答 5 个定制问题，全面挖掘您的核心工程项目经历和学术特质。",
    btn_start_interview: "开始 AI 互动面试",
    btn_prev: "上一步",
    btn_next: "下一步",
    btn_complete: "完成面试",
    interview_answer_placeholder: "在此输入您的回答...",
    interview_complete_msg: "AI 互动面试已完成！您的回答已自动整合至活动经历池中。请点击下方的 '生成文书叙事指南大纲' 确认定制的文书规划。",
    stat_universities: "覆盖院校",
    stat_programs: "工科专业",
    stat_programs_small: "个专业",
    stat_essays: "已分析的优秀转学文书案例",
    holistic_eval_title: "综合评估 (Holistic Review) 大学指南",
    holistic_eval_desc: "该大学没有官方指定的强制性先修课程要求，将根据申请者整体的学术成就和潜力进行综合评估。没有先修课程清单是正常现象，并非数据错误。建议申请者在原学校修读尽可能高难度的数学、物理及专业基础课程，以证明学术挑战精神并提升录取概率。",
    btn_profile: "我的个人资料",
    profile_modal_title: "账户控制面板",
    profile_modal_header: "我的个人资料",
    profile_modal_subtitle: "管理您的账户设置、订阅级别和安全首选项。",
    profile_email_label: "电子邮箱",
    profile_plan_label: "订阅级别",
    profile_essay_credits_label: "EssayAI 剩余次数",
    btn_upgrade_short: "升级",
    btn_topup_short: "购买额度",
    profile_security_header: "安全设置",
    label_current_password: "当前密码",
    label_new_password: "新密码",
    btn_update_password: "更新密码",
    locked_card_title: "仅限 Pro / Premium 方案",
    locked_card_desc: "第 6 个目标及以上需要订阅 Pro 或更高方案以进行资格评估。",
    btn_upgrade_now: "立即升级",
    password_change_success: "密码更新成功！",
    password_change_invalid: "当前密码输入不正确。",
    statcompass_limit_help: "免费计划限制累计分析最多5所大学。升级到 Pro/Premium 计划以解锁无限分析。",
    btn_toggle_recommended: "切换推荐课程",
    label_birthdate: "出生日期",
    auth_underage_error: "未满 14 周岁（美国/其他国家未满 13 周岁）无法注册。",
    auth_birthdate_required: "请输入您的出生日期。",
    payment_consent_minor_text: "[必须] 我确认我已达到法定年龄或已获得监护人（父母）的同意。 (未成年人付款需父母同意)",
    payment_consent_disclaimer_text: "[必须] 我同意 TransferChek 是参考指南，不保证录取。我理解我必须在大学官方网站上核实最终要求，所有大学名称均为其各自商标所有者的财产。",
    payment_consent_error: "您必须同意所有法律条款（未成年人确认、免责声明）才能继续付款。",
    payment_sdk_error: "支付模块正在加载中，请稍后再试。",
    payment_failed: "支付失败: {error}",
  }
};

const database = window.transferDatabase || { schools: [], schoolCount: 0, programCount: 0, sourceFiles: [] };
const courseCatalog = window.courseCatalog || [];
const FEEDBACK_STORAGE_KEY = "transferCompassFeedback";
const AUTH_STORAGE_KEY = "transferCompassAuth";
const PROFILE_STORAGE_KEY = "transferCompassProfile";

const state = {
  gpa: 3.72,
  credits: 48,
  international: true,
  englishType: "TOEFL",
  englishScore: 98,
  englishWaiver: false,
  completedCourses: new Set(),
  selectedTargets: [],
  targetSlots: Array.from({ length: 10 }, () => ({ school: "", major: "" })),
  roadmapTargetSlots: Array.from({ length: 7 }, () => ({ school: "", major: "" })),
  selectedRoadmapTargets: [],
  plan: localStorage.getItem("transferCompassPlan") || "Free",
  language: localStorage.getItem("transferCompassLang") || "en",
  essayCredits: parseInt(localStorage.getItem("transferCompassEssayCredits") || (localStorage.getItem("transferCompassPlan") === "Premium" ? "5" : "0"), 10),
  analyzedSchools: new Set(JSON.parse(localStorage.getItem("transferCompassAnalyzedSchools") || "[]")),
  admissionYear: 2026,
  admissionTerm: "Fall"
};

function saveAnalyzedSchoolsToLocalStorage() {
  localStorage.setItem("transferCompassAnalyzedSchools", JSON.stringify(Array.from(state.analyzedSchools)));
}

function saveProfileToLocalStorage() {
  const profileData = {
    gpa: state.gpa,
    credits: state.credits,
    international: state.international,
    englishType: state.englishType,
    englishScore: state.englishScore,
    englishWaiver: state.englishWaiver,
    completedCourses: Array.from(state.completedCourses),
    targetSlots: state.targetSlots,
    roadmapTargetSlots: state.roadmapTargetSlots,
    admissionYear: state.admissionYear,
    admissionTerm: state.admissionTerm
  };
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileData));
}

function loadProfileFromLocalStorage() {
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return;
    const profile = JSON.parse(raw);
    if (profile.gpa !== undefined) state.gpa = Number(profile.gpa);
    if (profile.credits !== undefined) state.credits = Number(profile.credits);
    if (profile.international !== undefined) state.international = Boolean(profile.international);
    if (profile.englishType !== undefined) state.englishType = profile.englishType;
    if (profile.englishScore !== undefined) state.englishScore = Number(profile.englishScore);
    if (profile.englishWaiver !== undefined) state.englishWaiver = Boolean(profile.englishWaiver);
    if (profile.admissionYear !== undefined) state.admissionYear = Number(profile.admissionYear);
    if (profile.admissionTerm !== undefined) state.admissionTerm = profile.admissionTerm;
    if (Array.isArray(profile.completedCourses)) {
      state.completedCourses = new Set(profile.completedCourses);
    }
    if (Array.isArray(profile.targetSlots)) {
      const seen = new Set();
      let loadedSlots = profile.targetSlots.map(slot => {
        const key = `${slot.school?.trim() || ""}:${slot.major?.trim() || ""}`;
        if (key !== ":" && seen.has(key)) {
          return { school: "", major: "" };
        }
        if (key !== ":") seen.add(key);
        return slot;
      }).slice(0, 10);
      while (loadedSlots.length < 10) {
        loadedSlots.push({ school: "", major: "" });
      }
      state.targetSlots = loadedSlots;
    }
    if (Array.isArray(profile.roadmapTargetSlots)) {
      const seen = new Set();
      let loadedSlots = profile.roadmapTargetSlots.map(slot => {
        const key = `${slot.school?.trim() || ""}:${slot.major?.trim() || ""}`;
        if (key !== ":" && seen.has(key)) {
          return { school: "", major: "" };
        }
        if (key !== ":") seen.add(key);
        return slot;
      }).slice(0, 7);
      while (loadedSlots.length < 7) {
        loadedSlots.push({ school: "", major: "" });
      }
      state.roadmapTargetSlots = loadedSlots;
    }
  } catch (e) {
    console.error("Failed to load profile from localStorage:", e);
  }
}

function t(key, fallback = "") {
  const lang = state.language || "en";
  if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
    return TRANSLATIONS[lang][key];
  }
  return TRANSLATIONS["en"][key] || fallback;
}

function switchLanguage(lang) {
  state.language = lang;
  localStorage.setItem("transferCompassLang", lang);
  
  const langSelector = qs("#langSelector");
  if (langSelector) {
    langSelector.value = lang;
  }
  
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = t(key);
    if (!translation) return;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = translation;
    } else {
      el.innerHTML = translation;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const translation = t(key);
    if (translation) {
      el.placeholder = translation;
    }
  });

  const reqSearchInput = qs("#requirementSearch");
  if (reqSearchInput) {
    reqSearchInput.placeholder = t("req_search_placeholder", "Type school name or engineering major...");
  }
  const essayActivityInput = qs("#essayActivity");
  if (essayActivityInput) {
    essayActivityInput.placeholder = t("essay_activity_placeholder", "E.g., Led the community college robotics club...");
  }
  
  for (let i = 0; i < state.targetSlots.length; i++) {
    const sInput = qs(`#targetSchool${i}`);
    const mInput = qs(`#targetMajor${i}`);
    if (sInput) sInput.placeholder = t("search_school_placeholder", "Search School");
    if (mInput) mInput.placeholder = t("search_major_placeholder", "Search Major");
  }
  for (let i = 0; i < state.roadmapTargetSlots.length; i++) {
    const sInput = qs(`#roadmapTargetSchool${i}`);
    const mInput = qs(`#roadmapTargetMajor${i}`);
    if (sInput) sInput.placeholder = t("search_school_placeholder", "Search School");
    if (mInput) mInput.placeholder = t("search_major_placeholder", "Search Major");
  }

  renderSchoolCoverage();
  renderCourseGroups();
  renderTargetPicker();
  renderRoadmapTargetPicker();
  renderEligibilityResults();
  buildRoadmap();
  
  const reqSelVal = qs("#requirementSelect")?.value;
  if (reqSelVal) {
    renderRequirementDetail(reqSelVal);
  }
}
window.switchLanguage = switchLanguage;

const pageTitles = {
  eligibility: "Prerequisite Eligibility Analyzer",
  requirements: "Prerequisite Finder",
  roadmap: "Optimized Roadmap Builder",
  essay: "AI Essay Strategist"
};

function checkPlanAccess(tabName) {
  const plan = state.plan || "Free";
  if (tabName === "requirements" || tabName === "roadmap") {
    return plan === "Premium";
  }
  if (tabName === "essay") {
    return plan === "Premium" || (state.essayCredits && state.essayCredits > 0);
  }
  return true;
}

function openPricingModal() {
  const modal = qs("#pricingModal");
  if (modal) {
    updateActivePlanLabel();
    modal.classList.remove("hidden");
  }
}

function closePricingModal() {
  const modal = qs("#pricingModal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

function updateActivePlanLabel() {
  const label = qs("#activePlanLabel");
  if (label) {
    label.textContent = `${state.plan} Plan`;
  }
}

function updatePlanNoticeVisibility() {
  const notice = qs("#statCompassLimitNotice");
  if (notice) {
    if (state.plan === "Free") {
      notice.style.display = "flex";
    } else {
      notice.style.display = "none";
    }
  }
}

window.selectUserPlan = function(plan) {
  const authState = readAuthState();
  const currentUser = authState.currentUser || "";

  if (plan !== "Free") {
    if (!currentUser) {
      alert(t("alert_login_required", "You must log in or register to select a paid plan."));
      closePricingModal();
      openAuthModal("login");
      return;
    }
    
    const consentMinor = qs("#paymentConsentMinor");
    const consentDisclaimer = qs("#paymentConsentDisclaimer");
    if ((consentMinor && !consentMinor.checked) || (consentDisclaimer && !consentDisclaimer.checked)) {
      alert(t("payment_consent_error", "You must agree to all legal consents (Minor check, Disclaimer) to proceed with payment."));
      return;
    }

    // Portone payment integration
    const IMP = window.IMP;
    if (!IMP) {
      alert(t("payment_sdk_error", "Payment module is loading. Please try again in a moment."));
      return;
    }

    const userProfile = authState.users[currentUser] || {};
    const buyerName = userProfile.name || currentUser.split("@")[0] || "Customer";
    const buyerPhone = userProfile.phone || "010-0000-0000";

    const isKo = (state.lang || "ko") === "ko";
    const pgChannel = isKo ? "html5_inicis" : "paypal_v2";
    const payCurrency = isKo ? "KRW" : "USD";
    const payAmount = isKo ? 29900 : 22; // $22 USD for Premium Plan
    const productName = isKo ? "Premium Plan (프리미엄 구독)" : "TransferChek Premium Plan (1 Month)";

    IMP.request_pay({
      pg: pgChannel,
      pay_method: "card",
      merchant_uid: `order_sub_${plan}_${Date.now()}`,
      name: productName,
      amount: payAmount,
      currency: payCurrency,
      buyer_email: currentUser,
      buyer_name: buyerName,
      buyer_tel: buyerPhone
    }, function(rsp) {
      if (rsp.success) {
        applyPlanUpgrade(plan);
      } else {
        alert(t("payment_failed", "Payment failed: {error}").replace("{error}", rsp.error_msg || "Unknown error"));
      }
    });
  } else {
    applyPlanUpgrade("Free");
  }
};

function applyPlanUpgrade(plan) {
  state.plan = plan;
  localStorage.setItem("transferCompassPlan", plan);
  
  const authState = readAuthState();
  const currentUser = authState.currentUser || "";
  if (currentUser) {
    const prevPlan = authState.users[currentUser].plan || "Free";
    authState.users[currentUser].plan = plan;
    if (plan === "Premium") {
      const now = new Date();
      const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString(); // 30 days
      authState.users[currentUser].creditPacks = authState.users[currentUser].creditPacks || [];
      // Premium credits do not stack, so remove any previous premium credit packs
      authState.users[currentUser].creditPacks = authState.users[currentUser].creditPacks.filter(p => p.type !== "premium");
      authState.users[currentUser].creditPacks.push({
        id: `premium_${Date.now()}`,
        type: "premium",
        count: 5,
        expiresAt: expiresAt
      });
    }
    const totalCredits = syncUserEssayCredits(currentUser, authState);
    state.essayCredits = totalCredits;
    localStorage.setItem("transferCompassEssayCredits", totalCredits.toString());
    writeAuthState(authState);
    
    // Track plan change telemetry
    fetch('/api/track-subscription', {
      method: 'POST',
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ oldPlan: prevPlan, newPlan: plan })
    }).catch(e => console.warn("Failed to send plan change telemetry:", e));
  } else {
    if (plan === "Premium") {
      state.essayCredits = 5;
      localStorage.setItem("transferCompassEssayCredits", "5");
    } else {
      state.essayCredits = 0;
      localStorage.setItem("transferCompassEssayCredits", "0");
    }
  }
  
  updateActivePlanLabel();
  updatePlanNoticeVisibility();
  updateEssayCreditsUI();
  syncSelectedTargetsFromSlots();
  renderEligibilityResults();
  buildRoadmap();
  closePricingModal();
  
  const displayNames = {
    Free: t("tier_free_name", "Free Plan"),
    Pro: t("tier_pro_name", "Pro Plan"),
    Premium: t("tier_premium_name", "Premium Plan")
  };
  const displayName = displayNames[plan] || plan;
  
  const activeTabBtn = qs(".tab-button.active");
  if (activeTabBtn) {
    const tabName = activeTabBtn.getAttribute("data-tab");
    if (!checkPlanAccess(tabName)) {
      activateProductTab("eligibility");
    }
  }
  
  alert(t("alert_subscribed", "Successfully subscribed to the {plan}!").replace("{plan}", displayName));
}

const courseCategoryOrder = { Math: 0, Physics: 1, Chemistry: 2, Science: 3, English: 4, Computer: 5, Engineering: 6 };

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

const allPrograms = () =>
  database.schools.flatMap((school) =>
    school.majors.map((major) => ({
      ...major,
      school,
      university: school
    }))
  );

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function displayRequirement(value, fallback) {
  const defaultFallback = t("display_fallback");
  const fb = fallback !== undefined ? fallback : defaultFallback;
  if (value === null || value === undefined || value === "") return fb;
  return value;
}

function displayRawRequirement(rawValue, numericValue) {
  return rawValue || displayRequirement(numericValue);
}

function isUnspecifiedText(value) {
  const text = normalizeText(value);
  return (
    !text ||
    text.includes(normalizeText(t("display_fallback"))) ||
    text.includes("공식 미게시") ||
    text.includes("공식 최소 없음") ||
    text.includes("없음") ||
    text.includes("not published") ||
    text.includes("no official") ||
    text.includes("holistic")
  );
}



function isGeneralGuidanceText(value) {
  const text = normalizeText(value);
  return (
    text.includes("competitive") ||
    text.includes("generally") ||
    text.includes("권장") ||
    text.includes("strongly encouraged") ||
    text.includes("recommended") ||
    text.includes("average")
  );
}

function additionalInfoForProgram(program) {
  const info = [];
  if (program.rawMinGpa && isGeneralGuidanceText(program.rawMinGpa)) info.push(`${t("gpa_ref")}${program.rawMinGpa}`);
  if (program.rawMinCredits && isGeneralGuidanceText(program.rawMinCredits)) info.push(`${t("credits_ref")}${program.rawMinCredits}`);
  return info;
}

function isUcProgram(program) {
  const schoolName = `${program.school?.name || ""} ${program.school?.shortName || ""}`;
  return /\bUC\b|University of California|Berkeley|UCLA|San Diego|Irvine|Davis|Santa Barbara|Santa Cruz|Riverside|Merced/i.test(schoolName);
}

function verificationNoticeForProgram(program) {
  if (!isUcProgram(program)) return null;
  return {
    label: t("uc_notice_label"),
    detail: t("uc_notice_desc")
  };
}

function getConfidenceBadgeHtml(program) {
  const conf = program.confidence || "needs_source_check";
  if (conf === "verified") {
    return `<span class="badge badge-verified">${escapeHtml(t("badge_verified_tag"))}</span>`;
  } else if (conf === "high_risk") {
    return `<span class="badge badge-high-risk">${escapeHtml(t("badge_high_risk_tag"))}</span>`;
  } else {
    return `<span class="badge badge-needs-review">${escapeHtml(t("badge_needs_review_tag"))}</span>`;
  }
}

function reviewFocus(item) {
  const raw = item.raw || String(item);
  const text = normalizeText(raw);
  if (text.includes("pick") || text.includes(" or ") || text.includes("choose") || text.includes("택1")) {
    return t("review_opt_desc");
  }
  if (text.includes("enroll") || text.includes("등록") || text.includes("later")) {
    return t("review_enroll_desc");
  }
  if (text.includes("department") || text.includes("학과별")) {
    return t("review_dept_desc");
  }
  if (text.includes("credit") || text.includes("학점")) {
    return t("review_credit_desc");
  }
  if (text.includes("course") || text.includes("과목")) {
    return t("review_course_desc");
  }
  return t("review_extra_desc");
}

function englishLabel(type) {
  return (
    {
      TOEFL: "TOEFL",
      TOEFL_2026: "TOEFL 2026 Jan Revised",
      IELTS: "IELTS",
      Duolingo: "Duolingo"
    }[type] || type
  );
}

function getEnglishRequirement(program) {
  return program.english?.[state.englishType] ?? null;
}

function updateEnglishScoreInputConstraints() {
  const input = qs("#englishScoreInput");
  if (!input) return;
  const settings = {
    TOEFL: { min: 0, max: 120, step: 1 },
    TOEFL_2026: { min: 0, max: 6, step: 0.1 },
    IELTS: { min: 0, max: 9, step: 0.5 },
    Duolingo: { min: 0, max: 160, step: 1 }
  }[state.englishType];
  input.min = settings.min;
  input.max = settings.max;
  input.step = settings.step;
  if (Number(input.value) > settings.max) {
    input.value = settings.max;
    state.englishScore = settings.max;
  }
}

function patternMatches(text, pattern) {
  if (!pattern) return false;
  if (pattern.startsWith('\\b')) {
    try {
      const regex = new RegExp(pattern, 'i');
      return regex.test(text);
    } catch(e) {
      return false;
    }
  }
  const haystack = normalizeText(text);
  const needle = normalizeText(pattern);
  const escapedNeedle = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  
  let regexStr = escapedNeedle;
  if (/^[a-zA-Z0-9_]/.test(needle)) {
    regexStr = '\\b' + regexStr;
  }
  if (/[a-zA-Z0-9_]$/.test(needle)) {
    regexStr = regexStr + '\\b';
  }
  
  try {
    const regex = new RegExp(regexStr, 'i');
    return regex.test(haystack);
  } catch(e) {
    return haystack.includes(needle);
  }
}

function canonicalMatches(rawCourse) {
  const matches = courseCatalog.filter((course) => course.patterns.some((pattern) => patternMatches(rawCourse, pattern)));
  const byId = new Map(matches.map((course) => [course.id, course]));
  return [...byId.values()];
}

function orderCoursesForDisplay(courses) {
  return [...courses].sort((a, b) => {
    const categoryA = courseCategoryOrder[a.category] ?? 99;
    const categoryB = courseCategoryOrder[b.category] ?? 99;
    if (categoryA !== categoryB) return categoryA - categoryB;
    if (a.level !== b.level) return a.level - b.level;
    return a.name.localeCompare(b.name);
  });
}

function isIgnorableSourceLine(rawCourse) {
  const text = normalizeText(rawCourse);
  return (
    !text ||
    text.includes("no additional recommended") ||
    text.includes("official required courses") ||
    text.includes("required courses 미게시") ||
    text.includes("필수과목 목록 없음") ||
    text.includes("공식 학과별 필수과목") ||
    text.includes("holistic review") ||
    text.includes("minimum gpa") ||
    text.includes("min gpa") ||
    text.includes("source:") ||
    text.includes("verified") ||
    text.includes("common app") ||
    text.includes("fall only") ||
    text.includes("spring only") ||
    text.includes("지원 시 전공 미지정") ||
    text.includes("gpa 최소치 없음")
    || text.includes("출처")
    || text.includes("직접 확인")
    || text.includes("공식 미게시")
    || text.includes("원문")
    || text.includes("불필요")
    || text.includes("there are no required courses")
    || text.includes("not published")
    || text.includes("contact ")
    || text.includes("minimum credits")
    || text.includes("최소 크레딧")
    || text.includes("최대 이전")
    || text.includes("이전")
    || text.includes("최대 18")
    || text.includes("전공 선택")
    || text.includes("전공 지원 시 미지정")
    || text.includes("지원 시 전공 미지정")
    || text.includes("fall 입학")
    || text.includes("p/f 과목")
    || text.includes("major change")
    || text.includes("second choice")
    || text.includes("pre-major")
    || text.includes("all transfer students enter")
    || text.includes("공대 편입은 2단계")
    || text.includes("penn state 입학")
    || text.includes("입학 후 etm")
    || text.includes("university park")
    || text.includes("모두 c 이상")
    || text.includes("grades of")
    || text.includes("성적 요건")
    || text.includes("recommended coursework 섹션")
    || text.includes("학과별 구체 과목 다름")
    || text.includes("학과별 advanced course")
    || text.includes("공대 전체 공통 기대치")
    || text.includes("strong transfer applicants")
    || text.includes("coursework 권장")
    
    // Additional filters to keep UI clean
    || text.includes("재학 필수")
    || text.includes("gpa 최소치")
    || text.includes("학기 이하 이수")
    || text.includes("학기 초과 이수")
    || text.includes("편입 최소 gpa")
    || text.includes("편입은 2단계 구조")
    || text.includes("1단계:")
    || text.includes("2단계:")
    || text.includes("지원 전 이수해야")
    || text.includes("선이수 필수")
    || text.includes("권장과목 목록 없음")
    || text.includes("통제 여부")
    || text.includes("process discontinued")
    || text.includes("연 평균")
    || text.includes("지원 자격")
    || text.includes("지원자격")
    || text.includes("불인정")
    || text.includes("공통 필수")
    || text.includes("최소 성적:")
    || text.includes("필수과목 gpa")
    || text.includes("spring 종료 전")
    || text.includes("학과 추가 필수")
    || text.includes("critical:")
    || text.includes("4대 공통")
    || text.includes("대체 가능")
    || text.includes("대체 불가")
    || text.includes("단계 추가 필수")
    || text.includes("coe는 학과별")
    || text.includes("공식 안내:")
    || text.includes("intended major, as listed")
    || text.includes("rigorous program of study")
    || text.includes("stanford soe:") || text.includes("must complete all required")
    || text.includes("아래 학과별 etm 과목")
    || text.includes("2년 졸업 위해 필요")
    || text.includes("assist.org 기준 해당 학과")
    || text.includes("모든 technical 과목")
    || text.includes("combination 과목")
    || text.includes("완료 기한")
    || text.includes("major prerequisite admissions")
    || text.includes("기타 하위과정 공학")
    || text.includes("your interest in the field")
    || text.includes("track declaration")
    || text.includes("chosen on application")
    || text.includes("english composition not in required")
    || text.includes("apma 2501")
    || text.includes("no second choice")
    || text.includes("no major change")
    || text.includes("enter as pre-major first")
    || text.includes("added was missing")
    || text.includes("unc does not have")
    || text.includes("idmen은 stanford")
    || text.includes("학부 전공")
    || text.includes("concentration")
    || text.includes("required courses 없음")
    || text.includes("required course 없음")
    || text.includes("at least one mec course")
    || text.includes("11 credits of math")
    || text.includes("basic program")
  );
}

function classifySourceLine(raw, matches) {
  const text = normalizeText(raw);
  const hasLectureAndLab =
    matches.some((course) => course.isLab) && matches.some((course) => !course.isLab && ["Physics", "Chemistry"].includes(course.category));
  if (isIgnorableSourceLine(raw)) return { type: "ignore", raw };
  if (text.includes("enrollment req") || text.includes("registration") || text.includes("등록") || text.includes("enroll")) {
    return { type: "later", raw, matches };
  }
  if (text.includes("+ lab") && hasLectureAndLab) return { type: "mapped", raw, matches };
  if (
    text.includes(" or ") ||
    text.includes("선택") ||
    text.includes("elective") ||
    text.includes("pick one") ||
    text.includes("one required") ||
    text.includes("택1") ||
    text.includes("one of") ||
    text.includes("choose") ||
    text.includes("choose one")
  ) {
    return { type: "choice", raw, matches };
  }
  if (matches.length >= 1) return { type: "mapped", raw, matches };
  return { type: "review", raw, matches };
}

function summarizeProgramCourses(program) {
  const summarize = (rawCourses) => {
    const mapped = new Map();
    const choices = [];
    const later = [];
    const review = [];

    rawCourses.forEach((raw) => {
      const matches = canonicalMatches(raw);
      const classified = classifySourceLine(raw, matches);
      if (classified.type === "ignore") return;
      if (classified.type === "choice") {
        if (matches.length) choices.push({ raw, options: matches });
        else choices.push({ raw, options: [], note: t("choice_note") });
        return;
      }
      if (classified.type === "later") {
        later.push({ raw, options: matches });
        return;
      }
      if (classified.type === "review") {
        review.push({ raw, reason: t("review_reason") });
        return;
      }
      matches.forEach((course) => {
        const item = mapped.get(course.id) || { ...course, sources: [] };
        item.sources.push(raw);
        mapped.set(course.id, item);
      });
    });

    return { mapped: [...mapped.values()], choices, later, review };
  };

  return {
    required: summarize(program.requiredCourses || []),
    recommended: summarize(program.recommendedCourses || [])
  };
}

function isCourseSatisfied(courseId) {
  return state.completedCourses.has(courseId);
}

function evaluateProgram(program) {
  const courseSummary = summarizeProgramCourses(program);
  const checks = [];
  const additionalInfo = additionalInfoForProgram(program);

  if (program.minGpa !== null) {
    checks.push({
      label: `GPA ${displayRawRequirement(program.rawMinGpa, program.minGpa)}`,
      pass: program.minGpa === null || state.gpa >= program.minGpa,
      status: "normal",
      type: "gpa"
    });
  }
  if (program.minCredits !== null) {
    checks.push({
      label: `Credits ${displayRawRequirement(program.rawMinCredits, program.minCredits)}`,
      pass: program.minCredits === null || state.credits >= program.minCredits,
      status: "normal",
      type: "credits"
    });
  }

  orderCoursesForDisplay(courseSummary.required.mapped).forEach((course) => {
    checks.push({
      label: course.name,
      pass: isCourseSatisfied(course.id),
      status: "normal",
      type: "course"
    });
  });

  courseSummary.required.choices.filter((choice) => choice.options.length).forEach((choice) => {
    checks.push({
      label: `${t("choice_label_pref")} ${choice.options.map((course) => course.name).join(" / ")}`,
      pass: choice.options.some((course) => isCourseSatisfied(course.id)),
      status: "normal",
      type: "course"
    });
  });

  const reviewCount = courseSummary.required.review.length + (program.english?.review?.length || 0);
  if (reviewCount) {
    checks.push({
      label: t("review_count_alert").replace("{count}", reviewCount),
      pass: true,
      status: "review",
      type: "course"
    });
  }

  const englishRequirement = getEnglishRequirement(program);
  if (state.international && englishRequirement !== null) {
    checks.push({
      label: `${englishLabel(state.englishType)} ${englishRequirement}+`,
      pass: state.englishWaiver || state.englishScore >= englishRequirement,
      status: "normal",
      type: "english"
    });
  }

  const blockingChecks = checks.filter((check) => check.status !== "review");
  return {
    pass: blockingChecks.every((check) => check.pass),
    needsReview: checks.some((check) => check.status === "review"),
    checks,
    courseSummary,
    additionalInfo
  };
}

function defaultTargets() {
  return allPrograms().slice(0, 3).map((program) => program.id);
}

function uniqueSchools() {
  return [...new Map(database.schools.map((school) => [school.name, school])).values()].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

function programsForSchoolName(schoolName) {
  const normalized = normalizeText(schoolName);
  if (!normalized) return [];
  return allPrograms()
    .filter((program) => normalizeText(program.school.name) === normalized || normalizeText(program.school.shortName) === normalized)
    .sort((a, b) => a.name.localeCompare(b.name));
}

function syncSelectedTargetsFromSlots() {
  const seen = new Set();
  state.targetSlots.forEach((slot, index) => {
    const sName = slot.school?.trim();
    const mName = slot.major?.trim();
    if (sName && mName) {
      const key = `${normalizeText(sName)}:${normalizeText(mName)}`;
      if (seen.has(key)) {
        slot.school = "";
        slot.major = "";
      } else {
        seen.add(key);
      }
    }
  });

  const ids = state.targetSlots
    .map((slot) => {
      const match = programsForSchoolName(slot.school).find((program) => normalizeText(program.name) === normalizeText(slot.major));
      return match?.id;
    })
    .filter(Boolean);
  
  const uniqueIds = [...new Set(ids)];
  
  // Keep all selected targets up to 10 regardless of the Free/Pro plan tier
  state.selectedTargets = uniqueIds.slice(0, 10);

  saveProfileToLocalStorage();
}

function initializeTargetSlots() {
  syncSelectedTargetsFromSlots();
  syncSelectedRoadmapTargetsFromSlots();
}

function renderCourseGroups() {
  const groups = courseCatalog.reduce((acc, course) => {
    acc[course.category] = acc[course.category] || [];
    acc[course.category].push(course);
    return acc;
  }, {});
  const order = ["Math", "Physics", "Chemistry", "Science", "English", "Computer", "Engineering"];

  qs("#courseGroups").innerHTML = order
    .filter((category) => groups[category]?.length)
    .map(
      (category) => `
        <div class="course-group">
          <h4>${escapeHtml(category)}</h4>
          <div class="course-options">
            ${orderCoursesForDisplay(groups[category])
              .map(
                (course) => `
                  <label class="course-row compact-course">
                    <span class="course-name">${escapeHtml(course.name)}</span>
                    <input type="checkbox" data-course="${escapeHtml(course.id)}" ${
                      state.completedCourses.has(course.id) ? "checked" : ""
                    } />
                  </label>
                `
              )
              .join("")}
          </div>
        </div>
      `
    )
    .join("");

  qsa("[data-course]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) state.completedCourses.add(checkbox.dataset.course);
      else state.completedCourses.delete(checkbox.dataset.course);
      saveProfileToLocalStorage();
      renderEligibilityResults();
      buildRoadmap();
    });
  });
}

function renderTargetPicker() {
  const container = qs("#targetPicker");
  if (!container) return;
  
  container.innerHTML = state.targetSlots
    .map((slot, index) => {
      return `
        <div class="target-search-row">
          <span class="target-index">${index + 1}</span>
          <div class="target-inputs-group">
            <div class="form-row search-field autocomplete-container" data-autocomplete-type="school" data-index="${index}" style="position: relative; margin-bottom: 0;">
              <label for="targetSchool${index}">${t("label_school", "School")}</label>
              <div style="position: relative; display: flex; align-items: center;">
                <input type="text" id="targetSchool${index}" class="autocomplete-input school-input" placeholder="${t("select_school_placeholder", "Select School")}" autocomplete="off" value="${escapeHtml(slot.school || '')}" style="width: 100%; padding-right: 30px;" />
                <button type="button" class="autocomplete-toggle-btn" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; padding: 4px; color: var(--muted); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 5;">▼</button>
              </div>
              <div class="search-menu autocomplete-menu hidden" id="targetSchoolMenu${index}"></div>
            </div>
            <div class="form-row search-field autocomplete-container" data-autocomplete-type="major" data-index="${index}" style="position: relative; margin-bottom: 0;">
              <label for="targetMajor${index}">${t("label_major", "Major")}</label>
              <div style="position: relative; display: flex; align-items: center;">
                <input type="text" id="targetMajor${index}" class="autocomplete-input major-input" placeholder="${slot.school ? t("select_major_placeholder", "Select Major") : t("select_school_first_placeholder", "Select School First")}" autocomplete="off" value="${escapeHtml(slot.major || '')}" ${!slot.school ? 'disabled' : ''} style="width: 100%; padding-right: 30px;" />
                <button type="button" class="autocomplete-toggle-btn" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; padding: 4px; color: var(--muted); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 5;" ${!slot.school ? 'disabled' : ''}>▼</button>
              </div>
              <div class="search-menu autocomplete-menu hidden" id="targetMajorMenu${index}"></div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  bindAutocompleteEvents(container, "target");
}

function bindAutocompleteEvents(container, type) {
  const getSlots = () => type === "target" ? state.targetSlots : state.roadmapTargetSlots;
  const syncFunc = () => type === "target" ? syncSelectedTargetsFromSlots() : syncSelectedRoadmapTargetsFromSlots();
  const renderFunc = () => type === "target" ? renderTargetPicker() : renderRoadmapTargetPicker();
  const resultsFunc = () => type === "target" ? renderEligibilityResults() : () => {};

  const schools = uniqueSchools();

  container.querySelectorAll(".autocomplete-container").forEach((ac) => {
    const idx = Number(ac.dataset.index);
    const acType = ac.dataset.autocompleteType;
    const input = ac.querySelector(".autocomplete-input");
    const menu = ac.querySelector(".autocomplete-menu");
    const toggleBtn = ac.querySelector(".autocomplete-toggle-btn");

    if (!input || !menu) return;

    const renderMenu = (query = "") => {
      const normalizedQuery = normalizeText(query);
      let items = [];
      const slots = getSlots();

      if (acType === "school") {
        items = schools.filter(s => 
          !normalizedQuery || normalizeText(s.name).includes(normalizedQuery)
        ).map(s => s.name).sort((a, b) => a.localeCompare(b));
      } else {
        const selectedSchool = slots[idx].school;
        const majors = selectedSchool ? programsForSchoolName(selectedSchool) : [];
        items = majors.filter(p =>
          !normalizedQuery || normalizeText(p.name).includes(normalizedQuery)
        ).map(p => p.name).sort((a, b) => a.localeCompare(b));
      }

      menu.innerHTML = items.length
        ? items.map(name => `
            <button type="button" class="autocomplete-item-btn" data-value="${escapeHtml(name)}" style="width: 100%; text-align: left; background: none; border: none; padding: 10px 12px; color: var(--ink); cursor: pointer; display: block; border-bottom: 1px solid var(--line);">
              <span style="font-weight: 600; font-size: 13.5px; display: block; color: var(--ink);">${escapeHtml(name)}</span>
            </button>
          `).join("")
        : `<div class="search-empty" style="padding: 12px; text-align: center; color: var(--muted); font-size: 13px;">${t("search_empty", "No results found")}</div>`;
      
      menu.classList.remove("hidden");
    };

    let autocompleteTimeout;
    let isToggling = false;

    input.addEventListener("focus", () => {
      clearTimeout(autocompleteTimeout);
      if (isToggling) {
        renderMenu(""); // 역삼각형 토글 버튼 클릭 시에는 전체 리스트 노출
      } else {
        renderMenu(input.value);
      }
    });

    input.addEventListener("blur", () => {
      autocompleteTimeout = setTimeout(() => {
        menu.classList.add("hidden");
      }, 200);
    });

    input.addEventListener("input", (e) => {
      renderMenu(e.target.value);
    });

    if (toggleBtn) {
      toggleBtn.addEventListener("mousedown", (e) => {
        e.preventDefault();
        clearTimeout(autocompleteTimeout);
      });
      toggleBtn.addEventListener("click", () => {
        if (menu.classList.contains("hidden")) {
          isToggling = true;
          input.focus();
          renderMenu(""); // 쿼리 필터를 무시하고 전체 목록 렌더링
          isToggling = false;
        } else {
          menu.classList.add("hidden");
        }
      });
    }

    menu.addEventListener("mousedown", (e) => {
      clearTimeout(autocompleteTimeout);
      e.preventDefault(); // 스크롤바 드래그 및 메뉴 클릭 시 포커스 블러 방지

      const btn = e.target.closest(".autocomplete-item-btn");
      if (!btn) return;

      const val = btn.dataset.value;
      input.value = val;
      menu.classList.add("hidden");

      const slots = getSlots();
      if (acType === "school") {
        slots[idx].school = val;
        slots[idx].major = "";
      } else {
        slots[idx].major = val;
      }

      syncFunc();
      renderFunc();
      resultsFunc();
    });
  });
}

function syncSelectedRoadmapTargetsFromSlots() {
  const seen = new Set();
  state.roadmapTargetSlots.forEach((slot, index) => {
    const sName = slot.school?.trim();
    const mName = slot.major?.trim();
    if (sName && mName) {
      const key = `${normalizeText(sName)}:${normalizeText(mName)}`;
      if (seen.has(key)) {
        slot.school = "";
        slot.major = "";
        const schoolInput = qs(`#roadmapTargetSchool${index}`);
        const majorInput = qs(`#roadmapTargetMajor${index}`);
        if (schoolInput) schoolInput.value = "";
        if (majorInput) majorInput.value = "";
      } else {
        seen.add(key);
      }
    }
  });

  const ids = state.roadmapTargetSlots
    .map((slot) => {
      const match = programsForSchoolName(slot.school).find((program) => normalizeText(program.name) === normalizeText(slot.major));
      return match?.id;
    })
    .filter(Boolean);
  
  state.selectedRoadmapTargets = [...new Set(ids)];
  saveProfileToLocalStorage();
  buildRoadmap();
}

function renderRoadmapTargetPicker() {
  const container = qs("#roadmapTargetPicker");
  if (!container) return;
  
  container.innerHTML = state.roadmapTargetSlots
    .map((slot, index) => {
      return `
        <div class="target-search-row">
          <span class="target-index">${index + 1}</span>
          <div class="target-inputs-group">
            <div class="form-row search-field autocomplete-container" data-autocomplete-type="school" data-index="${index}" style="position: relative; margin-bottom: 0;">
              <label for="roadmapTargetSchool${index}">${t("label_school", "School")}</label>
              <div style="position: relative; display: flex; align-items: center;">
                <input type="text" id="roadmapTargetSchool${index}" class="autocomplete-input school-input" placeholder="${t("select_school_placeholder", "Select School")}" autocomplete="off" value="${escapeHtml(slot.school || '')}" style="width: 100%; padding-right: 30px;" />
                <button type="button" class="autocomplete-toggle-btn" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; padding: 4px; color: var(--muted); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 5;">▼</button>
              </div>
              <div class="search-menu autocomplete-menu hidden" id="roadmapTargetSchoolMenu${index}"></div>
            </div>
            <div class="form-row search-field autocomplete-container" data-autocomplete-type="major" data-index="${index}" style="position: relative; margin-bottom: 0;">
              <label for="roadmapTargetMajor${index}">${t("label_major", "Major")}</label>
              <div style="position: relative; display: flex; align-items: center;">
                <input type="text" id="roadmapTargetMajor${index}" class="autocomplete-input major-input" placeholder="${slot.school ? t("select_major_placeholder", "Select Major") : t("select_school_first_placeholder", "Select School First")}" autocomplete="off" value="${escapeHtml(slot.major || '')}" ${!slot.school ? 'disabled' : ''} style="width: 100%; padding-right: 30px;" />
                <button type="button" class="autocomplete-toggle-btn" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; padding: 4px; color: var(--muted); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 5;" ${!slot.school ? 'disabled' : ''}>▼</button>
              </div>
              <div class="search-menu autocomplete-menu hidden" id="roadmapTargetMajorMenu${index}"></div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  bindAutocompleteEvents(container, "roadmap");
}

function renderEligibilityResults() {
  let selectedPrograms = allPrograms().filter((program) => state.selectedTargets.includes(program.id));
  let isExample = false;
  if (selectedPrograms.length === 0) {
    const exampleId = "university-of-washington-computer-engineering-allen-school-347f00d7";
    const exampleProg = allPrograms().find(p => p.id === exampleId) || allPrograms()[0];
    if (exampleProg) {
      selectedPrograms = [exampleProg];
      isExample = true;
    }
  }

  qs("#eligibilityResults").innerHTML =
    selectedPrograms
      .map((program, idx) => {
        const evaluation = evaluateProgram(program);
        const verificationNotice = verificationNoticeForProgram(program);
        const statusText = evaluation.pass ? (evaluation.needsReview ? t("status_pass_review") : t("status_pass")) : t("status_fail");
        const visibleChecks = evaluation.checks.filter((check) => check.status !== "review");
        const primaryChecks = visibleChecks.slice(0, 14);
        const extraChecks = visibleChecks.slice(14);
        const requiredCourseIds = new Set(evaluation.courseSummary.required.mapped.map((course) => course.id));
        const isHolistic =
          evaluation.courseSummary.required.mapped.length === 0 &&
          evaluation.courseSummary.required.choices.length === 0 &&
          evaluation.courseSummary.required.review.length === 0;
        const recommendedMapped = orderCoursesForDisplay(evaluation.courseSummary.recommended.mapped.filter((course) => !requiredCourseIds.has(course.id)));
        const recommendedChoices = evaluation.courseSummary.recommended.choices
          .map((choice) => ({ ...choice, options: choice.options.filter((course) => !requiredCourseIds.has(course.id)) }))
          .filter((choice) => choice.options.length || choice.raw);
        const recommendedLater = evaluation.courseSummary.recommended.later
          .map((item) => ({ ...item, options: item.options.filter((course) => !requiredCourseIds.has(course.id)) }))
          .filter((item) => item.options.length || item.raw);
        const englishReviewItems = (program.english?.review || []).map((raw) => ({
          raw,
          reason: t("eng_review_reason")
        }));
        const reviewItems = [...evaluation.courseSummary.required.review, ...englishReviewItems];
        const recommendedItems = [
          ...recommendedMapped.map((course) => ({ label: course.name, detail: `${course.category} · ${t("rec_course_detail")}` })),
          ...recommendedChoices.map((choice) => ({
            label: choice.options.length ? `${t("rec_choice_label")} ${choice.options.map((course) => course.name).join(" / ")}` : choice.raw,
            detail: choice.options.length ? t("rec_choice_detail") : t("rec_choice_raw_detail")
          })),
          ...recommendedLater.map((item) => ({
            label: item.options.length ? item.options.map((course) => course.name).join(" / ") : item.raw,
            detail: t("rec_other_detail")
          }))
        ];

        let isLocked = false;
        if (state.plan === "Free" && !isExample) {
          const schoolName = program.school.name;
          if (state.analyzedSchools.has(schoolName)) {
            isLocked = false;
          } else if (state.analyzedSchools.size < 5) {
            state.analyzedSchools.add(schoolName);
            saveAnalyzedSchoolsToLocalStorage();
            isLocked = false;
          } else {
            isLocked = true;
          }
        }

        const lockedOverlayHtml = isLocked ? `
          <div class="locked-overlay">
            <div class="locked-content">
              <span class="locked-icon">🔒</span>
              <h4>${escapeHtml(t("locked_card_title", "Pro / Premium Plan 전용"))}</h4>
              <p>${escapeHtml(t("locked_card_desc", "6번째 대학부터는 Pro 플랜 이상에서 분석 가능합니다."))}</p>
              <button class="primary-btn compact" type="button" onclick="openPricingModal()">${escapeHtml(t("btn_upgrade_now", "지금 업그레이드"))}</button>
            </div>
          </div>
        ` : "";

        return `
          <div class="locked-card-wrapper">
            <article class="result-card ${evaluation.pass ? "pass" : ""} ${isExample ? "example-card" : ""} ${isLocked ? "locked-card" : ""}">
              ${lockedOverlayHtml}
              <span class="status ${evaluation.pass ? "pass" : "fail"}">${statusText}</span>
              <h3>${escapeHtml(program.school.shortName)}</h3>
              <p>${escapeHtml(program.name)}</p>
              <div class="badge-container">${getConfidenceBadgeHtml(program)}</div>
              ${
                verificationNotice
                  ? `<div class="verification-alert">
                      <strong>${escapeHtml(verificationNotice.label)}</strong>
                      <span>${escapeHtml(verificationNotice.detail)}</span>
                    </div>`
                  : ""
              }
              ${
                isHolistic
                  ? `<div class="holistic-warning" style="margin: 12px 0; background: rgba(59, 130, 246, 0.08); border-left: 4px solid var(--accent); padding: 12px; border-radius: 6px;">
                      <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-size: 14px;">ℹ️ ${escapeHtml(t("holistic_eval_title"))}</strong>
                      <span style="color: var(--foreground); font-size: 13px; line-height: 1.4; display: block;">${escapeHtml(t("holistic_eval_desc"))}</span>
                    </div>`
                  : ""
              }
              <div class="check-list">
                ${primaryChecks
                  .map(
                    (check) => `
                      <div class="check-item ${check.pass ? "pass" : "fail"} ${check.type ? 'check-' + check.type : ''}">
                        <span>${escapeHtml(check.label)}</span>
                        <strong>${check.pass ? t("tag_pass") : t("tag_fail")}</strong>
                      </div>
                    `
                  )
                  .join("")}
              </div>
              ${
                extraChecks.length
                  ? `<details class="result-details">
                      <summary>${t("roadmap_extra_summary").replace("{count}", extraChecks.length)}</summary>
                      <p class="result-detail-note">${t("roadmap_extra_note")}</p>
                      <div class="check-list">
                        ${extraChecks
                          .map(
                            (check) => `
                              <div class="check-item ${check.pass ? "pass" : "fail"} ${check.type ? 'check-' + check.type : ''}">
                                <span>${escapeHtml(check.label)}</span>
                                <strong>${check.pass ? t("tag_pass") : t("tag_fail")}</strong>
                              </div>
                            `
                          )
                          .join("")}
                      </div>
                    </details>`
                  : ""
              }
              ${
                recommendedItems.length
                  ? `<details class="result-details recommended-details">
                      <summary>${t("roadmap_recommended_summary").replace("{count}", recommendedItems.length)}</summary>
                      <ul>
                        ${recommendedItems
                          .map(
                            (item) => `
                              <li>
                                <strong>${escapeHtml(item.label)}</strong>
                                <span>${escapeHtml(item.detail || t("rec_course_detail"))}</span>
                              </li>
                            `
                          )
                          .join("")}
                      </ul>
                    </details>`
                  : ""
              }
              ${
                reviewItems.length
                  ? `<details class="result-details review-details">
                      <summary>${t("roadmap_review_summary").replace("{count}", reviewItems.length)}</summary>
                      <ul>
                        ${reviewItems
                          .map(
                            (item) => `
                              <li>
                                <strong>${escapeHtml(reviewFocus(item))}</strong>
                                <span>${escapeHtml(item.raw || item)}</span>
                              </li>
                            `
                          )
                          .join("")}
                      </ul>
                    </details>`
                  : ""
              }
              ${
                evaluation.additionalInfo.length
                  ? `<p class="result-note">${evaluation.additionalInfo.map((item) => escapeHtml(item)).join("<br />")}</p>`
                  : ""
              }
            </article>
          </div>
        `;
      })
      .join("") || `<div class="panel"><strong>${t("no_targets_selected")}</strong></div>`;
}

function scrollToSection(selector) {
  const target = qs(selector);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function activateProductTab(tabName, shouldScroll = true) {
  if (!checkPlanAccess(tabName)) {
    openPricingModal();
    return;
  }
  const button = qs(`[data-tab="${tabName}"]`);
  const panel = qs(`#${tabName}`);
  if (!button || !panel) return;
  qsa(".tab-button").forEach((item) => item.classList.remove("active"));
  qsa(".tab-panel").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  panel.classList.add("active");
  qs("#pageTitle").textContent = t("tab_" + tabName, pageTitles[tabName]);
  
  // Smooth scroll active tab button into center on mobile viewport
  button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

  if (tabName === "requirements") {
    const searchInput = qs("#requirementSearch");
    if (searchInput) {
      searchInput.value = "";
      setTimeout(() => searchInput.focus(), 50);
    }
    renderRequirementDetail("");
  }

  if (shouldScroll) scrollToSection("#demo");
}



function renderRequirementControls() {
  const sortedPrograms = allPrograms().sort(
    (a, b) => a.school.name.localeCompare(b.school.name) || a.name.localeCompare(b.name)
  );
  const options = allPrograms()
    .map((program) => `<option value="${escapeHtml(program.id)}">${escapeHtml(program.school.shortName)} · ${escapeHtml(program.name)}</option>`)
    .join("");
  qs("#requirementSelect").innerHTML = options;
  const roadmapTarget = qs("#roadmapTarget");
  if (roadmapTarget) {
    roadmapTarget.innerHTML = options;
  }
  const firstProgramId = allPrograms()[0]?.id;
  if (firstProgramId) {
    qs("#requirementSelect").value = firstProgramId;
    if (roadmapTarget) {
      roadmapTarget.value = firstProgramId;
    }
  }

  const renderRequirementMenu = (query = "") => {
    const menu = qs("#requirementMenu");
    const normalizedQuery = normalizeText(query);
    const matches = sortedPrograms
      .filter(
        (program) =>
          !normalizedQuery ||
          normalizeText(`${program.school.name} ${program.school.shortName} ${program.name}`).includes(normalizedQuery)
      )
      .slice(0, 140);
    menu.innerHTML = matches.length
      ? matches
          .map(
            (program) => `
              <button type="button" data-pick-requirement="${escapeHtml(program.id)}">
                <strong>${escapeHtml(program.school.name)}</strong>
                <span>${escapeHtml(program.name)}</span>
              </button>
            `
          )
          .join("")
      : `<div class="search-empty">${t("search_empty")}</div>`;
    menu.classList.add("open");
  };

  qs("#requirementSelect").addEventListener("change", () => renderRequirementDetail(qs("#requirementSelect").value));
  let requirementBlurTimeout;
  qs("#requirementSearch").addEventListener("focus", (event) => {
    clearTimeout(requirementBlurTimeout);
    renderRequirementMenu(event.target.value);
  });
  qs("#requirementSearch").addEventListener("blur", () => {
    requirementBlurTimeout = setTimeout(() => {
      qs("#requirementMenu")?.classList.remove("open");
    }, 200);
  });
  qs("#requirementSearch").addEventListener("input", (event) => renderRequirementMenu(event.target.value));
  qs("#requirementMenu").addEventListener("mousedown", (event) => {
    clearTimeout(requirementBlurTimeout);
    const button = event.target.closest("[data-pick-requirement]");
    if (!button) return;
    event.preventDefault();
    const program = allPrograms().find((item) => item.id === button.dataset.pickRequirement);
    if (!program) return;
    qs("#requirementSearch").value = `${program.school.name} · ${program.name}`;
    qs("#requirementSelect").value = program.id;
    qs("#requirementMenu").classList.remove("open");
    renderRequirementDetail(program.id);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".requirement-search-field")) {
      qs("#requirementMenu")?.classList.remove("open");
    }
    document.querySelectorAll(".autocomplete-container").forEach((ac) => {
      const menu = ac.querySelector(".autocomplete-menu");
      if (menu && !ac.contains(event.target)) {
        menu.classList.add("hidden");
      }
    });
    const essayContainer = qs("#essayTargetContainer");
    if (essayContainer && !essayContainer.contains(event.target)) {
      qs("#essayTargetMenu")?.classList.add("hidden");
    }
  });
  renderRequirementDetail(allPrograms()[0]?.id);
}

function renderMappedCourseList(courses) {
  return courses.length
    ? courses
        .map(
          (course) => `
            <li>
              <strong>${escapeHtml(course.name)}</strong>
              <span>${escapeHtml(course.category)}${course.isLab ? " · Lab" : ""}</span>
            </li>
          `
        )
        .join("")
    : `<li><strong>${escapeHtml(t("no_mapped_items"))}</strong><span>${escapeHtml(t("mapped_items_desc"))}</span></li>`;
}

function renderReviewList(items) {
  return items.length
    ? items
        .slice(0, 20)
        .map(
          (item) =>
            `<li><strong>${escapeHtml(reviewFocus(item))}</strong><span>${escapeHtml(item.reason || t("review_reason"))}<br />Source: ${escapeHtml(
              item.raw || item
            )}</span></li>`
        )
        .join("")
    : `<li><strong>${escapeHtml(t("no_review_items"))}</strong><span>${escapeHtml(t("review_items_desc"))}</span></li>`;
}

function renderInfoList(items) {
  return items.length
    ? items.map((item) => `<li><strong>${escapeHtml(item)}</strong><span>${escapeHtml(t("roadmap_extra_note"))}</span></li>`).join("")
    : `<li><strong>${escapeHtml(t("no_extra_info"))}</strong><span>${escapeHtml(t("extra_info_desc"))}</span></li>`;
}

function renderEnglishRequirementRows(english) {
  const rows = [
    ["TOEFL", english?.TOEFL],
    ["TOEFL 2026 Jan Revised", english?.TOEFL_2026],
    ["IELTS", english?.IELTS],
    ["Duolingo", english?.Duolingo]
  ].filter(([, value]) => value !== null && value !== undefined && value !== "");

  return rows.length
    ? rows
        .map(([label, value]) => `<div class="check-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`)
        .join("")
    : "";
}

function renderChoiceList(items) {
  return items.length
    ? items
        .map(
          (item) => `
            <li>
              <strong>${escapeHtml(item.options.length ? item.options.map((course) => course.name).join(" / ") : item.raw)}</strong>
              <span>${escapeHtml(item.options.length ? t("opt_condition_desc") : t("choice_note"))}</span>
            </li>
          `
        )
        .join("")
    : `<li><strong>${escapeHtml(t("no_opt_conditions"))}</strong><span>${escapeHtml(t("opt_conditions_desc"))}</span></li>`;
}

function renderLaterList(items) {
  return items.length
    ? items
        .map(
          (item) => `
            <li>
              <strong>${escapeHtml(item.options.length ? item.options.map((course) => course.name).join(" / ") : item.raw)}</strong>
              <span>${escapeHtml(t("roadmap_tag_choice"))}</span>
            </li>
          `
        )
        .join("")
    : `<li><strong>${escapeHtml(t("no_enroll_conditions"))}</strong><span>${escapeHtml(t("enroll_conditions_desc"))}</span></li>`;
}

function renderRequirementDetail(programId) {
  const isSearchEmpty = !qs("#requirementSearch")?.value?.trim();
  if (!programId || isSearchEmpty) {
    qs("#requirementDetail").innerHTML = `
      <div class="placeholder-view" style="text-align: center; padding: 60px 20px;">
        <div style="font-size: 48px; margin-bottom: 20px;">🔍</div>
        <h3 style="color: var(--foreground); margin-bottom: 8px;" data-i18n="req_finder_placeholder_title">${escapeHtml(t("req_finder_placeholder_title"))}</h3>
        <p style="color: var(--muted); font-size: 14px; max-width: 400px; margin: 0 auto;" data-i18n="req_finder_placeholder_desc">${escapeHtml(t("req_finder_placeholder_desc"))}</p>
      </div>
    `;
    return;
  }
  const program = allPrograms().find((item) => item.id === programId);
  if (!program) return;
  const summary = summarizeProgramCourses(program);
  const additionalInfo = additionalInfoForProgram(program);
  const verificationNotice = verificationNoticeForProgram(program);
  const requiredCourseIds = new Set(summary.required.mapped.map((course) => course.id));
  const recommendedMapped = summary.recommended.mapped.filter((course) => !requiredCourseIds.has(course.id));
  const recommendedChoices = summary.recommended.choices
    .map((choice) => ({ ...choice, options: choice.options.filter((course) => !requiredCourseIds.has(course.id)) }))
    .filter((choice) => choice.options.length || choice.raw);
  const recommendedLater = summary.recommended.later
    .map((item) => ({ ...item, options: item.options.filter((course) => !requiredCourseIds.has(course.id)) }))
    .filter((item) => item.options.length || item.raw);
  const englishReviewItems = (program.english?.review || []).map((raw) => ({
    raw,
    reason: t("eng_review_reason")
  }));
  const requirementRows = [
    program.minGpa !== null
      ? `<div class="check-item"><span>Minimum GPA</span><strong>${escapeHtml(displayRawRequirement(program.rawMinGpa, program.minGpa))}</strong></div>`
      : "",
    program.minCredits !== null
      ? `<div class="check-item"><span>Minimum Credits</span><strong>${escapeHtml(displayRawRequirement(program.rawMinCredits, program.minCredits))}</strong></div>`
      : ""
  ].join("");

  const isHolistic =
    summary.required.mapped.length === 0 &&
    recommendedMapped.length === 0 &&
    summary.required.choices.length === 0 &&
    recommendedChoices.length === 0 &&
    summary.required.later.length === 0 &&
    recommendedLater.length === 0 &&
    summary.required.review.length === 0 &&
    summary.recommended.review.length === 0;

  let detailHtml = `
    <article class="requirement-card">
      <h3>${escapeHtml(program.school.name)}</h3>
      <p>${escapeHtml(program.name)}</p>
      <div class="badge-container">${getConfidenceBadgeHtml(program)}</div>
      ${
        verificationNotice
          ? `<div class="verification-alert">
              <strong>${escapeHtml(verificationNotice.label)}</strong>
              <span>${escapeHtml(verificationNotice.detail)}</span>
            </div>`
          : ""
      }
      <p>${escapeHtml(program.note || t("note_fallback"))}</p>
      ${requirementRows ? `<div class="check-list">${requirementRows}</div>` : ""}
    </article>
  `;

  if (isHolistic) {
    detailHtml += `
      <article class="requirement-card" style="border-left: 4px solid var(--accent);">
        <h3 style="color: var(--accent); display: flex; align-items: center; gap: 8px;">
          <span>ℹ️</span> ${escapeHtml(t("holistic_eval_title"))}
        </h3>
        <p style="font-size: 15px; line-height: 1.6; color: var(--foreground); margin-top: 10px;">
          ${escapeHtml(t("holistic_eval_desc"))}
        </p>
      </article>
    `;
  } else {
    detailHtml += `
      <article class="requirement-card">
        <h3>${t("section_required_title")}</h3>
        <ul class="course-list">${renderMappedCourseList(summary.required.mapped)}</ul>
      </article>
      <article class="requirement-card">
        <h3>${t("section_recommended_title")}</h3>
        <ul class="course-list">${renderMappedCourseList(recommendedMapped)}</ul>
      </article>
      <article class="requirement-card">
        <h3>${t("section_choices_title")}</h3>
        <ul class="course-list">${renderChoiceList([...summary.required.choices, ...recommendedChoices])}</ul>
      </article>
      <article class="requirement-card">
        <h3>${t("section_enroll_title")}</h3>
        <ul class="course-list">${renderLaterList([...summary.required.later, ...recommendedLater])}</ul>
      </article>
      <article class="requirement-card">
        <h3>${t("section_review_title")}</h3>
        <ul class="course-list">${renderReviewList([...summary.required.review, ...summary.recommended.review, ...englishReviewItems])}</ul>
      </article>
    `;
  }

  detailHtml += `
    <article class="requirement-card">
      <h3>${t("section_extra_title")}</h3>
      <ul class="course-list">${renderInfoList(additionalInfo)}</ul>
    </article>
    ${
      renderEnglishRequirementRows(program.english)
        ? `<article class="requirement-card">
            <h3>English Requirements</h3>
            <div class="check-list">${renderEnglishRequirementRows(program.english)}</div>
            <p>${escapeHtml(program.english?.raw || "")}</p>
          </article>`
        : ""
    }
  `;

  qs("#requirementDetail").innerHTML = detailHtml;
}

function orderRoadmapCourses(courses) {
  return [...courses].sort((a, b) => {
    if (a.level !== b.level) return a.level - b.level;
    if (courseCategoryOrder[a.category] !== courseCategoryOrder[b.category]) return courseCategoryOrder[a.category] - courseCategoryOrder[b.category];
    return a.name.localeCompare(b.name);
  });
}

function courseUnits(course) {
  return course.isLab ? 0 : 1;
}

function bucketUnits(bucket) {
  return bucket.courses.reduce((total, course) => total + courseUnits(course), 0);
}

const ROADMAP_PREREQUISITES = {
  "eng-comp-2": ["eng-comp-1"],
  "calc-2": ["calc-1"],
  "calc-3": ["calc-2"],
  "diff-eq": ["calc-2"],
  "linear-algebra": ["calc-2"],
  "physics-2": ["physics-1"],
  "physics-1-lab": ["physics-1"],
  "physics-2-lab": ["physics-2"],
  "chem-2": ["chem-1"],
  "chem-1-lab": ["chem-1"],
  "chem-2-lab": ["chem-2"],
  "data-structures": ["intro-programming"],
  "oop": ["intro-programming"],
  "dynamics": ["statics"],
  "engineering-foundations-2": ["engineering-foundations-1"],
  "solid-mechanics": ["statics"]
};

function topologicalSort(courses) {
  const courseMap = new Map(courses.map(c => [c.id, c]));
  const adj = new Map();
  const inDegree = new Map();

  courses.forEach(c => {
    adj.set(c.id, []);
    inDegree.set(c.id, 0);
  });

  courses.forEach(c => {
    const prereqs = ROADMAP_PREREQUISITES[c.id] || [];
    prereqs.forEach(preId => {
      if (courseMap.has(preId)) {
        adj.get(preId).push(c.id);
        inDegree.set(c.id, inDegree.get(c.id) + 1);
      }
    });
  });

  const queue = [];
  courses.forEach(c => {
    if (inDegree.get(c.id) === 0) {
      queue.push(c);
    }
  });

  const sortIndependent = (arr) => {
    return arr.sort((a, b) => {
      // 1. required/english가 recommended보다 무조건 우선
      const prioA = a.priority === "required" || a.priority === "english" ? 1 : 2;
      const prioB = b.priority === "required" || b.priority === "english" ? 1 : 2;
      if (prioA !== prioB) return prioA - prioB;
      
      // 2. level 순서
      if (a.level !== b.level) return a.level - b.level;
      
      // 3. 카테고리 순서
      const catA = courseCategoryOrder[a.category] || 0;
      const catB = courseCategoryOrder[b.category] || 0;
      if (catA !== catB) return catA - catB;
      
      return a.name.localeCompare(b.name);
    });
  };

  const result = [];
  while (queue.length > 0) {
    sortIndependent(queue);
    const u = queue.shift();
    result.push(u);

    const neighbors = adj.get(u.id) || [];
    neighbors.forEach(vId => {
      inDegree.set(vId, inDegree.get(vId) - 1);
      if (inDegree.get(vId) === 0) {
        queue.push(courseMap.get(vId));
      }
    });
  }

  if (result.length < courses.length) {
    courses.forEach(c => {
      if (!result.some(r => r.id === c.id)) {
        result.push(c);
      }
    });
  }

  return result;
}

function buildRoadmap() {
  const selectedPrograms = allPrograms().filter((p) => state.selectedRoadmapTargets.includes(p.id));
  const timeline = qs("#roadmapTimeline");
  if (!timeline) return;

  if (selectedPrograms.length === 0) {
    timeline.innerHTML = `
      <div class="placeholder-view" style="color: var(--muted); text-align: center; padding: 40px 0; border: 1px dashed var(--line); border-radius: 12px; width: 100%;">
        <p>${escapeHtml(t("no_targets_selected", "No target programs selected."))}</p>
      </div>
    `;
    return;
  }

  const programsToPlan = selectedPrograms;

  const allRequiredCourses = new Map();
  const allRecommendedCourses = new Map();
  const allChoices = [];

  programsToPlan.forEach(program => {
    const summary = summarizeProgramCourses(program);
    summary.required.mapped.forEach(c => allRequiredCourses.set(c.id, c));
    summary.recommended.mapped.forEach(c => allRecommendedCourses.set(c.id, c));
    summary.required.choices.forEach(choice => allChoices.push(choice));
    summary.recommended.choices.forEach(choice => allChoices.push(choice));
  });

  for (let reqId of allRequiredCourses.keys()) {
    allRecommendedCourses.delete(reqId);
  }

  const requiredCourseIds = new Set(allRequiredCourses.keys());
  const fixedEnglish1 = courseCatalog.find((course) => course.id === "eng-comp-1");
  const fixedEnglish2 = courseCatalog.find((course) => course.id === "eng-comp-2");
  
  const required = orderRoadmapCourses([...allRequiredCourses.values()].filter((course) => !isCourseSatisfied(course.id))).map((course) => ({
    ...course,
    priority: "required",
    label: t("roadmap_tag_required")
  }));
  const recommended = orderRoadmapCourses(
    [...allRecommendedCourses.values()].filter((course) => !requiredCourseIds.has(course.id) && !isCourseSatisfied(course.id))
  ).map((course) => ({
    ...course,
    priority: "recommended",
    label: t("roadmap_tag_recommended")
  }));

  const seenChoiceOptions = new Set();
  const choiceCourses = [];
  allChoices.forEach((choice) => {
    const isSatisfied = choice.options.some((course) => isCourseSatisfied(course.id));
    if (!isSatisfied) {
      const option = choice.options.find((course) => !isCourseSatisfied(course.id));
      if (option && !seenChoiceOptions.has(option.id)) {
        seenChoiceOptions.add(option.id);
        choiceCourses.push({
          ...option,
          priority: "required",
          label: t("roadmap_tag_choice")
        });
      }
    }
  });
    
  const rawQueue = [
    fixedEnglish1 && { ...fixedEnglish1, priority: "english", label: t("roadmap_eng_first_term") },
    fixedEnglish2 && { ...fixedEnglish2, priority: "english", label: t("roadmap_eng_second_term") },
    ...required.filter((course) => course.id !== "eng-comp-1" && course.id !== "eng-comp-2"),
    ...choiceCourses,
    ...recommended.filter((course) => course.id !== "eng-comp-1" && course.id !== "eng-comp-2")
  ].filter(Boolean);

  // 1. Remove duplicates
  const seen = new Set();
  const uniqueQueue = [];
  rawQueue.forEach(course => {
    if (!seen.has(course.id)) {
      seen.add(course.id);
      uniqueQueue.push(course);
    }
  });

  // 2. Topological sort with required priority
  const queue = topologicalSort(uniqueQueue);

  const admissionYear = Number(qs("#admissionYear").value);
  const terms =
    qs("#admissionTerm").value === "Fall"
      ? [`${admissionYear - 1} Fall`, `${admissionYear} Spring`, `${admissionYear} Summer`]
      : [`${admissionYear - 1} Spring`, `${admissionYear - 1} Summer`, `${admissionYear - 1} Fall`];
  const buckets = terms.map((term) => ({ term, courses: [] }));

  function getNextTerm(term) {
    const parts = term.split(" ");
    const year = parseInt(parts[0], 10);
    const season = parts[1];
    if (season === "Fall") {
      return `${year + 1} Spring`;
    } else if (season === "Spring") {
      return `${year} Summer`;
    } else {
      return `${year} Fall`;
    }
  }

  // 3. Place courses sequentially, keeping Lecture/Lab linked together in same term
  queue.forEach((course) => {
    // If course was already placed (e.g. as a child lab coupled with lecture) skip it
    const isAlreadyPlaced = buckets.some(b => b.courses.some(c => c.id === course.id));
    if (isAlreadyPlaced) return;

    // Skip lab if its linked lecture is still in the queue and not yet placed
    if (course.isLab && course.linkedTo) {
      const parentLectureInQueue = queue.some(c => c.id === course.linkedTo);
      const parentLecturePlaced = buckets.some(b => b.courses.some(c => c.id === course.linkedTo));
      if (parentLectureInQueue && !parentLecturePlaced) {
        return;
      }
    }

    const targetIndex = course.id === "eng-comp-1" ? 0 : course.id === "eng-comp-2" ? 1 : null;
    let candidates = targetIndex === null ? buckets : [buckets[targetIndex]].filter(Boolean);

    // Prerequisites index checking
    const prereqs = ROADMAP_PREREQUISITES[course.id] || [];
    let minBucketIndex = 0;
    prereqs.forEach(preId => {
      const preBucketIdx = buckets.findIndex(b => b.courses.some(c => c.id === preId));
      if (preBucketIdx !== -1) {
        minBucketIndex = Math.max(minBucketIndex, preBucketIdx + 1);
      }
    });

    candidates = candidates.filter((b) => buckets.indexOf(b) >= minBucketIndex);
    if (candidates.length === 0) {
      candidates = buckets.filter((_, idx) => idx >= minBucketIndex);
    }

    const linkedBucket = course.linkedTo
      ? buckets.find((item) => item.courses.some((existing) => existing.id === course.linkedTo))
      : null;
    
    const isLinkedBucketValid = linkedBucket && buckets.indexOf(linkedBucket) >= minBucketIndex;

    let bucket =
      (isLinkedBucketValid && bucketUnits(linkedBucket) + courseUnits(course) <= 4 ? linkedBucket : null) ||
      candidates.find((item) => bucketUnits(item) + courseUnits(course) <= 4 && !item.courses.some((existing) => existing.category === course.category)) ||
      candidates.find((item) => bucketUnits(item) + courseUnits(course) <= 4) ||
      buckets.find((item) => buckets.indexOf(item) >= minBucketIndex && bucketUnits(item) + courseUnits(course) <= 4);
    
    if (!bucket) {
      const lastTerm = buckets[buckets.length - 1].term;
      const nextTermName = getNextTerm(lastTerm);
      bucket = { term: nextTermName, courses: [] };
      buckets.push(bucket);
    }

    if (bucket && !bucket.courses.some((item) => item.id === course.id)) {
      bucket.courses.push(course);

      // Force-add the corresponding Lab course to the same term bucket if it is in the queue
      const childLab = queue.find(c => c.linkedTo === course.id);
      if (childLab && !bucket.courses.some((item) => item.id === childLab.id)) {
        bucket.courses.push(childLab);
      }
    }
  });

  qs("#roadmapTimeline").innerHTML = buckets
    .map(
      (bucket) => {
        const requireds = bucket.courses.filter(item => item.priority !== "recommended");
        const recommendeds = bucket.courses.filter(item => item.priority === "recommended");
        
        let coursesHtml = "";
        if (bucket.courses.length === 0) {
          coursesHtml = `<div class="term-course"><strong>${escapeHtml(t("buffer_term_title"))}</strong><small>${escapeHtml(t("buffer_term_desc"))}</small></div>`;
        } else {
          if (requireds.length > 0) {
            coursesHtml += requireds.map(item => `
              <div class="term-course ${item.priority}">
                <strong>${escapeHtml(item.name)}</strong>
                <small>${escapeHtml(item.label)} · ${escapeHtml(item.category)}${item.isLab ? " · Lab" : ""}</small>
              </div>
            `).join("");
          }
          if (recommendeds.length > 0) {
            coursesHtml += `
              <button type="button" class="link-btn toggle-recommended-btn" onclick="toggleRecommendedCourses(this)" style="margin-top: 8px; margin-bottom: 8px; font-size: 11.5px; color: #818cf8; font-weight: 700; background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 4px; padding: 0;">
                <span>👁️</span> 
                <span>${escapeHtml(t("btn_toggle_recommended", "Toggle Recommended"))}</span>
              </button>
              <div class="recommended-wrapper hidden" style="display: grid; gap: 8px; width: 100%;">
                ${recommendeds.map(item => `
                  <div class="term-course ${item.priority}">
                    <strong>${escapeHtml(item.name)}</strong>
                    <small>${escapeHtml(item.label)} · ${escapeHtml(item.category)}${item.isLab ? " · Lab" : ""}</small>
                  </div>
                `).join("")}
              </div>
            `;
          }
        }
        
        return `
          <article class="term-card">
            <h3>${escapeHtml(bucket.term)}</h3>
            <div class="term-courses">
              ${coursesHtml}
            </div>
          </article>
        `;
      }
    )
    .join("");
}

function bindEvents() {
  qsa(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      activateProductTab(button.dataset.tab, false);
    });
  });

  qsa(".site-nav a, .hero-actions a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash?.startsWith("#")) return;
      if (hash === "#demo") {
        event.preventDefault();
        activateProductTab("eligibility");
        history.replaceState(null, "", hash);
      } else if (["#requirements", "#roadmap", "#essay"].includes(hash)) {
        event.preventDefault();
        activateProductTab(hash.slice(1));
        history.replaceState(null, "", hash);
      }
    });
  });

  qs("#gpaInput").addEventListener("input", (event) => {
    let val = event.target.value;
    if (val === "") return;
    let num = Number(val);
    if (isNaN(num)) num = 0;
    if (num < 0) num = 0;
    if (num > 4.0) num = 4.0;
    state.gpa = num;
    saveProfileToLocalStorage();
    renderEligibilityResults();
  });
  qs("#gpaInput").addEventListener("blur", (event) => {
    let num = Number(event.target.value);
    if (isNaN(num) || event.target.value === "") num = 3.0;
    if (num < 0) num = 0;
    if (num > 4.0) num = 4.0;
    num = Math.round(num * 100) / 100;
    state.gpa = num;
    event.target.value = num.toFixed(2);
    saveProfileToLocalStorage();
    renderEligibilityResults();
  });

  qs("#creditsInput").addEventListener("input", (event) => {
    let val = event.target.value;
    if (val === "") return;
    let num = Math.floor(Number(val));
    if (isNaN(num)) num = 0;
    if (num < 0) num = 0;
    if (num > 150) num = 150;
    state.credits = num;
    saveProfileToLocalStorage();
    renderEligibilityResults();
  });
  qs("#creditsInput").addEventListener("blur", (event) => {
    let num = Math.floor(Number(event.target.value));
    if (isNaN(num) || event.target.value === "") num = 0;
    if (num < 0) num = 0;
    if (num > 150) num = 150;
    state.credits = num;
    event.target.value = num;
    saveProfileToLocalStorage();
    renderEligibilityResults();
  });

  qs("#internationalInput").addEventListener("change", (event) => {
    state.international = event.target.checked;
    qs("#englishFields").classList.toggle("hidden", !state.international || state.englishWaiver);
    qs("#englishWaiverRow").classList.toggle("hidden", !state.international);
    saveProfileToLocalStorage();
    renderEligibilityResults();
  });
  qs("#englishWaiverInput").addEventListener("change", (event) => {
    state.englishWaiver = event.target.checked;
    qs("#englishFields").classList.toggle("hidden", state.englishWaiver || !state.international);
    saveProfileToLocalStorage();
    renderEligibilityResults();
  });
  qs("#englishTypeInput").addEventListener("change", (event) => {
    state.englishType = event.target.value;
    updateEnglishScoreInputConstraints();
    saveProfileToLocalStorage();
    renderEligibilityResults();
    buildRoadmap();
  });
  qs("#englishScoreInput").addEventListener("input", (event) => {
    let val = event.target.value;
    if (val === "") return;
    let num = Number(val);
    if (isNaN(num)) num = 0;
    if (num < 0) num = 0;
    const maxMap = { TOEFL: 120, TOEFL_2026: 6, IELTS: 9, Duolingo: 160 };
    const maxVal = maxMap[state.englishType] || 120;
    if (num > maxVal) num = maxVal;
    state.englishScore = num;
    saveProfileToLocalStorage();
    renderEligibilityResults();
  });
  qs("#englishScoreInput").addEventListener("blur", (event) => {
    let num = Number(event.target.value);
    const maxMap = { TOEFL: 120, TOEFL_2026: 6, IELTS: 9, Duolingo: 160 };
    const maxVal = maxMap[state.englishType] || 120;
    if (isNaN(num) || event.target.value === "") num = 0;
    if (num < 0) num = 0;
    if (num > maxVal) num = maxVal;
    state.englishScore = num;
    event.target.value = num;
    saveProfileToLocalStorage();
    renderEligibilityResults();
  });

  qs("#checkEligibilityBtn").addEventListener("click", () => {
    renderEligibilityResults();
    scrollToSection("#eligibilityResults");
  });

  qs("#buildRoadmapBtn").addEventListener("click", buildRoadmap);
  const roadmapTarget = qs("#roadmapTarget");
  if (roadmapTarget) {
    roadmapTarget.addEventListener("change", buildRoadmap);
  }
  qs("#admissionYear").addEventListener("change", (event) => {
    state.admissionYear = Number(event.target.value);
    saveProfileToLocalStorage();
    buildRoadmap();
  });
  qs("#admissionTerm").addEventListener("change", (event) => {
    state.admissionTerm = event.target.value;
    saveProfileToLocalStorage();
    buildRoadmap();
  });

  qs("#langSelector")?.addEventListener("change", (event) => {
    switchLanguage(event.target.value);
  });
  qs("#openPricingBtn")?.addEventListener("click", openPricingModal);
  qs("#pricingCloseBtn")?.addEventListener("click", closePricingModal);
  qs("#pricingModal")?.addEventListener("click", (event) => {
    if (event.target.id === "pricingModal") closePricingModal();
  });

  // Clear Courses Event
  qs("#clearCoursesBtn")?.addEventListener("click", () => {
    state.completedCourses.clear();
    saveProfileToLocalStorage();
    renderCourseGroups();
    renderEligibilityResults();
    buildRoadmap();
  });

  // ESC key listener to close modals
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePricingModal();
      closeAuthModal();
    }
  });
}

function initScrollEffects() {
  const targets = qsa(".section, .school-coverage, .feedback-section, .product-section, .feature-grid article, .panel, .result-card");
  targets.forEach((target) => {
    target.classList.add("reveal");
    target.classList.add("visible");
  });
}

function initStatsText() {
}

function readFeedbackItems() {
  try {
    return JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeFeedbackItems(items) {
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(items));
}

function renderFeedbackInbox() {
  const list = qs("#feedbackList");
  if (!list) return;
  const items = readFeedbackItems();
  list.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <article class="feedback-entry">
              <time>${escapeHtml(new Date(item.createdAt).toLocaleString())}</time>
              <p>${escapeHtml(item.message)}</p>
            </article>
          `
        )
        .join("")
    : `<div class="feedback-entry"><p>No feedback yet.</p></div>`;
}

function bindFeedback() {
  const form = qs("#feedbackForm");
  if (!form) return;
  const input = qs("#feedbackInput");
  const status = qs("#feedbackStatus");
  const inbox = qs("#feedbackInbox");

  input.addEventListener("focus", () => {
    status.textContent = "";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) {
      status.style.color = "#ef4444";
      status.textContent = t("feedback_empty_alert", "Please write feedback before submitting.");
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    const originalBtnText = submitBtn ? submitBtn.textContent : "Submit Feedback";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t("essay_generating_label", "Sending...");
    }
    status.style.color = "var(--muted)";
    status.textContent = t("feedback_sending", "Sending feedback...");

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message || "Failed to send feedback.");
      }

      const items = readFeedbackItems();
      items.unshift({ message, createdAt: new Date().toISOString() });
      writeFeedbackItems(items);
      input.value = "";
      
      status.style.color = "#10b981"; // Success green
      status.textContent = t("feedback_success", "Thank you! Your feedback has been sent successfully.");
      
      renderFeedbackInbox();
    } catch (err) {
      console.error(err);
      status.style.color = "#ef4444"; // Error red
      status.textContent = `${t("feedback_failed", "Feedback submission failed:")} ${err.message}`;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
      setTimeout(() => {
        const currentText = status.textContent;
        if (currentText.includes("Thank you") || currentText.includes("감사합니다") || currentText.includes("谢谢") || currentText.includes("Error:") || currentText.includes("실패했습니다") || currentText.includes("失败")) {
          status.textContent = "";
        }
      }, 5000);
    }
  });
  qs("#feedbackInboxToggle")?.addEventListener("click", () => {
    inbox.classList.toggle("hidden");
    renderFeedbackInbox();
  });
  qs("#clearFeedbackBtn")?.addEventListener("click", () => {
    writeFeedbackItems([]);
    renderFeedbackInbox();
    status.style.color = "var(--muted)";
    status.textContent = "Private feedback inbox cleared.";
    setTimeout(() => {
      if (status.textContent === "Private feedback inbox cleared.") {
        status.textContent = "";
      }
    }, 4000);
  });
}

function syncUserEssayCredits(currentUser, authState) {
  if (currentUser === "haminkim@uwm.edu") {
    authState.users[currentUser].essayCredits = 999999;
    return 999999;
  }
  const userProfile = authState.users[currentUser];
  if (!userProfile) return 0;
  userProfile.creditPacks = userProfile.creditPacks || [];
  
  const nowStr = new Date().toISOString();
  // Filter out expired or fully consumed packs
  const activePacks = userProfile.creditPacks.filter(p => new Date(p.expiresAt) > new Date(nowStr) && p.count > 0);
  
  const totalCredits = activePacks.reduce((sum, p) => sum + p.count, 0);
  userProfile.essayCredits = totalCredits;
  userProfile.creditPacks = activePacks;
  return totalCredits;
}

function readAuthState() {
  try {
    const state = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "{}");
    state.users = state.users || {};
    
    // Always inject/ensure haminkim@uwm.edu exists with Premium + Infinite credits
    state.users["haminkim@uwm.edu"] = {
      passwordHash: "c2d3283bfac96056cdafff8f76b1c159a7802671a4e9ba54d6c145c546bdec07",
      fallbackHash: "fallback_77cf196e",
      createdAt: "2026-06-08T22:15:00.000Z",
      plan: "Premium",
      essayCredits: 999999,
      nationality: "Korea",
      birthdate: "2006-06-03"
    };
    
    return state;
  } catch {
    return {
      users: {
        "haminkim@uwm.edu": {
          passwordHash: "c2d3283bfac96056cdafff8f76b1c159a7802671a4e9ba54d6c145c546bdec07",
          fallbackHash: "fallback_77cf196e",
          createdAt: "2026-06-08T22:15:00.000Z",
          plan: "Premium",
          essayCredits: 999999,
          nationality: "Korea",
          birthdate: "2006-06-03"
        }
      }
    };
  }
}

function writeAuthState(authState) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authState));
}

async function hashPassword(password) {
  if (!window.crypto || !window.crypto.subtle) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return "fallback_" + Math.abs(hash).toString(16);
  }
  try {
    const data = new TextEncoder().encode(password);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  } catch (e) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return "fallback_" + Math.abs(hash).toString(16);
  }
}

function renderAuthState() {
  const authState = readAuthState();
  const currentUser = authState.currentUser || "";
  qs("#authStatus").textContent = currentUser ? currentUser : "Guest";
  qs("#loginOpenBtn").classList.toggle("hidden", Boolean(currentUser));
  qs("#signupOpenBtn").classList.toggle("hidden", Boolean(currentUser));
  qs("#logoutBtn").classList.toggle("hidden", !currentUser);
  qs("#profileOpenBtn").classList.toggle("hidden", !currentUser);
  
  if (typeof renderSideDrawerUserSection === "function") {
    renderSideDrawerUserSection();
  }
}

function openAuthModal(mode) {
  const modal = qs("#authModal");
  modal.dataset.mode = mode;
  qs("#authTitle").textContent = mode === "signup" ? "Sign up" : "Log in";
  qs("#authModeLabel").textContent = mode === "signup" ? "Create account" : "Account";
  qs("#authSubmitBtn").textContent = mode === "signup" ? "Create account" : "Log in";
  qs("#authMessage").textContent = "";
  qs("#authPassword").value = "";
  
  const consentRow = qs("#authConsentRow");
  const consentInput = qs("#authConsent");
  if (consentRow && consentInput) {
    if (mode === "signup") {
      consentRow.classList.remove("hidden");
      consentInput.required = true;
      consentInput.checked = false;
    } else {
      consentRow.classList.add("hidden");
      consentInput.required = false;
      consentInput.checked = false;
    }
  }
  
  const birthdateRow = qs("#authBirthdateRow");
  const birthdateInput = qs("#authBirthdate");
  if (birthdateRow && birthdateInput) {
    if (mode === "signup") {
      birthdateRow.classList.remove("hidden");
      birthdateInput.required = true;
      birthdateInput.value = "";
    } else {
      birthdateRow.classList.add("hidden");
      birthdateInput.required = false;
      birthdateInput.value = "";
    }
  }

  const nationalityRow = qs("#authNationalityRow");
  if (nationalityRow) {
    if (mode === "signup") {
      nationalityRow.classList.remove("hidden");
    } else {
      nationalityRow.classList.add("hidden");
    }
  }
  
  modal.classList.remove("hidden");
  qs("#authEmail").focus();
}

function closeAuthModal() {
  qs("#authModal").classList.add("hidden");
}

function bindAuth() {
  qs("#loginOpenBtn")?.addEventListener("click", () => openAuthModal("login"));
  qs("#signupOpenBtn")?.addEventListener("click", () => openAuthModal("signup"));
  qs("#authCloseBtn")?.addEventListener("click", closeAuthModal);
  qs("#authModal")?.addEventListener("click", (event) => {
    if (event.target.id === "authModal") closeAuthModal();
  });
  
  qs("#profileOpenBtn")?.addEventListener("click", openProfileModal);
  qs("#profileCloseBtn")?.addEventListener("click", closeProfileModal);
  qs("#profileModal")?.addEventListener("click", (event) => {
    if (event.target.id === "profileModal") closeProfileModal();
  });
  
  qs("#passwordChangeForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const currPass = qs("#profileCurrentPassword").value;
    const newPass = qs("#profileNewPassword").value;
    const feedbackMsg = qs("#profileMessage");
    
    const authState = readAuthState();
    const email = authState.currentUser;
    if (!email) return;
    
    const currHash = await hashPassword(currPass);
    const user = authState.users[email];
    
    if (user.passwordHash !== currHash) {
      if (feedbackMsg) {
        feedbackMsg.textContent = t("password_change_invalid", "Current password does not match.");
        feedbackMsg.style.color = "var(--danger)";
      }
      return;
    }
    
    user.passwordHash = await hashPassword(newPass);
    writeAuthState(authState);
    
    if (feedbackMsg) {
      feedbackMsg.textContent = t("password_change_success", "Password updated successfully!");
      feedbackMsg.style.color = "#10b981";
    }
    
    qs("#profileCurrentPassword").value = "";
    qs("#profileNewPassword").value = "";
  });
  qs("#logoutBtn")?.addEventListener("click", () => {
    const authState = readAuthState();
    authState.currentUser = "";
    writeAuthState(authState);
    
    // Reset state and localStorage
    state.plan = "Free";
    state.essayCredits = 0;
    state.analyzedSchools.clear();
    localStorage.setItem("transferCompassPlan", "Free");
    localStorage.setItem("transferCompassEssayCredits", "0");
    localStorage.removeItem("transferCompassAnalyzedSchools");
    
    renderAuthState();
    updateActivePlanLabel();
    updatePlanNoticeVisibility();
    updateEssayCreditsUI();
    syncSelectedTargetsFromSlots();
    renderEligibilityResults();
    buildRoadmap();
    
    const activeTabBtn = qs(".tab-button.active");
    if (activeTabBtn) {
      const tabName = activeTabBtn.getAttribute("data-tab");
      if (!checkPlanAccess(tabName)) {
        activateProductTab("eligibility");
      }
    }
  });
  qs("#authForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const mode = qs("#authModal").dataset.mode || "login";
    const email = qs("#authEmail").value.trim().toLowerCase();
    const password = qs("#authPassword").value;
    const passwordHash = await hashPassword(password);
    const authState = readAuthState();
    authState.users = authState.users || {};
    let nationality = "Other";
    
    if (mode === "signup") {
      const consentInput = qs("#authConsent");
      if (consentInput && !consentInput.checked) {
        qs("#authMessage").textContent = t("auth_consent_error", "You must agree to the Terms and Privacy Policy to register.");
        return;
      }
      if (authState.users[email]) {
        qs("#authMessage").textContent = t("auth_email_exists", "An account with this email already exists on this browser.");
        return;
      }
      
      const birthdateVal = qs("#authBirthdate")?.value;
      if (!birthdateVal) {
        qs("#authMessage").textContent = t("auth_birthdate_required", "Please enter your birthdate.");
        return;
      }
      const birthDate = new Date(birthdateVal);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      nationality = qs("#authNationality")?.value || "Other";
      const limitAge = nationality === "Korea" ? 14 : 13;
      if (age < limitAge) {
        qs("#authMessage").textContent = t("auth_underage_error", "You must be 14 or older (13 for US/other) to register.");
        return;
      }
      
      authState.users[email] = { 
        passwordHash, 
        createdAt: new Date().toISOString(),
        plan: "Free",
        essayCredits: 0,
        nationality: nationality,
        birthdate: birthdateVal
      };
      
      // Track signup event on server
      fetch('/api/track-signup', {
        method: 'POST',
        cache: 'no-store',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nationality })
      }).catch(e => console.warn("Failed to send signup telemetry:", e));
      
    } else {
      const user = authState.users[email];
      const isValid = user && (user.passwordHash === passwordHash || user.fallbackHash === passwordHash);
      if (!isValid) {
        qs("#authMessage").textContent = t("auth_invalid_credentials", "Email or password does not match this browser.");
        return;
      }
      nationality = user.nationality || "Other";
      
      // Track login event on server
      fetch('/api/track-login', {
        method: 'POST',
        cache: 'no-store',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nationality })
      }).catch(e => console.warn("Failed to send login telemetry:", e));
    }
    authState.currentUser = email;
    
    // Load their plan and essayCredits from their profile
    const totalCredits = syncUserEssayCredits(email, authState);
    const userProfile = authState.users[email] || {};
    state.plan = userProfile.plan || "Free";
    state.essayCredits = totalCredits;
    localStorage.setItem("transferCompassPlan", state.plan);
    localStorage.setItem("transferCompassEssayCredits", state.essayCredits.toString());
    
    writeAuthState(authState);
    renderAuthState();
    updateActivePlanLabel();
    updatePlanNoticeVisibility();
    updateEssayCreditsUI();
    syncSelectedTargetsFromSlots();
    renderEligibilityResults();
    buildRoadmap();
    
    closeAuthModal();
  });
  renderAuthState();
}

function renderSchoolCoverage() {
  const summary = qs("#schoolCoverageSummary");
  const list = qs("#schoolCoverageList");
  if (!summary || !list) return;
  const schools = uniqueSchools();
  const programTotal = allPrograms().length;
  summary.innerHTML = `
    <div>
      <strong>${escapeHtml(schools.length)}</strong>
      <span>${escapeHtml(t("stat_universities", "universities"))}</span>
    </div>
    <div>
      <strong>${escapeHtml(programTotal)}</strong>
      <span>${escapeHtml(t("stat_programs", "engineering programs"))}</span>
    </div>
    <div>
      <strong>120,000+</strong>
      <span>${escapeHtml(t("stat_essays", "successful transfer essays calibrated"))}</span>
    </div>
  `;
  list.innerHTML = schools
    .map(
      (school) => `
        <span class="school-chip">
          <strong>${escapeHtml(school.name)}</strong>
          <small>${escapeHtml(programsForSchoolName(school.name).length)} ${escapeHtml(t("stat_programs_small", "programs"))}</small>
        </span>
      `
    )
    .join("");
}

function bindEssay() {
  const schoolSelect = qs("#essayTargetSchool");
  const generateBtn = qs("#generateEssayBtn");
  const outlineContent = qs("#essayOutlineContent");
  const menu = qs("#essayTargetMenu");
  const container = qs("#essayTargetContainer");
  const toggleBtn = container ? container.querySelector(".autocomplete-toggle-btn") : null;
  
  if (!schoolSelect || !generateBtn || !outlineContent || !menu || !container) return;

  const programs = allPrograms().sort((a, b) => {
    const sA = a.school.name.localeCompare(b.school.name);
    if (sA !== 0) return sA;
    return a.name.localeCompare(b.name);
  });

  let selectedProgramId = schoolSelect.dataset.selectedId || "";
  if (!selectedProgramId && programs.length > 0) {
    selectedProgramId = programs[0].id;
    schoolSelect.value = `${programs[0].school.name} - ${programs[0].name}`;
    schoolSelect.dataset.selectedId = selectedProgramId;
  }

  const renderEssayMenu = (query = "") => {
    const normalizedQuery = normalizeText(query);
    const matches = programs.filter(p => 
      !normalizedQuery || normalizeText(`${p.school.name} ${p.name}`).includes(normalizedQuery)
    ).slice(0, 140);

    menu.innerHTML = matches.length
      ? matches.map(p => `
          <button type="button" class="autocomplete-item-btn" data-id="${escapeHtml(p.id)}" data-label="${escapeHtml(p.school.name)} - ${escapeHtml(p.name)}" style="width: 100%; text-align: left; background: none; border: none; padding: 10px 12px; color: var(--ink); cursor: pointer; display: block; border-bottom: 1px solid var(--line);">
            <strong style="font-weight: 700; font-size: 13.5px; display: block; color: var(--ink);">${escapeHtml(p.school.name)}</strong>
            <span style="font-size: 12px; color: var(--muted); display: block; margin-top: 2px;">${escapeHtml(p.name)}</span>
          </button>
        `).join("")
      : `<div class="search-empty" style="padding: 12px; text-align: center; color: var(--muted); font-size: 13px;">${t("search_empty", "No results found")}</div>`;
    
    menu.classList.remove("hidden");
  };

  let essayBlurTimeout;
  schoolSelect.addEventListener("focus", () => {
    clearTimeout(essayBlurTimeout);
    renderEssayMenu(schoolSelect.value);
  });

  schoolSelect.addEventListener("blur", () => {
    essayBlurTimeout = setTimeout(() => {
      menu.classList.add("hidden");
    }, 200);
  });

  schoolSelect.addEventListener("input", (e) => {
    renderEssayMenu(e.target.value);
  });

  if (toggleBtn) {
    toggleBtn.addEventListener("mousedown", (e) => {
      e.preventDefault();
      clearTimeout(essayBlurTimeout);
    });
    toggleBtn.addEventListener("click", () => {
      if (menu.classList.contains("hidden")) {
        schoolSelect.focus();
        renderEssayMenu(schoolSelect.value);
      } else {
        menu.classList.add("hidden");
      }
    });
  }

  menu.addEventListener("mousedown", (e) => {
    clearTimeout(essayBlurTimeout);
    e.preventDefault(); // 스크롤바 드래그 및 메뉴 클릭 시 포커스 블러 방지

    const btn = e.target.closest(".autocomplete-item-btn");
    if (!btn) return;

    const id = btn.dataset.id;
    const label = btn.dataset.label;

    schoolSelect.value = label;
    schoolSelect.dataset.selectedId = id;
    selectedProgramId = id;
    menu.classList.add("hidden");
  });

  generateBtn.addEventListener("click", async () => {
    if (state.essayCredits <= 0) {
      alert(t("essay_out_of_credits", "You have no remaining essay credits. Please buy credits or subscribe to the Premium Plan to use EssayAI."));
      openPricingModal();
      return;
    }

    const selectedId = schoolSelect.dataset.selectedId || selectedProgramId;
    const essayQuestion = qs("#essayQuestion")?.value.trim();
    const essayLimit = qs("#essayLimit")?.value.trim();
    const activities = qs("#essayActivity")?.value.trim();
    
    if (!essayQuestion) {
      alert(t("essay_alert_no_question"));
      return;
    }
    if (!activities) {
      alert(t("essay_alert_no_activity"));
      return;
    }

    const targetProgram = programs.find(p => p.id === selectedId);
    if (!targetProgram) return;

    outlineContent.innerHTML = `
      <div class="placeholder-view" style="color: var(--muted); text-align: center; padding: 40px 0;">
        <div style="font-size: 32px; margin-bottom: 12px; display: inline-block; animation: spin 1.2s linear infinite;">⏳</div>
        <p style="margin-top: 10px;">${escapeHtml(t("essay_loading_text"))}</p>
      </div>
    `;

    generateBtn.disabled = true;
    generateBtn.textContent = t("essay_generating_label");

    try {
      let data;
      try {
      const response = await fetch('/api/essay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          schoolName: targetProgram.school.name,
          majorName: targetProgram.name,
          essayQuestion: essayQuestion,
          essayLimit: essayLimit || "unspecified",
          activities: activities,
          lang: state.language || "en"
        })
      });
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      data = await response.json();
      if (!data.success || !data.outline) {
        throw new Error(data.message || t("essay_generation_failed"));
      }
    } catch (err) {
      console.warn("Client fallback triggered for essay generator:", err);
      const cleanLimit = essayLimit || "350-500 words";
      const cleanPrompt = essayQuestion.length > 150 ? essayQuestion.slice(0, 150) + "..." : essayQuestion;
      
      data = {
        success: true,
        targetStyleGuide: `${targetProgram.school.name} (${targetProgram.name}) Transfer Essay Rubric: Highlight completed technical foundation coursework (math/science). Detail how your hands-on achievements (e.g. debugging, designing, club projects) apply directly to our junior-level engineering curriculum. State clear academic goals.`,
        outline: [
          {
            paragraph: "Paragraph 1: Academic Preparation & Transition",
            title: "Establish Your Engineering Coursework Foundation",
            content: `Connect your completed prerequisites directly to the transfer expectations of ${targetProgram.school.name}. Detail how mastering coursework like Calculus, Physics, or Computer Science prepared you for upper-division challenges. Address the prompt: "${cleanPrompt}". Highlight initial achievements: "${activities.slice(0, 80)}...".`,
            dos: "Mention specific courses and grade milestones. Align your current coursework with the target program's requirements.",
            donts: "Do not complain about lack of resources at your current institution. Focus on your growth and hunger for advancement.",
            example: `My academic preparation in engineering began with a solid commitment to mathematical excellence. Excelling in Calculus and Physics, I developed a strong framework for structural and quantitative analysis. Transferring to ${targetProgram.school.name} will allow me to apply this background immediately to advanced junior-level coursework in ${targetProgram.name}...`
          },
          {
            paragraph: "Paragraph 2: Project Experience & Major Fit",
            title: "Connect Hands-on Experiences to Department Goals",
            content: `Detail your core experiences: "${activities}". Articulate how managing projects, coding databases, or leading engineering teams demonstrates your readiness for the department's collaborative laboratories. Showcase leadership and debugging resilience.`,
            dos: "Quantify your achievements (e.g., lines of code, robot design metrics, team size). Show, don't just tell.",
            donts: "Do not simply list activities; explain the technical problem, your contribution, and what you learned.",
            example: `Beyond lectures, I actively sought hands-on projects to refine my engineering capabilities. Leading our community college engineering club, I directed a team of five to design an automated prototype. I wrote the core algorithm and resolved critical interface bugs, demonstrating the debugging mindset essential for ${targetProgram.name}...`
          },
          {
            paragraph: "Paragraph 3: Transfer Objectives & Long-term Goals",
            title: "Articulate Fit with Target Faculty and Curriculum",
            content: `Define exactly why ${targetProgram.school.name} is your target destination. Mention specific labs, courses, or capstone design opportunities you plan to pursue. Connect these opportunities to your future career path in industry or research.`,
            dos: "Name specific professors, labs, or courses unique to the program. Align with the school's mission.",
            donts: "Avoid generic praise like 'it is a prestigious university.' Be highly specific to this major and curriculum.",
            example: `Specifically, I am drawn to ${targetProgram.school.name} due to your specialized upper-division labs and the senior capstone design project. Contributing to these initiatives will provide the practical framework I need to pursue a career in engineering design, making me a motivated and active member of your transfer cohort.`
          }
        ]
      };
    }

      const authStateForSync = readAuthState();
      const currentUserForSync = authStateForSync.currentUser || "";
      if (currentUserForSync && authStateForSync.users[currentUserForSync]) {
        if (currentUserForSync !== "haminkim@uwm.edu") {
          const userProfile = authStateForSync.users[currentUserForSync];
          userProfile.creditPacks = userProfile.creditPacks || [];
          const nowStr = new Date().toISOString();
          const activePacks = userProfile.creditPacks.filter(p => new Date(p.expiresAt) > new Date(nowStr) && p.count > 0);
          if (activePacks.length > 0) {
            // Sort by oldest expiration first to use the one expiring soonest
            activePacks.sort((a, b) => new Date(a.expiresAt) - new Date(b.expiresAt));
            activePacks[0].count--;
            // Sync updated packs back
            userProfile.creditPacks = userProfile.creditPacks.map(p => {
              const match = activePacks.find(ap => ap.id === p.id);
              return match ? match : p;
            });
          }
        }
        const totalCredits = syncUserEssayCredits(currentUserForSync, authStateForSync);
        state.essayCredits = totalCredits;
        localStorage.setItem("transferCompassEssayCredits", totalCredits.toString());
        writeAuthState(authStateForSync);
      } else {
        state.essayCredits = Math.max(0, state.essayCredits - 1);
        localStorage.setItem("transferCompassEssayCredits", state.essayCredits.toString());
      }
      
      updateEssayCreditsUI();

      // Render style guide header if provided
      let styleGuideHtml = "";
      if (data.targetStyleGuide) {
        styleGuideHtml = `
          <div style="background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.25); border-radius: 12px; padding: 18px; margin-bottom: 20px; box-shadow: var(--shadow-soft);">
            <strong style="color: #a5b4fc; font-size: 14.5px; display: block; margin-bottom: 6px; font-weight: 800; text-transform: uppercase;">
              💡 ${escapeHtml(t("essay_style_guide_title"))}
            </strong>
            <p style="color: #cbd5e1; font-size: 13.5px; line-height: 1.6; margin: 0; font-weight: 500;">
              ${escapeHtml(data.targetStyleGuide)}
            </p>
          </div>
        `;
      }

      const outlineHtml = data.outline.map(item => `
        <article style="border: 1px solid var(--line); border-radius: 12px; background: rgba(12, 18, 34, 0.5); padding: 22px; margin-bottom: 16px; box-shadow: var(--shadow-soft);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; border-bottom: 1px solid var(--line); padding-bottom: 10px;">
            <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #818cf8; background: rgba(99, 102, 241, 0.12); padding: 4px 10px; border-radius: 6px;">
              ${escapeHtml(item.paragraph)}
            </span>
            <strong style="color: #ffffff; font-size: 15px;">${escapeHtml(item.title)}</strong>
          </div>
          <p style="color: #e2e8f0; font-size: 13.5px; line-height: 1.6; margin: 0 0 16px 0; white-space: pre-wrap;">
            ${escapeHtml(item.content)}
          </p>
          
          <div style="display: grid; gap: 10px; margin-top: 14px;">
            <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 8px; padding: 10px 14px;">
              <span style="font-size: 11px; font-weight: 800; color: #34d399; text-transform: uppercase; display: block; margin-bottom: 4px;">🟢 ${escapeHtml(t("tag_dos"))}</span>
              <p style="color: #a7f3d0; font-size: 12.5px; line-height: 1.5; margin: 0;">${escapeHtml(item.dos || "")}</p>
            </div>
            <div style="background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 10px 14px;">
              <span style="font-size: 11px; font-weight: 800; color: #f87171; text-transform: uppercase; display: block; margin-bottom: 4px;">🔴 ${escapeHtml(t("tag_donts"))}</span>
              <p style="color: #fca5a5; font-size: 12.5px; line-height: 1.5; margin: 0;">${escapeHtml(item.donts || "")}</p>
            </div>
            <div style="background: rgba(99, 102, 241, 0.05); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 8px; padding: 12px 14px;">
              <span style="font-size: 11px; font-weight: 800; color: #a5b4fc; text-transform: uppercase; display: block; margin-bottom: 4px;">✨ ${escapeHtml(t("tag_example"))}</span>
              <p style="color: #ffffff; font-size: 13px; font-family: var(--font-mono, monospace); font-style: italic; line-height: 1.65; margin: 0; background: rgba(0, 0, 0, 0.2); padding: 10px 14px; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.05); font-weight: 500;">
                "${escapeHtml(item.example || "")}"
              </p>
            </div>
          </div>
        </article>
      `).join("");

      outlineContent.innerHTML = styleGuideHtml + outlineHtml;

      // Auto-scroll to essay result panel
      setTimeout(() => {
        qs("#essayResultPanel")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);

    } catch (err) {
      outlineContent.innerHTML = `
        <div class="placeholder-view" style="color: var(--danger); text-align: center; padding: 40px 0;">
          <p>❌ ${escapeHtml(t("essay_error_occurred"))} ${escapeHtml(err.message)}</p>
          <p style="font-size: 12px; color: var(--muted); margin-top: 8px;">${escapeHtml(t("essay_error_desc"))}</p>
        </div>
      `;
    } finally {
      generateBtn.disabled = false;
      generateBtn.textContent = t("essay_generate_btn_label");
    }
  });

  // 3. AI Interview State Machine & Handlers
  let interviewQuestions = [];
  let interviewAnswers = ["", "", "", "", ""];
  let currentInterviewStep = 0;
  let essayMode = "direct";

  const modeTabDirect = qs("#modeTabDirect");
  const modeTabInterview = qs("#modeTabInterview");
  const essayDirectInputWrapper = qs("#essayDirectInputWrapper");
  const essayInterviewWrapper = qs("#essayInterviewWrapper");

  if (modeTabDirect && modeTabInterview && essayDirectInputWrapper && essayInterviewWrapper) {
    modeTabDirect.addEventListener("click", () => {
      essayMode = "direct";
      modeTabDirect.classList.add("active");
      modeTabInterview.classList.remove("active");
      modeTabDirect.style.background = "rgba(99, 102, 241, 0.12)";
      modeTabDirect.style.color = "#a5b4fc";
      modeTabInterview.style.background = "transparent";
      modeTabInterview.style.color = "var(--muted)";
      essayDirectInputWrapper.classList.remove("hidden");
      essayInterviewWrapper.classList.add("hidden");
    });

    modeTabInterview.addEventListener("click", () => {
      essayMode = "interview";
      modeTabInterview.classList.add("active");
      modeTabDirect.classList.remove("active");
      modeTabInterview.style.background = "rgba(99, 102, 241, 0.12)";
      modeTabInterview.style.color = "#a5b4fc";
      modeTabDirect.style.background = "transparent";
      modeTabDirect.style.color = "var(--muted)";
      essayDirectInputWrapper.classList.add("hidden");
      essayInterviewWrapper.classList.remove("hidden");
    });
  }

  const startInterviewBtn = qs("#startInterviewBtn");
  const interviewStartScreen = qs("#interviewStartScreen");
  const interviewActiveScreen = qs("#interviewActiveScreen");

  const interviewStepLabel = qs("#interviewStepLabel");
  const interviewStepPercent = qs("#interviewStepPercent");
  const interviewProgressBar = qs("#interviewProgressBar");
  const interviewQuestionText = qs("#interviewQuestionText");
  const interviewAnswerInput = qs("#interviewAnswerInput");
  const prevInterviewBtn = qs("#prevInterviewBtn");
  const nextInterviewBtn = qs("#nextInterviewBtn");

  function renderInterviewStep() {
    if (!interviewQuestionText || !interviewAnswerInput || !interviewStepLabel || !interviewStepPercent || !interviewProgressBar) return;

    interviewQuestionText.textContent = interviewQuestions[currentInterviewStep] || "";
    interviewAnswerInput.value = interviewAnswers[currentInterviewStep] || "";

    const stepNum = currentInterviewStep + 1;
    const percent = Math.round((stepNum / 5) * 100);

    interviewStepLabel.textContent = `Step ${stepNum} of 5`;
    interviewStepPercent.textContent = `${percent}%`;
    interviewProgressBar.style.width = `${percent}%`;

    if (prevInterviewBtn) {
      if (currentInterviewStep === 0) {
        prevInterviewBtn.style.visibility = "hidden";
      } else {
        prevInterviewBtn.style.visibility = "visible";
        prevInterviewBtn.textContent = t("btn_prev", "Previous");
      }
    }

    if (nextInterviewBtn) {
      if (currentInterviewStep === 4) {
        nextInterviewBtn.textContent = t("btn_complete", "Complete");
      } else {
        nextInterviewBtn.textContent = t("btn_next", "Next");
      }
    }
  }

  if (startInterviewBtn && interviewStartScreen && interviewActiveScreen) {
    startInterviewBtn.addEventListener("click", async () => {
      const selectedId = schoolSelect.value;
      const targetProgram = programs.find(p => p.id === selectedId);
      if (!targetProgram) return;

      const essayQuestion = qs("#essayQuestion")?.value.trim() || "";
      if (!essayQuestion) {
        alert(t("essay_alert_no_question"));
        return;
      }

      startInterviewBtn.disabled = true;
      startInterviewBtn.textContent = t("essay_generating_label", "Loading...");

      try {
        const response = await fetch('/api/interview/questions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            schoolName: targetProgram.school.name,
            majorName: targetProgram.name,
            essayQuestion: essayQuestion
          })
        });
        const data = await response.json();

        if (!data.success || !data.questions || data.questions.length < 5) {
          throw new Error(data.message || "Failed to load questions");
        }

        interviewQuestions = data.questions;
        interviewAnswers = ["", "", ""];
        currentInterviewStep = 0;

        interviewStartScreen.classList.add("hidden");
        interviewActiveScreen.classList.remove("hidden");
        renderInterviewStep();

      } catch (err) {
        alert(t("essay_error_occurred", "An error occurred:") + " " + err.message);
      } finally {
        startInterviewBtn.disabled = false;
        startInterviewBtn.textContent = t("btn_start_interview", "Start AI Interview");
      }
    });
  }

  if (prevInterviewBtn) {
    prevInterviewBtn.addEventListener("click", () => {
      if (interviewAnswerInput) {
        interviewAnswers[currentInterviewStep] = interviewAnswerInput.value.trim();
      }
      if (currentInterviewStep > 0) {
        currentInterviewStep--;
        renderInterviewStep();
      }
    });
  }

  if (nextInterviewBtn) {
    nextInterviewBtn.addEventListener("click", () => {
      if (interviewAnswerInput) {
        interviewAnswers[currentInterviewStep] = interviewAnswerInput.value.trim();
      }

      if (currentInterviewStep < 4) {
        currentInterviewStep++;
        renderInterviewStep();
      } else {
        const mergedActivities = interviewQuestions.map((q, idx) => {
          return `[Question ${idx + 1}: ${q}]\n[Answer: ${interviewAnswers[idx] || "N/A"}]`;
        }).join("\n\n");

        const essayActivityInput = qs("#essayActivity");
        if (essayActivityInput) {
          essayActivityInput.value = mergedActivities;
        }

        alert(t("interview_complete_msg", "Interview completed! Click the generate button to create your custom outline."));

        if (modeTabDirect) {
          modeTabDirect.click();
        }
      }
    });
  }

  // 4. Pre-fill Examples
  qs("#loadEssayExample1")?.addEventListener("click", () => {
    const schoolSelect = qs("#essayTargetSchool");
    if (schoolSelect) schoolSelect.value = "university-of-michigan-computer-science-coe-2c16a5ea";
    const limitInput = qs("#essayLimit");
    if (limitInput) limitInput.value = "350 words";
    const questionText = qs("#essayQuestion");
    if (questionText) questionText.value = "Describe your academic interests and how you plan to pursue them at the University of Michigan.";
    const activitiesText = qs("#essayActivity");
    if (activitiesText) activitiesText.value = "Led the community college computer science club, developed an open-source web application for class scheduling using React and Node.js, tutored peers in Calculus and Discrete Math.";
    
    const modeDirect = qs("#modeTabDirect");
    if (modeDirect) modeDirect.click();
  });

  qs("#loadEssayExample2")?.addEventListener("click", () => {
    const schoolSelect = qs("#essayTargetSchool");
    if (schoolSelect) schoolSelect.value = "georgia-tech-mechanical-engineering-0dac0766";
    const limitInput = qs("#essayLimit");
    if (limitInput) limitInput.value = "500 words";
    const questionText = qs("#essayQuestion");
    if (questionText) questionText.value = "Georgia Tech values social responsibility. Describe how your interest in mechanical engineering will allow you to make a positive impact.";
    const activitiesText = qs("#essayActivity");
    if (activitiesText) activitiesText.value = "Mentored a high school robotics team (FTC), designed and 3D printed low-cost prosthetic hands for a local charity project, worked part-time as a bicycle mechanic repairing community bikes.";
    
    const modeDirect = qs("#modeTabDirect");
    if (modeDirect) modeDirect.click();
  });

  updateEssayCreditsUI();
}

function updateEssayCreditsUI() {
  const countEl = qs("#essayCreditsCount");
  if (countEl) {
    countEl.textContent = state.essayCredits;
  }
}
window.updateEssayCreditsUI = updateEssayCreditsUI;

window.buyStandaloneEssayPass = function() {
  const authState = readAuthState();
  const currentUser = authState.currentUser || "";
  if (!currentUser) {
    alert(t("alert_login_required", "You must log in or register to buy essay credits."));
    closePricingModal();
    openAuthModal("login");
    return;
  }

  const consentMinor = qs("#paymentConsentMinor");
  const consentDisclaimer = qs("#paymentConsentDisclaimer");
  if ((consentMinor && !consentMinor.checked) || (consentDisclaimer && !consentDisclaimer.checked)) {
    alert(t("payment_consent_error", "You must agree to all legal consents (Minor check, Disclaimer) to proceed with payment."));
    return;
  }

  // Portone payment integration
  const IMP = window.IMP;
  if (!IMP) {
    alert(t("payment_sdk_error", "Payment module is loading. Please try again in a moment."));
    return;
  }

  const userProfile = authState.users[currentUser] || {};
  const buyerName = userProfile.name || currentUser.split("@")[0] || "Customer";
  const buyerPhone = userProfile.phone || "010-0000-0000";

  const isKo = (state.lang || "ko") === "ko";
  const pgChannel = isKo ? "html5_inicis" : "paypal_v2";
  const payCurrency = isKo ? "KRW" : "USD";
  const payAmount = isKo ? 6900 : 5; // $5 USD for AI Essay 5-Pack
  const productName = isKo ? "AI 에세이 5회 이용권" : "AI Essay 5-Pack (5 Credits)";

  IMP.request_pay({
    pg: pgChannel,
    pay_method: "card",
    merchant_uid: `order_essay_${Date.now()}`,
    name: productName,
    amount: payAmount,
    currency: payCurrency,
    buyer_email: currentUser,
    buyer_name: buyerName,
    buyer_tel: buyerPhone
  }, function(rsp) {
    if (rsp.success) {
      applyEssayCreditsPurchase();
    } else {
      alert(t("payment_failed", "Payment failed: {error}").replace("{error}", rsp.error_msg || "Unknown error"));
    }
  });
};

function applyEssayCreditsPurchase() {
  const authState = readAuthState();
  const currentUser = authState.currentUser || "";
  if (!currentUser) return;

  const now = new Date();
  const expiresAt = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000).toISOString(); // 90 days (3 months)
  authState.users[currentUser].creditPacks = authState.users[currentUser].creditPacks || [];
  authState.users[currentUser].creditPacks.push({
    id: `standalone_${Date.now()}`,
    type: "standalone",
    count: 5,
    expiresAt: expiresAt
  });
  
  const totalCredits = syncUserEssayCredits(currentUser, authState);
  state.essayCredits = totalCredits;
  localStorage.setItem("transferCompassEssayCredits", totalCredits.toString());
  writeAuthState(authState);
  
  updateEssayCreditsUI();
  
  const alertMsg = t("alert_essay_pass_purchased", "Successfully purchased AI Essay 5-Pack! 5 credits (valid for 3 months) have been added to your account.");
  alert(alertMsg);
}

function init() {
  // Initialize Portone SDK Test Mode
  const IMP = window.IMP;
  if (IMP) {
    IMP.init("imp31068472"); // Portone Public Test Store ID
  }

  // Track visit telemetry on page load
  fetch('/api/track-visit', { method: 'POST', cache: 'no-store' })
    .catch(e => console.warn("Failed to send visit telemetry:", e));

  const authState = readAuthState();
  let currentUser = authState.currentUser || "";
  
  // Enforce Premium status and infinite credits for admin email
  if (currentUser === "haminkim@uwm.edu") {
    authState.users[currentUser].plan = "Premium";
    authState.users[currentUser].essayCredits = 999999;
    writeAuthState(authState);
  }

  if (!currentUser) {
    state.plan = "Free";
    state.essayCredits = 0;
    localStorage.setItem("transferCompassPlan", "Free");
    localStorage.setItem("transferCompassEssayCredits", "0");
  } else {
    const totalCredits = syncUserEssayCredits(currentUser, authState);
    writeAuthState(authState);
    const userProfile = authState.users[currentUser] || {};
    state.plan = userProfile.plan || "Free";
    state.essayCredits = totalCredits;
    localStorage.setItem("transferCompassPlan", state.plan);
    localStorage.setItem("transferCompassEssayCredits", state.essayCredits.toString());
  }

  loadProfileFromLocalStorage();
  initializeTargetSlots();
  renderRequirementControls();
  bindEvents();
  bindFeedback();
  bindAuth();
  bindEssay();

  // Sync loaded profile state with DOM inputs
  const gpaInput = qs("#gpaInput");
  if (gpaInput) gpaInput.value = state.gpa.toFixed(2);
  const creditsInput = qs("#creditsInput");
  if (creditsInput) creditsInput.value = state.credits;
  const internationalInput = qs("#internationalInput");
  if (internationalInput) internationalInput.checked = state.international;
  const waiverInput = qs("#englishWaiverInput");
  if (waiverInput) waiverInput.checked = state.englishWaiver;
  const englishTypeInput = qs("#englishTypeInput");
  if (englishTypeInput) englishTypeInput.value = state.englishType;
  const englishScoreInput = qs("#englishScoreInput");
  if (englishScoreInput) englishScoreInput.value = state.englishScore;

  const admissionYearInput = qs("#admissionYear");
  if (admissionYearInput) admissionYearInput.value = state.admissionYear;
  const admissionTermInput = qs("#admissionTerm");
  if (admissionTermInput) admissionTermInput.value = state.admissionTerm;

  qs("#englishFields")?.classList.toggle("hidden", state.englishWaiver || !state.international);
  qs("#englishWaiverRow")?.classList.toggle("hidden", !state.international);
  
  switchLanguage(state.language);
  updatePlanNoticeVisibility();
  updateEnglishScoreInputConstraints();
  initScrollEffects();
  initStatsText();
  
  const initialTab = location.hash.replace("#", "");
  if (initialTab === "demo") {
    activateProductTab("eligibility", false);
  } else if (["eligibility", "requirements", "roadmap", "essay"].includes(initialTab)) {
    activateProductTab(initialTab, false);
  }
}

init();

function openFeatureAd(featureId) {
  const modal = qs("#featureAdModal");
  if (!modal) return;
  
  const title = t(`ad_${featureId}_title`, "Feature");
  const headline = t(`ad_${featureId}_headline`, "");
  const b1 = t(`ad_${featureId}_b1`, "");
  const b2 = t(`ad_${featureId}_b2`, "");
  const b3 = t(`ad_${featureId}_b3`, "");
  const btn = t(`ad_${featureId}_btn`, "Try Feature");
  
  const modalTitle = qs("#adModalTitle");
  const modalHeadline = qs("#adModalHeadline");
  const modalBullets = qs("#adModalBullets");
  const modalCta = qs("#adModalCta");
  
  if (modalTitle) modalTitle.textContent = title;
  if (modalHeadline) modalHeadline.textContent = headline;
  if (modalBullets) {
    modalBullets.innerHTML = `
      <li>${escapeHtml(b1)}</li>
      <li>${escapeHtml(b2)}</li>
      <li>${escapeHtml(b3)}</li>
    `;
  }
  
  if (modalCta) {
    modalCta.textContent = btn;
    modalCta.onclick = () => {
      closeFeatureAd();
      const demoSec = qs("#demo");
      if (demoSec) {
        demoSec.scrollIntoView({ behavior: 'smooth' });
      }
      activateProductTab(featureId);
    };
  }
  
  modal.classList.remove("hidden");
}

function closeFeatureAd() {
  const modal = qs("#featureAdModal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

window.openFeatureAd = openFeatureAd;
window.closeFeatureAd = closeFeatureAd;

// Profile Modal helpers
function openProfileModal() {
  const authState = readAuthState();
  const email = authState.currentUser;
  if (!email) return;

  const userProfile = authState.users[email] || {};
  const plan = userProfile.plan || "Free";
  const credits = userProfile.essayCredits || 0;
  const nationality = userProfile.nationality || "Other";

  qs("#profileEmailVal").textContent = email;
  qs("#profileNationalityVal").textContent = nationality;
  qs("#profilePlanVal").textContent = plan.toUpperCase() + " PLAN";
  qs("#profileCreditsVal").textContent = credits;
  
  const msg = qs("#profileMessage");
  if (msg) msg.textContent = "";
  
  qs("#profileCurrentPassword").value = "";
  qs("#profileNewPassword").value = "";

  qs("#profileModal").classList.remove("hidden");
}

function closeProfileModal() {
  qs("#profileModal").classList.add("hidden");
}

function closeProfileAndOpenPricing() {
  closeProfileModal();
  openPricingModal();
}

function closeProfileAndBuyCredits() {
  closeProfileModal();
  buyStandaloneEssayPass();
}

window.openProfileModal = openProfileModal;
window.closeProfileModal = closeProfileModal;
window.closeProfileAndOpenPricing = closeProfileAndOpenPricing;
window.closeProfileAndBuyCredits = closeProfileAndBuyCredits;

window.toggleRecommendedCourses = function(btn) {
  const wrapper = btn.nextElementSibling;
  if (wrapper && wrapper.classList.contains("recommended-wrapper")) {
    const isHidden = wrapper.classList.contains("hidden");
    if (isHidden) {
      wrapper.classList.remove("hidden");
      btn.querySelector("span:first-child").textContent = "🙈";
    } else {
      wrapper.classList.add("hidden");
      btn.querySelector("span:first-child").textContent = "👁️";
    }
  }
};

// Side Drawer Menu Logic
function openSideDrawer() {
  const drawer = qs("#sideDrawer");
  const toggleBtn = qs("#hamburgerMenuBtn");
  if (drawer) {
    drawer.classList.remove("hidden");
    toggleBtn?.classList.add("open");
    renderSideDrawerUserSection();
  }
}

function closeSideDrawer() {
  const drawer = qs("#sideDrawer");
  const toggleBtn = qs("#hamburgerMenuBtn");
  if (drawer) {
    drawer.classList.add("hidden");
    toggleBtn?.classList.remove("open");
  }
}

function renderSideDrawerUserSection() {
  const container = qs("#sideDrawerUserSection");
  if (!container) return;
  
  const authState = readAuthState();
  const currentUser = authState.currentUser || "";
  
  if (!currentUser) {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <p style="font-size: 12px; color: var(--muted); margin: 0;">로그인하시면 개인 맞춤 수강계획 및 AI 에세이 기능을 사용하실 수 있습니다.</p>
        <div style="display: flex; gap: 8px; margin-top: 4px;">
          <button class="secondary-btn compact" style="flex: 1; min-height: 30px; font-size: 11px; padding: 4px;" onclick="closeSideDrawer(); openAuthModal('login');">로그인</button>
          <button class="primary-btn compact" style="flex: 1; min-height: 30px; font-size: 11px; padding: 4px;" onclick="closeSideDrawer(); openAuthModal('register');">회원가입</button>
        </div>
      </div>
    `;
    return;
  }
  
  const userProfile = authState.users[currentUser] || {};
  const initial = currentUser.charAt(0).toUpperCase();
  const plan = userProfile.plan || "Free";
  const displayPlan = plan === "Premium" ? "Premium" : "Free Plan";
  const credits = state.essayCredits;
  
  container.innerHTML = `
    <div class="user-header">
      <div class="user-avatar">${initial}</div>
      <div class="user-details">
        <span class="user-email" style="word-break: break-all;">${currentUser}</span>
        <span class="user-plan">${displayPlan}</span>
      </div>
    </div>
    <div class="user-credits">
      <span>✉️ AI 에세이 크레딧: <strong>${credits === 999999 ? "무제한" : credits + "회"}</strong></span>
    </div>
  `;
}

function handleDrawerNavigation(target) {
  closeSideDrawer();
  
  if (target === 'pricing') {
    openPricingModal();
    return;
  }
  
  if (target === 'transfer-guide') {
    const guideSec = qs("#transfer-guide");
    if (guideSec) {
      guideSec.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }
  
  const demoSec = qs("#demo");
  if (demoSec) {
    demoSec.scrollIntoView({ behavior: 'smooth' });
  }
  activateProductTab(target);
}

window.openSideDrawer = openSideDrawer;
window.closeSideDrawer = closeSideDrawer;
window.handleDrawerNavigation = handleDrawerNavigation;
window.renderSideDrawerUserSection = renderSideDrawerUserSection;
