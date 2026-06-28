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

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.svg'));
console.log(`\nFound ${files.length} viral cards to bake into PNGs.`);
console.log(`Google Chrome: ${chromePath}\n`);

files.forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputName = file.replace('.svg', '.png');
  const destPath = path.join(desktopDir, outputName);
  
  try {
    const formattedInputUrl = `file:///${inputPath.replace(/\\/g, '/')}`;
    const cmd = `"${chromePath}" --headless --disable-gpu --screenshot="${destPath}" --window-size=1080,1080 --default-background-color=00000000 --hide-scrollbars "${formattedInputUrl}"`;
    
    execSync(cmd, { stdio: 'ignore' });
    console.log(`✓ Generated & Saved to Desktop: ${outputName}`);
  } catch (e) {
    console.error(`✗ Failed to convert ${file}:`, e.message);
  }
});

console.log("\n==================================================");
console.log(`Success! All ${files.length} slides have been saved directly to your Desktop!`);
console.log("You can now transfer these PNGs to your phone and upload to Instagram!");
console.log("==================================================");
