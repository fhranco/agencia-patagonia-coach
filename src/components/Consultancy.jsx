import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, TrendingUp, Quote, ShieldCheck, ChevronDown, Network, Cpu, Users } from 'lucide-react';
import gsap from 'gsap';

const KineticBlob = () => (
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      x: [0, 100, 0],
      y: [0, 50, 0],
      rotate: [0, 90, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-patagonia-red/10 blur-[120px] rounded-full pointer-events-none z-0"
  />
);

const PilarAccordion = ({ id, title, focus, deliverable, icon: Icon, isOpen, onClick }) => (
  <div 
    onClick={onClick}
    className={`group border-b border-white/5 py-8 cursor-pointer transition-colors ${isOpen ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'}`}
  >
    <div className="flex items-center justify-between gap-8 px-4">
      <div className="flex items-center gap-8">
        <span className="font-mono text-xs text-white/20 tracking-widest">{id}</span>
        <div className={`p-3 rounded-xl transition-colors ${isOpen ? 'bg-patagonia-red/20 text-patagonia-red' : 'bg-white/5 text-white/40 group-hover:text-white'}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className={`text-2xl font-bold tracking-tight transition-all ${isOpen ? 'text-white' : 'text-white/40'}`}>
          {title}
        </h3>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        className="text-white/20"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </div>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-12 p-12 ml-16">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-patagonia-red font-bold">Foco Estratégico</p>
              <p className="text-lg text-white/70 font-light leading-relaxed">{focus}</p>
            </div>
            <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold">Entregable Clave</p>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-patagonia-cyan" />
                <p className="text-xl font-heading font-medium">{deliverable}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Consultancy = () => {
  const [openPilar, setOpenPilar] = useState(0);
  const containerRef = useRef(null);

  const pilares = [
    {
      id: "01",
      title: "Ecosistema Organizacional",
      focus: "Rediseñamos la estructura de su empresa para que la IA y el Marketing no sean parches, sino el motor de un sistema organizacional que escala de forma orgánica.",
      deliverable: "Mapa de Arquitectura Organizacional IA",
      icon: Network
    },
    {
      id: "02",
      title: "Cultura de Innovación",
      focus: "Transformamos la mentalidad de su equipo. Desde el liderazgo hasta la base, capacitamos en el uso táctico de IA para despejar tareas operativas y potenciar la creatividad.",
      deliverable: "Roadmap de Adopción Cultural",
      icon: Cpu
    },
    {
      id: "03",
      title: "Puente Tecnológico Regional",
      focus: "Conectamos la robustez de las industrias de la Patagonia con el futuro digital. Integramos procesos tradicionales con capas tecnológicas de última generación.",
      deliverable: "Despliegue de Capas Tecnológicas",
      icon: Users
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-patagonia-void py-32 overflow-hidden">
      <KineticBlob />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          {/* Left Column: Authority Block */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-patagonia-red rounded-full animate-ping" />
                <span className="text-patagonia-red font-heading tracking-[0.4em] text-xs uppercase">Ecosistema de Valor</span>
              </div>
              <h2 className="text-6xl font-bold leading-tight">
                El Puente de <br />
                <span className="text-white/20">Transformación.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-4 border-l-2 border-patagonia-red pl-8">
                <p className="text-xl font-medium text-white/90">Transformación organizacional impulsada por estrategia, marketing digital e IA.</p>
                <p className="text-white/50 leading-relaxed font-light">
                  Combinamos consultoría estratégica y formación técnica para que las empresas no solo implementen cambios, sino que desarrollen las capacidades internas para sostenerlos.
                </p>
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-xs uppercase tracking-[0.3em] text-patagonia-cyan font-bold">Valor Diferencial</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2">• Consultoría de negocio y estrategia digital</li>
                  <li className="flex items-center gap-2">• Formación experta en Marketing Digital e IA</li>
                  <li className="flex items-center gap-2">• Implementación de tecnología para crecimiento</li>
                </ul>
              </div>
            </div>

            <div className="pt-12">
               <Link to="/consultoria" className="btn-primary px-12 py-5 text-sm shadow-[0_0_40px_rgba(240,20,10,0.2)] inline-block">
                DISCUTIR ROADMAP ESTRATÉGICO
               </Link>
            </div>
          </div>

          {/* Right Column: Pillars & Bento */}
          <div className="lg:col-span-7 space-y-24">
            <div className="space-y-2">
              {pilares.map((pilar, i) => (
                <PilarAccordion 
                  key={i} 
                  {...pilar} 
                  isOpen={openPilar === i} 
                  onClick={() => setOpenPilar(i)}
                />
              ))}
            </div>

            {/* Bento Grid: Testimonials & Results */}
            <div className="grid grid-cols-6 grid-rows-2 gap-4 h-[450px]">
              {/* Card 1: Metrics */}
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="col-span-3 row-span-1 bg-patagonia-surface/50 border border-white/5 rounded-card p-8 flex flex-col justify-between"
              >
                <TrendingUp className="w-8 h-8 text-patagonia-cyan" />
                <div className="space-y-2">
                  <p className="text-4xl font-mono font-bold text-patagonia-cyan">+40%</p>
                  <p className="text-xs uppercase tracking-widest text-white/40">Eficiencia Operativa en Ventas</p>
                </div>
              </motion.div>

              {/* Card 2: Cita */}
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="col-span-3 row-span-2 bg-patagonia-red/5 border border-patagonia-red/20 rounded-card p-10 flex flex-col justify-center relative overflow-hidden"
              >
                <Quote className="absolute top-8 left-8 w-12 h-12 text-patagonia-red opacity-10" />
                <p className="text-xl font-light italic leading-relaxed relative z-10">
                  "PatagoniaCoach no solo trajo herramientas, articuló a todo nuestro ecosistema bajo una misma mentalidad colaborativa."
                </p>
                <div className="mt-8 relative z-10">
                  <p className="font-bold text-sm tracking-widest uppercase">Director de Operaciones</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest">Sector Logística B2B</p>
                </div>
              </motion.div>

              {/* Card 3: Video Case */}
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="col-span-3 row-span-1 bg-patagonia-surface/30 backdrop-blur-xl border border-white/10 rounded-card p-4 relative group cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 text-black fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase">Video Case Study</p>
                  <p className="text-sm font-light text-white/60">Digital Mastery Implementation</p>
                </div>
                <div className="w-full h-full bg-white/5 opacity-20" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultancy;
