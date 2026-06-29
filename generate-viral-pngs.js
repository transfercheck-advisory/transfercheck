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

// Safe local temp folder
const tempOutputDir = path.join(__dirname, 'temp-pngs');
if (!fs.existsSync(tempOutputDir)) {
  fs.mkdirSync(tempOutputDir);
}

// Target destinations
const targetDesktops = [
  'C:\\Users\\user\\OneDrive\\바탕 화면',
  'C:\\Users\\user\\Desktop',
  'C:\\Users\\user\\OneDrive\\Desktop',
  path.join(__dirname, 'final-instagram-pngs') // Project copy
];

// Ensure project output folder exists
const projFinalDir = path.join(__dirname, 'final-instagram-pngs');
if (!fs.existsSync(projFinalDir)) {
  fs.mkdirSync(projFinalDir);
}

if (!fs.existsSync(inputDir)) {
  console.error("card-news-viral directory not found!");
  process.exit(1);
}

// Bake all 32 files (Ko + En)
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.svg') && (f.includes('Ko_') || f.includes('New_')));
console.log(`\nFound ${files.length} viral cards (Ko + En) to bake into PNGs.`);
console.log(`Google Chrome: ${chromePath}\n`);

files.forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputName = file.replace('.svg', '.png');
  const tempPngPath = path.join(tempOutputDir, outputName);
  
  try {
    const formattedInputUrl = `file:///${inputPath.replace(/\\/g, '/')}`;
    
    // Bake PNG inside the local temp dir (handles spaces without issues)
    const cmd = `"${chromePath}" --headless --disable-gpu --screenshot="${tempPngPath}" --window-size=1080,1080 --default-background-color=00000000 --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=6000 "${formattedInputUrl}"`;
    execSync(cmd, { stdio: 'ignore' });
    
    // Propagate to all target desktop/project folders using Native Node Copy
    if (fs.existsSync(tempPngPath)) {
      targetDesktops.forEach(desktop => {
        if (fs.existsSync(desktop)) {
          const finalDest = path.join(desktop, outputName);
          fs.copyFileSync(tempPngPath, finalDest);
        }
      });
      console.log(`✓ Baked & Distributed: ${outputName}`);
    }
  } catch (e) {
    console.error(`✗ Failed to convert ${file}:`, e.message);
  }
});

console.log("\n==================================================");
console.log(`Success! All ${files.length} slides have been cleanly baked as PNGs!`);
console.log("- Korean version: Ko_Part1_Slide1.png ~ Ko_Part3_Slide5.png");
console.log("- English version: New_Part1_Slide1.png ~ New_Part3_Slide5.png");
console.log("- Project Folder: transfer app/final-instagram-pngs/");
console.log("==================================================");
