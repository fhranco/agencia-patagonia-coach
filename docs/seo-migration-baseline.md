# PATAGONIACOACH — AUDITORÍA Y LÍNEA BASE DE MIGRACIÓN SEO (FASE 0)
**Fecha:** Septiembre 2026  
**Documento Técnico:** docs/seo-migration-baseline.md  
**Dominio de Producción:** https://agenciapatagoniacoach.cl  
**Autor:** Dirección Técnica, Arquitectura Web y Especialista SEO  

---

## 1. RESUMEN EJECUTIVO Y OBJETIVO DE LA FASE 0

El presente documento establece la **fotografía técnica y de posicionamiento pre-migración** de PatagoniaCoach. 

El rediseño estratégico 2026 representa la transición desde un modelo de agencia de marketing digital generalista hacia una firma tecnológica especializada en tres grandes pilares comerciales de alto valor:
1. **Pilar 01 — Desarrollo:** Sitios corporativos y comerciales de alto rendimiento (pensados para vender, informar, posicionar y operar) y Aplicaciones Web a medida (sistemas internos, dashboards, portales, cotizadores, fidelización con puntos/QR y automatización con React/Next.js/Supabase/PostgreSQL).
2. **Pilar 02 — SEO:** SEO técnico, arquitectura web, Core Web Vitals, Schema estructurado, capacidad de desarrollo e implementación directa de soluciones en código, y SEO local enfocado en la Patagonia (Punta Arenas, Puerto Natales, Magallanes).
3. **Pilar 03 — Inteligencia Artificial:** Soluciones de IA aplicada a problemas de negocio, asistentes, agentes, procesamiento de documentos, automatización de flujos operativos (n8n/APIs), consultoría de procesos y Academia de formación in-house para empresas.

### Principio de Preservación Innegociable
> [!IMPORTANT]
> **REGLA CERO:** Si una URL existente funciona, está indexada y sigue siendo semánticamente válida, **SE CONSERVA**. No se cambian rutas por razones estéticas. Ninguna página se elimina sin análisis previo. No se realizan redirecciones masivas hacia la home. Todas las redirecciones deben tener equivalencia semántica estricta (1 salto directo, 301/308 permanente).

---

## 2. STACK TECNOLÓGICO, ARQUITECTURA Y DEPLOYMENT

### 2.1 Stack Técnico
* **Framework Frontend:** React 19.2.0 + Vite 7.3.1.
* **Enrutamiento:** React Router DOM 7.13.1 (Single Page Application con Code Splitting vía `React.lazy()` y `<Suspense>`).
* **Estilizado & Animaciones:** Tailwind CSS 3.4.17 + GSAP 3.14.2 + Framer Motion 12.34.5 + Lucide React.
* **Motor SEO:** `react-helmet-async` 3.0.0 + inyección dinámica de JSON-LD.
* **Pipeline de Prerrenderizado Estático (SSG Ligero):** `scripts/prerender.mjs` lee `dist/index.html` tras `vite build` e inyecta meta tags únicos (`<title>`, `<meta description>`, canonicals, OpenGraph, Twitter Cards y Schemas LD+JSON) en archivos estáticos generados en `dist/<ruta>/index.html` para todas las rutas configuradas en `src/seo/config.js`.
* **Pipeline de Sitemap:** `scripts/generate-sitemap.mjs` genera `sitemap.xml` dinámico con fecha actual, excluyendo rutas con redirección activa.
* **Procesamiento de Imágenes:** Sharp 0.34.5 (activos migrados a formato WebP optimizado al 82% de calidad).

