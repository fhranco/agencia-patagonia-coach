import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Users, GraduationCap, ArrowUpRight } from 'lucide-react';

const ValueLadder = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const programs = [
    {
      title: "Agencia",
      subtitle: "Done For You",
      description: "Automatización y Desarrollo. Soluciones llave en mano para optimizar su operativa con IA.",
      icon: <Bot className="w-12 h-12 text-patagonia-red" />,
      features: ["Automatización CRM", "MVP AI Development", "Growth Ops"]
    },
    {
      title: "Consultoría",
      subtitle: "Done With You",
      description: "Estrategia B2B y Transformación. Acompañamiento estratégico para liderar el cambio organizacional.",
      icon: <Users className="w-12 h-12 text-patagonia-cyan" />,
      features: ["Roadmap de IA", "Cultura Digital", "Escalamiento B2B"]
    },
    {
      title: "Academia",
      subtitle: "Do It Yourself",
      description: "Cursos y Capacitación IA. Empodere a su equipo con las herramientas del futuro.",
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      features: ["Masterclass IA", "Workshops Ejecutivos", "Recursos Dev"]
    }
  ];

  return (
    <section className="section-container">
      <div className="grid md:grid-cols-3 gap-0 overflow-hidden rounded-card border border-white/10">
        {programs.map((item, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-cursor="VER MÁS"
            className={`relative p-8 md:p-12 flex flex-col gap-8 transition-opacity duration-500 border-b md:border-b-0 md:border-r border-white/5 last:border-b-0 last:border-r-0 ${
              hoveredIndex !== null && hoveredIndex !== i ? 'opacity-40 grayscale' : 'opacity-100'
            } bg-patagonia-surface/30 hover:bg-patagonia-surface/50`}
          >
            <div className="space-y-4">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
              <p className="text-patagonia-red font-heading text-sm tracking-widest">{item.subtitle}</p>
            </div>
            
            <p className="text-white/60 font-light leading-relaxed min-h-[100px]">
              {item.description}
            </p>

            <ul className="space-y-3 pt-6 border-t border-white/5">
              {item.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest">
                  <div className="w-1 h-1 bg-patagonia-cyan rounded-full" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <motion.div
                animate={{ x: hoveredIndex === i ? 5 : 0 }}
                className="inline-flex items-center gap-2 text-white group"
              >
                Explorar Solución <ArrowUpRight className="w-4 h-4 text-patagonia-red group-hover:rotate-45 transition-transform" />
              </motion.div>
            </div>

            {/* Micro-UI Overlay on Hover */}
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-patagonia-red/20 to-transparent pointer-events-none"
                >
                  <div className="text-[6rem] md:text-[8rem] font-bold opacity-5 absolute -top-10 -right-10 leading-none">
                    0{i + 1}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ValueLadder;
