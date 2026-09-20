import { useEffect, useRef, useState, useCallback } from 'react';
import { FrameLoader } from './frameLoader';
import './DigitalJourney.css';

// Manifest definition imported or fetched
import manifestData from '../../../public/scrollytelling/manifest/scrollytelling_manifest.json';

const PROVISIONAL_COPIES = [
  {
    id: '01_SEARCH',
    eyebrow: 'ESTRATEGIA DIGITAL',
    headline: 'Todo empieza con una búsqueda.',
    subhead: 'Diseñamos la arquitectura y presencia digital que conecta a empresas de la Patagonia con clientes de alto valor.',
    classModifier: 'digital-journey__chapter--search'
  },
  {
    id: '02_DISCOVERY',
    eyebrow: 'POSICIONAMIENTO & GEO',
    headline: 'Ser encontrado es sólo el comienzo.',
    subhead: 'Optimización avanzada de motores de búsqueda e inteligencia artificial para convertir visitas en oportunidades reales.',
    classModifier: 'digital-journey__chapter--discovery'
  },
  {
    id: '03_RESPONSIVE',
    eyebrow: 'INGENIERÍA MULTI-PANTALLA',
    headline: 'Una experiencia. En cada pantalla.',
    subhead: 'Rendimiento nativo y adaptabilidad fluida para un territorio donde la conectividad exige excelencia técnica.',
    classModifier: 'digital-journey__chapter--responsive'
  },
  {
    id: '04_AI',
    eyebrow: 'INTELIGENCIA APLICADA',
    headline: 'La búsqueda también conversa.',
    subhead: 'Modelos de lenguaje, agentes autónomos e integración de datos que operan sin descanso en su negocio.',
    classModifier: 'digital-journey__chapter--ai'
  },
  {
    id: '05_ARCHITECTURE',
    eyebrow: 'DESARROLLO DE SOFTWARE',
    headline: 'Lo visible depende de lo que está bien construido.',
    subhead: 'Estructuras de código limpias, componentes reutilizables y sistemas listos para escalar a nivel global.',
    classModifier: 'digital-journey__chapter--architecture'
  },
  {
    id: '06_ECOSYSTEM',
    eyebrow: 'SOLUCIONES INTEGRADAS',
    headline: 'Web, SEO e inteligencia trabajando como un sistema.',
    subhead: 'Un ecosistema unificado que potencia el crecimiento y soberanía digital de su empresa en Magallanes.',
    classModifier: 'digital-journey__chapter--ecosystem'
  }
];

