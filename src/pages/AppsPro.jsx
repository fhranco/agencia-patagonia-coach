import { motion } from 'framer-motion';
import { Gamepad2, Code, Zap, ArrowRight, ShieldCheck, Cpu, Smartphone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const AppsPro = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/aplicaciones-web-pro/#service",
    "name": "Aplicaciones Web & Sistemas Pro",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Región de Magallanes" },
    "description": "Desarrollo de herramientas interactivas, sistemas de gestión y experiencias gamificadas para empresas en la Patagonia."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Aplicaciones Web Pro en Magallanes | PatagoniaCoach: Sistemas a Medida"
        description="Soluciones interactivas para su negocio. Desarrollo de aplicaciones web, sistemas de gestión y PWAs en Punta Arenas optimizadas para rendimiento."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="High-Performance Apps" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Cpu className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Ingeniería de Software de Alto Impacto</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Sistemas <span className="text-patagonia-gold italic">Vivos.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No desarrollamos software estático; <span className="text-white font-normal">creamos ecosistemas interactivos</span> que resuelven cuellos de botella operativos. Aplicaciones Web Pro diseñadas para la logística, el comercio y la industria de Magallanes.
          </p>
          
          <div className="flex justify-center">
             <a href="#apps" className="btn-primary min-w-[300px]">
                Explorar Soluciones Interactivas
             </a>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="apps" className="py-40 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Smartphone,
                title: "PWAs de Alto Vuelo",
                desc: "Aplicaciones web progresivas que funcionan como apps nativas pero sin fricción de descarga. Ideales para sistemas de turnos, catálogos interactivos y herramientas de campo."
              },
              {
                icon: Gamepad2,
                title: "Gamificación & Tótems",
                desc: "Experiencias interactivas para eventos, museos y puntos de venta en la Zona Franca. Convertimos la información en una experiencia de inmersión lúdica y memorable."
              },
              {
                icon: Zap,
                title: "Sistemas de Gestión",
                desc: "Desarrollamos herramientas a medida para optimizar su logística sureña. Desde paneles de control internos hasta plataformas de comunicación con clientes en tiempo real."
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

      {/* Visual App Showcase */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 w-full aspect-square relative group">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[4rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-8">
              <img 
                src="/images/apps-pro.png" 
                alt="Web Apps Pro Mastery Visual" 
                className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-[6000ms] ease-out opacity-90"
              />
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">La Evolución del Software</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Potencia en <span className="italic text-patagonia-gold">Cada Píxel.</span></h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                Un sistema a medida es la mayor ventaja competitiva que una organización puede poseer. Diseñamos aplicaciones que se integran con sus procesos actuales para acelerar el crecimiento.
              </p>
              <p>
                Utilizamos tecnologías de última generación para asegurar que su inversión sea escalable, segura y capaz de manejar altos volúmenes de datos sin comprometer la velocidad.
              </p>
            </div>
            
            <div className="pt-10">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                <Code className="w-10 h-10 text-patagonia-gold" />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest">CÓDIGO DE AUTOR</h4>
                  <p className="text-[10px] text-patagonia-secondary uppercase tracking-wider">Arquitectura robusta y escalable.</p>
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

export default AppsPro;
