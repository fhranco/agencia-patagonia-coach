import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Compass, 
  MapPin, 
  ArrowUpRight, 
  Globe, 
  Radio, 
  Anchor, 
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import './TerritorySection.css';

gsap.registerPlugin(ScrollTrigger);

const TERRITORY_NODES = [
  {
    id: "punta-arenas",
    name: "PUNTA ARENAS",
    coords: "53°09′S 70°55′W",
    role: "Servicios Corporativos & Operación Regional",
    path: "/zonas/punta-arenas"
  },
  {
    id: "puerto-natales",
    name: "PUERTO NATALES",
    coords: "51°43′S 72°30′W",
    role: "Turismo Receptivo & Logística de Fiordos",
    path: "/zonas/puerto-natales"
  },
  {
    id: "tierra-del-fuego",
    name: "TIERRA DEL FUEGO",
    coords: "53°17′S 70°22′W",
    role: "Operaciones Remotas, Energía & Industria",
    path: "/zonas/tierra-del-fuego"
  },
  {
    id: "magallanes",
    name: "REGIÓN DE MAGALLANES",
    coords: "53°S ESTRECHO",
    role: "Ecosistema Austral & Cobertura Regional",
    path: "/zonas/magallanes"
  }
];

const TerritorySection = () => {
  const rootRef = useRef(null);
  const heroImageRef = useRef(null);
  const monumentalRef = useRef(null);
  const contentWrapRef = useRef(null);
  const nodesRef = useRef([]);
  const horizonBeamRef = useRef(null);
  const proofBridgeRef = useRef(null);

  nodesRef.current = [];
  const addToNodes = (el) => {
    if (el && !nodesRef.current.includes(el)) {
      nodesRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =====================================================================
      // DESKTOP CHOREOGRAPHY (>= 1024px)
      // Slow, majestic cinematic opening with monumental 53°S and breathing space
      // =====================================================================
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=90%",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1
          }
        });

        // 01: Horizon line expands into full photographic canvas
        tl.fromTo(horizonBeamRef.current,
          { width: "0%" },
          { width: "100%", duration: 0.8, ease: "power2.out" },
          0.0
        )
        // Slow cinematic camera push on photography
        .fromTo(heroImageRef.current,
          { scale: 1.12, y: "4%" },
          { scale: 1.0, y: "0%", duration: 4.0, ease: "none" },
          0.0
        )
        // Monumental 53°S emerges with colossal scale
        .fromTo(monumentalRef.current,
          { opacity: 0.02, scale: 0.9, letterSpacing: "-0.06em" },
          { opacity: 0.12, scale: 1.04, letterSpacing: "0.02em", duration: 2.5, ease: "power1.out" },
          0.2
        )
        // Editorial content fades in with generous space
        .fromTo(contentWrapRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
          0.5
        )
        // Territorial nodes illuminate sequentially
        .fromTo(nodesRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power2.out" },
          1.2
        )
        // Bridge towards Proof section
        .fromTo(proofBridgeRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          2.6
        );
      });

      // =====================================================================
      // MOBILE CHOREOGRAPHY (< 1024px)
      // Natural vertical scroll with photographic immersion
      // =====================================================================
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(contentWrapRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentWrapRef.current,
              start: "top 80%"
            }
          }
        );

        nodesRef.current.forEach((node) => {
          gsap.fromTo(node,
            { opacity: 0.4, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: node,
                start: "top 85%"
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
      id="patagonia" 
      className="territory-root" 
      aria-label="Identidad Territorial: Perspectiva 53°S Magallanes"
    >
      {/* Horizon Conduit from Methodology */}
      <div className="territory-horizon-entry" aria-hidden="true">
        <div ref={horizonBeamRef} className="territory-horizon-beam" />
      </div>

      {/* Layer 1: Full-bleed Cinematography Background */}
      <div className="territory-bg-cinema" aria-hidden="true">
        <img 
          ref={heroImageRef}
          src="/patagonia_luxury_hero.webp" 
          alt="Paisaje austral y territorio de Magallanes a 53°S" 
          className="territory-hero-image"
          loading="lazy"
        />
        <div className="territory-vignette-overlay" />
        <div className="territory-fog-gradient" />
      </div>

      {/* Layer 2: Monumental 53°S Coordinate */}
      <div ref={monumentalRef} className="territory-monumental-text" aria-hidden="true">
        53°S
      </div>

      {/* Layer 3: Spatial Editorial Content */}
      <div className="territory-spatial-viewport">
        
        {/* Top Fold: Statement & Austral Perspective */}
        <div ref={contentWrapRef} className="territory-editorial-lead">
          <div className="territory-eyebrow-wrap">
            <span className="territory-coord-pin">
              <Compass className="w-3.5 h-3.5 text-patagonia-gold" />
              <span>53°09′S • MAGALLANES</span>
            </span>
            <span className="territory-eyebrow-tag">PERSPECTIVA & TERRITORIO</span>
          </div>

          <h2 className="territory-title">
            PENSAMOS DESDE EL EXTREMO
          </h2>

          <p className="territory-statement">
            Trabajar desde la Patagonia exige diseñar tecnología capaz de responder a la distancia, conectividad variable, escala territorial y operaciones reales.
          </p>

          <div className="territory-principles-row">
            <div className="territory-principle-item">
              <span className="principle-label">01 // RESILIENCIA</span>
              <p className="principle-desc">Arquitecturas preparadas para operar de forma continua bajo conectividad variable.</p>
            </div>
            <div className="territory-principle-item">
              <span className="principle-label">02 // ESCALA REAL</span>
              <p className="principle-desc">Ingeniería concebida para vincular empresas locales con audiencias regionales y nacionales.</p>
            </div>
            <div className="territory-principle-item">
              <span className="principle-label">03 // GOBERNANZA</span>
              <p className="principle-desc">Infraestructura propia que garantiza control sobre los datos y las plataformas digitales.</p>
            </div>
          </div>
        </div>

        {/* Bottom Fold: Territorial Anchor Nodes */}
        <div className="territory-nodes-wrapper">
          <div className="territory-nodes-header">
            <Radio className="w-3.5 h-3.5 text-patagonia-gold animate-pulse" />
            <span>RED TERRITORIAL // COBERTURA AUSTRAL</span>
          </div>

          <div className="territory-nodes-grid">
            {TERRITORY_NODES.map((node) => (
              <Link 
                key={node.id} 
                to={node.path}
                ref={addToNodes}
                className="territory-node-card"
              >
                <div className="node-card-top">
                  <span className="node-coords">{node.coords}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 node-arrow" />
                </div>
                <h3 className="node-title">{node.name}</h3>
                <p className="node-role">{node.role}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Bridge towards Proof Section */}
        <div ref={proofBridgeRef} className="territory-proof-bridge" aria-hidden="true">
          <div className="proof-conduit-line" />
          <span className="proof-bridge-spec">EVIDENCIA REGIONAL // PROYECTOS & EMPRESAS</span>
        </div>

      </div>
    </section>
  );
};

export default TerritorySection;
