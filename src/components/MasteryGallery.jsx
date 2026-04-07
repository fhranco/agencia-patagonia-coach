import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Layout, Cpu, GraduationCap, X, ChevronRight, TrendingUp, Target, Award } from 'lucide-react';

const projects = [
  // Diseño Web
  { 
    id: 1, 
    category: 'Diseño Web', 
    title: 'BoostPatagonia.cl', 
    image: '/portafolio-web.png', 
    icon: <Globe className="w-5 h-5" />, 
    stats: 'Mastery 2026',
    url: 'https://boostpatagonia.cl',
    challenge: 'Cuantificar el valor real del marketing digital y automatizar la captación de leads de alto valor.',
    solution: 'Arquitectura de inmersión con Radar de Oportunidades y Calculadora de ROI integrada mediante modelos de datos.',
    impact: 'ROI 15x proyectado y liderazgo absoluto en el sector de consultoría de marketing regional.'
  },
  { 
    id: 2, 
    category: 'Diseño Web', 
    title: 'Marcelacruz.cl', 
    image: '/portafolio-web.png', 
    icon: <Globe className="w-5 h-5" />, 
    stats: 'Mastery 2026',
    url: 'https://marcelacruz.cl',
    challenge: 'Posicionar una marca de joyería de autor en el segmento de lujo regional con una estética editorial.',
    solution: 'Diseño de interfaz satinada (Quiet Luxury) con enfoque en la fotografía macro y narrativa sensorial.',
    impact: 'Incremento del 180% en ventas digitales y posicionamiento como marca de autoridad en joyería.'
  },
  { 
    id: 3, 
    category: 'Diseño Web', 
    title: 'Servisegpuq.cl', 
    image: '/portafolio-web.png', 
    icon: <Globe className="w-5 h-5" />, 
    stats: 'Mastery 2026',
    url: 'https://servisegpuq.cl',
    challenge: 'Transformar una empresa de seguridad e ingeniería tradicional en un referente tecnológico digital.',
    solution: 'Ecosistema corporativo asertivo con portal de servicios técnicos y arquitectura de confianza masiva.',
    impact: 'Consolidación de contratos estatales y privados mediante una imagen de autoridad indiscutible.'
  },
  { 
    id: 4, 
    category: 'Diseño Web', 
    title: 'Yoganesha.cl', 
    image: '/portafolio-web.png', 
    icon: <Globe className="w-5 h-5" />, 
    stats: 'Mastery 2026',
    url: 'https://yoganesha.cl',
    challenge: 'Expandir una marca de bienestar a nivel nacional con una plataforma de inmersión consciente.',
    solution: 'Diseño armónico con carga ultra-rápida y embudos de conversión suaves para programas de yoga.',
    impact: 'Crecimiento de comunidad orgánica del 240% y automatización total de inscripciones.'
  },
  { 
    id: 5, 
    category: 'Diseño Web', 
    title: 'ComercialPatagonia.cl', 
    image: '/portafolio-web.png', 
    icon: <Globe className="w-5 h-5" />, 
    stats: 'Mastery 2026',
    url: 'https://comercialpatagonia.cl',
    challenge: 'Digitalizar la distribución mayorista de Cemento Comodoro para el mercado regional B2B.',
    solution: 'Portal de pedidos inteligente con visualización de stock en tiempo real y flujo de cotizaciones pro.',
    impact: 'Reducción de tiempos operativos en un 60% y mejora en la trazabilidad de clientes mayoristas.'
  },

  // Redes Sociales
  { 
    id: 7, 
    category: 'Redes Sociales', 
    title: 'Parrilla y Fuego', 
    image: '/portafolio-social.png', 
    icon: <Layout className="w-5 h-5" />, 
    stats: 'Autoridad',
    url: '#',
    challenge: 'Inyectar una identidad potente y auténtica en el saturado mercado gastronómico regional.',
    solution: 'Estrategia de contenido de "Fuego y Grana" con fotografía editorial magallánica y narrativa de autor.',
    impact: 'Agotamiento sistemático de reservas mediante activación orgánica de alta intensidad.'
  },
  { 
    id: 8, 
    category: 'Redes Sociales', 
    title: 'Corcoran', 
    image: '/portafolio-social.png', 
    icon: <Layout className="w-5 h-5" />, 
    stats: 'Impacto',
    url: '#',
    challenge: 'Elevar el estatus visual de la marca para captar clientes de alto patrimonio.',
    solution: 'Curaduría de feed estilo Boutique con micro-interacciones de video y estética de lujo silencioso.',
    impact: 'Engagement superior al 12% en Instagram y aumento del ticket promedio de consulta.'
  },

  // IA
  { 
    id: 14, 
    category: 'Inteligencia Artificial', 
    title: 'Portal Clientes IA', 
    image: '/portafolio-ia.png', 
    icon: <Cpu className="w-5 h-5" />, 
    stats: 'Predictive 2026',
    url: 'https://clientes.agenciapatagoniacoach.cl',
    challenge: 'Proveer a los clientes de la agencia una herramienta de análisis predictivo de valor comercial.',
    solution: 'Panel de control inteligente que procesa datos de mercado regional para detectar brechas de oportunidad.',
    impact: 'Herramienta clave de fidelización que diferencia a la agencia del resto del mercado regional.'
  },
  { 
    id: 15, 
    category: 'Inteligencia Artificial', 
    title: 'Appweb Totem Ruta9', 
    image: '/portafolio-ia.png', 
    icon: <Cpu className="w-5 h-5" />, 
    stats: 'Innovation',
    url: '#',
    challenge: 'Crear una interfaz interactiva de IA para tótems informativos en puntos de alto tráfico logístico.',
    solution: 'Modelo de Procesamiento de Lenguaje Natural local con respuesta inmediata y diseño de bajo contraste.',
    impact: 'Mejora en la eficiencia de comunicación informativa en la Ruta 9 en un 80%.'
  }
];

