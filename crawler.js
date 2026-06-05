/**
 * TransferChek - Automated College Crawler & Data Builder
 * ---------------------------------------------------------
 * 이 스크립트는 등록된 대학 공식 URL에 접속하여 정보를 긁어오고
 * Gemini API를 사용해 데이터를 자동으로 갱신 및 데이터베이스에 기입합니다.
 * 
 * 실행 방법:
 * node crawler.js <전공ID 또는 대학명>
 * 예 1: node crawler.js all               (모든 대학 전공 대상 - 시간 소요)
 * 예 2: node crawler.js "University of Washington"   (워싱턴 대학만 순회)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const vm = require('vm');

const { extractRequirements } = require('./extractor-template.js');

const root = __dirname;
const transferDataPath = path.join(root, 'transfer-data.js');

// Helper to delay between requests (Gemini rate-limit & target server protection)
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Strip HTML tags and simplify text using regex to reduce tokens
function cleanHtml(html) {
  return html
    .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '')
    .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Fetch web content via http/https client safely (with 3xx redirect follow)
function fetchUrlContent(url, depth = 0) {
  return new Promise((resolve, reject) => {
    if (depth > 5) {
      reject(new Error('Too many redirects (max 5)'));
      return;
    }

    const client = url.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      timeout: 10000
    };

    client.get(url, options, (res) => {
      // Follow redirect
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const urlObj = new URL(url);
          redirectUrl = `${urlObj.protocol}//${urlObj.host}${redirectUrl}`;
        }
        resolve(fetchUrlContent(redirectUrl, depth + 1));
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`HTTP Status Code: ${res.statusCode}`));
        return;
      }

      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', (err) => reject(err));
  });
}

// Parse source URL from program fields
function parseSourceUrl(major) {
  const fields = [
    major.note || "",
    (major.english && major.english.raw) || "",
    major.rawRequired || ""
  ];

  for (const text of fields) {
    // 1. Matches with http or https protocol
    let match = text.match(/https?:\/\/[^\s]+(\.html|\.php|\/|[a-z0-9])/i);
    if (match) return match[0].replace(/[\]\),]/g, '');

    // 2. Matches domain-like structures without protocol (e.g. admit.washington.edu/...)
    match = text.match(/\b([a-z0-9]+(-[a-z0-9]+)*\.)+(edu|org|com|net)(\/[^\s]*)?/i);
    if (match) {
      const candidate = match[0].replace(/[\]\),]/g, '');
      if (candidate.includes('.') && !candidate.toLowerCase().includes('toefl') && !candidate.toLowerCase().includes('ielts')) {
        return `https://${candidate}`;
      }
    }
  }
  return null;
}

// Main execution function
async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('💡 사용 방법:');
    console.log('   node crawler.js all                   -> 등록된 모든 대학/전공 크롤링');
    console.log('   node crawler.js "University Name"     -> 특정 대학 이름만 매칭하여 크롤링');
    console.log('   node crawler.js "major-id"            -> 특정 전공 고유 ID 1개 크롤링\n');
    process.exit(0);
  }

  const filterTarget = args[0];

  // 1. Read transfer-data.js inside sandbox
  console.log('📂 Reading database transfer-data.js...');
  const fileContent = fs.readFileSync(transferDataPath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fileContent, sandbox);
  const database = sandbox.window.transferDatabase;

  if (!database || !database.schools) {
    console.error('❌ Failed to load transferDatabase');
    process.exit(1);
  }

  // 2. Collect target majors matching the argument filter
  const targets = [];
  database.schools.forEach(school => {
    school.majors.forEach(major => {
      const parentSchoolName = school.name;
      const majorId = major.id;
      
      const isAll = filterTarget.toLowerCase() === 'all';
      const matchesSchool = parentSchoolName.toLowerCase().includes(filterTarget.toLowerCase());
      const matchesMajorId = majorId === filterTarget;

      if (isAll || matchesSchool || matchesMajorId) {
        targets.push({ major, school, parentSchoolName });
      }
    });
  });

  if (targets.length === 0) {
    console.log(`❌ 필터 조건 [${filterTarget}] 에 부합하는 대상을 데이터베이스에서 찾을 수 없습니다.`);
    process.exit(0);
  }

  console.log(`🚀 Found ${targets.length} target major(s) for crawling.`);

  // 3. Process targets sequentially
  for (let i = 0; i < targets.length; i++) {
    const { major, school, parentSchoolName } = targets[i];
    console.log(`\n--------------------------------------------------`);
    console.log(`🔄 [${i + 1}/${targets.length}] Processing: ${parentSchoolName} - ${major.name}`);
    
    const url = parseSourceUrl(major);
    if (!url) {
      console.log(`⚠️  No valid URL found in note: "${major.note || 'None'}". Skipping.`);
      continue;
    }

    console.log(`📡 Fetching URL: ${url}`);
    
    try {
      // Crawl html text
      const html = await fetchUrlContent(url);
      const cleanedText = cleanHtml(html);
      
      // Keep prompt short (max 12000 chars of text to avoid huge token bills)
      const textSample = cleanedText.slice(0, 12000);
      
      console.log(`🧠 Text Extracted (${textSample.length} chars). Sending to Gemini AI...`);
      
      // Call Gemini API
      const geminiResult = await extractRequirements(textSample);
      
      // 4. Update local DB Object with extracted fields
      major.minGpa = geminiResult.minGpa;
      major.rawMinGpa = geminiResult.rawMinGpa;
      major.minCredits = geminiResult.minCredits;
      major.rawMinCredits = geminiResult.rawMinCredits;
      major.requiredCourses = geminiResult.requiredCourses;
      major.recommendedCourses = geminiResult.recommendedCourses;
      
      // Update English structure
      const eng = geminiResult.englishRequirements || {};
      major.english = {
        raw: eng.raw || "",
        TOEFL: eng.TOEFL !== undefined ? eng.TOEFL : null,
        TOEFL_2026: eng.TOEFL_2026 !== undefined ? eng.TOEFL_2026 : null,
        IELTS: eng.IELTS !== undefined ? eng.IELTS : null,
        Duolingo: eng.Duolingo !== undefined ? eng.Duolingo : null
      };

      // Construct a new note and force 'needs_source_check' state to prompt human verify
      major.note = `✅ Auto-Scraped via Gemini Crawler on ${new Date().toISOString().split('T')[0]}\nSource: ${url}\n\n[추출 세부 데이터]\n• Course Grade Min: ${geminiResult.gradeMinimumsPerCourse || 'None'}\n• Completion Timeline: ${geminiResult.prerequisiteCompletionTimeline || 'None'}\n• AP/IB Rule: ${geminiResult.apIbEquivalency || 'None'}\n• Selective Major: ${geminiResult.selectiveMajorStatus ? 'Yes' : 'No'}\n\n${major.note || ""}`;
      major.confidence = 'needs_source_check';

      console.log(`✓ Data updated for ${major.name}. Marked as "Needs Review" for human check.`);

      // 5. Instantly serialize database back to transfer-data.js on disk
      const updatedJs = `window.transferDatabase = ${JSON.stringify(database, null, 2)};\n`;
      fs.writeFileSync(transferDataPath, updatedJs, 'utf8');
      console.log(`💾 Saved database state to transfer-data.js.`);

    } catch (err) {
      console.error(`❌ Failed processing ${major.name}:`, err.message);
    }

    // Delay 3 seconds to stay safe from IP blocking & rate-limit limits
    if (i < targets.length - 1) {
      console.log('⏳ Sleeping for 3 seconds before next crawler request...');
      await sleep(3000);
    }
  }

  console.log(`\n==================================================`);
  console.log('🏁 Crawler Batch Run Completed!');
}

if (require.main === module) {
  main();
}
