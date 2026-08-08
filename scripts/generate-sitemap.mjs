import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEO_CONFIG } from '../src/seo/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

console.log('--- STARTING SITEMAP GENERATION PIPELINE ---');

const currentDate = new Date().toISOString().split('T')[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

const REDIRECT_ROUTES = new Set(['/ia', '/marketing', '/consultoria', '/academia']);

for (const [route, config] of Object.entries(SEO_CONFIG)) {
  if (REDIRECT_ROUTES.has(route) || config.redirect) {
    continue;
  }

  const cleanRoute = route === "/" ? "" : route.replace(/\/$/, "");
  const url = `https://agenciapatagoniacoach.cl${cleanRoute}`;
  
  let priority = "0.8";
  let changefreq = "weekly";
  
  if (route === "/") {
    priority = "1.0";
    changefreq = "daily";
  } else if (route.startsWith("/zonas/")) {
    priority = "0.7";
  }
  
  sitemapXml += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

sitemapXml += '\n</urlset>';

// Write to dist/sitemap.xml (for deployment)
if (fs.existsSync(DIST_DIR)) {
  const distPath = path.join(DIST_DIR, 'sitemap.xml');
  fs.writeFileSync(distPath, sitemapXml, 'utf-8');
  console.log(`[SUCCESS] Sitemap written to output folder: ${distPath}`);
} else {
  console.log(`[NOTE] Output folder ${DIST_DIR} does not exist yet. Will only persist to public/ folder.`);
}

// Write to public/sitemap.xml (for source sync)
const publicPath = path.join(PUBLIC_DIR, 'sitemap.xml');
fs.writeFileSync(publicPath, sitemapXml, 'utf-8');
console.log(`[SUCCESS] Sitemap written to source folder: ${publicPath}`);

console.log('--------------------------------------------');
