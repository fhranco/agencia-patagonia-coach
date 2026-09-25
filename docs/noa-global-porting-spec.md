# ESPECIFICACIÓN TÉCNICA Y ARQUITECTÓNICA GLOBAL — SISTEMA NOA VALE
**Documento:** `docs/noa-global-porting-spec.md`  
**Referencia Autoritativa:** `.reference/noa/generated-page.html`  
**Estado:** Documento de Especificación Pre-Implementación (Fase 11)  
**Rama:** `experiment/noa-patagoniacoach-v2`  

---

## 1. RESUMEN EJECUTIVO Y OBJETIVO

El presente documento establece la extracción técnica autoritativa, arquitectura espacial, motor de movimiento y especificación de adaptación para reconstruir la experiencia global de **PatagoniaCoach V2** sobre la base del sistema visual y espacial de Noa Vale (`.reference/noa/generated-page.html`).

El objetivo técnico inicial es **reproducir con máxima fidelidad la baseline del motor visual y espacial de Noa Vale** (geometría 3D, tokens, scroll engine, dock y transiciones) antes de incorporar adaptaciones de contenido, identidad o dirección artística adicionales.

---

## 2. ESTRUCTURA GLOBAL Y ÁRBOL DOM SIMPLIFICADO

El sistema se basa en una arquitectura **Single-Stage Sticky Viewport**, donde todo el recorrido vive en un contenedor físico de scroll (`#scroll-story`) que proyecta un score lógico normalizado sobre un escenario fijo (`#stage`).

