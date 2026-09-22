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
import { CONTACT, getWhatsAppUrl } from '../../constants/contact';
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
              <span className="coords-latlong">{CONTACT.coords.display}</span>
              <span className="coords-location">{CONTACT.city} · {CONTACT.region} · Chile</span>
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
                <Link to="/servicios/desarrollo-web" data-cta="service-web" className="footer-nav-link">
                  <span>Desarrollo Web Pro</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/seo-local-magallanes" data-cta="service-seo" className="footer-nav-link">
                  <span>SEO Local & GEO Magallanes</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/automatizacion-con-ia" data-cta="service-ai" className="footer-nav-link">
                  <span>Automatización con IA</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/aplicaciones-web-pro" data-cta="service-apps" className="footer-nav-link">
                  <span>Aplicaciones Web & Software</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/consultoria-transformacion-digital" data-cta="service-consulting" className="footer-nav-link">
                  <span>Consultoría & Diagnóstico</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/ia-generativa-visual" data-cta="service-iavisual" className="footer-nav-link">
                  <span>IA Visual Corporativa</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/tours-virtuales-360" data-cta="service-tours" className="footer-nav-link">
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
                <Link to="/servicios/seo-local-punta-arenas" data-cta="service-seo" className="footer-nav-link">
                  <span>SEO Local Punta Arenas</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/creacion-paginas-web-punta-arenas" data-cta="service-web" className="footer-nav-link">
                  <span>Creación Páginas Web Punta Arenas</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/marketing-digital-punta-arenas" data-cta="service-marketing" className="footer-nav-link">
                  <span>Marketing Digital Magallanes</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/manejo-redes-sociales-punta-arenas" data-cta="service-social" className="footer-nav-link">
                  <span>Manejo de Redes Sociales</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/videos-redes-sociales-punta-arenas" data-cta="service-video" className="footer-nav-link">
                  <span>Videos para Redes Sociales</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/creacion-reels-punta-arenas" data-cta="service-reels" className="footer-nav-link">
                  <span>Creación de Reels</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/fotografia-para-redes-sociales" data-cta="service-photo" className="footer-nav-link">
                  <span>Fotografía Profesional B2B</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/automatizacion-ia-empresas" data-cta="service-ai" className="footer-nav-link">
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
                <Link to="/zonas/punta-arenas" data-cta="zone-punta-arenas" className="footer-nav-link">
                  <span>Punta Arenas • 53°S</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/zonas/puerto-natales" data-cta="zone-puerto-natales" className="footer-nav-link">
                  <span>Puerto Natales & Torres del Paine</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/zonas/tierra-del-fuego" data-cta="zone-tierra-del-fuego" className="footer-nav-link">
                  <span>Tierra del Fuego & Porvenir</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/zonas/magallanes" data-cta="zone-magallanes" className="footer-nav-link">
                  <span>Región de Magallanes Completa</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/academia" data-cta="service-academia" className="footer-nav-link">
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
                href={`mailto:${CONTACT.email}`} 
                data-cta="email"
                className="footer-direct-mail"
              >
                {CONTACT.email}
              </a>

              <a 
                href={getWhatsAppUrl('Hola PatagoniaCoach, me gustaría coordinar una conversación directa.')} 
                target="_blank" 
                rel="noopener noreferrer"
                data-cta="whatsapp"
                className="footer-direct-phone"
              >
                {CONTACT.phone}
              </a>

              <div className="footer-social-row">
                <a 
                  href={CONTACT.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-badge"
                  aria-label="LinkedIn Franco Gallardo"
                >
                  <span>LINKEDIN</span>
                </a>
                <a 
                  href={CONTACT.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-badge"
                  aria-label="Instagram PatagoniaCoach"
                >
                  <span>INSTAGRAM</span>
                </a>
                <a 
                  href={getWhatsAppUrl('Hola PatagoniaCoach, me gustaría coordinar una conversación directa.')} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  data-cta="whatsapp"
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

        {/* Bottom Bar: Copyright, Coordinates & Austral Seal */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <span className="copyright-text">
              © {new Date().getFullYear()} PATAGONIACOACH · INGENIERÍA DIGITAL & DESARROLLO ESTRATÉGICO.
            </span>
          </div>

          <div className="bottom-right">
            <span className="tech-tag">PUNTA ARENAS • PATAGONIA CHILENA</span>
            <span className="divider-dot" aria-hidden="true">•</span>
            <span className="tech-tag">53°S MAGALLANES</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterV2;
