import React from 'react';
import { CONTACT } from '../../../constants/contact';

export default function HomeProjectDialog() {
  return (
    <dialog id="project-dialog" aria-labelledby="project-title" data-lenis-prevent="">
      <button className="dialog-close studio-close" aria-label="Cerrar proyecto" title="Cerrar proyecto">
        <svg viewBox="0 0 28 28" aria-hidden="true" focusable="false">
          <path className="close-ribbon-back" d="m7 4 17 17-3 3L4 7Z"></path>
          <path className="close-ribbon-face" d="m21 4 3 3L7 24l-3-3Z"></path>
          <path className="close-ribbon-light" d="m21 4 3 3M4 21 17 8M7 4l8 8"></path>
        </svg>
      </button>
      <div className="project-visual">
        <img id="project-image" alt="" />
        <video id="project-video" controls="" muted="" playsInline="" preload="metadata" hidden=""></video>
        <span className="project-index micro" id="project-index"></span>
      </div>
      <article className="project-copy">
        <p className="micro" id="project-category"></p>
        <h2 id="project-title"></h2>
        <p className="project-lead" id="project-short"></p>
        <p id="project-description"></p>
        <section id="project-notes" aria-label="Notas del caso"></section>
        <p className="project-detail" id="project-detail"></p>
        <div className="project-nav">
          <button id="project-prev" aria-label="Caso anterior">←</button>
          <span className="micro">Explorar otro caso</span>
          <button id="project-next" aria-label="Siguiente caso">→</button>
        </div>
        <div
          className="project-action"
          style={{
            marginTop: '1.75rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(89,84,73,0.2)'
          }}
        >
          <a
            id="project-whatsapp-cta"
            href={`https://wa.me/${CONTACT.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="solid-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              padding: '0.75rem 1.4rem',
              borderRadius: '9999px',
              background: '#1a1916',
              color: '#f4eedb',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            <span>Cotizar proyecto similar</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    </dialog>
  );
}