```html
<body data-chapter="hero|entrance|artist|practice|works" data-boot="loading|ready" class="booting">
  <!-- LOADER & ASSET SYNCHRONIZATION -->
  <div id="studio-loader">
    <div class="loader-curtain"></div>
    <div class="loader-center">
      <div class="loader-mark"></div>
      <div class="loader-counter"><span data-count>00</span>%</div>
      <div class="loader-progress" role="progressbar"></div>
    </div>
    <div class="loader-veil"></div>
  </div>

  <a class="skip-link" href="#top">Saltar al contenido</a>

  <!-- FIXED HEADER & DOCK -->
  <header class="site-header">
    <a class="wordmark" data-go="hero" href="#top">
      <span class="monogram">nv<span>•</span></span>
      <span class="brand-lockup">
        <span class="artist-name">PatagoniaCoach</span>
        <span class="artist-role">Consultoría & Arquitectura Digital</span>
      </span>
    </a>
    <nav class="sable-dock" data-dock-state="idle" data-dock-max="0.00" aria-label="Navegación principal">
      <a class="sable-dock__item" data-dock-item data-go="artist" href="#artist">
        <span class="sable-dock__icon" aria-hidden="true"><svg viewBox="0 0 16 16">...</svg></span>
        <span>El Estudio</span>
      </a>
      <a class="sable-dock__item" data-dock-item data-go="practice" href="#practice">
        <span class="sable-dock__icon" aria-hidden="true"><svg viewBox="0 0 16 16">...</svg></span>
        <span>La Práctica</span>
      </a>
      <a class="sable-dock__item" data-dock-item data-go="works" href="#works">
        <span class="sable-dock__icon" aria-hidden="true"><svg viewBox="0 0 16 16">...</svg></span>
        <span>Proyectos</span>
      </a>
    </nav>
    <button class="thinking-contact" data-contact type="button" aria-label="Iniciar conversación">
      <span class="thinking-contact__label">HABLEMOS</span>
      <span class="thinking-contact__glass" aria-hidden="true"><svg viewBox="0 0 84 84">...</svg></span>
    </button>
  </header>

  <!-- MAIN VIEWPORT STAGE -->
  <main id="top">
    <div id="scroll-story">
      <div id="stage">
        <div class="grain"></div>
        <canvas id="gallery-canvas"></canvas>
        <video id="card-motion" playsinline muted loop></video>

        <!-- CAPÍTULO 0: HERO -->
        <section id="hero" class="panel hero-panel">
          <div class="hero-edition micro">
            <span class="hero-edition-label">EDICIÓN AUSTRAL</span>
            <span>53°09′45″S 70°55′21″W</span>
          </div>
          <h1 id="hero-title">PatagoniaCoach</h1>
          <div class="static-hero">...</div>
          <div class="hero-bottom">
            <div class="current-work">
              <p class="micro">
                <span class="current-index"><span id="current-number">01</span><span class="current-total">/ 08</span></span>
                <span id="current-category">ARQUITECTURA DIGITAL</span>
              </p>
              <h2 id="current-title">Sistemas Vivos</h2>
            </div>
            <div class="card-controls">
              <button id="previous" class="card-arrow card-arrow--previous" aria-label="Obra anterior"></button>
              <button id="open-current" aria-label="Ver detalles"></button>
              <button id="next" class="card-arrow card-arrow--next" aria-label="Siguiente obra"></button>
            </div>
            <a class="scroll-cue" href="#entrance">
              <span class="round-arrow"></span>
              <span class="micro">EXPLORAR<br>RECORRIDO</span>
            </a>
          </div>
        </section>

        <!-- CAPÍTULO 1: ENTRANCE -->
        <section id="entrance" class="panel entrance-panel">
          <p class="micro entrance-overline">UMBRAL ESTRATÉGICO</p>
          <h2 id="entrance-title">Del territorio al<br>ecosistema global<span id="entrance-dot">.</span></h2>
          <span class="entrance-foot micro">DESPLAZAR PARA INGRESAR</span>
        </section>
        <div id="studio-portal"></div>

        <!-- CAPÍTULO 2: ARTIST / ADN -->
        <section id="artist" class="panel artist-panel">
          <div id="portal-signature">
            <span class="micro">CRITERIO & EJECUCIÓN</span>
            <h2 id="artist-title" class="portal-name">PatagoniaCoach</h2>
            <span class="micro">INGENIERÍA DESDE EL FIN DEL MUNDO</span>
          </div>
          <div id="portrait-figure">
            <img id="portrait-soft" class="portrait-photo" alt="" />
            <img id="portrait-contrast" class="portrait-photo" alt="" />
            <img id="maker-portrait" class="portrait-photo" alt="Equipo PatagoniaCoach" />
          </div>
          <div id="portrait-caption">
            <img id="portrait-signature" alt="" />
            <span id="portrait-quote" class="portrait-quote">"Combinamos criterio humano y sistemas de IA."</span>
          </div>
          <div id="artist-reading" class="visually-hidden">...</div>
        </section>

        <!-- CAPÍTULO 3: PRACTICE / ATELIER -->
        <section id="practice" class="panel practice-panel atelier">
          <div class="section-kicker micro">
            <span>02</span>
            <span>METODOLOGÍA & CAPACIDADES</span>
          </div>
          <h2 id="practice-title" class="visually-hidden">Nuestra Práctica</h2>
          <aside class="atelier-copy">
            <div class="atelier-copy-stack">
              <article data-atelier-copy="0">...</article>
              <article data-atelier-copy="1">...</article>
              <article data-atelier-copy="2">...</article>
            </div>
          </aside>
          <div class="atelier-rail">
            <span class="atelier-principle micro">DISCIPLINAS<br>CORE</span>
            <div class="atelier-tabs">
              <button data-atelier-tab="0"><b>01</b><span>IA & Agentes</span></button>
              <button data-atelier-tab="1"><b>02</b><span>Desarrollo Web</span></button>
              <button data-atelier-tab="2"><b>03</b><span>SEO & Crecimiento</span></button>
            </div>
            <div class="atelier-cue">
              <span class="atelier-note">Explorar pilar</span>
              <span class="atelier-gesture micro">SCROLL O CLIC</span>
            </div>
          </div>
          <div class="static-practice">...</div>
        </section>

        <!-- CAPÍTULO 4: WORKS & FINALE -->
        <section id="works" class="panel works-panel">
          <div class="section-kicker micro">
            <span>03</span>
            <span>CASOS SELECCIONADOS</span>
          </div>
          <div class="works-heading">
            <h2 id="works-title">Proyectos en el <em>túnel tridimensional</em>.</h2>
            <p>Seleccione un estudio para inspeccionar su ficha técnica.</p>
          </div>
          <div id="work-hitareas"></div>
          <div class="study-rail">
            <div class="study-current">
              <span class="micro"><span id="study-number">01</span><span id="study-category">DESARROLLO</span></span>
              <button id="study-open"><span id="study-title">Proyecto Activo</span><span>↗</span></button>
            </div>
            <span class="study-scroll micro"><span>SCROLL PARA NAVEGAR</span></span>
          </div>
          <div class="study-finale">
            <p class="micro">CONVERSACIÓN DIRECTA</p>
            <h2>Iniciemos un <em>nuevo proyecto</em>.</h2>
            <p class="study-finale-note">Evaluación técnica y propuesta de trabajo.</p>
            <p id="contact" class="finale-conversation"><span>Canales oficiales de contacto disponibles.</span></p>
          </div>
          <div id="static-works" class="static-works">...</div>
        </section>

        <div id="loading"></div>
      </div>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="footer-signoff">
      <span class="footer-signoff-name">PatagoniaCoach</span><span class="footer-period">.</span>
      <span class="micro">Punta Arenas • Magallanes • Chile</span>
    </div>
  </footer>

  <!-- MODALS -->
  <dialog id="project-dialog">
    <div class="project-visual"></div>
    <div class="project-copy">
      <p id="project-category" class="micro"></p>
      <h2 id="project-title"></h2>
      <p id="project-description" class="project-lead"></p>
      <div id="project-notes"></div>
    </div>
    <button class="dialog-close studio-close" type="button" aria-label="Cerrar modal"></button>
  </dialog>

  <dialog id="contact-dialog" class="text-dialog">
    <button class="dialog-close studio-close" type="button" aria-label="Cerrar modal"></button>
  </dialog>

  <noscript>
    <!-- Contenido estático accesible e indexable -->
  </noscript>
</body>
```

