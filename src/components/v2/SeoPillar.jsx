import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Search, 
  Compass, 
  MapPin, 
  Network, 
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
  
  // Bridge & Query refs
  const searchBarRef = useRef(null);
  const queryTextRef = useRef(null);
  const cursorRef = useRef(null);
  const statusTagRef = useRef(null);
  const tokensStageRef = useRef(null);
  
  // Network & Entity refs
  const networkCanvasRef = useRef(null);
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =====================================================================
      // DESKTOP CHOREOGRAPHY (Pin scrubbed across +=170% scroll)
      // Narrative: INTENCIÓN -> BÚSQUEDA -> TERRITORIO -> ENTIDADES -> RELACIONES -> VISIBILIDAD -> PRE-IA
      // =====================================================================
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=170%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        // -------------------------------------------------------------------
        // 0.00 - 1.30 (0% - 13%): ENTRADA & CONTINUIDAD FÍSICA DESDE DESARROLLO
        // La barra URL heredada se convierte en la interfaz de búsqueda SEO.
        // El color transiciona de Cian (#38BDF8) a Ámbar Patagónico (#F59E0B).
        // -------------------------------------------------------------------
        tl
          .fromTo(contentColRef.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" },
            0.0
          )
          .fromTo(monumentalRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 0.05, scale: 1, duration: 1.2, ease: "power2.out" },
            0.0
          )
          .fromTo(searchBarRef.current,
            { 
              borderColor: "rgba(56, 189, 248, 0.9)", 
              boxShadow: "0 0 40px rgba(56, 189, 248, 0.4)",
              scale: 0.98
            },
            { 
              borderColor: "rgba(245, 158, 11, 0.6)", 
              boxShadow: "0 0 40px rgba(245, 158, 11, 0.25)",
              scale: 1,
              duration: 1.3, 
              ease: "power2.inOut" 
            },
            0.0
          )

        // -------------------------------------------------------------------
        // 1.30 - 2.80 (13% - 28%): CONSULTA HUMANA Y TERRITORIAL
        // Se digita la consulta: "servicios digitales en punta arenas"
        // -------------------------------------------------------------------
        const fullQuery = "servicios digitales en punta arenas";
        const queryObj = { textLength: 0 };

        tl.to(queryObj, {
          textLength: fullQuery.length,
          duration: 1.5,
          ease: "none",
          onUpdate: () => {
            if (queryTextRef.current) {
              const currentLength = Math.round(queryObj.textLength);
              queryTextRef.current.textContent = fullQuery.substring(0, currentLength);
            }
          }
        }, 1.3)
        .to(statusTagRef.current, {
          backgroundColor: "rgba(245, 158, 11, 0.2)",
          borderColor: "rgba(245, 158, 11, 0.6)",
          duration: 0.5
        }, 2.5)

        // -------------------------------------------------------------------
        // 2.80 - 4.20 (28% - 42%): DESCOMPOSICIÓN SEMÁNTICA
        // La consulta se fragmenta espacialmente en SERVICIO + UBICACIÓN
        // -------------------------------------------------------------------
        .to(tokensStageRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out"
        }, 2.8)
        .to(searchBarRef.current, {
          borderColor: "rgba(245, 158, 11, 0.3)",
          duration: 1.0
        }, 2.8)

        // -------------------------------------------------------------------
        // 4.20 - 5.80 (42% - 58%): ACTIVACIÓN TERRITORIAL (PUNTA ARENAS)
        // La ubicación activa la cartografía de Magallanes en el fondo.
        // -------------------------------------------------------------------
        .to(mapRef.current, {
          opacity: 0.28,
          scale: 1.05,
          duration: 1.6,
          ease: "power2.out"
        }, 4.2)
        .to(authorityRef.current, {
          opacity: 0.16,
          duration: 1.6,
          ease: "power2.out"
        }, 4.2)
        .to(topoRef.current, {
          opacity: 0.4,
          duration: 1.4,
          ease: "power2.out"
        }, 4.4)
        .fromTo(hubRef.current,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 1.4, ease: "back.out(1.5)" },
          4.6
        )

        // -------------------------------------------------------------------
        // 5.80 - 7.20 (58% - 72%): ENTIDADES SEMÁNTICAS EN EL TERRITORIO
        // Emergen los nodos de datos estructurados, páginas y contenido.
        // -------------------------------------------------------------------
        .fromTo([node1Ref.current, node2Ref.current, node3Ref.current, node4Ref.current],
          { opacity: 0, y: 20, scale: 0.88 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.25, duration: 1.2, ease: "expo.out" },
          5.8
        )

        // -------------------------------------------------------------------
        // 7.20 - 8.60 (72% - 86%): ARQUITECTURA SEMÁNTICA (GEO)
        // Se trazan las conexiones SVG uniendo las señales en red viva.
        // -------------------------------------------------------------------
        .fromTo([path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current],
          { strokeDashoffset: 450, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1, stagger: 0.2, duration: 1.4, ease: "power2.inOut" },
          7.2
        )
        .fromTo(visibilityBadgeRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "back.out(2)" },
          8.0
        )

        // -------------------------------------------------------------------
        // 8.60 - 9.60 (86% - 96%): VISIBILIDAD (MOMENTO WOW)
        // La entidad de marca se vuelve nítida y visible.
        // Escala del sistema se aleja para revelar la estructura monumental.
        // -------------------------------------------------------------------
        .to(networkCanvasRef.current, {
          scale: 0.97,
          borderColor: "rgba(245, 158, 11, 0.45)",
          boxShadow: "0 35px 90px -15px rgba(0, 0, 0, 0.98), 0 0 50px rgba(245, 158, 11, 0.2)",
          duration: 1.0,
          ease: "power2.out"
        }, 8.6)
        .to(monumentalRef.current, {
          opacity: 0.12,
          scale: 1.08,
          duration: 1.0,
          ease: "power2.out"
        }, 8.6)
        .to(hubRef.current.querySelector('.seo-hub-core'), {
          borderColor: "rgba(245, 158, 11, 0.95)",
          boxShadow: "0 0 50px rgba(245, 158, 11, 0.6), 0 20px 50px rgba(0, 0, 0, 0.95)",
          duration: 0.8,
          ease: "power2.out"
        }, 8.6)

        // -------------------------------------------------------------------
        // 9.60 - 10.00 (96% - 100%): PAQUETE DE INTENCIÓN (PRE-IA)
        // La red converge hacia un paquete estructurado listo para el Pilar 03.
        // -------------------------------------------------------------------
        .to([node1Ref.current, node2Ref.current, node3Ref.current, node4Ref.current], {
          opacity: 0.35,
          scale: 0.92,
          duration: 0.6,
          ease: "power2.out"
        }, 9.6)
        .fromTo(packetRef.current,
          { opacity: 0, scale: 0.85, x: 20 },
          { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "back.out(1.8)" },
          9.6
        );

        // Subtle parallax drift on cursor movement
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

          gsap.to(networkCanvasRef.current, {
            x: x * 15,
            y: y * 10,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto"
          });
        };

        root.addEventListener('mousemove', handleMouseMove);
        return () => root.removeEventListener('mousemove', handleMouseMove);
      });

      // =====================================================================
      // MOBILE CHOREOGRAPHY (< 1024px)
      // Narrativa lineal y ligera sin bloqueo excesivo de scroll.
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
          .fromTo(searchBarRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.4"
          )
          .fromTo(hubRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)" },
            "-=0.3"
          )
          .fromTo([node1Ref.current, node2Ref.current],
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: "power2.out" },
            "-=0.3"
          );
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
          1. LAYER: BACK — Cartografía, Topografía y "ENCONTRAR" Monumental
          ===================================================================== */}
      <div className="seo-bg-territory" aria-hidden="true">
        <div ref={mapRef} className="seo-map-layer" />
        <div ref={authorityRef} className="seo-authority-layer" />
        
        {/* Topographic Contour SVG */}
        <svg ref={topoRef} className="seo-topo-svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path d="M-100,250 C300,180 600,320 900,240 C1200,160 1400,280 1600,210" strokeWidth="1" strokeDasharray="6 4" />
          <path d="M-100,450 C250,380 550,520 850,440 C1150,360 1350,480 1600,410" strokeWidth="1" strokeDasharray="8 6" />
          <path d="M-100,650 C200,580 500,720 800,640 C1100,560 1300,680 1600,610" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="720" cy="450" r="280" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
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
                <span>SEO Local Magallanes</span>
              </Link>
              <Link to="/servicios/seo-local-punta-arenas" className="seo-nav-link">
                <MapPin className="w-3.5 h-3.5 text-patagonia-gold shrink-0" />
                <span>SEO Punta Arenas</span>
              </Link>
              <Link to="/zonas/punta-arenas" className="seo-nav-link">
                <Globe className="w-3.5 h-3.5 text-patagonia-gold shrink-0" />
                <span>Zona Punta Arenas</span>
              </Link>
              <Link to="/zonas/puerto-natales" className="seo-nav-link">
                <Globe className="w-3.5 h-3.5 text-patagonia-gold shrink-0" />
                <span>Zona Puerto Natales</span>
              </Link>
              <Link to="/zonas/magallanes" className="seo-nav-link">
                <Compass className="w-3.5 h-3.5 text-patagonia-gold shrink-0" />
                <span>Zona Magallanes</span>
              </Link>
              <Link to="/zonas/tierra-del-fuego" className="seo-nav-link">
                <Compass className="w-3.5 h-3.5 text-patagonia-gold shrink-0" />
                <span>Tierra del Fuego</span>
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
        </article>

        {/* =====================================================================
            3. LAYER: MID — Cartographic & Semantic Discovery Arena
            ===================================================================== */}
        <div className="seo-arena-wrapper">
          <div className="seo-arena-stage">
            
            {/* CONTINUITY BRIDGE: Intelligent Search Bar */}
            <div className="seo-search-bridge-container">
              <div ref={searchBarRef} className="seo-search-bar" id="seo-search-interface">
                <div className="seo-search-icon-wrap">
                  <Search className="w-4 h-4" />
                </div>
                <div className="seo-search-input-mock">
                  <span ref={queryTextRef} className="seo-query-typed"></span>
                  <span ref={cursorRef} className="seo-query-cursor">|</span>
                </div>
                <div ref={statusTagRef} className="seo-search-status-tag">
                  CONSULTA // DETECTADA
                </div>
              </div>

              {/* Spatial Decomposition Tokens */}
              <div ref={tokensStageRef} className="seo-tokens-stage">
                <div className="seo-token token-service">
                  <span className="token-label">INTENCIÓN:</span>
                  <span>Servicios Digitales</span>
                </div>
                <div className="seo-token token-location">
                  <MapPin className="w-3.5 h-3.5 text-patagonia-gold" />
                  <span className="token-label">TERRITORIO:</span>
                  <span>Punta Arenas</span>
                </div>
              </div>
            </div>

            {/* Semantic Network & Territory Canvas */}
            <div ref={networkCanvasRef} className="seo-network-canvas">
              
              {/* SVG Dynamic Conduits */}
              <svg ref={connectionSvgRef} className="seo-network-svg" viewBox="0 0 800 500" fill="none">
                {/* Path 1: Service Page to Hub */}
                <path 
                  ref={path1Ref}
                  d="M 180 90 Q 280 180 400 250" 
                  stroke="rgba(245, 158, 11, 0.7)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
                {/* Path 2: Content Cluster to Hub */}
                <path 
                  ref={path2Ref}
                  d="M 640 120 Q 520 180 400 250" 
                  stroke="rgba(245, 158, 11, 0.7)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
                {/* Path 3: Location Geo to Hub */}
                <path 
                  ref={path3Ref}
                  d="M 190 380 Q 280 320 400 250" 
                  stroke="rgba(245, 158, 11, 0.7)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
                {/* Path 4: Schema.org to Hub */}
                <path 
                  ref={path4Ref}
                  d="M 620 390 Q 520 320 400 250" 
                  stroke="rgba(245, 158, 11, 0.7)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
              </svg>

              {/* Semantic Nodes */}
              <div ref={node1Ref} className="seo-semantic-node node-service-page">
                <span className="node-title">
                  <FileText className="w-3.5 h-3.5 text-patagonia-gold" />
                  Página de Servicio
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

              {/* Territorial Landmark Hub: Punta Arenas */}
              <div ref={hubRef} className="seo-punta-arenas-hub">
                <div className="seo-hub-pulse-ring" />
                <div className="seo-hub-core">
                  <div className="seo-hub-icon-dot" />
                  <div className="flex flex-col">
                    <span className="seo-hub-title">Punta Arenas • Entidad Unificada</span>
                    <span className="seo-hub-coords">53°09′S 70°55′W // RELEVANCIA CONSOLIDADA</span>
                  </div>
                </div>
              </div>

              {/* Real-time Status Badge */}
              <div ref={visibilityBadgeRef} className="seo-visibility-badge">
                <span className="seo-badge-dot" />
                <span>CONTEXTO ESTABLECIDO</span>
              </div>

              {/* INTENTION PACKET (Stage 08: Prepares Input for Pilar IA) */}
              <div ref={packetRef} className="seo-intention-packet" id="seo-to-ia-packet">
                <div className="packet-header">
                  <Sparkles className="w-3.5 h-3.5 text-patagonia-gold" />
                  <span>INTENCIÓN ESTRUCTURADA</span>
                </div>
                <div className="packet-body">
                  <span>Consulta: "servicios digitales en punta arenas"</span>
                  <span className="packet-meta">Territorio: Magallanes (53°S) • Intención: Desarrollo & SEO</span>
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
