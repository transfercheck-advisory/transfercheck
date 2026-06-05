const fs = require('fs');
const path = require('path');

// Mock browser global to load transfer-data.js safely
global.window = {};
require('C:/Users/user/OneDrive/바탕 화면/transfer app/transfer-data.js');

const db = global.window.transferDatabase;

if (!db || !db.schools) {
  console.log("Database load failed or empty");
  process.exit(1);
}

console.log(`총 학교 수: ${db.schools.length}`);
db.schools.forEach(school => {
  const majorsCount = school.majors ? school.majors.length : 0;
  
  // Check for notes or requirements related to writing/essays
  let hasEssayNotes = false;
  let essayKeywordsCount = 0;
  const inspectText = (text) => {
    if (!text) return;
    const lower = text.toLowerCase();
    if (lower.includes("essay") || lower.includes("sop") || lower.includes("personal statement") || lower.includes("writing") || lower.includes("piq") || lower.includes("에세이") || lower.includes("자기소개서")) {
      hasEssayNotes = true;
      essayKeywordsCount++;
    }
  };

  inspectText(school.note);
  if (school.majors) {
    school.majors.forEach(m => {
      inspectText(m.note);
      if (m.requiredCourses) m.requiredCourses.forEach(inspectText);
      if (m.recommendedCourses) m.recommendedCourses.forEach(inspectText);
    });
  }

  console.log(`- ${school.name} (${school.shortName}): 전공 수 ${majorsCount}개 | 에세이/SOP 요건 키워드 매칭 여부: ${hasEssayNotes ? '있음 (' + essayKeywordsCount + '건)' : '없음'}`);
});
