const fs = require('fs');
const path = require('path');

const transferDataPath = 'c:/Users/user/OneDrive/바탕 화면/transfer app/transfer-data.js';
const ucReviewPath = 'c:/Users/user/OneDrive/바탕 화면/transfer app/uc-verification-review.json';

// Load Database
const window = {};
eval(fs.readFileSync(transferDataPath, 'utf8'));
const transferDatabase = window.transferDatabase;

// Load UC Review
const ucReview = JSON.parse(fs.readFileSync(ucReviewPath, 'utf8'));

console.log(`Loaded database with ${transferDatabase.schools.length} schools.`);
console.log(`Loaded ${ucReview.length} UC verification review items.`);

function cleanNote(school, majorName, noteText) {
  if (!noteText) return "";
  
  let lines = noteText.split('\n');
  let cleanLines = [];
  
  lines.forEach(line => {
    line = line.trim();
    if (!line) return;
    
    // Skip verification sources, URLs, checkmarks, etc.
    if (line.toLowerCase().includes('source:') || 
        line.toLowerCase().includes('verified') || 
        line.includes('✅') || 
        line.toLowerCase().includes('http')
    ) {
      return;
    }
    // Skip official FAQ quotes
    if (line.includes("For fall 2025") || 
        line.includes("13.9% of applicants") || 
        line.includes("371 transfer students") || 
        line.includes("average GPA of")
    ) {
      return;
    }
    
    cleanLines.push(line);
  });
  
  let resultBullets = [];
  let isUCB = school.includes('Berkeley');
  
  if (isUCB) {
    resultBullets.push("- 가을학기만 지원 가능 (11월 1~30일 접수)");
    resultBullets.push("- 최소 60학점 이수 및 GPA 3.5 이상 필수 (3.5 미만 지원 불가)");
    resultBullets.push("- IGETC 불인정 (전공선수과목 및 Breadth 필수 이수)");
    resultBullets.push("- 1월 중 Major Prerequisite Admissions Form 제출 필수 (미제출 시 자격 박탈)");
    resultBullets.push("- 전공 변경 및 복수 전공 불가 (조인트 전공 예외), CC 학점 최대 70학점 인정");
  } else if (school === 'UC San Diego') {
    resultBullets.push("- 가을학기만 지원 가능 (11월 1~30일 접수)");
    resultBullets.push("- 최소 60학점 이수 및 GPA 기준 충족 필수 (CA 거주자 2.4 / 비거주자 2.8)");
    resultBullets.push("- 모든 screening 과목은 편입 전 봄 학기까지 C 이상으로 완료 필수 (Selective Major)");
    resultBullets.push("- 대안 전공(Non-selective major) 기재 강력 권장");
  } else if (school === 'UC Irvine') {
    resultBullets.push("- 가을학기만 지원 가능 (11월 1~30일 접수)");
    resultBullets.push("- 전체 GPA 3.0 및 전공 필수과목 GPA 3.0 이상 유지 필수");
    resultBullets.push("- TAG 지원 시 GPA 3.4 이상 필수 (단, CS&E 전공은 TAG 제외)");
    resultBullets.push("- 모든 필수과목은 편입 전 봄 학기 종료 전까지 완료 필수");
    resultBullets.push("- IGETC 허용되나 이공계열 전공은 비권장");
  } else {
    // General UC System or other
    resultBullets.push("- 가을학기만 지원 가능 (11월 1~30일 접수)");
    resultBullets.push("- 최소 60학점 이수 및 각 캠퍼스별 GPA 기준 충족 필수");
  }
  
  let specialNotes = [];
  cleanLines.forEach(line => {
    let lLower = line.toLowerCase();
    
    // Skip lines that are already covered by common bullets
    if (lLower.includes("fall only") || 
        lLower.includes("min gpa") || 
        lLower.includes("gpa 3.5") ||
        lLower.includes("min 60") || 
        lLower.includes("igetc") ||
        lLower.includes("70학점") ||
        lLower.includes("1월") ||
        lLower.includes("prerequisite admissions form") ||
        lLower.includes("screening 과목 spring") ||
        lLower.includes("대안 전공") ||
        lLower.includes("tag:") ||
        lLower.includes("spring 종료 전")
    ) {
      return;
    }
    
    // Clean "특이사항:" prefix if present
    let cleanedLine = line.replace(/^(특이사항:\s*|★\s*|⚠️\s*)/, '');
    if (cleanedLine.trim()) {
      specialNotes.push(cleanedLine.trim());
    }
  });
  
  if (specialNotes.length > 0) {
    resultBullets.push("[특이사항]");
    specialNotes.forEach(sn => {
      // format as bullet
      resultBullets.push(`- ${sn}`);
    });
  }
  
  return resultBullets.join('\n');
}

let matchCount = 0;
let updatedCount = 0;

