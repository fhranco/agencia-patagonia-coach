import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEO_CONFIG } from '../src/seo/config.js';
import {
  localBusinessSchema,
  breadcrumbSchema,
  serviceSchema
} from '../src/seo/schemas.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

console.log('--- STARTING STATIC PRERENDER PIPELINE ---');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error(`[ERROR] Vite bundle index.html not found at ${TEMPLATE_PATH}. Please compile first.`);
  process.exit(1);
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

// Strip template of default metadata and script schemas to prevent duplication
function cleanTemplate(html) {
  let cleaned = html;
  
  // Remove title
  cleaned = cleaned.replace(/<title>[^]*?<\/title>/gi, '');
  // Remove description & keywords
  cleaned = cleaned.replace(/<meta\s+name="description"\s+content="[^]*?"\s*\/?>/gi, '');
  cleaned = cleaned.replace(/<meta\s+name="keywords"\s+content="[^]*?"\s*\/?>/gi, '');
  cleaned = cleaned.replace(/<meta\s+name="author"\s+content="[^]*?"\s*\/?>/gi, '');
  // Remove Open Graph tags
  cleaned = cleaned.replace(/<meta\s+property="og:[^"]+"\s+content="[^]*?"\s*\/?>/gi, '');
  // Remove Twitter tags
  cleaned = cleaned.replace(/<meta\s+name="twitter:[^"]+"\s+content="[^]*?"\s*\/?>/gi, '');
  // Remove canonical
  cleaned = cleaned.replace(/<link\s+rel="canonical"\s+href="[^]*?"\s*\/?>/gi, '');
  // Remove default ld+json scripts
  cleaned = cleaned.replace(/<script\s+type="application\/ld\+json"[^]*?>[^]*?<\/script>/gi, '');
  
  return cleaned;
}

const cleanedTemplate = cleanTemplate(template);

let prerenderCount = 0;

for (const [route, config] of Object.entries(SEO_CONFIG)) {
  const title = config.title;
  const description = config.description;
  const cleanRoute = route === "/" ? "" : route.replace(/\/$/, "");
  const canonicalUrl = `https://agenciapatagoniacoach.cl${cleanRoute}`;
  const defaultImage = 'https://agenciapatagoniacoach.cl/portafolio-web.png';
  
  const schemasToInject = [];
  
  // 1. Breadcrumbs
  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    schemasToInject.push(breadcrumbSchema(config.breadcrumbs));
  }
  
  // 2. Component/Location Schemas
  if (config.schemaType === "LocalBusiness") {
    schemasToInject.push(localBusinessSchema(config.zone));
  } else if (config.schemaType === "Service") {
    schemasToInject.push(
      serviceSchema({
        name: title.split("|")[0].trim(),
        description: description,
        category: config.category
      })
    );
  }
  
  // Construct new meta elements
  let headTags = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${defaultImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${defaultImage}" />`;
  
  // Add schemas
  schemasToInject.forEach(schemaObj => {
    headTags += `\n    <script type="application/ld+json">${JSON.stringify(schemaObj)}</script>`;
  });
  
  // Inject into index.html head
  const finalHtml = cleanedTemplate.replace('</head>', `${headTags}\n  </head>`);
  
  // Determine output location
  let targetPath;
  if (route === "/") {
    targetPath = TEMPLATE_PATH; // Update root HTML
  } else {
    // Strip leading slash for path directory resolution
    const routeFolder = route.startsWith('/') ? route.substring(1) : route;
    const targetDir = path.join(DIST_DIR, routeFolder);
    
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    targetPath = path.join(targetDir, 'index.html');
  }
  
  fs.writeFileSync(targetPath, finalHtml, 'utf-8');
  prerenderCount++;
}

console.log(`[SUCCESS] Prerendered ${prerenderCount} routes successfully.`);
console.log('-------------------------------------------');
