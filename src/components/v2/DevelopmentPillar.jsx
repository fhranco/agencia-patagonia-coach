import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, Layers, Terminal, Sparkles, Check, Globe, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DevelopmentPillar.css';

gsap.registerPlugin(ScrollTrigger);

const DevelopmentPillar = () => {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const gridRef = useRef(null);
  const monumentalRef = useRef(null);
  const moduleArchRef = useRef(null);
  const moduleUiRef = useRef(null);
  const moduleSystemRef = useRef(null);
  const browserBarRef = useRef(null);
  const contentColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =====================================================================
      // DESKTOP KINETIC CHOREOGRAPHY (Pinned scrub scene)
      // =====================================================================
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=220%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1
          }
        });

        // 1. Initial State: Background grid & monumental typography emergence
        tl.fromTo(gridRef.current,
          { opacity: 0.05, scale: 0.95 },
          { opacity: 0.25, scale: 1, duration: 1, ease: "power2.out" }
        )
        .fromTo(monumentalRef.current,
          { y: 80, opacity: 0.02 },
          { y: 0, opacity: 0.07, duration: 1.2, ease: "power2.out" },
          "<0.2"
        )
        .fromTo(contentColRef.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.4, ease: "power2.out" },
          "<0.3"
        )

        // 2. Fragment 1: Architecture Blueprint enters from top-right depth
        .fromTo(moduleArchRef.current,
          { y: -120, x: 80, scale: 0.85, opacity: 0, filter: "blur(8px)" },
          { y: 0, x: 0, scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.6, ease: "power3.out" },
          "-=0.6"
        )

        // 3. Fragment 2: Component UI Panel enters from bottom-left depth
        .fromTo(moduleUiRef.current,
          { y: 140, x: -60, scale: 0.88, opacity: 0 },
          { y: 0, x: 0, scale: 1, opacity: 1, duration: 1.6, ease: "power3.out" },
          "-=1.1"
        )

        // 4. Snap & Convergence: Fragments lock into functional system
        .to(moduleArchRef.current, {
          x: 25,
          y: -20,
          scale: 0.96,
          opacity: 0.85,
          duration: 1.2,
          ease: "expo.out"
        })
        .to(moduleUiRef.current, {
          x: -25,
          y: 35,
          scale: 0.96,
          opacity: 0.9,
          duration: 1.2,
          ease: "expo.out"
        }, "<")

        // 5. MOMENTO WOW: The complete operational system unites and takes command
        .fromTo(moduleSystemRef.current,
          { scale: 0.9, opacity: 0, y: 50 },
          { scale: 1, opacity: 1, y: 0, duration: 1.8, ease: "power3.out" },
          "-=0.8"
        )

        // 6. Exit Handover towards SEO: Browser URL bar expands and becomes prominent
        .to(browserBarRef.current, {
          boxShadow: "0 0 35px rgba(56, 189, 248, 0.4)",
          borderColor: "rgba(56, 189, 248, 0.7)",
          backgroundColor: "rgba(5, 7, 10, 0.95)",
          scale: 1.04,
          duration: 1.2,
          ease: "power2.inOut"
        }, "+=0.2");

        // Cursor parallax micro-interaction on desktop
        const stage = stageRef.current;
        const handleMouseMove = (e) => {
          const rect = stage.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(stage.querySelector('.dev-assembly-stage'), {
            rotationY: x * 6,
            rotationX: -y * 6,
            duration: 0.8,
            ease: "power1.out",
            overwrite: "auto"
          });
        };

        stage.addEventListener('mousemove', handleMouseMove);
        return () => stage.removeEventListener('mousemove', handleMouseMove);
      });

      // =====================================================================
      // MOBILE KINETIC CHOREOGRAPHY (Lightweight vertical sequence)
      // =====================================================================
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(contentColRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 75%",
              end: "top 30%",
              scrub: 0.5
            }
          }
        );

        gsap.fromTo(moduleSystemRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            scrollTrigger: {
              trigger: moduleSystemRef.current,
              start: "top 80%",
              end: "top 40%",
              scrub: 0.5
            }
          }
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
          1. BACKGROUND LAYER: Technical Structural Grid & Monumental Watermark
          ===================================================================== */}
      <div ref={gridRef} className="dev-bg-grid" aria-hidden="true" />
      <div ref={monumentalRef} className="dev-monumental-text" aria-hidden="true">
        CONSTRUIR
      </div>

      <div ref={stageRef} className="dev-container">
        {/* =====================================================================
            2. FOREGROUND: Semantic Commercial Content & SEO Interlinking
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
              <Code2 className="w-3.5 h-3.5 text-patagonia-cyan" />
              <span>Desarrollo Web Corporativo</span>
            </Link>

            <Link to="/servicios/aplicaciones-web-pro" className="dev-cap-pill">
              <Layers className="w-3.5 h-3.5 text-patagonia-cyan" />
              <span>Aplicaciones Web Pro & PWA</span>
            </Link>

            <Link to="/servicios/creacion-paginas-web-punta-arenas" className="dev-cap-pill">
              <Globe className="w-3.5 h-3.5 text-patagonia-cyan" />
              <span>Plataformas Digitales Punta Arenas</span>
            </Link>
          </div>

          {/* Contextual CTA */}
          <div className="dev-actions">
            <Link to="/servicios/desarrollo-web" className="btn-dev-primary">
              <span>Ver Soluciones de Desarrollo</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </article>

        {/* =====================================================================
            3. MIDGROUND: Spatial Assembly Stage (Fragments -> Operational System)
            ===================================================================== */}
        <div className="dev-assembly-wrapper">
          <div className="dev-assembly-stage">
            {/* Fragment A: Architecture Blueprint (Data & Wireframe) */}
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

            {/* Fragment B: Component UI Module (Satin Design Tokens) */}
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

            {/* Fragment C / MOMENTO WOW: The Complete Operational System */}
            <div ref={moduleSystemRef} className="dev-system-window">
              {/* Browser Header Bar - Ready for SEO Handover */}
              <div ref={browserBarRef} className="dev-browser-header">
                <div className="dev-browser-dots">
                  <span className="dev-dot dot-red" />
                  <span className="dev-dot dot-yellow" />
                  <span className="dev-dot dot-green" />
                </div>
                
                {/* Search / URL Bar: The Physical Link into SEO */}
                <div className="dev-browser-url-bar" id="dev-to-seo-bridge">
                  <Globe className="w-3 h-3 text-patagonia-cyan shrink-0" />
                  <span className="dev-url-text">https://patagoniacoach.cl/servicios/desarrollo-web</span>
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
                
                {/* Real-time System Status Bar (Truth Hardened: No fake benchmarks) */}
                <div className="dev-system-telemetry">
                  <div className="dev-telemetry-item">
                    <span className="dev-status-indicator" />
                    <span>CORE WEB VITALS OPTIMIZADOS</span>
                  </div>
                  <div className="dev-telemetry-item">
                    <span className="text-patagonia-cyan">ARQUITECTURA DESACOPLADA</span>
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
