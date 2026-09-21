import { useRef, useEffect } from 'react';
import './Manifesto.css';

/**
 * Manifesto — Acto 02: Positioning / Manifesto
 * 
 * Cambio radical de ritmo tras la intensidad del Scrollytelling.
 * - Fondo: Basalto Austral (#05070A)
 * - Composición monumental en Split-Line Masks
 * - Text Reveal A (Clip vertical) y Text Reveal B (Scale + Tracking)
 * - Métricas técnicas de soberanía digital en Magallanes
 */
export default function Manifesto() {
  const sectionRef = useRef(null);

  return (
    <section 
      ref={sectionRef} 
      className="manifesto" 
      aria-label="Manifiesto de Soberanía Tecnológica PatagoniaCoach"
    >
      {/* Ambient Horizon Light Line (Originating from Frame 240 energy threads) */}
      <div className="manifesto__horizon-glow" aria-hidden="true" />
      <div className="manifesto__horizon-line" aria-hidden="true" />

      <div className="manifesto__container">
        {/* Technical Marker */}
        <div className="manifesto__marker-wrap">
          <span className="manifesto__marker">
            <span className="manifesto__marker-dot" />
            ACTO 02 // POSICIONAMIENTO
          </span>
          <span className="manifesto__marker-coord">53°S SOBERANÍA TÉCNICA</span>
        </div>

        {/* Monumental Headline: Split-Line Reveal */}
        <div className="manifesto__headline-block">
          <div className="manifesto__line-mask">
            <h2 className="manifesto__line manifesto__line--1">
              NO CONSTRUIMOS
            </h2>
          </div>
          <div className="manifesto__line-mask">
            <h2 className="manifesto__line manifesto__line--2">
              SOLO SITIOS.
            </h2>
          </div>
          <div className="manifesto__line-mask">
            <h2 className="manifesto__line manifesto__line--3 manifesto__highlight">
              CONSTRUIMOS
            </h2>
          </div>
          <div className="manifesto__line-mask">
            <h2 className="manifesto__line manifesto__line--4 manifesto__highlight">
              SISTEMAS DIGITALES.
            </h2>
          </div>
        </div>

        {/* Supporting Editorial Statement */}
        <div className="manifesto__editorial-grid">
          <div className="manifesto__editorial-lead">
            <p className="manifesto__paragraph">
              En un territorio donde la geografía aísla y la conectividad exige excelencia, 
              la infraestructura digital no es un folleto decorativo: es la arteria de los 
              negocios que dominan su mercado.
            </p>
            <p className="manifesto__paragraph manifesto__paragraph--muted">
              Diseñamos arquitecturas web de ultra-alta velocidad, soberanía técnica sin 
              dependencias de plantillas y posicionamiento avanzado para motores de 
              inteligencia artificial desde el confín austral hacia el mundo.
            </p>
          </div>

          {/* 3 High-Impact Technical Metrics */}
          <div className="manifesto__metrics-stack">
            <div className="manifesto__metric-card">
              <div className="manifesto__metric-num">
                &lt; 1.2<span className="manifesto__metric-unit">s</span>
              </div>
              <div className="manifesto__metric-label">LCP Promedio en Redes Móviles Australes</div>
            </div>

            <div className="manifesto__metric-card">
              <div className="manifesto__metric-num">
                +400<span className="manifesto__metric-unit">%</span>
              </div>
              <div className="manifesto__metric-label">Dominio en Búsquedas de Intención y Motores GEO</div>
            </div>

            <div className="manifesto__metric-card">
              <div className="manifesto__metric-num">
                100<span className="manifesto__metric-unit">%</span>
              </div>
              <div className="manifesto__metric-label">Soberanía de Código y Arquitectura React/Vite</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
