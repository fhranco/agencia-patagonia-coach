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
  GraduationCap
} from 'lucide-react';

const ServiceCard = ({ title, bgImage, subtitle, solutions, icon: Icon, children, microUI, onHover, index, activeIndex }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Mouse Spotlight & 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 60, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Values for 3D rotation (-0.5 to 0.5)
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(null);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(index);
  };

  // Dim the card if another one is hovered
  const isDimmed = activeIndex !== null && activeIndex !== index;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative group bg-patagonia-surface border border-white/5 rounded-card p-10 flex flex-col gap-6 transition-all duration-700 hover:border-patagonia-cyan/50 hover:shadow-[0_0_80px_rgba(0,229,255,0.05)] overflow-hidden ${isDimmed ? 'opacity-30 scale-[0.98] grayscale-[50%]' : 'opacity-100 scale-100'}`}
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-patagonia-void via-patagonia-void/80 to-transparent z-[1]" />

      {/* Dynamic Mouse Spotlight Glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]"
        style={{
          background: "radial-gradient(1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 229, 255, 0.04), transparent 40%)",
        }}
        onUpdate={() => {
          if (!cardRef.current) return;
          const rect = cardRef.current.getBoundingClientRect();
          cardRef.current.style.setProperty('--mouse-x', `${x.get() * rect.width + rect.width / 2}px`);
          cardRef.current.style.setProperty('--mouse-y', `${y.get() * rect.height + rect.height / 2}px`);
        }}
      />
      
      <div className="flex justify-between items-start relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className={`p-4 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 shadow-2xl transition-all duration-500 ${isHovered ? 'bg-gradient-to-br from-patagonia-red/20 to-patagonia-void border-patagonia-red/30 scale-110' : ''}`}>
          <Icon className={`w-8 h-8 transition-colors duration-500 ${isHovered ? 'text-patagonia-red' : 'text-white/40'}`} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
          <TrendingUp className="w-5 h-5 text-patagonia-cyan" />
        </div>
      </div>

      <div className="space-y-4 relative z-10" style={{ transform: "translateZ(40px)" }}>
        <h3 className="text-2xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{title}</h3>
        {subtitle && (
          <p className="text-white/50 font-light text-sm leading-relaxed mb-4 group-hover:text-white/80 transition-colors">
            {subtitle}
          </p>
        )}

        {solutions && solutions.length > 0 && (
          <ul className="space-y-3 pt-4 border-t border-white/5">
            {solutions.map((sol, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/60 font-light group-hover:text-white/90 transition-colors">
                <div className="w-1.5 h-1.5 bg-patagonia-cyan rounded-full mt-1.5 shrink-0 shadow-[0_0_10px_#00E5FF] opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all" />
                {sol}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Micro-UI Area */}
      <div className="mt-auto pt-10 h-28 flex items-center justify-center relative z-10" style={{ transform: "translateZ(60px)" }}>
        {microUI(isHovered)}
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
      title: "Arquitectura de Influencia",
      bgImage: "/patagonia_luxury_hero.png",
      solutions: [
        "Estrategia de Posicionamiento Elite",
        "Publicidad de Inmersión Psicológica",
        "Gestión de Reputación de Alto Nivel",
        "Growth Marketing de Precisión",
        "Ecosistemas de Conversión"
      ],
      icon: Share2,
      microUI: (hover) => (
        <div className="relative w-24 h-24 flex items-center justify-center">
          <motion.div
            animate={{ rotate: hover ? 360 : 0 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-patagonia-gold/30 rounded-full"
          />
          <div className="relative z-10 flex gap-2">
            <div className="w-2 h-2 bg-patagonia-gold rounded-full animate-ping" />
            <div className="w-2 h-2 bg-patagonia-white rounded-full animate-bounce" />
          </div>
        </div>
      )
    },
    {
      title: "Cinematografía & Artefactos",
      bgImage: "/nano_banana_luxury.png",
      solutions: [
        "Producción Audiovisual 8K",
        "Fotografía Galardonada",
        "Diseño de Artefactos de Lujo",
        "Narrativas Surrealistas con IA",
        "Branding Documental"
      ],
      icon: Camera,
      microUI: (hover) => (
        <div className="flex items-center gap-1">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: hover ? [10, Math.random() * 40 + 10, 10] : 10 }}
              transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: "easeInOut" }}
              className="w-1 bg-patagonia-gold rounded-full shadow-[0_0_8px_rgba(251,145,77,0.5)]"
            />
          ))}
        </div>
      )
    },
    {
      title: "Ecosistemas de Inmersión",
      bgImage: "/luxury_watch_industrial.png",
      solutions: [
        "Desarrollo Web de Próxima Generación",
        "E-commerce de Lujo & Boutique",
        "Plataformas SaaS de Alta Disponibilidad",
        "Optimización de Performance 100/100"
      ],
      icon: LayoutTemplate,
      microUI: (hover) => (
        <div className="flex items-end gap-1 h-12">
          {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: hover ? `${h}%` : '20%' }}
              transition={{ delay: i * 0.05, type: 'spring' }}
              className="w-2 bg-patagonia-gold rounded-t-sm shadow-[0_0_10px_rgba(251,145,77,0.4)]"
            />
          ))}
        </div>
      )
    },
    {
      title: "Inteligencia Estratégica",
      bgImage: "/gourmet_dish_luxury.png",
      subtitle: "Automatizamos la complejidad para liberar el potencial genio de su equipo.",
      solutions: [
        "Modelos de IA de Propósito Específico",
        "Automatización de Operaciones Críticas",
        "Análisis de Data Predictiva",
        "Agentes de IA de Alto Rendimiento"
      ],
      icon: Cpu,
      microUI: (hover) => (
        <div className="flex flex-col items-center gap-4 pointer-events-none">
          <div className="flex items-center gap-6">
            <XCircle className={`w-5 h-5 transition-colors ${!hover ? 'text-patagonia-white/20' : 'text-white/20'}`} />
            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${hover ? 'bg-patagonia-gold' : 'bg-white/10'}`}>
              <motion.div animate={{ x: hover ? 24 : 0 }} className="w-4 h-4 bg-white rounded-full shadow-lg" />
            </div>
            <CheckCircle2 className={`w-5 h-5 transition-colors ${hover ? 'text-patagonia-gold' : 'text-white/20'}`} />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
            {hover ? 'Status: Autonomous' : 'Status: Manual'}
          </span>
        </div>
      )
    },
    {
      title: "Consultoría Elite",
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
      subtitle: "Unificamos tecnología y estrategia en un solo protocolo operativo diseñado para escalar.",
      solutions: [
        "Auditoría Tecnológica IA",
        "Roadmap de Expansión Corporativa",
        "Reingeniería de Experiencia de Cliente",
        "Protocolo Patagonia Coach"
      ],
      icon: Briefcase,
      microUI: (hover) => (
        <div className="relative w-24 h-12">
          <motion.div animate={{ opacity: hover ? 0 : 1 }} className="absolute inset-0 border border-dashed border-white/20 rounded-md flex items-center justify-center">
            <div className="w-8 h-8 border border-white/10" />
          </motion.div>
          <motion.div animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.8 }} className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-patagonia-gold rounded-sm rotate-45 shadow-[0_0_15px_rgba(251,145,77,0.5)]" />
              <div className="h-2 w-12 bg-white/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      )
    },
    {
      title: "Academia de Alta Gerencia",
      bgImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop",
      subtitle: "Capacitación continua para que su equipo no solo use la tecnología, sino que aprenda a evolucionar con ella.",
      solutions: [
        "Sprints Tácticos de IA",
        "Bootcamps de Inmersión Patagonia",
        "Mastery en Liderazgo Tecnológico",
        "Mentoría de Alto Impacto"
      ],
      icon: GraduationCap,
      microUI: (hover) => (
        <div className="relative flex flex-col items-center">
          <motion.div animate={{ rotate: hover ? 0 : -10, y: hover ? -5 : 0 }} className="relative">
             <Lock className={`w-10 h-10 transition-colors ${hover ? 'text-patagonia-gold' : 'text-white/20'}`} />
             {hover && <motion.div layoutId="glow" className="absolute inset-0 bg-patagonia-gold/20 blur-xl rounded-full" />}
          </motion.div>
          <AnimatePresence>
            {hover && (
              <motion.span 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="text-[10px] text-patagonia-gold uppercase tracking-tighter mt-2 font-bold"
              >
                Access Granted
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      )
    }
  ];

  return (
    <section className="section-container relative bg-patagonia-black min-h-screen">
      {/* Cinematic Background Crossfade */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <AnimatePresence>
          {activeServiceHover !== null && (
            <motion.div
              key={activeServiceHover}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${services[activeServiceHover].bgImage})` }}
            >
              <div className="absolute inset-0 bg-patagonia-black/60 backdrop-blur-[2px]" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-patagonia-black via-patagonia-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-transparent" />
      </div>

      <div className="mb-24 space-y-10 relative z-10 pt-10">
        <div className="flex items-center gap-6">
          <div className="w-20 h-[1px] bg-gradient-to-r from-patagonia-gold to-transparent" />
          <span className="text-patagonia-gold font-heading tracking-[0.8em] text-[10px] uppercase font-semibold">Matriz de Servicios Elite</span>
        </div>
        <h2 className="text-6xl md:text-[6rem] font-heading font-light max-w-5xl leading-[0.9] text-balance tracking-[-0.05em]">
          Ecosistemas de <span className="text-patagonia-gold italic">valor</span> ininterrumpido.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10" style={{ perspective: 2000 }}>
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
    </section>
  );
};

export default ServiceMatrix;