---

## 3. ARQUITECTURA DE SCROLL Y DOMINIO DE SCORE

Existe una separación estricta entre el **recorrido físico de scroll** y el **dominio lógico del score de animación**:

* **Physical Scroll Story:** `#scroll-story` tiene declarada una altura física en CSS de:
  ```css
  #scroll-story {
    height: 1430vh;
    height: 1430svh;
  }
  ```
* **Normalized ScrollTrigger Progress:** ScrollTrigger mapea el scroll del elemento `#scroll-story` a un valor continuo de:
  $$\text{progress} \in [0.00, 1.00]$$
* **Logical Score Domain:** El motor de movimiento (`StudioScore`) define:
  $$S.\text{MAX} = 27.6$$
* **Score Mapping:**
  $$\text{score} = \text{self.progress} \times S.\text{MAX}$$

### Límites Exactos de Capítulos en el Dominio Lógico (`score.js`)

| Capítulo | Score Inicial | Score Final | Comportamiento Espacial y Visual |
| :--- | :--- | :--- | :--- |
| **Hero** | $s = 0.00$ | $s = 0.45$ | Órbita 3D de 8 cartas iniciales. UI de carrusel activa. |
| **Entrance** | $s = 0.45$ | $s = 1.88$ | Portón: cartas [0] y [5] cierran el centro. Expansión radial del portal desde `#entrance-dot`. |
| **Artist / Studio** | $s = 1.88$ | $s = 9.45$ | Escultura 3D (`biography-action`) + revelado de retrato + 3 cartas en foco. |
| **Practice / Atelier** | $s = 9.45$ | $s = 15.80$ | 3 composiciones espaciales ($s=10.25, 12.25, 14.35$). Stack de textos y tabs sincronizados. |
| **Works & Finale** | $s = 15.95$ | $s = 27.45$ | Reagrupación (*gather*), túnel de perspectiva 3D acelerado, hitareas DOM y panel final de contacto ($s \ge 26.45$). |

---

## 4. MOTOR DE MOVIMIENTO Y VERSIONES DE DEPENDENCIAS

### 4.1 Inventario de Tecnologías Comprobadas en el Código Fuente

| Tecnología / Biblioteca | Versión / Revisión Comprobada | Responsabilidad en la Arquitectura |
| :--- | :--- | :--- |
| **Three.js** | **Revision 147** (`const e="147"`) | Renderizado de escena WebGL, geometrías de papel con bisel (`card-geometry.js`), escultura extruida, texturas front/back, iluminación y sombras. |
| **GSAP** | **3.13.0** | Ticker maestro (`gsap.ticker`), animación de loader, handoff de monograma y timeline de apertura homográfica `matrix3d`. |
| **ScrollTrigger** | **3.13.0** | Scrubbing continuo del score lógico (`score = self.progress * 27.6`), actualización con Lenis. |
| **Lenis** | **1.1.14** | Smooth scroll virtualizado acoplado al ticker de GSAP (`lenis.raf(time * 1000)`). |
| **Sable Proximity Dock** | Custom Spring Controller | Física de muelles en `rAF` para magnético e interpolación de items del dock. |
| **Canvas 2D Auxiliares** | Custom Vanilla Shaders/Scripts | Estelas de grafito (`createEntranceTrails`), atmósfera de pigmento (`createBiographyAtmosphere`), impresiones de suelo (`createStudyAtmosphere`), disolución del nombre (`createPortraitDissolve`). |

