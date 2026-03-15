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
                PatagoniaCoach nació de una observación simple: el mundo está saturado de tecnología, pero hambriento de propósito. Desde Punta Arenas, no solo integramos IA; diseñamos el ecosistema donde su organización puede evolucionar.
              </p>
              <p>
                No vendemos herramientas. Somos el puente entre la complejidad técnica y la ejecución magistral. Lideramos desde el fin del mundo para que su impacto sea global.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <div className="w-16 h-1 bg-patagonia-red" />
              <div>
                <p className="text-2xl font-bold tracking-wider">FRANCO GALLARDO</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Founder & Lead Ecosystem Architect</p>
              </div>
            </div>
          </div>

          {/* Stats/Badges Column */}
          <div className="md:col-span-4 space-y-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-8 border-white/5 bg-white/[0.02]"
            >
              <Compass className="w-8 h-8 text-patagonia-cyan mb-4" />
              <h4 className="text-lg font-bold mb-2 uppercase tracking-widest text-patagonia-cyan">ADN Austral</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                Resiliencia y visión estratégica forjada en el entorno más desafiante del planeta.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-8 border-white/5 bg-white/[0.02]"
            >
              <Globe className="w-8 h-8 text-patagonia-red mb-4" />
              <h4 className="text-lg font-bold mb-2 uppercase tracking-widest text-patagonia-red">Impacto Global</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                Metodologías de clase mundial aplicadas a la realidad de su empresa, sin fronteras.
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
