import { motion } from 'framer-motion';
import { Bot, Zap, Cpu, Code2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';

const IALanding = () => {
  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <Navbar />
      
      {/* AI Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Background image med/high opacity gradient */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="AI Luxury Experience" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-patagonia-black/80 to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-patagonia-gold/20 mb-12"
          >
            <Bot className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black pointer-events-none">Ecosistemas de Inteligencia Superior</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.9] text-balance">
            Evolución <span className="text-patagonia-gold italic">Inteligente.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-patagonia-secondary max-w-3xl mx-auto font-light leading-relaxed mb-16 mix-blend-plus-lighter">
            No implementamos herramientas; diseñamos arquitecturas de pensamiento digital. Integramos capacidades cognitivas avanzadas en su ecosistema corporativo para liberar el genio creativo de su equipo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
             <a href="#diagnostic" className="btn-primary min-w-[280px]">
                Iniciar Protocolo IA 
             </a>
          </div>
        </div>
      </section>

      {/* AI Deep Features */}
      <section className="py-40 px-6 bg-patagonia-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {[
              {
                icon: Zap,
                title: "Integración Táctica",
                desc: "Arquitectura sin fisuras. Conectamos IA con su CRM y flujos operativos críticos para una ejecución ininterrumpida."
              },
              {
                icon: Cpu,
                title: "Agentes Autónomos",
                desc: "Sistemas de alta fidelidad que operan 24/7, calificando leads y ejecutando tareas de alta complejidad con precisión de micro-segundo."
              },
              {
                icon: Code2,
                title: "Entrenamiento Elite",
                desc: "Modelos propietarios entrenados exclusivamente con el ADN y la propiedad intelectual de su marca. IA con identidad."
              }
            ].map((f, i) => (
              <div key={i} className="group p-12 bg-patagonia-surface/30 border border-white/5 rounded-[2.5rem] hover:border-patagonia-gold/30 transition-all duration-700">
                <div className="w-20 h-20 bg-patagonia-gold/10 rounded-2xl flex items-center justify-center mb-10 border border-patagonia-gold/20 group-hover:scale-110 transition-transform">
                    <f.icon className="w-10 h-10 text-patagonia-gold" />
                </div>
                <h3 className="text-3xl font-heading font-light text-patagonia-white mb-6">{f.title}</h3>
                <p className="text-patagonia-secondary font-light leading-relaxed text-lg">{f.desc}</p>
              </div>
            ))}
        </div>
      </section>

      <div id="diagnostic">
        <DigitalDiagnostic />
      </div>
      <LeadCommand />

      <Footer />
    </div>
  );
};

export default IALanding;
