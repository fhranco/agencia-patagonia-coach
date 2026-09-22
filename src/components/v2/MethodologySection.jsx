import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Search, 
  Compass, 
  Code2, 
  Globe, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import './MethodologySection.css';

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    num: "01",
    id: "diagnosticar",
    name: "DIAGNOSTICAR",
    tagline: "Inmersión & Auditoría de Ecosistema",
    desc: "Medimos la entropía digital y detectamos cuellos de botella operativos en la empresa.",
    capability: "Auditoría de Procesos • Mapeo de Datos",
    icon: Search
  },
  {
    num: "02",
    id: "disenar",
    name: "DISEÑAR",
    tagline: "Blueprint & Arquitectura Modular",
    desc: "Estructuramos sistemas desacoplados (API-First) y hojas de ruta para un crecimiento controlado.",
    capability: "Diseño de Stack • Estrategia de Crecimiento",
    icon: Compass
  },
  {
    num: "03",
    id: "construir",
    name: "CONSTRUIR",
    tagline: "Ingeniería de Software de Precisión",
    desc: "Desarrollamos plataformas digitales de alto rendimiento con código modular, mantenible y eficiente.",
    capability: "Desarrollo Web Moderno • Core Web Vitals",
    icon: Code2
  },
  {
    num: "04",
    id: "posicionar",
    name: "POSICIONAR",
    tagline: "Autoridad Territorial & Búsqueda Generativa",
    desc: "Estructuramos datos y cobertura semántica para conectar con la intención real de clientes.",
    capability: "SEO Local Magallanes • Optimización GEO",
    icon: Globe
  },
  {
    num: "05",
    id: "escalar",
    name: "ESCALAR",
    tagline: "Automatización & IA Continua",
    desc: "Integramos flujos inteligentes y acompañamiento técnico para expandir la capacidad operativa.",
    capability: "Orquestación IA • Dirección Técnica",
    icon: TrendingUp
  }
];

