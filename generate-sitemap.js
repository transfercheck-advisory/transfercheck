const fs = require('fs');
const path = require('path');
const vm = require('vm');

// 1. Read transfer-stats.js
const statsPath = path.join(__dirname, 'transfer-stats.js');
if (!fs.existsSync(statsPath)) {
  console.error("transfer-stats.js not found!");
  process.exit(1);
}

const statsFileContent = fs.readFileSync(statsPath, 'utf8');
const statsSandbox = { window: {} };
vm.createContext(statsSandbox);
vm.runInContext(statsFileContent, statsSandbox);
const transferStats = statsSandbox.window.transferStats || {};
const schoolIds = Object.keys(transferStats);

console.log(`Found ${schoolIds.length} schools in transfer-stats.js`);

// 2. Generate sitemap XML content
const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

// Base Main Routes
const mainRoutes = [
  { loc: 'https://transfercheck.vercel.app/', priority: '1.0', changefreq: 'weekly' },
  { loc: 'https://transfercheck.vercel.app/?lang=en', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://transfercheck.vercel.app/?lang=ko', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://transfercheck.vercel.app/?lang=zh', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://transfercheck.vercel.app/terms-privacy-pricing.html', priority: '0.5', changefreq: 'monthly' }
];

// Add main routes
mainRoutes.forEach(r => {
  xml += '  <url>\n';
  xml += `    <loc>${r.loc}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${r.changefreq}</changefreq>\n`;
  xml += `    <priority>${r.priority}</priority>\n`;
  
  // Alternate hreflangs for main landing page
  if (r.loc.includes('transfercheck.vercel.app/') && !r.loc.includes('terms-privacy')) {
    xml += '    <xhtml:link rel="alternate" hreflang="en" href="https://transfercheck.vercel.app/?lang=en" />\n';
    xml += '    <xhtml:link rel="alternate" hreflang="ko" href="https://transfercheck.vercel.app/?lang=ko" />\n';
    xml += '    <xhtml:link rel="alternate" hreflang="zh" href="https://transfercheck.vercel.app/?lang=zh" />\n';
    xml += '    <xhtml:link rel="alternate" hreflang="x-default" href="https://transfercheck.vercel.app/?lang=en" />\n';
  }
  
  xml += '  </url>\n';
});

// Add school SSR routes
schoolIds.forEach(schoolId => {
  const schoolLoc = `https://transfercheck.vercel.app/schools/${schoolId}`;
  xml += '  <url>\n';
  xml += `    <loc>${schoolLoc}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += '    <priority>0.8</priority>\n';
  xml += '  </url>\n';
});

xml += '</urlset>\n';

// 3. Write to sitemap.xml
const sitemapPath = path.join(__dirname, 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`Successfully generated sitemap.xml with ${schoolIds.length} school pages!`);