### 2.2 Infraestructura y Despliegue en Producción
* **Hosting Productivo:** Servidor Apache en Hostinger.
* **Servidor Web / Reglas de Tráfico:** Archivo `public/.htaccess` en la raíz (mod_rewrite, cabeceras de seguridad HSTS/CSP/X-Frame-Options, 23 redirecciones 301, 16 reglas de código 410 Gone y fallback SPA `RewriteRule . /index.html [L]`).
* **Configuración Secundaria / Staging:** `netlify.toml` con configuración paralela de redirects, headers de seguridad y caché de activos.
* **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`):
  * Trigger: `push` a la rama `main`.
  * Etapas: Checkout -> Setup Node 22 -> `npm install` -> Inyección de secretos en `public/secrets.php` -> `npm run build` -> `npm run postbuild` (prerender + sitemap) -> Despliegue FTP automatizado vía `SamKirkland/FTP-Deploy-Action` a Hostinger.

---

## 3. AUDITORÍA DE INDEXACIÓN, SITEMAPS Y ROBOTS.TXT

### 3.1 Robots.txt Actual
Ubicación: `https://agenciapatagoniacoach.cl/robots.txt`
```txt
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

Sitemap: https://agenciapatagoniacoach.cl/sitemap.xml
```
* **Estado:** Totalmente permisivo e indexable para todos los motores de búsqueda principales y rastreadores de modelos de IA (OpenAI, Perplexity, GPTBot).
* **Directiva de Sitemap:** Correctamente apuntada a `https://agenciapatagoniacoach.cl/sitemap.xml`.
* **Requisito para Staging:** El entorno de staging DEBE configurar `User-agent: * \n Disallow: /` y `<meta name="robots" content="noindex, nofollow">` para evitar indexación de URLs temporales. NUNCA trasladar este bloqueo al entorno de producción.

### 3.2 Sitemap XML Actual
* **Ubicación:** `public/sitemap.xml` y `dist/sitemap.xml`.
* **Cantidad de URLs:** 23 URLs (100% canónicas, respuesta HTTP 200 OK limpia).
* **Filtro de URLs:** El generador `scripts/generate-sitemap.mjs` excluye explícitamente `REDIRECT_ROUTES = ['/ia', '/marketing', '/consultoria', '/academia']` para evitar la incidencia "Página con redirección" en Google Search Console.

---

## 4. INVENTARIO COMPLETO Y CLASIFICACIÓN DE URLs ACTUALES

A continuación se detalla la clasificación técnica del ecosistema actual:

