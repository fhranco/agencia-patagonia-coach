import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  MapPin, 
  Mail, 
  Phone, 
  Compass, 
  Layers, 
  Cpu, 
  Search,
  Globe
} from 'lucide-react';
import './FooterV2.css';

const FooterV2 = () => {
  return (
    <footer className="footer-v2-root" aria-label="Pie de Página y Navegación Territorial">
      {/* Subtle top ambient divider */}
      <div className="footer-top-line" aria-hidden="true" />

      <div className="footer-v2-container">
        
        {/* Top Brand & Territorial Statement */}
        <div className="footer-brand-row">
          <div className="footer-brand-col">
            <div className="footer-brand-badge">
              <div className="brand-dot" />
              <span className="brand-tag">PATAGONIACOACH // 53°S</span>
            </div>
            <h3 className="footer-brand-title">
              Ingeniería Digital & Soberanía Tecnológica
            </h3>
            <p className="footer-brand-desc">
              Desarrollamos arquitectura web de alta gama, posicionamiento semántico local (SEO/GEO) 
              e integración de inteligencia artificial desde Punta Arenas para empresas de Magallanes y el mundo.
            </p>
          </div>

          <div className="footer-coords-card">
            <div className="coords-header">
              <Compass className="w-3.5 h-3.5 text-patagonia-cyan" />
              <span>PROTOCOLO DE ORIGEN AUSTRAL</span>
            </div>
            <div className="coords-body">
              <span className="coords-latlong">53°09′45″S · 70°55′21″W</span>
              <span className="coords-location">Punta Arenas · Región de Magallanes · Chile</span>
            </div>
            <div className="coords-status">
              <span className="status-indicator" />
              <span>NODO REGIONAL ACTIVO</span>
            </div>
          </div>
        </div>

        {/* Structured SEO Columns Navigation Grid */}
        <div className="footer-nav-grid">
          
          {/* Column 1: Core Services */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">
              <Layers className="w-3.5 h-3.5 text-patagonia-cyan" />
              <span>SERVICIOS PRINCIPALES</span>
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/servicios/desarrollo-web" className="footer-nav-link">
                  <span>Desarrollo Web Pro</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/seo-local-magallanes" className="footer-nav-link">
                  <span>SEO Local & GEO Magallanes</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/automatizacion-con-ia" className="footer-nav-link">
                  <span>Automatización con IA</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/aplicaciones-web-pro" className="footer-nav-link">
                  <span>Aplicaciones Web & Software</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/consultoria-transformacion-digital" className="footer-nav-link">
                  <span>Consultoría & Diagnóstico</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/ia-generativa-visual" className="footer-nav-link">
                  <span>IA Visual Corporativa</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/tours-virtuales-360" className="footer-nav-link">
                  <span>Tours Virtuales 360°</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Regional Solutions (B2B Local SEO) */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">
              <Search className="w-3.5 h-3.5 text-patagonia-gold" />
              <span>SOLUCIONES LOCALES</span>
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/servicios/seo-local-punta-arenas" className="footer-nav-link">
                  <span>SEO Local Punta Arenas</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/creacion-paginas-web-punta-arenas" className="footer-nav-link">
                  <span>Creación Páginas Web Punta Arenas</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/marketing-digital-punta-arenas" className="footer-nav-link">
                  <span>Marketing Digital Magallanes</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/manejo-redes-sociales-punta-arenas" className="footer-nav-link">
                  <span>Manejo de Redes Sociales</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/videos-redes-sociales-punta-arenas" className="footer-nav-link">
                  <span>Videos para Redes Sociales</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/creacion-reels-punta-arenas" className="footer-nav-link">
                  <span>Creación de Reels</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/fotografia-para-redes-sociales" className="footer-nav-link">
                  <span>Fotografía Profesional B2B</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/automatizacion-ia-empresas" className="footer-nav-link">
                  <span>Agentes de IA para Empresas</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Territories */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">
              <MapPin className="w-3.5 h-3.5 text-patagonia-cyan" />
              <span>COBERTURA TERRITORIAL</span>
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/zonas/punta-arenas" className="footer-nav-link">
                  <span>Punta Arenas • 53°S</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/zonas/puerto-natales" className="footer-nav-link">
                  <span>Puerto Natales & Torres del Paine</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/zonas/tierra-del-fuego" className="footer-nav-link">
                  <span>Tierra del Fuego & Porvenir</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/zonas/magallanes" className="footer-nav-link">
                  <span>Región de Magallanes Completa</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/academia" className="footer-nav-link">
                  <span>Academia PatagoniaCoach</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Channels & Official Access */}
          <div className="footer-nav-col footer-contact-col">
            <h4 className="footer-col-title">
              <Phone className="w-3.5 h-3.5 text-patagonia-gold" />
              <span>CONTACTO DIRECTO</span>
            </h4>
            
            <div className="footer-contact-details">
              <a 
                href="mailto:hola@agenciapatagoniacoach.cl" 
                className="footer-direct-mail"
              >
                hola@agenciapatagoniacoach.cl
              </a>

              <a 
                href="https://wa.me/56995684198" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-direct-phone"
              >
                +56 9 9568 4198
              </a>

              <div className="footer-social-row">
                <a 
                  href="https://www.linkedin.com/in/francogallardo/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-badge"
                  aria-label="LinkedIn Franco Gallardo"
                >
                  <span>LINKEDIN</span>
                </a>
                <a 
                  href="https://instagram.com/patagoniacoach.cl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-badge"
                  aria-label="Instagram PatagoniaCoach"
                >
                  <span>INSTAGRAM</span>
                </a>
                <a 
                  href="https://wa.me/56995684198" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-badge"
                  aria-label="WhatsApp Oficial"
                >
                  <span>WHATSAPP</span>
                </a>
              </div>

              <div className="footer-operational-notice">
                <span className="notice-tag">DISPONIBILIDAD</span>
                <span className="notice-desc">Atención consultiva B2B previa coordinación.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Coordinates & Technical Certification */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <span className="copyright-text">
              © {new Date().getFullYear()} PATAGONIACOACH · INGENIERÍA DIGITAL & SOBERANÍA TECNOLÓGICA.
            </span>
          </div>

          <div className="bottom-right">
            <span className="tech-tag">ARCH: REACT 19 + GSAP + VITE</span>
            <span className="divider-dot" aria-hidden="true">•</span>
            <span className="tech-tag">53°S MAGALLANES</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterV2;
