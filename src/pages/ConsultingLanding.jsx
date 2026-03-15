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
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Consultoría de Alto Impacto B2B</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 italic">
            Deje de Apagar Incendios. <br />
            <span className="text-patagonia-red">Empiece a Escalar.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Auditamos su arquitectura actual para encontrar fugas de rentabilidad y diseñamos el motor tecnológico que su empresa necesita para duplicar sus resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="#contacto" className="px-10 py-5 bg-patagonia-red text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(240,20,10,0.3)] flex items-center gap-2">
                Solicitar Auditoría de Ecosistema <ArrowRight className="w-5 h-5" />
             </a>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold italic">¿Su empresa se siente <span className="text-white/30">estancada?</span></h2>
                    <ul className="space-y-6">
                        {[
                            "Procesos manuales que dependen de personas clave.",
                            "Datos dispersos en Excels y WhatsApp que no hablan entre sí.",
                            "Marketing que genera clicks pero no ventas reales.",
                            "Falta de una visión clara para integrar la IA en el equipo."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 items-start">
                                <CheckCircle2 className="w-6 h-6 text-patagonia-red flex-shrink-0" />
                                <p className="text-lg text-white/60 font-light">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-patagonia-red/5 border border-patagonia-red/20 rounded-3xl p-12">
                    <h3 className="text-2xl font-bold mb-6 italic text-patagonia-red">Nuestra Solución: Ingeniería de Ecosistemas</h3>
                    <p className="text-white/70 leading-relaxed mb-8">
                        No somos consultores de PowerPoint. Somos ingenieros de negocios. Implementamos soluciones que conectan sus operaciones con automatización real, liberando el 80% del tiempo de su equipo directivo.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <TrendingUp className="w-6 h-6 text-patagonia-cyan" />
                            <span className="font-bold">+40% Eficiencia Operativa Detectada</span>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <Network className="w-6 h-6 text-patagonia-cyan" />
                            <span className="font-bold Arquitectura Conectada 24/7" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* The Roadmap */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Su Roadmap hacia la <span className="text-patagonia-cyan">Maestría Digital.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        step: "01. Auditoría",
                        title: "Diagnóstico Profundo",
                        desc: "Analizamos sus cuellos de botella y herramientas actuales."
                    },
                    {
                        step: "02. Diseño",
                        title: "Arquitectura Custom",
                        desc: "Creamos el plano de su ecosistema: IA + Automatización + Equipo."
                    },
                    {
                        step: "03. Ejecución",
                        title: "Implementación Élite",
                        desc: "Acompañamos el despliegue hasta ver resultados en su flujo de caja."
                    }
                ].map((item, i) => (
                    <div key={i} className="relative p-10 rounded-3xl bg-white/5 border border-white/10">
                        <span className="text-xs font-mono text-patagonia-cyan tracking-widest">{item.step}</span>
                        <h3 className="text-2xl font-bold my-4 italic">{item.title}</h3>
                        <p className="text-white/40 font-light">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-32 px-6 bg-patagonia-red">
          <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold italic text-black">¿Listo para su próximo nivel?</h2>
              <p className="text-xl text-black/70 font-medium">Solo aceptamos 3 nuevos proyectos de consultoría por trimestre para garantizar la máxima calidad.</p>
              <a href="#contacto" className="inline-block bg-black text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all">
                  RESERVAR MI AUDITORÍA AHORA
              </a>
          </div>
      </section>

      <LeadCommand />

      <Footer />
    </div>
  );
};


export default ConsultingLanding;
