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

const harvard = database.schools.find(s => s.id.includes('harvard'));
if (harvard) {
  console.log("Harvard majors:", harvard.majors.length);
  harvard.majors.forEach(major => {
    console.log(`Major: ${major.name}`);
    major.requiredCourses.forEach(raw => {
      const matches = canonicalMatches(raw);
      if (matches.length > 0) {
        console.log(`  Raw: "${raw}"`);
        console.log(`  Matches: ${matches.map(m => m.id).join(', ')}`);
      }
    });
  });
} else {
  console.log("Harvard not found in database");
}
