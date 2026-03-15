import { motion } from 'framer-motion';
import { Compass, Globe } from 'lucide-react';

const Vision = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-24">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-patagonia-red/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-patagonia-cyan/5 blur-[140px] rounded-full" />
        
        {/* Large Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <h2 className="text-[20vw] font-bold text-white/[0.02] leading-none tracking-tighter">
            MANIFESTO
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          
          {/* Section 1: The Philosophy (Humanizing) */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-patagonia-red font-heading tracking-[0.4em] text-xs uppercase block font-bold">La Visión del Fundador</span>
              <h3 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                "No digitalizo procesos, <span className="text-patagonia-red">evoluciono resultados."</span>
              </h3>
              <div className="w-24 h-1 bg-patagonia-red/50" />
            </motion.div>

            <div className="space-y-8 text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-xl">
              <p>
                He visto a cientos de empresas perderse en el "ruido digital". Herramientas sin alma que solo generan complejidad y gasto sin retorno.
              </p>
              <p className="text-white/80">
                En <span className="text-patagonia-cyan">PatagoniaCoach</span>, mi compromiso es personal: conectar la potencia de la Inteligencia Artificial con una <span className="text-white font-normal underline decoration-patagonia-red/50 decoration-2 underline-offset-4">estrategia de marketing de alto impacto</span> y una digitalización de negocios impecable.
              </p>
              <p>
                Diseñamos ecosistemas donde la tecnología trabaja para usted, y no al revés. Lideramos desde el fin del mundo porque aquí aprendimos que la resiliencia es la única ventaja competitiva que no se puede automatizar.
              </p>
            </div>
          </div>

          {/* Section 2: Authority & Signature */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card p-8 border-white/5 bg-white/[0.03] backdrop-blur-3xl group hover:border-patagonia-cyan/30 transition-all"
              >
                <Globe className="w-8 h-8 text-patagonia-cyan mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold mb-2 uppercase tracking-widest text-patagonia-cyan">Escale Global</h4>
                <p className="text-sm text-white/40 font-light">
                  Llevamos su negocio regional al escenario mundial mediante automatización y marketing de élite.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card p-8 border-white/5 bg-white/[0.03] backdrop-blur-3xl group hover:border-patagonia-red/30 transition-all"
              >
                <Compass className="w-8 h-8 text-patagonia-red mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold mb-2 uppercase tracking-widest text-patagonia-red">Norte Estratégico</h4>
                <p className="text-sm text-white/40 font-light">
                  Cada línea de código y cada campaña tiene un solo objetivo: aumentar su rentabilidad y autoridad de mercado.
                </p>
              </motion.div>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-patagonia-red/30 p-1 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-patagonia-red to-patagonia-cyan opacity-20 animate-pulse" />
                    <span className="text-2xl font-bold text-white relative z-10">FG</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold tracking-tighter uppercase italic">Franco Gallardo</p>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">Founder & Chief Ecosystem Architect</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[10px] uppercase tracking-widest font-heading text-white/80">Consultoría VIP Disponible</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-patagonia-red/50 to-transparent shadow-[0_0_20px_rgba(240,20,10,0.5)]" />
    </section>
  );
};

export default Vision;
