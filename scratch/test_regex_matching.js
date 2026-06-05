global.window = {};
require('../course-catalog.js');
require('../transfer-data.js');

const courseCatalog = window.courseCatalog;

function normalizeText(value) {
  return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

// Current matching logic
function currentPatternMatches(text, pattern) {
  const haystack = normalizeText(text);
  const needle = normalizeText(pattern);
  if (!needle) return false;
  if (pattern.startsWith('\\b')) {
    try {
      const regex = new RegExp(pattern, 'i');
      return regex.test(text);
    } catch(e) {
      return false;
    }
  }
  if (/\b[ivx]+$/i.test(needle)) {
    return new RegExp(`(^|\\W)${needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\W|$)`, "i").test(haystack);
  }
  return haystack.includes(needle);
}

// Proposed matching logic with ASCII word boundaries
function proposedPatternMatches(text, pattern) {
  if (!pattern) return false;
  if (pattern.startsWith('\\b')) {
    try {
      const regex = new RegExp(pattern, 'i');
      return regex.test(text);
    } catch(e) {
      return false;
    }
  }
  const haystack = normalizeText(text);
  const needle = normalizeText(pattern);
  const escapedNeedle = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  
  let regexStr = escapedNeedle;
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

function getMatches(requiredCourses, matchFn) {
  const allMatches = [];
  requiredCourses.forEach(rc => {
    const matches = courseCatalog.filter((course) => course.patterns.some((pattern) => matchFn(rc, pattern)));
    matches.forEach(m => {
      if (!allMatches.includes(m.id)) allMatches.push(m.id);
    });
  });
  return allMatches;
}

// Scan database and compare
let diffs = [];
window.transferDatabase.schools.forEach(school => {
  school.majors.forEach(major => {
    const currentList = getMatches(major.requiredCourses || [], currentPatternMatches);
    const proposedList = getMatches(major.requiredCourses || [], proposedPatternMatches);
    
    // Check if they are different
    const currentStr = currentList.sort().join(',');
    const proposedStr = proposedList.sort().join(',');
    if (currentStr !== proposedStr) {
      diffs.push({
        school: school.name,
        major: major.name,
        current: currentList,
        proposed: proposedList
      });
    }
  });
});

console.log(`Found ${diffs.length} differences in program requirements between current and proposed matching logic:\n`);
diffs.forEach(d => {
  console.log(`School: ${d.school} | Major: ${d.major}`);
  console.log(`  Current :`, d.current);
  console.log(`  Proposed:`, d.proposed);
  console.log();
});
