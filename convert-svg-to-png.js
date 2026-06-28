const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find standard Chrome installation path on Windows
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

console.log("Found Google Chrome at:", chromePath);

// Target Directories containing SVGs
const inputDirs = [
  path.join(__dirname, 'card-news-viral'),
  path.join(__dirname, 'card-news'),
  path.join(__dirname, 'card-news-en')
];

// Create output folder for PNGs
const outputDir = path.join(__dirname, 'converted-pngs');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Also let's prepare to copy to user Desktop for instant access
const desktopDir = 'C:\\Users\\user\\OneDrive\\바탕 화면';

inputDirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
  console.log(`\nConverting ${files.length} SVG files from folder: ${path.basename(dir)}`);
  
  files.forEach(file => {
    const inputPath = path.join(dir, file);
    const outputName = file.replace('.svg', '.png');
    const outputPath = path.join(outputDir, outputName);
    
    // Command to capture 1080x1080 high-res screenshot using Headless Chrome
    // This perfectly bakes Google Fonts and CSS styles without external rendering package errors.
    try {
      const formattedInputUrl = `file:///${inputPath.replace(/\\/g, '/')}`;
      const cmd = `"${chromePath}" --headless --disable-gpu --screenshot="${outputPath}" --window-size=1080,1080 --default-background-color=00000000 --hide-scrollbars "${formattedInputUrl}"`;
      
      execSync(cmd, { stdio: 'ignore' });
      console.log(`✓ Converted: ${file} ➔ ${outputName}`);
      
      // If it is part of the 3-part viral series, copy directly to Desktop for quick access
      if (dir.includes('card-news-viral') && fs.existsSync(desktopDir)) {
        const destPath = path.join(desktopDir, outputName);
        fs.copyFileSync(outputPath, destPath);
      }
    } catch (e) {
      console.error(`✗ Failed to convert ${file}:`, e.message);
    }
  });
});

console.log("\n==================================================");
console.log(`Success! All SVG files have been baked into real PNG images.`);
console.log(`They are saved in: ${outputDir}`);
console.log(`Viral 3-part series PNGs are also copied to your Desktop for instant use!`);
console.log("==================================================");