### 4.1 URLs Públicas Indexables en Sitemap (23 URLs)
| # | URL Actual | Tipo de Contenido | Topic / Categoría | H1 Actual | Decisión Preliminar |
|---|---|---|---|---|---|
| 1 | `/` | Home | Portada Generalista | Transformación digital para empresas de Magallanes. | `UPDATE_CONTENT` |
| 2 | `/servicios/desarrollo-web` | Servicio Core | Pilar 1: Desarrollo Web | Servicio de Desarrollo Web Corporativo y Arquitectura Digital | `UPDATE_CONTENT` |
| 3 | `/servicios/aplicaciones-web-pro` | Servicio Core | Pilar 1: Apps Web & Software | Sistemas Vivos. | `UPDATE_CONTENT` |
| 4 | `/servicios/creacion-paginas-web-punta-arenas` | Landing Local B2B | Diseño Web Punta Arenas | Creación de páginas web profesionales en Punta Arenas | `REVIEW` / `MERGE` |
| 5 | `/servicios/seo-local-magallanes` | Servicio Core | Pilar 2: SEO Local / Técnico | Servicios de SEO Local y Posicionamiento Web en Punta Arenas y Magallanes | `UPDATE_CONTENT` |
| 6 | `/servicios/seo-local-punta-arenas` | Landing Local B2B | SEO Local Punta Arenas | SEO local y posicionamiento web en Punta Arenas | `REVIEW` |
| 7 | `/servicios/automatizacion-con-ia` | Servicio Core | Pilar 3: Soluciones e IA | Agencia de Inteligencia Artificial en Punta Arenas: Consultoría y Automatización | `UPDATE_CONTENT` |
| 8 | `/servicios/inteligencia-artificial-punta-arenas` | Landing Duplicada | IA Punta Arenas | Agencia de Inteligencia Artificial en Punta Arenas (duplicado IALanding) | `MERGE` (301) |
| 9 | `/servicios/automatizacion-ia-empresas` | Landing Local B2B | Automatización IA Corporativa | Automatización con inteligencia artificial para empresas en Punta Arenas | `REVIEW` / `MERGE` |
| 10 | `/servicios/ia-generativa-visual` | Servicio Secundario | Activos Visuales IA | Visión Ilimitada. | `MERGE` (301) |
| 11 | `/servicios/consultoria-transformacion-digital` | Servicio Core | Pilar 3: Consultoría IA & Tech | Estrategia de Potencia. | `UPDATE_CONTENT` |
| 12 | `/servicios/academia` | Servicio Core | Academia / Formación | Formación Práctica. | `UPDATE_CONTENT` |
| 13 | `/zonas/punta-arenas` | Landing Territorial | Territorio: Punta Arenas | Liderando el futuro digital en Punta Arenas | `UPDATE_CONTENT` |
| 14 | `/zonas/puerto-natales` | Landing Territorial | Territorio: Puerto Natales | Destino Global. | `UPDATE_CONTENT` |
| 15 | `/zonas/magallanes` | Landing Territorial | Territorio: Magallanes | Magallanes Global. | `UPDATE_CONTENT` |
| 16 | `/zonas/tierra-del-fuego` | Landing Territorial | Territorio: Tierra del Fuego | La Frontera del Valor. | `UPDATE_CONTENT` |
| 17 | `/servicios/comunicacion-digital` | Servicio en Retiro | Redes Sociales / Marketing | Servicios de Marketing Digital, Comunicación Estratégica y Redes Sociales | `REVIEW` |
| 18 | `/servicios/marketing-digital-punta-arenas` | Servicio en Retiro | Marketing Digital Local | Marketing digital de alto impacto en Punta Arenas | `REVIEW` |
| 19 | `/servicios/manejo-redes-sociales-punta-arenas` | Servicio en Retiro | Manejo Redes Sociales | Manejo profesional de redes sociales en Punta Arenas | `REVIEW` |
| 20 | `/servicios/videos-redes-sociales-punta-arenas` | Servicio en Retiro | Videos y Audiovisual | Producción de videos para redes sociales en Punta Arenas | `REVIEW` |
| 21 | `/servicios/creacion-reels-punta-arenas` | Servicio en Retiro | Reels Independientes | Creación de reels de alto impacto en Punta Arenas | `REVIEW` |
| 22 | `/servicios/fotografia-para-redes-sociales` | Servicio en Retiro | Fotografía RRSS | Fotografía profesional para redes sociales en Punta Arenas | `REVIEW` |
| 23 | `/servicios/tours-virtuales-360` | Servicio Especializado | Tours 360 y VR | Inmersión Absoluta. | `REVIEW` / `KEEP` |

### 4.2 URLs Cortas / Alias con Redirección 301 Activa (4 URLs)
* `/ia` -> 301 -> `/servicios/automatizacion-con-ia`
* `/marketing` -> 301 -> `/servicios/comunicacion-digital`
* `/consultoria` -> 301 -> `/servicios/consultoria-transformacion-digital`
* `/academia` -> 301 -> `/servicios/academia`

### 4.3 Redirecciones Históricas Mantenidas en `.htaccess` y `netlify.toml` (23 Reglas)
* `/home` -> 301 -> `/`
* `/principios-editoriales-de-patagoniacoach` -> 301 -> `/sobre-patagoniacoach` (Nota de auditoría: requiere corregir destino hacia `/nosotros` o `/`).
* `/servicios/audio-y-podcast` -> 301 -> `/servicios/comunicacion-digital`
* `/servicios/diseno-de-contenido` -> 301 -> `/servicios/comunicacion-digital`
* `/servicios/manual-de-identidad` -> 301 -> `/servicios/comunicacion-digital`
* `/servicio/contenido-pro` -> 301 -> `/servicios/comunicacion-digital`
* `/servicios/gestion-tienda` -> 301 -> `/servicios/desarrollo-web`
* `/servicios/landing-page-express` -> 301 -> `/servicios/desarrollo-web`
* `/servicios/conversion-cro` -> 301 -> `/servicios/desarrollo-web`
* `/servicio/diseno-web-avanzado` -> 301 -> `/servicios/desarrollo-web`
* `/servicio/diseno-web-landing-express` -> 301 -> `/servicios/desarrollo-web`
* `/servicios/fotografia-360-para-e-commerce-de-producto` -> 301 -> `/servicios/tours-virtuales-360`
* `/servicios/fotografia-tour-virtual` -> 301 -> `/servicios/tours-virtuales-360`
* `/servicios/fotografia-redes-sociales-lifestyle` -> 301 -> `/servicios/fotografia-para-redes-sociales`
* `/servicios/fotografia-para-tienda-virtual` -> 301 -> `/servicios/fotografia-para-redes-sociales`
* `/servicio/01-fotografia-para-tienda-virtual` -> 301 -> `/servicios/fotografia-para-redes-sociales`
* `/servicios/videos-corporativos` -> 301 -> `/servicios/videos-redes-sociales-punta-arenas`
* `/servicios/ventas-ecommerce-plus` -> 301 -> `/servicios/aplicaciones-web-pro`
* `/servicios/talleres-y-cursos-para-empresas` -> 301 -> `/servicios/academia`

