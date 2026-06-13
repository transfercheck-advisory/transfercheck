/**
 * TransferChek - Automated Gemini Micro-Extractor Template
 * -----------------------------------------------------------
 * 이 스크립트는 단일 전공의 공식 요약/텍스트를 입력받아
 * 13가지 핵심 전공 요건 필드를 추출하는 템플릿입니다.
 * 
 * 실행 전 준비사항:
 * 1. npm install @google/generative-ai dotenv
 * 2. .env 파일 생성 후 GEMINI_API_KEY=your_api_key 등록
 */

const fs = require('fs');
const path = require('path');

// Simple .env parser to avoid external dotenv dependency
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    fs.readFileSync(envPath, 'utf8').split(/\r?\n/).forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const val = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
        process.env[key] = val;
      }
    });
  }
} catch (e) {}

// No external dependencies needed. We call Gemini REST API via native HTTPS.

// 13가지 핵심 추출 스키마 정의 (정밀 필드)
const ExtractionSchema = {
  description: "미국 대학 전공 편입 요건 데이터 스키마",
  type: "object",
  properties: {
    schoolName: { type: "string", description: "대학 공식 이름 (예: University of Michigan)" },
    majorName: { type: "string", description: "학과/전공 공식 이름 (예: Computer Science)" },
    minGpa: { type: "number", description: "공식 최소 요구 GPA (숫자만, 예: 3.0, 없으면 null)" },
    rawMinGpa: { type: "string", description: "GPA 요건 설명 원문 (예: '3.0 minimum, 3.5 recommended')" },
    minCredits: { type: "number", description: "최소 지원 학점 (숫자만, 예: 60, 없으면 null)" },
    rawMinCredits: { type: "string", description: "지원 학점 요건 설명 원문 (예: '60 semester credits')" },
    requiredCourses: { 
      type: "array", 
      items: { type: "string" },
      description: "지원 전 필수 이수 과목 목록 (과목 이름 + 로컬 코드, 실험과목이 있을 경우 'Physics 1 Lab'처럼 개별 아이템으로 분리 필수)"
    },
    recommendedCourses: {
      type: "array",
      items: { type: "string" },
      description: "필수는 아니나 수강이 강력히 권장되는 추천 과목 목록"
    },
    englishRequirements: {
      type: "object",
      properties: {
        TOEFL: { type: "number", description: "TOEFL iBT 최소 점수 (없으면 null)" },
        TOEFL_2026: { type: "number", description: "2026년 개정 TOEFL 최소 점수 (없으면 null)" },
        IELTS: { type: "number", description: "IELTS 최소 점수 (없으면 null)" },
        Duolingo: { type: "number", description: "Duolingo 최소 점수 (없으면 null)" },
        raw: { type: "string", description: "영어 성적 요건 원문 설명" }
      },
      required: ["raw"]
    },
    englishCourseWaiver: {
      type: "boolean",
      description: "특정 대학 레벨의 English Composition 1 & 2 과목을 C 이상으로 이수할 시 영어 성적(TOEFL 등)이 면제되는지 여부 (예/아니오)"
    },
    gradeMinimumsPerCourse: {
      type: "string",
      description: "개별 이수 과목별 최소 요구 성적 기준 (예: 'C or better in all prerequisite courses')"
    },
    prerequisiteCompletionTimeline: {
      type: "string",
      description: "필수 과목 이수 완료 기한 조건 (예: 'Must complete by the end of Spring term prior to Fall enrollment')"
    },
    apIbEquivalency: {
      type: "string",
      description: "AP / IB 크레딧 대체 허용 규정 요약 (예: 'AP Calculus BC score of 4 or 5 satisfies Calc 1 & 2')"
    },
    selectiveMajorStatus: {
      type: "boolean",
      description: "해당 학과가 정원 제한이 있어 추가 서류나 에세이, 더 높은 컷오프를 요구하는 전공(Selective/Impacted)인지 여부"
    },
    officialSourceUrl: {
      type: "string",
      description: "정보를 추출한 공식 입학처/학과 요강 URL"
    }
  },
  required: [
    "schoolName", "majorName", "rawMinGpa", "rawMinCredits", 
    "requiredCourses", "recommendedCourses", "englishRequirements", 
    "englishCourseWaiver", "officialSourceUrl"
  ]
};

