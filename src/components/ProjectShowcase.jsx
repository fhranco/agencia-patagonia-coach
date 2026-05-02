import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

const ProjectShowcase = () => {
  const projects = [
    {
      id: "comercial",
      title: "Comercial de la Patagonia",
      category: "E-commerce B2B de Alta Autoridad",
      desc: "Transformación total de la experiencia de compra mayorista. Navegación SPA instantánea con sistema QuickView y catálogo premium.",
      stats: ["+40% Conversión", "0.8s Carga"],
      icon: Globe,
      color: "patagonia-gold"
    },
    {
      id: "agenda",
      title: "Agenda Circular Magallanes",
      category: "Visualización de Datos Institucional",
      desc: "Plataforma de visualización sistémica para la economía circular. De datos fragmentados a un ecosistema de información estratégico.",
      stats: ["13 Módulos", "Data Viz Pro"],
      icon: Cpu,
      color: "white"
    },
    {
      id: "insta",
      title: "Insta-Planner V3",
      category: "SaaS de Planificación Táctica",
      desc: "Herramienta de gestión de marca de alto rendimiento. Geometría técnica y flujos de trabajo automatizados para equipos de marketing.",
      stats: ["Multitenant", "UI Disciplinada"],
      icon: Zap,
      color: "patagonia-gold"
    }
  ];

  return (
    <section className="py-48 px-6 bg-patagonia-black relative overflow-hidden">
      {/* Background visual accent */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-patagonia-gold/[0.03] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-white/20 font-heading tracking-[0.8em] text-[10px] uppercase font-semibold">Portafolio de Ejecución</span>
          </div>
          <h2 className="text-6xl md:text-[6.5rem] font-heading font-light max-w-5xl leading-[0.9] text-balance tracking-tighter text-white/90">
            Ecosistemas que <span className="italic">definen</span> industrias.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative p-12 rounded-[3.5rem] bg-patagonia-surface/10 border border-white/5 hover:border-patagonia-gold/20 transition-all duration-700 flex flex-col h-full overflow-hidden"
            >
              {/* Subtle hover reveal background */}
              <div className="absolute inset-0 bg-gradient-to-br from-patagonia-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-${p.color} group-hover:text-black transition-all duration-500`}>
                    <p.icon className="w-6 h-6" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/10 group-hover:text-patagonia-gold transition-colors" />
                </div>

                <div className="space-y-4 mb-10">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-patagonia-gold font-black">{p.category}</span>
                  <h3 className="text-3xl font-heading font-light text-white group-hover:italic transition-all">{p.title}</h3>
                </div>

                <p className="text-patagonia-secondary font-light leading-relaxed text-sm mb-12 flex-grow">
                  {p.desc}
                </p>

                <div className="pt-8 border-t border-white/5 flex gap-8">
                  {p.stats.map((s, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">{idx === 0 ? "RESULTADO" : "CAPACIDAD"}</p>
                      <p className="text-sm font-heading font-light text-white/80">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Visual Bridge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 w-full aspect-[21/9] rounded-[4rem] border border-white/5 bg-black/40 overflow-hidden relative group"
        >
          <img 
            src="/images/projects-showcase.png" 
            alt="PatagoniaCoach Success Stories Gallery" 
            className="w-full h-full object-cover opacity-60 scale-105 group-hover:scale-110 transition-transform duration-[10000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-patagonia-black via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4 max-w-xl text-left">
              <h4 className="text-3xl font-heading font-light text-white">Ingeniería de Clase Mundial</h4>
              <p className="text-patagonia-secondary text-sm font-light">Cada proyecto es una declaración de principios técnicos y estéticos. No aceptamos menos que la excelencia.</p>
            </div>
            <a href="#contacto" className="btn-primary min-w-[240px]">
              Iniciar mi Proyecto Elite
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
