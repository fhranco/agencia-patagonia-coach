import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle, Globe, Shield, Sparkles, Cpu, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SelectedWork.css';

gsap.registerPlugin(ScrollTrigger);

const SelectedWork = () => {
  const rootRef = useRef(null);
  const agmRef = useRef(null);
  const ruta9Ref = useRef(null);
  const harrisRef = useRef(null);
  const remagRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. AGM Scene Spatial Ingress
      gsap.fromTo(agmRef.current.querySelector('.agm-visual-window'), 
        { scale: 0.92, y: 40, opacity: 0.8 },
        { 
          scale: 1, 
          y: 0, 
          opacity: 1, 
          duration: 1.2,
          scrollTrigger: {
            trigger: agmRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.5
          }
        }
      );

      // 2. AGM → Ruta 9 Morphing Transition (Enérgico horizontal wipe)
      gsap.fromTo(ruta9Ref.current.querySelector('.ruta9-visual-frame'),
        { clipPath: 'polygon(10% 0%, 90% 0%, 90% 100%, 10% 100%)', scale: 0.92 },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          scale: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ruta9Ref.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 0.6
          }
        }
      );

      // 3. Ruta 9 → Óptica Harris Optical Aperture Transition (Desenfoque a foco óptico)
      gsap.fromTo(harrisRef.current.querySelector('.harris-reticle-col'),
        { scale: 0.88, filter: 'blur(12px)', opacity: 0.4 },
        {
          scale: 1,
          filter: 'blur(0px)',
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: harrisRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 0.5
          }
        }
      );

      // 4. Óptica Harris → REMAG Circular Network Transition
      gsap.fromTo(remagRef.current.querySelector('.remag-network-col'),
        { y: 50, scale: 0.92, opacity: 0.6 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.4,
          scrollTrigger: {
            trigger: remagRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 0.6
          }
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleOpenContact = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-ai-chat'));
  };

  return (
    <div ref={rootRef} id="proyectos-seleccionados" className="kinetic-work-root">
      {/* =====================================================================
          SCENE 1: AGM RENT A CAR (Technology / Mobility / Patagonia / Interface)
          ===================================================================== */}
      <section ref={agmRef} className="kinetic-scene scene-agm" aria-label="Caso 01: AGM Rent a Car">
        <div className="scene-spatial-title" aria-hidden="true">AGM MOBILITY</div>

        <div className="agm-stage-grid">
          {/* Visual Dominance Column - Editorial Mockup Container */}
          <div className="agm-visual-window">
            <img 
              src="/images/projects-showcase.webp" 
              alt="AGM Rent a Car - Maqueta de Cotizador Web y Catálogo de Flota" 
              className="agm-visual-img"
              loading="lazy"
            />
            <div className="agm-hud-overlay">
              <div className="agm-hud-top">
                <span className="agm-hud-badge">AGM • ARRIENDO DE VEHÍCULOS</span>
                <span className="font-mono text-[11px] text-patagonia-cyan">PUNTA ARENAS • 53°S</span>
              </div>
              <div className="agm-hud-bottom">
                <span>ESTRUCTURA WEB & COTIZADOR DIGITAL</span>
                <span className="text-patagonia-cyan">CATÁLOGO DE FLOTA</span>
              </div>
            </div>
          </div>

          {/* Intelligence & Strategy Column */}
          <article className="agm-content-col">
            <span className="agm-case-index">CASE 01 • MOVILIDAD & E-COMMERCE</span>
            
            <h2 className="agm-title">AGM Rent a Car</h2>
            
            <p className="agm-tagline">
              Plataforma web y cotizador digital para arriendo de vehículos en Punta Arenas.
            </p>

            <p className="agm-desc">
              Desarrollo del sitio web y cotizador digital para la flota de arriendo de vehículos 
              en Magallanes. Estructura web orientada a agilizar consultas de disponibilidad, 
              selección de categorías y solicitudes de reserva tanto para turismo receptivo 
              como corporativo.
            </p>

            <div className="agm-tags-wrap" aria-label="Disciplinas">
              <span className="agm-tag-pill">Desarrollo Web Pro</span>
              <span className="agm-tag-pill">Cotizador Web</span>
              <span className="agm-tag-pill">Flota Punta Arenas</span>
            </div>

            <div className="agm-actions">
              <Link to="/servicios/desarrollo-web" className="btn-scene-primary">
                <span>Ver Capacidad Web</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button 
                type="button" 
                onClick={handleOpenContact}
                className="btn-scene-secondary"
              >
                <span>Cotizar Proyecto Similar</span>
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================================
          SCENE 2: RUTA 9 (Gastronomy / Savor / Smash Burgers / Visual Brand)
          ===================================================================== */}
      <section ref={ruta9Ref} className="kinetic-scene scene-ruta9" aria-label="Caso 02: Ruta 9">
        <div className="scene-spatial-title" aria-hidden="true">RUTA 9 BURGERS</div>

        <div className="ruta9-stage-grid">
          {/* Intelligence & Strategy Column */}
          <article className="agm-content-col">
            <span className="agm-case-index" style={{ color: '#F59E0B' }}>
              CASE 02 • GASTRONOMÍA & SMASH BURGERS
            </span>

            <h2 className="agm-title">Ruta 9</h2>

            <p className="agm-tagline">
              Identidad de marca, sabor y cultura smash burger en Punta Arenas.
            </p>

            <p className="agm-desc">
              Estrategia de marca, dirección de contenidos visuales y presencia digital para 
              marca de smash burgers en Magallanes. Enfoque en comunicar la identidad de 
              producto y conectar con el público local mediante optimización en búsquedas 
              geolocalizadas y presencia en canales digitales.
            </p>

            <div className="agm-tags-wrap" aria-label="Disciplinas">
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Smash Burgers & Brand
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Estrategia de Marca
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                SEO Local Magallanes
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Contenido Digital
              </span>
            </div>

            <div className="agm-actions">
              <Link to="/servicios/seo-local-magallanes" className="btn-scene-primary">
                <span>Ver SEO Local</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link to="/servicios/comunicacion-digital" className="btn-scene-secondary">
                <span>Ver Estrategia Visual</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button 
                type="button" 
                onClick={handleOpenContact}
                className="btn-scene-secondary"
              >
                <span>Cotizar Proyecto Similar</span>
              </button>
            </div>
          </article>

          {/* Visual Column: Editorial Photography Frame */}
          <div className="ruta9-visual-frame">
            <img 
              src="/gourmet_dish_luxury.webp" 
              alt="Ruta 9 - Maqueta Editorial de Gastronomía y Smash Burgers en Punta Arenas" 
              className="ruta9-visual-img"
              loading="lazy"
            />
            <div className="ruta9-overlay-content">
              <span className="ruta9-coords-badge">MAQUETA PROVISIONAL • GASTRONOMÍA & MARCA</span>
              <p className="font-heading text-xl text-white font-light mt-1">Sabor, Identidad & Marca Austral</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SCENE 3: ÓPTICA HARRIS (Optics / Precision / Ray-Ban Meta / Light)
          ===================================================================== */}
      <section ref={harrisRef} className="kinetic-scene scene-harris" aria-label="Caso 03: Óptica Harris">
        <div className="scene-spatial-title" aria-hidden="true">HARRIS OPTICAL</div>

        <div className="harris-stage-grid">
          {/* Visual Column: Precision Lens & Reticle (Art Direction) */}
          <div className="harris-reticle-col">
            <img 
              src="/images/web-core.webp" 
              alt="Óptica Harris - Maqueta de Precisión Óptica y Salud Visual en Punta Arenas" 
              className="harris-reticle-img"
              loading="lazy"
            />
            <div className="harris-lens-hud">
              <div className="harris-crosshair">
                <span className="font-mono text-[9px] text-patagonia-cyan uppercase tracking-widest">
                  DIRECCIÓN DE ARTE • FOCO ÓPTICO
                </span>
              </div>
            </div>
          </div>

          {/* Intelligence & Strategy Column */}
          <article className="agm-content-col">
            <span className="agm-case-index">CASE 03 • SALUD VISUAL & TECNOLOGÍA ÓPTICA</span>

            <h2 className="agm-title">Óptica Harris</h2>

            <p className="agm-tagline">
              Presencia digital, catálogo de productos y posicionamiento local en Punta Arenas.
            </p>

            <p className="agm-desc">
              Estrategia digital y posicionamiento web para óptica establecida en Magallanes. 
              Estructura para la exhibición de anteojos y tecnologías ópticas de fabricantes 
              globales (incluyendo smart glasses Ray-Ban Meta y cristales de alta precisión 
              Varilux y Mimetika), combinada con SEO local para captar búsquedas de salud visual 
              en Punta Arenas.
            </p>

            <div className="agm-tags-wrap" aria-label="Disciplinas">
              <span className="agm-tag-pill">Salud Visual & Óptica</span>
              <span className="agm-tag-pill">Catálogo Ray-Ban Meta</span>
              <span className="agm-tag-pill">Cristales Varilux / Mimetika</span>
              <span className="agm-tag-pill">SEO Local Punta Arenas</span>
            </div>

            <div className="agm-actions">
              <Link to="/servicios/seo-local-punta-arenas" className="btn-scene-primary">
                <span>Ver SEO Punta Arenas</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button 
                type="button" 
                onClick={handleOpenContact}
                className="btn-scene-secondary"
              >
                <span>Cotizar Proyecto Similar</span>
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================================
          SCENE 4: REMAG (Circular Economy / Glass Recycling / Magallanes Territory)
          ===================================================================== */}
      <section ref={remagRef} className="kinetic-scene scene-remag" aria-label="Caso 04: REMAG">
        <div className="scene-spatial-title" aria-hidden="true">REMAG CIRCULAR</div>

        <div className="remag-stage-grid">
          {/* Intelligence & Strategy Column */}
          <article className="agm-content-col">
            <span className="agm-case-index" style={{ color: '#F59E0B' }}>
              CASE 04 • ECONOMÍA CIRCULAR & RESIDUOS
            </span>

            <h2 className="agm-title">REMAG</h2>

            <p className="agm-tagline">
              Ecosistema digital y comunicación para la gestión de residuos y vidrio en Magallanes.
            </p>

            <p className="agm-desc">
              Estrategia de comunicación y portal web para el proyecto de reciclaje y valorización 
              de vidrio en la Patagonia. Difusión de la red de puntos limpios en el territorio 
              magallánico, contenidos de educación ambiental y articulación con la comunidad 
              para fomentar la economía circular regional.
            </p>

            <div className="agm-tags-wrap" aria-label="Disciplinas">
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Economía Circular
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Puntos Limpios Magallanes
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Reciclaje de Vidrio
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Impacto Territorial
              </span>
            </div>

            <div className="agm-actions">
              <Link to="/servicios/aplicaciones-web-pro" className="btn-scene-primary">
                <span>Ver Aplicaciones Web Pro</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link to="/zonas/magallanes" className="btn-scene-secondary">
                <span>Ver Cobertura Magallanes</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button 
                type="button" 
                onClick={handleOpenContact}
                className="btn-scene-secondary"
              >
                <span>Cotizar Proyecto Similar</span>
              </button>
            </div>
          </article>

          {/* Visual Column: Circular Economy & Clean Points */}
          <div className="remag-network-col">
            <img 
              src="/images/apps-pro.webp" 
              alt="REMAG - Maqueta de Red de Puntos Limpios y Reciclaje de Vidrio en Magallanes" 
              className="remag-network-img"
              loading="lazy"
            />
            <div className="remag-overlay-badge">
              <span className="font-mono text-[10px] text-patagonia-gold uppercase tracking-widest">
                MAQUETA PROVISIONAL • PUNTOS LIMPIOS & VIDRIO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FINAL CONVERSION PORTAL
          ===================================================================== */}
      <section className="scene-conversion-portal" aria-label="Conversión y Contacto">
        <div className="conversion-box">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-patagonia-gold">
            DIAGNÓSTICO & EJECUCIÓN INMEDIATA
          </span>

          <h3 className="conversion-h3">
            ¿Tu empresa necesita este estándar de ingeniería, diseño y posicionamiento?
          </h3>

          <button 
            type="button" 
            onClick={handleOpenContact}
            className="conversion-btn"
            id="cta-iniciar-proyecto-kinetic"
          >
            <span>Iniciar Conversación de Proyecto</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SelectedWork;
