import { useEffect, useRef, useCallback } from 'react';
import { FrameLoader } from './frameLoader';
import EntryAperture from '../v2/EntryAperture';
import { openDigitalDiagnostic, getWhatsAppUrl } from '../../constants/contact';
import { ArrowRight } from 'lucide-react';
import './DigitalJourney.css';

// Manifest definition
import manifestData from '../../../public/scrollytelling/manifest/scrollytelling_manifest.json';

const EDITORIAL_CHAPTERS = [
  {
    id: '01_SEARCH',
    marker: '01 // SEARCH',
    headlineLines: ['TODO EMPIEZA', 'CON UNA BÚSQUEDA.'],
    supporting: 'Diseñamos la arquitectura digital que conecta la intención del usuario con oportunidades reales.',
    classModifier: 'digital-journey__chapter--search',
    cta: {
      type: 'link',
      label: 'Mejorar mi visibilidad',
      href: '/servicios/seo-local-magallanes',
      dataCta: 'service-seo'
    }
  },
  {
    id: '02_DISCOVERY',
    marker: '02 // DISCOVERY',
    headlineLines: ['SER ENCONTRADO', 'ES SÓLO EL COMIENZO.'],
    supporting: 'Optimización avanzada para motores generativos (GEO) y presencia dominante en Magallanes.',
    classModifier: 'digital-journey__chapter--discovery',
    cta: {
      type: 'action',
      label: 'Evaluar mi presencia digital',
      action: 'diagnostic',
      dataCta: 'diagnostic'
    }
  },
  {
    id: '03_RESPONSIVE',
    marker: '03 // RESPONSIVE',
    headlineLines: ['UNA EXPERIENCIA.', 'EN CADA PANTALLA.'],
    supporting: 'Rendimiento nativo y adaptabilidad fluida para un territorio de conectividad exigente.',
    classModifier: 'digital-journey__chapter--responsive',
    cta: {
      type: 'link',
      label: 'Ver desarrollo web',
      href: '/servicios/desarrollo-web',
      dataCta: 'service-web'
    }
  },
  {
    id: '04_AI',
    marker: '04 // INTELLIGENCE',
    headlineLines: ['LA BÚSQUEDA', 'TAMBIÉN CONVERSA.'],
    supporting: 'Modelos de lenguaje, flujos automatizados e integración corporativa orientada a resultados.',
    classModifier: 'digital-journey__chapter--ai',
    cta: {
      type: 'link',
      label: 'Ver automatización con IA',
      href: '/servicios/automatizacion-con-ia',
      dataCta: 'service-ai',
      secondary: {
        label: 'Hablemos de IA',
        href: getWhatsAppUrl('Hola PatagoniaCoach, me gustaría conversar sobre automatización e IA para mi empresa.'),
        dataCta: 'whatsapp'
      }
    }
  },
  {
    id: '05_ARCHITECTURE',
    marker: '05 // ARCHITECTURE',
    headlineLines: ['LO VISIBLE DEPENDE', 'DE LO BIEN CONSTRUIDO.'],
    supporting: 'Estructuras de código limpias, componentes sólidos y soberanía digital sin concesiones.',
    classModifier: 'digital-journey__chapter--architecture',
    cta: {
      type: 'link',
      label: 'Cómo construimos',
      href: '/servicios/desarrollo-web',
      dataCta: 'service-web'
    }
  },
  {
    id: '06_ECOSYSTEM',
    marker: '06 // ECOSYSTEM',
    headlineLines: ['WEB, SEO E INTELIGENCIA', 'COMO UN SISTEMA.'],
    supporting: 'Web, datos y procesos trabajando como una sola infraestructura viva y medible.',
    classModifier: 'digital-journey__chapter--ecosystem',
    cta: {
      type: 'whatsapp',
      label: 'Revisemos tu caso',
      href: getWhatsAppUrl('Hola PatagoniaCoach, me gustaría revisar el ecosistema digital de mi empresa y coordinar una conversación.'),
      dataCta: 'whatsapp'
    }
  }
];

