import React from 'react';

export default function HomeCapabilities() {
  return (
    <section id="practice" className="panel practice-panel atelier" aria-labelledby="practice-title" inert="" aria-hidden="true">
      <div className="section-kicker micro">
        <span>02 / Capacidades</span>
        <span>Sistemas que generan negocio.</span>
      </div>
      <h2 id="practice-title" className="visually-hidden">Capacidades.</h2>
      <aside className="atelier-copy" aria-live="polite">
        <div className="atelier-copy-stack">
          <article data-atelier-copy="0">
            <span className="micro">Automatización &amp; Agentes</span>
            <h3>Inteligencia Artificial<span>.</span></h3>
            <p>Agentes autónomos.<br /> Automatización de procesos.<br /> Decisiones con datos reales.</p>
            <small>Integramos IA directamente en la operación del negocio.<br /> Flujos que reducen fricción manual y multiplican la capacidad de atención y conversión.</small>
          </article>
          <article data-atelier-copy="1" aria-hidden="true">
            <span className="micro">Plataformas &amp; Software</span>
            <h3>Desarrollo Digital<span>.</span></h3>
            <p>Arquitectura moderna.<br /> Carga instantánea.<br /> Experiencias de alto rendimiento.</p>
            <small>Construimos plataformas web y aplicaciones a medida.<br /> Código limpio, infraestructura escalable y diseño enfocado en la conversión comercial.</small>
          </article>
          <article data-atelier-copy="2" aria-hidden="true">
            <span className="micro">Posicionamiento &amp; GEO</span>
            <h3>Crecimiento<span>.</span></h3>
            <p>Visibilidad estratégica donde buscan tus clientes.</p>
            <button className="atelier-play" aria-label="Explorar pilares" type="button">
              Explorar pilar{' '}
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m12 3 5 3v6l-5 3-5-3V6Zm-5 3 5 3 5-3M12 9v6"></path>
                <path d="M4 13c-1.3.7-2 1.5-2 2.5C2 18 6.5 20 12 20s10-2 10-4.5c0-.9-.7-1.8-2-2.5M2 12v3.5h3.5M22 19v-3.5h-3.5"></path>
              </svg>
            </button>
          </article>
        </div>
      </aside>
      <div className="atelier-rail">
        <span className="atelier-principle micro">Estrategia + Software.<br />Ejecución territorial.</span>
        <div className="atelier-tabs" role="group" aria-label="Explorar capacidades">
          <button data-practice="0" aria-pressed="true"><b>01</b><span>IA</span></button>
          <button data-practice="1" aria-pressed="false"><b>02</b><span>Desarrollo</span></button>
          <button data-practice="2" aria-pressed="false"><b>03</b><span>Crecimiento</span></button>
        </div>
        <div className="atelier-cue">
          <span className="atelier-note">Tecnología con propósito</span>
          <span className="atelier-gesture micro">Scroll para avanzar</span>
        </div>
      </div>
      <div className="static-practice">
        <article>
          <img data-image="0" alt="Inteligencia Artificial" />
          <h3>Inteligencia Artificial.</h3>
          <p>Agentes autónomos, automatización y análisis inteligente aplicado a negocio.</p>
        </article>
        <article>
          <img data-image="2" alt="Desarrollo Digital" />
          <h3>Desarrollo Digital.</h3>
          <p>Sitios, plataformas y aplicaciones web de alto rendimiento y arquitectura robusta.</p>
        </article>
        <article>
          <img data-image="5" alt="Crecimiento" />
          <h3>Crecimiento.</h3>
          <p>SEO territorial, posicionamiento en motores de IA y captación comercial calificada.</p>
        </article>
      </div>
    </section>
  );
}
