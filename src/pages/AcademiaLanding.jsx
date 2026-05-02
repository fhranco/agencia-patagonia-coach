import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Zap, Rocket, Target, CheckCircle2, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const MagneticButton = ({ children, className, ...props }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button ref={buttonRef} className={className} {...props}>
      {children}
    </button>
  );
};

const AcademiaLanding = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const levels = [
    {
      id: "01",
      name: "SPROUTS",
      type: "Talleres (2h)",
      icon: <Zap className="w-6 h-6 text-[#FF7A18]" />,
      color: "#FF7A18",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xl font-medium text-white/90">Cuenta tu Historia en Instagram + IA para el marketing de tu empresa.</p>
            <p className="text-white/50 leading-relaxed max-w-md">
              Aprende a conectar con tu audiencia y optimizar tu comunicación comercial utilizando herramientas de IA generativa de forma inmediata.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Instagram Stories", "IA para Marketing", "Content Strategy", "Social Media"].map((chip) => (
              <span key={chip} className="px-4 py-2 rounded-full border border-[#FF7A18]/30 bg-[#FF7A18]/5 text-[10px] uppercase tracking-widest text-[#FF7A18] hover:bg-[#FF7A18] hover:text-white transition-all cursor-default">
                {chip}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "02",
      name: "BOOTCAMP",
      type: "Workshops (4-8h)",
      icon: <Rocket className="w-6 h-6 text-patagonia-red" />,
      color: "#F0140A",
      content: (
        <div className="grid md:grid-cols-2 gap-12 h-full items-center">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold italic font-heading">Aprende y Aplica</h4>
            <ul className="space-y-4">
              {[
                "Cómo crecer en Instagram",
                "Crea prompts para tus tareas diarias",
                "Optimización de Procesos con IA",
                "Estrategia de Crecimiento Digital"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/70">
                  <CheckCircle2 className="w-5 h-5 text-patagonia-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-card p-8 border border-white/10 space-y-6">
             <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-white/40">Siguiente Workshop</p>
                <p className="text-lg font-bold">Automatización de Operaciones</p>
                <p className="text-patagonia-cyan text-sm">Próximo Jueves - 15:00 HS</p>
             </div>
             <button className="btn-secondary w-full text-xs">Ver Programas de 8 horas</button>
          </div>
        </div>
      )
    },
    {
      id: "03",
      name: "CUSTOM",
      type: "Cursos Corporativos",
      icon: <Target className="w-6 h-6 text-white" />,
      color: "#FFFFFF",
      content: (
        <div className="flex flex-col items-center justify-center text-center space-y-8 py-10">
          <div className="space-y-4 max-w-2xl">
            <p className="text-3xl font-light tracking-[0.1em] leading-tight">
              Implementa IA en tu empresa con una <span className="font-bold">arquitectura a medida</span> diseñada para obtener resultados inmediatos.
            </p>
          </div>
          <div className="pt-8">
            <MagneticButton className="btn-primary flex items-center gap-3 px-12 py-6 text-sm">
              SOLICITAR IMPLEMENTACIÓN CORPORATIVA <ChevronRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Academia PatagoniaCoach | Formación Práctica para la Economía Digital"
        description="Capacitación técnica de alto impacto en Magallanes. Talleres, Bootcamps e Implementaciones Corporativas de IA y Marketing Digital."
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="Academia PatagoniaCoach" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Academia PatagoniaCoach</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Formación <span className="text-patagonia-gold italic">Práctica.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            Ayudamos a empresas y profesionales a adquirir las capacidades necesarias para <span className="text-white font-normal">liderar en la economía digital</span> a través de protocolos de inmersión técnica y estratégica.
          </p>
        </div>
      </section>

      {/* Stacked Cards Interface */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-4">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              layout
              initial={false}
              className={`relative overflow-hidden rounded-[2.5rem] border transition-colors duration-500 
                ${expandedIndex === index ? 'bg-patagonia-surface/40' : 'bg-patagonia-surface/20'}
                ${level.id === "01" && expandedIndex === index ? 'border-[#FF7A18]/50 shadow-[0_0_40px_rgba(255,122,24,0.1)]' : 'border-white/5'}
                ${level.id === "03" && expandedIndex === index ? 'bg-black border-white/20' : ''}
              `}
              style={{
                borderColor: level.id === "01" && expandedIndex === index ? '#FF7A18' : ''
              }}
            >
              <div 
                onClick={() => setExpandedIndex(index)}
                className="p-8 md:p-12 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-sm text-white/20 tracking-widest">{level.id}</span>
                    <div className="p-3 rounded-full bg-white/5">{level.icon}</div>
                    <div>
                      <h3 className={`text-2xl font-bold tracking-widest ${level.id === "03" && index === expandedIndex ? 'tracking-[0.5em]' : ''}`}>
                        {level.name}
                      </h3>
                      <p className="text-xs text-white/40 uppercase mt-1">{level.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                     <motion.div
                        animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"
                     >
                       <ChevronRight className="w-5 h-5" />
                     </motion.div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                      className="overflow-hidden mt-12 pt-12 border-t border-white/5"
                    >
                      {level.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Signal */}
      <section className="py-24 px-6 bg-patagonia-surface/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
           <ShieldCheck className="w-16 h-16 text-patagonia-gold flex-shrink-0" />
           <div className="space-y-2">
              <h4 className="text-xl font-heading font-light text-white">Certificación de Maestría Digital</h4>
              <p className="text-patagonia-secondary text-sm font-light">Todos nuestros programas incluyen protocolos de validación técnica que aseguran que su equipo pueda ejecutar lo aprendido desde el primer día.</p>
           </div>
        </div>
      </section>

      <DigitalDiagnostic />
      <LeadCommand />
      <Footer />
    </div>
  );
};

export default AcademiaLanding;
