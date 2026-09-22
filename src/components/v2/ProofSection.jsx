import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FileText, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Compass, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import './ProofSection.css';

gsap.registerPlugin(ScrollTrigger);

const PROOF_RECORDS = [
  {
    id: "agm-rent-a-car",
    client: "AGM RENT A CAR",
    code: "EXP-01 // RENT A CAR",
    location: "Punta Arenas • 53°S",
    context: "Arriendo de Vehículos & Logística",
    scope: "Desarrollo Web / Cotizador Digital / Arquitectura",
    description: "Diseño y desarrollo de plataforma web corporativa con cotizador digital de flota integrado para optimizar la reserva y visibilidad de vehículos en Magallanes.",
    deliverables: [
      "Plataforma Web Corporativa",
      "Cotizador Digital de Flota",
      "Arquitectura de Información",
      "Frontend de Alta Velocidad"
    ],
    serviceLink: "/servicios/desarrollo-web",
    serviceLabel: "Ver Soluciones de Desarrollo"
  },
  {
    id: "ruta-9",
    client: "RUTA 9",
    code: "EXP-02 // GASTRONOMÍA",
    location: "Punta Arenas • 53°S",
    context: "Gastronomía & Cultura Regional",
    scope: "Estrategia Digital / Campañas / Posicionamiento Local",
    description: "Dirección digital, campañas de comunicación y posicionamiento de marca local para conectar la experiencia gastronómica con la comunidad y el visitante austral.",
    deliverables: [
      "Estrategia de Comunicación",
      "Campañas de Contenido Audiovisual",
      "Posicionamiento Local",
      "Ruta 9 Club (En Desarrollo)"
    ],
    serviceLink: "/servicios/comunicacion-digital",
    serviceLabel: "Ver Estrategia de Comunicación"
  },
  {
    id: "optica-harris",
    client: "ÓPTICA HARRIS",
    code: "EXP-03 // SALUD VISUAL",
    location: "Punta Arenas • 53°S",
    context: "Salud Visual & Tecnología Óptica",
    scope: "Estrategia Digital / Difusión Tecnológica / SEO Local",
    description: "Estrategia editorial y posicionamiento digital para la difusión de tecnologías ópticas avanzadas y productos de precisión comunicados por la marca.",
    deliverables: [
      "Estrategia de Contenido Técnico",
      "Comunicación de Tecnologías Ópticas",
      "Presencia & SEO Local",
      "Dirección Editorial"
    ],
    serviceLink: "/servicios/seo-local-magallanes",
    serviceLabel: "Ver Posicionamiento Local"
  },
  {
    id: "remag",
    client: "REMAG",
    code: "EXP-04 // ECONOMÍA CIRCULAR",
    location: "Región de Magallanes",
    context: "Gestión de Residuos & Sostenibilidad",
    scope: "Estrategia Territorial / Contenido Educativo / Campañas",
    description: "Estrategia de comunicación territorial y contenido educativo para la visibilización de puntos limpios, cultura ambiental y campañas de valorización de residuos.",
    deliverables: [
      "Estrategia de Comunicación Territorial",
      "Visibilidad de Puntos Limpios",
      "Contenido Educativo Ambiental",
      "Campañas de Reciclaje"
    ],
    serviceLink: "/servicios/comunicacion-digital",
    serviceLabel: "Ver Comunicación Territorial"
  }
];