---

## 5. CAPACIDAD DEL MOTOR VISUAL VS DATASET PATAGONIACOACH

* **Capacidad del Motor Original:** El sistema de Noa Vale está parametrizado en `STUDIES` para renderizar un túnel tridimensional de hasta 16 tarjetas simultáneas ($8\text{ proyectos} + 8\text{ estudios}$).
* **Definición para PatagoniaCoach:** El dataset de proyectos de PatagoniaCoach se definirá **exclusivamente a partir de proyectos reales y comprobables disponibles**. El motor debe configurarse para aceptar un número dinámico $N$ de estudios sin forzar la existencia de 16 casos ficticios.
* **Prohibición Estricta:** No inventar marcas globales, clientes no existentes, resultados de facturación, porcentajes de ROI ficticios ni sectores no demostrables (agro, industrias no atendidas, etc.).

---

## 6. ESPECIFICACIÓN DEL MODAL DE PROYECTO (`#project-dialog`)

La ficha técnica no exigirá campos forzados de métricas o ROI. Se adopta una **estructura modular y flexible**:

```
┌────────────────────────────────────────────────────────┐
│ MODAL DE PROYECTO / ESTUDIO DE CASO                   │
├────────────────────────────────────────────────────────┤
│ • Cliente / Proyecto (Nombre comercial o identificador)│
│ • Contexto (Industria, ámbito territorial o necesidad) │
│ • Desafío (Problema técnico, operativo o comercial)    │
│ • Solución (Arquitectura, sistema o estrategia)       │
│ • Capacidades (Servicios involucrados)                 │
│ • Stack Tecnológico (Frameworks, librerías, APIs)     │
│ • Resultado (Entregable implementado y operativo)      │
│ • Métricas (Opcional: SOLO si existen datos auditados) │
└────────────────────────────────────────────────────────┘
```

### Transición Homográfica (`StudioDetailTransition`)
Se mantiene la proyección matemática homográfica:
1. Se calculan las cuatro esquinas $(p_0, p_1, p_2, p_3)$ de la tarjeta 3D en coordenadas de pantalla mediante la cámara Three.js.
2. Se resuelve la matriz proyectiva $3\times3$ y se inyecta como `matrix3d(...)` en el popover HTML.
3. GSAP interpola la geometría hasta el tamaño nativo del diálogo modal.

---

## 7. DESIGN TOKENS — BASELINE PORTING

Para el prototipo inicial se realiza un **PORT BASELINE** sin alteraciones cromáticas prematuras, reproduciendo fielmente la atmósfera visual de la referencia:

```css
:root {
  /* --- PALETA BASELINE NOA VALE (PRESERVADA) --- */
  --paper: #efebe3;          /* Fondo papel mineral cálido */
  --ink: #22231f;            /* Carbón / Tinta profunda */
  --muted: #726f66;          /* Gris cálido editorial */
  --line: #d3cfc5;           /* Línea sutil divisoria */
  --accent: #c8552b;         /* Terracotta quemado */
  
  /* --- TIPOGRAFÍA BASELINE --- */
  --display: 'Bricolage', 'Geist', sans-serif;
  --body: 'Geist', Arial, sans-serif;

  /* --- ESPACIADO & RADIUS --- */
  --gutter: 3.25vw;
  --radius-pill: 9999px;
  --radius-card: 16px;
  --radius-modal: 20px;
  --header-height: 82px;

  /* --- EASINGS --- */
  --mail-ease: cubic-bezier(.22, .61, .36, 1);
}

@media (max-width: 760px) {
  :root {
    --gutter: 24px;
    --header-height: 72px;
  }
}
```

---

## 8. ARQUITECTURA DE RUTAS Y SEO AUTORITATIVO (FASE 10)

La arquitectura de URLs vigentes de PatagoniaCoach V2 se basa estrictamente en la **Fase 10 de SEO**. No se restauran rutas V1 eliminadas.

### Páginas KEEP Vigentes (Estructura Canónica)
* `/` (Home)
* `/servicios/desarrollo-web`
* `/servicios/seo-local-magallanes`
* `/servicios/automatizacion-con-ia`
* `/servicios/comunicacion-digital`
* `/servicios/consultoria-transformacion-digital`
* `/academia`
* `/zonas/magallanes`
* `/zonas/puerto-natales`
* `/zonas/tierra-del-fuego`

