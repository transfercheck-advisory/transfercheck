const fs = require('fs');
const path = require('path');
const vm = require('vm');

// 1. Load transfer-stats.js
const statsPath = path.join(__dirname, 'transfer-stats.js');
if (!fs.existsSync(statsPath)) {
  console.error("transfer-stats.js not found!");
  process.exit(1);
}

const statsFileContent = fs.readFileSync(statsPath, 'utf8');
const statsSandbox = { window: {} };
vm.createContext(statsSandbox);
vm.runInContext(statsFileContent, statsSandbox);
const transferStats = statsSandbox.window.transferStats || {};
const schoolIds = Object.keys(transferStats);

console.log(`Loaded ${schoolIds.length} schools for card news generation.`);

// Create card-news output folder
const outputDir = path.join(__dirname, 'card-news');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function formatSchoolName(schoolId) {
  const parts = schoolId.split('-').slice(0, -1);
  if (parts.length === 0) return schoolId.toUpperCase();
  let name = parts
    .map(word => {
      if (['of', 'at', 'the'].includes(word.toLowerCase())) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  
  if (schoolId.startsWith('uiuc-')) {
    name = 'UIUC';
  } else if (schoolId.startsWith('texas-a-m-')) {
    name = 'Texas A&M';
  }
  return name;
}

// Multi-line text wrapping helper for SVG text rendering
function wrapText(text, maxChars = 20) {
  const words = text.split(' ');
  let lines = [];
  let currentLine = "";
  
  // Quick check if text contains Korean
  const hasKorean = /[\uac00-\ud7a3]/.test(text);
  if (hasKorean) {
    // Character based wrapping for Korean
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
  } else {
    // Space based wrapping for English
    words.forEach(w => {
      if ((currentLine + w).length > maxChars) {
        lines.push(currentLine.trim());
        currentLine = w + " ";
      } else {
        currentLine += w + " ";
      }
    });
    if (currentLine) {
      lines.push(currentLine.trim());
    }
  }
  return lines;
}

function generateSvgCard(title, subtitle, bodyTextList, slideNum, totalSlides, schoolName) {
  // SVG background & styles
  let svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&amp;family=Outfit:wght@400;700;900&amp;display=swap');
      .background { fill: url(#bgGrad); }
      .accent-glow { fill: url(#radialGlow); opacity: 0.15; }
      .brand-mark { font-family: 'Outfit', sans-serif; font-weight: 900; fill: #818cf8; font-size: 32px; letter-spacing: 0.1em; }
      .slide-num { font-family: 'Outfit', sans-serif; font-weight: 700; fill: #94a3b8; font-size: 24px; }
      .card-title { font-family: 'Noto Sans KR', 'Outfit', sans-serif; font-weight: 900; fill: #ffffff; font-size: 58px; letter-spacing: -0.02em; }
      .card-subtitle { font-family: 'Noto Sans KR', sans-serif; font-weight: 700; fill: #f43f5e; font-size: 34px; }
      .card-body { font-family: 'Noto Sans KR', sans-serif; font-weight: 500; fill: #e2e8f0; font-size: 36px; line-height: 1.6; }
      .card-body-accent { fill: #818cf8; font-weight: 700; }
      .footer-url { font-family: 'Outfit', sans-serif; font-weight: 700; fill: #64748b; font-size: 24px; }
      .box { fill: rgba(255,255,255,0.03); stroke: rgba(255,255,255,0.08); stroke-width: 1.5; rx: 16px; }
    </style>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0b0826;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#0d0b34;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#070518;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6366f1;stop-opacity:0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" class="background" />
  <circle cx="540" cy="540" r="600" class="accent-glow" />
  
  <!-- Content Card Box -->
  <rect x="80" y="80" width="920" height="920" class="box" />
  
  <!-- Header -->
  <text x="140" y="160" class="brand-mark">TRANSFERCHECK</text>
  <text x="910" y="160" text-anchor="end" class="slide-num">${slideNum} / ${totalSlides}</text>
  
  <!-- Footer -->
  <text x="540" y="930" text-anchor="middle" class="footer-url">https://transfercheck.vercel.app/schools</text>
`;

  // Draw specific slide layout
  if (slideNum === 1) {
    // Slide 1: Cover (Big title, subtitle, school logo)
    const titleLines = wrapText(title, 15);
    let titleY = 420 - (titleLines.length - 1) * 35;
    
    svg += `  <!-- Cover Layout -->\n`;
    svg += `  <text x="140" y="${titleY - 80}" class="card-subtitle">${subtitle}</text>\n`;
    
    titleLines.forEach((line, idx) => {
      svg += `  <text x="140" y="${titleY + idx * 75}" class="card-title">${line}</text>\n`;
    });
    
    svg += `  <!-- Target School badge -->\n`;
    svg += `  <rect x="140" y="${titleY + (titleLines.length) * 75 + 20}" width="380" height="60" fill="#818cf8" rx="8" />\n`;
    svg += `  <text x="330" y="${titleY + (titleLines.length) * 75 + 58}" text-anchor="middle" font-family="'Noto Sans KR', sans-serif" font-weight="900" fill="#ffffff" font-size="24px">${schoolName}</text>\n`;
  } else {
    // Body Slides (Title + Bullet list / paragraphs)
    svg += `  <!-- Body Layout -->\n`;
    svg += `  <text x="140" y="270" font-family="'Noto Sans KR', sans-serif" font-weight="900" fill="#ffffff" font-size="44px">${title}</text>\n`;
    
    let textY = 380;
    bodyTextList.forEach((para, idx) => {
      const paraLines = wrapText(para, 22);
      paraLines.forEach((line, lIdx) => {
        svg += `  <text x="140" y="${textY}" class="card-body">${line}</text>\n`;
        textY += 58;
      });
      textY += 30; // space between paras
    });
    
    if (slideNum === totalSlides) {
      // CTA Button
      svg += `  <!-- CTA Button -->\n`;
      svg += `  <rect x="340" y="720" width="400" height="80" fill="#818cf8" rx="12" />\n`;
      svg += `  <text x="540" y="772" text-anchor="middle" font-family="'Noto Sans KR', sans-serif" font-weight="900" fill="#ffffff" font-size="28px">무료 합격 진단기 실행</text>\n`;
    }
  }

  svg += `</svg>`;
  return svg;
}

// Caption Generation Helper (Instagram Marketing Captions)
const themes = [
  "선수과목 누락으로 인한 1년 편입 지연 예방 전략",
  "유학원 없이 0원으로 UCLA/UC Berkeley 합격 로드맵 짜기",
  "명문 공대 편입 필수 수학 및 과학 GPA 관리법",
  "AP 과목 대학 학점 인정 커트라인 및 전략적 재수강 가이드",
  "입학사정관의 눈을 사로잡는 편입 에세이 작성 핵심 공식 3가지",
  "편입 시 최대 학점 인정 제한(Credit Cap) 대처법"
];

async function main() {
  let captionFileContent = "# 📱 인스타그램 30일 바이럴 게시물 캡션 마스터 북\n\n";
  captionFileContent += "이 원고북은 최고의 인스타 마케터의 카피라이팅 기법(첫 줄 훅, 문제 제기, 결론, 액션 촉구, 최적 해시태그 세트)을 적용해 생성되었습니다. 카드뉴스 이미지 업로드 시 본문에 그대로 복사-붙여넣기하여 사용하십시오.\n\n";
  captionFileContent += "---\n\n";

  for (let day = 1; day <= 30; day++) {
    const schoolId = schoolIds[(day - 1) % schoolIds.length];
    const schoolName = formatSchoolName(schoolId);
    const schoolData = transferStats[schoolId] || { avgGpa: "3.7+", usNewsRank: "N/A", advisingNote: "" };
    const theme = themes[(day - 1) % themes.length];
    
    // 1. Generate SVG cards
    // Slide 1
    const s1 = generateSvgCard(
      `${schoolName} 편입의 숨겨진 비밀`, 
      theme, 
      [], 
      1, 4, schoolName
    );
    fs.writeFileSync(path.join(outputDir, `Day${day}_Slide1.svg`), s1, 'utf8');

    // Slide 2
    const s2 = generateSvgCard(
      "1. 편입 합격선 정보",
      "",
      [
        `합격자 평균 GPA: ${schoolData.avgGpa || '3.7+'}`,
        `US News 대학 순위: #${schoolData.usNewsRank || 'N/A'}위`,
        "학점이 높더라도 필수 기초 학점이나 선수과목(Prerequisite) 하나가 누락되면 원서조차 검토되지 않고 탈락 처리됩니다."
      ],
      2, 4, schoolName
    );
    fs.writeFileSync(path.join(outputDir, `Day${day}_Slide2.svg`), s2, 'utf8');

    // Slide 3
    const s3 = generateSvgCard(
      "2. 자가 진단 및 로드맵",
      "",
      [
        "복잡한 대학별 편입 규정을 수작업으로 찾지 마세요.",
        "TransferCheck 전략 엔진을 사용하면 본인의 이수 과목과 학점을 입력하여 합격 가능성 진단 및 1대1 수강 로드맵을 즉시 생성할 수 있습니다."
      ],
      3, 4, schoolName
    );
    fs.writeFileSync(path.join(outputDir, `Day${day}_Slide3.svg`), s3, 'utf8');

    // Slide 4
    const s4 = generateSvgCard(
      "3. 합격 예방을 위한 액션",
      "",
      [
        "커피 몇 잔 값의 투자로",
        "수천만 원 상당의 유학 연기 리스크 및 유학 비용 낭비를 미연에 완벽하게 방지하세요.",
        "지금 바로 아래 주소로 접속해 무료 진단을 받아보세요!"
      ],
      4, 4, schoolName
    );
    fs.writeFileSync(path.join(outputDir, `Day${day}_Slide4.svg`), s4, 'utf8');

    // 2. Generate Instagram Caption
    captionFileContent += `## 📅 [Day ${day}] ${schoolName} 편입 공략 - ${theme}\n\n`;
    captionFileContent += `### 📝 인스타그램 업로드 본문 캡션\n\n`;
    captionFileContent += `🚨 학점 4.0도 광탈당하는 '${schoolName}' 편입의 무서운 진실!\n\n`;
    captionFileContent += `미국 명문대 편입 준비할 때, GPA만 높으면 프리패스할 수 있을까요? ❌ 절대 아닙니다.\n`;
    captionFileContent += `가장 흔하면서도 뼈아픈 실수가 바로 **[ ${theme} ]**의 누락입니다. 🤔\n\n`;
    
    captionFileContent += `💡 핵심 포인트 요약:\n`;
    captionFileContent += `• 🏫 **대상 학교**: ${schoolName}\n`;
    captionFileContent += `• 📈 **평균 합격 GPA**: ${schoolData.avgGpa || '3.7+'}\n`;
    captionFileContent += `• 🏆 **US News 순위**: #${schoolData.usNewsRank || 'N/A'}위\n`;
    captionFileContent += `• ⚠️ **주의사항**: 필수 선수과목(Prerequisite)이 단 한 과목이라도 맞지 않으면, 에세이를 아무리 잘 써도 불합격입니다.\n\n`;
    
    captionFileContent += `학기 수강 계획 하나만 꼬여도 편입 시점이 1년 밀리고, 현지 학비와 생활비 수천만 원이 공중분해됩니다. 💸\n\n`;
    
    captionFileContent += `이런 참사를 막기 위해 구글/메타 개발진과 베테랑 컨설턴트들이 개발한 **TransferCheck 자가 진단기**를 써보세요.\n`;
    captionFileContent += `내 현재 수강 목록을 입력하면, 목표 전공 요건을 완벽하게 맞췄는지 3초 만에 진단해 드립니다. 🎯\n\n`;
    
    captionFileContent += `👉 **지금 바로 확인하는 법**\n`;
    captionFileContent += `제 프로필 링크(@transfercheck) 클릭 후, 공식 웹사이트에 접속해 '무료 합격 진단기'를 구동해 보세요!\n\n`;
    
    captionFileContent += `* * *\n\n`;
    captionFileContent += `### 🏷️ 추천 바이럴 해시태그 세트\n`;
    captionFileContent += `#미국대학편입 #편입요건 #${schoolName.replace(/\s+/g, '').replace(/[^a-zA-Z0-9가-힣]/g, '')} #UCLA편입 #UC버클리편입 #편입준비 #유학스타그램 #편입정보 #유학원 #TransferCheck #college-transfer #편입성공\n\n`;
    captionFileContent += `--- \n\n`;
  }

  // 3. Write Caption file
  fs.writeFileSync(path.join(__dirname, 'instagram_captions_30days.md'), captionFileContent, 'utf8');
  console.log("Successfully generated all SVG card news images and Instagram captions!");
}

main();
