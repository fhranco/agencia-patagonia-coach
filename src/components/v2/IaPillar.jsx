import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Cpu, 
  Sparkles, 
  Workflow, 
  Database, 
  Bot, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Radio, 
  Share2, 
  Activity, 
  Server,
  Zap
} from 'lucide-react';
import './IaPillar.css';

gsap.registerPlugin(ScrollTrigger);

const IaPillar = () => {
  const rootRef = useRef(null);
  const logicGridRef = useRef(null);
  const monumentalRef = useRef(null);
  const contentColRef = useRef(null);
  const arenaStageRef = useRef(null);
  const editorialFooterRef = useRef(null);

  // Stage 1: Input Bridge
  const inputPacketRef = useRef(null);
  const inputLabelRef = useRef(null);

  // Stage 2: Interpretation Matrix
  const interpretMatrixRef = useRef(null);
  const token1Ref = useRef(null);
  const token2Ref = useRef(null);
  const token3Ref = useRef(null);
  const token4Ref = useRef(null);

  // Stage 3: Decision Core
  const decisionCoreRef = useRef(null);
  const decisionBadgeRef = useRef(null);
  const route1Ref = useRef(null);
  const route2Ref = useRef(null);
  const route3Ref = useRef(null);

  // Stage 4: Orchestration Stations & SVG Conduits
  const orchestrationStageRef = useRef(null);
  const conduitsSvgRef = useRef(null);
  const busPath1Ref = useRef(null);
  const busPath2Ref = useRef(null);
  const busPath3Ref = useRef(null);
  const busPath4Ref = useRef(null);
  const station1Ref = useRef(null);
  const station2Ref = useRef(null);
  const station3Ref = useRef(null);
  const station4Ref = useRef(null);

  // Stage 5 & 6: Action & Result Object
  const actionsStageRef = useRef(null);
  const resultCapsuleRef = useRef(null);
  const methodologyPulseRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =====================================================================
      // DESKTOP CHOREOGRAPHY (>= 1024px)
      // Narrative: INPUT -> INTERPRETACIÓN -> DECISIÓN -> ORQUESTACIÓN -> ACCIÓN -> RESULTADO
      // =====================================================================
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=220%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1
          }
        });

        // -------------------------------------------------------------------
        // 0.00 - 0.70: ETAPA 01 — CONTINUIDAD SEO -> INPUT ENTRA
        // INTENCIÓN ESTRUCTURADA entra al sistema y se transforma en INPUT
        // -------------------------------------------------------------------
        tl.fromTo(inputPacketRef.current,
          { opacity: 0, x: -60, scale: 0.85 },
          { opacity: 1, x: 0, scale: 1, duration: 0.7, ease: "power2.out" },
          0.0
        )
        .to(inputLabelRef.current, {
          backgroundColor: "rgba(56, 189, 248, 0.18)",
          borderColor: "rgba(56, 189, 248, 0.85)",
          color: "#38BDF8",
          duration: 0.4
        }, 0.3)
        .fromTo(monumentalRef.current,
          { opacity: 0.03, letterSpacing: "-0.05em", scaleX: 0.94 },
          { opacity: 0.08, letterSpacing: "0.02em", scaleX: 1.0, duration: 0.8, ease: "power1.out" },
          0.0
        );

        // -------------------------------------------------------------------
        // 0.70 - 1.50: ETAPA 02 — INTERPRETACIÓN (Descomposición Estructurada)
        // El INPUT se descompone en tokens de comprensión
        // -------------------------------------------------------------------
        tl.to(inputPacketRef.current, {
          scale: 0.8,
          opacity: 0.4,
          x: 20,
          duration: 0.6,
          ease: "power2.inOut"
        }, 0.7)
        .fromTo(interpretMatrixRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          0.8
        )
        .fromTo([token1Ref.current, token2Ref.current, token3Ref.current, token4Ref.current],
          { opacity: 0, scale: 0.75, y: 15 },
          { opacity: 1, scale: 1, y: 0, stagger: 0.12, duration: 0.5, ease: "back.out(1.6)" },
          0.9
        );

        // -------------------------------------------------------------------
        // 1.50 - 2.40: ETAPA 03 — DECISIÓN & ENRUTAMIENTO CONTROLADO
        // Reglas + Contexto seleccionan la ruta de Orquestación Paralela
        // -------------------------------------------------------------------
        tl.to(interpretMatrixRef.current, {
          opacity: 0.35,
          scale: 0.85,
          y: -10,
          duration: 0.5,
          ease: "power2.inOut"
        }, 1.5)
        .fromTo(decisionCoreRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
          1.6
        )
        .fromTo([route1Ref.current, route2Ref.current, route3Ref.current],
          { opacity: 0, x: -15 },
          { opacity: 0.4, x: 0, stagger: 0.1, duration: 0.4, ease: "power1.out" },
          1.8
        )
        // Route 2 (Orquestación Paralela) se selecciona y activa con alta luminosidad
        .to(route2Ref.current, {
          opacity: 1,
          borderColor: "rgba(56, 189, 248, 0.95)",
          backgroundColor: "rgba(56, 189, 248, 0.18)",
          boxShadow: "0 0 30px rgba(56, 189, 248, 0.4)",
          duration: 0.4,
          ease: "power2.out"
        }, 2.0)
        .fromTo(decisionBadgeRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(2)" },
          2.1
        );

        // -------------------------------------------------------------------
        // 2.40 - 3.80: ETAPA 04 — MOMENTO WOW: ORQUESTACIÓN PARALELA
        // La señal principal se divide y activa 4 estaciones coordinadas
        // -------------------------------------------------------------------
        tl.to([decisionCoreRef.current, inputPacketRef.current, interpretMatrixRef.current], {
          opacity: 0,
          scale: 0.7,
          duration: 0.5,
          ease: "power2.in"
        }, 2.4)
        .fromTo(orchestrationStageRef.current,
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
          2.5
        )
        // Draw bus conduits
        .fromTo([busPath1Ref.current, busPath2Ref.current, busPath3Ref.current, busPath4Ref.current],
          { strokeDashoffset: 600, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: "power2.inOut" },
          2.6
        )
        // 4 Parallel Stations activate simultaneously
        .fromTo([station1Ref.current, station2Ref.current, station3Ref.current, station4Ref.current],
          { opacity: 0, scale: 0.8, y: 20 },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            stagger: 0.1, 
            duration: 0.6, 
            ease: "back.out(1.7)" 
          },
          2.8
        )
        // Monumental typography expands reflecting capability expansion
        .to(monumentalRef.current, {
          letterSpacing: "0.14em",
          scaleX: 1.08,
          opacity: 0.14,
          duration: 1.0,
          ease: "power2.out"
        }, 2.8)
        // Logic grid intensifies
        .to(logicGridRef.current, {
          opacity: 0.22,
          duration: 0.8
        }, 2.8);

        // -------------------------------------------------------------------
        // 3.80 - 4.80: ETAPA 05 & 06 — ACCIÓN & CONVERGENCIA A RESULTADO
        // Las ramas convergen nuevamente en PROCESO ORQUESTADO
        // -------------------------------------------------------------------
        tl.fromTo(actionsStageRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          3.6
        )
        // Stations collapse and converge to center result
        .to([station1Ref.current, station2Ref.current, station3Ref.current, station4Ref.current], {
          scale: 0.35,
          opacity: 0,
          x: 0,
          y: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: "power2.in"
        }, 4.0)
        .to([busPath1Ref.current, busPath2Ref.current, busPath3Ref.current, busPath4Ref.current, actionsStageRef.current], {
          opacity: 0,
          duration: 0.4
        }, 4.1)
        // RESULT CAPSULE EMERGES (Glorified outcome)
        .fromTo(resultCapsuleRef.current,
          { opacity: 0, scale: 0.75, y: 25 },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "back.out(1.8)" 
          },
          4.2
        )
        // Amber resolution accent on completed actions
        .to(resultCapsuleRef.current.querySelector('.ia-result-badge'), {
          backgroundColor: "rgba(245, 158, 11, 0.2)",
          borderColor: "rgba(245, 158, 11, 0.9)",
          color: "#F59E0B",
          duration: 0.5
        }, 4.4)
        // Process line bridges towards methodology
        .fromTo(methodologyPulseRef.current,
          { scaleY: 0, opacity: 0 },
          { scaleY: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
          4.5
        );

        // Subtle Mouse Reactive Parallax
        const root = rootRef.current;
        const handleMouseMove = (e) => {
          const rect = root.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(monumentalRef.current, {
            x: x * 12,
            y: y * 8,
            duration: 1.2,
            ease: "power1.out",
            overwrite: "auto"
          });

          gsap.to(arenaStageRef.current, {
            x: x * 18,
            y: y * 12,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto"
          });
        };

        root.addEventListener('mousemove', handleMouseMove);
        return () => root.removeEventListener('mousemove', handleMouseMove);
      });

      // =====================================================================
      // MOBILE CHOREOGRAPHY (< 1024px) — FLUJO VERTICAL DE ORQUESTACIÓN
      // Narrative: INPUT -> INTERPRETAR -> DECIDIR -> EJECUTAR -> RESULTADO
      // =====================================================================
      mm.add("(max-width: 1023px)", () => {
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: arenaStageRef.current,
            start: "top 12%",
            end: "+=170%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1
          }
        });

        mobileTl
          // 01: Input Emergence
          .fromTo(inputPacketRef.current,
            { opacity: 0, y: -20, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
            0.0
          )
          .to(inputLabelRef.current, {
            color: "#38BDF8",
            borderColor: "rgba(56, 189, 248, 0.8)",
            duration: 0.3
          }, 0.2)

          // 02: Decompose to Interpretation Tokens
          .to(inputPacketRef.current, {
            opacity: 0.3,
            scale: 0.8,
            duration: 0.4
          }, 0.5)
          .fromTo(interpretMatrixRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4 },
            0.6
          )
          .fromTo([token1Ref.current, token2Ref.current],
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, stagger: 0.1, duration: 0.4 },
            0.7
          )

          // 03: Decision Point
          .to(interpretMatrixRef.current, {
            opacity: 0,
            duration: 0.3
          }, 1.1)
          .fromTo(decisionCoreRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
            1.2
          )
          .to(route2Ref.current, {
            borderColor: "rgba(56, 189, 248, 0.9)",
            backgroundColor: "rgba(56, 189, 248, 0.16)",
            duration: 0.3
          }, 1.4)

          // 04: Parallel Orchestration (2 streamlined operations on mobile)
          .to(decisionCoreRef.current, {
            opacity: 0,
            scale: 0.7,
            duration: 0.4
          }, 1.7)
          .fromTo(orchestrationStageRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.5 },
            1.8
          )
          .fromTo([station1Ref.current, station3Ref.current],
            { opacity: 0, y: 15, scale: 0.85 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.5, ease: "back.out(1.5)" },
            1.9
          )
          .fromTo([busPath1Ref.current, busPath3Ref.current],
            { strokeDashoffset: 400, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1, duration: 0.5 },
            2.0
          )

          // 05: Convergence to Unified Result
          .to([station1Ref.current, station3Ref.current, orchestrationStageRef.current], {
            scale: 0.3,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in"
          }, 2.5)
          .fromTo(resultCapsuleRef.current,
            { opacity: 0, scale: 0.4, y: 15 },
            { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.8)" },
            2.7
          )

          // 06: Dedicated Isolation (55-65vh)
          .to(resultCapsuleRef.current, {
            boxShadow: "0 0 60px rgba(56, 189, 248, 0.45), 0 30px 80px rgba(0, 0, 0, 0.98)",
            borderColor: "rgba(56, 189, 248, 0.9)",
            duration: 1.0,
            ease: "none"
          }, 3.4);
      });

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={rootRef} 
      id="pilar-ia" 
      className="ia-pillar-root" 
      aria-label="Pilar 03: Inteligencia Artificial y Orquestación de Procesos"
    >
      {/* =====================================================================
          1. LAYER: BACK — Retícula Lógica, Señales de Red y "POTENCIAR" Monumental
          ===================================================================== */}
      <div className="ia-bg-network" aria-hidden="true">
        <div ref={logicGridRef} className="ia-logic-grid" />
        <div className="ia-aurora-glow" />
        
        {/* Logic Circuit Matrix SVG */}
        <svg className="ia-circuit-svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path d="M 100,100 L 400,100 L 600,300 L 1000,300 L 1200,500 L 1400,500" strokeWidth="1" strokeDasharray="8 6" />
          <path d="M 200,800 L 500,800 L 700,600 L 1100,600 L 1300,400" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="600" cy="300" r="4" fill="#38BDF8" opacity="0.6" />
          <circle cx="1000" cy="300" r="4" fill="#38BDF8" opacity="0.6" />
          <circle cx="700" cy="600" r="4" fill="#38BDF8" opacity="0.6" />
        </svg>

        <div className="ia-coords-bar">
          <span className="ia-coord-badge">
            <Radio className="w-3.5 h-3.5 text-patagonia-cyan animate-pulse" />
            <span>SISTEMA // MOTOR DE ORQUESTACIÓN IA</span>
          </span>
          <span className="ia-coord-badge">
            <span>MAGALLANES • NODO SUR</span>
          </span>
        </div>
      </div>

      <div ref={monumentalRef} className="ia-monumental-text" aria-hidden="true">
        POTENCIAR
      </div>

      <div className="ia-spatial-viewport">
        {/* =====================================================================
            2. LAYER: FRONT — Contenido Editorial Semántico y Enlaces IA
            ===================================================================== */}
        <article ref={contentColRef} className="ia-content-col">
          {/* 01: Headline & Statement (Always First) */}
          <div className="ia-intro-block">
            <div className="ia-eyebrow-wrap">
              <span className="ia-step-num">03</span>
              <span className="ia-eyebrow">INTELIGENCIA ARTIFICIAL</span>
            </div>

            <h2 className="ia-title">
              POTENCIAMOS
            </h2>

            <p className="ia-statement">
              Integramos inteligencia artificial y automatización en procesos reales para interpretar información, ejecutar tareas y ampliar la capacidad operativa de una organización.
            </p>
          </div>

          {/* 03: Editorial Footer & Capabilities / CTA (Clean closing after kinetic stage) */}
          <div ref={editorialFooterRef} className="ia-editorial-footer">
            <p className="ia-desc">
              Más allá de interfaces conversacionales, la verdadera ventaja competitiva radica en orquestar 
              agentes inteligentes y flujos automatizados que conectan bases de datos, sistemas comerciales 
              y canales de atención sin fricción operativa.
            </p>

            {/* Orchestration Capabilities Card */}
            <div className="ia-capabilities-card">
              <div className="ia-card-header">
                <Workflow className="w-4 h-4 text-patagonia-cyan" />
                <span>CAPACIDADES DE ORQUESTACIÓN & IA</span>
              </div>
              <ul className="ia-capabilities-list">
                <li className="ia-cap-item">
                  <CheckCircle2 className="w-3.5 h-3.5 text-patagonia-cyan shrink-0" />
                  <span>Automatización de Flujos & Conexión API (Make / n8n)</span>
                </li>
                <li className="ia-cap-item">
                  <CheckCircle2 className="w-3.5 h-3.5 text-patagonia-cyan shrink-0" />
                  <span>Agentes Autónomos & Asistentes de Decisión</span>
                </li>
                <li className="ia-cap-item">
                  <CheckCircle2 className="w-3.5 h-3.5 text-patagonia-cyan shrink-0" />
                  <span>Generación & Procesamiento Visual Multimodal</span>
                </li>
              </ul>
            </div>

            {/* Internal SEO Service Links */}
            <div className="ia-territory-nav" aria-label="Servicios de Automatización e IA">
              <div className="ia-links-grid">
                <Link to="/servicios/automatizacion-con-ia" className="ia-nav-link">
                  <Bot className="w-3.5 h-3.5 text-patagonia-cyan shrink-0" />
                  <span>Automatización con IA</span>
                </Link>
                <Link to="/servicios/automatizacion-ia-empresas" className="ia-nav-link">
                  <Cpu className="w-3.5 h-3.5 text-patagonia-cyan shrink-0" />
                  <span>IA para Empresas</span>
                </Link>
                <Link to="/servicios/ia-generativa-visual" className="ia-nav-link">
                  <Sparkles className="w-3.5 h-3.5 text-patagonia-cyan shrink-0" />
                  <span>IA Generativa Visual</span>
                </Link>
                <Link to="/servicios/marketing-digital-punta-arenas" className="ia-nav-link">
                  <Activity className="w-3.5 h-3.5 text-patagonia-cyan shrink-0" />
                  <span>Marketing & Automatización</span>
                </Link>
              </div>
            </div>

            {/* Kinetic Primary CTA */}
            <div className="ia-cta-container">
              <div className="ia-cta-conduit" aria-hidden="true">
                <span className="ia-conduit-dot" />
                <span className="ia-conduit-line" />
              </div>
              <Link 
                to="/servicios/automatizacion-con-ia" 
                className="ia-kinetic-cta"
                id="cta-ia-kinetic"
              >
                <span className="ia-cta-label">Explorar Automatización con IA</span>
                <span className="ia-cta-icon-box">
                  <ArrowUpRight className="w-4 h-4 ia-cta-icon" />
                </span>
              </Link>
              <span className="ia-cta-spec">CONSULTORÍA & ARQUITECTURA // PATAGONIA</span>
            </div>
          </div>
        </article>

        {/* =====================================================================
            3. LAYER: MID — Escenario Cinético de Orquestación (Procesos en Flujo)
            ===================================================================== */}
        <div className="ia-arena-wrapper">
          <div ref={arenaStageRef} className="ia-arena-stage">
            
            {/* ---------------------------------------------------------------
                STAGE 01: CONTINUIDAD SEO -> INPUT BRIDGING
                --------------------------------------------------------------- */}
            <div ref={inputPacketRef} className="ia-input-packet" id="ia-input-signal">
              <div className="ia-packet-top">
                <div ref={inputLabelRef} className="ia-packet-badge">
                  <Sparkles className="w-3 h-3" />
                  <span>INPUT // INTENCIÓN RECIBIDA</span>
                </div>
                <span className="ia-packet-id">SIG://53S-892</span>
              </div>
              <div className="ia-packet-data">
                <div className="ia-data-row">
                  <span className="ia-key">CONSULTA:</span>
                  <span className="ia-val">"desarrollo web punta arenas"</span>
                </div>
                <div className="ia-data-row">
                  <span className="ia-key">CONTEXTO:</span>
                  <span className="ia-val">Magallanes • Alta Relevancia</span>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------
                STAGE 02: INTERPRETACIÓN (Descomposición en Tokens Estructurados)
                --------------------------------------------------------------- */}
            <div ref={interpretMatrixRef} className="ia-interpret-matrix">
              <div className="ia-matrix-header">
                <Activity className="w-3.5 h-3.5 text-patagonia-cyan animate-pulse" />
                <span>INTERPRETACIÓN SEMÁNTICA // DESCOMPOSICIÓN</span>
              </div>
              <div className="ia-tokens-grid">
                <div ref={token1Ref} className="ia-token token-intent">
                  <span className="ia-token-tag">INTENCIÓN</span>
                  <span className="ia-token-val">Plataforma & Crecimiento</span>
                </div>
                <div ref={token2Ref} className="ia-token token-entity">
                  <span className="ia-token-tag">ENTIDAD</span>
                  <span className="ia-token-val">PatagoniaCoach (Magallanes)</span>
                </div>
                <div ref={token3Ref} className="ia-token token-priority">
                  <span className="ia-token-tag">OPERACIÓN</span>
                  <span className="ia-token-val">Requerimiento Estructurado</span>
                </div>
                <div ref={token4Ref} className="ia-token token-context">
                  <span className="ia-token-tag">TERRITORIO</span>
                  <span className="ia-token-val">Punta Arenas • 53°S</span>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------
                STAGE 03: DECISIÓN & MOTOR DE ENRUTAMIENTO CONTROLADO
                --------------------------------------------------------------- */}
            <div ref={decisionCoreRef} className="ia-decision-core">
              <div className="ia-decision-header">
                <Zap className="w-4 h-4 text-patagonia-cyan" />
                <span>REGLAS + CONTEXTO // SELECCIÓN DE RUTA</span>
              </div>
              <div className="ia-routes-stack">
                <div ref={route1Ref} className="ia-route-item route-inactive">
                  <span className="route-indicator" />
                  <span className="route-name">Ruta A // Respuesta Estática</span>
                  <span className="route-status">INACTIVA</span>
                </div>
                <div ref={route2Ref} className="ia-route-item route-active">
                  <span className="route-indicator active" />
                  <span className="route-name">Ruta B // Orquestación Paralela</span>
                  <span className="route-status active">EJECUTAR</span>
                </div>
                <div ref={route3Ref} className="ia-route-item route-inactive">
                  <span className="route-indicator" />
                  <span className="route-name">Ruta C // Escalamiento Manual</span>
                  <span className="route-status">STANDBY</span>
                </div>
              </div>
              <div ref={decisionBadgeRef} className="ia-decision-tag">
                <CheckCircle2 className="w-3 h-3 text-patagonia-cyan" />
                <span>DECISIÓN ESTABLECIDA // ORQUESTACIÓN ACTIVADA</span>
              </div>
            </div>

            {/* ---------------------------------------------------------------
                STAGE 04: MOMENTO WOW: ORQUESTACIÓN PARALELA (4 Estaciones)
                --------------------------------------------------------------- */}
            <div ref={orchestrationStageRef} className="ia-orchestration-stage">
              
              {/* Dynamic SVG Bus Conduits */}
              <svg ref={conduitsSvgRef} className="ia-bus-svg" viewBox="0 0 800 480" fill="none">
                <path 
                  ref={busPath1Ref} 
                  d="M 400 240 C 300 240 220 140 140 100" 
                  stroke="rgba(56, 189, 248, 0.75)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
                <path 
                  ref={busPath2Ref} 
                  d="M 400 240 C 500 240 580 140 660 100" 
                  stroke="rgba(56, 189, 248, 0.75)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
                <path 
                  ref={busPath3Ref} 
                  d="M 400 240 C 300 240 220 340 140 380" 
                  stroke="rgba(56, 189, 248, 0.75)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
                <path 
                  ref={busPath4Ref} 
                  d="M 400 240 C 500 240 580 340 660 380" 
                  stroke="rgba(56, 189, 248, 0.75)" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
                <circle cx="400" cy="240" r="5" fill="#38BDF8" />
              </svg>

              {/* Station 01: Consultar Datos */}
              <div ref={station1Ref} className="ia-station station-1">
                <div className="station-icon-wrap">
                  <Database className="w-4 h-4 text-patagonia-cyan" />
                </div>
                <div className="station-info">
                  <span className="station-title">Consultar Datos</span>
                  <span className="station-spec">Base Contextual • CRM</span>
                </div>
                <span className="station-status-pill">EJECUTADO</span>
              </div>

              {/* Station 02: Generar Respuesta */}
              <div ref={station2Ref} className="ia-station station-2">
                <div className="station-icon-wrap">
                  <Bot className="w-4 h-4 text-patagonia-cyan" />
                </div>
                <div className="station-info">
                  <span className="station-title">Generar Respuesta</span>
                  <span className="station-spec">Razonamiento LLM</span>
                </div>
                <span className="station-status-pill">SINTETIZADO</span>
              </div>

              {/* Station 03: Actualizar Sistema */}
              <div ref={station3Ref} className="ia-station station-3">
                <div className="station-icon-wrap">
                  <Server className="w-4 h-4 text-patagonia-cyan" />
                </div>
                <div className="station-info">
                  <span className="station-title">Actualizar Sistema</span>
                  <span className="station-spec">Sincronización Make / n8n</span>
                </div>
                <span className="station-status-pill">SINCRONIZADO</span>
              </div>

              {/* Station 04: Notificar Equipo */}
              <div ref={station4Ref} className="ia-station station-4">
                <div className="station-icon-wrap">
                  <Share2 className="w-4 h-4 text-patagonia-cyan" />
                </div>
                <div className="station-info">
                  <span className="station-title">Notificar Equipo</span>
                  <span className="station-spec">Despacho de Canales</span>
                </div>
                <span className="station-status-pill">NOTIFICADO</span>
              </div>

            </div>

            {/* ---------------------------------------------------------------
                STAGE 05: ACCIÓN (Sistemas Conectados)
                --------------------------------------------------------------- */}
            <div ref={actionsStageRef} className="ia-actions-bar">
              <span className="action-tag">CRM / ERP</span>
              <span className="action-tag">BASE DE DATOS</span>
              <span className="action-tag">MENSAJERÍA</span>
              <span className="action-tag">API EXTERNA</span>
            </div>

            {/* ---------------------------------------------------------------
                STAGE 06: RESULTADO (Proceso Orquestado // Acción Completada)
                --------------------------------------------------------------- */}
            <div ref={resultCapsuleRef} className="ia-result-capsule" id="ia-final-result">
              <div className="ia-result-header">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="ia-result-title">PROCESO ORQUESTADO</span>
                </div>
                <span className="ia-result-badge">ACCIÓN COMPLETADA</span>
              </div>
              <div className="ia-result-body">
                <div className="ia-result-row">
                  <span className="ia-res-label">OPERACIONES:</span>
                  <span className="ia-res-val">4 Ramas Paralelas Sincronizadas</span>
                </div>
                <div className="ia-result-row">
                  <span className="ia-res-label">ESTADO:</span>
                  <span className="ia-res-val text-emerald-400 font-mono font-medium">Flujo Integrado</span>
                </div>
                <div className="ia-result-row">
                  <span className="ia-res-label">CAPACIDAD:</span>
                  <span className="ia-res-val">Procesos Coordinados</span>
                </div>
              </div>

              {/* Transition Pulse Conduit towards Metodología */}
              <div ref={methodologyPulseRef} className="ia-methodology-conduit" aria-hidden="true">
                <div className="ia-conduit-glow" />
                <span className="ia-conduit-tag">HACIA METODOLOGÍA</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default IaPillar;
