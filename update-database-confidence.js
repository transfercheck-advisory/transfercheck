const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const transferDataPath = path.join(root, 'transfer-data.js');

function hasMixedTerms(text) {
  if (!text) return false;
  const lower = text.toLowerCase();
  const mixedTerms = [
    'recommended', 'generally', 'competitive', 'holistic', 
    '선택', '권장', '추천', '우대', 'strongly encouraged', 
    'suggested', 'preferred'
  ];
  return mixedTerms.some(term => lower.includes(term));
}

function main() {
  console.log('🔄 Injecting confidence metadata into transfer-data.js...');

  const fileContent = fs.readFileSync(transferDataPath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fileContent, sandbox);
  
  const database = sandbox.window.transferDatabase;
  if (!database || !database.schools) {
    console.error('❌ Failed to load transferDatabase');
    process.exit(1);
  }

  // Group majors within the same school to identify identical requirements
  const duplicateReqsMap = new Map();
  database.schools.forEach(school => {
    const schoolId = school.id;
    duplicateReqsMap.set(schoolId, new Map());
    const schoolMap = duplicateReqsMap.get(schoolId);
    
    school.majors.forEach(prog => {
      const reqs = (prog.requiredCourses || []).slice().sort().join('|');
      schoolMap.set(reqs, (schoolMap.get(reqs) || 0) + 1);
    });
  });

  let totalVerified = 0;
  let totalNeedsCheck = 0;
  let totalHighRisk = 0;

  // Process and inject confidence
  database.schools.forEach(school => {
    const isSchoolUc = /\bUC\b|University of California|Berkeley|UCLA|San Diego|Irvine|Davis|Santa Barbara|Santa Cruz|Riverside|Merced/i.test(school.name);
    const schoolMap = duplicateReqsMap.get(school.id);
    const schoolMajorCount = school.majors.length;

    school.majors.forEach(prog => {
      let isUc = isSchoolUc;
      let source_present = false;
      let required_recommended_mixed = false;
      let numeric_score_suspect = false;
      let gpa_suspect = false;
      let credit_suspect = false;
      let same_requirements_as_other_majors = false;
      let needs_official_check = false;

      const noteText = prog.note || "";
      if (noteText.includes('http://') || noteText.includes('https://') || noteText.includes('.edu') || noteText.includes('Source:')) {
        source_present = true;
      }

      const rawReq = prog.rawRequired || "";
      if (hasMixedTerms(rawReq) || (prog.requiredCourses && prog.requiredCourses.some(hasMixedTerms))) {
        required_recommended_mixed = true;
      }

      const eng = prog.english || {};
      if (eng.TOEFL !== undefined && eng.TOEFL !== null && (eng.TOEFL < 60 || eng.TOEFL > 120)) {
        numeric_score_suspect = true;
      }
      if (eng.TOEFL_2026 !== undefined && eng.TOEFL_2026 !== null && (eng.TOEFL_2026 < 0 || eng.TOEFL_2026 > 6)) {
        numeric_score_suspect = true;
      }
      if (eng.IELTS !== undefined && eng.IELTS !== null && (eng.IELTS < 0 || eng.IELTS > 9)) {
        numeric_score_suspect = true;
      }
      if (eng.Duolingo !== undefined && eng.Duolingo !== null && (eng.Duolingo < 80 || eng.Duolingo > 160)) {
        numeric_score_suspect = true;
      }

      if (prog.minGpa !== undefined && prog.minGpa !== null && (prog.minGpa < 0 || prog.minGpa > 4.0)) {
        gpa_suspect = true;
      }
      const rawGpa = prog.rawMinGpa || "";
      const gpaNumbers = rawGpa.match(/\b\d+(\.\d+)?\b/g);
      if (gpaNumbers) {
        gpaNumbers.forEach(n => {
          const val = parseFloat(n);
          if (val > 4.0 && val < 100) gpa_suspect = true;
        });
      }

      if (prog.minCredits !== undefined && prog.minCredits !== null && (prog.minCredits < 0 || prog.minCredits > 90)) {
        credit_suspect = true;
      }

      if (!prog.requiredCourses || prog.requiredCourses.length === 0) {
        needs_official_check = true;
      } else {
        const ignorableCount = prog.requiredCourses.filter(req => {
          const text = req.toLowerCase();
          return text.includes('미게시') || text.includes('목록 없음') || text.includes('없음') || text.includes('no official required') || text.includes('미명시');
        }).length;
        if (ignorableCount === prog.requiredCourses.length) {
          needs_official_check = true;
        }
      }

      const reqSignature = (prog.requiredCourses || []).slice().sort().join('|');
      if (schoolMajorCount >= 3 && schoolMap && schoolMap.get(reqSignature) >= 3) {
        same_requirements_as_other_majors = true;
      }

      // Determine confidence
      let confidence = 'verified';

      if (isUc) {
        confidence = 'high_risk';
      } else if (numeric_score_suspect || gpa_suspect || credit_suspect || needs_official_check) {
        confidence = 'high_risk';
      } else if (required_recommended_mixed || same_requirements_as_other_majors || !source_present) {
        confidence = 'needs_source_check';
      } else {
        const noteLower = noteText.toLowerCase();
        if (!noteLower.includes('verified') && !noteLower.includes('correct')) {
          confidence = 'needs_source_check';
        }
      }

      // Injects confidence
      prog.confidence = confidence;

      if (confidence === 'verified') totalVerified++;
      else if (confidence === 'needs_source_check') totalNeedsCheck++;
      else if (confidence === 'high_risk') totalHighRisk++;
    });
  });

  // 5. Serialize back to transfer-data.js format
  const updatedJs = `window.transferDatabase = ${JSON.stringify(database, null, 2)};\n`;
  fs.writeFileSync(transferDataPath, updatedJs, 'utf8');

  console.log('✅ Confidence metadata injection complete!');
  console.log(`📊 Statistics:\n   - verified: ${totalVerified}\n   - needs_source_check: ${totalNeedsCheck}\n   - high_risk: ${totalHighRisk}`);
}

main();
