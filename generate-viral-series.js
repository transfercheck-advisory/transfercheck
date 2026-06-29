const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'card-news-viral');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Sophisticated character-based wrap for Korean and word-based wrap for English to ensure natural line breaks
function wrapText(text, maxChars = 26, isEnglish = false) {
  if (!isEnglish) {
    // Korean: Character-based natural wrapping to avoid short awkward lines
    let lines = [];
    let currentLine = "";
    let currentLen = 0;
    
    for (let char of text) {
      currentLine += char;
      currentLen += (char.charCodeAt(0) > 127 ? 2 : 1);
      if (currentLen >= maxChars) {
        lines.push(currentLine.trim());
        currentLine = "";
        currentLen = 0;
      }
    }
    if (currentLine.trim()) {
      lines.push(currentLine.trim());
    }
    return lines;
  } else {
    // English: Word-based wrapping
    const words = text.split(' ');
    let lines = [];
    let currentLine = "";
    let currentLen = 0;
    
    for (let word of words) {
      const wordLen = word.length;
      if (currentLen + wordLen > maxChars) {
        lines.push(currentLine.trim());
        currentLine = word + " ";
        currentLen = wordLen + 1;
      } else {
        currentLine += word + " ";
        currentLen += wordLen + 1;
      }
    }
    if (currentLine.trim()) {
      lines.push(currentLine.trim());
    }
    return lines;
  }
}

