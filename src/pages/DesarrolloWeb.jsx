import { motion } from 'framer-motion';
import { Layout, Rocket, Shield, Globe, ArrowRight, Code } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const DesarrolloWeb = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/desarrollo-web/#service",
    "name": "Desarrollo Web de Alto Rendimiento",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Región de Magallanes y de la Antártica Chilena" },
    "description": "Sistemas web de alta fidelidad, optimizados para SEO, velocidad y conversión elite en la Patagonia."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Desarrollo Web Corporativo | PatagoniaCoach: Arquitectura de Alto Rendimiento"
        description="Diseñamos ecosistemas web que proyectan autoridad. Desarrollo web profesional en Punta Arenas optimizado para conversión, SEO y velocidad extrema."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="Luxury Web Development" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Code className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Arquitectura Digital de Autor</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Estructura <span className="text-patagonia-gold italic">Impecable.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No creamos simples sitios web; <span className="text-white font-normal">construimos activos digitales de alto rendimiento</span> que funcionan como herramientas de venta ininterrumpidas. Diseño de inmersión para marcas que lideran.
          </p>
          
          <div className="flex justify-center">
             <a href="#masterplan" className="btn-primary min-w-[300px]">
                Explorar el Masterplan Web
             </a>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="masterplan" className="py-40 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Layout,
                title: "Diseño de Inmersión",
                desc: "Interfaces que proyectan autoridad instantánea. Cada píxel está diseñado para guiar al usuario hacia la conversión con una estética de Lujo Silencioso."
              },
              {
                icon: Rocket,
                title: "Velocidad de Élite",
                desc: "Optimización extrema para los estándares de conectividad de la Patagonia. Carga instantánea que reduce la tasa de rebote y mejora el SEO orgánico."
              },
              {
                icon: Shield,
                title: "Seguridad Soberana",
                desc: "Protocolos de seguridad avanzada y arquitectura robusta. Protegemos su integridad digital y la privacidad de sus clientes en cada interacción."
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

      {/* Visual Showcase Section */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 w-full aspect-[4/5] md:aspect-square relative group">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[3.5rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-6">
              <img 
                src="/images/web-core.png" 
                alt="Digital Architecture Core" 
                className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-[4000ms] ease-out"
              />
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">La Arquitectura del Éxito</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Ecosistemas que <span className="italic text-patagonia-gold">Hablan</span> de su Poder.</h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                Un sitio web corporativo es su declaración de autoridad ante el mundo. En la era de la IA, su presencia digital debe ser impecable, rápida y estratégicamente estructurada.
              </p>
              <p>
                Diseñamos sistemas que se adaptan a cualquier dispositivo, garantizando una experiencia de usuario de primer nivel desde Punta Arenas hasta cualquier rincón del globo.
              </p>
            </div>
            
            <div className="pt-10">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                <Globe className="w-10 h-10 text-patagonia-gold" />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest">VISIÓN GLOBAL</h4>
                  <p className="text-[10px] text-patagonia-secondary uppercase tracking-wider">Arquitectura para mercados internacionales.</p>
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

export default DesarrolloWeb;
