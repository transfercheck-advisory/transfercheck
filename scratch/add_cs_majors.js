const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'transfer-data.js');

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

// 1. Add CS to UMD
const umd = transferDatabase.schools.find(s => s.name === "University of Maryland, College Park (UMD)");
if (umd) {
  const hasCS = umd.majors.some(m => m.name === "Computer Science");
  if (!hasCS) {
    const umdCS = {
      id: "university-of-maryland-college-park-umd--computer-science-a5678b90",
      name: "Computer Science",
      rawMinGpa: "3.0 minimum cumulative GPA across all college coursework (LEP admission criteria)",
      rawMinCredits: "12 transferable credits completed, but 30+ credits strongly recommended",
      minGpa: 3.0,
      minCredits: 12,
      requiredCourses: [
        "CMSC 131 - Object-Oriented Programming I (grade of C- or better)",
        "CMSC 132 - Object-Oriented Programming II (grade of C- or better)",
        "MATH 140 - Calculus I (grade of C- or better)"
      ],
      recommendedCourses: [
        "MATH 141 - Calculus II"
      ],
      rawRequired: "CMSC 131 - Object-Oriented Programming I (grade of C- or better)\nCMSC 132 - Object-Oriented Programming II (grade of C- or better)\nMATH 140 - Calculus I (grade of C- or better)",
      rawRecommended: "MATH 141 - Calculus II",
      english: {
        raw: "TOEFL iBT: 96 minimum, IELTS: 7.0 minimum, Duolingo: 120 minimum",
        TOEFL: 96,
        TOEFL_2026: null,
        IELTS: 7.0,
        Duolingo: 120
      },
      englishExemption: "Completed 2 English Composition courses with grade of C- or higher",
      note: "Verified: Computer Science is a CMNS Limited Enrollment Program (LEP). Requirements cross-referenced with the official UMD LEP Computer Science page (https://lep.umd.edu/computerscience.html).",
      sourceFile: "database-expansion-agent",
      confidence: "verified"
    };
    umd.majors.push(umdCS);
    console.log("➕ Successfully added Computer Science to University of Maryland!");
  } else {
    console.log("ℹ️ Computer Science already exists for UMD.");
  }
}

// 2. Add CS to Rutgers
const rutgers = transferDatabase.schools.find(s => s.name === "Rutgers University");
if (rutgers) {
  const hasCS = rutgers.majors.some(m => m.name === "Computer Science");
  if (!hasCS) {
    const rutgersCS = {
      id: "rutgers-university-computer-science-c8901d23",
      name: "Computer Science",
      rawMinGpa: "2.75 minimum cumulative GPA for external SAS transfers, and grade of C or better in prerequisite courses",
      rawMinCredits: "At least 24 college-level academic credits completed",
      minGpa: 2.75,
      minCredits: 24,
      requiredCourses: [
        "CS 111 - Introduction to Computer Science (grade of C or better)",
        "CS 112 - Data Structures (grade of C or better)",
        "MATH 151 - Calculus I for Physical Sciences (grade of C or better)",
        "MATH 152 - Calculus II for Physical Sciences (grade of C or better)"
      ],
      recommendedCourses: [],
      rawRequired: "CS 111 - Introduction to Computer Science (grade of C or better)\nCS 112 - Data Structures (grade of C or better)\nMATH 151 - Calculus I for Physical Sciences (grade of C or better)\nMATH 152 - Calculus II for Physical Sciences (grade of C or better)",
      rawRecommended: "",
      english: {
        raw: "TOEFL iBT: 79 minimum, IELTS Academic: 6.5 minimum, Duolingo: 115 minimum",
        TOEFL: 79,
        TOEFL_2026: null,
        IELTS: 6.5,
        Duolingo: 115
      },
      englishExemption: "Completed English Composition I & II with grades of B or higher",
      note: "Verified: Computer Science major declaration requirements cross-referenced with the official Rutgers School of Arts and Sciences (SAS) Computer Science curriculum guidelines (https://www.cs.rutgers.edu/academics/undergraduate/admission-to-the-major).",
      sourceFile: "database-expansion-agent",
      confidence: "verified"
    };
    rutgers.majors.push(rutgersCS);
    console.log("➕ Successfully added Computer Science to Rutgers University!");
  } else {
    console.log("ℹ️ Computer Science already exists for Rutgers.");
  }
}

// Write back to disk
const outputContent = `window.transferDatabase = ${JSON.stringify(transferDatabase, null, 2)};\n`;
fs.writeFileSync(dbPath, outputContent, 'utf8');
console.log("💾 Database successfully updated and written!");