const ProofSection = () => {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const recordsContainerRef = useRef(null);
  const recordRefs = useRef([]);
  const monumentalRef = useRef(null);
  const synthesisRef = useRef(null);
  const diagnosticBridgeRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  recordRefs.current = [];
  const addToRecordRefs = (el) => {
    if (el && !recordRefs.current.includes(el)) {
      recordRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =====================================================================
      // DESKTOP CHOREOGRAPHY (>= 1024px)
      // Archival track progression with focus cycling across the 4 records
      // =====================================================================
      mm.add("(min-width: 1024px)", () => {
        const total = PROOF_RECORDS.length;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=180%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1
          }
        });

        // Background subtle motion
        tl.fromTo(monumentalRef.current,
          { opacity: 0.02, x: 40 },
          { opacity: 0.06, x: -40, duration: 4.0, ease: "none" },
          0.0
        );

        // Sequential focus on records
        recordRefs.current.forEach((rec, idx) => {
          const stepTime = (idx / (total - 1)) * 2.8;

          tl.fromTo(rec,
            { opacity: 0.35, scale: 0.95, y: 15 },
            { 
              opacity: 1, 
              scale: 1.02, 
              y: 0, 
              duration: 0.6, 
              ease: "power2.out",
              onStart: () => setActiveIdx(idx)
            },
            stepTime
          );

          if (idx < total - 1) {
            tl.to(rec, {
              opacity: 0.45,
              scale: 0.96,
              duration: 0.5,
              ease: "power1.out"
            }, stepTime + 0.7);
          }
        });

        // MOMENTO MEMORABLE: All 4 records settle into synthesis
        tl.to(recordRefs.current, {
          opacity: 1,
          scale: 1.0,
          stagger: 0.06,
          duration: 0.6,
          ease: "power2.out"
        }, 3.0)
        .fromTo(synthesisRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          3.2
        )
        .fromTo(diagnosticBridgeRef.current,
          { opacity: 0, scaleY: 0 },
          { opacity: 1, scaleY: 1, duration: 0.5, ease: "power2.out" },
          3.5
        );
      });

      // =====================================================================
      // MOBILE CHOREOGRAPHY (< 1024px)
      // Natural vertical archival list with responsive scroll triggers
      // =====================================================================
      mm.add("(max-width: 1023px)", () => {
        recordRefs.current.forEach((rec) => {
          gsap.fromTo(rec,
            { opacity: 0.4, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: rec,
                start: "top 82%",
                end: "bottom 60%",
                toggleActions: "play reverse play reverse"
              }
            }
          );
        });
      });

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={rootRef} 
      id="evidencia" 
      className="proof-root" 
      aria-label="Evidencia y Registro de Proyectos Realizados"
    >
      {/* Continuity Conduit Entry from Patagonia */}
      <div className="proof-horizon-entry" aria-hidden="true">
        <div className="proof-entry-beam" />
      </div>

      {/* Layer: Back (Monumental Typography & Archival Grid) */}
      <div className="proof-bg" aria-hidden="true">
        <div className="proof-grid" />
        <div ref={monumentalRef} className="proof-monumental-text">
          EVIDENCIA
        </div>
      </div>

      <div className="proof-spatial-viewport">
        
        {/* Editorial Header */}
        <header className="proof-header">
          <div className="proof-eyebrow-wrap">
            <span className="proof-step-num">05</span>
            <span className="proof-eyebrow">REGISTRO DE TRABAJO REAL</span>
          </div>

          <h2 className="proof-title">
            TRABAJO QUE SE PUEDE VER
          </h2>

          <p className="proof-statement">
            La prueba de un método no reside en promesas o métricas infladas, sino en la especificidad y rigor de las soluciones implementadas en el territorio.
          </p>
        </header>

        {/* Archival Records Layout */}
        <div ref={trackRef} className="proof-records-wrapper">
          <div ref={recordsContainerRef} className="proof-records-grid">
            {PROOF_RECORDS.map((rec, idx) => (
              <article 
                key={rec.id}
                ref={addToRecordRefs}
                className={`proof-record-card ${activeIdx === idx ? 'record-active' : ''}`}
                id={`record-${rec.id}`}
              >
                {/* Record Header Topline */}
                <div className="record-header">
                  <div className="record-meta-left">
                    <span className="record-code">{rec.code}</span>
                    <span className="record-location">
                      <MapPin className="w-3 h-3 text-patagonia-gold" />
                      {rec.location}
                    </span>
                  </div>
                  <span className="record-context-tag">{rec.context}</span>
                </div>

                {/* Client Name & Scope */}
                <div className="record-body">
                  <h3 className="record-client-name">{rec.client}</h3>
                  <span className="record-scope">{rec.scope}</span>
                  <p className="record-desc">{rec.description}</p>
                </div>

                {/* Deliverables Slot */}
                <div className="record-deliverables">
                  <span className="deliverables-label">ENTREGABLES VERIFICADOS:</span>
                  <div className="deliverables-tags">
                    {rec.deliverables.map((item, dIdx) => (
                      <span key={dIdx} className="deliverable-tag">
                        <CheckCircle2 className="w-3 h-3 text-patagonia-cyan shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Service Route Link */}
                <div className="record-footer">
                  <Link 
                    to={rec.serviceLink} 
                    className="record-service-link"
                    aria-label={`Ver información de servicio para ${rec.client}`}
                  >
                    <span>{rec.serviceLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Synthesis & Diagnostic Bridge */}
        <footer className="proof-footer">
          <div ref={synthesisRef} className="proof-synthesis-block">
            <span className="synthesis-badge">DISCIPLINA OPERATIVA</span>
            <p className="synthesis-statement">
              Distintos desafíos. Una misma disciplina: <strong>entender, diseñar y ejecutar</strong>.
            </p>
          </div>

          <div className="proof-diagnostic-cta-wrap">
            <span className="diagnostic-question">¿Y TU PROYECTO?</span>
            <a 
              href="#diagnostico" 
              className="proof-diagnostic-btn"
              id="cta-proof-to-diagnostic"
            >
              <span>Diagnosticar Mi Proyecto</span>
              <span className="proof-cta-icon-box">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <span className="proof-cta-spec">EVALUACIÓN DE MADUREZ DIGITAL // PATAGONIA</span>
          </div>

          {/* Progress Conduit to Diagnostic Section */}
          <div ref={diagnosticBridgeRef} className="proof-diagnostic-conduit" aria-hidden="true">
            <div className="diagnostic-conduit-beam" />
            <span className="diagnostic-conduit-tag">HACIA DIAGNÓSTICO DIGITAL</span>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default ProofSection;
