const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'additions_batch3.json');
if (!fs.existsSync(filePath)) {
  console.error("❌ additions_batch3.json not found!");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

data.forEach(schoolData => {
  if (schoolData.school === "Boston University" || schoolData.school === "Arizona State University") {
    schoolData.majors.forEach(major => {
      if (major.requiredCourses.length === 0 && major.recommendedCourses.length > 0) {
        major.requiredCourses = [...major.recommendedCourses];
        console.log(`🔧 [${schoolData.school}] Copied recommended courses to requiredCourses for: ${major.name}`);
      }
    });
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log("💾 Successfully updated additions_batch3.json!");
