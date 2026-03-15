import { motion } from 'framer-motion';
import { Network, Users, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadCommand from '../components/LeadCommand';
import ServiceMatrix from '../components/ServiceMatrix';

const ConsultingLanding = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Consulting Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-patagonia-red/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Briefcase className="w-4 h-4 text-patagonia-red" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Consultoría Estratégica B2B</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 italic">
            Ingeniería de <span className="text-patagonia-red">Negocios.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            No asesoramos. Re-diseñamos su estructura organizacional y comercial para convertirla en un ecosistema de alto rendimiento impulsado por tecnología e IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="#contacto" className="px-10 py-5 bg-patagonia-red text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(240,20,10,0.3)] flex items-center gap-2">
                Discutir Roadmap Estratégico <ArrowRight className="w-5 h-5" />
             </a>
          </div>
        </div>
      </section>

      {/* The Pillars of Transformation */}
      <section className="py-32 px-6 bg-patagonia-surface/30">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Los Pilares de la <span className="text-patagonia-cyan">Transformación.</span></h2>
                <p className="text-white/40 max-w-xl mx-auto">Estructuramos su crecimiento sobre bases sólidas, no sobre tendencias pasajeras.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: Network,
                        title: "Arquitectura de Ecosistemas",
                        desc: "Diseño de flujos de trabajo donde humanos y tecnología colaboran sin fricciones."
                    },
                    {
                        icon: Users,
                        title: "Cultura Exponencial",
                        desc: "Capacitación profunda en IA y mentalidad para eliminar la resistencia al cambio."
                    },
                    {
                        icon: TrendingUp,
                        title: "Optimización de Rentabilidad",
                        desc: "Análisis de costos operativos y maximización del ROI mediante automatización inteligente."
                    }
                ].map((pilar, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-10 rounded-3xl bg-black border border-white/5 hover:border-patagonia-red/30 transition-all"
                    >
                        <pilar.icon className="w-12 h-12 text-patagonia-red mb-8" />
                        <h3 className="text-2xl font-bold mb-4 italic">{pilar.title}</h3>
                        <p className="text-white/40 font-light leading-relaxed">{pilar.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <ServiceMatrix />

      {/* Why PatagoniaCoach? */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <h2 className="text-5xl font-bold italic">¿Por qué <br /><span className="text-patagonia-red">PatagoniaCoach?</span></h2>
                <div className="space-y-6">
                    {[
                        "Metodología probada en mercados complejos.",
                        "Enfoque en resultados netos, no solo en procesos.",
                        "Expertos en el puente entre lo tradicional y lo digital.",
                        "Acompañamiento senior en cada etapa del roadmap."
                    ].map((text, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <CheckCircle2 className="w-6 h-6 text-patagonia-cyan flex-shrink-0" />
                            <p className="text-lg text-white/70 font-light">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white/5 rounded-card p-12 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                    <ShieldCheck className="w-32 h-32" />
                </div>
                <p className="text-patagonia-cyan font-mono text-xs tracking-widest mb-4 uppercase">Status: Elite Consulting</p>
                <p className="text-3xl font-light leading-relaxed mb-8 italic">
                    "La diferencia entre una empresa que sobrevive y una que domina el mercado es la calidad de su arquitectura organizacional."
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-patagonia-red rounded-full" />
                    <div>
                        <p className="font-bold">Franco Gallardo</p>
                        <p className="text-[10px] uppercase tracking-widest text-white/40">Head of Strategy</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <LeadCommand />

      <Footer />
    </div>
  );
};

export default ConsultingLanding;
