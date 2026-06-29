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

// Temporary folder in project (no spaces/Korean encoding issues during Chrome execution)
const tempOutputDir = path.join(__dirname, 'temp-pngs');
if (!fs.existsSync(tempOutputDir)) {
  fs.mkdirSync(tempOutputDir);
}

// Target Desktop locations to copy final PNGs (covers both OneDrive and standard local desktop)
const targetDesktops = [
  'C:\\Users\\user\\OneDrive\\바탕 화면',
  'C:\\Users\\user\\Desktop',
  'C:\\Users\\user\\OneDrive\\Desktop'
];

if (!fs.existsSync(inputDir)) {
  console.error("card-news-viral directory not found!");
  process.exit(1);
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.svg') && f.includes('Part1'));
console.log(`\nFound ${files.length} Part 1 viral cards (Ko + En) to bake into PNGs.`);
console.log(`Google Chrome: ${chromePath}\n`);

files.forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputName = file.replace('.svg', '.png');
  
  // 1. Bake inside the safe temporary project path first (avoids Chrome CLI space parsing bugs)
  const tempPngPath = path.join(tempOutputDir, outputName);
  
  try {
    const formattedInputUrl = `file:///${inputPath.replace(/\\/g, '/')}`;
    const cmd = `"${chromePath}" --headless --disable-gpu --screenshot="${tempPngPath}" --window-size=1080,1080 --default-background-color=00000000 --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=6000 "${formattedInputUrl}"`;
    
    execSync(cmd, { stdio: 'ignore' });
    
    // 2. If successfully baked, copy via Node native fs (safely handles Korean and spaces) to all desktop paths
    if (fs.existsSync(tempPngPath)) {
      targetDesktops.forEach(desktop => {
        if (fs.existsSync(desktop)) {
          const finalDest = path.join(desktop, outputName);
          fs.copyFileSync(tempPngPath, finalDest);
          console.log(`✓ Copied to Desktop [${path.basename(desktop)}]: ${outputName}`);
        }
      });
    }
  } catch (e) {
    console.error(`✗ Failed to convert ${file}:`, e.message);
  }
});

console.log("\n==================================================");
console.log(`Success! All Part 1 slides have been baked as PNGs directly to your Desktop!`);
console.log("- Korean version: Ko_Part1_Slide1.png ~ Ko_Part1_Slide6.png");
console.log("- English version: New_Part1_Slide1.png ~ New_Part1_Slide6.png");
console.log("==================================================");
