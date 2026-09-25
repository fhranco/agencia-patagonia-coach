import React from 'react';
import { CONTACT, getWhatsAppUrl } from '../../../constants/contact';

export default function HomeContactDialog() {
  const directWhatsAppUrl = getWhatsAppUrl('Hola PatagoniaCoach, me gustaría coordinar una conversación sobre un proyecto digital.');

  return (
    <dialog id="contact-dialog" className="text-dialog" aria-labelledby="contact-title" data-lenis-prevent="">
      <button className="dialog-close studio-close" aria-label="Cerrar contacto" title="Cerrar contacto">
        <svg viewBox="0 0 28 28" aria-hidden="true" focusable="false">
          <path className="close-ribbon-back" d="m7 4 17 17-3 3L4 7Z"></path>
          <path className="close-ribbon-face" d="m21 4 3 3L7 24l-3-3Z"></path>
          <path className="close-ribbon-light" d="m21 4 3 3M4 21 17 8M7 4l8 8"></path>
        </svg>
      </button>
      <div className="brief-overline">
        <span className="brief-spark" aria-hidden="true">
          <svg viewBox="0 0 32 32"><path d="M16 3v26M3 16h26M7 7l18 18M7 25 25 7"></path></svg>
        </span>
        <p className="micro">Diagnóstico Estratégico</p>
        <span className="brief-edition micro" aria-hidden="true">PatagoniaCoach · 2026</span>
      </div>
      <h2 id="contact-title">¿Qué desafío digital<br /><em>quieres resolver?</em></h2>
      <p>Comienza con un objetivo comercial, una necesidad de automatización o un nuevo proyecto.</p>
      <form id="brief-form">
        <label htmlFor="brief-name"><span aria-hidden="true">01</span> Nombre o Empresa</label>
        <input id="brief-name" name="name" autoComplete="name" placeholder="¿Cómo te llamas o qué empresa representas?" />
        <label htmlFor="brief-idea"><span aria-hidden="true">02</span> Desafío o proyecto</label>
        <textarea id="brief-idea" name="idea" rows={4} required placeholder="Describe brevemente lo que necesitas..."></textarea>
        <button type="submit" className="solid-button brief-save">
          <span>Enviar mensaje</span>
          <span className="brief-save-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <path className="save-paper" d="M7 4h12l6 6v18H7Z"></path>
              <path className="save-fold" d="M19 4v6h6"></path>
              <g className="save-arrow"><path d="M16 11v11m-4-4 4 4 4-4"></path></g>
              <path className="save-check" d="m11 18 3 3 7-8"></path>
            </svg>
          </span>
        </button>
        <p id="brief-status" className="micro" role="status">Conectar directamente vía WhatsApp o guardar copia.</p>
        <div
          className="brief-direct"
          style={{
            marginTop: '1.25rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem'
          }}
        >
          <span className="micro" style={{ opacity: 0.7 }}>Canal directo inmediato:</span>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--study-accent, #38bdf8)',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.75rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>WhatsApp ({CONTACT.phone})</span> ↗
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              style={{
                color: 'inherit',
                opacity: 0.85,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.75rem',
                textDecoration: 'none'
              }}
            >
              {CONTACT.email} ↗
            </a>
          </div>
        </div>
      </form>
    </dialog>
  );
}
