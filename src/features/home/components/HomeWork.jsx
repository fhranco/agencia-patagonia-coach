import React from 'react';
import { LIQUID_BUTTON_HTML } from '../data/liquidButtonHtml';

export default function HomeWork() {
  return (
    <section id="works" className="panel works-panel" aria-labelledby="works-title" inert="" aria-hidden="true">
      <div className="section-kicker micro">
        <span>03 / Casos Seleccionados</span>
        <span>Sistemas reales en producción.</span>
      </div>
      <div className="works-heading">
        <h2 id="works-title">
          <span className="reveal-line">
            <span className="reveal-word-mask"><span className="reveal-word">Construimos</span></span>{' '}
            <span className="reveal-word-mask"><span className="reveal-word">sistemas</span></span>
          </span>
          <br />
          <em className="reveal-word-mask"><span className="reveal-word">que perduran.</span></em>
        </h2>
        <p>Una mirada a proyectos y arquitecturas desplegadas.<br />Y la solución que podemos construir para tu empresa.</p>
      </div>
      <div id="works-guide" hidden="">
        <img crossOrigin="anonymous" data-asset-src="assets/guide-poses/works-guide.png" alt="" />
      </div>
      <div id="work-hitareas" aria-label="Casos seleccionados" hidden=""></div>
      <div id="static-works" className="static-works"></div>
      <div className="study-rail">
        <div className="study-current">
          <span className="micro">
            <span id="study-number">01</span> / 16
            <span id="study-category">Movilidad &amp; E-Commerce</span>
          </span>
          <button id="study-open" aria-label="Ver caso seleccionado">
            <span id="study-title">AGM Rent a Car</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
        <span className="study-scroll micro">Scroll para explorar <span aria-hidden="true">↓</span></span>
      </div>
      <div className="study-finale" inert="" aria-hidden="true">
        <p className="micro">El próximo ecosistema puede ser el tuyo.</p>
        <h2>Iniciemos una<br /><em>conversación.</em></h2>
        <p className="study-finale-note">Un diagnóstico técnico, un proyecto nuevo, una evolución digital.</p>
        <iframe
          id="liquid-contact-frame"
          srcDoc={LIQUID_BUTTON_HTML}
          title="Iniciar conversación con PatagoniaCoach"
          loading="eager"
        />
        <p id="contact" className="finale-conversation">
          <span aria-hidden="true"></span>Un diagnóstico estratégico es el punto de partida.
        </p>
      </div>
      <img
        className="static-contact-portrait"
        crossOrigin="anonymous"
        data-asset-src="assets/portraits/contact-portrait.png"
        alt="PatagoniaCoach — Diagnóstico y estrategia"
      />
    </section>
  );
}
