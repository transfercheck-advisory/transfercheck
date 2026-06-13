const fs = require('fs');
const path = require('path');

const scratchDir = __dirname;
const batchFiles = [
  'additions_batch1.json',
  'additions_batch2.json',
  'additions_batch3.json',
  'additions_batch4.json',
  'additions_batch5.json'
];

let totalWarnings = 0;
let totalMajorsScanned = 0;
let totalSchoolsScanned = 0;

console.log("🔍 Starting Data Quality Audit on Collected Batches...\n");

batchFiles.forEach(file => {
  const filePath = path.join(scratchDir, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ Batch file not found: ${file}. Skipping.`);
    return;
  }

  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`❌ Failed to parse ${file}:`, e.message);
    totalWarnings++;
    return;
  }

  if (!Array.isArray(data)) {
    console.error(`❌ ${file} is not a valid JSON array!`);
    totalWarnings++;
    return;
  }

  console.log(`📂 Auditing ${file}...`);

  data.forEach(schoolData => {
    const schoolName = schoolData.school;
    const majors = schoolData.majors;
    totalSchoolsScanned++;

    if (!schoolName) {
      console.warn(`  ⚠️ Missing school name in a record of ${file}`);
      totalWarnings++;
      return;
    }

    if (!Array.isArray(majors) || majors.length === 0) {
      console.warn(`  ⚠️ [${schoolName}] has NO majors listed!`);
      totalWarnings++;
      return;
    }

    console.log(`  🏫 ${schoolName} - Found ${majors.length} majors`);

    majors.forEach(m => {
      totalMajorsScanned++;
      const prefix = `    - [${m.name}]`;

      // 1. Check major name
      if (!m.name) {
        console.warn(`  ⚠️ [${schoolName}] Found a major with no name!`);
        totalWarnings++;
        return;
      }

      // 2. Check GPA
      if (m.minGpa === null && (!m.rawMinGpa || m.rawMinGpa === "unspecified")) {
        console.warn(`  ⚠️ [${schoolName}] ${prefix} Min GPA is completely missing or unspecified.`);
        totalWarnings++;
      }

      // 3. Check credits
      if (m.minCredits === null && (!m.rawMinCredits || m.rawMinCredits === "unspecified")) {
        console.warn(`  ⚠️ [${schoolName}] ${prefix} Min Credits is completely missing or unspecified.`);
        totalWarnings++;
      }

      // 4. Check required courses
      if (!Array.isArray(m.requiredCourses) || m.requiredCourses.length === 0) {
        console.warn(`  ⚠️ [${schoolName}] ${prefix} Required courses array is EMPTY!`);
        totalWarnings++;
      }

      // 5. Check English scores
      if (!m.english || (!m.english.raw && !m.english.TOEFL && !m.english.IELTS)) {
        console.warn(`  ⚠️ [${schoolName}] ${prefix} English requirements are missing!`);
        totalWarnings++;
      }
    });
  });
  console.log("");
});

console.log("==================================================");
console.log(`📊 Audit Summary:`);
console.log(` - Schools Scanned: ${totalSchoolsScanned}`);
console.log(` - Majors Scanned: ${totalMajorsScanned}`);
console.log(` - Total Warnings/Errors found: ${totalWarnings}`);
console.log("==================================================");

if (totalWarnings === 0) {
  console.log("✅ Audit Passed! All data files conform to requirements with 100% completeness.");
  process.exit(0);
} else {
  console.log("⚠️ Audit Finished with warnings. Review warnings above before merging.");
  process.exit(1);
}
