import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Rocket, Target, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import gsap from 'gsap';

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

const AcademyHub = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const levels = [
    {
      id: "01",
      name: "SPRINT",
      type: "Talleres (2h)",
      icon: <Zap className="w-6 h-6 text-[#FF7A18]" />,
      color: "#FF7A18",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xl font-medium text-white/90">Estrategia + Herramientas + Aplicación Directa.</p>
            <p className="text-white/50 leading-relaxed max-w-md">
              Nuestros programas permiten que los equipos aprendan y apliquen inmediatamente lo aprendido en sus organizaciones mediante herramientas tecnológicas de vanguardia.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Prompt Engineering", "Copy con IA", "Canva Pro", "Storytelling"].map((chip) => (
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
                "Implementación de IA Generativa",
                "Estrategia de Crecimiento Digital",
                "Automatización de Procesos Críticos",
                "Certificación de Competencias"
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
              Diseñamos el sistema operativo de tu equipo. 
              <span className="block font-bold mt-2">Consultoría + Formación a medida basada en tu diagnóstico organizacional.</span>
            </p>
          </div>
          <div className="pt-8">
            <MagneticButton className="btn-primary flex items-center gap-3 px-12 py-6 text-sm">
              SOLICITAR DIAGNÓSTICO PARA EMPRESAS <ChevronRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1F2937] to-[#0F1729] py-32 px-6">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise" />
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <Sparkles className="w-4 h-4 text-patagonia-cyan" />
             <span className="font-mono text-xs uppercase tracking-[0.5em] text-patagonia-cyan">ACADEMIA PATAGONIACOACH</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold max-w-4xl tracking-tight leading-none">
            Formación práctica para <br />
            <span className="text-white/20">la economía digital.</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl leading-relaxed">
            A través de nuestra Academia de Marketing Digital e Inteligencia Artificial, ayudamos a empresas y profesionales a adquirir las capacidades necesarias para crecer en un entorno digital cada vez más competitivo.
          </p>
        </div>

        {/* Stacked Cards Interface */}
        <div className="space-y-4">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              layout
              initial={false}
              className={`relative overflow-hidden rounded-[2rem] border transition-colors duration-500 
                ${expandedIndex === index ? 'bg-patagonia-surface/40' : 'bg-patagonia-surface/20'}
                ${level.id === "01" && expandedIndex === index ? 'border-[#FF7A18]/50 shadow-[0_0_40px_rgba(255,122,24,0.1)]' : 'border-white/5'}
                ${level.id === "03" && expandedIndex === index ? 'bg-black border-white/20' : ''}
              `}
              style={{
                borderColor: level.id === "01" && expandedIndex === index ? '#FF7A18' : ''
              }}
            >
              {/* Pulse effect for Level 01 */}
              {level.id === "01" && (
                <div className="absolute inset-0 border-2 border-[#FF7A18]/20 rounded-[2rem] animate-pulse pointer-events-none" />
              )}

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
                     <span className="text-[10px] uppercase tracking-widest text-white/20">
                       {expandedIndex === index ? 'ACTIVE MODULE' : 'INTERACT TO EXPAND'}
                     </span>
                     <motion.div
                        animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center"
                     >
                       <ChevronRight className="w-4 h-4" />
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
      </div>
    </section>
  );
};

export default AcademyHub;
