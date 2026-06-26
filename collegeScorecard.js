// collegeScorecard.js - fetches data from US Dept. of Education College Scorecard API
// Provides in‑memory caching to avoid duplicate network calls.
// Exported functions: fetchSchoolData(name) → async, returns normalized data and caches it;
// getCachedSchoolData(name) → sync, returns cached data if present.

// Expect API key in environment variable COLLEGE_SCORECARD_API_KEY.
const API_KEY = process.env.COLLEGE_SCORECARD_API_KEY || "YOUR_API_KEY_HERE";

// Simple in‑memory cache: Map<lowercaseSchoolName, normalizedData>
const cache = new Map();

/**
 * Convert raw API result to shape required by our app.
 */
function normalize(raw) {
  return {
    name: raw.school?.name || null,
    id: raw.id || null,
    // Use average SAT as a proxy for GPA if present.
    avgSat: raw.latest?.admissions?.sat_scores?.average || null,
    admissionRate: raw.latest?.admissions?.admission_rate || null,
    tuition: raw.latest?.cost?.tuition_out_of_state || null,
    // CIP code (4‑digit) for program classification, e.g., 11 = Computer Science.
    cipCode: raw.latest?.programs?.cip_4_digit || null,
    // Placeholder for English requirement – may be inferred later.
    englishRequirement: null
  };
}

/**
 * Async fetch – stores result in cache.
 * @param {string} schoolName
 * @returns {Promise<Object|null>} normalized data or null on error.
 */
async function fetchSchoolData(schoolName) {
  if (!API_KEY || API_KEY === "YOUR_API_KEY_HERE") {
    console.warn("College Scorecard API key missing – request will fail.");
    return null;
  }
  const url = `https://api.data.gov/ed/collegescorecard/v1/schools?school.name=${encodeURIComponent(schoolName)}&api_key=${API_KEY}&per_page=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Scorecard API error ${res.status}`);
      return null;
    }
    const json = await res.json();
    if (!json.results || json.results.length === 0) return null;
    const data = normalize(json.results[0]);
    cache.set(schoolName.toLowerCase(), data);
    return data;
  } catch (e) {
    console.error('Scorecard fetch exception', e);
    return null;
  }
}

/**
 * Return cached data synchronously if available.
 */
function getCachedSchoolData(schoolName) {
  return cache.get(schoolName.toLowerCase()) || null;
}

module.exports = { fetchSchoolData, getCachedSchoolData };
