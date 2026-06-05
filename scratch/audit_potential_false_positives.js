const fs = require('fs');
const path = require('path');
const vm = require('vm');

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

database.schools.forEach(school => {
  school.majors.forEach(major => {
    const rawReqs = major.requiredCourses || [];
    rawReqs.forEach(raw => {
      const matches = canonicalMatches(raw);
      if (matches.length > 0) {
        // If it starts with non-alphabetic characters like ※, 【, [출처, etc.
        // or contains "전공", "공식", "출처", "학부", "concentration"
        const isDescriptive = /^[※【\[\-\s]/.test(raw) || 
                              raw.includes("전공") || 
                              raw.includes("공식") || 
                              raw.includes("출처") || 
                              raw.includes("학부") || 
                              raw.includes("concentration") ||
                              raw.includes("합격") ||
                              raw.includes("지원") ||
                              raw.includes("이수");
        if (isDescriptive) {
          // Let's filter out known good course lines that happen to have these characters, e.g. "- Calculus I" or "[Calculus I]"
          // but print out the suspicious ones
          const isProbablyRealCourse = /Calculus|Physics|Chemistry|Programming|Biology|English|Composition|Writing|Math/i.test(raw) && !raw.includes("전공") && !raw.includes("학부") && !raw.includes("concentration") && !raw.includes("공식");
          if (!isProbablyRealCourse) {
            console.log(`SUSPICIOUS MATCH: School: ${school.name}, Major: ${major.name}`);
            console.log(`  Raw: "${raw}"`);
            console.log(`  Matched catalog course: ${matches.map(m => m.name).join(', ')}`);
          }
        }
      }
    });
  });
});
