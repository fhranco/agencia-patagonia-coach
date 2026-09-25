import React from 'react';
import { CONTACT, getWhatsAppUrl } from '../../../constants/contact';

export default function HomeFooter() {
  const whatsappUrl = getWhatsAppUrl('Hola PatagoniaCoach, me gustaría coordinar una conversación.');

  return (
    <footer className="site-footer">
      <div className="footer-signoff">
        <span className="footer-signoff-name">
          <span data-artist-name="">PatagoniaCoach</span>
          <span className="footer-period" aria-hidden="true">.</span>
        </span>
        <span className="micro">
          Punta Arenas · Patagonia · Chile · 53°09′S 70°55′W <span className="footer-year">© 2026</span>
        </span>
        <span className="micro" style={{ marginTop: '0.35rem', display: 'block', opacity: 0.8 }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {CONTACT.phone}
          </a>
          {' · '}
          <a
            href={`mailto:${CONTACT.email}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {CONTACT.email}
          </a>
        </span>
      </div>
      <div className="footer-socials" aria-label="Enlaces y servicios">
        <span className="micro footer-socials-label">Ecosistema /</span>
        <ul>
          <li><a href="/servicios/desarrollo-web" style={{ color: 'inherit', textDecoration: 'none' }}>Desarrollo Web Pro</a></li>
          <li><a href="/servicios/seo-local-magallanes" style={{ color: 'inherit', textDecoration: 'none' }}>SEO Local Magallanes</a></li>
          <li><a href="/servicios/automatizacion-con-ia" style={{ color: 'inherit', textDecoration: 'none' }}>Automatización con IA</a></li>
          <li><a href="/servicios/comunicacion-digital" style={{ color: 'inherit', textDecoration: 'none' }}>Comunicación Digital</a></li>
          <li><a href="/servicios/consultoria-transformacion-digital" style={{ color: 'inherit', textDecoration: 'none' }}>Consultoría Digital</a></li>
          <li><a href="/servicios/aplicaciones-web-pro" style={{ color: 'inherit', textDecoration: 'none' }}>Aplicaciones Web Pro</a></li>
          <li><a href="/academia" style={{ color: 'inherit', textDecoration: 'none' }}>Academia</a></li>
          <li><a href="/zonas/magallanes" style={{ color: 'inherit', textDecoration: 'none' }}>Punta Arenas</a></li>
          <li><a href="/zonas/puerto-natales" style={{ color: 'inherit', textDecoration: 'none' }}>Puerto Natales</a></li>
          <li><a href="/zonas/tierra-del-fuego" style={{ color: 'inherit', textDecoration: 'none' }}>Tierra del Fuego</a></li>
        </ul>
      </div>
    </footer>
  );
}
