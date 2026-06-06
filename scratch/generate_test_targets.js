const fs = require('fs');
const path = require('path');

// Mock window to load transfer-data.js in Node
global.window = {};
require('../transfer-data.js');

const db = global.window.transferDatabase;
console.log(`Loaded ${db.schoolCount} schools and ${db.programCount} programs.`);

// Extract all available majors per school
const allPrograms = [];
db.schools.forEach(school => {
  school.majors.forEach(major => {
    allPrograms.push({
      schoolId: school.id,
      schoolName: school.name,
      majorId: major.id,
      majorName: major.name,
      minGpa: major.minGpa,
      minCredits: major.minCredits,
      note: major.note
    });
  });
});

console.log(`Total parsed programs: ${allPrograms.length}`);

// We need 100 unique combinations (10 rounds * 10 targets).
// If there are less than 100, we'll use all of them.
// Let's shuffle and pick 100.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffled = shuffle([...allPrograms]);
const selected = shuffled.slice(0, Math.min(100, shuffled.length));

console.log(`Selected ${selected.length} programs for testing.`);

// Group into 10 rounds of 10
const rounds = [];
for (let i = 0; i < 10; i++) {
  rounds.push(selected.slice(i * 10, (i + 1) * 10));
}

fs.writeFileSync(
  path.join(__dirname, 'test_rounds.json'),
  JSON.stringify(rounds, null, 2),
  'utf-8'
);
console.log('Saved test rounds to scratch/test_rounds.json');
