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
              <span>SERVICIOS</span>
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/servicios/desarrollo-web" data-cta="service-web" className="footer-nav-link">
                  <span>Desarrollo Web</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/seo-local-magallanes" data-cta="service-seo" className="footer-nav-link">
                  <span>SEO + GEO Magallanes</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/automatizacion-con-ia" data-cta="service-ai" className="footer-nav-link">
                  <span>IA & Automatización</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/comunicacion-digital" data-cta="service-comm" className="footer-nav-link">
                  <span>Comunicación Digital</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/consultoria-transformacion-digital" data-cta="service-consulting" className="footer-nav-link">
                  <span>Consultoría Digital</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/servicios/aplicaciones-web-pro" data-cta="service-apps" className="footer-nav-link opacity-75">
                  <span>Aplicaciones Web Pro</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Territories */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">
              <MapPin className="w-3.5 h-3.5 text-patagonia-gold" />
              <span>TERRITORIO</span>
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/zonas/magallanes" data-cta="zone-magallanes" className="footer-nav-link">
                  <span>Magallanes (Base Regional)</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/zonas/puerto-natales" data-cta="zone-puerto-natales" className="footer-nav-link">
                  <span>Puerto Natales</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/zonas/tierra-del-fuego" data-cta="zone-tierra-del-fuego" className="footer-nav-link">
                  <span>Tierra del Fuego</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Formación */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">
              <Globe className="w-3.5 h-3.5 text-patagonia-cyan" />
              <span>FORMACIÓN</span>
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/academia" data-cta="service-academia" className="footer-nav-link">
                  <span>Academia PatagoniaCoach</span>
                  <ArrowUpRight className="link-arrow" />
                </Link>
              </li>
              <li>
                <a href="#diagnostic" data-cta="nav-diagnostic" className="footer-nav-link">
                  <span>Diagnóstico Digital</span>
                  <ArrowUpRight className="link-arrow" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Channels & Official Access */}
          <div className="footer-nav-col footer-contact-col">
            <h4 className="footer-col-title">
              <Phone className="w-3.5 h-3.5 text-patagonia-gold" />
              <span>CONTACTO</span>
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