const SYSTEM_INSTRUCTION = `
당신은 미국 대학 편입 요건 데이터를 분석하는 전문 데이터 엔지니어입니다.
주어진 대학교 전공 요강 텍스트를 정밀 분석하여, 지정된 JSON 스키마 규격에 완벽히 부합하는 정제된 구조화 데이터를 만드십시오.

[주의 사항]
1. 과목 분리 법칙: 'General Physics 1 with Lab' 처럼 강의와 실험이 결합된 원문은 'General Physics 1'과 'General Physics 1 Lab'처럼 물리적으로 2개의 배열 요소로 분리하십시오.
2. 성적 날짜 주의: 연도 숫자(예: 2026)를 토플 점수나 GPA로 잘못 기입하지 마십시오.
3. 영어 면제 요건: 복잡한 면제 조항(출신 국가 등)은 배제하고, 오직 'English Composition 과목 이수를 통한 영어 시험 면제(Waiver) 가능 여부'만 판정하여 boolean(true/false)을 입력하십시오.
`;

const https = require('https');

async function extractRequirements(rawTextSource) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('❌ GEMINI_API_KEY가 .env 파일에 설정되어 있지 않습니다.');
  }

  return new Promise((resolve, reject) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
    const payload = JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `아래 대학 전공 요약 정보를 분석하여 JSON 데이터로 변경하십시오:\n\n${rawTextSource}`
            }
          ]
        }
      ],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: ExtractionSchema,
      },
      systemInstruction: {
        parts: [
          {
            text: SYSTEM_INSTRUCTION
          }
        ]
      }
    });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 15000
    };

    console.log('🤖 Sending text snippet to Gemini HTTP API for micro-extraction...');

    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`Gemini API HTTP Error ${res.statusCode}: ${data}`));
          return;
        }
        try {
          const parsed = JSON.parse(data);
          if (!parsed.candidates || parsed.candidates.length === 0) {
            reject(new Error(`No candidates returned: ${data}`));
            return;
          }
          const responseText = parsed.candidates[0].content.parts[0].text;
          resolve(JSON.parse(responseText));
        } catch (e) {
          reject(new Error(`Failed to parse Gemini response: ${e.message}\nRaw: ${data}`));
        }
      });
    });

    req.on('error', err => reject(err));
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Gemini API request timeout (15s)'));
    });
    req.write(payload);
    req.end();
  });
}

// 테스트 구동 예제
async function runTestDemo() {
  if (!process.env.GEMINI_API_KEY) {
    console.log('ℹ️  API 키(.env)가 설정되지 않아 가상 모의 시뮬레이션을 출력합니다.');
    const mockOutput = {
      schoolName: "University of Washington",
      majorName: "Computer Engineering (Allen School)",
      minGpa: 2.5,
      rawMinGpa: "Min 2.0 per course / 2.5 avg overall",
      minCredits: null,
      rawMinCredits: "Not published",
      requiredCourses: [
        "English Composition",
        "Calculus 1 (MATH 124)",
        "Calculus 2 (MATH 125)",
        "Calculus 3 (MATH 126)",
        "Physics 1: Mechanics (PHYS 121)",
        "Programming 2 (CSE 122 or CSE 142)"
      ],
      recommendedCourses: [],
      englishRequirements: {
        TOEFL: 76,
        TOEFL_2026: 4.0,
        IELTS: 6.0,
        Duolingo: 110,
        raw: "TOEFL iBT 76 / IELTS 6.0 / Duolingo 110"
      },
      englishCourseWaiver: true,
      gradeMinimumsPerCourse: "C or better (2.0) in each prerequisite course",
      prerequisiteCompletionTimeline: "Must complete prior to enrollment",
      apIbEquivalency: "AP Calc BC score of 5 replaces MATH 124/125",
      selectiveMajorStatus: true,
      officialSourceUrl: "https://admit.washington.edu/apply/transfer"
    };
    console.log('💾 Gemini Mock Structured Output (13 Fields):');
    console.log(JSON.stringify(mockOutput, null, 2));
    return;
  }

  try {
    const sampleInput = `
      University of Washington - Computer Engineering (Allen School)
      Transfer Requirements Overview:
      Applicants must have an overall college GPA of at least 2.5, and a minimum grade of 2.0 (C) is required for each individual prerequisite course.
      Required Prerequisite Coursework:
      - English Composition (minimum 5 credits) -> Completion of this with grade B (3.0) or higher waives the TOEFL exam.
      - MATH 124, 125, and 126 (Calculus series)
      - PHYS 121 (Mechanics)
      - CSE 122 or 142 (Programming 2)
      All prerequisites must be finished prior to matriculating in Autumn.
      International applicants require a TOEFL score of at least 76 (4.0 on the Jan 2026 scale), IELTS 6.0, or Duolingo 110.
      Source: https://admit.washington.edu/apply/transfer
    `;
    const data = await extractRequirements(sampleInput);
    console.log('✅ Extraction Success!');
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('❌ Extraction Error:', err.message);
  }
}

if (require.main === module) {
  runTestDemo();
}

module.exports = {
  extractRequirements,
  ExtractionSchema
};
