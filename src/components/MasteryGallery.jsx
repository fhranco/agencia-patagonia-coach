import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Layout, Cpu, GraduationCap } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: 'Diseño Web',
    title: 'Boutique de Inmersión',
    description: 'E-commerce de alto rendimiento con UX de lujo sensorial.',
    image: '/patagonia_luxury_hero.png', // Fallback to hero for now
    icon: <Globe className="w-5 h-5" />,
    stats: '+140% Conversión'
  },
  {
    id: 2,
    category: 'Redes Sociales',
    title: 'Estrategia de Influencia',
    description: 'Diseño de narrativa digital para marcas de autoridad regional.',
    image: '/patagonia_luxury_hero.png',
    icon: <Layout className="w-5 h-5" />,
    stats: '+3.2M Alcance'
  },
  {
    id: 3,
    category: 'Inteligencia Artificial',
    title: 'Predictores Neuronales',
    description: 'Despliegue de modelos LLM personalizados para toma de decisiones.',
    icon: <Cpu className="w-5 h-5" />,
    image: '/patagonia_luxury_hero.png',
    stats: '99% Precisión'
  },
  {
    id: 4,
    category: 'Academia',
    title: 'Maestría Corporativa',
    description: 'Programa de formación técnica avanzada para líderes B2B.',
    icon: <GraduationCap className="w-5 h-5" />,
    image: '/patagonia_luxury_hero.png',
    stats: '+500 Egresados'
  },
  {
    id: 5,
    category: 'Diseño Web',
    title: 'Portal de Inversiones',
    description: 'Fintech con interfaz de cristal y seguridad de grado militar.',
    icon: <Globe className="w-5 h-5" />,
    image: '/patagonia_luxury_hero.png',
    stats: 'Velocidad < 0.8s'
  },
  {
    id: 6,
    category: 'Inteligencia Artificial',
    title: 'Visión Computacional',
    description: 'Control de calidad automatizado mediante redes convolucionales.',
    icon: <Cpu className="w-5 h-5" />,
    image: '/patagonia_luxury_hero.png',
    stats: 'ROI 12 Mensual'
  }
];

const categories = ['Todos', 'Diseño Web', 'Redes Sociales', 'Inteligencia Artificial', 'Academia'];

const MasteryGallery = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portafolio" className="py-32 bg-patagonia-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-patagonia-gold/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-patagonia-red/5 blur-[120px] rounded-full -z-10" />

      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-block px-4 py-1.5 border border-patagonia-gold/20 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-patagonia-gold">Galería de Maestría</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-light text-patagonia-white leading-[0.9]">
              Proyectos que <br />
              <span className="italic text-patagonia-gold">redefinen</span> el mercado.
            </h2>
          </div>

          {/* Luxury Filter UI */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                  activeCategory === cat 
                  ? 'bg-patagonia-red border-patagonia-red text-white shadow-[0_10px_30px_rgba(255,23,33,0.3)]' 
                  : 'bg-white/5 border-white/10 text-patagonia-secondary hover:border-patagonia-gold/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="group relative h-[450px] rounded-card overflow-hidden bg-patagonia-surface border border-white/5 hover:border-patagonia-gold/30 transition-all duration-700"
              >
                {/* Image Background */}
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-patagonia-black via-patagonia-black/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-patagonia-black/60 rounded-xl backdrop-blur-xl border border-white/10 text-patagonia-gold">
                      {project.icon}
                    </div>
                    <div className="px-4 py-1.5 bg-patagonia-red rounded-full shadow-lg">
                      <span className="text-[9px] font-black text-white tracking-[0.2em]">{project.stats}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-patagonia-gold font-bold">{project.category}</span>
                    <h3 className="text-3xl font-heading text-patagonia-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700 font-light italic">
                      {project.title}
                    </h3>
                    <p className="text-sm text-patagonia-secondary opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-1000 delay-100 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300">
                      <button className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.3em] group/btn">
                        Ver Detalles 
                        <div className="w-8 h-px bg-patagonia-red group-hover/btn:w-16 transition-all duration-500" />
                        <ExternalLink className="w-4 h-4 text-patagonia-red" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MasteryGallery;
