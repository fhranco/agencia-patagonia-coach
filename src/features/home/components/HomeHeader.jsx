import React from 'react';

export default function HomeHeader() {
  return (
    <>
      <a className="skip-link" href="#artist" data-go="artist">
        Conocer el enfoque
      </a>
      <header className="site-header">
        <a href="#top" data-go="hero" className="wordmark" aria-label="PatagoniaCoach, inicio">
          <span className="monogram">PC<span>•</span></span>
          <span className="brand-lockup">
            <span className="artist-name">PatagoniaCoach</span>
            <span className="artist-role">Ingeniería Digital &amp; IA</span>
          </span>
        </a>
        <nav className="sable-dock" aria-label="Navegación principal" data-dock-state="idle" data-dock-max="0.00">
          <a className="sable-dock__item" href="#artist" data-go="artist" data-dock-item="">
            <span className="sable-dock__icon" aria-hidden="true">
              <svg viewBox="0 0 16 16">
                <rect x="2.2" y="2.2" width="11.6" height="11.6" rx="3.4"></rect>
                <circle cx="8" cy="8" r="2.4"></circle>
              </svg>
            </span>
            <span>Enfoque</span>
          </a>
          <a className="sable-dock__item" href="#practice" data-go="practice" data-dock-item="">
            <span className="sable-dock__icon" aria-hidden="true">
              <svg viewBox="0 0 16 16">
                <circle cx="3" cy="8" r="1.5"></circle>
                <circle cx="12.5" cy="3.5" r="1.5"></circle>
                <circle cx="12.5" cy="12.5" r="1.5"></circle>
                <path d="M4.5 7.3 11 4.2M4.5 8.7l6.5 3.1"></path>
              </svg>
            </span>
            <span>Capacidades</span>
          </a>
          <a className="sable-dock__item" href="#works" data-go="works" data-dock-item="">
            <span className="sable-dock__icon" aria-hidden="true">
              <svg viewBox="0 0 16 16">
                <rect x="2" y="3" width="12" height="10" rx="1.5"></rect>
                <path d="M2 6h12M5 4.5h.01M7 4.5h.01"></path>
              </svg>
            </span>
            <span>Proyectos</span>
          </a>
        </nav>
        <button className="thinking-contact" type="button" data-contact="" aria-label="Iniciar conversación">
          <span className="thinking-contact__label">CONVERSEMOS</span>
          <span className="thinking-contact__glass" aria-hidden="true">
            <svg viewBox="0 0 84 84">
              <g className="thinking-contact__mail">
                <path className="thinking-contact__open" d="M-11,-7.5 L0,-16 L11,-7.5"></path>
                <g className="thinking-contact__letter">
                  <rect x="-7.5" y="-5" width="15" height="12" rx="1.5"></rect>
                  <path d="M-4.5,-1.5 H4.5 M-4.5,1.8 H2"></path>
                </g>
                <rect className="thinking-contact__envelope" x="-11" y="-7.5" width="22" height="15" rx="2.5"></rect>
                <path className="thinking-contact__closed" d="M-11,-5.5 L0,2.5 L11,-5.5"></path>
              </g>
            </svg>
          </span>
        </button>
      </header>
    </>
  );
}
