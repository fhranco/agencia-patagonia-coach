import { useEffect, useRef } from 'react';
import './EntryAperture.css';

/**
 * EntryAperture — Acto 00: The Cartographic Aperture
 * 
 * Dirección: The Cartographic Aperture (53°S / Punta Arenas)
 * - Pantalla inicial en Basalto Austral (#05070A).
 * - Coordenada técnica: 53.1638° S · 70.9171° W · PUNTA ARENAS / PATAGONIA.
 * - Curvas de nivel vectoriales SVG optimizadas con micro-profundidad y respuesta sutil al cursor.
 * - Activación por scroll: las curvas se separan concéntricamente como un diafragma/portal,
 *   revelando físicamente el frame_0001.webp del Digital Journey sin cortes bruscos.
 */
export default function EntryAperture({ scrollProgress = 0 }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const rafIdRef = useRef(null);

  // Mouse parallax interaction (Desktop only, subtle inertia)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalized coordinates (-1 to 1)
      const nx = (e.clientX / innerWidth - 0.5) * 2;
      const ny = (e.clientY / innerHeight - 0.5) * 2;
      mousePosRef.current.targetX = nx * 14; // Max 14px displacement
      mousePosRef.current.targetY = ny * 14;
    };

    const updateMouseLoop = () => {
      const mouse = mousePosRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      if (svgRef.current) {
        svgRef.current.style.transform = `translate3d(${mouse.x.toFixed(2)}px, ${mouse.y.toFixed(2)}px, 0) scale(${1 + Math.abs(mouse.x) * 0.002})`;
      }

      rafIdRef.current = requestAnimationFrame(updateMouseLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafIdRef.current = requestAnimationFrame(updateMouseLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="entry-aperture" aria-label="Apertura cartográfica 53°S PatagoniaCoach">
      {/* Topographic Vector Isolines System */}
      <div className="entry-aperture__vector-wrap" ref={svgRef}>
        <svg 
          viewBox="0 0 1000 1000" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="entry-aperture__svg"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="apertureGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.30" />
            </linearGradient>
          </defs>

          {/* Ambient center flare */}
          <circle cx="500" cy="500" r="380" fill="url(#apertureGlow)" />

          {/* Cartographic Coordinate Crosshairs */}
          <line x1="500" y1="80" x2="500" y2="920" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.4" />
          <line x1="80" y1="500" x2="920" y2="500" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.4" />
          <circle cx="500" cy="500" r="4" fill="#F59E0B" opacity="0.8" />

          {/* Contour Lines Layer 1: Outermost Deep Bathymetry */}
          <path 
            className="entry-contour entry-contour--1"
            d="M 120 500 C 120 280, 280 120, 500 120 C 720 120, 880 280, 880 500 C 880 720, 720 880, 500 880 C 280 880, 120 720, 120 500 Z" 
            stroke="url(#curveGrad)" 
            strokeWidth="0.75" 
          />

          {/* Contour Lines Layer 2: Regional Shoreline */}
          <path 
            className="entry-contour entry-contour--2"
            d="M 190 500 C 180 340, 310 180, 500 190 C 680 180, 810 320, 810 500 C 800 680, 670 810, 500 810 C 310 820, 190 670, 190 500 Z" 
            stroke="#64748B" 
            strokeWidth="0.85" 
            opacity="0.35" 
          />

          {/* Contour Lines Layer 3: Continental Shelf */}
          <path 
            className="entry-contour entry-contour--3"
            d="M 260 500 C 260 380, 370 260, 500 260 C 630 250, 740 370, 740 500 C 730 630, 620 740, 500 740 C 370 730, 260 620, 260 500 Z" 
            stroke="#94A3B8" 
            strokeWidth="0.9" 
            opacity="0.45" 
          />

          {/* Contour Lines Layer 4: Fjord / Estrecho de Magallanes Channeling */}
          <path 
            className="entry-contour entry-contour--4"
            d="M 330 500 C 330 410, 410 330, 500 330 C 590 330, 670 410, 670 500 C 670 590, 580 670, 500 670 C 410 660, 330 580, 330 500 Z" 
            stroke="url(#curveGrad)" 
            strokeWidth="1.1" 
          />

          {/* Contour Lines Layer 5: Coastal Ridge */}
          <path 
            className="entry-contour entry-contour--5"
            d="M 390 500 C 390 440, 440 390, 500 390 C 560 390, 610 440, 610 500 C 610 560, 550 610, 500 610 C 440 610, 390 550, 390 500 Z" 
            stroke="#F59E0B" 
            strokeWidth="1" 
            opacity="0.5" 
          />

          {/* Contour Lines Layer 6: Focal Aperture Rim */}
          <circle 
            className="entry-contour entry-contour--center"
            cx="500" 
            cy="500" 
            r="70" 
            stroke="#F59E0B" 
            strokeWidth="1.5" 
            strokeDasharray="3 5"
            opacity="0.8" 
          />
        </svg>
      </div>

      {/* Editorial Content Overlay */}
      <div className="entry-aperture__content">
        {/* Technical Coordinate Header */}
        <div className="entry-aperture__meta">
          <span className="entry-aperture__coord">53.1638° S · 70.9171° W</span>
          <span className="entry-aperture__location">PUNTA ARENAS / MAGALLANES</span>
        </div>

        {/* Sober Brand Monogram */}
        <div className="entry-aperture__brand">
          <div className="entry-aperture__badge">ACTO 00 // APERTURA</div>
          <h1 className="entry-aperture__title">PATAGONIACOACH</h1>
          <p className="entry-aperture__tagline">
            Ingeniería digital de alta gama forjada en el confín austral.
          </p>
        </div>

        {/* Minimal Scroll Prompt */}
        <div className="entry-aperture__prompt" aria-hidden="true">
          <div className="entry-aperture__scroll-line" />
          <span className="entry-aperture__scroll-text">DESPLAZAR PARA INICIAR</span>
        </div>
      </div>
    </div>
  );
}
