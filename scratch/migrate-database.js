const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  lines.forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim();
      process.env[key] = val;
    }
  });
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("Error: Supabase configurations are missing in .env.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false }
});

async function runMigration() {
  console.log("Reading transfer-data.js...");
  const rawDataPath = path.join(__dirname, '..', 'transfer-data.js');
  let rawContent = fs.readFileSync(rawDataPath, 'utf8').trim();
  
  // Strip window.transferDatabase = and trailing semicolon
  if (rawContent.startsWith("window.transferDatabase = ")) {
    rawContent = rawContent.substring("window.transferDatabase = ".length);
  }
  if (rawContent.endsWith(";")) {
    rawContent = rawContent.substring(0, rawContent.length - 1);
  }
  
  console.log("Parsing database JSON...");
  const db = JSON.parse(rawContent);
  console.log(`Loaded ${db.schools.length} schools and ${db.programCount} majors.`);
  
  const schoolsData = [];
  const majorsData = [];
  
  db.schools.forEach(school => {
    schoolsData.push({
      id: school.id,
      name: school.name,
      short_name: school.shortName || school.name
    });
    
    school.majors.forEach(major => {
      majorsData.push({
        id: major.id,
        school_id: school.id,
        name: major.name,
        min_gpa: major.minGpa === null ? null : parseFloat(major.minGpa),
        raw_min_gpa: major.rawMinGpa || null,
        min_credits: major.minCredits === null ? null : parseInt(major.minCredits, 10),
        raw_min_credits: major.rawMinCredits || null,
        required_courses: major.requiredCourses || [],
        recommended_courses: major.recommendedCourses || [],
        raw_required: major.rawRequired || null,
        raw_recommended: major.rawRecommended || null,
        english_reqs: major.english || {},
        english_exemption: major.englishExemption || null,
        note: major.note || null,
        source_file: major.sourceFile || null,
        confidence: major.confidence || null,
        raw_official_text: major.rawOfficialText || null,
        official_source_url: major.officialSourceUrl || null
      });
    });
  });
  
  console.log(`Pushing ${schoolsData.length} schools to Supabase...`);
  const { error: schoolError } = await supabase.from('schools').upsert(schoolsData);
  if (schoolError) {
    console.error("Failed to upsert schools:", schoolError);
    return;
  }
  console.log("Schools successfully uploaded!");
  
  // Upload majors in batches of 100
  const batchSize = 100;
  console.log(`Pushing ${majorsData.length} majors in batches of ${batchSize}...`);
  for (let i = 0; i < majorsData.length; i += batchSize) {
    const batch = majorsData.slice(i, i + batchSize);
    const { error: majorError } = await supabase.from('majors').upsert(batch);
    if (majorError) {
      console.error(`Failed to upsert batch starting at index ${i}:`, majorError);
      return;
    }
    console.log(`Uploaded majors ${i + 1} to ${Math.min(i + batchSize, majorsData.length)}`);
  }
  
  console.log("Migration completed successfully!");
}

runMigration().catch(e => console.error("Migration failed:", e));
