const fs = require('fs');
const path = require('path');

async function generateCatalog() {
  console.log("Reading transfer-data.js...");
  const rawDataPath = path.join(__dirname, '..', 'transfer-data.js');
  let rawContent = fs.readFileSync(rawDataPath, 'utf8').trim();
  
  if (rawContent.startsWith("window.transferDatabase = ")) {
    rawContent = rawContent.substring("window.transferDatabase = ".length);
  }
  if (rawContent.endsWith(";")) {
    rawContent = rawContent.substring(0, rawContent.length - 1);
  }
  
  console.log("Parsing database JSON...");
  const db = JSON.parse(rawContent);
  
  console.log("Extracting lightweight catalog index...");
  const lightweightSchools = db.schools.map(school => {
    return {
      id: school.id,
      name: school.name,
      shortName: school.shortName || school.name,
      majors: school.majors.map(major => {
        return {
          id: major.id,
          name: major.name,
          confidence: major.confidence
        };
      })
    };
  });
  
  const catalogDatabase = {
    sourceFiles: db.sourceFiles,
    schoolCount: db.schools.length,
    programCount: db.programCount,
    schools: lightweightSchools
  };
  
  const outputPath = path.join(__dirname, '..', 'course-catalog.js');
  
  // Read historic-course-catalog.js which has window.courseCatalog
  const historicPath = path.join(__dirname, 'historic-course-catalog.js');
  const historicContent = fs.readFileSync(historicPath, 'utf8').trim();
  
  const outputContent = `${historicContent}\n\nwindow.transferDatabase = ${JSON.stringify(catalogDatabase, null, 2)};\n`;
  
  fs.writeFileSync(outputPath, outputContent, 'utf8');
  console.log(`Successfully generated lightweight course-catalog.js! size: ${Math.round(outputContent.length / 1024)} KB`);
}

generateCatalog().catch(e => console.error("Catalog generation failed:", e));
