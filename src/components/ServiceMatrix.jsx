import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  BarChart3, 
  Cpu, 
  Palette, 
  Zap, 
  Lock, 
  Search, 
  CheckCircle2, 
  XCircle,
  TrendingUp,
  Fingerprint,
  Play,
  Globe,
  Share2,
  Camera,
  LayoutTemplate,
  Briefcase,
  GraduationCap,
  Gamepad2
} from 'lucide-react';
const ServiceCard = ({ title, subtitle, solutions, icon: Icon, index, activeIndex, onHover, href }) => {
  const isHovered = activeIndex === index;
  const isDimmed = activeIndex !== null && !isHovered;

  return (
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className={`relative group min-h-[540px] rounded-[2.5rem] p-12 flex flex-col gap-10 transition-all duration-700 border overflow-hidden cursor-pointer ${
        isHovered 
          ? 'bg-white/[0.05] border-white/20 scale-[1.01] z-20 shadow-[0_40px_100px_rgba(0,0,0,0.5)]' 
          : 'bg-white/[0.01] border-white/5 z-10'
      } ${isDimmed ? 'opacity-30 blur-[2px] scale-[0.98]' : 'opacity-100'}`}
      onClick={() => window.location.href = href}
    >
      {/* Subtle Frost Layer */}
      <div className="absolute inset-0 backdrop-blur-3xl pointer-events-none" />
      
      {/* Minimalist Header */}
      <div className="flex justify-between items-start relative z-10">
        <div className="space-y-2">
          <span className="text-[9px] font-black tracking-[0.5em] text-white/20 uppercase italic">Codex 0{index + 1}</span>
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
                className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500 flex items-center gap-4 ${isHovered ? 'text-white/80 translate-x-2' : 'text-white/20'}`}
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
          <span className="text-[9px] font-black tracking-[0.6em] text-white/40 uppercase group-hover:text-patagonia-gold transition-colors">Maestría Patagonia</span>
        </div>
        <Play className="w-4 h-4 text-white/0 group-hover:text-patagonia-gold transition-all" />
      </div>
    </motion.div>
  );
};

const ServiceMatrix = () => {
  const [leadCount, setLeadCount] = useState(1240);
  const [activeServiceHover, setActiveServiceHover] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeadCount(prev => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Desarrollo Web Profesional",
      href: "/servicios/desarrollo-web",
      subtitle: "Sistemas web de alto rendimiento enfocados en resultados de negocio.",
      solutions: [
        "Diseño Web Corporativo",
        "E-commerce & Ventas Online",
        "Landing Pages de Conversión",
        "Mantenimiento Proactivo",
        "Optimización de Rendimiento"
      ],
      icon: LayoutTemplate
    },
    {
      title: "SEO Local Magallanes",
      href: "/servicios/seo-local-punta-arenas",
      subtitle: "Posicionamiento estratégico en Google para captar clientes locales en Magallanes.",
      solutions: [
        "Posicionamiento en Google Maps",
        "Auditoría SEO Técnica",
        "Contenido Estratégico Local",
        "Gestión de Perfil de Negocio",
        "Análisis de Competencia"
      ],
      icon: Search
    },
    {
      title: "Automatización con IA",
      href: "/servicios/automatizacion-con-ia",
      subtitle: "Implementación de IA para automatizar ventas, atención y procesos operativos.",
      solutions: [
        "Chatbots de Atención 24/7",
        "Automatización de Tareas",
        "Análisis Predictivo de Datos",
        "Integración de APIs de IA",
        "Flujos de Trabajo Inteligentes"
      ],
      icon: Cpu
    },
    {
      title: "Gestión de Redes Sociales",
      href: "/servicios/comunicacion-digital",
      subtitle: "Estrategias de contenido y comunidad orientadas al crecimiento y autoridad de marca.",
      solutions: [
        "Plan de Contenidos Mensual",
        "Publicidad (Ads) en Meta/TikTok",
        "Community Management Pro",
        "Diseño Gráfico Publicitario",
        "Reportes de Rendimiento"
      ],
      icon: TrendingUp
    },
    {
      title: "IA Generativa Visual",
      href: "/servicios/ia-generativa-visual",
      subtitle: "Generación de activos visuales inteligentes para campañas publicitarias de alto impacto.",
      solutions: [
        "Generación de Fotos con IA",
        "Optimización de Catálogos",
        "Retoque Digital Avanzado",
        "Identidad Visual con IA",
        "Conceptualización Creativa"
      ],
      icon: Palette
    },
    {
      title: "Tours Virtuales 360º",
      href: "/servicios/tours-virtuales-360",
      subtitle: "Experiencias de realidad virtual 360º para empresas que buscan destacar su ubicación.",
      solutions: [
        "Recorridos 360º de Alta Calidad",
        "Integración con Google Maps",
        "Fotografía Profesional de Espacios",
        "Tours Interactivos para Web",
        "Video 360º Corporativo"
      ],
      icon: Camera
    },
    {
      title: "Academia Digital",
      href: "/academia",
      subtitle: "Formación técnica y estratégica para equipos que buscan liderar con tecnología actual.",
      solutions: [
        "Workshops de IA Aplicada",
        "Tutoría en Transformación Digital",
        "Capacitación en Herramientas Pro",
        "Sprints de Innovación",
        "Consultoría en Adopción Tecnológica"
      ],
      icon: GraduationCap
    },
    {
      title: "Aplicaciones Web Pro",
      href: "/servicios/aplicaciones-web-pro",
      subtitle: "Desarrollo de herramientas interactivas, sistemas de gestión y experiencias gamificadas.",
      solutions: [
        "Apps para Tótems y Eventos",
        "Sistemas de Turnos Digitales",
        "Cartas Digitales para Negocios",
        "Plataformas de Gamificación",
        "Desarrollo de PWA a Medida"
      ],
      icon: Gamepad2
    },
    {
      title: "Consultoría & Estrategia",
      href: "/servicios/consultoria-transformacion-digital",
      subtitle: "Acompañamiento ejecutivo para definir el futuro digital y comercial de su organización.",
      solutions: [
        "Plan Maestro Digital",
        "Estrategia de Crecimiento B2B",
        "Auditoría de Ecosistema Digital",
        "Acompañamiento Ejecutivo",
        "Análisis de Retorno de Inversión"
      ],
      icon: Zap
    }
  ];

  return (
    <section className="w-full relative bg-patagonia-black min-h-screen overflow-hidden py-32 md:py-48 border-y border-white/5">
      {/* Refined Static Background Accents - FULL WIDTH */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Monochromatic Accents */}
        <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full" />
        
        {/* Subtle Frosted Overlay */}
        <div className="absolute inset-0 backdrop-blur-[60px] bg-patagonia-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-32 space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-white/20 font-heading tracking-[0.8em] text-[10px] uppercase font-semibold">Matriz de Servicios Elite</span>
          </div>
          <h2 className="text-6xl md:text-[6.5rem] font-heading font-light max-w-5xl leading-[0.9] text-balance tracking-tighter text-white/90">
            Ecosistemas de <span className="italic">valor</span> ininterrumpido.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 2000 }}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              index={index}
              activeIndex={activeServiceHover}
              onHover={setActiveServiceHover}
              {...service} 
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default ServiceMatrix;
