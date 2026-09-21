import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Compass, Activity } from 'lucide-react';
import './SelectedWork.css';

const projects = [
  {
    id: 'agm-rent-a-car',
    index: '01',
    title: 'AGM Rent a Car',
    category: 'Movilidad & E-commerce Multilingüe',
    tagline: 'Motor de reservas instantáneo para la flota líder en la Patagonia.',
    description: 'Transformación integral de la plataforma de reserva de vehículos para el mercado receptivo austral. Implementación de tarificación dinámica por temporada, arquitectura multilingüe (ES / EN / PT) y sincronización de disponibilidad de flota en tiempo real sin fricción transaccional.',
    tags: ['Desarrollo Web Pro', 'Backend Multilingüe', 'Motor de Reserva', 'Sincronización Flota'],
    serviceLink: '/servicios/desarrollo-web',
    serviceName: 'Ver Capacidad de Desarrollo Web',
    visualImage: '/images/projects-showcase.webp',
    visualAlt: 'AGM Rent a Car - Plataforma Digital de Reservas',
    stats: 'Disponibilidad 99.98% • Checkout en 3 pasos',
  },
  {
    id: 'ruta-9',
    index: '02',
    title: 'Ruta 9',
    category: 'Identidad Territorial & Ecosistema Digital',
    tagline: 'La plataforma definitiva de conectividad y exploración en Magallanes.',
    description: 'Ecosistema digital de alto rendimiento concebido para posicionar y articular los servicios turísticos, logísticos y gastronómicos a lo largo del principal corredor vial patagónico. Dominancia en SEO geográfico y navegación móvil optimizada para condiciones de baja señal.',
    tags: ['Estrategia de Marca', 'SEO Local & GEO', 'Cartografía Digital', 'Experiencia Móvil'],
    serviceLink: '/servicios/seo-local-magallanes',
    serviceName: 'Ver Estrategia SEO Local',
    visualImage: '/patagonia_luxury_hero.webp',
    visualAlt: 'Ruta 9 - Plataforma Territorial Austral',
    stats: 'Top 1 SEO Regional • Caché Offline PWA',
  },
  {
    id: 'optica-harris',
    index: '03',
    title: 'Óptica Harris',
    category: 'Retail Clínico & Agenda Médica Visual',
    tagline: 'Digitalización médica y comercial de la óptica histórica de Punta Arenas.',
    description: 'Modernización del flujo de atención al paciente y catálogo oftalmológico de alta precisión. Sistema automatizado de agendamiento de turnos clínicos, recordatorios omnicanal y posicionamiento de autoridad local para salud visual en la región de Magallanes.',
    tags: ['Turnos Automatizados', 'SEO Local Punta Arenas', 'Catálogo Especializado', 'Omnicanalidad'],
    serviceLink: '/servicios/seo-local-punta-arenas',
    serviceName: 'Ver SEO Local Punta Arenas',
    visualImage: '/images/web-core.webp',
    visualAlt: 'Óptica Harris - Sistema de Salud Visual y Retail',
    stats: 'Automatización de Agenda • 0 Fricción',
  },
  {
    id: 'remag',
    index: '04',
    title: 'REMAG',
    category: 'Plataforma B2B & Visualización de Datos',
    tagline: 'Red de articulación e inteligencia empresarial para la Patagonia.',
    description: 'Hub digital para el ecosistema productivo y emprendedor de Magallanes. Panel de visualización de indicadores territoriales, directorio empresarial verificado y herramientas de vinculación estratégica entre corporaciones regionales y proveedores locales.',
    tags: ['Plataforma B2B', 'Data Visualization', 'Directorio Verificado', 'Arquitectura Modular'],
    serviceLink: '/servicios/aplicaciones-web-pro',
    serviceName: 'Ver Aplicaciones Web Pro',
    visualImage: '/images/apps-pro.webp',
    visualAlt: 'REMAG - Red Empresarial de Magallanes',
    stats: 'Directorio B2B • Dashboard Interactivo',
  },
];

const SelectedWork = () => {
  const handleOpenContact = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-ai-chat'));
  };

  return (
    <section 
      id="proyectos-seleccionados" 
      className="selected-work-root"
      aria-label="Selección de Proyectos y Casos Reales"
    >
      <div className="selected-work-container">
        {/* Section Header */}
        <header className="selected-work-header">
          <motion.div 
            className="selected-work-badge"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>Portafolio de Ejecución</span>
          </motion.div>

          <motion.h2 
            className="selected-work-h2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Casos que redefinen industrias en la Patagonia.
          </motion.h2>

          <motion.p 
            className="selected-work-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Diseño, desarrollo y posicionamiento para organizaciones reales con requerimientos 
            complejos en movilidad, territorio, salud y articulación empresarial.
          </motion.p>
        </header>

        {/* Stacked Panels */}
        <div className="selected-work-stack">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-panel-wrapper"
              style={{ zIndex: index + 1 }}
            >
              <motion.article 
                className="project-panel-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="project-panel-grid">
                  {/* Left Column: Project Intelligence & Narrative */}
                  <div className="project-info-col">
                    <div className="project-meta-top">
                      <span className="project-index">CASE {project.index}</span>
                      <span className="project-category">{project.category}</span>
                    </div>

                    <div className="project-body">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-tagline">{project.tagline}</p>
                      <p className="project-description">{project.description}</p>

                      <div className="project-tags-list" aria-label="Tecnologías y disciplinas">
                        {project.tags.map((tag) => (
                          <span key={tag} className="project-tag-pill">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-actions">
                      <Link to={project.serviceLink} className="project-link-primary">
                        <span>{project.serviceName}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <button 
                        type="button"
                        onClick={handleOpenContact}
                        className="project-link-secondary"
                      >
                        <span>Cotizar solución similar</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Stage */}
                  <div className="project-visual-col">
                    <img 
                      src={project.visualImage} 
                      alt={project.visualAlt}
                      className="project-visual-img"
                      loading="lazy"
                    />
                    <div className="project-visual-overlay" />
                    <div className="project-visual-badge">
                      <span>{project.stats}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>

        {/* Section Closer & Direct Conversion Bridge */}
        <motion.div 
          className="selected-work-cta-bridge"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="selected-work-cta-title">
            ¿Tu empresa necesita este estándar de ingeniería, diseño y posicionamiento?
          </h3>
          <button 
            type="button"
            onClick={handleOpenContact}
            className="selected-work-cta-btn"
            id="cta-iniciar-proyecto-portfolio"
          >
            <span>Iniciar Conversación de Proyecto</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
