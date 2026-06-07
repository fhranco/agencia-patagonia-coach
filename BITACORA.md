# 🏔️ Bitácora de Evolución: PatagoniaCoach

Este archivo sirve como memoria central para el desarrollo del ecosistema digital de **PatagoniaCoach**.
Si la sesión del asistente se reinicia, este es el primer archivo que debe leerse para retomar el contexto.

---

## 📅 Estado Actual: 5 de Junio, 2026

## Cambio 1: SEO Overhaul

**Objetivo:** Migrar SEO de cliente-side (DOM manual) a `react-helmet-async` + prerrenderizado estático.

### Archivos creados:
- `src/seo/config.js` — Metadatos centralizados (title, description, canonical) para 20 rutas
- `scripts/prerender.mjs` — Inyecta meta tags en HTML estático de cada ruta post-build
- `scripts/generate-sitemap.mjs` — Genera `sitemap.xml` dinámico

### Archivos modificados:
- `src/components/SEO.jsx` → Usa `<Helmet>` de `react-helmet-async`
- `src/App.jsx` → Envuelto con `<HelmetProvider>`
- `package.json` → Scripts `postbuild` y `deploy`
- `.github/workflows/deploy.yml` → Paso `npm run postbuild`

### Pipeline:
```
npm run build  → 10s (2203 módulos, 751KB JS + 67KB CSS)
npm run postbuild  → 20 rutas prerenderizadas + sitemap
npm run deploy  → build + postbuild automático
```

---

## Cambio 2: Seguridad — Secretos

**Problema:** API keys de DeepSeek hardcodeadas en `public/chat.php` y `public/api/chat.php`.
Archivos PHP públicos → cualquiera podía leer las keys.

### Archivos creados:
- `public/secrets.example.php` — Plantilla con placeholders (COMMITEADO)

### Archivos modificados:
- `public/chat.php` → Keys desde `secrets.php` o `$_ENV`. Rechaza GET (solo POST).
- `public/api/chat.php` → Keys desde `secrets.php` o `$_ENV`.
- `public/.htaccess` → Bloquea acceso directo a `secrets.php` (403 Forbidden)
- `.gitignore` → Agregado `public/secrets.php` y `.env`
- `.github/workflows/deploy.yml` → Paso "Inject secrets" genera `secrets.php` desde GitHub Secrets

### Capas de seguridad:
1. `secrets.php` está en `.gitignore` → nunca se sube al repo
2. CI/CD lo genera desde GitHub Secrets durante el build
3. `.htaccess` bloquea acceso HTTP directo a `secrets.php`
4. Fallback a `$_ENV` si no existe el archivo

### Configurar GitHub Secrets:
Settings → Secrets and variables → Actions → New repository secret:
- `DEEPSEEK_KEY_CHAT`: la key de `chat.php`
- `DEEPSEEK_KEY_API`: la key de `api/chat.php`

### Desarrollo local:
```bash
cp public/secrets.example.php public/secrets.php
# editar public/secrets.php con las keys reales
```

---

---

## Cambio 3: Code Splitting (lazy loading)

**Antes:** `index.js` 751 kB — todo el sitio en un solo bundle.
**Después:** `index.js` 449 kB (compartido) + chunks individuales por página (5-144 kB c/u).

### Cambios:
- `src/App.jsx` → Todas las páginas usan `React.lazy()` + `<Suspense>`
- `src/components/PageLoader.jsx` → Componente de carga minimalista (spinner gold sobre fondo negro)

### Impacto:
| Métrica | Antes | Después |
|---|---|---|
| Bundle inicial | 751 kB | 449 kB (-40%) |
| Build time | ~10s | ~5s |
| Carga por página | 751 kB siempre | 449 kB + 10-14 kB |

---

---

## Cambio 4: SEO Local — Datos Estructurados

**Antes:** Solo schema básico por página, sin breadcrumbs, sin FAQ schema, schemas de zona sin coordenadas locales.

**Después:**
- **BreadcrumbList** en TODAS las páginas (Inicio > Servicios > SEO Local Magallanes)
- **LocalBusiness** con coordenadas exactas en cada página de zona (Punta Arenas -53.1638, Puerto Natales -51.7269, etc.)
- **FAQPage** schema generado automáticamente donde hay preguntas frecuentes
- Fábrica de schemas centralizada en `src/seo/schemas.js`

### Archivos creados:
- `src/seo/schemas.js` — `breadcrumbSchema()`, `localBusinessSchema()`, `faqSchema()`, `serviceSchema()`, `ZONE_DATA`

### Archivos modificados:
- `src/components/SEO.jsx` → BreadcrumbList automático + soporte para múltiples schemas
- `src/pages/PageTemplate.jsx` → FAQ schema auto + `extraSchemas` prop
- `src/pages/ZonaPuntaArenas.jsx` → +LocalBusiness schema con coordenadas
- `src/pages/ZonaPuertoNatales.jsx` → +LocalBusiness schema con coordenadas
- `src/pages/ZonaTierraDelFuego.jsx` → +LocalBusiness schema con coordenadas
- `src/pages/ZonaMagallanes.jsx` → +LocalBusiness schema con coordenadas

---

## 📝 Próximos Pasos Sugeridos
1. [ ] Verificar en producción que meta tags y schemas se vean correctos  
2. [ ] Optimizar imágenes (WebP + lazy loading)
