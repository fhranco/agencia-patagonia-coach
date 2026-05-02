import { motion } from 'framer-motion';
import { Network, Users, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, Briefcase, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const ConsultingLanding = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/consultoria-transformacion-digital/#service",
    "name": "Consultoría en Transformación Digital",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Magallanes, Chile" },
    "description": "Acompañamiento táctico para la toma de decisiones críticas en empresas de la Patagonia. Transformación cultural y operativa impulsada por IA."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Consultoría Estratégica en Magallanes | PatagoniaCoach"
        description="Ingeniería de ecosistemas para empresas líderes. Consultoría táctica en Punta Arenas enfocada en automatización, ROI y escalamiento B2B."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="Strategic Consulting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Briefcase className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Ingeniería de Ecosistemas Exponenciales</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Estrategia de <span className="text-patagonia-gold italic">Potencia.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No somos consultores de escritorio; <span className="text-white font-normal">somos arquitectos de ejecución estratégica</span>. Auditamos la arquitectura de su organización para detectar fugas de capital y diseñar su futuro comercial.
          </p>
          
          <div className="flex justify-center">
             <a href="#protocol" className="btn-primary min-w-[300px]">
                Solicitar Auditoría de Ecosistema
             </a>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="protocol" className="py-40 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: BarChart,
                title: "Auditoría de Origen",
                desc: "Identificación quirúrgica de fricciones operativas y fugas de capital. Analizamos su estructura de costos y procesos en Magallanes para encontrar eficiencia oculta."
              },
              {
                icon: Network,
                title: "Diseño de Arquitectura",
                desc: "Diseño del plano maestro digital. El ecosistema donde la IA y su talento humano convergen para maximizar la capacidad operativa de su organización."
              },
              {
                icon: TrendingUp,
                title: "Escalamiento Táctico",
                desc: "Implementación asistida y monitoreo de ROI. Aseguramos que cada transformación tecnológica se traduzca en una ventaja competitiva real y medible."
              }
            ].map((f, i) => (
              <div key={i} className="group p-12 bg-patagonia-surface/20 border border-white/5 rounded-[3rem] hover:border-patagonia-gold/20 transition-all duration-700">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:bg-patagonia-gold group-hover:text-black transition-all">
                    <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-light text-patagonia-white mb-6">{f.title}</h3>
                <p className="text-patagonia-secondary font-light leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Visual Strategic Showcase */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 w-full aspect-square relative group">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[4rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-6">
              <img 
                src="/images/strategy-core.png" 
                alt="Strategic Business Ecosystem Model" 
                className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-[6000ms] ease-out opacity-90"
              />
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">El Motor del Crecimiento</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Evolución <span className="italic text-patagonia-gold">Estructural</span> Inevitable.</h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                Para las empresas de logística, turismo e industria en Magallanes, la transición digital no es un cambio de software; es un cambio de modelo de pensamiento.
              </p>
              <p>
                Acompañamos a directores y dueños de negocio en la toma de decisiones críticas para automatizar lo operativo y liberar el genio estratégico de sus equipos.
              </p>
            </div>
            
            <div className="pt-10">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                <ShieldCheck className="w-10 h-10 text-patagonia-gold" />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest">SEGURIDAD TÁCTICA</h4>
                  <p className="text-[10px] text-patagonia-secondary uppercase tracking-wider">Protocolos de transición sin fricciones.</p>
                </div>
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

export default ConsultingLanding;