### Ruta CONDITIONAL
* `/servicios/aplicaciones-web-pro`

### Redirecciones Consolidadas (301 Permanentes)
Las 16 URLs consolidadas históricas (`/ia`, `/marketing`, `/consultoria`, `/servicios/creacion-paginas-web-punta-arenas`, `/servicios/inteligencia-artificial-punta-arenas`, etc.) se mantienen como reglas de redirección 301 en `public/.htaccess` y `netlify.toml`, sin reintroducirlas como rutas activas en la navegación.

---

## 9. INTEGRACIÓN DE BACKEND Y CONFIGURACIÓN DE PROVEEDORES

### 9.1 Backend de IA (`api/chat.js`)
* La arquitectura del endpoint serverless es **provider-configurable** a través de variables de entorno:
  * `AI_API_KEY`: Clave de autenticación upstream.
  * `AI_API_URL`: URL del endpoint compatible (por defecto DeepSeek o OpenAI).
  * `AI_MODEL`: Identificador del modelo (por defecto `deepseek-chat` o `gpt-4o-mini`).
* No se asume proveedor rígido en la documentación ni en el código.

### 9.2 Fuente Autoritativa de Contacto
* Todos los datos de contacto (número de WhatsApp, correo, coordenadas y mensajes predefinidos) se leen directamente de la fuente única de verdad:
  ```javascript
  import { CONTACT, getWhatsAppUrl } from 'src/constants/contact.js';
  ```
* Prohibido hardcodear números de teléfono o URLs de WhatsApp en especificaciones o componentes.

---

## 10. ACCESIBILIDAD Y SISTEMA DE FALLBACK

* **Política de Accesibilidad:** Se implementa un **fallback semántico y de movimiento reducido** (`prefers-reduced-motion: reduce`, `body.static-page`, `<noscript>`), garantizando legibilidad, navegación por teclado e indexabilidad por motores de búsqueda. La conformidad con niveles formales WCAG queda sujeta a una auditoría técnica específica posterior.
* **Activación de `static-page`:**
  * Si WebGL no está disponible o falla la inicialización de Three.js.
  * Si el usuario tiene configurada la reducción de movimiento y elige la versión estática.
  * Se desactiva el canvas 3D y se muestran las secciones estáticas estructuradas (`.static-hero`, `.static-practice`, `.static-works`).

---

## 11. BIOGRAPHY / SCULPTURE Y TRATAMIENTO DE ASSETS

* **Clasificación:** **`ADAPT`** (Asset definitivo: **undecided / por definir**).
* **Criterio de Preservación en Prototipo Baseline:**
  * NO definir prematuramente un reemplazo creativo específico (como cordillera, topografía, glaciar, mapa o paisaje austral).
  * Conservar estrictamente durante el prototipo baseline:
    * Función narrativa en la escena.
    * Geometría general y draw path.
    * Timing y momentos de aparición (`drawStart: 2.25`, `drawEnd: 3.32`).
    * Transición hacia carta plana física (`paperStart: 2.30`, `cardStart: 4.05`).
    * Relación con el capítulo Artist/Studio y comportamiento dentro del score lógico.
  * El asset PatagoniaCoach definitivo se decidirá **únicamente después de validar que el clon base reproduce fiel y correctamente la experiencia del referente**.
  * No introducir reinterpretación artística durante la Fase 12A.

---

## 12. DESACOPLAMIENTO METODOLÓGICO OBLIGATORIO DE FASE 12

