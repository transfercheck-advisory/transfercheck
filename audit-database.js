const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const transferDataPath = path.join(root, 'transfer-data.js');

// Helper to escape CSV fields
function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

// Check if string contains specific Korean/English terms indicating mixed recommendations
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

// Main function
function main() {
  console.log('🔍 Starting Data Quality Audit...');

  // 1. Read and execute transfer-data.js in a sandbox context
  const fileContent = fs.readFileSync(transferDataPath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fileContent, sandbox);
  
  const database = sandbox.window.transferDatabase;
  if (!database || !database.schools) {
    console.error('❌ Failed to load transferDatabase from transfer-data.js');
    process.exit(1);
  }

  const allPrograms = database.schools.flatMap(school => 
    school.majors.map(major => ({ ...major, school }))
  );

  console.log(`📊 Loaded ${database.schools.length} schools and ${allPrograms.length} programs.`);

  // 2. Identify duplicate requirements across majors in the same school
  const duplicateReqsMap = new Map(); // schoolId -> { sortedReqString -> count }
  
  // First pass: count requirements signatures
  allPrograms.forEach(prog => {
    const schoolId = prog.school.id;
    const reqs = (prog.requiredCourses || []).slice().sort().join('|');
    if (!duplicateReqsMap.has(schoolId)) {
      duplicateReqsMap.set(schoolId, new Map());
    }
    const schoolMap = duplicateReqsMap.get(schoolId);
    schoolMap.set(reqs, (schoolMap.get(reqs) || 0) + 1);
  });

  const auditRows = [];

  // 3. Process each program
  allPrograms.forEach(prog => {
    const schoolName = prog.school.name;
    const majorName = prog.name;
    const isUc = /\bUC\b|University of California|Berkeley|UCLA|San Diego|Irvine|Davis|Santa Barbara|Santa Cruz|Riverside|Merced/i.test(schoolName);

    // Initial flags
    let source_present = false;
    let official_source_type = 'none';
    let required_recommended_mixed = false;
    let numeric_score_suspect = false;
    let gpa_suspect = false;
    let credit_suspect = false;
    let same_requirements_as_other_majors = false;
    let needs_official_check = false;
    let notes = [];

    // Source verification check
    const noteText = prog.note || "";
    if (noteText.includes('http://') || noteText.includes('https://') || noteText.includes('.edu') || noteText.includes('Source:')) {
      source_present = true;
      if (noteText.toLowerCase().includes('assist.org')) {
        official_source_type = 'assist';
      } else {
        official_source_type = 'official_site';
      }
    }

    // Required/recommended mixed check
    const rawReq = prog.rawRequired || "";
    if (hasMixedTerms(rawReq)) {
      required_recommended_mixed = true;
      notes.push('Mixed recommendations in required courses');
    }
    
    // Also check requiredCourses elements
    if (prog.requiredCourses && prog.requiredCourses.some(hasMixedTerms)) {
      required_recommended_mixed = true;
      notes.push('Required courses contain recommendation keywords');
    }

    // English score check
    const eng = prog.english || {};
    if (eng.TOEFL !== undefined && eng.TOEFL !== null) {
      if (eng.TOEFL < 60 || eng.TOEFL > 120) {
        numeric_score_suspect = true;
        notes.push(`TOEFL score suspect: ${eng.TOEFL}`);
      }
    }
    if (eng.TOEFL_2026 !== undefined && eng.TOEFL_2026 !== null) {
      if (eng.TOEFL_2026 < 0 || eng.TOEFL_2026 > 6) {
        numeric_score_suspect = true;
        notes.push(`TOEFL 2026 score suspect: ${eng.TOEFL_2026}`);
      }
    }
    if (eng.IELTS !== undefined && eng.IELTS !== null) {
      if (eng.IELTS < 0 || eng.IELTS > 9) {
        numeric_score_suspect = true;
        notes.push(`IELTS score suspect: ${eng.IELTS}`);
      }
    }
    if (eng.Duolingo !== undefined && eng.Duolingo !== null) {
      if (eng.Duolingo < 80 || eng.Duolingo > 160) {
        numeric_score_suspect = true;
        notes.push(`Duolingo score suspect: ${eng.Duolingo}`);
      }
    }

    // GPA check
    if (prog.minGpa !== undefined && prog.minGpa !== null) {
      if (prog.minGpa < 0 || prog.minGpa > 4.0) {
        gpa_suspect = true;
        notes.push(`GPA suspect: ${prog.minGpa}`);
      }
    }
    const rawGpa = prog.rawMinGpa || "";
    // If raw GPA contains numeric patterns, check for dates parsed as GPA (e.g. 2026)
    const gpaNumbers = rawGpa.match(/\b\d+(\.\d+)?\b/g);
    if (gpaNumbers) {
      gpaNumbers.forEach(n => {
        const val = parseFloat(n);
        if (val > 4.0 && val < 100) { // arbitrary bound, e.g. 4.5, 5.0 are rare, 2026 is date
          gpa_suspect = true;
          notes.push(`Suspect number in raw GPA: ${val}`);
        }
      });
    }

    // Credit check
    if (prog.minCredits !== undefined && prog.minCredits !== null) {
      if (prog.minCredits < 0 || prog.minCredits > 90) {
        credit_suspect = true;
        notes.push(`Credits suspect: ${prog.minCredits}`);
      }
    }

    // Official required courses check
    if (!prog.requiredCourses || prog.requiredCourses.length === 0) {
      needs_official_check = true;
      notes.push('No official required courses listed');
    } else {
      const ignorableCount = prog.requiredCourses.filter(req => {
        const text = req.toLowerCase();
        return text.includes('미게시') || text.includes('목록 없음') || text.includes('없음') || text.includes('no official required') || text.includes('미명시');
      }).length;
      if (ignorableCount === prog.requiredCourses.length) {
        needs_official_check = true;
        notes.push('All listed required courses are placeholder/unspecified notes');
      }
    }

    // Identical requirements check
    const schoolMap = duplicateReqsMap.get(prog.school.id);
    const reqSignature = (prog.requiredCourses || []).slice().sort().join('|');
    const schoolMajorCount = prog.school.majors.length;
    
    // If school has at least 3 majors, and this requirements signature is shared by more than half of them, or shared by >= 3 majors
    if (schoolMajorCount >= 3 && schoolMap && schoolMap.get(reqSignature) >= 3) {
      same_requirements_as_other_majors = true;
      notes.push(`Same required courses shared by ${schoolMap.get(reqSignature)} majors in this school`);
    }

    // Missing raw source/note check
    if (!prog.note || prog.note.trim() === "") {
      notes.push('Missing verification note or source');
      needs_official_check = true;
    }

    // Determine Risk Level
    // - high_risk: if scores/GPA suspect, UC school (high-priority review), or major has critical missing info
    // - needs_source_check: if there are warnings (mixed terms, same requirements, or missing sources)
    // - verified: otherwise, and note includes "Verified"
    let risk_level = 'verified';

    if (numeric_score_suspect || gpa_suspect || credit_suspect || needs_official_check) {
      risk_level = 'high_risk';
    } else if (required_recommended_mixed || same_requirements_as_other_majors || !source_present) {
      risk_level = 'needs_source_check';
    } else {
      const noteLower = noteText.toLowerCase();
      if (!noteLower.includes('verified') && !noteLower.includes('correct')) {
        risk_level = 'needs_source_check';
        notes.push('Note does not state "Verified"');
      }
    }

    if (risk_level !== 'verified') {
      needs_official_check = true;
    }

    auditRows.push({
      school: schoolName,
      major: majorName,
      risk_level,
      source_present,
      official_source_type,
      required_recommended_mixed,
      numeric_score_suspect,
      gpa_suspect,
      credit_suspect,
      same_requirements_as_other_majors,
      needs_official_check,
      notes: notes.join('; ') || 'None'
    });
  });

  // 4. Write CSV
  const headers = [
    'school', 'major', 'risk_level', 'source_present', 'official_source_type',
    'required_recommended_mixed', 'numeric_score_suspect', 'gpa_suspect', 'credit_suspect',
    'same_requirements_as_other_majors', 'needs_official_check', 'notes'
  ];

  const csvRows = [
    headers.join(','),
    ...auditRows.map(row => headers.map(h => csvEscape(row[h])).join(','))
  ];

  const csvContent = csvRows.join('\n');
  fs.writeFileSync(path.join(root, 'data-quality-audit.csv'), csvContent, 'utf8');

  // Print statistics
  const stats = auditRows.reduce((acc, row) => {
    acc[row.risk_level] = (acc[row.risk_level] || 0) + 1;
    return acc;
  }, {});

  console.log('✅ Audit Complete!');
  console.log('📊 Risk Level Breakdown:');
  console.log(`   - Verified: ${stats.verified || 0}`);
  console.log(`   - Needs Source Check: ${stats.needs_source_check || 0}`);
  console.log(`   - High Risk: ${stats.high_risk || 0}`);
  console.log(`💾 Exported data to: data-quality-audit.csv`);
}

main();
