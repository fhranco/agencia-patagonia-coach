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

const ServiceCard = ({ title, subtitle, solutions, icon: Icon, index, activeIndex, onHover }) => {
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
      className={`relative group min-h-[540px] rounded-[2.5rem] p-12 flex flex-col gap-10 transition-all duration-700 border overflow-hidden ${
        isHovered 
          ? 'bg-white/[0.05] border-white/20 scale-[1.01] z-20 shadow-[0_40px_100px_rgba(0,0,0,0.5)]' 
          : 'bg-white/[0.01] border-white/5 z-10'
      } ${isDimmed ? 'opacity-30 blur-[2px] scale-[0.98]' : 'opacity-100'}`}
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
      <div className="relative z-10 pt-6 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-white/10" />
          <span className="text-[9px] font-black tracking-[0.6em] text-white/40 uppercase">Maestría Patagonia</span>
        </div>
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
      subtitle: "Sistemas web de alto rendimiento enfocados en resultados de negocio.",
      solutions: [
        "Diseño Web Corporativo",
        "E-commerce & Ventas Online",
        "Landing Pages de Conversión",
        "Mantenimiento Proactivo",
        "Optimización de Rendimiento"
      ],
      icon: LayoutTemplate,
      microUI: (hover) => (
        <div className="relative w-24 h-24 flex items-center justify-center">
          <motion.div
            animate={{ rotate: hover ? 360 : 0 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-patagonia-cyan/30 rounded-full"
          />
          <div className="relative z-10 flex gap-2">
            <div className="w-2 h-2 bg-patagonia-cyan rounded-full animate-ping" />
            <div className="w-2 h-2 bg-patagonia-white rounded-full animate-bounce" />
          </div>
        </div>
      )
    },
    {
      title: "SEO Local Magallanes",
      subtitle: "Posicionamiento estratégico en Google para captar clientes locales en Magallanes.",
      solutions: [
        "Posicionamiento en Google Maps",
        "Auditoría SEO Técnica",
        "Contenido Estratégico Local",
        "Gestión de Perfil de Negocio",
        "Análisis de Competencia"
      ],
      icon: Search,
      microUI: (hover) => (
        <div className="flex items-end gap-1 h-12">
          {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: hover ? `${h}%` : '20%' }}
              transition={{ delay: i * 0.05, type: 'spring' }}
              className="w-2 bg-patagonia-red rounded-t-sm shadow-[0_0_10px_#ff1721]"
            />
          ))}
        </div>
      )
    },
    {
      title: "Automatización con IA",
      subtitle: "Implementación de IA para automatizar ventas, atención y procesos operativos.",
      solutions: [
        "Chatbots de Atención 24/7",
        "Automatización de Tareas",
        "Análisis Predictivo de Datos",
        "Integración de APIs de IA",
        "Flujos de Trabajo Inteligentes"
      ],
      icon: Cpu,
      microUI: (hover) => (
        <div className="flex flex-col items-center gap-4 pointer-events-none">
          <div className="flex items-center gap-6">
            <XCircle className="w-5 h-5 text-white/10" />
            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${hover ? 'bg-patagonia-cyan' : 'bg-white/10'}`}>
              <motion.div animate={{ x: hover ? 24 : 0 }} className="w-4 h-4 bg-white rounded-full shadow-lg" />
            </div>
            <CheckCircle2 className={`w-5 h-5 transition-colors ${hover ? 'text-patagonia-cyan' : 'text-white/10'}`} />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
            {hover ? 'Status: Autonomous' : 'Status: Manual'}
          </span>
        </div>
      )
    },
    {
      title: "Gestión de Redes Sociales",
      subtitle: "Estrategias de contenido y comunidad orientadas al crecimiento y autoridad de marca.",
      solutions: [
        "Plan de Contenidos Mensual",
        "Publicidad (Ads) en Meta/TikTok",
        "Community Management Pro",
        "Diseño Gráfico Publicitario",
        "Reportes de Rendimiento"
      ],
      icon: TrendingUp,
      microUI: (hover) => (
        <div className="flex items-center gap-1">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: hover ? [10, Math.random() * 40 + 10, 10] : 10 }}
              transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: "easeInOut" }}
              className="w-1 bg-patagonia-gold rounded-full shadow-[0_0_8px_#FFD700]"
            />
          ))}
        </div>
      )
    },
    {
      title: "IA Generativa Visual",
      subtitle: "Generación de activos visuales inteligentes para campañas publicitarias de alto impacto.",
      solutions: [
        "Generación de Fotos con IA",
        "Optimización de Catálogos",
        "Retoque Digital Avanzado",
        "Identidad Visual con IA",
        "Conceptualización Creativa"
      ],
      icon: Palette,
      microUI: (hover) => (
        <div className="relative w-24 h-24">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                x: hover ? (i - 1) * 20 : 0,
                rotate: hover ? (i - 1) * 10 : 0,
                opacity: hover ? 1 - (i * 0.2) : 0.5 
              }}
              className="absolute inset-0 border border-patagonia-cyan/30 bg-patagonia-cyan/5 rounded-lg flex items-center justify-center"
            >
              <Palette className="w-6 h-6 text-patagonia-cyan/40" />
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: "Tours Virtuales 360º",
      subtitle: "Experiencias de realidad virtual 360º para empresas que buscan destacar su ubicación.",
      solutions: [
        "Recorridos 360º de Alta Calidad",
        "Integración con Google Maps",
        "Fotografía Profesional de Espacios",
        "Tours Interactivos para Web",
        "Video 360º Corporativo"
      ],
      icon: Camera,
      microUI: (hover) => (
        <div className="relative w-24 h-24 flex items-center justify-center">
          <motion.div
            animate={{ rotate: hover ? 360 : 0 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-patagonia-red/20 rounded-full"
          />
          <motion.div animate={{ scale: hover ? 1.2 : 1 }} className="flex gap-1 relative z-10">
            <div className="w-2 h-2 bg-patagonia-red rounded-full animate-pulse" />
            <div className="w-8 h-2 bg-white/10 rounded-full" />
          </motion.div>
        </div>
      )
    },
    {
      title: "Academia Digital",
      subtitle: "Formación técnica y estratégica para equipos que buscan liderar con tecnología actual.",
      solutions: [
        "Workshops de IA Aplicada",
        "Tutoría en Transformación Digital",
        "Capacitación en Herramientas Pro",
        "Sprints de Innovación",
        "Consultoría en Adopción Tecnológica"
      ],
      icon: GraduationCap,
      microUI: (hover) => (
        <div className="relative flex flex-col items-center">
          <motion.div animate={{ y: hover ? -10 : 0 }} className="relative">
             <GraduationCap className={`w-10 h-10 transition-colors ${hover ? 'text-patagonia-gold' : 'text-white/20'}`} />
             {hover && <motion.div layoutId="glow" className="absolute inset-0 bg-patagonia-gold/20 blur-xl rounded-full" />}
          </motion.div>
          <AnimatePresence>
            {hover && (
              <motion.span 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="text-[10px] text-patagonia-gold uppercase tracking-widest mt-2 font-bold"
              >
                Inscripciones Abiertas
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      )
    },
    {
      title: "Aplicaciones Web Pro",
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