### 4.4 Respuestas 410 Gone (Eliminado Definitivo de WordPress/WooCommerce Legacy)
Se mantienen las 16 reglas de código HTTP 410 para URLs que fueron atacadas por spam o descontinuadas en el WordPress previo:
`/cart`, `/carrito`, `/checkout`, `/shop`, `/my-account`, `/tienda*`, `/top-crypto-exchange-influencers-in-china*`, `/hello-world*`, `/tag/*`, `/core/*`, `/wp-content/*`, `/index.php/*`, `/servicio/plan-ico-return-on-investment*`, `/servicio/single-service*`.

---

## 5. TELEMETRÍA Y AUDITORÍA DE GOOGLE SEARCH CONSOLE

A partir de los archivos de telemetría extraídos (`SEO/Tabla.csv`, `SEO/Metadatos.csv`, `SEO/Gráfico.csv` y `https___agenciapatagoniacoach.cl_-Coverage-2026-06-06.xlsx`), se obtienen las siguientes evidencias directas de Googlebot:

1. **Rastreos Recientes Confirmados por Googlebot (Junio - Agosto 2026):**
   * `/marketing` (Rastreado 2026-08-05)
   * `/servicios/comunicacion-digital` (Rastreado 2026-08-05)
   * `/zonas/punta-arenas` (Rastreado 2026-08-04)
   * `/servicios/inteligencia-artificial-punta-arenas` (Rastreado 2026-08-03)
   * `/servicios/creacion-paginas-web-punta-arenas` (Rastreado 2026-08-02)
   * `/servicios/automatizacion-con-ia` (Rastreado 2026-08-02)
   * `/zonas/puerto-natales` (Rastreado 2026-08-01)
   * `/servicios/seo-local-magallanes` (Rastreado 2026-07-30)
   * `/servicios/desarrollo-web` (Rastreado 2026-07-24)
   * `/servicios/marketing-digital-punta-arenas` (Rastreado 2026-07-23)
   * `/consultoria` (Rastreado 2026-07-17)
   * `/servicios/consultoria-transformacion-digital` (Rastreado 2026-07-17)
   * `/servicios/manejo-redes-sociales-punta-arenas` (Rastreado 2026-07-17)
   * `/zonas/magallanes` (Rastreado 2026-07-15)
   * `/servicios/videos-redes-sociales-punta-arenas` (Rastreado 2026-07-11)
   * `/servicios/creacion-reels-punta-arenas` (Rastreado 2026-07-07)
   * `/servicios/automatizacion-ia-empresas` (Rastreado 2026-07-05)
   * `/servicios/ia-generativa-visual` (Rastreado 2026-07-01)
   * `/servicios/fotografia-para-redes-sociales` (Rastreado 2026-06-22)
   * `/servicios/aplicaciones-web-pro` (Rastreado 2026-06-21)
   * `/zonas/tierra-del-fuego` (Rastreado 2026-06-10)