export default function DigitalJourney() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const frameLoaderRef = useRef(null);

  // Animation and scroll state refs (not causing re-renders)
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const currentFrameRef = useRef(1);
  const rafIdRef = useRef(null);
  const lastDrawnImageRef = useRef(null);

  // UI state for reactive elements
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [chapterOpacities, setChapterOpacities] = useState([1, 0, 0, 0, 0, 0]);
  const [chapterTranslates, setChapterTranslates] = useState([0, 18, 18, 18, 18, 18]);
  const [showExitMask, setShowExitMask] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Debug metrics state (active in dev / staging)
  const [debugMetrics, setDebugMetrics] = useState({
    progress: '0.000',
    chapter: '01_SEARCH',
    seqFrame: 1,
    sourceFrame: 0,
    cachedCount: 0
  });

  // Helper: Find sequence frame by normalized progress lookup
  const findFrameIndex = useCallback((progress) => {
    const frames = manifestData.frames;
    if (!frames || frames.length === 0) return 1;
    if (progress <= 0) return frames[0].sequence_index;
    if (progress >= 1) return frames[frames.length - 1].sequence_index;

    // Binary search for closest normalized progress
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

    // Closest match between low and high
    if (low >= frames.length) return frames[frames.length - 1].sequence_index;
    if (high < 0) return frames[0].sequence_index;

    const diffLow = Math.abs(frames[low].normalized_progress - progress);
    const diffHigh = Math.abs(frames[high].normalized_progress - progress);
    return diffLow < diffHigh ? frames[low].sequence_index : frames[high].sequence_index;
  }, []);

  // Canvas draw function with object-fit: cover
  const drawFrame = useCallback((img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width || 1600;
    const ih = img.naturalHeight || img.height || 900;

    // Center crop cover
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const nx = (cw - nw) * 0.5;
    const ny = (ch - nh) * 0.5;

    ctx.drawImage(img, nx, ny, nw, nh);
    lastDrawnImageRef.current = img;
  }, []);

  // Update canvas internal pixel size matching CSS dimensions * DPR
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

  // Main scroll loop inside requestAnimationFrame
  const updateLoop = useCallback(() => {
    const loader = frameLoaderRef.current;
    if (!loader) return;

    // Configurable LERP response (0.14 for direct feel with micro-smoothing)
    const target = targetProgressRef.current;
    let current = currentProgressRef.current;
    current += (target - current) * 0.14;

    if (Math.abs(target - current) < 0.0001) {
      current = target;
    }
    currentProgressRef.current = current;

    // 1. Identify target frame by manifest normalized progress
    const targetFrameIdx = findFrameIndex(current);
    currentFrameRef.current = targetFrameIdx;

    // 2. Update dynamic window cache
    loader.updateWindow(targetFrameIdx);

    // 3. Render frame (or fallback to nearest loaded image)
    const frameImg = loader.getFrame(targetFrameIdx);
    if (frameImg) {
      drawFrame(frameImg);
    } else if (lastDrawnImageRef.current) {
      drawFrame(lastDrawnImageRef.current);
    }

    // 4. Calculate chapter transitions & typography animations
    const chapters = manifestData.chapters;
    let activeChIdx = 0;
    const newOpacities = [0, 0, 0, 0, 0, 0];
    const newTranslates = [18, 18, 18, 18, 18, 18];

    for (let i = 0; i < chapters.length; i++) {
      const ch = chapters[i];
      const start = ch.provisional_progress.start;
      const end = ch.provisional_progress.end;
      const chSpan = end - start;

      if (current >= start && current <= end) {
        activeChIdx = i;
      }

      // Local progress within chapter (0..1)
      const localProg = Math.max(0, Math.min(1, (current - start) / chSpan));

      // Standard curve: 0-15% in, 15-70% hold, 70-100% out
      let opacity = 0;
      let translateY = 18;

      if (localProg >= 0 && localProg <= 0.15) {
        const tIn = localProg / 0.15;
        opacity = tIn;
        translateY = 18 * (1 - tIn);
      } else if (localProg > 0.15 && localProg <= 0.70) {
        opacity = 1;
        translateY = 0;
      } else if (localProg > 0.70 && localProg <= 1.0) {
        // Hold final chapter at 100% without fading out abruptly
        if (i === chapters.length - 1) {
          opacity = 1;
          translateY = 0;
        } else {
          const tOut = (localProg - 0.70) / 0.30;
          opacity = 1 - tOut;
          translateY = -14 * tOut;
        }
      }

      // Chapter 1 Special Hero View: stays visible at scroll = 0
      if (i === 0 && current < 0.02) {
        opacity = 1;
        translateY = 0;
      }

      newOpacities[i] = opacity;
      newTranslates[i] = translateY;
    }

    setActiveChapterIndex(activeChIdx);
    setChapterOpacities(newOpacities);
    setChapterTranslates(newTranslates);

    // 5. Exit mask transition at the end of section
    setShowExitMask(current > 0.94);

    // 6. Update debug telemetry
    const metaItem = manifestData.frames[targetFrameIdx - 1];
    setDebugMetrics({
      progress: current.toFixed(3),
      chapter: metaItem ? metaItem.chapter : chapters[activeChIdx].id,
      seqFrame: targetFrameIdx,
      sourceFrame: metaItem ? metaItem.source_frame : 0,
      cachedCount: loader.getLoadedCount()
    });

    rafIdRef.current = requestAnimationFrame(updateLoop);
  }, [drawFrame, findFrameIndex]);

  // Handle passive scroll listener
  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // Initialize FrameLoader
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

    // Load initial critical set (frames 1..12, ~704.5 KB)
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

    // Scroll listener: passive, calculates container-relative progress (0..1)
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

    // Start RAF update loop
    rafIdRef.current = requestAnimationFrame(updateLoop);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
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
      aria-label="Presentación interactiva de capacidades digitales PatagoniaCoach"
    >
      <div className="digital-journey__sticky">
        {/* Canvas Render with 16:9 Aspect Preservation */}
        <canvas 
          ref={canvasRef} 
          className="digital-journey__canvas" 
          aria-hidden="true" 
        />

        {/* Cinematic Vignette Overlay */}
        <div className="digital-journey__overlay" aria-hidden="true" />

        {/* Exit transition gradient to black section below */}
        <div 
          className={`digital-journey__exit-mask ${showExitMask ? 'is-active' : ''}`} 
          aria-hidden="true" 
        />

        {/* HTML Semantic Editorial Content */}
        <div className="digital-journey__content">
          {PROVISIONAL_COPIES.map((item, idx) => {
            const opacity = chapterOpacities[idx];
            const translateY = chapterTranslates[idx];
            const isVisible = opacity > 0.01;

            return (
              <div 
                key={item.id}
                className={`digital-journey__chapter ${item.classModifier} ${isVisible ? 'is-active' : ''}`}
                style={{
                  opacity: opacity,
                  transform: `translateY(${translateY}px)`
                }}
              >
                {item.eyebrow && (
                  <span className="digital-journey__eyebrow">
                    {item.eyebrow}
                  </span>
                )}
                <h1 className="digital-journey__headline">
                  {item.headline}
                </h1>
                <p className="digital-journey__subhead">
                  {item.subhead}
                </p>
              </div>
            );
          })}
        </div>

        {/* Discrete Chapter Indicator (01 — 06) */}
        <div className="digital-journey__indicator" aria-hidden="true">
          {manifestData.chapters.map((ch, idx) => (
            <div 
              key={ch.id} 
              className={`digital-journey__dot-wrap ${activeChapterIndex === idx ? 'is-active' : ''}`}
            >
              <span className="digital-journey__dot-label">
                {String(idx + 1).padStart(2, '0')} {ch.title.split(' / ')[0]}
              </span>
              <div className="digital-journey__dot" />
            </div>
          ))}
        </div>

        {/* Scroll hint visible only on initial frame */}
        <div 
          className="digital-journey__scroll-hint"
          style={{ opacity: chapterOpacities[0] > 0.8 ? 1 : 0 }}
          aria-hidden="true"
        >
          <div className="digital-journey__scroll-line" />
          <span className="digital-journey__scroll-text">Desplaza para explorar</span>
        </div>
      </div>

      {/* Debug Mode Bar (Staging Only) */}
      <aside className="digital-journey__debug" aria-label="Telemetría de desarrollo">
        <div>Progress: <span>{debugMetrics.progress}</span></div>
        <div>Capítulo: <span>{debugMetrics.chapter}</span></div>
        <div>Seq Frame: <span>{debugMetrics.seqFrame} / 240</span></div>
        <div>Master Frame: <span>#{debugMetrics.sourceFrame}</span></div>
        <div>Decoded Cache: <span>{debugMetrics.cachedCount} / 32</span></div>
      </aside>
    </section>
  );
}
