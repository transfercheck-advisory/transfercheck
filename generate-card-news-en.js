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

console.log(`Loaded ${schoolIds.length} schools for English card news generation.`);

// Create card-news-en output folder
const outputDir = path.join(__dirname, 'card-news-en');
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

// Multi-line text wrapping helper
function wrapText(text, maxChars = 22) {
  const words = text.split(' ');
  let lines = [];
  let currentLine = "";
  
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
  return lines;
}

function generateSvgCard(title, subtitle, bodyTextList, slideNum, totalSlides, schoolName) {
  let svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&amp;display=swap');
      .background { fill: url(#bgGrad); }
      .accent-glow { fill: url(#radialGlow); opacity: 0.18; }
      .brand-mark { font-family: 'Outfit', sans-serif; font-weight: 900; fill: #818cf8; font-size: 32px; letter-spacing: 0.1em; }
      .slide-num { font-family: 'Outfit', sans-serif; font-weight: 700; fill: #94a3b8; font-size: 24px; }
      .card-title { font-family: 'Outfit', sans-serif; font-weight: 900; fill: #ffffff; font-size: 58px; letter-spacing: -0.02em; }
      .card-subtitle { font-family: 'Outfit', sans-serif; font-weight: 700; fill: #f43f5e; font-size: 32px; text-transform: uppercase; letter-spacing: 0.05em; }
      .card-body { font-family: 'Outfit', sans-serif; font-weight: 500; fill: #cbd5e1; font-size: 34px; line-height: 1.6; }
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

  <rect width="1080" height="1080" class="background" />
  <circle cx="540" cy="540" r="600" class="accent-glow" />
  <rect x="80" y="80" width="920" height="920" class="box" />
  
  <text x="140" y="160" class="brand-mark">TRANSFERCHECK</text>
  <text x="910" y="160" text-anchor="end" class="slide-num">${slideNum} / ${totalSlides}</text>
  <text x="540" y="930" text-anchor="middle" class="footer-url">https://transfercheck.vercel.app/schools</text>
`;

  if (slideNum === 1) {
    const titleLines = wrapText(title, 16);
    let titleY = 440 - (titleLines.length - 1) * 35;
    
    svg += `  <!-- Cover Layout -->\n`;
    svg += `  <text x="140" y="${titleY - 80}" class="card-subtitle">${subtitle}</text>\n`;
    
    titleLines.forEach((line, idx) => {
      svg += `  <text x="140" y="${titleY + idx * 75}" class="card-title">${line}</text>\n`;
    });
    
    svg += `  <rect x="140" y="${titleY + (titleLines.length) * 75 + 20}" width="420" height="60" fill="#818cf8" rx="8" />\n`;
    svg += `  <text x="350" y="${titleY + (titleLines.length) * 75 + 58}" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" fill="#ffffff" font-size="24px">${schoolName}</text>\n`;
  } else {
    svg += `  <!-- Body Layout -->\n`;
    svg += `  <text x="140" y="270" font-family="'Outfit', sans-serif" font-weight="900" fill="#ffffff" font-size="44px">${title}</text>\n`;
    
    let textY = 380;
    bodyTextList.forEach((para, idx) => {
      const paraLines = wrapText(para, 24);
      paraLines.forEach((line, lIdx) => {
        svg += `  <text x="140" y="${textY}" class="card-body">${line}</text>\n`;
        textY += 58;
      });
      textY += 30;
    });
    
    if (slideNum === totalSlides) {
      svg += `  <!-- CTA Button -->\n`;
      svg += `  <rect x="340" y="720" width="400" height="80" fill="#818cf8" rx="12" />\n`;
      svg += `  <text x="540" y="772" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" fill="#ffffff" font-size="26px">Start Free Diagnostic</text>\n`;
    }
  }

  svg += `</svg>`;
  return svg;
}

const themes = [
  "How to Avoid the 1-Year Transfer Delay Prerequisite Mistake",
  "Build UCLA & UC Berkeley Transfer Roadmap for $0 Without Agencies",
  "How to Keep Your STEM GPA competitive for Top Engineering Transfers",
  "AP Credit Policies & Retaking Courses strategically for College Credits",
  "3 Secret Writing Rules for Admission-Winning Essays",
  "How to Navigate Maximum Transfer Credit Caps Without Wasting Semesters"
];

async function main() {
  let captionFileContent = "# 📱 Global Instagram Posting Caption Master Book (English)\n\n";
  captionFileContent += "This master book is written with professional copyright hooks, pain-point callouts, CTA, and optimized global hashtags. Copy and paste when uploading to @TransferCheck_official.\n\n";
  captionFileContent += "---\n\n";

  for (let day = 1; day <= 30; day++) {
    const schoolId = schoolIds[(day - 1) % schoolIds.length];
    const schoolName = formatSchoolName(schoolId);
    const schoolData = transferStats[schoolId] || { avgGpa: "3.7+", usNewsRank: "N/A" };
    const theme = themes[(day - 1) % themes.length];
    
    // 1. Generate SVG cards
    // Slide 1
    const s1 = generateSvgCard(
      `The Brutal Truth of ${schoolName} Transfer`, 
      "MUST READ FOR TRANSFER STUDENTS", 
      [], 
      1, 4, schoolName
    );
    fs.writeFileSync(path.join(outputDir, `Day${day}_Slide1.svg`), s1, 'utf8');

    // Slide 2
    const s2 = generateSvgCard(
      "1. Admission GPA & Stats",
      "",
      [
        `Admitted Average GPA: ${schoolData.avgGpa || '3.7+'}`,
        `US News Rank: #${schoolData.usNewsRank || 'N/A'}`,
        "Even with a 4.0 GPA, you will face automatic rejection if you miss just one prerequisite course."
      ],
      2, 4, schoolName
    );
    fs.writeFileSync(path.join(outputDir, `Day${day}_Slide2.svg`), s2, 'utf8');

    // Slide 3
    const s3 = generateSvgCard(
      "2. Check Eligibility Instantly",
      "",
      [
        "Stop navigating confusing course catalogs by yourself.",
        "Use TransferCheck Strategy Engine to input your course records and audit requirement coverage automatically in seconds."
      ],
      3, 4, schoolName
    );
    fs.writeFileSync(path.join(outputDir, `Day${day}_Slide3.svg`), s3, 'utf8');

    // Slide 4
    const s4 = generateSvgCard(
      "3. Protect Your Future",
      "",
      [
        "Missing requirements means pushing back your transfer timeline by a whole year.",
        "Prevent wasting tens of thousands of dollars. Run a free diagnostic today!"
      ],
      4, 4, schoolName
    );
    fs.writeFileSync(path.join(outputDir, `Day${day}_Slide4.svg`), s4, 'utf8');

    // 2. Generate Caption
    captionFileContent += `## 📅 [Day ${day}] ${schoolName} Transfer - ${theme}\n\n`;
    captionFileContent += `### 📝 Instagram Caption Copy\n\n`;
    captionFileContent += `🚨 Rejected from ${schoolName} with a 4.0 GPA? Here's the brutal truth...\n\n`;
    captionFileContent += `When preparing to transfer to top-tier universities, is a high GPA enough? ❌ Absolutely not.\n`;
    captionFileContent += `The single biggest mistake students make is **[ ${theme} ]**.\n\n`;
    
    captionFileContent += `💡 Quick Stats Summary:\n`;
    captionFileContent += `• 🏫 **Target School**: ${schoolName}\n`;
    captionFileContent += `• 📈 **Avg Admitted GPA**: ${schoolData.avgGpa || '3.7+'}\n`;
    captionFileContent += `• 🏆 **US News Rank**: #${schoolData.usNewsRank || 'N/A'}\n`;
    captionFileContent += `• ⚠️ **Advising Note**: If you miss just one required prerequisite, admissions officers won't even look at your essay. Auto-reject is real.\n\n`;
    
    captionFileContent += `Missing a prerequisite chain pushes back your transfer timeline by a whole year, costing you thousands in extra tuition & living expenses. 💸\n\n`;
    
    captionFileContent += `Prevent this nightmare. Use **TransferCheck**—the ultimately engineered diagnostic engine designed by top-tier ex-admissions consultants.\n`;
    captionFileContent += `Audit your requirements in 3 seconds for free. 🎯\n\n`;
    
    captionFileContent += `👉 **How to check:**\n`;
    captionFileContent += `Click our bio link (@TransferCheck_official) and launch the Strategy Engine now!\n\n`;
    
    captionFileContent += `* * *\n\n`;
    captionFileContent += `### 🏷️ Optimized Global Hashtags\n`;
    captionFileContent += `#collegetransfer #transferstudent #${schoolName.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '')} #UCLAtransfer #UCBerkeley #communitycollege #studyinusa #transferprerequisites #collegeadmissions #studyabroad #TransferCheck\n\n`;
    captionFileContent += `--- \n\n`;
  }

  fs.writeFileSync(path.join(__dirname, 'instagram_captions_30days_en.md'), captionFileContent, 'utf8');
  console.log("Successfully generated all English SVG card news and Instagram captions!");
}

main();
