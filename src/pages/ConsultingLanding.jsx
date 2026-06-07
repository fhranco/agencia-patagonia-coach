import { motion } from 'framer-motion';
import { Network, Users, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, Briefcase, BarChart, Search, Compass, BarChart3, FileCode2 } from 'lucide-react';
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
    "areaServed": { "@type": "AdministrativeArea", "name": "Región de Magallanes y de la Antártica Chilena" },
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
          <img src="/patagonia_luxury_hero.webp" alt="Strategic Consulting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Breadcrumbs */}
          <div className="flex justify-center items-center gap-3 mb-8 text-[9px] uppercase tracking-[0.3em] font-black text-white/40">
             <a href="/" className="hover:text-patagonia-gold transition-colors">Inicio</a>
             <span className="opacity-50">/</span>
             <a href="/#servicios" className="hover:text-patagonia-gold transition-colors">Servicios</a>
             <span className="opacity-50">/</span>
             <span className="text-patagonia-gold">Consultoría & Estrategia</span>
          </div>

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

      {/* Sub-Services Ecosystem */}
      <section id="protocol" className="py-32 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Ecosistema Estratégico</span>
            <h3 className="text-4xl md:text-5xl font-heading font-light mt-6 tracking-tight">¿Cómo podemos blindar <span className="italic text-patagonia-gold">su futuro</span>?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Search,
                title: "Auditoría de Infraestructura",
                desc: "Análisis profundo de sus procesos actuales. Detectamos cuellos de botella tecnológicos y fugas de capital operativo para diseñar un punto de partida sólido en la región."
              },
              {
                icon: Compass,
                title: "Plan Maestro de Transformación",
                desc: "Hoja de ruta estratégica a 3 y 5 años. Diseñamos la evolución de su organización integrando IA, automatización y cultura digital de alto rendimiento."
              },
              {
                icon: Briefcase,
                title: "CTO-as-a-Service",
                desc: "Acompañamiento ejecutivo continuo. Actuamos como su brazo tecnológico en la toma de decisiones críticas, selección de proveedores y arquitectura de sistemas."
              },
              {
                icon: BarChart3,
                title: "Ingeniería de ROI Predictivo",
                desc: "No invertimos por moda. Evaluamos cada implementación tecnológica bajo métricas estrictas de retorno de inversión y eficiencia operativa para su empresa."
              }
            ].map((f, i) => (
              <div key={i} className="group p-12 bg-patagonia-surface/20 border border-white/5 rounded-[3rem] hover:border-patagonia-gold/20 transition-all duration-700">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-patagonia-gold group-hover:text-black transition-all">
                    <f.icon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-heading font-light text-patagonia-white mb-4">{f.title}</h4>
                <p className="text-patagonia-secondary font-light leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Technical Content for SEO & LLMs */}
      <section className="py-32 px-6 bg-patagonia-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            <div className="space-y-10">
              <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Protocolo de Intervención</span>
              <h3 className="text-4xl md:text-5xl font-heading font-light tracking-tight">Ingeniería <span className="italic">Estructural</span>.</h3>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                La consultoría tradicional entrega informes; nosotros entregamos ecosistemas funcionando. Nuestro protocolo de intervención asegura que la transición digital sea un proceso controlado y seguro.
              </p>
              <div className="space-y-10 mt-12">
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">1. Diagnóstico de Entropía Digital</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Medimos el nivel de desorden y fragmentación de sus datos. Identificamos sistemas aislados que no se comunican entre sí, generando ineficiencias logísticas y comerciales.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">2. Arquitectura de Sistemas Desacoplados</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Diseñamos infraestructuras modulares (API-First). Esto garantiza que su empresa pueda cambiar cualquier pieza tecnológica en el futuro sin tener que reconstruir todo desde cero.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">3. Gobierno de Datos e IA</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Estandarizamos cómo su empresa captura y procesa información. Creamos la base necesaria para que la IA pueda aprender de sus propios datos corporativos de manera segura.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-patagonia-surface/20 border border-white/5 rounded-[3rem] p-12 lg:sticky lg:top-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-patagonia-gold/5 to-transparent pointer-events-none" />
              <h4 className="text-lg font-bold text-white mb-10 tracking-[0.4em] uppercase text-[10px] relative z-10">Fases de la Transformación</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Fase 1: Auditoría</div>
                  <p className="text-sm text-patagonia-secondary font-light">Inmersión profunda en la operatividad actual (Semanas 1-4).</p>
                </div>
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Fase 2: Diseño</div>
                  <p className="text-sm text-patagonia-secondary font-light">Creación del Blueprint Digital y selección de stack (Semanas 5-8).</p>
                </div>
                <div className="pb-8">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Fase 3: Ejecución</div>
                  <p className="text-sm text-patagonia-secondary font-light">Implementación asistida y validación de impacto (Continuo).</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] sm:text-xs text-white/40 overflow-x-auto relative z-10">
                <code>
                  {"{"}<br/>
                  &nbsp;&nbsp;"roadmap": "Estrategia 2026-2030",<br/>
                  &nbsp;&nbsp;"objetivo": "Automatización del 40% de tareas",<br/>
                  &nbsp;&nbsp;"metodología": "API-First / AI-Native",<br/>
                  &nbsp;&nbsp;"estatus": "Prioridad Alta"<br/>
                  {"}"}
                </code>
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
