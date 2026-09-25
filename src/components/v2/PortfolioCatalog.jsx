import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Layers, Compass, Sparkles } from 'lucide-react';
import { getCatalogProjects } from '../../data/portfolioData';
import { getWhatsAppUrl } from '../../constants/contact';
import './PortfolioCatalog.css';

const categories = [
  { id: 'all', label: 'Todos (6)' },
  { id: 'marketing', label: 'Marketing & Demanda', match: 'Estrategia Digital & Demanda' },
  { id: 'turismo', label: 'Turismo Austral', match: 'Turismo Receptivo & Aventura' },
  { id: 'inmobiliario', label: 'Inmobiliario & B2B', match: ['Real Estate & Urbanismo', 'Operaciones B2B & Logística'] },
  { id: 'tecnologia', label: 'Ingeniería & Seguridad', match: 'Seguridad & Tecnología Austral' },
  { id: 'salud', label: 'Salud & Bienestar', match: 'Salud & Bienestar de Autor' },
];

const PortfolioCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const catalogProjects = getCatalogProjects();

  const filteredProjects = catalogProjects.filter(project => {
    if (activeCategory === 'all') return true;
    const cat = categories.find(c => c.id === activeCategory);
    if (!cat) return true;
    if (Array.isArray(cat.match)) {
      return cat.match.includes(project.category);
    }
    return project.category === cat.match;
  });

  const handleWhatsAppClick = (e, message) => {
    e.preventDefault();
    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <section id="catalogo-proyectos" className="portfolio-catalog-section" aria-label="Catálogo Extendido de Proyectos">
      <div className="portfolio-catalog-glow" aria-hidden="true" />
      <div className="portfolio-catalog-glow-gold" aria-hidden="true" />

      <div className="portfolio-catalog-container">
        {/* Header */}
        <header className="portfolio-catalog-header">
          <div className="portfolio-catalog-eyebrow">
            <span className="portfolio-catalog-dot" />
            <span>PORTAFOLIO DE EJECUCIÓN // CASOS DESPLEGADOS</span>
          </div>

          <h2 className="portfolio-catalog-title">
            Más Ecosistemas <strong>en Producción.</strong>
          </h2>

          <p className="portfolio-catalog-desc">
            Portafolio de soluciones web, portales de turismo, plataformas corporativas y estrategias 
            de conversión construidas para marcas y empresas en el confín austral.
          </p>
        </header>

        {/* Category Filters */}
        <div className="portfolio-catalog-filters" role="tablist" aria-label="Filtrar proyectos por categoría">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`portfolio-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-catalog-grid">
          {filteredProjects.map((project) => (
            <article 
              key={project.id} 
              className="portfolio-card"
              style={{ '--card-accent': project.accent }}
            >
              {/* Media Container */}
              <div className="portfolio-card-media">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.category} en Patagonia`} 
                  className="portfolio-card-img"
                  loading="lazy"
                />
                <div className="portfolio-card-overlay" />

                <div className="portfolio-card-chips">
                  <span 
                    className="portfolio-chip-cat"
                    style={{ borderColor: `${project.accent}40`, color: project.accent }}
                  >
                    {project.category}
                  </span>
                  <span className="portfolio-chip-loc">
                    {project.territory}
                  </span>
                </div>
              </div>

              {/* Information Panel */}
              <div className="portfolio-card-body">
                <div className="portfolio-card-title-row">
                  <h3 className="portfolio-card-title">{project.title}</h3>
                </div>

                <p className="portfolio-card-tagline">
                  {project.tagline}
                </p>

                {/* Tags */}
                <div className="portfolio-card-tags" aria-label="Especialidades">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="portfolio-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="portfolio-card-actions">
                  <Link 
                    to={project.serviceLink}
                    className="portfolio-action-link"
                    title={project.ctaText}
                  >
                    <span>{project.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={(e) => handleWhatsAppClick(e, project.whatsappMessage)}
                    className="portfolio-action-whatsapp"
                    title="Cotizar proyecto similar vía WhatsApp"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Cotizar</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCatalog;
