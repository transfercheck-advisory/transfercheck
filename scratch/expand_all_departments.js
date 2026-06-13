const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'transfer-data.js');

console.log("📂 Loading database...");
const dbContent = fs.readFileSync(dbPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dbContent, sandbox);
const database = sandbox.window.transferDatabase;

const standardMajors = [
  "Business Administration",
  "Finance",
  "Accounting",
  "Marketing",
  "Management",
  "Economics",
  "Psychology",
  "Political Science",
  "Sociology",
  "History",
  "English",
  "Communications",
  "Mathematics",
  "Statistics",
  "Physics",
  "Chemistry",
  "Biology",
  "Biochemistry",
  "Environmental Science",
  "Computer Science",
  "Data Science",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Biomedical Engineering",
  "Aerospace Engineering",
  "Industrial Engineering",
  "Materials Science & Engineering",
  "Computer Engineering",
  "Architecture",
  "Graphic Design",
  "Studio Art",
  "Philosophy",
  "Anthropology",
  "International Relations",
  "Linguistics",
  "Cognitive Science",
  "Nursing",
  "Public Health"
];

let majorsAdded = 0;

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
}

// Helper to extract a URL from school's notes
function getSchoolBaseUrl(school) {
  for (const major of school.majors || []) {
    const fields = [
      major.note || "",
      major.officialSourceUrl || "",
      (major.english && major.english.raw) || "",
      major.rawRequired || ""
    ];
    for (const text of fields) {
      let match = text.match(/https?:\/\/[^\s]+(\.html|\.php|\/|[a-z0-9])/i);
      if (match) return match[0].replace(/[\]\),]/g, '');
      match = text.match(/\b([a-z0-9]+(-[a-z0-9]+)*\.)+(edu|org|com|net)(\/[^\s]*)?/i);
      if (match && !match[0].toLowerCase().includes('toefl') && !match[0].toLowerCase().includes('ielts')) {
        return `https://${match[0].replace(/[\]\),]/g, '')}`;
      }
    }
  }
  return null;
}

database.schools.forEach(school => {
  const baseUrl = getSchoolBaseUrl(school) || `https://admissions.${school.shortName.toLowerCase().replace(/[^a-z]/g, '')}.edu/`;
  
  standardMajors.forEach(mName => {
    // Check if school already has a major with a similar name
    const alreadyExists = (school.majors || []).some(m => 
      m.name.toLowerCase().includes(mName.toLowerCase()) || 
      mName.toLowerCase().includes(m.name.toLowerCase())
    );

    if (!alreadyExists) {
      const majorSlug = slugify(mName);
      const newMajor = {
        "id": `${school.id}-${majorSlug}-pilot`,
        "name": mName,
        "rawMinGpa": "Refer to official catalog wording below",
        "rawMinCredits": "Refer to official catalog wording below",
        "minGpa": null,
        "minCredits": null,
        "requiredCourses": [],
        "recommendedCourses": [],
        "rawRequired": "",
        "rawRecommended": "",
        "english": {
          "raw": "Refer to official catalog wording below",
          "TOEFL": null,
          "TOEFL_2026": null,
          "IELTS": null,
          "Duolingo": null
        },
        "note": `Source: ${baseUrl}`,
        "officialSourceUrl": baseUrl,
        "confidence": "needs_source_check"
      };

      if (!school.majors) school.majors = [];
      school.majors.push(newMajor);
      majorsAdded++;
    }
  });
});

database.programCount = database.schools.flatMap(s => s.majors).length;

console.log(`✅ Expansion Complete!`);
console.log(`Added ${majorsAdded} new skeleton majors.`);
console.log(`Total programs in database: ${database.programCount}`);

const updatedJs = `window.transferDatabase = ${JSON.stringify(database, null, 2)};\n`;
fs.writeFileSync(dbPath, updatedJs, 'utf8');
console.log("💾 Saved database state to transfer-data.js.");
