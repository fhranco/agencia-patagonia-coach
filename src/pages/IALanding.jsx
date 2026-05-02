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
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No implementamos herramientas; <span className="text-white font-normal">diseñamos arquitecturas de pensamiento digital</span>. Integramos capacidades cognitivas avanzadas en su ecosistema corporativo para liberar el genio creativo de su equipo.
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
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-heading font-light mb-10">Más allá de la <span className="italic opacity-60 text-white">automatización básica</span>.</h2>
          <p className="text-xl text-patagonia-secondary font-light leading-relaxed">
            En PatagoniaCoach no instalamos simples chatbots. Construimos **activos digitales inteligentes** que aprenden de su negocio, protegen su propiedad intelectual y ejecutan con la precisión que el mercado elite exige.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {[
              {
                icon: Zap,
                title: "Infraestructura Proyectiva",
                desc: "Sistemas que anticipan la demanda. Diseñamos arquitecturas que escalan orgánicamente junto a su volumen de negocio, eliminando cuellos de botella operativos."
              },
              {
                icon: Cpu,
                title: "Agentes Cognitivos 24/7",
                desc: "Nuestros agentes no solo responden; califican, persuaden y cierran oportunidades críticas mientras su equipo se enfoca en la estrategia de alto nivel."
              },
              {
                icon: Code2,
                title: "Privacidad & Poder Local",
                desc: "Implementamos modelos locales y seguros. Sus datos nunca salen de su ecosistema, garantizando una ventaja competitiva privada y soberana."
              }
            ].map((f, i) => (
              <div key={i} className="group p-12 bg-patagonia-surface/20 border border-white/5 rounded-[2.5rem] hover:border-patagonia-gold/10 transition-all duration-700">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:bg-patagonia-gold group-hover:text-black transition-all">
                    <f.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-light text-patagonia-white mb-6">{f.title}</h3>
                <p className="text-patagonia-secondary font-light leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
        </div>
      </section>

      {/* The Protocol Section */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">El Protocolo de Evolución</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Inyectamos <span className="italic text-patagonia-gold">Inteligencia</span> en el ADN de su Marca.</h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                La verdadera transformación no ocurre con herramientas aisladas. Ocurre cuando la **Inteligencia Artificial** se convierte en la columna vertebral de su comunicación, ventas y operaciones.
              </p>
              <p>
                Desde Punta Arenas, hemos perfeccionado un sistema que permite a las empresas de la Patagonia competir en la arena global con la eficiencia de una multinacional tecnológica.
              </p>
            </div>
            
            <ul className="grid grid-cols-2 gap-8 pt-10">
              {[
                "Reducción de Latencia Operativa",
                "Cierre de Leads 24/7",
                "Análisis Predictivo de Mercado",
                "Estructuras de Costo Escalables"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                  <div className="w-1 h-1 bg-patagonia-gold rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full aspect-square relative group">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[3rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-4">
              <img 
                src="/images/ai-core.png" 
                alt="Patagonia AI Neural Core" 
                className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-[3000ms] ease-out"
              />
              {/* Decorative data lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-patagonia-gold to-transparent" />
                <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-patagonia-gold to-transparent" />
                <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-patagonia-gold to-transparent" />
              </div>
            </div>
          </div>
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
