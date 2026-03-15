import { motion } from 'framer-motion';
import { Quote, Compass, Globe } from 'lucide-react';

const Vision = () => {
  return (
    <section className="section-container relative py-32 overflow-hidden bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-patagonia-red/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-patagonia-cyan/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Quote Section */}
          <div className="md:col-span-8 space-y-12">
            <div className="relative">
              <Quote className="w-16 h-16 text-patagonia-red/20 absolute -top-8 -left-8" />
              <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                "La innovación no ocurre en las oficinas de cristal de las grandes ciudades, sino donde la <span className="text-patagonia-red">naturaleza nos obliga</span> a ser más inteligentes."
              </h2>
            </div>

            <div className="space-y-6 text-xl text-white/70 font-light leading-relaxed max-w-2xl">
              <p>
                PatagoniaCoach nació de una observación simple: el mundo está saturado de tecnología, pero hambriento de propósito. Desde Punta Arenas, <span className="text-white font-normal">digitalizamos negocios</span> integrando marketing de alto impacto e IA para crear ecosistemas que no solo funcionan, sino que dominan mercados.
              </p>
              <p>
                No entregamos soluciones aisladas. Diseñamos la arquitectura digital que permite a su marca evolucionar con agilidad, liderando desde el rincón más remoto para que su impacto no tenga fronteras.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <div className="w-16 h-1 bg-patagonia-red" />
              <div>
                <p className="text-2xl font-bold tracking-wider">FRANCO GALLARDO</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Founder & Chief Ecosystem Architect</p>
              </div>
            </div>
          </div>

          {/* Stats/Badges Column */}
          <div className="md:col-span-4 space-y-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-6 border-white/5 bg-white/[0.02]"
            >
              <Compass className="w-6 h-6 text-patagonia-cyan mb-3" />
              <h4 className="text-sm font-bold mb-1 uppercase tracking-widest text-patagonia-cyan">ADN Austral</h4>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Resiliencia y visión estratégica forjada en el entorno más desafiante del planeta.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-6 border-white/5 bg-white/[0.02]"
            >
              <Globe className="w-6 h-6 text-patagonia-red mb-3" />
              <h4 className="text-sm font-bold mb-1 uppercase tracking-widest text-patagonia-red">Impacto Global</h4>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Digitalización de negocios aplicada a la realidad de su empresa, sin límites geográficos.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-6 border-white/5 bg-white/[0.02] border-l-patagonia-cyan/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-patagonia-cyan animate-pulse" />
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">Marketing Engine</h4>
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Estrategias de crecimiento digital diseñadas para convertir la tecnología en resultados tangibles.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Vision;
