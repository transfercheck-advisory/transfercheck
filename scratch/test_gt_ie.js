global.window = {};
require('../course-catalog.js');
require('../transfer-data.js');

const courseCatalog = window.courseCatalog;

function normalizeText(value) {
  return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function patternMatches(text, pattern) {
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

function canonicalMatches(rawCourse) {
  const matches = courseCatalog.filter((course) => course.patterns.some((pattern) => patternMatches(rawCourse, pattern)));
  const byId = new Map(matches.map((course) => [course.id, course]));
  return [...byId.values()];
}

const gt = window.transferDatabase.schools.find(s => s.name.includes('Georgia') || s.shortName === 'GT');
const ie = gt.majors.find(m => m.name.includes('Industrial'));

console.log('GT IE requiredCourses matching:');
ie.requiredCourses.forEach(rc => {
  const matches = canonicalMatches(rc);
  console.log('-', rc, 'matches:', matches.map(m => `${m.id} (${m.name})`));
});