2. **Incidencias de Cobertura y Validación:**
   * **Incidencia Resuelta:** "Páginas con redirección": 21 URLs estaban siendo rastreadas debido a que los alias `/marketing`, `/consultoria`, `/ia`, `/academia` figuraban en sitemaps antiguos. Esto se subsanó excluyéndolas del sitemap.
   * **Estado de Errores 404:** Se redujeron de 35 a 1 URL pendiente mediante el mapeo de 301 y 410.

> [!WARNING]
> **REQUERIMIENTO DE SEARCH CONSOLE:** Para las páginas marcadas con `ACTION: REVIEW` (servicios históricos de RRSS, fotografía, reels y videos), si no se cuenta con los reportes de rendimiento detallados (clics exactos, impresiones acumuladas y queries en los últimos 3 a 12 meses), **NO SE DEBEN ELIMINAR NI REDIRIGIR AÚN**. Se mantienen con estado transicional hasta validar si capturan tráfico residual de marca.

---

## 6. DIAGNÓSTICO DE CANIBALIZACIONES Y CONFLICTOS SEMÁNTICOS

Durante la auditoría se detectaron 4 focos críticos de canibalización interna en la estructura actual:

### 6.1 Conflicto en Desarrollo Web
* **URLs:** `/servicios/desarrollo-web` vs `/servicios/creacion-paginas-web-punta-arenas`.
* **Problema:** Ambas páginas atacan las mismas palabras clave ("diseño web punta arenas", "creación de páginas web magallanes"). 
* **Estrategia Propuesta:** 
  * Mantener `/servicios/desarrollo-web` como la página pilar canónica para el Pilar 01 (Desarrollo).
  * Evaluar el tráfico de `/servicios/creacion-paginas-web-punta-arenas`. Si tiene impresiones, consolidar su contenido hacia `/servicios/desarrollo-web` y configurar un redirect 301 permanente.

### 6.2 Conflicto en Inteligencia Artificial y Automatización
* **URLs:** 
  1. `/servicios/automatizacion-con-ia`
  2. `/servicios/inteligencia-artificial-punta-arenas`
  3. `/servicios/automatizacion-ia-empresas`
* **Problema Crítico:** `/servicios/inteligencia-artificial-punta-arenas` en `App.jsx` carga exactamente el mismo componente (`IALanding.jsx`) que `/servicios/automatizacion-con-ia`. Ambas URLs están en el sitemap, generando contenido duplicado al 100% ante Googlebot. Además, `/servicios/automatizacion-ia-empresas` compite por la misma intención B2B.
* **Estrategia Propuesta:** 
  * Consolidar en `/servicios/automatizacion-con-ia` (URL con mayor historial y coherente con el Pilar 03).
  * Redirección 301 de `/servicios/inteligencia-artificial-punta-arenas` -> `/servicios/automatizacion-con-ia`.
  * Evaluar `/servicios/automatizacion-ia-empresas`: si Search Console reporta clics, fusionar contenido y aplicar 301.

### 6.3 Conflicto en SEO Local
* **URLs:** `/servicios/seo-local-magallanes` vs `/servicios/seo-local-punta-arenas`.
* **Problema:** Compiten por términos de búsqueda de posicionamiento y Google Maps en el mismo territorio.
* **Estrategia Propuesta:**
  * Mantener `/servicios/seo-local-magallanes` como pilar canónico (Pilar 02), elevando su discurso a SEO Técnico, Core Web Vitals, Arquitectura y SEO Local.
  * Mantener `/servicios/seo-local-punta-arenas` únicamente si captura búsquedas hiperlocales de "Google Maps Punta Arenas", o consolidar mediante 301 si compite negativamente.

### 6.4 URL de Aplicaciones Web: `/servicios/aplicaciones-web-pro` vs `/servicios/aplicaciones-web`
* **Situación:** En el sitio actual ya existe `/servicios/aplicaciones-web-pro`, la cual fue rastreada por Google el 2026-06-21.
* **Directiva:** La regla fundamental es **NO cambiar rutas por razones estéticas**.
* **Recomendación:** Mantener `/servicios/aplicaciones-web-pro` como URL canónica principal para el diferenciador de Aplicaciones Web, evitando pérdidas de señales acumuladas. Si el usuario decide cambiarla a `/servicios/aplicaciones-web`, debe ejecutarse un 301 estricto de una a otra sin saltos intermedios.

