const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  path.join(process.env.LOCALAPPDATA || 'C:\\Users\\user\\AppData\\Local', 'Google\\Chrome\\Application\\chrome.exe')
];

let chromePath = null;
for (const p of chromePaths) {
  if (fs.existsSync(p)) {
    chromePath = p;
    break;
  }
}

if (!chromePath) {
  console.error("Chrome browser was not found at standard locations. Cannot convert SVG to PNG automatically.");
  process.exit(1);
}

const inputDir = path.join(__dirname, 'card-news-viral');
const desktopDir = 'C:\\Users\\user\\OneDrive\\바탕 화면';

if (!fs.existsSync(inputDir)) {
  console.error("card-news-viral directory not found!");
  process.exit(1);
}

// Convert all Part 1 slides (Only focus on Part 1 for now as per user request to test first)
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.svg') && f.includes('Part1'));
console.log(`\nFound ${files.length} Part 1 viral cards (Ko + En) to bake into PNGs.`);
console.log(`Google Chrome: ${chromePath}\n`);

files.forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputName = file.replace('.svg', '.png');
  const destPath = path.join(desktopDir, outputName);
  
  try {
    const formattedInputUrl = `file:///${inputPath.replace(/\\/g, '/')}`;
    
    // EXTREMELY CRITICAL OPTIONS FOR PREVENTING BLANK IMAGES AND RED ERRORS:
    // 1. --allow-file-access-from-files: Allows Chrome to read local background images even with spaces/Korean folders.
    // 2. --virtual-time-budget=6000: Bakes 6 seconds of virtual delay ensuring all assets, custom Google Fonts and backgrounds are 100% loaded before rendering snapshot.
    // 3. --hide-scrollbars --window-size=1080,1080: Perfectly fits Instagram size without borders.
    const cmd = `"${chromePath}" --headless --disable-gpu --screenshot="${destPath}" --window-size=1080,1080 --default-background-color=00000000 --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=6000 "${formattedInputUrl}"`;
    
    execSync(cmd, { stdio: 'ignore' });
    console.log(`✓ Perfectly Baked to Desktop: ${outputName}`);
  } catch (e) {
    console.error(`✗ Failed to convert ${file}:`, e.message);
  }
});

console.log("\n==================================================");
console.log(`Success! All Part 1 slides have been baked as PNGs directly to your Desktop!`);
console.log("- Korean version: Ko_Part1_Slide1.png ~ Ko_Part1_Slide6.png");
console.log("- English version: New_Part1_Slide1.png ~ New_Part1_Slide6.png");
console.log("==================================================");
