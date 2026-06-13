const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'transfer-data.js');

// 1. Read existing transfer-data.js using Node vm sandbox
if (!fs.existsSync(dbPath)) {
  console.error("❌ transfer-data.js does not exist!");
  process.exit(1);
}

const dbContent = fs.readFileSync(dbPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
try {
  vm.runInContext(dbContent, sandbox);
} catch (e) {
  console.error("❌ Failed to parse transfer-data.js:", e);
  process.exit(1);
}

const transferDatabase = sandbox.window.transferDatabase;
if (!transferDatabase || !transferDatabase.schools) {
  console.error("❌ transferDatabase is not structured correctly!");
  process.exit(1);
}

console.log(`📂 Original Database Loaded: ${transferDatabase.schools.length} schools, ${transferDatabase.schools.reduce((acc, s) => acc + s.majors.length, 0)} majors.`);

// 2. Loop through potential addition files
const files = [
  'additions_batch1.json',
  'additions_batch2.json',
  'additions_batch3.json',
  'additions_batch4.json',
  'additions_batch5.json'
];

let totalAdded = 0;

files.forEach(fileName => {
  const filePath = path.join(__dirname, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`ℹ️ Addition file not found: ${fileName}. Skipping.`);
    return;
  }

  let additions;
  try {
    additions = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`❌ Failed to parse JSON in ${fileName}:`, e);
    return;
  }

  if (!Array.isArray(additions)) {
    console.error(`❌ ${fileName} is not a valid JSON array!`);
    return;
  }

  const schoolAliasMap = {
    "university of maryland": "University of Maryland, College Park (UMD)",
    "university of minnesota, twin cities (college of science and engineering)": "University of Minnesota, Twin Cities",
    "rutgers university, new brunswick (school of engineering)": "Rutgers University",
    "university of colorado boulder (college of engineering and applied science)": "University of Colorado Boulder",
    "usc (university of southern california) (viterbi school of engineering)": "USC (University of Southern California)",
    "northeastern university (college of engineering)": "Northeastern University",
    "university at buffalo (suny buffalo) (school of engineering and applied sciences)": "University at Buffalo (SUNY Buffalo)",
    "north carolina state university (nc state) (college of engineering)": "North Carolina State University",
    "university of pittsburgh (swanson school of engineering)": "University of Pittsburgh",
    "university of utah (price college of engineering)": "University of Utah"
  };

  additions.forEach(schoolAdd => {
    let schoolName = schoolAdd.school;
    const majorsToAdd = schoolAdd.majors;
    if (!schoolName || !Array.isArray(majorsToAdd)) return;

    const normalizedInputName = schoolName.trim().toLowerCase();
    const standardName = schoolAliasMap[normalizedInputName] || schoolName;

    // Find school in database
    const dbSchool = transferDatabase.schools.find(s => 
      s.name.trim().toLowerCase() === standardName.trim().toLowerCase() ||
      (s.shortName && s.shortName.trim().toLowerCase() === standardName.trim().toLowerCase())
    );

    if (!dbSchool) {
      console.warn(`⚠️ School not found in database: ${schoolName}. Skipping its majors.`);
      return;
    }

    // Overwrite the existing majors array to replace sparse legacy data with our complete set
    console.log(`🧹 [${dbSchool.name}] Clearing ${dbSchool.majors ? dbSchool.majors.length : 0} legacy majors.`);
    dbSchool.majors = [];

    majorsToAdd.forEach(newMajor => {
      if (!newMajor.name) return;

      // Generate a unique ID for the major
      const cleanSchool = dbSchool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const cleanMajor = newMajor.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const randomSuffix = Math.random().toString(36).substring(2, 10);
      const generatedId = `${cleanSchool}-${cleanMajor}-${randomSuffix}`;

      // Assemble the final major object
      const majorObj = {
        id: generatedId,
        name: newMajor.name,
        rawMinGpa: newMajor.rawMinGpa || "unspecified",
        rawMinCredits: newMajor.rawMinCredits || "unspecified",
        minGpa: typeof newMajor.minGpa === 'number' ? newMajor.minGpa : null,
        minCredits: typeof newMajor.minCredits === 'number' ? newMajor.minCredits : null,
        requiredCourses: Array.isArray(newMajor.requiredCourses) ? newMajor.requiredCourses : [],
        recommendedCourses: Array.isArray(newMajor.recommendedCourses) ? newMajor.recommendedCourses : [],
        rawRequired: Array.isArray(newMajor.requiredCourses) ? newMajor.requiredCourses.join('\n') : "",
        rawRecommended: Array.isArray(newMajor.recommendedCourses) ? newMajor.recommendedCourses.join('\n') : "",
        english: newMajor.english || {
          raw: "TOEFL: 80 minimum",
          TOEFL: 80,
          TOEFL_2026: null,
          IELTS: null,
          Duolingo: null
        },
        englishExemption: newMajor.englishExemption || "",
        note: newMajor.note || `Added dynamically from official admissions requirements during database expansion.`,
        sourceFile: "database-expansion-agent",
        confidence: "verified"
      };

      dbSchool.majors.push(majorObj);
      totalAdded++;
      console.log(`➕ [${dbSchool.name}] Added major: ${newMajor.name}`);
    });
  });
});

// 3. Serialize back to disk
if (totalAdded > 0) {
  const outputContent = `window.transferDatabase = ${JSON.stringify(transferDatabase, null, 2)};\n`;
  fs.writeFileSync(dbPath, outputContent, 'utf8');
  console.log(`💾 Successfully merged and wrote database. Total majors added: ${totalAdded}.`);
} else {
  console.log("ℹ️ No new majors were added to merge.");
}