---

## 7. ESTRATEGIA PARA SERVICIOS EN RETIRO COMERCIAL

Los servicios que dejan de ofrecerse como líneas prioritarias son:
* Community management y manejo de redes sociales (`/servicios/manejo-redes-sociales-punta-arenas`, `/servicios/comunicacion-digital`).
* Creación de reels como servicio independiente (`/servicios/creacion-reels-punta-arenas`).
* Producción audiovisual tradicional y videos (`/servicios/videos-redes-sociales-punta-arenas`).
* Fotografía corporativa y de productos (`/servicios/fotografia-para-redes-sociales`).
* Marketing digital generalista (`/servicios/marketing-digital-punta-arenas`).

### Protocolo de Tratamiento
1. **Fase 0/1 (Transición):** NO borrar ninguna página ni desindexar masivamente.
2. **Revisión de Search Console:** Comprobar si reciben tráfico orgánico o backlinks externos.
3. **Consolidación Semántica:** 
   * Las búsquedas asociadas a marketing digital y presencia online de empresas se consolidarán mediante **301 hacia `/servicios/desarrollo-web`** (con propuesta de sitios pensados para vender y convertir) o hacia la sección de Proyectos.
   * Si alguna página tiene tráfico orgánico significativo, se transformará temporalmente en contenido editorial o caso de estudio antes de redirigirla.
   * Prohibido hacer 301 masivos al Home (`/`).

---

## 8. ARQUITECTURA PROPUESTA VS ARQUITECTURA ACTUAL

### 8.1 Arquitectura Actual (Fragmentada y Generalista)
* **Home:** Mensaje genérico de transformación digital, marketing, contenido y consultoría.
* **Servicios:** 15 subpáginas atomizadas (reels, fotos, videos, redes sociales, 3 páginas de IA, 2 páginas de SEO, 2 de diseño web, 360, etc.).
* **Zonas:** 4 páginas territoriales con textos orientados a marketing generalista.
* **Faltantes Críticos:** Sin página dedicada a Portafolio / Casos de Estudio (`/proyectos`), sin página institucional de capacidad técnica (`/nosotros`), sin página dedicada de contacto/cotización (`/contacto`).

### 8.2 Arquitectura Nueva Propuesta (Enfocada y de Alta Autoridad B2B)
La nueva navegación principal será sobria, ejecutiva y directa:

```
INICIO (/)
│
├── DESARROLLO
│   ├── Diseño y Desarrollo Web (/servicios/desarrollo-web)
│   └── Aplicaciones Web (/servicios/aplicaciones-web-pro)
│
├── SEO (/servicios/seo-local-magallanes)
│   └── (Auditoría Técnica + Implementación Directa + SEO Local Regional)
│
├── INTELIGENCIA ARTIFICIAL (/servicios/automatizacion-con-ia)
│   ├── Soluciones & Agentes IA
│   ├── Automatización de Procesos (n8n / APIs)
│   └── Consultoría Estratégica (/servicios/consultoria-transformacion-digital)
│
├── ACADEMIA (/servicios/academia)
│   └── Capacitación Corporativa y Talleres Prácticos
│
├── PROYECTOS (/proyectos)  [NUEVA]
│   └── Casos reales: Problema -> Solución -> Tecnología -> Implementación -> Resultado
│
├── NOSOTROS (/nosotros)    [NUEVA]
│   └── Identidad técnica, ingeniería desde la Patagonia y equipo
│
└── CONTACTO (/contacto)    [NUEVA]
    └── Diagnóstico técnico, cotizaciones y agendamiento
```

### 8.3 Landings Territoriales Preservadas y Optimizadas
* `/zonas/punta-arenas`: Desarrollo, SEO local e IA para el comercio e industria de Punta Arenas.
* `/zonas/puerto-natales`: Soluciones web, motores de reserva, tours 360 y automatización para hotelería y turismo.
* `/zonas/magallanes`: Infraestructura digital y sistemas para logística, salmonicultura, energía y grandes empresas.
* `/zonas/tierra-del-fuego`: Conectividad, sistemas offline-first y soporte digital en Porvenir y la isla.

