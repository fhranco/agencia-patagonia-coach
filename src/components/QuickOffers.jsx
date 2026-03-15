import { motion } from 'framer-motion';
import { Zap, Clock, Globe, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickOffers = () => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-patagonia-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Offer 1: Weekly Workshops */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Calendar className="w-32 h-32 text-white" />
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-patagonia-cyan/20 border border-patagonia-cyan/30 text-[10px] font-bold uppercase tracking-widest text-patagonia-cyan">
                <Clock className="w-3 h-3" /> Formación Express
              </div>
              
              <h3 className="text-4xl font-bold tracking-tighter italic leading-tight">
                Talleres y Cursos <br />
                <span className="text-patagonia-cyan text-5xl">de la Semana.</span>
              </h3>
              
              <p className="text-white/50 font-light text-lg leading-relaxed max-w-sm">
                Sprints de 2 a 4 horas diseñados para que tu equipo aprenda a ejecutar IA hoy mismo, no en meses.
              </p>
              
              <div className="pt-6">
                <Link to="/academia" className="inline-flex items-center gap-3 px-8 py-4 bg-patagonia-cyan text-black rounded-full font-bold hover:gap-5 transition-all">
                  VER CALENDARIO <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Offer 2: Web in 48h */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-patagonia-red/20 to-patagonia-void border border-patagonia-red/30 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe className="w-32 h-32 text-white" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white">
                <Zap className="w-3 h-3 text-patagonia-red" /> Lanzamiento Rápido
              </div>
              
              <h3 className="text-4xl font-bold tracking-tighter italic leading-tight text-white">
                Tu Web B2B <br />
                <span className="text-patagonia-red text-5xl italic font-black">en 48 Horas.</span>
              </h3>
              
              <p className="text-white/60 font-light text-lg leading-relaxed max-w-sm">
                Desplegamos tu ecosistema digital completo con arquitectura de conversión lista para captar leads. 
              </p>
              
              <div className="pt-6">
                <a href="#contacto" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:gap-5 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                  INICIAR MI WEB <Sparkles className="w-5 h-5 text-patagonia-red" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default QuickOffers;