const categories = ['Todos', 'Diseño Web', 'Redes Sociales', 'Inteligencia Artificial', 'Academia'];

const ProjectCard = ({ project, onClick }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  return (
    <motion.div
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d'
      }}
      onClick={() => onClick(project)}
      className="group relative h-[450px] rounded-card overflow-hidden bg-patagonia-surface border border-white/5 hover:border-patagonia-gold/30 transition-all duration-700 cursor-pointer"
    >
      <motion.div
        animate={{
          rotateX: coords.y * 20,
          rotateY: coords.x * -20,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
        className="w-full h-full relative"
      >
        {/* Dynamic Glint Effect */}
        <motion.div
          animate={{
            background: isHovered 
              ? `radial-gradient(circle at ${50 + coords.x * 100}% ${50 + coords.y * 100}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
              : 'none'
          }}
          className="absolute inset-0 z-30 pointer-events-none"
        />

        {/* Image Background */}
        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-t from-patagonia-black via-patagonia-black/40 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
          <div className="flex justify-between items-start" style={{ transform: 'translateZ(50px)' }}>
            <div className="p-3 bg-patagonia-black/60 rounded-xl backdrop-blur-xl border border-white/10 text-patagonia-gold">
              {project.icon}
            </div>
            <div className="px-4 py-1.5 bg-patagonia-red rounded-full">
              <span className="text-[9px] font-black text-white tracking-[0.2em] uppercase">{project.stats}</span>
            </div>
          </div>

          <div className="space-y-4" style={{ transform: 'translateZ(80px)' }}>
            <span className="text-[10px] uppercase tracking-[0.4em] text-patagonia-gold font-bold">{project.category}</span>
            <h3 className="text-3xl font-heading text-patagonia-white font-light italic">
              {project.title}
            </h3>
            <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300">
              <button className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.3em] group/btn">
                Explorar Maestría 
                <div className="w-8 h-px bg-patagonia-red group-hover/btn:w-16 transition-all duration-500" />
                <ChevronRight className="w-4 h-4 text-patagonia-red" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const MasteryGallery = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portafolio" className="py-32 bg-patagonia-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-patagonia-gold/5 blur-[120px] rounded-full -z-10" />
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-block px-4 py-1.5 border border-patagonia-gold/20 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-patagonia-gold">Galería de Maestría</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-light text-patagonia-white leading-[0.9]">
              Proyectos de <br />
              <span className="italic text-patagonia-gold underline decoration-patagonia-red/30 underline-offset-8">Alto Impacto</span>.
            </h2>
          </div>

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
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Mastery Detail SideSheet */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full md:w-[600px] h-full bg-patagonia-black border-l border-white/10 z-[210] p-8 md:p-12 overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-3 hover:bg-white/5 rounded-full text-patagonia-secondary hover:text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-12 pt-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-patagonia-gold text-[10px] font-black uppercase tracking-[0.5em]">
                    {selectedProject.icon}
                    <span>{selectedProject.category}</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-heading text-patagonia-white font-light italic leading-tight">
                    {selectedProject.title}
                  </h3>
                  <div className="px-6 py-2 bg-patagonia-red/10 border border-patagonia-red/30 rounded-lg inline-block">
                    <span className="text-patagonia-red text-xs font-black uppercase tracking-[0.2em]">{selectedProject.stats}</span>
                  </div>
                </div>

                <div className="grid gap-10">
                  <div className="space-y-4 group">
                    <div className="flex items-center gap-3 text-patagonia-secondary">
                      <Target className="w-5 h-5 text-patagonia-gold" />
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold">El Reto</span>
                    </div>
                    <p className="text-lg text-patagonia-white font-light leading-relaxed pl-8 border-l border-white/5 group-hover:border-patagonia-gold/30 transition-all">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div className="space-y-4 group">
                    <div className="flex items-center gap-3 text-patagonia-secondary">
                      <Cpu className="w-5 h-5 text-patagonia-gold" />
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Nuestra Maestría</span>
                    </div>
                    <p className="text-lg text-patagonia-white font-light leading-relaxed pl-8 border-l border-white/5 group-hover:border-patagonia-red/30 transition-all">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div className="space-y-4 group">
                    <div className="flex items-center gap-3 text-patagonia-secondary">
                      <TrendingUp className="w-5 h-5 text-patagonia-gold" />
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold">El Impacto</span>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-patagonia-red/5 group-hover:border-patagonia-red/20 transition-all">
                      <p className="text-2xl text-patagonia-white font-medium italic">
                        {selectedProject.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-10 flex flex-col sm:flex-row gap-6">
                  {selectedProject.url !== '#' && (
                    <a 
                      href={selectedProject.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-10 py-5 bg-patagonia-red text-patagonia-white rounded-full font-black text-xs tracking-[0.3em] uppercase hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3"
                    >
                      Visitar Proyecto Maestro
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-5 border border-white/10 rounded-full text-patagonia-secondary font-black text-[10px] tracking-[0.3em] uppercase hover:text-white hover:bg-white/5 transition-all"
                  >
                    Cerrar Detalles
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MasteryGallery;
