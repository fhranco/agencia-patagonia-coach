import { motion } from 'framer-motion';
import { Target, MessageSquare, ShieldCheck, Zap, ArrowRight, Share2, Globe, BarChart3, Instagram, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const MarketingLanding = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/comunicacion-digital/#service",
    "name": "Comunicación Digital Estratégica",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Magallanes, Chile" },
    "description": "Narrativas de autoridad para marcas líderes en la Patagonia. Gestión estratégica de canales digitales con enfoque en ROI y reputación corporativa."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Comunicación Digital & RRSS en Magallanes | PatagoniaCoach"
        description="Transformamos su presencia digital en un activo de autoridad. Estrategias de comunicación para empresas de logística, turismo y servicios en la Patagonia."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="High-End Communication" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Share2 className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Arquitectura de Influencia B2B</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Narrativas de <span className="text-patagonia-gold italic">Maestría.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No gestionamos perfiles; <span className="text-white font-normal">construimos legados de autoridad digital</span>. Diseñamos la comunicación estratégica de las marcas que definen el futuro de la Patagonia.
          </p>
          
          <div className="flex justify-center">
             <a href="#narrative" className="btn-primary min-w-[300px]">
                Solicitar Auditoría Narrativa
             </a>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="narrative" className="py-40 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: MessageSquare,
                title: "Storytelling de Identidad",
                desc: "Extraemos el ADN de su marca para narrar su evolución. Creamos historias que resuenan con la resiliencia y el carácter único de Magallanes."
              },
              {
                icon: Target,
                title: "Gestión de Influencia",
                desc: "Diseñamos ecosistemas de contenido en LinkedIn, Instagram y canales propios que posicionan a sus líderes como referentes indiscutidos de su industria."
              },
              {
                icon: BarChart3,
                title: "Métricas de Capital",
                desc: "Auditamos cada impacto bajo un criterio de ROI. No buscamos likes; buscamos construir capital social y confianza transaccional de alto nivel."
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

      {/* Visual Global Showcase */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 w-full aspect-square relative group">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[4rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-6">
              <img 
                src="/images/comm-global.png" 
                alt="Global Digital Communication from the South" 
                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[6000ms] ease-out opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">La Red de Autoridad</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Conectando su <span className="italic text-patagonia-gold">Maestría</span> con el Mundo.</h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                Para las empresas de logística, turismo y servicios industriales de la Patagonia, la comunicación digital no es una opción; es su ventana competitiva al mercado global.
              </p>
              <p>
                Diseñamos estrategias que proyectan la solidez de sus operaciones desde el Estrecho de Magallanes hacia sus clientes en Santiago, América y Europa.
              </p>
            </div>
            
            <div className="pt-10 flex flex-wrap gap-4">
              <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <Instagram className="w-5 h-5 text-patagonia-gold" />
                <span className="text-[10px] font-black tracking-widest">BRAND AUTHORITY</span>
              </div>
              <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <Linkedin className="w-5 h-5 text-patagonia-gold" />
                <span className="text-[10px] font-black tracking-widest">EXECUTIVE REPUTATION</span>
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

export default MarketingLanding;
