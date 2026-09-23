import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, Layers, Globe, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DevelopmentPillar.css';

gsap.registerPlugin(ScrollTrigger);

const DevelopmentPillar = () => {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const gridRef = useRef(null);
  const monumentalRef = useRef(null);
  const wireframeChassisRef = useRef(null);
  const moduleArchRef = useRef(null);
  const moduleUiRef = useRef(null);
  const connectionSvgRef = useRef(null);
  const connectionPathRef = useRef(null);
  const moduleSystemRef = useRef(null);
  const browserBarRef = useRef(null);
  const contentColRef = useRef(null);
  const wowSignalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =====================================================================
      // DESKTOP KINETIC CHOREOGRAPHY (FASE 07 — Optimized & Dense Momentum)
      // Total duration calibrated to +=130% for crisp, uninterrupted momentum.
      // Timeline normalized to 10s:
      // 0.00 - 1.20 (0% - 12%):   Entrada / Estructura
      // 1.20 - 3.00 (12% - 30%):  Arquitectura
      // 3.00 - 4.60 (30% - 46%):  Componentes
      // 4.60 - 6.00 (46% - 60%):  Conexiones
      // 6.00 - 7.60 (60% - 76%):  Integración
      // 7.60 - 8.70 (76% - 87%):  Sistema Final & Settle
      // 8.70 - 10.00 (87% - 100%): Transformación hacia Search Ready
      // =====================================================================
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=130%",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1
          }
        });

        // -------------------------------------------------------------------
        // 0.00 - 1.20 (0% - 12%): ENTRADA / ESTRUCTURA
        // -------------------------------------------------------------------
        tl.fromTo(gridRef.current,
          { opacity: 0.2, scale: 0.96 },
          { opacity: 0.35, scale: 1, duration: 1.2, ease: "power2.out" },
          0
        )
        .fromTo(monumentalRef.current,
          { x: 60, y: 20, scale: 0.95, opacity: 0.04 },
          { x: 0, y: 0, scale: 1.04, opacity: 0.08, duration: 1.2, ease: "power2.out" },
          0
        )
        .fromTo(contentColRef.current,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
          0
        )
        .fromTo(wireframeChassisRef.current,
          { opacity: 0.4, scale: 0.94, borderColor: "rgba(56, 189, 248, 0.15)" },
          { opacity: 1, scale: 1, borderColor: "rgba(56, 189, 248, 0.35)", duration: 1.2, ease: "power3.out" },
          0
        )

        // -------------------------------------------------------------------
        // 1.20 - 3.00 (12% - 30%): ARQUITECTURA
        // -------------------------------------------------------------------
        .fromTo(moduleArchRef.current,
          { 
            x: 180, 
            y: -90, 
            rotationY: -14, 
            rotationX: 8, 
            scale: 0.82, 
            opacity: 0,
            filter: "blur(6px)"
          },
          { 
            x: 35, 
            y: -25, 
            rotationY: -3, 
            rotationX: 2, 
            scale: 0.95, 
            opacity: 1, 
            filter: "blur(0px)",
            duration: 1.8, 
            ease: "power3.out" 
          },
          1.2
        )

        // -------------------------------------------------------------------
        // 3.00 - 4.60 (30% - 46%): COMPONENTES (Entra dentro del marco MID)
        // -------------------------------------------------------------------
        .fromTo(moduleUiRef.current,
          { 
            x: -40, 
            y: 90, 
            rotationY: 10, 
            rotationX: -4, 
            scale: 0.85, 
            opacity: 0 
          },
          { 
            x: 0, 
            y: 25, 
            rotationY: 2, 
            rotationX: -1, 
            scale: 0.95, 
            opacity: 1, 
            duration: 1.6, 
            ease: "power3.out" 
          },
          3.0
        )

        // -------------------------------------------------------------------
        // 4.60 - 6.00 (46% - 60%): CONEXIONES
        // -------------------------------------------------------------------
        .fromTo(connectionSvgRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.inOut" },
          4.6
        )
        .fromTo(connectionPathRef.current,
          { strokeDashoffset: 400 },
          { strokeDashoffset: 0, duration: 1.4, ease: "power2.out" },
          4.6
        )

        // -------------------------------------------------------------------
        // 6.00 - 7.60 (60% - 76%): INTEGRACIÓN FÍSICA
        // Las piezas se mueven y bloquean en el sistema unificado.
        // -------------------------------------------------------------------
        .to(moduleArchRef.current, {
          x: 0,
          y: 0,
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          opacity: 0,
          duration: 1.4,
          ease: "expo.out"
        }, 6.0)
        .to(moduleUiRef.current, {
          x: 0,
          y: 0,
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          opacity: 0,
          duration: 1.4,
          ease: "expo.out"
        }, 6.0)
        .to(connectionSvgRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        }, 6.2)
        .to(wireframeChassisRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        }, 6.2)
        .fromTo(moduleSystemRef.current,
          { scale: 0.94, opacity: 0, y: 25 },
          { scale: 1, opacity: 1, y: 0, duration: 1.4, ease: "expo.out" },
          6.2
        )

        // -------------------------------------------------------------------
        // 7.60 - 8.70 (76% - 87%): SISTEMA FINAL & SETTLE
        // -------------------------------------------------------------------
        .to(moduleSystemRef.current, {
          scale: 1.025,
          boxShadow: "0 40px 100px -15px rgba(0, 0, 0, 0.98), 0 0 60px rgba(56, 189, 248, 0.25)",
          duration: 0.15,
          ease: "power2.out"
        }, 7.6)
        .to(moduleSystemRef.current, {
          scale: 1,
          boxShadow: "0 30px 80px -20px rgba(0, 0, 0, 0.95), 0 0 40px rgba(56, 189, 248, 0.12)",
          duration: 0.25,
          ease: "power3.out"
        }, 7.75)
        .fromTo(wowSignalRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" },
          7.75
        )
        .to(gridRef.current, {
          opacity: 0.4,
          duration: 0.25,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut"
        }, 7.75)

        // -------------------------------------------------------------------
        // 8.70 - 10.00 (87% - 100%): TRANSFORMACIÓN HACIA SEARCH READY
        // 1. Interfaz escala a 1.06 con transformOrigin: "left center" expandiéndose hacia la DERECHA
        // 2. CONSTRUIR reacciona como objeto espacial y se desplaza detrás
        // 3. Capacidades y CTA reducen protagonismo
        // 4. Barra URL se separa físicamente hacia arriba (y: -24px) y escala sin invadir la izquierda
        // 5. Canvas inferior se atenúa
        // -------------------------------------------------------------------
        .to(moduleSystemRef.current, {
          scale: 1.06,
          x: 0,
          transformOrigin: "left center",
          duration: 1.3,
          ease: "power2.out"
        }, 8.7)
        .to(monumentalRef.current, {
          x: -80,
          scale: 1.12,
          opacity: 0.08,
          duration: 1.3,
          ease: "power2.out"
        }, 8.7)
        .to(contentColRef.current.querySelector('.dev-capabilities-wrap'), {
          opacity: 0.25,
          y: 15,
          duration: 1.0,
          ease: "power2.out"
        }, 8.7)
        .to(contentColRef.current.querySelector('.dev-cta-container'), {
          opacity: 0.3,
          y: 15,
          duration: 1.0,
          ease: "power2.out"
        }, 8.7)
        .to(moduleSystemRef.current.querySelector('.dev-system-canvas'), {
          opacity: 0.65,
          filter: "brightness(0.68) contrast(1.12)",
          duration: 1.2,
          ease: "power2.out"
        }, 8.7)
        // La Barra URL se separa físicamente hacia arriba y gana escala hacia la derecha
        .to(browserBarRef.current, {
          y: -24,
          scale: 1.08,
          x: 0,
          transformOrigin: "left center",
          zIndex: 60,
          boxShadow: "0 0 50px rgba(56, 189, 248, 0.65), 0 20px 60px rgba(0, 0, 0, 0.95)",
          borderColor: "rgba(56, 189, 248, 0.95)",
          backgroundColor: "rgba(11, 15, 23, 0.98)",
          duration: 1.3,
          ease: "power2.out"
        }, 8.7);

        // -------------------------------------------------------------------
        // CURSOR PARALLAX MULTICAPA (Diferenciado por profundidad)
        // BACK: mínimo | MID: medio + 3D tilt | FRONT: estable
        // -------------------------------------------------------------------
        const root = rootRef.current;
        const handleMouseMove = (e) => {
          const rect = root.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          // BACK layer (Monumental typography & Grid) - Minimal drift
          gsap.to(monumentalRef.current, {
            x: x * 10,
            y: y * 6,
            duration: 1.2,
            ease: "power1.out",
            overwrite: "auto"
          });

          // MID layer (Assembly stage & System window) - Medium spatial depth
          gsap.to(stageRef.current, {
            x: x * 22,
            y: y * 14,
            rotationY: x * 5,
            rotationX: -y * 4,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto"
          });

          // FRONT layer (Semantic text) remains completely stable (0px)
        };

        root.addEventListener('mousemove', handleMouseMove);
        return () => root.removeEventListener('mousemove', handleMouseMove);
      });

      // =====================================================================
      // MOBILE KINETIC CHOREOGRAPHY (Microversión: Fragmentos -> Sistema)
      // Sin pin excesivo, preserva la lógica de ensamblaje en viewport vertical.
      // =====================================================================
      mm.add("(max-width: 1023px)", () => {
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.6
          }
        });

        mobileTl
          .fromTo(contentColRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
          )
          .fromTo(moduleArchRef.current,
            { opacity: 0, y: 40, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
            "-=0.3"
          )
          .fromTo(moduleUiRef.current,
            { opacity: 0, y: 40, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
            "-=0.4"
          )
          .to([moduleArchRef.current, moduleUiRef.current], {
            opacity: 0.3,
            scale: 0.95,
            duration: 0.6,
            ease: "power2.inOut"
          })
          .fromTo(moduleSystemRef.current,
            { opacity: 0, y: 30, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out" },
            "-=0.4"
          );
      });

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={rootRef} 
      id="pilar-desarrollo" 
      className="dev-pillar-root" 
      aria-label="Pilar 01: Desarrollo e Ingeniería de Software"
    >
      {/* =====================================================================
          1. LAYER: BACK — Technical Vector Grid & Monumental Typography
          ===================================================================== */}
      <div ref={gridRef} className="dev-bg-grid" aria-hidden="true" />
      <div ref={monumentalRef} className="dev-monumental-text" aria-hidden="true">
        CONSTRUIR
      </div>

      <div className="dev-spatial-viewport">
        {/* =====================================================================
            2. LAYER: FRONT — Semantic Commercial Content & Integrated CTA
            Breaks rigid 42/58 split; content stands crisp on the left foreground.
            ===================================================================== */}
        <article ref={contentColRef} className="dev-content-col">
          <div className="dev-eyebrow-wrap">
            <span className="dev-step-num">01</span>
            <span className="dev-eyebrow">DESARROLLO & INGENIERÍA DIGITAL</span>
          </div>

          <h2 className="dev-title">
            CONSTRUIMOS
          </h2>

          <p className="dev-statement">
            Ingeniería y desarrollo digital para convertir necesidades de negocio en plataformas rápidas, escalables y mantenibles.
          </p>

          <p className="dev-desc">
            Diseñamos y programamos plataformas digitales como activos estratégicos de capital. 
            Arquitecturas web modernas con React, Vite y Next.js concebidas para ofrecer 
            velocidad de navegación instantánea, estabilidad técnica bajo condiciones de red 
            extremas y sincronización transaccional robusta.
          </p>

          {/* Capabilities Grid */}
          <div className="dev-capabilities-wrap" aria-label="Capacidades de Desarrollo">
            <Link to="/servicios/desarrollo-web" className="dev-cap-pill">
              <Code2 className="w-3.5 h-3.5 text-patagonia-cyan shrink-0" />
              <span>Desarrollo Web Corporativo</span>
            </Link>

            <Link to="/servicios/aplicaciones-web-pro" className="dev-cap-pill">
              <Layers className="w-3.5 h-3.5 text-patagonia-cyan shrink-0" />
              <span>Aplicaciones Web Pro & PWA</span>
            </Link>

            <Link to="/servicios/desarrollo-web" className="dev-cap-pill">
              <Globe className="w-3.5 h-3.5 text-patagonia-cyan shrink-0" />
              <span>Plataformas Digitales & Tours 360</span>
            </Link>
          </div>

          {/* Bespoke Integrated Architectural CTA (#15) */}
          <div className="dev-cta-container">
            <div className="dev-cta-conduit" aria-hidden="true">
              <span className="dev-conduit-dot" />
              <span className="dev-conduit-line" />
            </div>
            <Link 
              to="/servicios/desarrollo-web" 
              className="dev-kinetic-cta"
              id="cta-desarrollo-kinetic"
            >
              <span className="dev-cta-glow" aria-hidden="true" />
              <span className="dev-cta-label">Ver Soluciones de Desarrollo</span>
              <span className="dev-cta-icon-box">
                <ArrowUpRight className="w-4 h-4 dev-cta-icon" />
              </span>
            </Link>
            <span className="dev-cta-spec">INGENIERÍA WEB // MAGALLANES</span>
          </div>
        </article>

        {/* =====================================================================
            3. LAYER: MID — Spatial Assembly Stage (60–80% Viewport System Window)
            Crosses the central axis, interfaces behind typography, physical assembly.
            ===================================================================== */}
        <div className="dev-assembly-wrapper">
          <div ref={stageRef} className="dev-assembly-stage">
            
            {/* ETAPA 01: Wireframe Chassis & PatagoniaCoach Real Identity */}
            <div ref={wireframeChassisRef} className="dev-wireframe-chassis" aria-hidden="true">
              <div className="chassis-bracket bracket-tl">
                <span>ARQUITECTURA DIGITAL // 53°S</span>
              </div>
              <div className="chassis-bracket bracket-tr">
                <span>CAPA 01 // SISTEMA</span>
              </div>
              <div className="chassis-bracket bracket-bl">
                <span>CORE_MODULAR // REACT</span>
              </div>
              <div className="chassis-bracket bracket-br">
                <span>SISTEMA // MAGALLANES</span>
              </div>
              <div className="chassis-grid-lines" />
            </div>

            {/* ETAPA 02: Fragment A — Architecture Blueprint */}
            <div ref={moduleArchRef} className="dev-fragment dev-fragment-arch">
              <div className="dev-fragment-header">
                <span className="dev-dot dot-red" />
                <span className="dev-dot dot-yellow" />
                <span className="dev-dot dot-green" />
                <span className="dev-fragment-caption">ARCHITECTURE • REACT + VITE DECOUPLED</span>
              </div>
              <div className="dev-fragment-body">
                <img 
                  src="/images/web-core.webp" 
                  alt="Representación visual de arquitectura web desacoplada" 
                  className="dev-fragment-img"
                  loading="lazy"
                />
                <div className="dev-arch-spec">
                  <span className="text-patagonia-cyan">MODULAR SSR/SPA</span>
                  <span>COMPONENT HIERARCHY</span>
                </div>
              </div>
            </div>

            {/* ETAPA 03: Fragment B — Component UI Module */}
            <div ref={moduleUiRef} className="dev-fragment dev-fragment-ui">
              <div className="dev-fragment-header">
                <Cpu className="w-3 h-3 text-patagonia-gold" />
                <span className="dev-fragment-caption">PWA ENGINE • OFFLINE FIRST</span>
              </div>
              <div className="dev-fragment-body">
                <img 
                  src="/images/apps-pro.webp" 
                  alt="Representación conceptual de aplicaciones web progresivas" 
                  className="dev-fragment-img"
                  loading="lazy"
                />
                <div className="dev-ui-spec">
                  <span>CACHE STORAGE API</span>
                  <span className="text-patagonia-gold">BACKGROUND SYNC</span>
                </div>
              </div>
            </div>

            {/* ETAPA 04: SVG Connection Vector Bus */}
            <svg 
              ref={connectionSvgRef} 
              className="dev-connection-svg" 
              viewBox="0 0 600 400" 
              fill="none" 
              aria-hidden="true"
            >
              <path 
                ref={connectionPathRef}
                d="M 160 120 C 260 120, 240 280, 360 280" 
                stroke="rgba(56, 189, 248, 0.7)" 
                strokeWidth="2" 
                strokeDasharray="8 4"
              />
              <circle cx="160" cy="120" r="4" fill="#38BDF8" />
              <circle cx="360" cy="280" r="4" fill="#F59E0B" />
            </svg>

            {/* ETAPA 05 & 06 & 07: Unified Operational System Window */}
            <div ref={moduleSystemRef} className="dev-system-window">
              {/* Browser Header Bar — Detaches physically in 87-100% for Search Ready */}
              <div ref={browserBarRef} className="dev-browser-header">
                <div className="dev-browser-dots">
                  <span className="dev-dot dot-red" />
                  <span className="dev-dot dot-yellow" />
                  <span className="dev-dot dot-green" />
                </div>
                
                {/* Search / URL Bar: The Physical Link into SEO */}
                <div className="dev-browser-url-bar" id="dev-to-seo-bridge">
                  <Globe className="w-3.5 h-3.5 text-patagonia-cyan shrink-0" />
                  <span className="dev-url-text">https://patagoniacoach.cl/servicios/desarrollo-web</span>
                  <span className="dev-url-cursor">|</span>
                  <span className="dev-url-status">SECURE • HTTPS</span>
                </div>
              </div>

              {/* Functional System Preview Canvas */}
              <div className="dev-system-canvas">
                <img 
                  src="/portafolio-web.webp" 
                  alt="Representación de plataforma digital operativa y de alto rendimiento" 
                  className="dev-system-img"
                  loading="lazy"
                />
                
                {/* Idle Motion Scanline Effect (#13) */}
                <div className="dev-idle-scanline" aria-hidden="true" />

                {/* Real-time System Status Bar (Truth Hardened: No fake benchmarks) */}
                <div className="dev-system-status-bar">
                  <div className="dev-status-item">
                    <span className="dev-status-indicator" />
                    <span>CORE WEB VITALS OPTIMIZADOS</span>
                  </div>
                  <div ref={wowSignalRef} className="dev-status-item dev-wow-badge">
                    <span className="text-patagonia-cyan font-bold">SISTEMA INTEGRADO</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Handover Bridge Anchor to next scene */}
      <div className="dev-bottom-bridge" aria-hidden="true">
        <div className="dev-bridge-line" />
      </div>
    </section>
  );
};

export default DevelopmentPillar;