---

## 9. RIESGOS SEO CONCRETOS Y PLAN DE MITIGACIÓN

| Riesgo SEO | Probabilidad | Impacto | Mecanismo de Mitigación |
|---|---|---|---|
| **Pérdida de rankings históricos por cambio de URL** | Media | Alto | No cambiar URLs existentes (`/servicios/desarrollo-web`, `/servicios/seo-local-magallanes`, `/servicios/aplicaciones-web-pro`). Si se altera alguna ruta, aplicar 301 directo sin cadenas. |
| **Pérdida de tráfico por eliminación de servicios de marketing/redes** | Media | Medio | Mantener páginas en estado `REVIEW` hasta inspeccionar clics en Search Console. Consolidar contenido valioso en casos de estudio antes de redirigir 301. |
| **Canibalización de palabras clave en IA** | Alta | Medio | Fusión inmediata de `/servicios/inteligencia-artificial-punta-arenas` hacia `/servicios/automatizacion-con-ia` con 301 permanente. |
| **Caída de indexación por desajuste de prerender o sitemap** | Baja | Crítico | Mantener el pipeline automatizado `scripts/prerender.mjs` y `scripts/generate-sitemap.mjs` sincronizado con `SEO_CONFIG`. |
| **Bloqueo accidental de robots o meta noindex** | Baja | Catastrófico | Staging bloqueado en subdominio/Netlify. Producción en Apache/Hostinger verificado con robots.txt permisivo y `index, follow`. Checklist de pre-lanzamiento obligatorio. |
| **Redirecciones masivas hacia la raíz (`/`)** | Alta (si no se controla) | Alto | Prohibición estricta. Todo redirect 301 debe tener concordancia semántica uno a uno. |

---

## 10. PLAN DE IMPLEMENTACIÓN POR FASES

* **FASE 0 — Discovery y Baseline SEO (COMPLETADA):**
  * Auditoría técnica completa.
  * Generación de `docs/seo-migration-baseline.md`.
  * Generación de `docs/url-migration-map.csv`.
  * Presentación del informe al director del proyecto y espera de aprobación.
* **FASE 1 — Staging y Entorno Seguro de Desarrollo:**
  * Configuración de entorno de pruebas con `noindex`.
  * Producción permanece intacta, operativa y 100% indexable.
* **FASE 2 — Reestructuración de Contenidos & Nuevas Landings:**
  * Rediseño y nuevo copy para los 3 Pilares (Desarrollo, SEO, IA).
  * Desarrollo de nuevas landings estratégicas: `/proyectos`, `/nosotros`, `/contacto`.
  * Actualización de landings territoriales (`/zonas/*`).
* **FASE 3 — Configuración de Redirecciones Semánticas & Metadatos:**
  * Actualización de `src/seo/config.js` y `src/seo/schemas.js`.
  * Configuración de 301 en `public/.htaccess` y `netlify.toml`.
  * Depuración de enlaces internos y footer/navbar.
* **FASE 4 — QA y Validación Pre-Lanzamiento:**
  * Creación y ejecución de `docs/prelaunch-seo-checklist.md`.
  * Validación de prerenderizado estático (HTML tags, JSON-LD, canonicals).
  * Pruebas de navegación, Lighthouse (CWV), accesibilidad y enlaces rotos.
* **FASE 5 — Despliegue Controlado:**
  * Ejecución del deploy a producción vía GitHub Actions.
  * Regeneración y validación de `sitemap.xml` en vivo.
  * Envío de sitemap a Google Search Console.
* **FASE 6 — Protocolo de Seguimiento Post-Lanzamiento:**
  * Auditorías periódicas en DÍA 0, DÍA 3, DÍA 7, DÍA 14, DÍA 30, DÍA 60 y DÍA 90.
  * Monitoreo de 404, indexación, tráfico orgánico y consultas en Google Search Console.
