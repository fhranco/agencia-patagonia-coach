import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Search, 
  Compass, 
  MapPin, 
  ArrowUpRight, 
  Globe, 
  Database, 
  Sparkles,
  FileText,
  Layers
} from 'lucide-react';
import './SeoPillar.css';

gsap.registerPlugin(ScrollTrigger);

const SeoPillar = () => {
  const rootRef = useRef(null);
  const mapRef = useRef(null);
  const authorityRef = useRef(null);
  const topoRef = useRef(null);
  const monumentalRef = useRef(null);
  const contentColRef = useRef(null);
  const arenaStageRef = useRef(null);
  
  // Bridge & Query refs
  const searchBarRef = useRef(null);
  const searchIconRef = useRef(null);
  const queryTextRef = useRef(null);
  const cursorRef = useRef(null);
  const statusTagRef = useRef(null);
  const tokensStageRef = useRef(null);
  const tokenServiceRef = useRef(null);
  const tokenLocationRef = useRef(null);
  
  // Network & Entity refs
  const networkEnvRef = useRef(null);
  const connectionSvgRef = useRef(null);
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);
  const path4Ref = useRef(null);
  const node1Ref = useRef(null);
  const node2Ref = useRef(null);
  const node3Ref = useRef(null);
  const node4Ref = useRef(null);
  const hubRef = useRef(null);
  const visibilityBadgeRef = useRef(null);
  const packetRef = useRef(null);
  const editorialFooterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =====================================================================
      // DESKTOP CHOREOGRAPHY (Continuous Pin scrubbed across +=120% scroll)
      // Narrative: CONTINUIDAD -> CONSULTA -> TERRITORIO -> RED JERÁRQUICA -> MOMENTO WOW -> CONVERGENCIA
      // =====================================================================
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=120%",
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        // Initial setup for natural typing
        const initialUrl = "https://patagoniacoach.cl/servicios/desarrollo-web";
        const fullQuery = "servicios digitales en punta arenas";
        const typingState = { text: initialUrl };

        // 0.00 - 1.00 (0% - 17%): OVERLAP & CONTINUIDAD FÍSICA DESDE DESARROLLO
        tl
          .fromTo(contentColRef.current,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 1.0, ease: "power2.out" },
            0.0
          )
          .fromTo(monumentalRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 0.04, scale: 1, duration: 1.0, ease: "power2.out" },
            0.0
          )
          .to(typingState, {
            text: "",
            duration: 0.7,
            ease: "power1.in",
            onUpdate: () => {
              if (queryTextRef.current) {
                const len = Math.round(typingState.text.length);
                queryTextRef.current.textContent = initialUrl.substring(0, len);
              }
            }
          }, 0.1)
          .to(searchBarRef.current, {
            borderColor: "rgba(245, 158, 11, 0.5)",
            boxShadow: "0 0 35px rgba(245, 158, 11, 0.2), 0 20px 50px rgba(0, 0, 0, 0.9)",
            duration: 0.9,
            ease: "power2.inOut"
          }, 0.2)
          .to([searchIconRef.current, cursorRef.current], {
            color: "#F59E0B",
            duration: 0.8
          }, 0.2)
          .to(statusTagRef.current, {
            color: "#F59E0B",
            borderColor: "rgba(245, 158, 11, 0.3)",
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            duration: 0.8
          }, 0.2)
          .to(mapRef.current, {
            opacity: 0.16,
            duration: 0.9,
            ease: "power2.out"
          }, 0.2);

        // 1.00 - 2.00 (17% - 33%): CONSULTA EN TIEMPO REAL
        const queryObj = { textLength: 0 };
        tl.to(queryObj, {
          textLength: fullQuery.length,
          duration: 1.0,
          ease: "none",
          onUpdate: () => {
            if (queryTextRef.current) {
              const currentLength = Math.round(queryObj.textLength);
              queryTextRef.current.textContent = fullQuery.substring(0, currentLength);
            }
          }
        }, 1.0)
        .to(statusTagRef.current, {
          backgroundColor: "rgba(245, 158, 11, 0.22)",
          borderColor: "rgba(245, 158, 11, 0.65)",
          duration: 0.3
        }, 1.8);

        // 2.00 - 2.80 (33% - 47%): QUERY -> GENERACIÓN ESPACIAL & TERRITORIO
        tl.to(tokensStageRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "expo.out"
        }, 2.0)
        .to(mapRef.current, {
          opacity: 0.28,
          scale: 1.06,
          duration: 1.0,
          ease: "power2.out"
        }, 2.1)
        .to(authorityRef.current, {
          opacity: 0.14,
          duration: 1.0,
          ease: "power2.out"
        }, 2.1)
        .to(topoRef.current, {
          opacity: 0.38,
          duration: 0.9,
          ease: "power2.out"
        }, 2.2)
        .fromTo(hubRef.current,
          { opacity: 0, scale: 0.65 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.6)" },
          2.3
        );

        // 2.80 - 3.80 (47% - 63%): RED SEMÁNTICA JERÁRQUICA DISTRIBUIDA
        tl.fromTo(node1Ref.current,
          { opacity: 0, y: 25, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "expo.out" },
          2.8
        )
        .fromTo([node2Ref.current, node3Ref.current, node4Ref.current],
          { opacity: 0, y: 20, scale: 0.85 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.8, ease: "expo.out" },
          3.0
        );

        // 3.80 - 4.50 (63% - 75%): CONEXIONES VECTORIALES SVG & CONTEXTO
        tl.fromTo([path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current],
          { strokeDashoffset: 450, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power2.inOut" },
          3.8
        )
        .fromTo(visibilityBadgeRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, ease: "back.out(2)" },
          4.1
        );

        // 4.50 - 5.20 (75% - 87%): MOMENTO WOW — ESCALA & ENCONTRAR MONUMENTAL
        tl.to(networkEnvRef.current, {
          scale: 0.95,
          duration: 0.7,
          ease: "power2.out"
        }, 4.5)
        .to(monumentalRef.current, {
          opacity: 0.14,
          scale: 1.06,
          duration: 0.7,
          ease: "power2.out"
        }, 4.5)
        .to(contentColRef.current, {
          opacity: 0.55,
          duration: 0.7,
          ease: "power2.out"
        }, 4.5)
        .to(hubRef.current.querySelector('.seo-hub-core'), {
          borderColor: "rgba(245, 158, 11, 0.95)",
          boxShadow: "0 0 45px rgba(245, 158, 11, 0.55), 0 20px 50px rgba(0, 0, 0, 0.95)",
          duration: 0.6,
          ease: "power2.out"
        }, 4.6);

        // 5.20 - 6.00 (87% - 100%): CONVERGENCIA FÍSICA A INTENCIÓN ESTRUCTURADA
        tl.to([node1Ref.current, node2Ref.current, node3Ref.current, node4Ref.current, hubRef.current, tokensStageRef.current], {
          x: 180,
          y: -10,
          scale: 0.45,
          opacity: 0,
          stagger: 0.05,
          duration: 0.7,
          ease: "power2.in"
        }, 5.2)
        .to([path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current], {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        }, 5.2)
        .to(visibilityBadgeRef.current, {
          opacity: 0,
          duration: 0.4
        }, 5.2)
        .to(mapRef.current, {
          opacity: 0.14,
          scale: 1.0,
          duration: 0.7,
          ease: "power2.out"
        }, 5.3)
        .fromTo(packetRef.current,
          { opacity: 0, scale: 0.8, x: 50 },
          { opacity: 1, scale: 1, x: 0, duration: 0.7, ease: "back.out(1.8)" },
          5.3
        );

        // Parallax reactivo al cursor
        const root = rootRef.current;
        const handleMouseMove = (e) => {
          const rect = root.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(monumentalRef.current, {
            x: x * 8,
            y: y * 5,
            duration: 1.2,
            ease: "power1.out",
            overwrite: "auto"
          });

          gsap.to(networkEnvRef.current, {
            x: x * 14,
            y: y * 8,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto"
          });
        };

        root.addEventListener('mousemove', handleMouseMove);
        return () => root.removeEventListener('mousemove', handleMouseMove);
      });

      // =====================================================================
      // MOBILE CHOREOGRAPHY (< 1024px) — DESCUBRIMIENTO TERRITORIAL PROGRESIVO
      // =====================================================================
      mm.add("(max-width: 1023px)", () => {
        // Set initial query text cleanly on mobile
        if (queryTextRef.current) {
          queryTextRef.current.textContent = "https://patagoniacoach.cl/servicios/desarrollo-web";
        }

        const fullQuery = "servicios digitales en punta arenas";
        const mobileTyping = { progress: 0 };

        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: arenaStageRef.current,
            start: "top 12%",
            end: "+=110%",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1
          }
        });

        mobileTl
          // -----------------------------------------------------------------
          // 0.00 - 0.80: QUERY TYPING & AMBER SEARCH INTERFACE ACTIVATION
          // -----------------------------------------------------------------
          .to(searchBarRef.current, {
            borderColor: "rgba(245, 158, 11, 0.65)",
            boxShadow: "0 0 30px rgba(245, 158, 11, 0.35)",
            duration: 0.4
          }, 0.0)
          .to([searchIconRef.current, cursorRef.current], {
            color: "#F59E0B",
            duration: 0.3
          }, 0.0)
          .to(mobileTyping, {
            progress: 1,
            duration: 0.8,
            ease: "none",
            onUpdate: () => {
              if (queryTextRef.current) {
                const len = Math.round(mobileTyping.progress * fullQuery.length);
                queryTextRef.current.textContent = fullQuery.substring(0, len);
              }
            }
          }, 0.1)
          .to(statusTagRef.current, {
            color: "#F59E0B",
            borderColor: "rgba(245, 158, 11, 0.6)",
            backgroundColor: "rgba(245, 158, 11, 0.18)",
            duration: 0.3
          }, 0.7)

          // -----------------------------------------------------------------
          // 0.80 - 1.40: TOKEN SEPARATION & PUNTA ARENAS HUB EMERGENCE
          // -----------------------------------------------------------------
          .to(tokensStageRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "expo.out"
          }, 0.8)
          .fromTo(hubRef.current,
            { opacity: 0, scale: 0.65 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
            0.9
          )
          .to(monumentalRef.current, {
            opacity: 0.08,
            duration: 0.6
          }, 1.0)

          // -----------------------------------------------------------------
          // 1.40 - 2.20: SPATIAL ENDPOINTS & SVG CONDUITS CONNECTION
          // -----------------------------------------------------------------
          .fromTo([node1Ref.current, node2Ref.current],
            { opacity: 0, scale: 0.85, y: 15 },
            { opacity: 1, scale: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "power2.out" },
            1.4
          )
          .fromTo([path1Ref.current, path2Ref.current],
            { strokeDashoffset: 450, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power2.inOut" },
            1.5
          )
          .fromTo(visibilityBadgeRef.current,
            { opacity: 0, scale: 0.85, y: 15 },
            { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(2)" },
            1.8
          )

          // -----------------------------------------------------------------
          // 2.30 - 3.10: CONVERGENCIA FÍSICA (Muchas señales convirtiéndose en una)
          // -----------------------------------------------------------------
          // Query & Tokens travel toward center
          .to(searchBarRef.current, {
            y: 70,
            scale: 0.75,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in"
          }, 2.3)
          .to(tokensStageRef.current, {
            y: 60,
            scale: 0.3,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in"
          }, 2.3)
          // Endpoints retract along their diagonal lines
          .to(node1Ref.current, {
            x: 80,
            y: 90,
            scale: 0.2,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in"
          }, 2.3)
          .to(node2Ref.current, {
            x: -80,
            y: -90,
            scale: 0.2,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in"
          }, 2.3)
          // Conduits collapse to center
          .to([path1Ref.current, path2Ref.current], {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in"
          }, 2.4)
          // Hub & Badge converge into central focal point
          .to(hubRef.current, {
            scale: 0.2,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in"
          }, 2.3)
          .to(visibilityBadgeRef.current, {
            y: -25,
            scale: 0.5,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in"
          }, 2.3)
          // Cartography dims softly to ambient baseline
          .to(mapRef.current, {
            opacity: 0.12,
            duration: 0.6,
            ease: "power2.out"
          }, 2.4)

          // -----------------------------------------------------------------
          // 3.10 - 3.80: FORMATION OF INTENCIÓN ESTRUCTURADA
          // -----------------------------------------------------------------
          .fromTo(packetRef.current,
            { opacity: 0, scale: 0.35, y: 10 },
            { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.8)" },
            3.1
          )

          // -----------------------------------------------------------------
          // 3.80 - 4.80: AISLAMIENTO REAL (55–65vh de espacio dedicado)
          // INTENCIÓN ESTRUCTURADA permanece como único protagonista sin interferencia.
          // -----------------------------------------------------------------
          .to(packetRef.current, {
            boxShadow: "0 0 60px rgba(245, 158, 11, 0.55), 0 30px 80px rgba(0, 0, 0, 0.98)",
            borderColor: "rgba(245, 158, 11, 0.95)",
            duration: 1.0,
            ease: "none"
          }, 3.8);
      });

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={rootRef} 
      id="pilar-seo" 
      className="seo-pillar-root" 
      aria-label="Pilar 02: Posicionamiento Web y Autoridad Territorial"
    >
      {/* =====================================================================
          1. LAYER: BACK — Cartografía Envolvente y "ENCONTRAR" Monumental
          ===================================================================== */}
      <div className="seo-bg-territory" aria-hidden="true">
        <div ref={mapRef} className="seo-map-layer" />
        <div ref={authorityRef} className="seo-authority-layer" />
        
        {/* Full-bleed Topographic Contour SVG */}
        <svg ref={topoRef} className="seo-topo-svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path d="M-100,220 C300,150 600,290 900,210 C1200,130 1400,250 1600,180" strokeWidth="1" strokeDasharray="6 4" />
          <path d="M-100,420 C250,350 550,490 850,410 C1150,330 1350,450 1600,380" strokeWidth="1" strokeDasharray="8 6" />
          <path d="M-100,620 C200,550 500,690 800,610 C1100,530 1300,650 1600,580" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="700" cy="450" r="320" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.25" />
        </svg>

        <div className="seo-coords-bar">
          <span className="seo-coord-badge">
            <Compass className="w-3.5 h-3.5 text-patagonia-gold" />
            <span>53°09′45″S 70°55′21″W</span>
          </span>
          <span className="seo-coord-badge">
            <span>MAGALLANES // ESTRECHO</span>
          </span>
        </div>
      </div>

      <div ref={monumentalRef} className="seo-monumental-text" aria-hidden="true">
        ENCONTRAR
      </div>

      <div className="seo-spatial-viewport">
        {/* =====================================================================
            2. LAYER: FRONT — Contenido Editorial Semántico y Enlaces SEO
            ===================================================================== */}
        <article ref={contentColRef} className="seo-content-col">
          {/* 01: Headline & Statement (Always First on Mobile & Desktop) */}
          <div className="seo-intro-block">
            <div className="seo-eyebrow-wrap">
              <span className="seo-step-num">02</span>
              <span className="seo-eyebrow">SEO & AUTORIDAD TERRITORIAL</span>
            </div>

            <h2 className="seo-title">
              POSICIONAMOS
            </h2>

            <p className="seo-statement">
              Construimos arquitectura, contenido y señales territoriales para que una marca pueda ser comprendida y encontrada cuando existe intención real de búsqueda.
            </p>
          </div>

          {/* 03: Editorial Footer & Capabilities / CTA (Clean closing after kinetic stage) */}
          <div ref={editorialFooterRef} className="seo-editorial-footer">
            <p className="seo-desc">
              Una plataforma digital excelente permanece invisible sin una estrategia de descubrimiento sólida. 
              Estructuramos datos, entidades y cobertura semántica para conectar las necesidades reales de los 
              usuarios con los servicios de tu empresa en el territorio austral y a nivel nacional.
            </p>

            {/* GEO Statement Card */}
            <div className="seo-geo-card">
              <div className="seo-geo-label">
                <Sparkles className="w-3.5 h-3.5 text-patagonia-gold" />
                <span>GEO // GENERATIVE ENGINE OPTIMIZATION</span>
              </div>
              <p className="seo-geo-text">
                Estructuramos contenido, entidades y datos para mejorar cómo los buscadores tradicionales 
                y los sistemas de búsqueda generativa comprenden una marca.
              </p>
            </div>

            {/* Internal SEO Territory Links */}
            <div className="seo-territory-nav" aria-label="Cobertura Territorial y Servicios SEO">
              <div className="seo-territory-links-grid">
                <Link to="/servicios/seo-local-magallanes" className="seo-nav-link">
                  <MapPin className="w-3.5 h-3.5 text-patagonia-gold shrink-0" />
                  <span>SEO + GEO Magallanes</span>
                </Link>
                <Link to="/servicios/desarrollo-web" className="seo-nav-link">
                  <Compass className="w-3.5 h-3.5 text-patagonia-gold shrink-0" />
                  <span>Desarrollo Web Pro</span>
                </Link>
                <Link to="/zonas/magallanes" className="seo-nav-link">
                  <Globe className="w-3.5 h-3.5 text-patagonia-gold shrink-0" />
                  <span>Zona Magallanes</span>
                </Link>
                <Link to="/zonas/puerto-natales" className="seo-nav-link">
                  <Globe className="w-3.5 h-3.5 text-patagonia-gold shrink-0" />
                  <span>Zona Puerto Natales</span>
                </Link>
                <Link to="/zonas/tierra-del-fuego" className="seo-nav-link">
                  <Compass className="w-3.5 h-3.5 text-patagonia-gold shrink-0" />
                  <span>Tierra del Fuego</span>
                </Link>
                <Link to="/academia" className="seo-nav-link">
                  <Compass className="w-3.5 h-3.5 text-patagonia-gold shrink-0" />
                  <span>Academia Digital</span>
                </Link>
              </div>
            </div>

            {/* Integrated Cartographic CTA */}
            <div className="seo-cta-container">
              <div className="seo-cta-conduit" aria-hidden="true">
                <span className="seo-conduit-dot" />
                <span className="seo-conduit-line" />
              </div>
              <Link 
                to="/servicios/seo-local-magallanes" 
                className="seo-kinetic-cta"
                id="cta-seo-kinetic"
              >
                <span className="seo-cta-label">Auditar Mi Posicionamiento</span>
                <span className="seo-cta-icon-box">
                  <ArrowUpRight className="w-4 h-4 seo-cta-icon" />
                </span>
              </Link>
              <span className="seo-cta-spec">DIAGNÓSTICO TERRITORIAL // 53°S</span>
            </div>
          </div>
        </article>

        {/* =====================================================================
            3. LAYER: MID — Entorno Abierto y Conexiones Semánticas (Sin Rectángulo)
            ===================================================================== */}
        <div className="seo-arena-wrapper">
          <div ref={arenaStageRef} className="seo-arena-stage">
            
            {/* CONTINUITY BRIDGE: Exact Desarrollo Search Bar Geometry */}
            <div className="seo-search-bridge-container">
              <div ref={searchBarRef} className="seo-search-bar" id="seo-search-interface">
                <div ref={searchIconRef} className="seo-search-icon-wrap">
                  <Search className="w-4 h-4" />
                </div>
                <div className="seo-search-input-mock">
                  <span ref={queryTextRef} className="seo-query-typed">https://patagoniacoach.cl/servicios/desarrollo-web</span>
                  <span ref={cursorRef} className="seo-query-cursor">|</span>
                </div>
                <div ref={statusTagRef} className="seo-search-status-tag">
                  SISTEMA // SEARCH READY
                </div>
              </div>

              {/* Spatial Decomposition Tokens */}
              <div ref={tokensStageRef} className="seo-tokens-stage">
                <div ref={tokenServiceRef} className="seo-token token-service">
                  <span className="token-label">INTENCIÓN:</span>
                  <span>Servicios Digitales</span>
                </div>
                <div ref={tokenLocationRef} className="seo-token token-location">
                  <MapPin className="w-3.5 h-3.5 text-patagonia-gold" />
                  <span className="token-label">TERRITORIO:</span>
                  <span>Punta Arenas</span>
                </div>
              </div>
            </div>

            {/* Open Territorial Network Environment */}
            <div ref={networkEnvRef} className="seo-network-environment">
              
              {/* SVG Dynamic Conduits */}
              <svg ref={connectionSvgRef} className="seo-network-svg" viewBox="0 0 800 500" fill="none">
                <path 
                  ref={path1Ref}
                  d="M 180 80 Q 280 160 380 240" 
                  stroke="rgba(245, 158, 11, 0.7)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
                <path 
                  ref={path2Ref}
                  d="M 640 100 Q 520 160 380 240" 
                  stroke="rgba(245, 158, 11, 0.7)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
                <path 
                  ref={path3Ref}
                  d="M 190 390 Q 280 320 380 240" 
                  stroke="rgba(245, 158, 11, 0.7)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
                <path 
                  ref={path4Ref}
                  d="M 630 380 Q 520 320 380 240" 
                  stroke="rgba(245, 158, 11, 0.7)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
              </svg>

              {/* Hierarchical Semantic Nodes */}
              <div ref={node1Ref} className="seo-semantic-node node-service-page">
                <span className="node-title">
                  <FileText className="w-4 h-4 text-patagonia-gold" />
                  Desarrollo & Plataformas Web
                </span>
                <span className="node-spec">/servicios/desarrollo-web</span>
              </div>

              <div ref={node2Ref} className="seo-semantic-node node-content-cluster">
                <span className="node-title">
                  <Layers className="w-3.5 h-3.5 text-patagonia-gold" />
                  Cluster Semántico
                </span>
                <span className="node-spec">Arquitectura • Performance</span>
              </div>

              <div ref={node3Ref} className="seo-semantic-node node-location-geo">
                <span className="node-title">
                  <MapPin className="w-3.5 h-3.5 text-patagonia-gold" />
                  Ubicación & Coordenadas
                </span>
                <span className="node-spec">Magallanes • 53°S</span>
              </div>

              <div ref={node4Ref} className="seo-semantic-node node-schema-org">
                <span className="node-title">
                  <Database className="w-3.5 h-3.5 text-patagonia-gold" />
                  Schema.org JSON-LD
                </span>
                <span className="node-spec">LocalBusiness • Service</span>
              </div>

              {/* Great Anchor Hub: Punta Arenas Center */}
              <div ref={hubRef} className="seo-punta-arenas-hub">
                <div className="seo-hub-pulse-ring" />
                <div className="seo-hub-core">
                  <div className="seo-hub-icon-dot" />
                  <div className="flex flex-col">
                    <span className="seo-hub-title">Punta Arenas • Entidad Unificada</span>
                    <span className="seo-hub-coords">53°09′S 70°55′W // SEÑAL TERRITORIAL</span>
                  </div>
                </div>
              </div>

              {/* Real-time Status Badge */}
              <div ref={visibilityBadgeRef} className="seo-visibility-badge">
                <span className="seo-badge-dot" />
                <span>CONTEXTO ESTABLECIDO</span>
              </div>

              {/* ISOLATED RESULT OBJECT: INTENCIÓN ESTRUCTURADA (Pre-IA Input) */}
              <div ref={packetRef} className="seo-intention-packet" id="seo-to-ia-packet">
                <div className="packet-header">
                  <Sparkles className="w-4 h-4 text-patagonia-gold" />
                  <span>INTENCIÓN ESTRUCTURADA</span>
                </div>
                <div className="packet-body">
                  <div className="packet-row">
                    <span className="packet-label">CONSULTA:</span>
                    <span className="packet-val">"desarrollo web punta arenas"</span>
                  </div>
                  <div className="packet-row">
                    <span className="packet-label">TERRITORIO:</span>
                    <span className="packet-val">Magallanes [-53.1638° S]</span>
                  </div>
                  <div className="packet-row">
                    <span className="packet-label">SERVICIO:</span>
                    <span className="packet-val">Plataformas Digitales</span>
                  </div>
                  <div className="packet-row">
                    <span className="packet-label">CONTEXTO:</span>
                    <span className="packet-val">Alta Relevancia // Establecido</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SeoPillar;
