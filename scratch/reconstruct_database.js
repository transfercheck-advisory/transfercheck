const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'transfer-data.js');

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

// Essential core majors to keep if a university has no scraped text (fallback)
const coreFallbackMajors = [
  "Business Administration",
  "Economics",
  "Psychology",
  "Computer Science",
  "Mathematics",
  "Biology"
];

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
}

function main() {
  console.log("📂 Loading database...");
  const dbContent = fs.readFileSync(dbPath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(dbContent, sandbox);
  const database = sandbox.window.transferDatabase;

  if (!database || !database.schools) {
    console.error("❌ Failed to load transferDatabase");
    process.exit(1);
  }

  let totalBefore = 0;
  let totalAfter = 0;
  let prunedCount = 0;

  database.schools.forEach(school => {
    const parentSchoolName = school.name;
    const majors = school.majors || [];
    totalBefore += majors.length;

    // 1. Keep original verified majors (which do NOT have '-pilot' in their ID)
    const verifiedMajors = majors.filter(m => !m.id.endsWith('-pilot'));

    // 2. Identify the pilot majors we injected earlier
    const pilotMajors = majors.filter(m => m.id.endsWith('-pilot'));

    // 3. Concatenate all scraped raw text for this school to search within
    const fullText = majors
      .map(m => m.rawOfficialText || "")
      .filter(t => t.trim().length > 10)
      .join("\n\n")
      .toLowerCase();

    const verifiedMajorNamesLower = verifiedMajors.map(m => m.name.toLowerCase());
    const finalMajors = [...verifiedMajors];

    if (fullText.trim().length === 0) {
      // If no text was scraped (e.g. all URLs failed), keep ALL pilot majors for database completeness
      console.log(`⚠️  No scraped text for ${parentSchoolName}. Keeping ALL pilot majors for database completeness.`);
      pilotMajors.forEach(m => {
        const alreadyHasSimilar = verifiedMajorNamesLower.some(vName => m.name.toLowerCase().includes(vName) || vName.includes(m.name.toLowerCase()));
        if (!alreadyHasSimilar) {
          finalMajors.push(m);
        }
      });
    } else {
      // Scraped text exists. Check presence of each pilot major in the text
      pilotMajors.forEach(m => {
        const majorNameLower = m.name.toLowerCase();
        
        // Exact word match or clear substring match in the official scraped guideline
        const isMentioned = fullText.includes(majorNameLower) || 
                            fullText.includes(majorNameLower.replace(" & ", " and ")) ||
                            fullText.includes(majorNameLower.split(" ")[0]); // match first word (e.g. "linguistics")

        const alreadyHasSimilar = verifiedMajorNamesLower.some(vName => m.name.toLowerCase().includes(vName) || vName.includes(m.name.toLowerCase()));

        if (isMentioned && !alreadyHasSimilar) {
          finalMajors.push(m);
        } else {
          prunedCount++;
        }
      });
    }

    school.majors = finalMajors;
    totalAfter += finalMajors.length;
    console.log(`🏫 ${parentSchoolName}: Kept ${finalMajors.length} majors (Verified: ${verifiedMajors.length}, Genuine Pilot: ${finalMajors.length - verifiedMajors.length})`);
  });

  database.programCount = totalAfter;

  console.log(`\n--------------------------------------------------`);
  console.log(`✅ Reconstruction Complete!`);
  console.log(`• Total programs before: ${totalBefore}`);
  console.log(`• Pruned unnecessary majors: ${prunedCount}`);
  console.log(`• Total programs after: ${totalAfter}`);

  const updatedJs = `window.transferDatabase = ${JSON.stringify(database, null, 2)};\n`;
  fs.writeFileSync(dbPath, updatedJs, 'utf8');
  console.log("💾 Saved reconstructed database state to transfer-data.js.");
}

main();