Para reducir iteraciones, prevenir regresiones y permitir una comparación objetiva contra el referente `.reference/noa/generated-page.html`, la Fase 12 se divide obligatoriamente en tres subfases secuenciales desacopladas:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 DESACOPLAMIENTO DE FASE 12: SECUENCIA ESTRICTA              │
├──────────────────────────────┬──────────────────────────────────────────────┤
│ 12A. CLONE BASELINE          │ 12B. CONTENT MAPPING  │ 12C. BRAND ADAPTATION│
│ (Motor, Espacio, Scroll, 3D) │ (Datos Reales PC)     │ (Identidad & Assets) │
├──────────────────────────────┼───────────────────────┼──────────────────────┤
│ • Scroll 1430svh / Score 27.6│ • Sustitución de copy │ • Logotipo final     │
│ • Three.js Rev 147 + Cards 3D│ • Servicios vigentes  │ • Paleta de marca    │
│ • Dock + Loader + Modales    │ • Proyectos reales    │ • Fotografía oficial │
│ • Tokens baseline Noa Vale   │ • Diagnóstico real    │ • Escultura aprobada │
│ • Contenido neutral / demo   │ • Links de contacto   │ • Estilo editorial   │
└──────────────────────────────┴───────────────────────┴──────────────────────┘
```

### FASE 12A — CLONE BASELINE
* **Objetivo:** Reproducir con máxima fidelidad técnica, espacial y visual el sistema completo de Noa Vale:
  * Estructura DOM y escenario sticky (`#stage`).
  * Motor de scroll (`Lenis` + `ScrollTrigger` a `1430svh` y score `27.6`).
  * Escena Three.js (Revision 147), geometrías biseladas, anticolisión de capas (`separateLayers`).
  * Portón de entrada y portal radial zoom.
  * Dock magnético con física de muelles (`sable-dock`).
  * Loader con conteo real y vuelo de monograma (`FLIP`).
  * Transición homográfica `matrix3d` hacia modal de proyectos.
  * Finale, responsive (desktop, tablet, mobile $\le 760\text{px}$) y fallback estático (`body.static-page`).
* **Regla:** Usar contenido neutral/placeholder cuando sea necesario. **NO aplicar todavía branding PatagoniaCoach en profundidad.**

---

### FASE 12B — CONTENT MAPPING
* **Objetivo:** Una vez aprobada y verificada la baseline técnica de 12A, reemplazar el dataset y contenido por información real y verificable de PatagoniaCoach:
  * 3 Pilares y servicios vigentes según SEO Fase 10.
  * Proyectos y estudios de caso reales disponibles.
  * Metodología de trabajo y capacidades reales.
  * Conexión de CTAs, diagnóstico digital y WhatsApp oficial (`src/constants/contact.js`).
* **Regla:** Mantener intacto el comportamiento visual, espacial y temporal aprobado en 12A.

---

### FASE 12C — BRAND ADAPTATION
* **Objetivo:** Sólo después de haber validado y aprobado formalmente 12A y 12B, proceder a la adaptación de la dirección artística:
  * Integración de la identidad visual definitiva y logotipo PatagoniaCoach.
  * Assets gráficos oficiales, fotografía del equipo y casos reales.
  * Definición del asset 3D definitivo para el capítulo de biografía/estudio.
  * Ajustes cromáticos y lenguaje editorial final de PatagoniaCoach.
* **Regla:** No alterar arbitrariamente geometría, timings, score de scroll, transiciones ni composiciones salvo decisión explícita y justificada.

---

## 13. MATRIZ PORT / ADAPT / DISCARD CONSOLIDADA

| Componente / Subsistema | Clasificación | Acción en Prototipo Inicial PatagoniaCoach V2 |
| :--- | :--- | :--- |
| **Scroll Story (`1430svh` & Score 27.6)** | **PORT** | Portar la relación física/lógica exacta sin modificar proporciones de scroll. |
| **Three.js Scene (Revision 147)** | **PORT** | Portar el pipeline Three.js, geometrías y cálculo de colisión entre capas (`separateLayers`). |
| **Design Tokens (Paper, Ink, Muted, Terracotta)** | **PORT BASELINE** | Mantener la paleta cromática, espaciados y tipografías originales para garantizar fidelidad inicial en 12A. |
| **Sable Proximity Dock** | **PORT** | Portar el controlador de proximidad y física de muelles, adaptando los textos de navegación. |
| **Modal Homográfico (`matrix3d`)** | **PORT** | Portar el algoritmo de proyección de 4 esquinas para la apertura fluida del diálogo. |
| **Biography / Sculpture 3D** | **ADAPT** | Conservar timing y geometría base en 12A; asset definitivo de PC por definir post-validación. |
| **Monogram Flight & Loader** | **ADAPT** | Adaptar el monograma a la marca manteniendo la coreografía y beats del loader original. |
| **Dataset de Proyectos** | **ADAPT** | Configurar el túnel para consumir dinámicamente los casos reales disponibles de PatagoniaCoach en 12B. |
| **Integración de Contacto** | **ADAPT** | Conectar los triggers a `src/constants/contact.js` y a los flujos existentes (`openDigitalDiagnostic`, WhatsApp). |
| **Imágenes y Medios de Referencia** | **DISCARD** | Descartar fotos de stock y referencias de Noa Vale cuando se sustituyan por los assets de PC en 12C. |
| **Tailwind CDN Externo** | **DISCARD** | Excluir dependencias de CDN externas; utilizar estilos modulares en el bundle. |
