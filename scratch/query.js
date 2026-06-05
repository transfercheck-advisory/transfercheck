const fs = require('fs');
const content = fs.readFileSync('transfer-data.js', 'utf8');
const window = {};
eval(content);
const database = window.database;

const stanford = database.schools.find(s => s.name.toLowerCase().includes('stanford'));
if (stanford) {
  console.log('=== Stanford ===');
  stanford.majors.forEach(m => {
    console.log(`- Major: ${m.name}`);
    console.log(`  Required Courses: ${JSON.stringify(m.requiredCourses)}`);
    console.log(`  Recommended Courses: ${JSON.stringify(m.recommendedCourses)}`);
  });
} else {
  console.log('Stanford not found');
}

console.log('\n=== Schools/Majors with empty required courses ===');
database.schools.forEach(s => {
  const emptyMajors = s.majors.filter(m => !m.requiredCourses || m.requiredCourses.length === 0);
  if (emptyMajors.length === s.majors.length) {
    console.log(`- School: ${s.name} (${s.shortName}) [All Majors have no prerequisites]`);
  } else if (emptyMajors.length > 0) {
    console.log(`- School: ${s.name} (${s.shortName}) [Some Majors: ${emptyMajors.map(m => m.name).join(', ')}]`);
  }
});
