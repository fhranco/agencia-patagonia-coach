import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Cpu, 
  Palette, 
  Zap, 
  Search, 
  CheckCircle2, 
  XCircle,
  TrendingUp,
  Play,
  Camera,
  LayoutTemplate,
  GraduationCap,
  Gamepad2
} from 'lucide-react';

const ServiceCard = ({ title, subtitle, solutions, icon: Icon, index, activeIndex, onHover, onClick }) => {
  const isHovered = activeIndex === index;
  const isDimmed = activeIndex !== null && !isHovered;

  return (
    <motion.div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className={`relative group min-h-[540px] rounded-[2.5rem] p-12 flex flex-col gap-10 transition-all duration-700 border overflow-hidden cursor-pointer w-[85vw] md:w-auto shrink-0 snap-center ${
        isHovered 
          ? 'bg-white/[0.05] border-white/20 scale-[1.01] z-20 shadow-[0_40px_100px_rgba(0,0,0,0.5)]' 
          : 'bg-white/[0.01] border-white/5 z-10'
      } ${isDimmed ? 'opacity-30 blur-[2px] scale-[0.98]' : 'opacity-100'}`}
      onClick={onClick}
    >
      {/* Subtle Frost Layer */}
      <div className="absolute inset-0 backdrop-blur-3xl pointer-events-none" />
      
      {/* Minimalist Header */}
      <div className="flex justify-between items-start relative z-10">
        <div className="space-y-2">
          <span className="text-[9px] font-black tracking-[0.5em] text-white/50 uppercase italic">Codex 0{index + 1}</span>
          <div className={`h-[1px] bg-white/20 transition-all duration-700 ${isHovered ? 'w-16' : 'w-8'}`} />
        </div>
        <div className={`p-3 rounded-xl border transition-all duration-500 ${isHovered ? 'bg-white/10 border-white/20' : 'bg-transparent border-transparent'}`}>
          <Icon className={`w-6 h-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-white/10'}`} />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8 relative z-10 flex-grow">
        <div className="space-y-4">
          <h3 className={`text-3xl md:text-4xl font-heading font-light tracking-tight leading-[1.1] transition-colors duration-500 ${isHovered ? 'text-white italic' : 'text-white/60'}`}>
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm font-light text-white/40 leading-relaxed max-w-[95%]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Minimalist Solutions */}
        <div className="pt-10 border-t border-white/10">
          <ul className="space-y-5">
            {solutions.map((sol, i) => (
              <li 
                key={i}
                className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500 flex items-center gap-4 ${isHovered ? 'text-white/80 translate-x-2' : 'text-white/50'}`}
              >
                <div className={`w-1 h-px transition-all duration-500 ${isHovered ? 'bg-white w-4' : 'bg-white/20 w-2'}`} />
                {sol}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Final Detail */}
      <div className="relative z-10 pt-6 flex justify-between items-center group-hover:translate-x-2 transition-transform duration-700">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-white/10" />
          <span className="text-[9px] font-black tracking-[0.6em] text-white/40 uppercase group-hover:text-patagonia-gold transition-colors">Activar Diagnóstico</span>
        </div>
        <Play className="w-4 h-4 text-white/0 group-hover:text-patagonia-gold transition-all" />
      </div>
    </motion.div>
  );
};

const ServiceMatrix = () => {
  const [activeServiceHover, setActiveServiceHover] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (e) => {
    const container = e.target;
    // w-[85vw] is 85% of viewport width
    const cardWidth = container.clientWidth * 0.85;
    const gap = 24; // gap-6 is 24px
    const active = Math.round(container.scrollLeft / (cardWidth + gap));
    setScrollIndex(active);
  };

  const services = [
    {
      title: "Desarrollo Web Profesional",
      href: "/servicios/desarrollo-web",
      subtitle: "Sistemas web de alto rendimiento enfocados en resultados de negocio.",
      solutions: [
        "Arquitectura React & Next.js de Alto Rendimiento",
        "E-commerce Avanzado (Shopify Headless / WooCommerce)",
        "Backends Robustos en Python (Django) y Node.js",
        "Diseño Corporativo en WordPress Premium y Webflow",
        "Sistemas PWA y Landing Pages de Conversión Extrema"
      ],
      icon: LayoutTemplate,
      painPoint: "¿Cuánto pierde en ventas por una web lenta que no retiene a los leads B2B?",
      roi: "Arquitectura instantánea. Aumentamos la retención de usuarios un 40%."
    },
    {
      title: "SEO Local Magallanes",
      href: "/servicios/seo-local-magallanes",
      subtitle: "Posicionamiento estratégico en Google para captar clientes locales en Magallanes.",
      solutions: [
        "Optimización de Core Web Vitals y Reducción de Latencia",
        "Estrategia de Keywords Geofencing (Región de Magallanes)",
        "Dominio Absoluto de Google Business Profile (Map Pack)",
        "Estructuración JSON-LD y Schema Markup Avanzado",
        "Linkbuilding de Autoridad Regional B2B"
      ],
      icon: Search,
      painPoint: "Si los turistas o empresas buscan su servicio en Magallanes y aparece su competencia, está sangrando capital.",
      roi: "Dominio del Local Pack. Tráfico calificado de alta intención de compra."
    },
    {
      title: "Automatización con IA",
      href: "/servicios/automatizacion-con-ia",
      subtitle: "Implementación de IA para automatizar ventas, atención y procesos operativos.",
      solutions: [
        "Agentes Cognitivos basados en GPT-4o y Claude 3.5",
        "Automatización de Flujos No-Code (Make / n8n / Zapier)",
        "Bots de WhatsApp con Lenguaje Natural y Retención",
        "Análisis Predictivo de Datos Corporativos en Python",
        "Integración de APIs de IA en CRMs (HubSpot, Salesforce)"
      ],
      icon: Cpu,
      painPoint: "Su equipo gasta el 60% de su tiempo respondiendo lo mismo y cotizando manualmente.",
      roi: "Reducción de latencia a 0. Agentes cognitivos cerrando ventas 24/7."
    },
    {
      title: "Gestión de Redes Sociales",
      href: "/servicios/comunicacion-digital",
      subtitle: "Estrategias de contenido y comunidad orientadas al crecimiento y autoridad de marca.",
      solutions: [
        "Diseño de Planes de Contenido Estratégico",
        "Producción Visual (Reels y Carruseles)",
        "Gestión, Programación y Publicación en Redes",
        "Capacitación de Herramientas para Equipos",
        "Construcción de Comunidad Orgánica"
      ],
      icon: TrendingUp,
      painPoint: "Las redes sociales de su negocio están inactivas o sin estrategia, perdiendo autoridad frente a competidores que sí comunican.",
      roi: "Prestigio de marca, posicionamiento local sólido y fidelización de clientes sin depender de pauta publicitaria."
    },
    {
      title: "IA Generativa Visual",
      href: "/servicios/ia-generativa-visual",
      subtitle: "Generación de activos visuales inteligentes para catálogos y presencia corporativa de alto impacto.",
      solutions: [
        "Activos Fotorrealistas con Midjourney y Stable Diffusion",
        "Upscaling y Retoque Digital con Redes Neuronales",
        "Optimización Masiva de Catálogos E-commerce",
        "Avatares de Video Sintético y Clonación de Voz",
        "Dirección de Arte Paramétrica para Identidad Corporativa"
      ],
      icon: Palette,
      painPoint: "Producciones fotográficas tradicionales son lentas y de alto costo para escalar su e-commerce.",
      roi: "Generación de catálogos fotorrealistas en volumen con cero costos logísticos."
    },
    {
      title: "Tours Virtuales 360º",
      href: "/servicios/tours-virtuales-360",
      subtitle: "Experiencias de realidad virtual 360º para empresas que buscan destacar su ubicación.",
      solutions: [
        "Captura Fotogramétrica Espacial en Resolución 8K",
        "Modelado 3D Interactivo e Interfaces WebGL (Three.js)",
        "Integración Nativa Directa a Google Street View",
        "Interfaces Inmersivas Optimizadas para VR y Móvil",
        "Video 360º Corporativo e Industrial"
      ],
      icon: Camera,
      painPoint: "El cliente internacional no confía en infraestructura que no puede verificar visualmente.",
      roi: "Aumento de un 300% en confianza transaccional al brindar inmersión total."
    },
    {
      title: "Academia Digital",
      href: "/academia",
      subtitle: "Formación técnica y estratégica para equipos que buscan liderar con tecnología actual.",
      solutions: [
        "Capacitación Corporativa en Prompt Engineering Avanzado",
        "Talleres Prácticos de Adopción de Herramientas IA",
        "Programas de Transformación Cultural Tecnológica B2B",
        "Mentoría Directiva en Modelos de Lenguaje (LLMs)",
        "Sprints de Innovación y Metodologías Ágiles"
      ],
      icon: GraduationCap,
      painPoint: "La brecha digital de sus ejecutivos es el cuello de botella de la productividad de su empresa.",
      roi: "Equipos capacitados en Prompt Engineering y herramientas no-code."
    },
    {
      title: "Aplicaciones Web Pro",
      href: "/servicios/aplicaciones-web-pro",
      subtitle: "Desarrollo de herramientas interactivas, sistemas de gestión y experiencias gamificadas.",
      solutions: [
        "Sistemas Progressive Web Apps (PWA) Offline-First",
        "Desarrollo de Software a Medida (SaaS) y Dashboards",
        "Interfaces Táctiles Reactivas para Tótems Físicos",
        "Bases de Datos Escalables NoSQL (MongoDB / Firebase)",
        "Plataformas de Gamificación y Motores de Lealtad"
      ],
      icon: Gamepad2,
      painPoint: "Sistemas genéricos que no se adaptan a la logística y operatividad única de la Patagonia.",
      roi: "Software propietario que capitaliza sus datos y blinda su operación."
    },
    {
      title: "Consultoría & Estrategia",
      href: "/servicios/consultoria-transformacion-digital",
      subtitle: "Acompañamiento ejecutivo para definir el futuro digital y comercial de su organización.",
      solutions: [
        "Auditoría Profunda de Infraestructura Tecnológica",
        "Plan Maestro de Transformación Digital a 5 Años",
        "Estrategia de Crecimiento y Posicionamiento B2B",
        "Arquitectura de Sistemas y CTO-as-a-Service",
        "Evaluación y Análisis Predictivo de Retorno de Inversión"
      ],
      icon: Zap,
      painPoint: "Invertir en tecnología sin un plan maestro genera parches operativos desconectados.",
      roi: "Un ecosistema digital orquestado que multiplica la valoración corporativa."
    }
  ];

  return (
    <section id="servicios" className="w-full relative bg-patagonia-black min-h-screen overflow-hidden py-32 md:py-48 border-y border-white/5">
      {/* Refined Static Background Accents - FULL WIDTH */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full" />
        <div className="absolute inset-0 backdrop-blur-[60px] bg-patagonia-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-32 space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-white/60 font-heading tracking-[0.8em] text-[10px] uppercase font-semibold">Matriz de Servicios Elite</span>
          </div>
          <h2 className="text-6xl md:text-[6.5rem] font-heading font-light max-w-5xl leading-[0.9] text-balance tracking-tighter text-white/90">
            Ecosistemas de <span className="italic">valor</span> ininterrumpido.
          </h2>
        </div>

        <div 
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-6 pb-8 md:pb-0 scrollbar-none" 
          style={{ perspective: 2000 }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              index={index}
              activeIndex={activeServiceHover}
              onHover={setActiveServiceHover}
              onClick={() => setSelectedService(service)}
              {...service} 
            />
          ))}
        </div>

        {/* Carousel Indicators for Mobile */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {services.map((_, index) => (
            <div 
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === scrollIndex ? 'w-6 bg-patagonia-gold' : 'w-2 bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Conversion Popup Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop Blur */}
            <div 
              className="absolute inset-0 bg-patagonia-black/80 backdrop-blur-md cursor-pointer" 
              onClick={() => setSelectedService(null)} 
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-patagonia-black border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl z-10"
            >
              {/* Gold glow accent behind the content */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-patagonia-gold/5 blur-[100px] rounded-full pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)} 
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              >
                 <XCircle className="w-6 h-6 text-white/50" />
              </button>
              
              <div className="space-y-8 relative z-10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black block mb-4">Auditoría Táctica</span>
                  <h3 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-white">{selectedService.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {/* The Pain Point (Fricción) */}
                  <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 border-l-4 border-l-red-500/30">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2 font-bold">Fuga de Capital (Problema)</span>
                    <p className="text-white/80 font-light text-sm md:text-base">{selectedService.painPoint}</p>
                  </div>
                  
                  {/* The Asset & ROI */}
                  <div className="p-6 bg-patagonia-gold/[0.02] rounded-2xl border border-patagonia-gold/10 border-l-4 border-l-patagonia-gold">
                    <span className="text-[10px] uppercase tracking-widest text-patagonia-gold block mb-2 font-bold">Activo Implementado & ROI</span>
                    <p className="text-white font-normal mb-4 text-sm md:text-base">{selectedService.roi}</p>
                    <ul className="space-y-3 pt-4 border-t border-white/5">
                      {selectedService.solutions.slice(0,3).map((sol, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-light text-white/60">
                          <CheckCircle2 className="w-4 h-4 text-patagonia-gold/50" />
                          {sol}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Conversion CTA */}
                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/56995684198?text=Hola,%20me%20interesa%20agendar%20una%20auditoría%20de%20viabilidad%20para%20el%20servicio%20de%20${encodeURIComponent(selectedService.title)}.`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary flex-1 text-center justify-center py-4"
                  >
                    Agendar Auditoría Viabilidad
                  </a>
                  <a 
                    href={selectedService.href} 
                    className="px-6 py-4 rounded-full border border-white/10 text-white/70 hover:bg-white/5 transition-all text-center flex-1 text-sm tracking-wider uppercase font-bold"
                  >
                    Ver Masterplan
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceMatrix;
