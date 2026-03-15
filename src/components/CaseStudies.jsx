import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, ExternalLink } from 'lucide-react';

const cases = [
  {
    client: "Toyota Coyhaique",
    category: "AI Chat Integration",
    title: "Automatización de Ventas en la Región de Aysén",
    description: "Implementación de un ecosistema de IA para la captación y cualificación de leads, transformando consultas digitales en oportunidades reales de venta para la comunidad automotriz.",
    metrics: [
      { label: "Conversión", value: "+40%", icon: TrendingUp },
      { label: "Leads Generados", value: "Constant", icon: Users },
      { label: "Tiempo Respuesta", value: "Instant", icon: Zap }
    ],
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000", // Symbolic high-quality car image
    color: "bg-patagonia-red"
  },
  {
    client: "Zona Austral",
    category: "Corporate Training & IA Transfer",
    title: "Evolución Digital y Transferencia de Capacidades",
    description: "Un proceso de transformación en dos etapas: Capacitación avanzada de equipos de marketing (2024) y transferencia técnica para la implementación de IA en flujos de trabajo operativos (2025).",
    metrics: [
      { label: "Equipos", value: "Marketing", icon: Users },
      { label: "Fase 1", value: "Training", icon: Zap },
      { label: "Fase 2", value: "IA Setup", icon: TrendingUp }
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000", // Professional office/training setting
    color: "bg-patagonia-cyan text-black"
  }
];

const CaseStudies = () => {
  return (
    <section className="section-container bg-patagonia-void relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-patagonia-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-patagonia-cyan font-heading tracking-[0.4em] text-xs uppercase block mb-4"
          >
            Ecosistemas Entregados
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Casos de <span className="text-white/20">Éxito.</span>
          </motion.h2>
        </div>

        <div className="grid gap-12">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold ${item.color} text-white`}>
                        {item.category}
                      </span>
                      <span className="text-white/30 text-xs font-heading font-bold uppercase tracking-widest">{item.client}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-patagonia-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white/50 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/5">
                    {item.metrics.map((metric, i) => (
                      <div key={i} className="space-y-1">
                        <metric.icon className="w-4 h-4 text-patagonia-cyan mb-2" />
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className="text-[10px] uppercase tracking-widest text-white/30">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="relative h-[400px] lg:h-auto overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.client}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-patagonia-void via-patagonia-void/50 to-transparent lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-patagonia-void to-transparent lg:hidden block" />
                  
                  {/* Subtle Brand Overlay */}
                  <div className="absolute bottom-8 right-8 flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
