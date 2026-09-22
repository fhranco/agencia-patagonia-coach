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

      // 2. AGM → Ruta 9 Morphing Transition
      gsap.fromTo(ruta9Ref.current.querySelector('.ruta9-visual-frame'),
        { clipPath: 'polygon(15% 15%, 85% 15%, 85% 85%, 15% 85%)', scale: 0.9 },
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

      // 3. Ruta 9 → Óptica Harris Optical Aperture Transition
      gsap.fromTo(harrisRef.current.querySelector('.harris-reticle-col'),
        { scale: 0.88, filter: 'blur(10px)', opacity: 0.5 },
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

      // 4. Óptica Harris → REMAG Network Grid Transition
      gsap.fromTo(remagRef.current.querySelector('.remag-network-col'),
        { y: 60, scale: 0.92, opacity: 0.6 },
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
          SCENE 1: AGM RENT A CAR (Technology / Mobility / Interface)
          ===================================================================== */}
      <section ref={agmRef} className="kinetic-scene scene-agm" aria-label="Caso 01: AGM Rent a Car">
        <div className="scene-spatial-title" aria-hidden="true">AGM MOBILITY</div>

        <div className="agm-stage-grid">
          {/* Visual Dominance Column */}
          <div className="agm-visual-window">
            <img 
              src="/images/projects-showcase.webp" 
              alt="AGM Rent a Car - Arquitectura de Reserva y Plataforma de Flota" 
              className="agm-visual-img"
              loading="lazy"
            />
            <div className="agm-hud-overlay">
              <div className="agm-hud-top">
                <span className="agm-hud-badge">AGM • FLEET TELEMETRY</span>
                <span className="font-mono text-[11px] text-patagonia-cyan">API STATUS: 200 OK</span>
              </div>
              <div className="agm-hud-bottom">
                <span>TARIFICACIÓN DINÁMICA POR TEMPORADA</span>
                <span className="text-patagonia-cyan">ES / EN / PT</span>
              </div>
            </div>
          </div>

          {/* Intelligence & Strategy Column */}
          <article className="agm-content-col">
            <span className="agm-case-index">CASE 01 • MOVILIDAD & E-COMMERCE</span>
            
            <h2 className="agm-title">AGM Rent a Car</h2>
            
            <p className="agm-tagline">
              Motor de reservas instantáneo para la flota líder en la Patagonia.
            </p>

            <p className="agm-desc">
              Transformación total del sistema de arriendo de vehículos para el turismo receptivo 
              austral. Arquitectura de reservas en tiempo real con motor de tarifas dinámico, gestión 
              de flota sincronizada e internacionalización en 3 idiomas sin fricción transaccional.
            </p>

            <div className="agm-tags-wrap" aria-label="Disciplinas">
              <span className="agm-tag-pill">Desarrollo Web Pro</span>
              <span className="agm-tag-pill">Backend Multilingüe</span>
              <span className="agm-tag-pill">Motor de Reserva</span>
              <span className="agm-tag-pill">Checkout en 3 Pasos</span>
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
          SCENE 2: RUTA 9 (Territory / Energy / Photography / Editorial)
          ===================================================================== */}
      <section ref={ruta9Ref} className="kinetic-scene scene-ruta9" aria-label="Caso 02: Ruta 9">
        <div className="scene-spatial-title" aria-hidden="true">RUTA 9 PATAGONIA</div>

        <div className="ruta9-stage-grid">
          {/* Intelligence & Strategy Column */}
          <article className="agm-content-col">
            <span className="agm-case-index" style={{ color: '#F59E0B' }}>
              CASE 02 • TERRITORIO & BRANDING
            </span>

            <h2 className="agm-title">Ruta 9</h2>

            <p className="agm-tagline">
              La plataforma definitiva de conectividad y exploración en Magallanes.
            </p>

            <p className="agm-desc">
              Ecosistema digital concebido para articular servicios turísticos, logísticos y 
              gastronómicos a lo largo del principal corredor vial patagónico. Dominancia absoluta 
              en SEO territorial y navegación offline PWA para condiciones extremas de conectividad.
            </p>

            <div className="agm-tags-wrap" aria-label="Disciplinas">
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Estrategia de Marca
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                SEO Local & GEO
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Cartografía Digital
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Top 1 Regional
              </span>
            </div>

            <div className="agm-actions">
              <Link to="/servicios/seo-local-magallanes" className="btn-scene-primary">
                <span>Ver Estrategia SEO</span>
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

          {/* Visual Column */}
          <div className="ruta9-visual-frame">
            <img 
              src="/patagonia_luxury_hero.webp" 
              alt="Ruta 9 - Ecosistema Territorial de la Patagonia" 
              className="ruta9-visual-img"
              loading="lazy"
            />
            <div className="ruta9-overlay-content">
              <span className="ruta9-coords-badge">53°S • CORREDOR AUSTRAL MAGALLANES</span>
              <p className="font-heading text-xl text-white font-light mt-1">Conectividad, Turismo e Industria</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SCENE 3: ÓPTICA HARRIS (Clinical Precision / Medical Engineering)
          ===================================================================== */}
      <section ref={harrisRef} className="kinetic-scene scene-harris" aria-label="Caso 03: Óptica Harris">
        <div className="scene-spatial-title" aria-hidden="true">HARRIS CLINICAL</div>

        <div className="harris-stage-grid">
          {/* Visual Column */}
          <div className="harris-reticle-col">
            <img 
              src="/images/web-core.webp" 
              alt="Óptica Harris - Plataforma Clínica y Retail Oftalmológico" 
              className="harris-reticle-img"
              loading="lazy"
            />
            <div className="harris-lens-hud">
              <div className="harris-crosshair">
                <span className="font-mono text-[9px] text-patagonia-cyan uppercase tracking-widest">
                  PRECISION FOCUS
                </span>
              </div>
            </div>
          </div>

          {/* Intelligence & Strategy Column */}
          <article className="agm-content-col">
            <span className="agm-case-index">CASE 03 • RETAIL CLÍNICO & AGENDA</span>

            <h2 className="agm-title">Óptica Harris</h2>

            <p className="agm-tagline">
              Digitalización médica y comercial de la óptica histórica de Punta Arenas.
            </p>

            <p className="agm-desc">
              Modernización integral del flujo de atención al paciente y catálogo oftalmológico. 
              Sistema inteligente de agendamiento sincronizado para turnos clínicos, recordatorios 
              omnicanal y posicionamiento de máxima autoridad local en salud visual.
            </p>

            <div className="agm-tags-wrap" aria-label="Disciplinas">
              <span className="agm-tag-pill">Turnos Automatizados</span>
              <span className="agm-tag-pill">SEO Local Punta Arenas</span>
              <span className="agm-tag-pill">Catálogo de Alta Precisión</span>
              <span className="agm-tag-pill">Omnicanalidad</span>
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
          SCENE 4: REMAG (Systemic / Economy / B2B Network Topology)
          ===================================================================== */}
      <section ref={remagRef} className="kinetic-scene scene-remag" aria-label="Caso 04: REMAG">
        <div className="scene-spatial-title" aria-hidden="true">REMAG B2B NETWORK</div>

        <div className="remag-stage-grid">
          {/* Intelligence & Strategy Column */}
          <article className="agm-content-col">
            <span className="agm-case-index" style={{ color: '#F59E0B' }}>
              CASE 04 • SISTEMA & DATA B2B
            </span>

            <h2 className="agm-title">REMAG</h2>

            <p className="agm-tagline">
              Red de articulación e inteligencia empresarial para la Patagonia.
            </p>

            <p className="agm-desc">
              Plataforma B2B para la articulación económica y visibilidad de marcas australes. 
              Panel de visualización de indicadores territoriales, directorio verificado y 
              conexiones estratégicas entre corporaciones y proveedores regionales.
            </p>

            <div className="agm-tags-wrap" aria-label="Disciplinas">
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Plataforma B2B
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Data Visualization
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Directorio Verificado
              </span>
              <span className="agm-tag-pill" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
                Arquitectura Modular
              </span>
            </div>

            <div className="agm-actions">
              <Link to="/servicios/aplicaciones-web-pro" className="btn-scene-primary">
                <span>Ver Aplicaciones Web Pro</span>
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

          {/* Visual Column */}
          <div className="remag-network-col">
            <img 
              src="/images/apps-pro.webp" 
              alt="REMAG - Red Empresarial y Visualización de Ecosistema en Magallanes" 
              className="remag-network-img"
              loading="lazy"
            />
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
