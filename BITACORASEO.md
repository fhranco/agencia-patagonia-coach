# BITÁCORA SEO — PatagoniaCoach

## 5 Junio 2026

### 1. SEO Engine: react-helmet-async + Prerrenderizado

**Problema original:** SEO 100% client-side (DOM manipulado manualmente en `useEffect`). Crawlers de Google, Facebook y WhatsApp no veían meta tags.

**Solución:**
- `react-helmet-async` reemplaza la manipulación manual del DOM
- `HelmetProvider` envuelve la app en `App.jsx`
- Script `scripts/prerender.mjs` que post-build inyecta meta tags correctas en HTML estático de cada ruta

**Archivos:**
- `src/components/SEO.jsx` → Reescribir con `<Helmet>`
- `src/App.jsx` → Envuelto con `HelmetProvider`
- `scripts/prerender.mjs` → Prerrenderizador estático
- `src/seo/config.js` → Metadatos centralizados (20 rutas)

**Resultado:** Facebook/Google/WhatsApp ahora ven OG tags, title y description en el HTML inicial.

---

### 2. Sitemap Dinámico

**Problema:** `sitemap.xml` estático con `lastmod` hardcodeado a 2026-05-01.

**Solución:** Script `scripts/generate-sitemap.mjs` que genera sitemap con URLs, prioridades y fecha actual.

**Archivos:**
- `scripts/generate-sitemap.mjs` → Generador automático
- `package.json` → Script `postbuild` que ejecuta prerender + sitemap

---

### 3. Code Splitting (Lazy Loading)

**Problema:** Single bundle de 751 kB cargado en cada página.

**Solución:** `React.lazy()` + `<Suspense>` en todas las rutas.

**Archivo modificado:** `src/App.jsx`

**Resultado:**
| Métrica | Antes | Después |
|---|---|---|
| Bundle inicial | 751 kB | 449 kB (-40%) |
| Build time | ~10s | ~4s |
| Carga por página | 751 kB | 449 kB + ~10-14 kB |

---

### 4. Datos Estructurados (JSON-LD)

**Problema:** Schema mínimo por página, sin breadcrumbs, sin FAQ schema, zonas sin coordenadas locales.

**Solución:** Fábrica de schemas centralizada + inyección automática.

**Archivos:**
- `src/seo/schemas.js` → `breadcrumbSchema()`, `localBusinessSchema()`, `faqSchema()`, `serviceSchema()`, `ZONE_DATA`
- `src/components/SEO.jsx` → BreadcrumbList automático en cada página
- `src/pages/PageTemplate.jsx` → FAQ schema auto-generado
- Todas las páginas de zona → +LocalBusiness con coordenadas exactas

**Schemas implementados por página:**
- BreadcrumbList (Inicio > Servicios > SEO Local Magallanes)
- LocalBusiness con geo (Punta Arenas: -53.1638, -70.9171)
- Service / WebPage con provider reference
- FAQPage donde hay preguntas frecuentes

---

### 5. Optimización para LLMs (llms.txt)

**Archivos:**
- `public/llms.txt` → Resumen estructurado con enlaces a servicios + zonas
- `public/llms-full.txt` → Perfil corporativo completo
- `public/robots.txt` → Directivas `LLM-Text:` para ambos

**Formato:** Sigue el estándar llmstxt.org.

---

### Pipeline Completo

```
npm run build
  → vite build          (4s, 449 kB shared + chunks)
  → postbuild (automático)
    → prerender.mjs     (20 rutas con meta tags inyectadas)
    → generate-sitemap  (sitemap.xml con fecha actual)

npm run deploy
  → build + postbuild + CI push a Hostinger
```
