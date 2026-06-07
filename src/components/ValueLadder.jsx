import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Users, GraduationCap, ArrowUpRight } from 'lucide-react';

const ValueLadder = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const programs = [
    {
      title: "Agencia Elite",
      subtitle: "EXECUCIÓN TOTAL",
      description: "Diseño y despliegue de ecosistemas digitales de alto nivel. Soluciones personalizadas para organizaciones que demandan excelencia.",
      icon: <Bot className="w-10 h-10 text-patagonia-gold" />,
      features: ["Arquitectura de IA", "E-commerce de Lujo", "Automatización de Capital"]
    },
    {
      title: "Consultoría de Poder",
      subtitle: "ESTRATEGIA & VISIÓN",
      description: "Acompañamiento táctico para la toma de decisiones críticas. Transformación cultural y operativa impulsada por tecnología.",
      icon: <Users className="w-10 h-10 text-patagonia-white/40" />,
      features: ["Roadmap Estratégico", "Protocolos de IA", "Optimización de Valor"]
    },
    {
      title: "Academia de Maestría",
      subtitle: "EVOLUCIÓN CONTINUA",
      description: "Programas de inmersión para líderes y equipos. Desarrolle las capacidades necesarias para dominar la frontera tecnológica.",
      icon: <GraduationCap className="w-10 h-10 text-patagonia-white/20" />,
      features: ["Masterclass Ejecutiva", "Sprints de Inmersión", "Recursos Exclusivos"]
    }
  ];

  return (
    <section className="section-container relative z-10 pt-0">
      <div className="grid md:grid-cols-3 gap-0 overflow-hidden rounded-[2rem] border border-white/5 bg-patagonia-surface/20">
        {programs.map((item, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative p-10 md:p-14 flex flex-col gap-10 transition-all duration-700 border-b md:border-b-0 md:border-r border-white/5 last:border-b-0 last:border-r-0 ${
              hoveredIndex !== null && hoveredIndex !== i ? 'opacity-30 grayscale' : 'opacity-100'
            } bg-patagonia-black/40 hover:bg-patagonia-surface/40`}
          >
            <div className="space-y-6">
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{item.icon}</div>
              <h2 className="text-3xl md:text-4xl font-heading font-light tracking-tight text-patagonia-white">{item.title}</h2>
              <p className="text-patagonia-gold font-heading text-[9px] uppercase tracking-[0.4em] font-semibold">{item.subtitle}</p>
            </div>
            
            <p className="text-patagonia-secondary font-light leading-relaxed min-h-[100px] text-lg">
              {item.description}
            </p>

            <ul className="space-y-4 pt-8 border-t border-white/5">
              {item.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-[10px] text-patagonia-white/60 uppercase tracking-widest font-medium">
                  <div className="w-1.5 h-1.5 bg-patagonia-gold/40 rounded-full" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <button
                className="group flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-patagonia-gold hover:text-patagonia-white transition-colors"
              >
                Explorar Protocolo <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            {/* Subtle Gradient Shadow on Hover */}
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-patagonia-gold/10 to-transparent pointer-events-none"
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ValueLadder;
