// TransferChek - Admitted Cases, Extracurricular Milestones & Essay Patterns Database
window.AdmissionsCasesDatabase = {
  profiles: {
    en: {
      stem: [
        { gpa: "3.94", origin: "De Anza College (CC)", outcome: "Accepted (UC Berkeley CS, UCLA CS)", international: "Yes", extra: "Built a React scheduling app, tutored calculus, joined Robotics Club." },
        { gpa: "3.88", origin: "Pasadena City College (CC)", outcome: "Accepted (Georgia Tech ME)", international: "No", extra: "Formula SAE crew member, designed 3D printed prosthetic arm." },
        { gpa: "3.91", origin: "Bellevue College (CC)", outcome: "Accepted (UW Allen School CS)", international: "Yes", extra: "Machine learning research assistant, founder of coding bootcamp club." },
        { gpa: "3.85", origin: "Diablo Valley College (CC)", outcome: "Accepted (UIUC Civil Engineering)", international: "No", extra: "Concrete canoe design lead, volunteer math instructor." }
      ],
      business: [
        { gpa: "3.92", origin: "Diablo Valley College (CC)", outcome: "Accepted (UC Berkeley Haas)", international: "Yes", extra: "Summer audit internship, President of CC Finance & Investment Society." },
        { gpa: "3.89", origin: "Santa Monica College (CC)", outcome: "Accepted (USC Marshall Business)", international: "No", extra: "Won 2nd place in state-wide case competition, launched e-commerce store." },
        { gpa: "3.90", origin: "Green River College (CC)", outcome: "Accepted (UW Foster School)", international: "Yes", extra: "Accounting tutor, completed non-profit consulting project." }
      ],
      humanities: [
        { gpa: "3.87", origin: "Santa Monica College (CC)", outcome: "Accepted (UCLA Psychology)", international: "Yes", extra: "Crisis text line counselor, volunteer research assistant in cognitive lab." },
        { gpa: "3.82", origin: "Orange Coast College (CC)", outcome: "Accepted (UC Berkeley Sociology)", international: "No", extra: "Editor of CC literary magazine, local social advocacy causes." },
        { gpa: "3.89", origin: "Foothill College (CC)", outcome: "Accepted (NYU Media & Comm)", international: "Yes", extra: "Digital marketing intern at tech startup, local community podcast host." }
      ]
    },
    ko: {
      stem: [
        { gpa: "3.94", origin: "디안자 칼리지 (CC)", outcome: "합격 (UC 버클리 컴공, UCLA 컴공)", international: "예", extra: "리액트 시간표 앱 개발, 미적분 튜터링, 로보틱스 클럽 참여." },
        { gpa: "3.88", origin: "패서디나 시티 칼리지 (CC)", outcome: "합격 (조지아텍 기계공학)", international: "아니오", extra: "대학 포뮬러 SAE 크루 참여, 3D 프린터 의수 설계 프로젝트." },
        { gpa: "3.91", origin: "벨뷰 칼리지 (CC)", outcome: "합격 (워싱턴 대학교 알렌 스쿨 컴공)", international: "예", extra: "머신러닝 학부연구생 어시스턴트, 코딩 캠프 동아리 창립." },
        { gpa: "3.85", origin: "디아블로 밸리 칼리지 (CC)", outcome: "합격 (UIUC 토목공학)", international: "아니오", extra: "콘크리트 카누 설계 리드, 지역 수학 교육 봉사 단체장." }
      ],
      business: [
        { gpa: "3.92", origin: "디아블로 밸리 칼리지 (CC)", outcome: "합격 (UC 버클리 하스 경영대)", international: "예", extra: "여름 회계 법인 인턴십, CC 금융투자 학회 학회장." },
        { gpa: "3.89", origin: "산타모니카 칼리지 (CC)", outcome: "합격 (USC 마샬 경영대)", international: "아니오", extra: "주 단위 케이스 컴피티션 2위 입상, 독립 이커머스 스토어 창업." },
        { gpa: "3.90", origin: "그린 리버 칼리지 (CC)", outcome: "합격 (워싱턴 대학교 포스터 경영대)", international: "예", extra: "회계학 교내 튜터, 지역 비영리 단체 비즈니스 컨설팅 수행." }
      ],
      humanities: [
        { gpa: "3.87", origin: "산타모니카 칼리지 (CC)", outcome: "합격 (UCLA 심리학)", international: "예", extra: "위기 텍스트 라인 상담가, 대학 인지심리 연구소 학부 연구 조원." },
        { gpa: "3.82", origin: "오렌지 코스트 칼리지 (CC)", outcome: "합격 (UC 버클리 사회학)", international: "아니오", extra: "CC 문예지 편집장, 지역 인권 캠페인 기획 리더." },
        { gpa: "3.89", origin: "풋힐 칼리지 (CC)", outcome: "합격 (NYU 미디어 & 커뮤니케이션)", international: "예", extra: "IT 스타트업 디지털 마케팅 인턴, 지역 커뮤니티 팟캐스트 진행자." }
      ]
    }
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
  }
};