export default function DigitalJourney() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const frameLoaderRef = useRef(null);
  const entryApertureRef = useRef(null);
  const exitMaskRef = useRef(null);
  const chapterRefs = useRef([]);
  const indicatorDotsRef = useRef([]);
  const indicatorProgressBarRef = useRef(null);
  const debugPanelRef = useRef(null);

  // Animation and scroll state refs (zero React re-renders during rAF)
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const currentFrameRef = useRef(1);
  const rafIdRef = useRef(null);
  const lastDrawnImageRef = useRef(null);
  const lastActiveChapterIdxRef = useRef(-1);
  const lastDebugUpdateRef = useRef(0);

  // Binary search for closest normalized progress
  const findFrameIndex = useCallback((progress) => {
    const frames = manifestData.frames;
    if (!frames || frames.length === 0) return 1;
    if (progress <= 0) return frames[0].sequence_index;
    if (progress >= 1) return frames[frames.length - 1].sequence_index;

    let low = 0;
    let high = frames.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (frames[mid].normalized_progress === progress) {
        return frames[mid].sequence_index;
      }
      if (frames[mid].normalized_progress < progress) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    if (low >= frames.length) return frames[frames.length - 1].sequence_index;
    if (high < 0) return frames[0].sequence_index;

    const diffLow = Math.abs(frames[low].normalized_progress - progress);
    const diffHigh = Math.abs(frames[high].normalized_progress - progress);
    return diffLow < diffHigh ? frames[low].sequence_index : frames[high].sequence_index;
  }, []);

  // Canvas draw with object-fit cover
  const drawFrame = useCallback((img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width || 1600;
    const ih = img.naturalHeight || img.height || 900;

    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const nx = (cw - nw) * 0.5;
    const ny = (ch - nh) * 0.5;

    ctx.drawImage(img, nx, ny, nw, nh);
    lastDrawnImageRef.current = img;
  }, []);

  // Resize canvas with clamped DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const targetW = Math.round(rect.width * dpr);
    const targetH = Math.round(rect.height * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      if (lastDrawnImageRef.current) {
        drawFrame(lastDrawnImageRef.current);
      }
    }
  }, [drawFrame]);

  // High-performance RAF scroll loop: Direct DOM updates, ZERO React state churn
  const updateLoop = useCallback(() => {
    const loader = frameLoaderRef.current;
    if (!loader) return;

    // LERP response (0.14 for direct responsiveness + micro-smoothing)
    const target = targetProgressRef.current;
    let current = currentProgressRef.current;
    current += (target - current) * 0.14;

    if (Math.abs(target - current) < 0.0001) {
      current = target;
    }
    currentProgressRef.current = current;

    // =========================================================================
    // 1. ACTO 00: Aperture Transition (Progress 0.00 to 0.08)
    // =========================================================================
    const apertureEl = entryApertureRef.current;
    if (apertureEl) {
      if (current <= 0.001) {
        apertureEl.style.opacity = '1';
        apertureEl.style.transform = 'scale(1)';
        apertureEl.style.visibility = 'visible';
        apertureEl.style.pointerEvents = 'auto';
      } else if (current > 0.001 && current < 0.075) {
        // As scroll starts, aperture dilates outward, revealing frame 1 beneath
        const apT = current / 0.075;
        const scale = 1 + apT * 2.8; // Scales up to 3.8x
        const opacity = Math.max(0, 1 - apT * 1.3);
        apertureEl.style.transform = `scale(${scale.toFixed(3)})`;
        apertureEl.style.opacity = opacity.toFixed(3);
        apertureEl.style.visibility = 'visible';
        apertureEl.style.pointerEvents = 'none';
      } else {
        apertureEl.style.opacity = '0';
        apertureEl.style.visibility = 'hidden';
        apertureEl.style.pointerEvents = 'none';
      }
    }

    // =========================================================================
    // 2. ACTO 01: Scrollytelling Scrubbing (Progress 0.075 to 0.94)
    // =========================================================================
    // Map overall progress to the 240 frames
    const journeyStart = 0.075;
    const journeyEnd = 0.94;
    const journeyProg = Math.max(0, Math.min(1, (current - journeyStart) / (journeyEnd - journeyStart)));

    const targetFrameIdx = findFrameIndex(journeyProg);
    currentFrameRef.current = targetFrameIdx;

    loader.updateWindow(targetFrameIdx);

    const frameImg = loader.getFrame(targetFrameIdx);
    if (frameImg) {
      drawFrame(frameImg);
    } else if (lastDrawnImageRef.current) {
      drawFrame(lastDrawnImageRef.current);
    }

    // =========================================================================
    // 3. Editorial Typography Overlap Transitions
    // =========================================================================
    const chapters = manifestData.chapters;
    let activeChIdx = 0;

    for (let i = 0; i < chapters.length; i++) {
      const ch = chapters[i];
      const start = ch.provisional_progress.start;
      const end = ch.provisional_progress.end;
      const chSpan = end - start;

      if (journeyProg >= start && journeyProg <= end) {
        activeChIdx = i;
      }

      // Local progress within chapter (0..1)
      const localProg = Math.max(0, Math.min(1, (journeyProg - start) / chSpan));

      let opacity = 0;
      let translateY = 20;

      // Temporal overlap curve:
      // 0.00-0.18: In (fade + upward translation)
      // 0.18-0.72: Hold
      // 0.72-1.00: Out (fade + upward translation into next chapter)
      if (localProg >= 0 && localProg <= 0.18) {
        const tIn = localProg / 0.18;
        opacity = tIn;
        translateY = 20 * (1 - tIn);
      } else if (localProg > 0.18 && localProg <= 0.72) {
        opacity = 1;
        translateY = 0;
      } else if (localProg > 0.72 && localProg <= 1.0) {
        if (i === chapters.length - 1) {
          opacity = 1;
          translateY = 0;
        } else {
          const tOut = (localProg - 0.72) / 0.28;
          opacity = 1 - tOut;
          translateY = -18 * tOut;
        }
      }

      // Chapter 1 is active once aperture starts opening
      if (i === 0 && journeyProg < 0.05) {
        opacity = Math.max(0, (current - 0.03) / 0.04);
        translateY = 0;
      }

      const chEl = chapterRefs.current[i];
      if (chEl) {
        chEl.style.opacity = opacity.toFixed(3);
        chEl.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
        chEl.style.visibility = opacity > 0.005 ? 'visible' : 'hidden';
        chEl.style.pointerEvents = opacity > 0.4 ? 'auto' : 'none';
      }
    }

    // Update indicator ticks only if active chapter changes (no wasted work)
    if (lastActiveChapterIdxRef.current !== activeChIdx) {
      lastActiveChapterIdxRef.current = activeChIdx;
      indicatorDotsRef.current.forEach((dot, idx) => {
        if (dot) {
          if (idx === activeChIdx) {
            dot.classList.add('is-active');
          } else {
            dot.classList.remove('is-active');
          }
        }
      });
    }

    // Update progress bar
    if (indicatorProgressBarRef.current) {
      indicatorProgressBarRef.current.style.transform = `scaleY(${journeyProg.toFixed(3)})`;
    }

    // =========================================================================
    // 4. Exit Mask to Acto 02 (Progress > 0.94)
    // =========================================================================
    const exitMaskEl = exitMaskRef.current;
    if (exitMaskEl) {
      if (current > 0.93) {
        const exitT = Math.min(1, (current - 0.93) / 0.07);
        exitMaskEl.style.opacity = exitT.toFixed(3);
        exitMaskEl.style.visibility = 'visible';
      } else {
        exitMaskEl.style.opacity = '0';
        exitMaskEl.style.visibility = 'hidden';
      }
    }

    // =========================================================================
    // 5. Throttled Telemetry (Updates every 120ms, Staging/Dev only)
    // =========================================================================
    const now = performance.now();
    if (now - lastDebugUpdateRef.current > 120 && debugPanelRef.current) {
      lastDebugUpdateRef.current = now;
      const metaItem = manifestData.frames[targetFrameIdx - 1];
      debugPanelRef.current.innerHTML = `
        <div>Prog: <span>${current.toFixed(3)}</span> | J: <span>${journeyProg.toFixed(2)}</span></div>
        <div>Cap: <span>${chapters[activeChIdx] ? chapters[activeChIdx].id : '01_SEARCH'}</span></div>
        <div>Frame: <span>${targetFrameIdx}/240</span> (Src #${metaItem ? metaItem.source_frame : 0})</div>
        <div>GPU Cache: <span>${loader.getLoadedCount()}/32</span></div>
      `;
    }

    rafIdRef.current = requestAnimationFrame(updateLoop);
  }, [drawFrame, findFrameIndex]);

  // Handle passive scroll listener and loader initialization
  useEffect(() => {
    // Initialize FrameLoader with sliding window
    const loader = new FrameLoader({
      totalFrames: 240,
      basePath: '/scrollytelling/desktop',
      windowBehind: 10,
      windowAhead: 16,
      maxConcurrent: 5,
      onFrameReady: (idx, img) => {
        if (idx === currentFrameRef.current) {
          drawFrame(img);
        }
      }
    });
    frameLoaderRef.current = loader;

    // Load initial critical set immediately (frames 1..12)
    loader.loadInitialSet(12).then(() => {
      const firstImg = loader.getFrame(1);
      if (firstImg) drawFrame(firstImg);
    });

    // ResizeObserver
    const resizeObs = new ResizeObserver(() => {
      resizeCanvas();
    });
    if (canvasRef.current) {
      resizeObs.observe(canvasRef.current);
    }
    resizeCanvas();

    // Passive scroll listener: container-relative progress (0..1)
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollDistance = rect.height - window.innerHeight;
      if (totalScrollDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Start RAF loop
    rafIdRef.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      resizeObs.disconnect();
      loader.destroy();
    };
  }, [drawFrame, resizeCanvas, updateLoop]);

  return (
    <section 
      ref={containerRef} 
      className="digital-journey" 
      aria-label="PatagoniaCoach V2: Acto 00 (Apertura) y Acto 01 (Digital Journey)"
    >
      <div className="digital-journey__sticky">
        {/* Canvas Render (16:9 Aspect Preservation with Cover Logic) */}
        <div className="digital-journey__canvas-wrap">
          <canvas 
            ref={canvasRef} 
            className="digital-journey__canvas" 
            aria-hidden="true" 
          />
          {/* Subtle cinematic vignette */}
          <div className="digital-journey__overlay" aria-hidden="true" />
        </div>

        {/* ACTO 00: The Cartographic Aperture Overlay */}
        <div ref={entryApertureRef} className="digital-journey__aperture-layer">
          <EntryAperture />
        </div>

        {/* Exit transition to Acto 02 (Manifesto) */}
        <div 
          ref={exitMaskRef} 
          className="digital-journey__exit-mask" 
          aria-hidden="true" 
        />

        {/* ACTO 01: Editorial Typography Layer */}
        <div className="digital-journey__content">
          {EDITORIAL_CHAPTERS.map((item, idx) => (
            <div 
              key={item.id}
              ref={(el) => (chapterRefs.current[idx] = el)}
              className={`digital-journey__chapter ${item.classModifier}`}
            >
              {/* Technical Marker */}
              <div className="digital-journey__marker">
                <span className="digital-journey__marker-dot" />
                <span className="digital-journey__marker-text">{item.marker}</span>
              </div>

              {/* Monumental Headline: Text Reveal A (Split-Line Ascend) */}
              <div className="digital-journey__headline-wrap">
                {item.headlineLines.map((line, lIdx) => (
                  <div key={lIdx} className="digital-journey__line-mask">
                    <h2 className="digital-journey__headline-line">
                      {line}
                    </h2>
                  </div>
                ))}
              </div>

              {/* Supporting Line */}
              <p className="digital-journey__subhead">
                {item.supporting}
              </p>

              {/* Conversion CTA (Single focused action per chapter) */}
              {item.cta && (
                <div className="digital-journey__cta-wrap">
                  {item.cta.type === 'action' && item.cta.action === 'diagnostic' ? (
                    <button
                      type="button"
                      onClick={() => openDigitalDiagnostic()}
                      data-cta={item.cta.dataCta}
                      className="digital-journey__cta-btn digital-journey__cta-btn--primary"
                    >
                      <span>{item.cta.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : item.cta.type === 'whatsapp' ? (
                    <a
                      href={item.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cta={item.cta.dataCta}
                      className="digital-journey__cta-btn digital-journey__cta-btn--primary"
                    >
                      <span>{item.cta.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="digital-journey__cta-group">
                      <a
                        href={item.cta.href}
                        data-cta={item.cta.dataCta}
                        className="digital-journey__cta-btn digital-journey__cta-btn--primary"
                      >
                        <span>{item.cta.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      {item.cta.secondary && (
                        <a
                          href={item.cta.secondary.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cta={item.cta.secondary.dataCta}
                          className="digital-journey__cta-btn digital-journey__cta-btn--secondary"
                        >
                          <span>{item.cta.secondary.label}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technical Progress Indicator (Desktop & Mobile Rail) */}
        <div className="digital-journey__rail" aria-hidden="true">
          <div className="digital-journey__rail-track">
            <div 
              ref={indicatorProgressBarRef} 
              className="digital-journey__rail-bar" 
            />
          </div>
          <div className="digital-journey__rail-steps">
            {manifestData.chapters.map((ch, idx) => (
              <div 
                key={ch.id} 
                ref={(el) => (indicatorDotsRef.current[idx] = el)}
                className={`digital-journey__rail-step ${idx === 0 ? 'is-active' : ''}`}
              >
                <span className="digital-journey__rail-num">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="digital-journey__rail-title">
                  {ch.title.split(' / ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Telemetry Bar (Staging & Dev only) */}
      <aside 
        ref={debugPanelRef} 
        className="digital-journey__debug" 
        aria-label="Telemetría de rendimiento"
      />
    </section>
  );
}
