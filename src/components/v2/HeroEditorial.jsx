import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroEditorial.css';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { name: 'Desarrollo Web Pro', path: '/servicios/desarrollo-web' },
  { name: 'Inteligencia Artificial', path: '/servicios/automatizacion-con-ia' },
  { name: 'SEO Local & GEO', path: '/servicios/seo-local-magallanes' },
  { name: 'Contenido y Medios', path: '/servicios/comunicacion-digital' },
  { name: 'Automatización B2B', path: '/servicios/automatizacion-ia-empresas' },
  { name: 'Estrategia Digital', path: '/servicios/consultoria-transformacion-digital' },
];

const HeroEditorial = () => {
  const containerRef = useRef(null);
  const backLayerRef = useRef(null);
  const midLayerRef = useRef(null);
  const frontLayerRef = useRef(null);
  const agmCropRef = useRef(null);
  const ruta9CropRef = useRef(null);
  const harrisCropRef = useRef(null);
  const wordEstrategiaRef = useRef(null);
  const wordCreatividadRef = useRef(null);
  const wordTecnologiaRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const ctaBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Ambient Movement (Breathing and Drifting without scroll)
      gsap.to(agmCropRef.current, {
        y: '-=12',
        x: '+=6',
        rotation: 0.5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      if (ruta9CropRef.current) {
        gsap.to(ruta9CropRef.current, {
          y: '+=15',
          x: '-=8',
          rotation: -0.6,
          duration: 6.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5
        });
      }

      if (harrisCropRef.current) {
        gsap.to(harrisCropRef.current, {
          scale: 1.05,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1
        });
      }

      // 2. Mouse Parallax on Desktop
      const handleMouseMove = (e) => {
        if (window.innerWidth < 1024) return;
        const { clientX, clientY } = e;
        const xPercent = (clientX / window.innerWidth - 0.5) * 2;
        const yPercent = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to(midLayerRef.current, {
          x: xPercent * 25,
          y: yPercent * 18,
          duration: 1.2,
          ease: 'power1.out',
          overwrite: 'auto'
        });

        gsap.to(backLayerRef.current, {
          x: xPercent * -15,
          y: yPercent * -10,
          duration: 1.5,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // 3. Kinetic Scroll Deconstruction: Hero transforms into AGM Scene
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1
        }
      });

      tl
        // Word transformations
        .to(wordEstrategiaRef.current, { x: '-80vw', opacity: 0.1, ease: 'power2.in' }, 0)
        .to(wordCreatividadRef.current, { y: '50vh', opacity: 0.1, ease: 'power2.in' }, 0)
        .to(wordTecnologiaRef.current, { scale: 1.8, opacity: 0.15, zIndex: 1, ease: 'power2.in' }, 0)
        
        // Capabilities and CTAs clip out
        .to(capabilitiesRef.current, { x: '-60vw', opacity: 0, ease: 'power2.in' }, 0.1)
        .to(ctaBarRef.current, { scale: 0.85, opacity: 0, ease: 'power2.in' }, 0.1)

        // AGM Crop expands physically to take over the viewport
        .to(agmCropRef.current, {
          top: '0%',
          right: '0%',
          width: '100vw',
          height: '100vh',
          borderRadius: 0,
          zIndex: 50,
          boxShadow: 'none',
          ease: 'power2.inOut'
        }, 0.2);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('proyectos-seleccionados');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-ai-chat'));
  };

  return (
    <section 
      ref={containerRef} 
      className="hero-kinetic-container"
      aria-label="Introducción Cinemática PatagoniaCoach"
    >
      {/* =====================================================================
          1. BACK LAYER: Monumental Kinetic Typography & Cartography
          ===================================================================== */}
      <div ref={backLayerRef} className="hero-layer-back" aria-hidden="true">
        <div className="hero-back-atmosphere" />
        <div className="hero-back-grid" />
        <svg className="hero-back-topo-svg" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <path d="M0,120 Q300,40 600,160 T1000,100" />
          <path d="M0,280 Q350,180 700,320 T1000,240" />
          <path d="M0,450 Q250,350 650,480 T1000,390" />
        </svg>

        {/* Spatial Typography */}
        <div className="hero-monumental-text hero-monumental-1">PATAGONIA</div>
        <div className="hero-monumental-text hero-monumental-2">INGENIERÍA</div>
      </div>

      {/* =====================================================================
          2. MID LAYER: Real Project Visual Crops at Different Depths
          ===================================================================== */}
      <div ref={midLayerRef} className="hero-layer-mid">
        {/* Crop 1: AGM Rent a Car Primary Expanding Anchor */}
        <div ref={agmCropRef} className="hero-crop-agm">
          <img 
            src="/images/projects-showcase.webp" 
            alt="AGM Rent a Car - Maqueta de Catálogo de Flota" 
            className="hero-crop-agm-img"
          />
          <div className="hero-crop-agm-overlay" />
          <span className="hero-crop-agm-label">AGM • Arriendo de Autos</span>
          <span className="hero-crop-agm-status">Punta Arenas • 53°S</span>
        </div>

        {/* Crop 2: Paisaje Austral Territorial */}
        <div ref={ruta9CropRef} className="hero-crop-ruta9">
          <img 
            src="/patagonia_luxury_hero.webp" 
            alt="Paisaje Austral - Territorio Patagónico" 
            className="hero-crop-ruta9-img"
          />
        </div>

        {/* Crop 3: Óptica Harris Precision Reticle Element */}
        <div ref={harrisCropRef} className="hero-crop-harris">
          <div className="hero-crop-harris-inner">
            <span className="font-mono text-[10px] text-patagonia-cyan tracking-widest">HARRIS • 53°S</span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          3. FRONT LAYER: Semantic Value Proposition, CTAs & Capabilities
          ===================================================================== */}
      <div ref={frontLayerRef} className="hero-layer-front">
        {/* Header Bar */}
        <header className="hero-front-header">
          <div className="hero-front-brand">
            <span className="hero-front-brand-title">PatagoniaCoach</span>
            <span className="hero-front-brand-dot" />
            <span className="hero-front-tagline">Estudio de Ingeniería & Estrategia</span>
          </div>

          <div className="hero-front-coords">
            <Compass className="inline w-3.5 h-3.5 mr-1.5 align-text-bottom text-patagonia-cyan" />
            <span>53°09′45″ S • 70°54′29″ W • MAGALLANES</span>
          </div>
        </header>

        {/* Central Stage: Semantic H1 & Narrative */}
        <div className="hero-front-stage">
          <div className="hero-front-label">
            <span>Dirección Creativa & Tecnológica</span>
          </div>

          <h1 className="hero-front-h1">
            <span ref={wordEstrategiaRef} className="block">Estrategia.</span>
            <span ref={wordCreatividadRef} className="block">Creatividad.</span>
            <span ref={wordTecnologiaRef} className="block h1-accent">Tecnología.</span>
          </h1>

          <p className="hero-front-copy">
            Construimos experiencias digitales de alto impacto, sistemas escalables y ventajas 
            competitivas duraderas para marcas que deciden liderar desde la Patagonia hacia el mundo.
          </p>

          {/* Dual CTAs */}
          <div ref={ctaBarRef} className="hero-front-ctas">
            <a 
              href="#proyectos-seleccionados" 
              onClick={handleScrollToProjects}
              className="hero-btn-main"
              id="cta-ver-proyectos"
            >
              <span>Ver Proyectos</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button 
              onClick={handleOpenContact}
              className="hero-btn-hablemos"
              id="cta-hablemos"
              type="button"
            >
              <span>Hablemos</span>
              <ArrowUpRight className="w-4 h-4 text-patagonia-gold" />
            </button>
          </div>
        </div>

        {/* Capabilities Editorial Strip */}
        <nav 
          ref={capabilitiesRef}
          className="hero-front-capabilities"
          aria-label="Capacidades del Estudio"
        >
          <span className="hero-cap-label">Capacidades del Estudio</span>
          <div className="hero-cap-links">
            {capabilities.map((cap, idx) => (
              <span key={cap.path} className="inline-flex items-center gap-3">
                <Link to={cap.path} className="hero-cap-a">
                  <span>{cap.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-patagonia-cyan opacity-70" />
                </Link>
                {idx < capabilities.length - 1 && (
                  <span className="hero-cap-sep" aria-hidden="true">•</span>
                )}
              </span>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default HeroEditorial;