const MethodologySection = () => {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const pathSvgRef = useRef(null);
  const pathLineRef = useRef(null);
  const milestoneRefs = useRef([]);
  const monumentalRef = useRef(null);
  const horizonPulseRef = useRef(null);

  milestoneRefs.current = [];
  const addToMilestones = (el) => {
    if (el && !milestoneRefs.current.includes(el)) {
      milestoneRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =====================================================================
      // DESKTOP CHOREOGRAPHY (>= 1024px)
      // Horizontal progressive journey along a single continuous timeline
      // =====================================================================
      mm.add("(min-width: 1024px)", () => {
        const totalMilestones = STAGES.length;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1
          }
        });

        // 01: Initial continuous path draw & Entry from IA Line
        tl.fromTo(pathLineRef.current,
          { strokeDashoffset: 1400 },
          { strokeDashoffset: 0, duration: 4.0, ease: "none" },
          0.0
        )
        // Background typography subtle motion
        .fromTo(monumentalRef.current,
          { x: 50, opacity: 0.03 },
          { x: -50, opacity: 0.07, duration: 4.0, ease: "none" },
          0.0
        );

        // 02: Sequential milestone activation (1 dominant at each point)
        milestoneRefs.current.forEach((milestone, idx) => {
          const stepTime = (idx / (totalMilestones - 1)) * 3.2;

          tl.fromTo(milestone,
            { opacity: 0.25, scale: 0.88, y: 25 },
            { 
              opacity: 1, 
              scale: 1.05, 
              y: 0, 
              duration: 0.6, 
              ease: "back.out(1.6)" 
            },
            stepTime
          );

          // Add active glow class or styling
          if (idx < totalMilestones - 1) {
            tl.to(milestone, {
              opacity: 0.45,
              scale: 0.95,
              duration: 0.5,
              ease: "power1.out"
            }, stepTime + 0.7);
          }
        });

        // 03: MOMENTO WOW — Continual Path Convergence (All 5 stages illuminate together)
        tl.to(milestoneRefs.current, {
          opacity: 1,
          scale: 1.0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out"
        }, 3.4)
        .to(pathLineRef.current, {
          stroke: "#38BDF8",
          strokeWidth: 3,
          duration: 0.5
        }, 3.4)
        // 04: Horizon line extends downward preparing Patagonia
        .fromTo(horizonPulseRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.7, ease: "power2.out" },
          3.7
        );
      });

      // =====================================================================
      // MOBILE CHOREOGRAPHY (< 1024px)
      // Vertical progression with natural viewport triggering
      // =====================================================================
      mm.add("(max-width: 1023px)", () => {
        milestoneRefs.current.forEach((milestone) => {
          gsap.fromTo(milestone,
            { opacity: 0.3, y: 20, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: milestone,
                start: "top 80%",
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
      id="metodologia" 
      className="methodology-root" 
      aria-label="Metodología de Trabajo: De la Estrategia a la Ejecución"
    >
      {/* Continuity Conduit Entry from IA */}
      <div className="methodology-entry-conduit" aria-hidden="true">
        <div className="entry-pulse-line" />
      </div>

      {/* Layer: Back (Monumental Typography & Ambient Grid) */}
      <div className="methodology-bg" aria-hidden="true">
        <div className="methodology-grid" />
        <div ref={monumentalRef} className="methodology-monumental-text">
          MÉTODO
        </div>
      </div>

      <div className="methodology-viewport">
        {/* Editorial Header */}
        <header className="methodology-header">
          <div className="methodology-eyebrow-wrap">
            <span className="methodology-step-num">04</span>
            <span className="methodology-eyebrow">METODOLOGÍA & PROCESO</span>
          </div>

          <h2 className="methodology-title">
            DE LA ESTRATEGIA A LA EJECUCIÓN
          </h2>

          <p className="methodology-statement">
            No entregamos piezas aisladas. Diseñamos, implementamos y evolucionamos ecosistemas digitales a través de una ruta de trabajo rigurosa, continua y medible.
          </p>
        </header>

        {/* The Continuous Journey Pathway (Desktop & Mobile) */}
        <div ref={trackRef} className="methodology-track-wrapper">
          
          {/* Desktop SVG Pathway Conduit */}
          <svg ref={pathSvgRef} className="methodology-desktop-svg" viewBox="0 0 1200 240" fill="none">
            <path 
              ref={pathLineRef}
              d="M 50 120 C 250 120, 350 70, 550 70 C 750 70, 850 170, 1150 120" 
              stroke="rgba(248, 250, 252, 0.4)" 
              strokeWidth="2" 
              strokeDasharray="8 6"
            />
          </svg>

          {/* Vertical spine for Mobile */}
          <div className="methodology-mobile-spine" aria-hidden="true" />

          {/* Milestones Container */}
          <div className="methodology-milestones-grid">
            {STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <article 
                  key={stage.id} 
                  ref={addToMilestones}
                  className={`methodology-milestone milestone-${idx + 1}`}
                >
                  <div className="milestone-indicator">
                    <span className="milestone-num">{stage.num}</span>
                    <div className="milestone-icon-box">
                      <Icon className="w-4 h-4 text-patagonia-cyan" />
                    </div>
                  </div>

                  <div className="milestone-content">
                    <span className="milestone-tagline">{stage.tagline}</span>
                    <h3 className="milestone-name">{stage.name}</h3>
                    <p className="milestone-desc">{stage.desc}</p>
                    <span className="milestone-cap">
                      <CheckCircle2 className="w-3 h-3 text-patagonia-gold shrink-0" />
                      <span>{stage.capability}</span>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing Conversion Block & Horizon Bridge */}
        <footer className="methodology-footer">
          <div className="methodology-cta-wrap">
            <Link 
              to="/servicios/consultoria-transformacion-digital" 
              className="methodology-cta-btn"
              id="cta-metodologia-diagnostico"
            >
              <span>Conversar Sobre Tu Proyecto</span>
              <span className="methodology-cta-icon-box">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <span className="methodology-cta-spec">INICIAR AUDITORÍA // EVALUACIÓN INICIAL</span>
          </div>

          {/* Horizon Line to Patagonia Section */}
          <div ref={horizonPulseRef} className="methodology-horizon-conduit" aria-hidden="true">
            <div className="horizon-beam" />
            <span className="horizon-tag">LATITUD 53°S // TERRITORIO AUSTRAL</span>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default MethodologySection;
