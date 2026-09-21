import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Sparkles, Compass } from 'lucide-react';
import './HeroEditorial.css';

const capabilities = [
  { name: 'Desarrollo Web Pro', path: '/servicios/desarrollo-web' },
  { name: 'Inteligencia Artificial', path: '/servicios/automatizacion-con-ia' },
  { name: 'SEO Local & GEO', path: '/servicios/seo-local-magallanes' },
  { name: 'Contenido y Medios', path: '/servicios/comunicacion-digital' },
  { name: 'Automatización B2B', path: '/servicios/automatizacion-ia-empresas' },
  { name: 'Estrategia Digital', path: '/servicios/consultoria-transformacion-digital' },
];

const HeroEditorial = () => {
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
    <section className="hero-editorial-root" aria-label="Introducción PatagoniaCoach">
      {/* Background Atmosphere Layers */}
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-gradient-radial" />
        <div className="hero-gradient-bottom" />
        <div className="hero-cartography-lines" />
        <svg className="hero-contour-svg" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <path d="M0,150 Q250,50 500,180 T1000,120" />
          <path d="M0,320 Q300,200 600,340 T1000,280" />
          <path d="M0,480 Q200,380 550,500 T1000,420" />
        </svg>
      </div>

      {/* Header Bar */}
      <header className="hero-header-bar">
        <motion.div 
          className="hero-brand-block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-brand-name">PatagoniaCoach</span>
          <span className="hero-brand-dot" />
          <span className="hero-tagline-pill">Estudio de Ingeniería & Estrategia</span>
        </motion.div>

        <motion.div 
          className="hero-coords"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Compass className="inline w-3.5 h-3.5 mr-1.5 align-text-bottom text-patagonia-cyan" />
          <span>53°09′45″ S • 70°54′29″ W • MAGALLANES</span>
        </motion.div>
      </header>

      {/* Main Content Stage */}
      <div className="hero-stage">
        <div className="hero-title-container">
          <motion.div 
            className="hero-title-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span>Dirección Creativa & Tecnológica</span>
          </motion.div>

          <motion.h1 
            className="hero-h1-editorial"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Estrategia.<br />
            Creatividad.<br />
            <span className="hero-h1-accent">Tecnología.</span>
          </motion.h1>
        </div>

        {/* Narrative Box */}
        <motion.div 
          className="hero-narrative-box"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="hero-narrative-text">
            Construimos experiencias digitales de alto impacto, sistemas escalables y ventajas 
            competitivas duraderas para marcas que deciden liderar desde la Patagonia hacia el mundo.
          </p>
          <p className="hero-narrative-subtext">
            Ingeniería de software de precisión, diseño cinematográfico y optimización generativa (GEO) 
            articuladas en un único estándar de ejecución sin intermediarios.
          </p>

          {/* Dual Action CTAs */}
          <div className="hero-cta-bar">
            <a 
              href="#proyectos-seleccionados" 
              onClick={handleScrollToProjects}
              className="hero-btn-primary"
              id="cta-ver-proyectos"
            >
              <span>Ver Proyectos</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button 
              onClick={handleOpenContact}
              className="hero-btn-secondary"
              id="cta-hablemos"
              type="button"
            >
              <span>Hablemos</span>
              <ArrowUpRight className="w-4 h-4 text-patagonia-gold" />
            </button>
          </div>
        </motion.div>

        {/* Capabilities Editorial Strip */}
        <motion.nav 
          className="hero-capabilities-strip"
          aria-label="Capacidades y Servicios Principales"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-capabilities-heading">Capacidades del Estudio</span>
          <div className="hero-capabilities-grid">
            {capabilities.map((cap, idx) => (
              <span key={cap.path} className="inline-flex items-center gap-3">
                <Link to={cap.path} className="hero-capability-link">
                  <span>{cap.name}</span>
                  <ArrowUpRight className="hero-capability-arrow w-3.5 h-3.5" />
                </Link>
                {idx < capabilities.length - 1 && (
                  <span className="hero-capability-separator" aria-hidden="true">•</span>
                )}
              </span>
            ))}
          </div>
        </motion.nav>
      </div>

      {/* Footer Ticker / Status Bar */}
      <footer className="hero-footer-bar">
        <div className="hero-status-indicator">
          <span className="hero-status-dot" />
          <span>Disponibilidad Q4 2026: 2 cupos de proyecto</span>
        </div>

        <a 
          href="#proyectos-seleccionados" 
          onClick={handleScrollToProjects}
          className="hero-scroll-cue"
        >
          <span>Explorar Selección</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </footer>
    </section>
  );
};

export default HeroEditorial;
