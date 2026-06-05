const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Load databases
const transferDataPath = path.join(__dirname, '..', 'transfer-data.js');
const fileContent = fs.readFileSync(transferDataPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fileContent, sandbox);
const database = sandbox.window.transferDatabase;

const catalogPath = path.join(__dirname, '..', 'course-catalog.js');
const catalogContent = fs.readFileSync(catalogPath, 'utf8');
const catalogSandbox = { window: {} };
vm.createContext(catalogSandbox);
vm.runInContext(catalogContent, catalogSandbox);
const courseCatalog = catalogSandbox.window.courseCatalog;

// Pattern matching function copied from app.js
function patternMatches(haystack, needle) {
  if (!haystack || !needle) return false;
  haystack = String(haystack).toLowerCase().trim();
  needle = String(needle).toLowerCase().trim();
  
  let regexStr = needle
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\\\*/g, '.*');
    
  if (/^[a-zA-Z0-9_]/.test(needle)) {
    regexStr = '\\b' + regexStr;
  }
  if (/[a-zA-Z0-9_]$/.test(needle)) {
    regexStr = regexStr + '\\b';
  }
  
  try {
    const regex = new RegExp(regexStr, 'i');
    return regex.test(haystack);
  } catch(e) {
    return haystack.includes(needle);
  }
}

function canonicalMatches(rawCourse) {
  const matches = courseCatalog.filter((course) => course.patterns.some((pattern) => patternMatches(rawCourse, pattern)));
  const byId = new Map(matches.map((course) => [course.id, course]));
  return [...byId.values()];
}

console.log(`Loaded ${database.schools.length} schools and ${courseCatalog.length} catalog courses.`);

database.schools.forEach(school => {
  let totalMajors = school.majors.length;
  let majorsWithZeroMapped = [];
  
  school.majors.forEach(major => {
    const rawReqs = major.requiredCourses || [];
    let mappedCount = 0;
    rawReqs.forEach(raw => {
      const matches = canonicalMatches(raw);
      if (matches.length > 0) {
        mappedCount += matches.length;
      }
    });
    if (mappedCount === 0) {
      majorsWithZeroMapped.push({
        name: major.name,
        rawReqs: rawReqs
      });
    }
  });

  if (majorsWithZeroMapped.length === totalMajors) {
    console.log(`\n[ALL MAJORS UNMAPPED (HOLISTIC)] ${school.name} (id: ${school.id})`);
    console.log(`  All ${totalMajors} majors have 0 mapped required courses.`);
    console.log(`  Example Major: ${school.majors[0].name}`);
    console.log(`  Raw Required Courses: ${JSON.stringify(school.majors[0].requiredCourses)}`);
  } else if (majorsWithZeroMapped.length > 0) {
    console.log(`\n[SOME MAJORS UNMAPPED] ${school.name} (id: ${school.id})`);
    console.log(`  ${majorsWithZeroMapped.length} / ${totalMajors} majors have 0 mapped required courses.`);
    console.log(`  Unmapped Majors: ${majorsWithZeroMapped.map(m => m.name).join(', ')}`);
  }
});
