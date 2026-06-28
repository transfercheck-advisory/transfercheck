const fs = require('fs');
const path = require('path');

// Output folder for viral series
const outputDir = path.join(__dirname, 'card-news-viral');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function wrapText(text, maxChars = 20) {
  let lines = [];
  let currentLine = "";
  let charCount = 0;
  
  for (let char of text) {
    currentLine += char;
    charCount += (char.charCodeAt(0) > 127 ? 2 : 1); // Korean char counts as 2
    if (charCount >= maxChars * 1.5) {
      lines.push(currentLine);
      currentLine = "";
      charCount = 0;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

function generateSvgCard(title, subtitle, bodyTextList, slideNum, totalSlides, footerText) {
  let svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&amp;family=Inter:wght@400;700;900&amp;display=swap');
      .background { fill: url(#bgGrad); }
      .accent-glow { fill: url(#radialGlow); opacity: 0.15; }
      .brand-mark { font-family: 'Inter', sans-serif; font-weight: 900; fill: #c5a880; font-size: 26px; letter-spacing: 0.15em; }
      .slide-num { font-family: 'Inter', sans-serif; font-weight: 700; fill: #94a3b8; font-size: 22px; }
      .card-title { font-family: 'Noto Sans KR', sans-serif; font-weight: 900; fill: #ffffff; font-size: 56px; letter-spacing: -0.02em; }
      .card-subtitle { font-family: 'Noto Sans KR', sans-serif; font-weight: 700; fill: #c5a880; font-size: 30px; letter-spacing: -0.01em; }
      .card-body { font-family: 'Noto Sans KR', sans-serif; font-weight: 500; fill: #cbd5e1; font-size: 34px; line-height: 1.6; }
      .footer-text { font-family: 'Noto Sans KR', 'Inter', sans-serif; font-weight: 700; fill: #64748b; font-size: 22px; }
      .box { fill: rgba(255,255,255,0.02); stroke: rgba(197, 168, 128, 0.15); stroke-width: 1.5; rx: 20px; }
      .bullet { fill: #c5a880; font-weight: 900; }
    </style>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#070a13;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#0c1122;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#04060d;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#c5a880;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c5a880;stop-opacity:0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" class="background" />
  <circle cx="540" cy="540" r="500" class="accent-glow" />
  
  <!-- Border Box -->
  <rect x="80" y="80" width="920" height="920" class="box" />
  
  <!-- Header -->
  <text x="140" y="150" class="brand-mark">US COLLEGE TRANSFER COMPASS</text>
  <text x="910" y="150" text-anchor="end" class="slide-num">${slideNum} / ${totalSlides}</text>
  
  <!-- Footer -->
  <text x="540" y="940" text-anchor="middle" class="footer-text">${footerText}</text>
`;

  if (slideNum === 1) {
    // Cover Slide
    const titleLines = wrapText(title, 16);
    let titleY = 460 - (titleLines.length - 1) * 35;
    
    svg += `  <!-- Cover Layout -->\n`;
    svg += `  <text x="140" y="${titleY - 80}" class="card-subtitle">${subtitle}</text>\n`;
    
    titleLines.forEach((line, idx) => {
      svg += `  <text x="140" y="${titleY + idx * 75}" class="card-title">${line}</text>\n`;
    });
    
    svg += `  <rect x="140" y="${titleY + (titleLines.length) * 75 + 30}" width="280" height="8" fill="#c5a880" />\n`;
  } else {
    // Content Slides
    svg += `  <!-- Content Layout -->\n`;
    svg += `  <text x="140" y="260" font-family="'Noto Sans KR', sans-serif" font-weight="900" fill="#ffffff" font-size="44px">${title}</text>\n`;
    
    let textY = 360;
    bodyTextList.forEach((para, idx) => {
      const isBullet = para.startsWith('•');
      let cleanPara = para;
      let startX = 140;
      
      if (isBullet) {
        cleanPara = para.substring(1).trim();
        svg += `  <circle cx="150" cy="${textY - 10}" r="6" fill="#c5a880" />\n`;
        startX = 180;
      }
      
      const paraLines = wrapText(cleanPara, isBullet ? 20 : 22);
      paraLines.forEach((line, lIdx) => {
        svg += `  <text x="${startX}" y="${textY}" class="card-body">${line}</text>\n`;
        textY += 56;
      });
      textY += 24; // spacing between paragraphs
    });
  }

  svg += `</svg>`;
  return svg;
}

// 3-part content configurations
const part1 = [
  {
    title: "학점 4.0 만점도 탈락시키는 미국 편입의 무서운 비밀",
    subtitle: "PART 1. PREREQUISITE AUTO-REJECT",
    body: [],
    footer: "미국 명문대 편입 공략집"
  },
  {
    title: "1. 필수 과목 이수는 기본선일 뿐입니다",
    subtitle: "",
    body: [
      "• 대학 입학처가 요구하는 '공식 필수(Required) 과목'만 들으면 합격선 턱걸이에 불과합니다.",
      "• 경쟁이 치열한 탑스쿨일수록 상위 학년 과목(Upper-level)과 암묵적인 권장 과목까지 끝내야 합격합니다."
    ],
    footer: "Prerequisite Auto-Reject"
  },
  {
    title: "2. 이공계 편입 합격생의 암묵적 이수 공식",
    subtitle: "",
    body: [
      "• CC에서 필수 미적분학(Calculus II)만 듣고 편입에 성공하길 바라는 것은 큰 오산입니다.",
      "• 합격자들은 다변수 미적분학(Multivariable Calculus), 선형대수학(Linear Algebra), 미분방정식(Differential Equations)까지 이미 완수하고 지원합니다."
    ],
    footer: "Recommended STEM Coursework"
  },
  {
    title: "3. 수강 순서가 꼬이면 유학비 7천만 원 공중분해",
    subtitle: "",
    body: [
      "• 선수과목의 선수과목(Chain) 순서를 하나라도 잘못 배치하면 지원 타이밍이 통째로 1년 날아갑니다.",
      "• 엑셀로 일일이 대조하지 말고, 정교한 분석 도구를 통해 미리 타임라인을 검증해야 돈과 시간을 아낍니다."
    ],
    footer: "Transfer Timeline Safety"
  },
  {
    title: "더 정교한 분석 툴이 필요하다면?",
    subtitle: "",
    body: [
      "• 내 이수 과목과 GPA 정보를 대학교 공식 데이터와 대조해 선수과목 매핑 상태를 3초 만에 판별해 주는 정밀 엔진이 있습니다.",
      "• 이 똑똑한 자가 진단 도구와 웹사이트 주소는 본문 캡션 및 프로필 링크에서 바로 확인하실 수 있습니다!"
    ],
    footer: "상세 정보는 본문 캡션 및 프로필 링크 확인 👇"
  }
];

const part2 = [
  {
    title: "유학원에서도 알려주지 않는 진짜 명문대 합격생의 EC 리스트",
    subtitle: "PART 2. THE EC ILLUSION",
    body: [],
    footer: "미국 명문대 편입 공략집"
  },
  {
    title: "1. Computer Science (컴퓨터공학) 킬러 EC",
    subtitle: "",
    body: [
      "• 오픈소스 컨트리뷰션 또는 2개 이상의 실제 배포 및 작동 가능한 풀스택 웹/앱 토이프로젝트.",
      "• CC 학내 코딩 클럽 창설 또는 지역 자영업자들을 위해 무료로 웹사이트를 제작해 주는 IT 봉사활동."
    ],
    footer: "CS Transfer Killer EC"
  },
  {
    title: "2. Business & Economics (경영/경제) 킬러 EC",
    subtitle: "",
    body: [
      "• 모의 펀드 클럽 창설 및 실제 포트폴리오 운용 리포트 작성.",
      "• 교수 연구 보조(Research Assistant) 참여 또는 지역 내 스타트업/소상공인 대상 마케팅 및 경영 컨설팅 인턴십 수행."
    ],
    footer: "Business Transfer Killer EC"
  },
  {
    title: "3. Engineering & Biology (공학/바이오) 킬러 EC",
    subtitle: "",
    body: [
      "• CAD 설계 포트폴리오 구축(Mechanical) 또는 로컬 연구소/대학 병원 랩실 인턴십 보조.",
      "• 과학 학회 저널 요약 뉴스레터 정기 발행 또는 학내 튜터(Peer Tutor) 리더로서 전공 과목 지도."
    ],
    footer: "Engineering & Bio Transfer Killer EC"
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

const part3 = [
  {
    title: "템플릿 복사해 쓴 뻔한 에세이가 3초 만에 버려지는 이유",
    subtitle: "PART 3. WHY ESSAY TEMPLATES FAIL",
    body: [],
    footer: "미국 명문대 편입 공략집"
  },
  {
    title: "1. '왜 이 대학인가'에 뻔한 브로셔 카피 금지",
    subtitle: "",
    body: [
      "• '훌륭한 교수진과 아름다운 캠퍼스 때문에...'는 사정관들이 하루 수천 번씩 읽는 최악의 문구입니다.",
      "• 가고자 하는 목표 전공의 특정 교수 논문, 고유 연구실 명칭, 혹은 연계 커리큘럼을 아주 구체적으로 언급해야 합니다."
    ],
    footer: "Why Essay Templates Fail"
  },
  {
    title: "2. 전적 대학교의 나쁜 점은 절대 금기입니다",
    subtitle: "",
    body: [
      "• '전 대학교는 수준이 낮아서...', '과목이 없어서...' 등의 험담은 입학 사정관들에게 최악의 감점 요인입니다.",
      "• 현재 환경에서 내가 할 수 있는 최선을 다해 얻은 학문적 성취를 먼저 보여주는 것이 합격의 공식입니다."
    ],
    footer: "Don't Criticize Your Current School"
  },
  {
    title: "3. 합격하는 편입 에세이의 3대 핵심 뼈대",
    subtitle: "",
    body: [
      "• 1) **현재 성취**: 전적대에서 이뤄낸 학문적 노력과 극복 과정.",
      "• 2) **오직 이 대학인 이유**: 목표 대학 특정 자원과의 매칭성.",
      "• 3) **상호 기여**: 내가 입학 후 학내 공동체에 줄 수 있는 구체적 기여."
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

// Generate Part 1
part1.forEach((card, idx) => {
  const svgContent = generateSvgCard(card.title, card.subtitle, card.body, idx + 1, part1.length, card.footer);
  fs.writeFileSync(path.join(outputDir, `Part1_Slide${idx + 1}.svg`), svgContent, 'utf8');
});

// Generate Part 2
part2.forEach((card, idx) => {
  const svgContent = generateSvgCard(card.title, card.subtitle, card.body, idx + 1, part2.length, card.footer);
  fs.writeFileSync(path.join(outputDir, `Part2_Slide${idx + 1}.svg`), svgContent, 'utf8');
});

// Generate Part 3
part3.forEach((card, idx) => {
  const svgContent = generateSvgCard(card.title, card.subtitle, card.body, idx + 1, part3.length, card.footer);
  fs.writeFileSync(path.join(outputDir, `Part3_Slide${idx + 1}.svg`), svgContent, 'utf8');
});

console.log("Successfully generated all 15 high-quality viral card news SVG files!");
