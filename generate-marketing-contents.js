const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    lines.forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const key = parts[0].strip ? parts[0].strip() : parts[0].trim();
        const val = parts.slice(1).join('=').trim();
        process.env[key] = val;
      }
    });
  }
}

function parseTransferStats() {
  const statsPath = path.join(__dirname, 'transfer-stats.js');
  if (!fs.existsSync(statsPath)) {
    return {};
  }
  try {
    const statsFileContent = fs.readFileSync(statsPath, 'utf8');
    const statsSandbox = { window: {} };
    vm.createContext(statsSandbox);
    vm.runInContext(statsFileContent, statsSandbox);
    return statsSandbox.window.transferStats || {};
  } catch (e) {
    console.error("Failed to parse transfer-stats.js:", e);
    return {};
  }
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

function generateFallbackContents(transferStats) {
  const schoolIds = Object.keys(transferStats);
  const selectedIds = schoolIds.length > 0 ? schoolIds : ["georgia-tech-776cb90e", "ucla", "uc-berkeley-362f972e", "university-of-washington-2fde0bf4"];
  
  let output = "# 🎓 TransferCheck 30일 완성 바이럴 마케팅 원고 마스터북\n\n";
  output += "이 원고북은 OpenAI API 키가 지정되지 않아, 로컬 데이터베이스에 기반해 자동으로 생성된 고유 마케팅 스케줄입니다. 매일 다음 원고를 소셜 미디어 플랫폼에 게시하십시오.\n\n";
  output += "---\n\n";

  const themes = [
    "선수과목 누락으로 인한 1년 편입 지연 예방 전략",
    "유학원 없이 0원으로 UCLA/UC Berkeley 합격 로드맵 짜기",
    "명문 공대 편입 필수 수학 및 과학 GPA 관리법",
    "AP 과목 대학 학점 인정 커트라인 및 전략적 재수강 가이드",
    "입학사정관의 눈을 사로잡는 편입 에세이 작성 핵심 공식 3가지",
    "편입 시 최대 학점 인정 제한(Credit Cap) 대처법"
  ];

  for (let day = 1; day <= 30; day++) {
    const schoolId = selectedIds[(day - 1) % selectedIds.length];
    const schoolName = formatSchoolName(schoolId);
    const schoolData = transferStats[schoolId] || { avgGpa: "3.7+", usNewsRank: "N/A", advisingNote: "전공 필수 Prerequisite 사전 이수 필요." };
    const theme = themes[(day - 1) % themes.length];
    
    output += `## 📅 [Day ${day}] ${schoolName} 편입 공략 - ${theme}\n\n`;
    output += `* **오늘의 타겟 대학**: ${schoolName} (US News 순위: #${schoolData.usNewsRank || 'N/A'})\n`;
    output += `* **합격자 평균 GPA**: ${schoolData.avgGpa || 'N/A'}\n`;
    output += `* **주요 안내사항**: ${schoolData.advisingNote || '선수과목 확인 요망.'}\n\n`;
    
    // 1. Twitter
    output += "### 🐦 Twitter (X) 바이럴 스레드 원고\n\n";
    output += `1/ "[${schoolName} 편입을 위한 ${day}일차 꿀팁] ${theme}에 대해 알고 계신가요? GPA가 아무리 높아도 이것 하나 놓치면 즉시 탈락(Auto-Reject)될 수 있습니다. 조목조목 타래로 정리해 드립니다 👇"\n\n`;
    output += `2/ "${schoolName}의 평균 합격 GPA는 ${schoolData.avgGpa || '3.7+'} 수준으로 매우 높습니다. 하지만 더 중요한 것은 필수 과목 매핑입니다. 전공 요건을 정확히 충족했는지 체크해야 합니다."\n\n`;
    output += `3/ "많은 학생들이 복잡한 요강을 읽다 실수를 합니다. 실수가 생기면 복구에만 수천만 원의 예산과 1년의 시간이 낭비됩니다."\n\n`;
    output += `4/ "이를 3초 만에 자가 진단해 주는 툴이 바로 **TransferCheck**입니다. 내 학점과 매핑 상태를 직접 확인해 보세요!\n`;
    output += `👉 https://transfercheck.vercel.app/schools/${schoolId}"\n\n`;
    
    // 2. Instagram
    output += "### 📸 Instagram 카드뉴스 가이드\n\n";
    output += `* **슬라이드 1 (표지)**: "${schoolName} 편입 합격생들이 숨겨온 ${theme} 비밀 🤫"\n`;
    output += `* **슬라이드 2 (현실)**: "${schoolName} 평균 GPA ${schoolData.avgGpa || '3.7+'} 이상이어도 선수과목 비면 얄짤없이 탈락!"\n`;
    output += `* **슬라이드 3 (해결책)**: "학교 요강 뒤지지 말고, TransferCheck에서 내 이수 과목과 바로 매칭해 보세요."\n`;
    output += `* **슬라이드 4 (CTA)**: "지금 프로필 링크를 클릭하고 ${schoolName} 자가 진단을 시작하세요!"\n\n`;
    
    // 3. YouTube Shorts
    output += "### 🎥 YouTube Shorts 60초 나레이션 대본\n\n";
    output += `* **[0-5초] 후크**: "학점 4.0도 광탈시키는 ${schoolName} 편입의 무서운 비밀!"\n`;
    output += `* **[5-30초] 본론**: "${schoolName} 편입을 준비할 때 가장 많이 하는 실수가 바로 ${theme}입니다. 선수과목을 제대로 배치하지 않으면 아예 원서 검토도 안 합니다. 학비 수천만 원을 날리는 지름길이죠."\n`;
    output += `* **[30-60초] 결론 & CTA**: "이런 리스크를 막으려면 스마트한 편입 전략 엔진 **TransferCheck**로 지금 바로 내 과목들을 자가 진단해 보세요. 고정 댓글 확인!"\n\n`;
    output += "---\n\n";
  }
  return output;
}

async function main() {
  console.log("Starting 30-Day Marketing Content Generator (Node.js version)...");
  loadEnv();
  const apiKey = process.env.OPENAI_API_KEY;
  const transferStats = parseTransferStats();
  const schoolIds = Object.keys(transferStats);
  console.log(`Loaded ${schoolIds.length} schools from transfer-stats.js`);
  
  let outputContent = "";
  
  if (!apiKey) {
    console.log("OPENAI_API_KEY not found. Generating high-quality database fallback contents...");
    outputContent = generateFallbackContents(transferStats);
  } else {
    console.log("OPENAI_API_KEY found! Generating via OpenAI API direct fetch...");
    try {
      outputContent = "# 🎓 TransferCheck 30일 완성 바이럴 마케팅 원고 마스터북 (AI Generated)\n\n";
      outputContent += "이 원고북은 OpenAI GPT API를 사용해 실제 조지아텍, UCLA 등 63개 대학의 편입 요건 데이터를 기반으로 맞춤 생성되었습니다.\n\n";
      outputContent += "---\n\n";
      
      const schoolItems = Object.entries(transferStats);
      
      for (let chunk = 0; chunk < 3; chunk++) {
        const startDay = chunk * 10 + 1;
        const endDay = (chunk + 1) * 10;
        console.log(`Generating Days ${startDay} to ${endDay}...`);
        
        const chunkSchools = schoolItems.slice((startDay - 1) % schoolItems.length, ((endDay - 1) % schoolItems.length) + 1);
        let contextStr = "";
        chunkSchools.forEach(([sid, sdata]) => {
          contextStr += `SchoolID: ${sid}, Name: ${formatSchoolName(sid)}, Rank: #${sdata.usNewsRank || 'N/A'}, GPA: ${sdata.avgGpa || 'N/A'}, Advising: ${sdata.advisingNote || ''}\n`;
        });
        
        const prompt = `You are a top-tier viral marketer. Generate daily social media marketing copy for a college transfer advisory engine called 'TransferCheck' (website: https://transfercheck.vercel.app/).
Generate for Days ${startDay} to ${endDay} (10 days total) in Korean.

Each day must contain:
1. Day Title & Target School Details (using the data provided)
2. Twitter (X) viral thread (4-5 sub-tweets) with links like https://transfercheck.vercel.app/schools/[SchoolID]
3. Instagram card news slide-by-slide guide (4 slides)
4. YouTube Shorts narration script (60 seconds) with visual cues.

Use this school data:
${contextStr}

Ensure the tone is highly professional, urgent, and addresses transfer students' fears of missing prerequisites and wasting tuition.
Output in clean markdown format. Do not use generic placeholders.`;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
          })
        });
        
        if (response.ok) {
          const data = await response.json();
          outputContent += data.choices[0].message.content + "\n\n---\n\n";
        } else {
          const errText = await response.text();
          throw new Error(`OpenAI API returned error status ${response.status}: ${errText}`);
        }
      }
    } catch (e) {
      console.warn("Failed to generate via OpenAI GPT API, falling back to local fallback generator:", e);
      outputContent = generateFallbackContents(transferStats);
    }
  }
  
  const outputFilename = path.join(__dirname, 'marketing_output_30days.md');
  fs.writeFileSync(outputFilename, outputContent, 'utf8');
  console.log(`Successfully generated 30 days of marketing material in '${outputFilename}'!`);
}

main();
