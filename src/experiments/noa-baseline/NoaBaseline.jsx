import { Helmet } from 'react-helmet-async';
import './noa-baseline.css';

export default function NoaBaseline() {
  return (
    <div className="noa-baseline-root">
      <Helmet>
        <title>Noa Baseline Lab | PatagoniaCoach</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* 1. Skip Link */}
      <a className="skip-link" href="#top">Saltar al contenido</a>

      {/* 2. Site Header */}
      <header className="site-header">
        <a className="wordmark" data-go="hero" href="#top" aria-label="Noa Baseline Inicio">
          <span className="monogram">nv<span>•</span></span>
          <span className="brand-lockup">
            <span className="artist-name">Noa Vale</span>
            <span className="artist-role">Single-Stage Lab</span>
          </span>
        </a>

        <nav className="sable-dock" aria-label="Navegación del laboratorio">
          <a className="sable-dock__item" data-dock-item data-go="artist" href="#artist">
            <span className="sable-dock__icon" aria-hidden="true">
              <svg viewBox="0 0 16 16">
                <rect x="2.2" y="2.2" width="11.6" height="11.6" rx="3.4" />
                <circle cx="8" cy="8" r="2.4" />
              </svg>
            </span>
            <span>The Studio</span>
          </a>
          <a className="sable-dock__item" data-dock-item data-go="practice" href="#practice">
            <span className="sable-dock__icon" aria-hidden="true">
              <svg viewBox="0 0 16 16">
                <circle cx="3" cy="8" r="1.5" />
                <circle cx="12.5" cy="3.5" r="1.5" />
                <circle cx="12.5" cy="12.5" r="1.5" />
                <path d="M4.5 7.3 11 4.2M4.5 8.7l6.5 3.1" />
              </svg>
            </span>
            <span>The Practice</span>
          </a>
          <a className="sable-dock__item" data-dock-item data-go="works" href="#works">
            <span className="sable-dock__icon" aria-hidden="true">
              <svg viewBox="0 0 16 16">
                <rect x="2" y="3" width="12" height="10" rx="1.5" />
                <path d="M2 6h12M5 4.5h.01M7 4.5h.01" />
              </svg>
            </span>
            <span>Selected Work</span>
          </a>
        </nav>

        <button className="thinking-contact" type="button" aria-label="Contactar">
          <span className="thinking-contact__label">LET’S DISCUSS</span>
        </button>
      </header>

      {/* 3. Main Physical Scroll Architecture */}
      <main id="top">
        <div id="scroll-story">
          <div id="stage">
            {/* Analog Grain Overlay */}
            <div className="grain" aria-hidden="true"></div>

            {/* Canvas WebGL Placeholder */}
            <canvas id="gallery-canvas" aria-label="Escena 3D"></canvas>
            <video id="card-motion" playsInline muted loop aria-hidden="true"></video>

            {/* Panel 0: Hero */}
            <section id="hero" className="panel hero-panel" aria-labelledby="hero-title">
              <div className="hero-edition micro">
                <span className="hero-edition-label">Selected studies</span>
                <span>01—08 / 2026</span>
              </div>
              <h1 id="hero-title">A world in every image.</h1>
              <div className="hero-bottom">
                <div className="current-work">
                  <p className="micro">
                    <span className="current-index">
                      <span id="current-number">01</span>
                      <span className="current-total"> / 08</span>
                    </span>
                    <span id="current-category">Digital sculpture</span>
                  </p>
                  <h2 id="current-title">An unlikely fold</h2>
                </div>
                <div className="card-controls">
                  <button id="previous" className="card-arrow" aria-label="Anterior">←</button>
                  <button id="next" className="card-arrow" aria-label="Siguiente">→</button>
                </div>
                <a className="scroll-cue" href="#entrance">
                  <span className="micro">SCROLL TO EXPLORE</span>
                </a>
              </div>
            </section>

            {/* Panel 1: Entrance */}
            <section id="entrance" className="panel entrance-panel" aria-labelledby="entrance-title">
              <p className="micro entrance-overline">A closer look / Into the studio</p>
              <h2 id="entrance-title">
                Behind<br />the images<span id="entrance-dot" aria-hidden="true"></span>
              </h2>
              <span className="entrance-foot micro">Every world begins with a way of seeing.</span>
            </section>

            {/* Radial Portal Zoom Layer */}
            <div id="studio-portal" aria-hidden="true"></div>

            {/* Panel 2: Artist / Studio */}
            <section id="artist" className="panel artist-panel" aria-labelledby="artist-title">
              <div id="portal-signature">
                <span className="micro">Behind the images</span>
                <h2 id="artist-title" className="portal-name">Noa Vale</h2>
                <span className="micro">Independent digital artist</span>
              </div>
            </section>

            {/* Panel 3: Practice / Atelier */}
            <section id="practice" className="panel practice-panel atelier" aria-labelledby="practice-title">
              <div className="section-kicker micro">
                <span>02 / Ways of making</span>
                <span>An image learns to move.</span>
              </div>
              <h2 id="practice-title" className="visually-hidden">Ways of making</h2>
              <aside className="atelier-copy">
                <div className="atelier-copy-stack">
                  <article data-atelier-copy="0">
                    <span className="micro">Find the unexpected</span>
                    <h3>Image<span>.</span></h3>
                    <p>A simple material.<br />A different point of view.<br />Suddenly, another world.</p>
                  </article>
                </div>
              </aside>
              <div className="atelier-rail">
                <div className="atelier-tabs">
                  <button type="button"><b>01</b><span>Image</span></button>
                  <button type="button"><b>02</b><span>Motion</span></button>
                  <button type="button"><b>03</b><span>Interaction</span></button>
                </div>
              </div>
            </section>

            {/* Panel 4: Works */}
            <section id="works" className="panel works-panel" aria-labelledby="works-title">
              <div className="section-kicker micro">
                <span>03 / Selected studies</span>
                <span>Sixteen starting points.</span>
              </div>
              <div className="works-heading">
                <h2 id="works-title">Follow your <em>curiosity.</em></h2>
                <p>A walk through things I’ve made.<br />And the things we could make next.</p>
              </div>
              <div className="study-rail">
                <div className="study-current">
                  <span className="micro"><span id="study-number">01</span> / 16 — <span id="study-category">Digital sculpture</span></span>
                  <button id="study-open" type="button">
                    <span id="study-title">An unlikely fold</span>
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* 4. Site Footer */}
      <footer className="site-footer">
        <div className="footer-signoff">
          <span className="footer-signoff-name">Noa Vale</span><span className="footer-period">.</span>
          <span className="micro">Studio Lab • 2026</span>
        </div>
      </footer>

      {/* 5. Modals Placeholder */}
      <dialog id="project-dialog">
        <div className="project-copy">
          <h2>Project Detail Modal</h2>
          <p>Geometry baseline ready for modal homographic transition.</p>
        </div>
      </dialog>
    </div>
  );
}