ucReview.forEach(reviewItem => {
  const schoolName = reviewItem.school;
  const majorName = reviewItem.major;
  
  // Find school in DB
  let dbSchool = transferDatabase.schools.find(s => s.name === schoolName);
  let dbMajor = null;
  
  // Normalize match helper
  const normalize = (name) => name.toLowerCase().replace(/\s+/g, ' ').trim();
  
  if (dbSchool) {
    dbMajor = dbSchool.majors.find(m => normalize(m.name) === normalize(majorName));
    if (!dbMajor) {
      dbMajor = dbSchool.majors.find(m => 
        normalize(m.name).includes(normalize(majorName)) || 
        normalize(majorName).includes(normalize(m.name))
      );
    }
  } else {
    // Check UC System
    const ucSystemSchool = transferDatabase.schools.find(s => s.name === 'UC System');
    if (ucSystemSchool) {
      dbMajor = ucSystemSchool.majors.find(m => 
        normalize(m.name).includes(normalize(schoolName)) && 
        (normalize(m.name).includes(normalize(majorName)) || normalize(majorName).includes(normalize(m.name)))
      );
      if (dbMajor) {
        dbSchool = ucSystemSchool;
      }
    }
  }
  
  if (dbMajor) {
    matchCount++;
    
    // Parse requiredCourses and recommendedCourses
    const required = reviewItem.required_courses
      ? reviewItem.required_courses.split('|').map(c => c.trim()).filter(Boolean)
      : [];
    const recommended = reviewItem.recommended_courses
      ? reviewItem.recommended_courses.split('|').map(c => c.trim()).filter(Boolean)
      : [];
      
    // Simplify Note
    const simplifiedNote = cleanNote(schoolName, dbMajor.name, reviewItem.note);
    
    // Perform Overwrite
    dbMajor.requiredCourses = required;
    dbMajor.recommendedCourses = recommended;
    dbMajor.rawRequired = reviewItem.required_courses || "";
    dbMajor.rawRecommended = reviewItem.recommended_courses || "";
    
    dbMajor.rawMinGpa = reviewItem.gpa || "";
    // Parse minGpa
    if (reviewItem.gpa) {
      const gpaMatch = reviewItem.gpa.match(/(\d+\.\d+)/);
      if (gpaMatch) {
        dbMajor.minGpa = parseFloat(gpaMatch[1]);
      }
    }
    
    dbMajor.rawMinCredits = reviewItem.credits || "";
    if (reviewItem.credits) {
      const credMatch = reviewItem.credits.match(/(\d+)/);
      if (credMatch) {
        dbMajor.minCredits = parseInt(credMatch[1], 10);
      }
    }
    
    if (!dbMajor.english) dbMajor.english = {};
    dbMajor.english.raw = reviewItem.english || "";
    
    // Update english test score parsing
    if (reviewItem.english) {
      const toeflMatch = reviewItem.english.match(/TOEFL iBT:\s*(\d+)/i) || reviewItem.english.match(/TOEFL:\s*(\d+)/i) || reviewItem.english.match(/최소\s*(\d+)점/);
      if (toeflMatch) dbMajor.english.TOEFL = parseInt(toeflMatch[1], 10);
      
      const ieltsMatch = reviewItem.english.match(/IELTS:\s*(\d+\.\d+|\d+)/i) || reviewItem.english.match(/IELTS Academic:\s*(\d+\.\d+|\d+)/i);
      if (ieltsMatch) dbMajor.english.IELTS = parseFloat(ieltsMatch[1]);
      
      const detMatch = reviewItem.english.match(/Duolingo:\s*(\d+)/i) || reviewItem.english.match(/Duolingo English Test:\s*최소\s*(\d+)점/i);
      if (detMatch) dbMajor.english.Duolingo = parseInt(detMatch[1], 10);
      
      const toefl2026Match = reviewItem.english.match(/TOEFL iBT\s*.*최소\s*(\d+\.\d+|\d+)점\s*\(신척도\)/i) || reviewItem.english.match(/신척도.*최소\s*(\d+\.\d+|\d+)점/i) || reviewItem.english.match(/신척도:\s*UC\s*최소\s*(\d+\.\d+|\d+)점/i);
      if (toefl2026Match) dbMajor.english.TOEFL_2026 = parseFloat(toefl2026Match[1]);
    }
    
    dbMajor.note = simplifiedNote;
    dbMajor.confidence = "verified"; // Set confidence level to verified!
    
    updatedCount++;
    
    // Print a sample to verify
    if (updatedCount <= 3 || dbMajor.name.includes("Bioengineering")) {
      console.log(`\n--------------------------------------------------`);
      console.log(`Updated: [${dbSchool.name}] ${dbMajor.name}`);
      console.log(`requiredCourses:`, dbMajor.requiredCourses);
      console.log(`recommendedCourses:`, dbMajor.recommendedCourses);
      console.log(`GPA: ${dbMajor.minGpa} (${dbMajor.rawMinGpa})`);
      console.log(`Credits: ${dbMajor.minCredits} (${dbMajor.rawMinCredits})`);
      console.log(`English:`, dbMajor.english);
      console.log(`Cleaned Note:\n${dbMajor.note}`);
    }
  } else {
    console.log(`Unmatched: [${schoolName}] ${majorName}`);
  }
});

console.log(`\nMatched ${matchCount}/${ucReview.length} majors.`);
console.log(`Updated ${updatedCount} majors in database.`);

// Write back to transfer-data.js
const newDbContent = "window.transferDatabase = " + JSON.stringify(transferDatabase, null, 2) + ";\n";
fs.writeFileSync(transferDataPath, newDbContent, 'utf8');
console.log(`Successfully wrote updates back to ${transferDataPath}.`);
