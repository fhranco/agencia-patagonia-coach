import { motion } from 'framer-motion';
import { Network, Users, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadCommand from '../components/LeadCommand';
import ServiceMatrix from '../components/ServiceMatrix';

const ConsultingLanding = () => {
  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <Navbar />
      
      {/* Consulting Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="Consulting Luxury" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-patagonia-black/80 to-patagonia-black" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-patagonia-gold/20 mb-12"
          >
            <Briefcase className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Ingeniería de Ecosistemas Exponenciales</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-12 leading-[0.85] text-balance">
            Estrategia de <span className="text-patagonia-gold italic">Potencia.</span> <br />
            <span className="opacity-40">Escalamiento Real.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-patagonia-secondary max-w-3xl mx-auto font-light leading-relaxed mb-16 mix-blend-plus-lighter">
            Auditamos la arquitectura de su organización para detectar fugas de capital y diseñamos el motor de automatización que duplicará su capacidad operativa sin incrementar su estructura.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
             <a href="#contacto" className="btn-primary min-w-[280px]">
                Solicitar Auditoría de Ecosistema
             </a>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-40 px-6 bg-patagonia-surface/10">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 items-center">
                <div className="space-y-12">
                    <h2 className="text-5xl md:text-6xl font-heading font-light leading-[1.1]">¿Su organización se siente <span className="text-patagonia-white/20 italic">estancada?</span></h2>
                    <ul className="space-y-8">
                        {[
                            "Dependencia crítica de procesos manuales y personas clave.",
                            "Datos fragmentados que impiden una toma de decisiones veloz.",
                            "Inversión tecnológica sin un retorno de inversión (ROI) claro.",
                            "Ausencia de un protocolo de integración de IA coherente."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-6 items-start">
                                <CheckCircle2 className="w-6 h-6 text-patagonia-gold/40 flex-shrink-0 mt-1" />
                                <p className="text-xl text-patagonia-secondary font-light leading-relaxed">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-patagonia-gold/5 border border-patagonia-gold/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden backdrop-blur-3xl">
                    <h3 className="text-3xl font-heading font-light mb-8 text-patagonia-gold italic">Ingeniería de Ecosistemas</h3>
                    <p className="text-patagonia-white/70 leading-relaxed mb-10 text-lg font-light">
                        No somos consultores de escritorio; somos arquitectos de ejecución. Implementamos sistemas que sincronizan sus operaciones con automatización autónoma, recuperando hasta el 80% del tiempo de su equipo directivo.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-5 p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-patagonia-gold/30 transition-all">
                            <TrendingUp className="w-6 h-6 text-patagonia-gold" />
                            <span className="font-semibold tracking-tight text-patagonia-white">+40% Eficiencia Operativa Auditada</span>
                        </div>
                        <div className="flex items-center gap-5 p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-patagonia-gold/30 transition-all">
                            <Network className="w-6 h-6 text-patagonia-gold" />
                            <span className="font-semibold tracking-tight text-patagonia-white">Arquitectura Digital Conectada 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* The Roadmap */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32 space-y-4">
                <h2 className="text-5xl md:text-[5.5rem] font-heading font-light tracking-[-0.04em]">Su Ruta de <span className="text-patagonia-gold italic">Maestría Corporativa.</span></h2>
                <p className="text-patagonia-secondary text-xl font-light">Un protocolo riguroso diseñado para la victoria en el mercado digital.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    {
                        step: "ESTADÍO 01",
                        title: "Auditoría de Origen",
                        desc: "Identificación quirúrgica de fricciones operativas y fugas de capital en su flujo actual."
                    },
                    {
                        step: "ESTADÍO 02",
                        title: "Diseño de Arquitectura",
                        desc: "Diseño del plano maestro: El ecosistema donde la IA y el talento humano convergen."
                    },
                    {
                        step: "ESTADÍO 03",
                        title: "Ejecución de Poder",
                        desc: "Implementación asistida y monitoreo de ROI hasta consolidar los nuevos estándares de rentabilidad."
                    }
                ].map((item, i) => (
                    <div key={i} className="group relative p-14 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-patagonia-gold/30 transition-all duration-700">
                        <span className="text-[10px] font-black text-patagonia-gold tracking-[0.5em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">{item.step}</span>
                        <h3 className="text-3xl font-heading font-light my-10 text-patagonia-white">{item.title}</h3>
                        <p className="text-patagonia-secondary font-light text-lg leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-40 px-6 bg-patagonia-gold">
          <div className="max-w-5xl mx-auto text-center space-y-12">
              <h2 className="text-5xl md:text-[5.5rem] font-heading font-light text-patagonia-black leading-[1] tracking-[-0.05em]">¿Preparado para su <br/><span className="italic font-normal">evolución total?</span></h2>
              <p className="text-2xl text-patagonia-black/70 font-medium max-w-3xl mx-auto leading-relaxed">Solo aceptamos tres nuevos mandatos de consultoría por trimestre para asegurar la excelencia en cada implementación.</p>
              <div className="pt-10">
                <a href="#contacto" className="inline-block bg-patagonia-black text-patagonia-gold px-16 py-8 rounded-full font-black text-xs tracking-[0.4em] hover:scale-105 transition-all shadow-2xl">
                    RESERVAR MI AUDITORÍA DE ESTATUS
                </a>
              </div>
          </div>
      </section>

      <LeadCommand />

      <Footer />
    </div>
  );
};

export default ConsultingLanding;
