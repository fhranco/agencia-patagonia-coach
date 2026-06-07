import { motion } from 'framer-motion';
import { Zap, Rocket, Target, ShieldCheck, Sparkles, Users, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const AcademiaLanding = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/academia/#service",
    "name": "Academia PatagoniaCoach",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Región de Magallanes y de la Antártica Chilena" },
    "description": "Capacitación técnica de alto impacto. Talleres, Bootcamps e Implementaciones Corporativas de IA y Marketing."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Academia PatagoniaCoach | Formación Práctica Digital"
        description="Capacitación técnica de alto impacto en Magallanes. Talleres, Bootcamps e Implementaciones Corporativas de IA y Marketing Digital."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="/patagonia_luxury_hero.webp" alt="Academia PatagoniaCoach" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex justify-center items-center gap-3 mb-8 text-[9px] uppercase tracking-[0.3em] font-black text-white/40">
             <a href="/" className="hover:text-patagonia-gold transition-colors">Inicio</a>
             <span className="opacity-50">/</span>
             <a href="/#servicios" className="hover:text-patagonia-gold transition-colors">Servicios</a>
             <span className="opacity-50">/</span>
             <span className="text-patagonia-gold">Academia</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Formación Ejecutiva B2B</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Formación <span className="text-patagonia-gold italic">Práctica.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            Ayudamos a empresas y profesionales de Magallanes a adquirir las capacidades necesarias para <span className="text-white font-normal">liderar en la economía digital</span> a través de protocolos de inmersión técnica y estratégica.
          </p>

          <div className="flex justify-center">
             <a href="#programas" className="btn-primary min-w-[300px]">
                Explorar Programas
             </a>
          </div>
        </div>
      </section>

      {/* Sub-Services Ecosystem */}
      <section id="programas" className="py-32 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Ecosistema Académico</span>
            <h3 className="text-4xl md:text-5xl font-heading font-light mt-6 tracking-tight">¿Cómo podemos entrenar a <span className="italic text-patagonia-gold">su equipo</span>?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: "Talleres Prácticos (Sprouts)",
                desc: "Sesiones intensivas de 2 a 4 horas. Ideales para dominar una herramienta específica (ej. ChatGPT para ventas, Canva Pro) con aplicabilidad inmediata en su negocio."
              },
              {
                icon: Rocket,
                title: "Bootcamps de Inmersión",
                desc: "Programas de 8 a 16 horas diseñados para transformar habilidades. Desde cero hasta nivel avanzado en Inteligencia Artificial, Marketing Digital o Gestión de Redes."
              },
              {
                icon: Users,
                title: "Capacitación In-Company",
                desc: "Llevamos nuestra academia a su empresa. Diseñamos mallas curriculares a medida para alinear a todo su personal con los nuevos estándares de digitalización de su industria."
              },
              {
                icon: Target,
                title: "Mentoring Ejecutivo 1-a-1",
                desc: "Acompañamiento privado para gerentes y líderes de negocio en la región. Sesiones estratégicas para auditar procesos y tomar decisiones tecnológicas de alto nivel."
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
              <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Metodología de Transferencia</span>
              <h3 className="text-4xl md:text-5xl font-heading font-light tracking-tight">Arquitectura del <span className="italic">Aprendizaje</span>.</h3>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                El modelo educativo tradicional está obsoleto para la velocidad de la economía digital. No dictamos "clases magistrales"; ejecutamos protocolos de transferencia tecnológica donde la teoría representa solo el 20% del programa.
              </p>
              <div className="space-y-10 mt-12">
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">1. Aprendizaje Basado en Proyectos (PBL)</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Sus equipos no aprenden con ejemplos genéricos. Cada herramienta enseñada se aplica directamente sobre los procesos y desafíos reales de su propia empresa durante la sesión.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">2. Estandarización de Procesos (SOPs)</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Nuestras capacitaciones terminan con la creación de Manuales Operativos (SOPs). Documentamos los Prompts y los flujos de trabajo para que el conocimiento quede en la empresa, no solo en la mente del empleado.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">3. Actualización Algorítmica Continua</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    El software cambia cada mes. Mantenemos una relación de consultoría post-capacitación para asegurar que sus equipos estén utilizando siempre las versiones más eficientes de la tecnología.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-patagonia-surface/20 border border-white/5 rounded-[3rem] p-12 lg:sticky lg:top-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-patagonia-gold/5 to-transparent pointer-events-none" />
              <h4 className="text-lg font-bold text-white mb-10 tracking-[0.4em] uppercase text-[10px] relative z-10">Métricas de Adopción</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">ROI Educativo</div>
                  <p className="text-sm text-patagonia-secondary font-light">Medimos el éxito por horas ahorradas y procesos automatizados post-capacitación.</p>
                </div>
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Retención</div>
                  <p className="text-sm text-patagonia-secondary font-light">Metodología 80/20 (Práctica/Teoría) que garantiza una curva de aprendizaje ultra-rápida.</p>
                </div>
                <div className="pb-8">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Autonomía</div>
                  <p className="text-sm text-patagonia-secondary font-light">Equipos capaces de resolver problemas técnicos sin depender de la agencia a futuro.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] sm:text-xs text-white/40 overflow-x-auto relative z-10">
                <code>
                  {"{"}<br/>
                  &nbsp;&nbsp;"Programa": "Integración IA Corporativa",<br/>
                  &nbsp;&nbsp;"Módulo_1": "Fundamentos y Seguridad",<br/>
                  &nbsp;&nbsp;"Módulo_2": "Prompt Engineering Avanzado",<br/>
                  &nbsp;&nbsp;"Módulo_3": "Automatización de Tareas"<br/>
                  {"}"}
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal */}
      <section className="py-24 px-6 bg-patagonia-surface/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
           <ShieldCheck className="w-16 h-16 text-patagonia-gold flex-shrink-0" />
           <div className="space-y-2">
              <h4 className="text-xl font-heading font-light text-white">Certificación de Maestría Digital</h4>
              <p className="text-patagonia-secondary text-sm font-light">Todos nuestros programas incluyen protocolos de validación técnica que aseguran que su equipo pueda ejecutar lo aprendido desde el primer día en Magallanes.</p>
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

export default AcademiaLanding;
