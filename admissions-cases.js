// TransferCheck - Admitted Cases, Extracurricular Milestones & Essay Patterns Database
window.AdmissionsCasesDatabase = {
  // Profiles mapped strictly by schoolId to prevent cross-school contamination
  profiles: {
    ko: [
      {
        schoolId: "university-of-california-berkeley",
        major: "Computer Science (컴공)",
        gpa: "3.94",
        origin: "디안자 칼리지 (CC)",
        outcome: "합격 (UC Berkeley CS)",
        international: "예",
        extra: "리액트 시간표 앱 개발, 미적분 튜터링, 로보틱스 클럽 회장.",
        gpa5YearRange: "3.88 - 4.00",
        competitiveEnglish: "TOEFL 105+ / IELTS 7.5+",
        admissionRate: "5.2%",
        keyElectives: "이산수학, 선형대수학, 자료구조(C++)"
      },
      {
        schoolId: "university-of-california-berkeley",
        major: "Haas Business (경영학)",
        gpa: "3.92",
        origin: "디아블로 밸리 칼리지 (CC)",
        outcome: "합격 (UC Berkeley Haas)",
        international: "예",
        extra: "여름 회계 법인 인턴십, CC 금융투자 학회 학회장.",
        gpa5YearRange: "3.89 - 4.00",
        competitiveEnglish: "TOEFL 108+ / IELTS 8.0",
        admissionRate: "4.8%",
        keyElectives: "재무회계, 거시경제학, 비즈니스 통계학"
      },
      {
        schoolId: "university-of-washington",
        major: "Computer Science (컴공)",
        gpa: "3.91",
        origin: "벨뷰 칼리지 (CC)",
        outcome: "합격 (UW Allen School CS)",
        international: "예",
        extra: "머신러닝 학부연구생 어시스턴트, 코딩 캠프 동아리 창립.",
        gpa5YearRange: "3.85 - 3.98",
        competitiveEnglish: "TOEFL 100+ / IELTS 7.5",
        admissionRate: "9.0%",
        keyElectives: "Calculus III, 컴퓨터 프로그래밍 II, 기초 선형대수"
      },
      {
        schoolId: "georgia-institute-of-technology",
        major: "Mechanical Engineering (기계공학)",
        gpa: "3.88",
        origin: "패서디나 시티 칼리지 (CC)",
        outcome: "합격 (Georgia Tech ME)",
        international: "아니오",
        extra: "대학 포뮬러 SAE 크루 참여, 3D 프린터 의수 설계 프로젝트.",
        gpa5YearRange: "3.75 - 3.92",
        competitiveEnglish: "TOEFL 95+ (미시민권/영주권 면제)",
        admissionRate: "14%",
        keyElectives: "미적분학 III, 미분방정식, 정역학, 동역학"
      },
      {
        schoolId: "university-of-michigan-ann-arbor",
        major: "Computer Engineering (컴퓨터공학)",
        gpa: "3.88",
        origin: "타주 CC",
        outcome: "합격 (U-Mich CE)",
        international: "예",
        extra: "가상 시뮬레이터를 활용해 전자기학 회로 분석 프로젝트 대안 수행.",
        gpa5YearRange: "3.80 - 3.95",
        competitiveEnglish: "TOEFL 100+ / IELTS 7.0+",
        admissionRate: "12%",
        keyElectives: "물리학 II(전자기학), 선형대수학, 이산수학"
      },
      {
        schoolId: "columbia-university",
        major: "General Studies (GS 사회과학)",
        gpa: "3.91",
        origin: "커뮤니티 칼리지 (CC)",
        outcome: "합격 (Columbia GS)",
        international: "예",
        extra: "군 복무 및 스타트업 인턴 경력, 영어 튜터 60시간.",
        gpa5YearRange: "3.70 - 3.95",
        competitiveEnglish: "TOEFL 105+ / IELTS 7.5+",
        admissionRate: "20% (GS 기준)",
        keyElectives: "영작문, 통계학 기초, 서양 문명사"
      },
      {
        schoolId: "stanford-university",
        major: "Computer Science (컴공)",
        gpa: "4.00",
        origin: "명문 4년제 대학",
        outcome: "합격 (Stanford CS)",
        international: "예",
        extra: "학부생 학술 컨퍼런스 발표 및 데이터 통계 모델 독자 설계.",
        gpa5YearRange: "3.98 - 4.00",
        competitiveEnglish: "TOEFL 110+ / IELTS 8.0+",
        admissionRate: "1.5%",
        keyElectives: "Linear Algebra, 확률론, 알고리즘 분석"
      },
      {
        schoolId: "ucla",
        major: "Psychology (심리학)",
        gpa: "3.87",
        origin: "산타모니카 칼리지 (CC)",
        outcome: "합격 (UCLA Psychology)",
        international: "예",
        extra: "위기 텍스트 라인 상담가, 대학 인지심리 연구소 학부 연구 조원.",
        gpa5YearRange: "3.82 - 3.98",
        competitiveEnglish: "TOEFL 100+ / IELTS 7.0+",
        admissionRate: "8.5%",
        keyElectives: "심리학 통계, 뇌 및 행동 기초, 생물학 기초"
      }
    ],
    en: [
      {
        schoolId: "university-of-california-berkeley",
        major: "Computer Science",
        gpa: "3.94",
        origin: "De Anza College (CC)",
        outcome: "Accepted (UC Berkeley CS)",
        international: "Yes",
        extra: "Built a React scheduling app, tutored calculus, joined Robotics Club.",
        gpa5YearRange: "3.88 - 4.00",
        competitiveEnglish: "TOEFL 105+ / IELTS 7.5+",
        admissionRate: "5.2%",
        keyElectives: "Discrete Math, Linear Algebra, Data Structures (C++)"
      },
      {
        schoolId: "university-of-california-berkeley",
        major: "Haas Business",
        gpa: "3.92",
        origin: "Diablo Valley College (CC)",
        outcome: "Accepted (UC Berkeley Haas)",
        international: "Yes",
        extra: "Summer audit internship, President of CC Finance & Investment Society.",
        gpa5YearRange: "3.89 - 4.00",
        competitiveEnglish: "TOEFL 108+ / IELTS 8.0",
        admissionRate: "4.8%",
        keyElectives: "Financial Accounting, Macroeconomics, Business Stats"
      },
      {
        schoolId: "university-of-washington",
        major: "Computer Science",
        gpa: "3.91",
        origin: "Bellevue College (CC)",
        outcome: "Accepted (UW Allen School CS)",
        international: "Yes",
        extra: "Machine learning research assistant, founder of coding bootcamp club.",
        gpa5YearRange: "3.85 - 3.98",
        competitiveEnglish: "TOEFL 100+ / IELTS 7.5",
        admissionRate: "9.0%",
        keyElectives: "Calculus III, Programming II, Intro Linear Algebra"
      },
      {
        schoolId: "georgia-institute-of-technology",
        major: "Mechanical Engineering",
        gpa: "3.88",
        origin: "Pasadena City College (CC)",
        outcome: "Accepted (Georgia Tech ME)",
        international: "No",
        extra: "Formula SAE crew member, designed 3D printed prosthetic arm.",
        gpa5YearRange: "3.75 - 3.92",
        competitiveEnglish: "TOEFL 95+ (Exempted for Citizens)",
        admissionRate: "14%",
        keyElectives: "Calculus III, Differential Equations, Statics, Dynamics"
      },
      {
        schoolId: "university-of-michigan-ann-arbor",
        major: "Computer Engineering",
        gpa: "3.88",
        origin: "Out-of-State CC",
        outcome: "Accepted (U-Mich CE)",
        international: "Yes",
        extra: "Designed custom electromagnetism circuit simulator.",
        gpa5YearRange: "3.80 - 3.95",
        competitiveEnglish: "TOEFL 100+ / IELTS 7.0+",
        admissionRate: "12%",
        keyElectives: "Physics II (E&M), Linear Algebra, Discrete Math"
      },
      {
        schoolId: "columbia-university",
        major: "General Studies (Social Sciences)",
        gpa: "3.91",
        origin: "Community College",
        outcome: "Accepted (Columbia GS)",
        international: "Yes",
        extra: "Military service, startup internship, 60 hours English tutoring.",
        gpa5YearRange: "3.70 - 3.95",
        competitiveEnglish: "TOEFL 105+ / IELTS 7.5+",
        admissionRate: "20% (GS basis)",
        keyElectives: "English Comp, Basic Statistics, Western Civilizations"
      },
      {
        schoolId: "stanford-university",
        major: "Computer Science",
        gpa: "4.00",
        origin: "Elite 4-Year University",
        outcome: "Accepted (Stanford CS)",
        international: "Yes",
        extra: "Presented paper at undergraduate conference, modeled custom statistical model.",
        gpa5YearRange: "3.98 - 4.00",
        competitiveEnglish: "TOEFL 110+ / IELTS 8.0+",
        admissionRate: "1.5%",
        keyElectives: "Linear Algebra, Probability, Analysis of Algorithms"
      },
      {
        schoolId: "ucla",
        major: "Psychology",
        gpa: "3.87",
        origin: "Santa Monica College (CC)",
        outcome: "Accepted (UCLA Psychology)",
        international: "Yes",
        extra: "Crisis text line counselor, volunteer research assistant in cognitive lab.",
        gpa5YearRange: "3.82 - 3.98",
        competitiveEnglish: "TOEFL 100+ / IELTS 7.0+",
        admissionRate: "8.5%",
        keyElectives: "Psych Statistics, Brain & Behavior, Basic Biology"
      }
    ]
  },
  
  milestones: {
    en: {
      stem: [
        { title: "Core Extracurricular & Tech Projects", desc: "Start building personal programming projects (GitHub repo) or join engineering clubs (Formula SAE, Robotics). Connect your technical interests to hands-on engineering experience." },
        { title: "Academic Honors & Professional Connections", desc: "Apply to the Honors program at your CC. Attend university transfer workshops and identify potential professors who can write academic letters of recommendation." },
        { title: "Hands-on Experience & Internships", desc: "Secure a summer software/engineering internship or volunteer as a research assistant. Participate in hackathons or design showcases." },
        { title: "Application Polish & Portfolio Review", desc: "Assemble technical documentation, clean up your source code repositories, and prepare write-ups of your design projects to align with university admissions rubrics." }
      ],
      business: [
        { title: "Leadership & Club Involvement", desc: "Join your CC Business or Investment Club. Take on a leadership role (treasurer or officer) to demonstrate management capability." },
        { title: "Case Studies & Financial Competitions", desc: "Participate in regional case competitions or stock pitches. Build financial modeling sheets (Excel) or start an entrepreneurial side project." },
        { title: "Corporate Internships & Networking", desc: "Secure a summer/winter business internship in finance, marketing, or auditing. Network with alumni who successfully transferred." },
        { title: "Resume Building & SOP Hook Selection", desc: "Consolidate leadership metrics (e.g. revenue grown, members managed) and choose a unique marketing narrative hook for your Haas/Foster essays." }
      ],
      humanities: [
        { title: "Writing Portfolio & Community Action", desc: "Begin writing for the campus newspaper or literary magazine. Volunteer for local social advocacy causes or cultural organizations." },
        { title: "Research Assistants & Academic Writing", desc: "Seek out research assistant roles under social science professors. Focus on producing strong analytical essays in your writing courses." },
        { title: "Public Engagement & Internship", desc: "Secure internships in digital media, counseling center assistant, or non-profit campaign coordinators. Lead a local community outreach program." },
        { title: "Personal Statement Polish & Writing Samples", desc: "Revise analytical writing samples if required by target liberal arts colleges. Select a personal narrative showing intellectual curiosity." }
      ]
    },
    ko: {
      stem: [
        { title: "핵심 전공 프로젝트 및 기술 동아리 참여", desc: "개인 프로그래밍 프로젝트(GitHub 저장소 구축)를 시작하거나 교내 로봇 동아리, 포뮬러 자동차 설계(SAE) 학회에 가입하여 공학적 실무 능력을 증명합니다." },
        { title: "아카데믹 아너스(Honors) 및 추천서 네트워킹", desc: "CC의 우등 졸업 프로그램(Honors)에 가입합니다. 향후 추천서를 작성해 줄 수 있는 기초 수학/물리 교수와 면담하며 돈독한 관계를 형성합니다." },
        { title: "실무 인턴십 또는 학부 연구생 참여", desc: "여름 방학을 활용하여 기술 인턴십을 확보하거나 대학교 연구실의 학부 연구생으로 자원합니다. 해커톤이나 코딩 대회에 출전합니다." },
        { title: "포트폴리오 정리 및 기술 증빙 서류화", desc: "진행했던 코딩 저장소 코드를 리팩토링하고, 의수 제작 등 설계 프로젝트 산출물을 정리하여 입학 사정관이 확인할 수 있도록 문서화합니다." }
      ],
      business: [
        { title: "교내 리더십 확보 및 경영 투자 학회", desc: "교내 경영/경제 학회 또는 모의 투자 동아리에 가입하여 임원직(회계 담당, 부학회장 등)을 확보하여 조직 관리 역량을 입증합니다." },
        { title: "케이스 컴피티션 및 창업 사이드 프로젝트", desc: "지역 단위 케이스 컴피티션에 참가해 경영 전략을 수립해보거나 주식 피칭 대회에 참여합니다. 소액 이커머스 등 실제 창업 사이드 프로젝트를 운영합니다." },
        { title: "실무 인턴십 및 편입 선배 네트워킹", desc: "로컬 기업이나 스타트업의 회계, 마케팅, 기획 부서 인턴십을 수행합니다. 원하는 대학에 먼저 편입한 선배들과 커피챗을 가지며 정보력을 높입니다." },
        { title: "이력서 정량 지표화 및 에세이 테마 선정", desc: "창업 매출 상승률, 동아리 유치 회원 수 등 나의 리더십 성과를 숫자로 정리하고, Haas/Foster 경영대학 에세이에 기입할 강력한 나만의 스토리 라인을 완성합니다." }
      ],
      humanities: [
        { title: "학내 영문 편집부 및 지역 봉사 활동 참여", desc: "학내 신문사나 문예지 편집부 기자로 가입해 글쓰기 성과를 냅니다. 사회 공헌 단체나 시민 옹호 활동에 봉사자로 참여하여 실천적 가치관을 함양합니다." },
        { title: "교수 연구 어시스턴트 및 학술 에세이 작성", desc: "심리학, 사회학 등 전공 교수의 연구 보조원으로 자원합니다. 글쓰기가 중심인 인문계열 특성에 맞춰 수업 내 레포트 성적을 A학점으로 엄격히 관리합니다." },
        { title: "사회 공헌 프로젝트 및 인턴십 확보", desc: "디지털 미디어, 카운셀링 센터, 혹은 NGO 단체 인턴을 수행합니다. 전공 주제와 직접 연계된 지역 사회 오피니언 리딩 프로젝트를 기획하고 이끕니다." },
        { title: "자기소개서 작성 및 학술 샘플 논문 다듬기", desc: "상위권 리버럴 아츠 칼리지나 사립대에서 요구하는 영문 라이팅 샘플을 윤문하고, 지적 호기심을 가장 설득력 있게 전달하는 Statement of Purpose(SOP)를 완성합니다." }
      ]
    }
  },
  
  essayPatterns: {
    en: {
      "university-of-washington": {
        hook: "Connecting local community work to engineering logic (e.g. how fixing community bikes inspired a thermodynamic project).",
        winningTheme: "Demonstrating how CC resources were exhausted to prepare for UW's specialized labs.",
        rubric: "Allen School CS values active GitHub projects and tutoring. Foster Business values real entrepreneurship. UIUC CoE prioritizes high GPA in math/physics sequences."
      },
      "university-of-california-berkeley": {
        hook: "Detailing the exact technical failure in a robotics project and how it triggered a design change.",
        winningTheme: "For Haas, demonstrating leadership under pressure. For CS, highlighting deep math-oriented curiosity.",
        rubric: "Haas evaluates leadership in business clubs and internships. L&S CS focuses on rigorous math performance (Calculus 1-3, Linear Algebra, Discrete Math) with A grades."
      },
      "default": {
        hook: "Detailing hands-on problem solving in real-world scenarios rather than generic childhood dreams.",
        winningTheme: "Illustrating a clear transfer rationale: connecting CC academic foundations with target university offerings.",
        rubric: "Admissions committees prioritize academic prerequisites (GPA, course completion) followed by active extracurricular leadership."
      }
    },
    ko: {
      "university-of-washington": {
        hook: "지역 사회 봉사 활동을 공학적 논리와 연결 (예: 자전거 수리 봉사에서 배운 기계공학적 열역학 프로젝트 연계).",
        winningTheme: "CC가 제공하는 모든 환경적 한계를 극복하고 UW의 전문 연구실에 기여할 준비가 되었음을 증명.",
        rubric: "알렌 스쿨 컴공은 활발한 깃허브 오픈소스 활동과 튜터링을 선호합니다. 포스터 경영대는 정량적 비즈니스 성과를, 공대는 물리/수학 등 이과 계열의 전과목 A학점을 가장 우대합니다."
      },
      "university-of-california-berkeley": {
        hook: "로보틱스나 소프트웨어 개발 시 겪었던 구체적인 기술적 실패 사례와 이를 극복하기 위해 설계 방식을 전환한 과정 서술.",
        winningTheme: "하스 경영대의 경우 한계적 상황에서의 리더십, 컴퓨터공학의 경우 수학/이론에 대한 깊은 지적 호기심 증명.",
        rubric: "하스 경영대는 동아리 회장 임원 및 기업 인턴십 리더십 성과를 중요하게 봅니다. L&S 컴공은 이산수학 및 선형대수학 등 고등 수학 이수 성적(모두 A학점)을 최우선으로 평가합니다."
      },
      "default": {
        hook: "유년 시절의 막연한 꿈 대신, 이전 대학/CC에서 겪은 구체적인 전공 관련 실무적 문제 해결 과정 중심 서술.",
        winningTheme: "명확한 편입 동기 수립: 이전 대학에서 배운 기초 학업 역량이 타겟 대학의 특정 연구/강의와 어떻게 시너지를 내는지 연계.",
        rubric: "입학 사정관은 최소 지원 자격(GPA, 필수 과목 완수)을 검증한 뒤, 자기소개서에 서술된 전공 리더십과 학업에 대한 성실성(Consistency)을 종합 평가합니다."
      }
    }
  },
  
  essayLibrary: {
    ko: [
      {
        id: "case-haas",
        title: "UC Berkeley Haas 경영대학 합격 에세이",
        profile: "GPA 3.92 | 디아블로 밸리 칼리지 (CC) | 국제학생",
        prompt: "Haas Supplemental: Describe a leadership experience that was impactful...",
        hook: "단순히 회장직을 맡았다는 나열 대신, 동아리 재정 적자 상황에서 예산을 재편성하고 현지 스폰서를 유치했던 구체적 위기 극복 과정을 묘사하며 시작.",
        narrativeArc: "도입(동아리 재정 위기 봉착) -> 전개(CC 인근 소상공인 대상 마케팅 가치 제안서 개발 및 세일즈 피칭) -> 극복(스폰서십 4건 성사로 $2,500 확보 및 회원수 30% 증가) -> 결론(Haas가 추구하는 핵심 가치인 'Question the Status Quo'와 리더십 정의 연계)",
        winningPoint: "정성적인 설명 대신 '스폰서십 4건', '$2,500 확보', '회원수 30% 증가' 등 정량적 지표(Metrics)를 적극 활용하여 비즈니스 실행력을 완벽히 증명함.",
        counselorTip: "경영학과 에세이는 숫자로 말해야 합니다. 리더십 경험에서 본인이 주도하여 변화시킨 수치적 성과를 반드시 하나 이상 삽입하십시오."
      },
      {
        id: "case-calcs",
        title: "UC Berkeley 컴퓨터과학 (L&S CS) 합격 에세이",
        profile: "GPA 3.96 | 디안자 칼리지 (CC) | 국제학생",
        prompt: "UC PIQ #1: Describe how you have prepared for your intended major...",
        hook: "단순히 코딩이 재밌다는 진부한 표현을 버리고, CC 수학 튜터링 중 학생들이 가장 어려워하는 '미적분 수렴 검정'을 시각화해주는 파이썬 시뮬레이터 툴을 개발한 경험으로 강렬하게 오프닝.",
        narrativeArc: "도입(수학 개념 설명의 어려움 발견) -> 전개(시각화 소프트웨어 직접 구현 및 깃허브 오픈소스 배포) -> 발전(40명 이상의 동료 학생 피드백 반영 및 버그 수정 과정 기술) -> 결론(버클리의 학문적 깊이와 오픈소스 기여 정신에 연결)",
        winningPoint: "이론 공부에만 머물지 않고 실제 코딩을 통해 교육적 페인포인트를 해결한 '실천형 엔지니어'로서의 면모와 지적 호기심을 전문 전략 컨설팅 수준으로 극대화함.",
        counselorTip: "컴공 에세이에서는 학업 성적(GPA) 외에 본인이 자발적으로 수행한 '개인 깃허브 프로젝트'나 '오픈소스 기여 경험'을 구체적인 기술 스택(Python, React 등)과 함께 서술하는 것이 합격의 열쇠입니다."
      },
      {
        id: "case-michce",
        title: "University of Michigan 컴퓨터공학 (CE) 합격 에세이",
        profile: "GPA 3.88 | 타주 CC | 국제학생",
        prompt: "U-Mich Supplement: Describe your transfer motivation and academic goals...",
        hook: "이전 CC의 제한된 장비 수준(구형 오실로스코프, 센서 부족)으로 인해 학문적 갈증을 느꼈던 솔직한 고백으로 몰입감을 높여 시작.",
        narrativeArc: "도입(CC 실험 환경의 한계 인지) -> 전개(가상 시뮬레이터를 활용해 전자기학 회로 분석 프로젝트 대안 수행) -> 동기(미시간 대학의 전설적인 EECS 실습실과 특정 하드웨어 연구에 기여하고자 하는 의지 피력) -> 결론(학업 목표와 커리어 매핑)",
        winningPoint: "단순히 '미시간대가 좋아서'가 아니라, '현재 환경에서 할 수 있는 노력을 끝까지 쏟아부은 후 한계에 부딪혀 편입을 결심했다'는 가장 설득력 있는 편입 동기(Transfer Rationale) 제시.",
        counselorTip: "Why Transfer 에세이에서는 '현재 학교에 대한 무조건적인 비난'은 금물입니다. 현재 위치에서 제공하는 리소스를 100% 활용했음을 먼저 입증하고, 그 이상의 학문적 도약을 위해 타겟 대학이 왜 필요한지를 서술해야 합니다."
      },
      {
        id: "case-columbia",
        title: "Columbia University GS 편입 합격 에세이",
        profile: "GPA 3.91 | 커뮤니티 칼리지 | 국제학생",
        prompt: "Columbia GS Personal Statement: Describe your educational journey and why GS...",
        hook: "일반 고등학교 졸업 후 바로 대학에 진학하지 않고 군 복무 또는 스타트업 근무 등 비전형적(Non-traditional) 경로를 밟았던 개인적 서사로 오프닝.",
        narrativeArc: "도입(학업 중단 및 사회 경험) -> 전개(실무 중 학문적 필요성 절감 및 CC 진학 후 학업 복귀과정) -> 동기(콜롬비아의 Core Curriculum이 주는 인문/과학 통합 교육의 가치 연계) -> 결론(아이비리그 학풍 하에서 학업 완성 의지 표명)",
        winningPoint: "비전형적 공백기(Gap Year)를 '방황'이 아닌 '인생의 터닝포인트와 학문적 깊이를 쌓는 성숙의 시간'으로 프레이밍하여 입학사정관에게 강력한 인상을 남김.",
        counselorTip: "콜롬비아 GS 전형은 학생의 '다양성'과 '성숙도'를 가장 높게 평가합니다. 공백기나 우회 경로가 있다면 이를 주눅들지 말고 강점으로 전환하여 기술하십시오."
      },
      {
        id: "case-stanford",
        title: "Stanford University 편입 합격 에세이 (Personal Statement)",
        profile: "GPA 4.00 | 명문 4년제 대학 | 국제학생",
        prompt: "Stanford Supplement: Write about a topic that is important to you...",
        hook: "학업 연구 중 우연히 발견한 데이터 불일치 문제를 해결하기 위해 3주간 밤을 새우며 전 세계 통계 논문을 찾아 해독했던 '학술적 집념'의 순간을 상세히 묘사하며 임팩트 있게 시작.",
        narrativeArc: "도입(연구 중 예상치 못한 모순 직면) -> 전개(기존 가설을 부정하고 새로운 수학적 통계 모델 설계 과정) -> 성과(학부생 학술 컨퍼런스 발표 및 동료 교수들의 인정) -> 결론(스탠포드 특유의 학제간 연구 학풍에 기여하겠다는 다짐)",
        winningPoint: "스탠포드가 가장 중요하게 생각하는 '지적 활력(Intellectual Vitality)'을 완벽하게 보여줌. 단순 공부를 잘하는 학생이 아닌, 스스로 지식을 창조하고 탐구하는 학자로서의 정체성을 증명함.",
        counselorTip: "스탠포드는 전 세계에서 매년 30~40명 내외의 편입생만 선발합니다. 정량 스펙은 당연히 만점이어야 하며, 에세이에서는 본인의 독보적인 'Spike(한 분야의 미친듯한 깊이)'를 보여주어야만 합격 문턱을 넘을 수 있습니다."
      }
    ],
    en: [
      {
        id: "case-haas",
        title: "UC Berkeley Haas Business Transfer Essay",
        profile: "GPA 3.92 | Diablo Valley College (CC) | International Student",
        prompt: "Haas Supplemental: Describe a leadership experience that was impactful...",
        hook: "Instead of simply listing leadership titles, opening with a vivid description of resolving a major budget deficit in a student club and securing local business sponsors.",
        narrativeArc: "Hook (Club financial crisis) -> Development (Creating a corporate marketing proposal and pitching to local businesses) -> Resolution (Securing 4 sponsorships totaling $2,500, growing membership by 30%) -> Conclusion (Connecting experiences to Haas core principles like 'Question the Status Quo')",
        winningPoint: "Used quantitative metrics ($2,500 secured, 30% membership growth) instead of vague descriptions to prove true business execution capability.",
        counselorTip: "Business essays require numbers. Always include at least one concrete metric showing the positive financial or organizational impact of your leadership."
      },
      {
        id: "case-calcs",
        title: "UC Berkeley Computer Science (L&S CS) Essay",
        profile: "GPA 3.96 | De Anza College (CC) | International Student",
        prompt: "UC PIQ #1: Describe how you have prepared for your intended major...",
        hook: "Avoiding generic cliches like 'loving to code'; instead, opening with how tutoring calculus led to building a custom Python visualization tool to help peers understand convergence tests.",
        narrativeArc: "Hook (Recognizing peer struggles in mathematics) -> Development (Building and publishing the visualizer tool on GitHub) -> Extension (Integrating feedback from 40+ classmates to squash bugs) -> Conclusion (Linking to Berkeley's culture of open-source contribution and academic rigor)",
        winningPoint: "Demonstrated intellectual curiosity and proactive problem-solving by building software to solve real educational issues.",
        counselorTip: "For CS transfers, having a public GitHub repository with active personal projects or open-source contributions is as critical as maintaining a high GPA."
      },
      {
        id: "case-michce",
        title: "University of Michigan Computer Engineering Essay",
        profile: "GPA 3.88 | Out-of-State CC | International Student",
        prompt: "U-Mich Supplement: Describe your transfer motivation and academic goals...",
        hook: "Opening with a candid reflection on the limitations of the local community college lab equipment (outdated oscilloscopes and lack of advanced sensors) and the hunger for advanced research.",
        narrativeArc: "Hook (Lab resource limitations) -> Development (Designing custom circuit simulators as a workaround) -> Motivation (Articulating how U-Mich's state-of-the-art EECS facilities will enable research goals) -> Conclusion (Mapping transfer route to long-term career aspirations)",
        winningPoint: "Presented a logical transfer rationale: proving that they exhausted all CC resources first and require U-Mich to take the next academic step.",
        counselorTip: "In 'Why Transfer' essays, never baselessly bash your current school. Prove you maximized your current resources first, then logically explain why you need the target university to progress."
      },
      {
        id: "case-columbia",
        title: "Columbia University GS Transfer Essay",
        profile: "GPA 3.91 | Community College | International Student",
        prompt: "Columbia GS Personal Statement: Describe your educational journey...",
        hook: "Opening with a personal narrative about taking a non-traditional path, such as military service or startup work, prior to starting community college.",
        narrativeArc: "Hook (Non-traditional background/gap years) -> Development (Recognizing academic gaps during work and returning to CC) -> Motivation (How Columbia Core Curriculum integrates humanities with technical goals) -> Conclusion (Asserting dedication to Ivy League scholarship)",
        winningPoint: "Framed a gap year or non-traditional path not as a delay, but as a period of personal growth and intellectual maturity.",
        counselorTip: "Columbia GS values non-traditional journeys. Highlight your maturity and real-world experiences as unique strengths rather than weaknesses."
      },
      {
        id: "case-stanford",
        title: "Stanford University Transfer Personal Statement",
        profile: "GPA 4.00 | Selective 4-Year University | International Student",
        prompt: "Stanford Supplement: Write about a topic that is important to you...",
        hook: "Describing a specific academic moment of spending 3 straight weeks decoding foreign statistical journals to solve a minor data anomaly in a research project.",
        narrativeArc: "Hook (Encountering a research contradiction) -> Development (Disproving the default hypothesis and designing a new statistical model) -> Outcomes (Presenting at an undergraduate conference) -> Conclusion (Connecting academic drive to Stanford's interdisciplinary research environment)",
        winningPoint: "Perfectly demonstrated 'Intellectual Vitality'—showing they don't just study for grades, but actively create and pursue knowledge like a scholar.",
        counselorTip: "Stanford transfer acceptance is extremely low. Beyond a perfect 4.0 GPA, you must highlight a distinct 'Spike'—an extraordinary depth in a specific area."
      }
    ]
  }
};