function generateSvgCard(title, subtitle, bodyTextList, slideNum, totalSlides, footerText, base64BgUri, isEnglish = false) {
  const escapeXml = (str) => {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };

  const cleanSubtitle = escapeXml(subtitle);
  const cleanFooterText = escapeXml(footerText);

  let svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&amp;family=Outfit:wght@400;700;900&amp;display=swap');
      .brand-mark { font-family: 'Outfit', sans-serif; font-weight: 900; fill: #c5a880; font-size: 24px; letter-spacing: 0.15em; }
      .card-title { font-family: ${isEnglish ? "'Outfit'" : "'Noto Sans KR'"}, sans-serif; font-weight: 900; fill: #ffffff; font-size: 34px; line-height: 1.45; letter-spacing: -0.01em; }
      .card-subtitle { font-family: ${isEnglish ? "'Outfit'" : "'Noto Sans KR'"}, sans-serif; font-weight: 700; fill: #c5a880; font-size: 26px; letter-spacing: -0.01em; }
      .card-body { font-family: ${isEnglish ? "'Outfit'" : "'Noto Sans KR'"}, sans-serif; font-weight: 500; fill: #e2e8f0; font-size: 26px; line-height: 1.65; }
      .footer-text { font-family: 'Noto Sans KR', 'Outfit', sans-serif; font-weight: 700; fill: #cbd5e1; font-size: 22px; }
      .overlay { fill: rgba(7, 10, 19, 0.88); }
      .box { fill: none; stroke: rgba(197, 168, 128, 0.35); stroke-width: 1.5; rx: 20px; }
      .bullet-dot { fill: #c5a880; }
    </style>
  </defs>

  <!-- Background Base64 Image -->
  ${base64BgUri ? `<image href="${base64BgUri}" x="0" y="0" width="1080" height="1080" preserveAspectRatio="xMidYMid slice" />` : `<rect width="1080" height="1080" fill="#070a13" />`}
  
  <rect width="1080" height="1080" class="overlay" />
  <rect x="80" y="80" width="920" height="920" class="box" />
  
  <text x="140" y="150" class="brand-mark">US COLLEGE TRANSFER COMPASS</text>
  <text x="540" y="940" text-anchor="middle" class="footer-text">${cleanFooterText}</text>
`;

  if (slideNum === 1) {
    // Cover Layout
    const titleLines = wrapText(title, isEnglish ? 22 : 16, isEnglish);
    let titleY = 460 - (titleLines.length - 1) * 35;
    
    svg += `  <text x="140" y="${titleY - 80}" class="card-subtitle">${cleanSubtitle}</text>\n`;
    titleLines.forEach((line, idx) => {
      svg += `  <text x="140" y="${titleY + idx * 72}" class="card-title">${escapeXml(line)}</text>\n`;
    });
    
    svg += `  <rect x="140" y="${titleY + (titleLines.length) * 72 + 20}" width="280" height="6" fill="#c5a880" />\n`;
    svg += `  <rect x="140" y="730" width="550" height="50" fill="rgba(197, 168, 128, 0.15)" rx="8" />\n`;
    svg += `  <text x="160" y="762" font-family="'Noto Sans KR', 'Outfit', sans-serif" font-weight="900" fill="#c5a880" font-size="20px">${isEnglish ? '📌 Save this post before you apply!' : '📌 미국 대학 편입 준비 중이라면 무조건 저장해 두세요!'}</text>\n`;
  } else {
    // Title with wrapText to avoid any line cutoff
    const titleLines = wrapText(title, isEnglish ? 28 : 22, isEnglish);
    let titleY = 240;
    titleLines.forEach((line, idx) => {
      svg += `  <text x="140" y="${titleY}" font-family=${isEnglish ? "'Outfit'" : "'Noto Sans KR'"} font-weight="900" fill="#ffffff" font-size="34px">${escapeXml(line)}</text>\n`;
      titleY += 46;
    });
    
    let textY = titleY + 15; // Dynamically calculated text start offset to avoid overlapping
    bodyTextList.forEach((para, idx) => {
      const isBullet = para.startsWith('•');
      let cleanPara = para;
      let startX = 140;
      
      if (isBullet) {
        cleanPara = para.substring(1).trim();
        svg += `  <circle cx="150" cy="${textY - 9}" r="5" class="bullet-dot" />\n`;
        startX = 180;
      }
      
      const paraLines = wrapText(cleanPara, isEnglish ? (isBullet ? 28 : 31) : (isBullet ? 24 : 26), isEnglish);
      paraLines.forEach((line, lIdx) => {
        svg += `  <text x="${startX}" y="${textY}" class="card-body">${escapeXml(line)}</text>\n`;
        textY += 46;
      });
      textY += 16;
    });
  }

  svg += `</svg>`;
  return svg;
}

// Global Image Paths mapped to User Desktop Assets
const bg1 = 'file:///C:/Users/user/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/marketing_asset_beautiful_campus.png';
const bg2 = 'file:///C:/Users/user/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/marketing_asset_campus_life.png';
const bg3 = 'file:///C:/Users/user/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/marketing_asset_writing_student.png';

// 1. KOREAN CONTENT
const ko_part1 = [
  {
    title: "학점 4.0 만점자도 예외 없는 미국 명문대 편입 탈락의 비밀",
    subtitle: "PART 1. PREREQUISITE AUTO-REJECT",
    body: [],
    footer: "미국 명문대 편입 공략집"
  },
  {
    title: "1. 입학처 요강의 '필수(Required)' 과목은 최하위 조건입니다",
    subtitle: "",
    body: [
      "• 대학 요강에 적힌 공식 필수 과목만 이수한 학생의 합격률은 극히 낮습니다.",
      "• 실제 합격생들은 대학이 홈페이지 구석에 숨겨둔 '암묵적 권장(Recommended)' 과목과 전공 기초(Lower-division major prep) 과목을 100% 이수하고 지원합니다.",
      "• 편입 전 대학에서 전공 기초 과목을 최대한으로 선이수해야 합격 안정권에 진입할 수 있습니다."
    ],
    footer: "Prerequisite Auto-Reject"
  },
  {
    title: "2. 명문 공대 편입 합격자들이 편입 전 대학에서 끝내는 과목",
    subtitle: "",
    body: [
      "• 명문 공대 편입 합격자들은 단순히 미적분학(Calculus II) 이수만으로 만족하지 않습니다.",
      "• 이들은 다변수 미적분학(Multivariable Calculus), 선형대수학(Linear Algebra), 미분방정식(Differential Equations)은 기본으로 완수합니다.",
      "• 이에 더해 프로그래밍 과목, 대학 물리학(Calculus-based Physics I and II)과 일반화학까지 완벽히 끝내 전공 역량을 증명합니다."
    ],
    footer: "Recommended STEM Coursework"
  },
  {
    title: "3. 아무리 쉬운 A학점 과목을 들어도 편입처에선 '0학점' 처리됩니다",
    subtitle: "",
    body: [
      "• 목표 대학교와 공식 학점 협정(Articulation Agreement)이 맺어지지 않은 일반 교양이나 불필요한 과목은 편입 시 학점 인정이 거부됩니다.",
      "• 꿀과목으로 평점만 채우는 꼼수는 사정관들에게 바로 필터링됩니다.",
      "• 아까운 시간과 학비를 낭비하지 말고, 실제 편입 시 가산점을 받고 학점을 인정받을 수 있는 핵심 전공 기초 과목으로 시간표를 채워야 합니다."
    ],
    footer: "Save Time and Save Money"
  },
  {
    title: "4. 선수과목 체인(Prerequisite Chain)이 꼬이면 강제 1년 지연",
    subtitle: "",
    body: [
      "• [Calculus I -> Physics I -> Physics II]로 연결되는 연계 구조에서 미적분학 한 과목 수강이 밀리면, 물리학 시리즈를 제때 끝낼 수 없습니다.",
      "• 대부분의 대학은 지원 학기 직전까지 필수 과목 완수를 엄격하게 요구하므로, 이 순서 하나 때문에 편입 지원이 통째로 1년 밀려 약 7,000만 원의 학비와 생활비가 낭비됩니다."
    ],
    footer: "Transfer Timeline Safety"
  },
  {
    title: "이 모든 필수/권장 과목을 자동으로 검증하고 싶다면?",
    subtitle: "",
    body: [
      "• 내 이수 과목과 학점을 목표 대학의 공식 최신 데이터와 대조해 선수과목 매핑 상태를 즉시 판별해 주는 정밀 엔진이 있습니다.",
      "• 상세 내용과 웹사이트 주소는 본문 캡션 및 프로필 링크를 확인해 보세요!"
    ],
    footer: "상세 정보는 본문 캡션 및 프로필 링크 확인 👇"
  }
];

const ko_part2 = [
  {
    title: "유학원도 절대 모르는 진짜 명문대 합격생의 킬러 EC 목록",
    subtitle: "PART 2. THE EC ILLUSION",
    body: [],
    footer: "미국 명문대 편입 공략집"
  },
  {
    title: "1. Computer Science (컴퓨터공학) 킬러 EC",
    subtitle: "",
    body: [
      "• ❌ 단순 깃허브 잔디 심기, 뻔한 계산기 코딩은 탈락 대상.",
      "• ⭕ 1,000명 이상이 실제로 사용하는 유명 오픈소스 라이브러리에 Pull Request 기여 및 병합 완료.",
      "• ⭕ 크롬 익스텐션 또는 모바일 앱을 실제로 런칭하여 사용자 유입 지표 증명.",
      "• ⭕ 편입 전 대학 학내 알고리즘 동아리(ACM Chapter)를 창설하고 자체 코딩 캠프 리드."
    ],
    footer: "CS Transfer Killer EC"
  },
  {
    title: "2. Business and Economics (경영/경제) 킬러 EC",
    subtitle: "",
    body: [
      "• ❌ 단순 모의 투자 대회 참가, 경영학 요약 블로그 운영은 탈락 대상.",
      "• ⭕ 학내 '학생 투자 기금(Student Investment Fund)'에 참여하여 실제 자금 포트폴리오 자산 운용.",
      "• ⭕ 로컬 소상공인의 재무제표(P and L)를 분석해 실질적 비용 절감 솔루션을 제안한 재무 컨설팅 프로젝트.",
      "• ⭕ Harvard Business Review 케이스 스터디 학회를 조직하여 정기 토론회 리드."
    ],
    footer: "Business Transfer Killer EC"
  },
  {
    title: "3. Engineering and Biology (공학/바이오) 킬러 EC",
    subtitle: "",
    body: [
      "• ❌ 단순 병원 안내 데스크 봉사활동, 과학 동아리 유령 회원은 탈락 대상.",
      "• ⭕ 실제 임상/학술 연구 논문에 공동 저자(Co-author) 또는 감사(Acknowledgement)로 이름 등재.",
      "• ⭕ 학계 저널을 분석하여 매주 발행하는 유학 연구 뉴스레터 발행.",
      "• ⭕ 3D 프린팅 기반의 의족/재활 장비 프로토타입 설계 및 로컬 병원 기부 프로젝트."
    ],
    footer: "Engineering and Bio Transfer Killer EC"
  },
  {
    title: "나에게 어울리는 스펙을 진단하려면?",
    subtitle: "",
    body: [
      "• 전공별 합격생들의 실제 포트폴리오 데이터와 매칭하여 경쟁력 있는 활동 로드맵을 자동으로 추천해 주는 데이터 툴이 있습니다.",
      "• 상세 내용과 자가 진단 사이트 주소는 본문 캡션과 프로필 링크에서 지금 바로 확인하세요!"
    ],
    footer: "상세 정보는 본문 캡션 및 프로필 링크 확인 👇"
  }
];

const ko_part3 = [
  {
    title: "당신의 에세이가 3초 만에 버려지는 이유",
    subtitle: "PART 3. WHY ESSAY TEMPLATES FAIL",
    body: [],
    footer: "미국 명문대 편입 공략집"
  },
  {
    title: "1. '왜 이 대학인가'에 절대 쓰지 말아야 할 두 가지",
    subtitle: "",
    body: [
      "• ❌ 학교 웹사이트 브로셔 문구를 베낀 칭찬 ('훌륭한 교수진과 웅장한 도서관...')",
      "• ❌ 전적 대학교의 나쁜 시설이나 시스템에 대한 험담 ('이전 학교는 너무 작고 지원이 적어서...')",
      "• ⭕ 정답: 목표 대학 특정 교수 연구실의 최신 논문, 고유 커리큘럼과의 학문적 핏을 정교하게 서술해야 합니다."
    ],
    footer: "Why Essay Templates Fail"
  },
  {
    title: "2. 에세이 뼈대에 전공 EC를 녹여내는 합격 공식",
    subtitle: "",
    body: [
      "• ❌ '이러이러한 활동을 했다'는 이력서 나열식 서술은 최악의 평가를 받습니다.",
      "• ⭕ 정답: '편입 전 대학에서 진행한 EC 프로젝트를 통해 어떤 학술적 한계나 호기심을 마주했고, 이를 극복하기 위해 목표 대학의 특정 학과 연구실이 왜 필요한지' 에세이의 논리 구조 속에 유기적으로 빌드업해야 합니다."
    ],
    footer: "Integrate EC into Your Story"
  },
  {
    title: "3. 합격하는 편입 에세이의 3대 핵심 뼈대 공식",
    subtitle: "",
    body: [
      "• 1) 현재 성취: 열악한 전적대 환경 속에서도 내 전공 분야에서 일궈낸 최고의 학업적 노력.",
      "• 2) 오직 이 대학인 이유: 현 대학에서 더 이상 해결할 수 없는 학문적 갈증을 목표 대학의 어떤 리소스로 풀 것인가.",
      "• 3) 상호 기여: 내가 입학하여 대학 공동체와 토론에 기여할 수 있는 고유한 배경."
    ],
    footer: "The 3 Pillars of Transfer Essay"
  },
  {
    title: "합격생 에세이 뼈대를 자동으로 잡으려면?",
    subtitle: "",
    body: [
      "• 편입 합격 에세이의 공식을 기반으로 내 스토리에 어울리는 논리 흐름과 키워드를 완벽하게 잡아주는 인공지능 보조 툴이 있습니다.",
      "• 상세 내용과 사이트 주소는 본문 캡션 및 프로필 링크에서 지금 바로 확인해 보세요!"
    ],
    footer: "상세 정보는 본문 캡션 및 프로필 링크 확인 👇"
  }
];


// 2. ENGLISH CONTENT
const en_part1 = [
  {
    title: "Why Perfect 4.0 GPA Students Get Rejected from Top US Universities",
    subtitle: "PART 1. PREREQUISITE AUTO-REJECT",
    body: [],
    footer: "US Transfer Secrets"
  },
  {
    title: "1. Official Prerequisites Are Just the Bare Minimum",
    subtitle: "",
    body: [
      "• Taking only the 'officially required' courses on the transfer site is just a baseline for screening.",
      "• To stand out, you must complete highly recommended courses and upper-division introductory major requirements.",
      "• Complete as many major prep courses as possible at your current institution to stay within the admission zone."
    ],
    footer: "Prerequisite Auto-Reject"
  },
  {
    title: "2. The Hidden Coursework Formula for STEM Admits",
    subtitle: "",
    body: [
      "• Admitted transfers to top engineering schools complete Multivariable Calculus, Linear Algebra, and Differential Equations at their current college before applying.",
      "• Additionally, they complete programming courses, calculus-based Physics I and II, and general Chemistry to prove academic rigor."
    ],
    footer: "Recommended STEM Coursework"
  },
  {
    title: "3. Stop Wasting Time on Unaccredited Classes",
    subtitle: "",
    body: [
      "• Blindly taking elective courses that do not match transfer articulation agreements wastes your valuable time and tuition.",
      "• Focus exclusively on transferable major requirements to boost your competitive edge while saving time and money."
    ],
    footer: "Save Time and Save Money"
  },
  {
    title: "4. The Prerequisite Chain Failure - 1-Year Forced Delay",
    subtitle: "",
    body: [
      "• Missing one prerequisite course sequence (like Calc I -> Physics I -> Physics II) pushes back your application timeline by a whole year.",
      "• This single scheduling mistake can cost you over $70,000 in tuition and living expenses. Audit your timeline early."
    ],
    footer: "Transfer Timeline Safety"
  },
  {
    title: "Want to Audit Your Eligibility Instantly?",
    subtitle: "",
    body: [
      "• We have a smart diagnostic engine that matches your courses with official university databases to audit your prerequisites in 3 seconds.",
      "• Read our caption and check the link in bio to run a free scan!"
    ],
    footer: "Check Caption and Link in Bio 👇"
  }
];

const en_part2 = [
  {
    title: "The Ultimate Transfer Extracurricular Portfolio (Agency Secrets)",
    subtitle: "PART 2. THE EC ILLUSION",
    body: [],
    footer: "US Transfer Secrets"
  },
  {
    title: "1. Computer Science - Prove Real Impact",
    subtitle: "",
    body: [
      "• ❌ Generic GitHub commits or basic calculators will get ignored.",
      "• ⭕ Contribute and merge Pull Requests in famous open-source libraries with 1,000+ active users.",
      "• ⭕ Deploy a Chrome Extension or mobile app with measurable user acquisition.",
      "• ⭕ Found a student computer science chapter (ACM) and host algorithms workshops."
    ],
    footer: "CS Transfer Killer EC"
  },
  {
    title: "2. Business and Economics - Asset Management and Consulting",
    subtitle: "",
    body: [
      "• ❌ Fake virtual stock games or standard summaries on blogs will get ignored.",
      "• ⭕ Join or lead a Student Investment Fund managing real capital portfolios.",
      "• ⭕ Analyze actual financial statements (P and L) of local businesses and deliver expense reduction plans.",
      "• ⭕ Lead regular Harvard Business Review Case Study forums."
    ],
    footer: "Business Transfer Killer EC"
  },
  {
    title: "3. Engineering and Biology - Research and Prototypes",
    subtitle: "",
    body: [
      "• ❌ Standard hospital greeting desk volunteering is a waste of time.",
      "• ⭕ Secure a Co-author or Acknowledgement tag in published medical/clinical papers.",
      "• ⭕ Author a weekly research newsletter reviewing scholarly science journals.",
      "• ⭕ Design 3D-printed rehabilitation/prosthetic equipment prototypes for local clinics."
    ],
    footer: "Engineering and Bio Transfer Killer EC"
  },
  {
    title: "Need an Extracurricular Roadmap?",
    subtitle: "",
    body: [
      "• There is an analytical tool that matches your major with database profiles of admitted students to recommend top-tier EC strategies.",
      "• Read our caption and check the link in bio to start!"
    ],
    footer: "Check Caption and Link in Bio 👇"
  }
];

const en_part3 = [
  {
    title: "Why Your Essay Gets Thrown in the Trash in 3 Seconds",
    subtitle: "PART 3. WHY ESSAY TEMPLATES FAIL",
    body: [],
    footer: "US Transfer Secrets"
  },
  {
    title: "1. Never Write These Two Things in Your 'Why Us' Essay",
    subtitle: "",
    body: [
      "• ❌ Generic brochure praise ('World-class professors and beautiful library...').",
      "• ❌ Criticizing your current college ('My current school is too small with no resources...').",
      "• ⭕ Focus exclusively on specific research papers by their faculty, unique course numbers, and academic alignment."
    ],
    footer: "Why Essay Templates Fail"
  },
  {
    title: "2. The Formula to Weave Your ECs into the Essay",
    subtitle: "",
    body: [
      "• ❌ Never just list your activities like a resume in paragraph form.",
      "• ⭕ Show how your EC projects at CC exposed specific academic limits, creating a logical need to access resources at the target university."
    ],
    footer: "Integrate EC into Your Story"
  },
  {
    title: "3. The 3 Crucial Pillars of Admitted Transfer Essays",
    subtitle: "",
    body: [
      "• 1) Current Accomplishments: Maximizing your current environment.",
      "• 2) Academic Fit: Clear, logical reason why you must study at the target institution.",
      "• 3) Mutual Contribution: What unique background you bring to their campus community."
    ],
    footer: "The 3 Pillars of Transfer Essay"
  },
  {
    title: "Want to Automate Your Essay Outline?",
    subtitle: "",
    body: [
      "• There is an AI copilot that maps your personal stories to the proven academic logic of successful transfer essays.",
      "• Read our caption and check the link in bio to test it for free!"
    ],
    footer: "Check Caption and Link in Bio 👇"
  }
];


// Write all Korean SVGs
ko_part1.forEach((card, idx) => {
  const svgContent = generateSvgCard(card.title, card.subtitle, card.body, idx + 1, ko_part1.length, card.footer, bg1, false);
  fs.writeFileSync(path.join(outputDir, `Ko_Part1_Slide${idx + 1}.svg`), svgContent, 'utf8');
});
ko_part2.forEach((card, idx) => {
  const svgContent = generateSvgCard(card.title, card.subtitle, card.body, idx + 1, ko_part2.length, card.footer, bg2, false);
  fs.writeFileSync(path.join(outputDir, `Ko_Part2_Slide${idx + 1}.svg`), svgContent, 'utf8');
});
ko_part3.forEach((card, idx) => {
  const svgContent = generateSvgCard(card.title, card.subtitle, card.body, idx + 1, ko_part3.length, card.footer, bg3, false);
  fs.writeFileSync(path.join(outputDir, `Ko_Part3_Slide${idx + 1}.svg`), svgContent, 'utf8');
});

// Write all English SVGs
en_part1.forEach((card, idx) => {
  const svgContent = generateSvgCard(card.title, card.subtitle, card.body, idx + 1, en_part1.length, card.footer, bg1, true);
  fs.writeFileSync(path.join(outputDir, `New_Part1_Slide${idx + 1}.svg`), svgContent, 'utf8');
});
en_part2.forEach((card, idx) => {
  const svgContent = generateSvgCard(card.title, card.subtitle, card.body, idx + 1, en_part2.length, card.footer, bg2, true);
  fs.writeFileSync(path.join(outputDir, `New_Part2_Slide${idx + 1}.svg`), svgContent, 'utf8');
});
en_part3.forEach((card, idx) => {
  const svgContent = generateSvgCard(card.title, card.subtitle, card.body, idx + 1, en_part3.length, card.footer, bg3, true);
  fs.writeFileSync(path.join(outputDir, `New_Part3_Slide${idx + 1}.svg`), svgContent, 'utf8');
});

console.log("Successfully generated all 32 (Ko + En) high-quality viral card news SVG files with strict XML escaping, title wrap, and layout safeguards!");
