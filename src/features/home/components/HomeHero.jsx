import React from 'react';

export default function HomeHero() {
  return (
    <section id="hero" className="panel hero-panel" aria-labelledby="hero-title">
      <div className="hero-edition micro">
        <span className="hero-edition-label">Ecosistemas Digitales</span>
        <span>Punta Arenas · Patagonia · Chile</span>
      </div>
      <h1 id="hero-title">Estrategia, tecnología e IA que generan negocio.</h1>
      <div className="static-hero" aria-hidden="true">
        <img data-image="0" alt="" />
        <img data-image="1" alt="" />
        <img data-image="2" alt="" />
      </div>
      <div className="hero-bottom">
        <div className="current-work">
          <p className="micro">
            <span className="current-index">
              <span id="current-number">01</span>
              <span className="current-total"> / 08</span>
            </span>
            <span id="current-category">Movilidad &amp; E-Commerce</span>
          </p>
          <h2 id="current-title">AGM Rent a Car</h2>
        </div>
        <div className="card-controls">
          <button id="previous" className="card-arrow card-arrow--previous" aria-label="Proyecto anterior">
            <svg className="folded-ribbon" viewBox="0 0 36 36" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="ribbon-prev-back" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#f5ead4"></stop>
                  <stop offset=".38" stopColor="#c6b490"></stop>
                  <stop offset=".7" stopColor="#a28d69"></stop>
                  <stop offset="1" stopColor="#e1d0ae"></stop>
                </linearGradient>
                <linearGradient id="ribbon-prev-face" x1="0" y1="0" x2=".8" y2="1">
                  <stop stopColor="#b39b73"></stop>
                  <stop offset=".3" stopColor="#f6ebd4"></stop>
                  <stop offset=".46" stopColor="#dfceaa"></stop>
                  <stop offset="1" stopColor="#af9872"></stop>
                </linearGradient>
                <pattern id="ribbon-prev-grain" width="2" height="2" patternUnits="userSpaceOnUse">
                  <path d="M0 .5h2" stroke="#fffaf0" strokeWidth=".35" opacity=".24"></path>
                </pattern>
              </defs>
              <g transform="translate(36 0) scale(-1 1)">
                <g className="ribbon-upper">
                  <path d="M8 5 29 18 23 22 3 9Z" fill="url(#ribbon-prev-back)"></path>
                  <path d="M8 5 29 18" fill="none" stroke="#fff9e9" strokeWidth=".7" opacity=".9"></path>
                  <path d="M8 5 29 18 23 22 3 9Z" fill="url(#ribbon-prev-grain)"></path>
                </g>
                <g className="ribbon-lower">
                  <path d="M23 14 29 18 9 32 3 28Z" fill="#756344" transform="translate(0 .6)"></path>
                  <path d="M23 14 29 18 9 32 3 28Z" fill="url(#ribbon-prev-face)"></path>
                  <path d="M23 14 29 18 9 32 3 28Z" fill="url(#ribbon-prev-grain)"></path>
                  <path d="M3 28 23 14 29 18" fill="none" stroke="#fff9e9" strokeWidth=".65" opacity=".88"></path>
                  <path d="m23 14 6 4" fill="none" stroke="#8b7553" strokeWidth=".6" opacity=".65"></path>
                </g>
              </g>
            </svg>
          </button>
          <button id="open-current">Ver proyecto</button>
          <button id="next" className="card-arrow card-arrow--next" aria-label="Siguiente proyecto">
            <svg className="folded-ribbon" viewBox="0 0 36 36" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="ribbon-next-back" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#f5ead4"></stop>
                  <stop offset=".38" stopColor="#c6b490"></stop>
                  <stop offset=".7" stopColor="#a28d69"></stop>
                  <stop offset="1" stopColor="#e1d0ae"></stop>
                </linearGradient>
                <linearGradient id="ribbon-next-face" x1="0" y1="0" x2=".8" y2="1">
                  <stop stopColor="#b39b73"></stop>
                  <stop offset=".3" stopColor="#f6ebd4"></stop>
                  <stop offset=".46" stopColor="#dfceaa"></stop>
                  <stop offset="1" stopColor="#af9872"></stop>
                </linearGradient>
                <pattern id="ribbon-next-grain" width="2" height="2" patternUnits="userSpaceOnUse">
                  <path d="M0 .5h2" stroke="#fffaf0" strokeWidth=".35" opacity=".24"></path>
                </pattern>
              </defs>
              <g>
                <g className="ribbon-upper">
                  <path d="M8 5 29 18 23 22 3 9Z" fill="url(#ribbon-next-back)"></path>
                  <path d="M8 5 29 18" fill="none" stroke="#fff9e9" strokeWidth=".7" opacity=".9"></path>
                  <path d="M8 5 29 18 23 22 3 9Z" fill="url(#ribbon-prev-grain)"></path>
                </g>
                <g className="ribbon-lower">
                  <path d="M23 14 29 18 9 32 3 28Z" fill="#756344" transform="translate(0 .6)"></path>
                  <path d="M23 14 29 18 9 32 3 28Z" fill="url(#ribbon-prev-face)"></path>
                  <path d="M23 14 29 18 9 32 3 28Z" fill="url(#ribbon-prev-grain)"></path>
                  <path d="M3 28 23 14 29 18" fill="none" stroke="#fff9e9" strokeWidth=".65" opacity=".88"></path>
                  <path d="m23 14 6 4" fill="none" stroke="#8b7553" strokeWidth=".6" opacity=".65"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
        <a className="scroll-cue" href="#artist" data-go="artist">
          <span className="round-arrow">
            <svg viewBox="0 0 24 30" aria-hidden="true">
              <path d="M12 2v23"></path>
              <path d="m4.5 17.5 7.5 7.5 7.5-7.5"></path>
            </svg>
          </span>
          <span className="micro">Detrás del sistema.<br />Conocer el enfoque.</span>
        </a>
      </div>
    </section>
  );
}
