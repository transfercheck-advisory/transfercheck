/**
 * TransferChek - Autonomous Developer Engine (자율 개선 엔진)
 * -----------------------------------------------------------
 * 이 엔진은 백그라운드에서 주기적으로 작동하며 다음과 같은 업무를 수행합니다:
 * 1. server.err.log 모니터링 → 에러 감지 시 Gemini API로 자율 복구(Self-Healing) 코드 패치 적용
 * 2. feedback-logs.json 파싱 → 사용자 데이터 불만/오류 지적 접수 시 데이터베이스 자동 갱신
 * 3. 크롤러 연동 → crawler.js 및 auto-reviewer.js 주기적 실행으로 최신 대학 요강 정보 자동 동기화
 * 4. 시뮬레이션 및 무결성 테스트 실행 → 구문 검증 통과 시에만 커밋
 * 5. Git & Vercel 자동 배포 실행
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const root = __dirname;
const errLogPath = path.join(root, 'server.err.log');
const feedbackLogPath = path.join(root, 'feedback-logs.json');
const runLogPath = path.join(root, 'autonomous-run.log');

// Simple .env parser to load API keys
try {
  const envPath = path.join(root, '.env');
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

const apiKey = process.env.GEMINI_API_KEY;

function logActivity(message) {
  const time = new Date().toISOString();
  const formatted = `[${time}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(runLogPath, formatted, 'utf8');
}

// Helper: Make HTTP request to Gemini API
function callGemini(systemInstruction, userPrompt, responseSchema = null) {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set. Cannot run autonomous API calls.");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  
  const payloadData = {
    contents: [
      {
        parts: [{ text: userPrompt }]
      }
    ],
    systemInstruction: {
      parts: [{ text: systemInstruction }]
    }
  };

  if (responseSchema) {
    payloadData.generationConfig = {
      responseMimeType: "application/json",
      responseSchema: responseSchema
    };
  }

  const payload = JSON.stringify(payloadData);

  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 30000
    };

    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`Gemini API error (Status ${res.statusCode}): ${data}`));
          return;
        }
        try {
          const parsed = JSON.parse(data);
          const text = parsed.candidates[0].content.parts[0].text;
          resolve(text);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error("Gemini API call timed out."));
    });
    req.write(payload);
    req.end();
  });
}

// Execute tests to verify codebase integrity
function verifyIntegrity() {
  logActivity("🧪 Running integrity checks...");
  try {
    // Check syntax of core files
    execSync('node --check app.js', { cwd: root });
    execSync('node --check server.js', { cwd: root });
    execSync('node --check transfer-data.js', { cwd: root });
    execSync('node --check course-catalog.js', { cwd: root });
    logActivity("✅ Basic syntax checks passed.");
    
    // Check if python is runnable on the system
    let pyCmd = null;
    try {
      execSync('python --version', { stdio: 'ignore' });
      pyCmd = 'python';
    } catch (e) {
      try {
        execSync('py --version', { stdio: 'ignore' });
        pyCmd = 'py';
      } catch (e2) {}
    }

    // Check if python test script is present and runs
    if (pyCmd && fs.existsSync(path.join(root, 'test_run.py'))) {
      logActivity(`🧪 Running Python backend engine verification tests using ${pyCmd}...`);
      execSync(`${pyCmd} test_run.py`, { cwd: root });
      logActivity("✅ Python verification tests passed.");
    } else if (fs.existsSync(path.join(root, 'test_run.py'))) {
      logActivity("ℹ️ Python is not installed or configured on path. Skipping python tests but proceeding with Node.js checks.");
    }
    return true;
  } catch (err) {
    logActivity(`❌ Integrity check failed: ${err.message}`);
    return false;
  }
}

// Backup a file before modification
function backupFile(filePath) {
  const backup = `${filePath}.bak`;
  fs.copyFileSync(filePath, backup);
  return backup;
}

// Revert a file from backup
function revertFile(filePath) {
  const backup = `${filePath}.bak`;
  if (fs.existsSync(backup)) {
    fs.copyFileSync(backup, filePath);
    fs.unlinkSync(backup);
    logActivity(`🔄 Reverted changes for ${path.basename(filePath)}.`);
  }
}

// Clean up backups
function cleanBackup(filePath) {
  const backup = `${filePath}.bak`;
  if (fs.existsSync(backup)) {
    fs.unlinkSync(backup);
  }
}

// -----------------------------------------------------------------------------
// MODULE 1: Self-Healing Server Logs
// -----------------------------------------------------------------------------
async function processServerErrors() {
  if (!fs.existsSync(errLogPath) || fs.statSync(errLogPath).size === 0) {
    logActivity("🟢 No server errors detected.");
    return;
  }

  logActivity("⚠️ Server error log detected. Analyzing errors...");
  const errors = fs.readFileSync(errLogPath, 'utf8');
  
  // Truncate error content if too large
  const errorSnippet = errors.length > 5000 ? errors.substring(errors.length - 5000) : errors;

  const systemInstruction = `
    You are an expert autonomous developer. Analyze the provided Node.js error trace.
    Your task is to identify which files are causing the crash or error, find the bug, and write the EXACT replacement content for the buggy sections.
    Return a JSON object conforming to the schema. 
    Only modify app.js, server.js, course-catalog.js, or scheduler.py.
  `;

  const schema = {
    type: "object",
    properties: {
      targetFile: { type: "string", description: "The filename that needs to be modified (e.g., server.js)" },
      bugDescription: { type: "string", description: "Brief description of the bug" },
      targetCodeBlock: { type: "string", description: "The exact line(s) of code in the existing file to be replaced. Must match the target file content precisely." },
      replacementCodeBlock: { type: "string", description: "The replacement code block." }
    },
    required: ["targetFile", "bugDescription", "targetCodeBlock", "replacementCodeBlock"]
  };

  try {
    const responseText = await callGemini(systemInstruction, `Error logs:\n${errorSnippet}`, schema);
    const plan = JSON.parse(responseText);
    
    logActivity(`🤖 AI proposed fix for ${plan.targetFile}: ${plan.bugDescription}`);
    const filePath = path.join(root, plan.targetFile);
    if (!fs.existsSync(filePath)) {
      logActivity(`❌ Target file ${plan.targetFile} does not exist in root.`);
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes(plan.targetCodeBlock)) {
      logActivity("❌ AI proposed target code block not found in source file. Aborting auto-healing.");
      return;
    }

    // Apply patch
    backupFile(filePath);
    const updatedContent = content.replace(plan.targetCodeBlock, plan.replacementCodeBlock);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    logActivity(`🩹 Patch applied to ${plan.targetFile}. Running verification...`);

    if (verifyIntegrity()) {
      cleanBackup(filePath);
      logActivity(`🎉 Auto-healing succeeded! Erasing resolved error log...`);
      fs.writeFileSync(errLogPath, '', 'utf8'); // Clear logs
    } else {
      revertFile(filePath);
      logActivity(`❌ Auto-healing patch broke tests. Reverted.`);
    }
  } catch (err) {
    logActivity(`❌ Failed to process server errors: ${err.message}`);
  }
}

// -----------------------------------------------------------------------------
// MODULE 2: Feedback-Driven Data Corrections
// -----------------------------------------------------------------------------
async function processUserFeedback() {
  if (!fs.existsSync(feedbackLogPath)) {
    logActivity("🟢 No feedback log file found.");
    return;
  }

  let logs = [];
  try {
    logs = JSON.parse(fs.readFileSync(feedbackLogPath, 'utf8') || '[]');
  } catch (pe) {
    logActivity("❌ Feedback logs are corrupted.");
    return;
  }

  const pending = logs.filter(l => l.status === 'pending_auto_resolve');
  if (pending.length === 0) {
    logActivity("🟢 No pending feedback items.");
    return;
  }

  logActivity(`✉️ Found ${pending.length} pending feedback item(s). Processing...`);

  // Load current transfer-data.js content
  const transferDataFile = path.join(root, 'transfer-data.js');
  if (!fs.existsSync(transferDataFile)) {
    logActivity("❌ transfer-data.js not found.");
    return;
  }

  const databaseContent = fs.readFileSync(transferDataFile, 'utf8');

  const systemInstruction = `
    You are an admissions data quality engineer.
    Analyze the user feedback regarding college transfer requirements.
    Your task is to identify if the feedback points out a database error (e.g., incorrect GPA, credits, or missing courses in transfer-data.js).
    If it is a valid correction, find the matching JSON section inside the transfer-data.js file, and return the exact block of text to replace.
    Return a JSON object conforming to the schema.
    If the feedback is generic praise, feature requests, or irrelevant, return actionNeeded=false.
  `;

  const schema = {
    type: "object",
    properties: {
      actionNeeded: { type: "boolean", description: "True if database correction is needed" },
      explanation: { type: "string", description: "Reasoning for the change" },
      targetTextToReplace: { type: "string", description: "The exact text block to replace in transfer-data.js" },
      replacementText: { type: "string", description: "The corrected text block" }
    },
    required: ["actionNeeded", "explanation"]
  };

  for (const item of pending) {
    logActivity(`💬 Processing feedback: "${item.message}"`);
    try {
      const responseText = await callGemini(systemInstruction, `Feedback: "${item.message}"\nDatabase context:\n${databaseContent.substring(0, 15000)}...`, schema);
      const plan = JSON.parse(responseText);

      if (plan.actionNeeded && plan.targetTextToReplace && plan.replacementText) {
        logActivity(`💡 AI proposed correction: ${plan.explanation}`);
        if (!databaseContent.includes(plan.targetTextToReplace)) {
          logActivity("❌ Target database text not matched exactly. Skipping.");
          item.status = "auto_resolve_failed_pattern_unmatched";
          continue;
        }

        backupFile(transferDataFile);
        const updatedDatabase = databaseContent.replace(plan.targetTextToReplace, plan.replacementText);
        fs.writeFileSync(transferDataFile, updatedDatabase, 'utf8');
        logActivity("🩹 Database patch applied. Verifying database...");

        if (verifyIntegrity()) {
          cleanBackup(transferDataFile);
          logActivity("✅ Database updated successfully.");
          item.status = "auto_resolved";
        } else {
          revertFile(transferDataFile);
          logActivity("❌ Database patch failed syntax check. Reverted.");
          item.status = "auto_resolve_failed_syntax_check";
        }
      } else {
        logActivity("ℹ️ Feedback processed: No database action needed.");
        item.status = "no_action_needed";
      }
    } catch (err) {
      logActivity(`❌ Error processing this feedback item: ${err.message}`);
      item.status = "error_processing";
    }
  }

  // Save updated logs
  fs.writeFileSync(feedbackLogPath, JSON.stringify(logs, null, 2), 'utf8');
}

// -----------------------------------------------------------------------------
// MODULE 3: Periodic Data Scraper & Lint Ingestion
// -----------------------------------------------------------------------------
async function runIngestionPipeline() {
  logActivity("📡 Triggering Web Ingestion & Cleaning Pipeline...");
  try {
    // Run crawler for registered universities (e.g. UC)
    logActivity("🕷️ Running crawler.js (Incremental updates)...");
    execSync('node crawler.js "UC System"', { cwd: root, stdio: 'inherit' });
    
    // Run auto-reviewer to parse and clean using local/AI rules
    logActivity("🧹 Running auto-reviewer.js...");
    execSync('node auto-reviewer.js', { cwd: root, stdio: 'inherit' });
    
    logActivity("✅ Ingestion pipeline run complete.");
  } catch (err) {
    logActivity(`❌ Ingestion pipeline failed: ${err.message}`);
  }
}

// -----------------------------------------------------------------------------
// MODULE 4: Deploy & Push Pipeline
// -----------------------------------------------------------------------------
function deployUpdates() {
  logActivity("🚀 Preparing production deployment...");
  try {
    const status = execSync('git status --porcelain', { cwd: root }).toString().trim();
    if (!status) {
      logActivity("🟢 No changes to commit. Everything is up to date.");
      return;
    }

    logActivity("📦 Staging changes...");
    execSync('git add .', { cwd: root });

    const commitMessage = `Auto-Developer: Autonomous maintenance update [${new Date().toLocaleDateString()}]`;
    execSync(`git commit -m "${commitMessage}"`, { cwd: root });
    logActivity(`📝 Committed changes: "${commitMessage}"`);

    logActivity("📤 Pushing to git remote (deploying to production)...");
    execSync('git push', { cwd: root });
    logActivity("🚀 Deployment triggered successfully via Git Integration!");
  } catch (err) {
    logActivity(`⚠️ Git deployment skipped or failed (Check git repository config): ${err.message}`);
  }
}

// -----------------------------------------------------------------------------
// Main Loop Execution
// -----------------------------------------------------------------------------
async function main() {
  logActivity("🚀 AUTONOMOUS DEVELOPER ENGINE WAKING UP...");
  
  if (!verifyIntegrity()) {
    logActivity("🚨 Existing workspace is broken! Resolving server logs first...");
    await processServerErrors();
    if (!verifyIntegrity()) {
      logActivity("🚨 Workspace still broken. Stopping run to prevent deployment of buggy state.");
      process.exit(1);
    }
  }

  // 1. Process server error logs
  await processServerErrors();

  // 2. Process user data correction feedback
  await processUserFeedback();

  // 3. Run Web Crawling & Auto Ingestion
  await runIngestionPipeline();

  // 4. Final verification check
  if (verifyIntegrity()) {
    // 5. Deploy updates to Git/Vercel
    deployUpdates();
    logActivity("🏁 AUTONOMOUS DEVELOPER ENGINE COMPLETED RUN SUCCESSFULLY.");
  } else {
    logActivity("🚨 Final integrity check failed. Aborting deployment.");
  }
}

main();
