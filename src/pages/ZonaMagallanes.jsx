import { motion } from 'framer-motion';
import { Globe, ShieldCheck, ArrowRight, Zap, Anchor, Mountain, Cpu, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';
import { localBusinessSchema, ZONE_DATA } from '../seo/schemas';

const ZonaMagallanes = () => {
  const data = ZONE_DATA['magallanes'];
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://agenciapatagoniacoach.cl/zonas/magallanes/#webpage",
    "name": "Dominio Digital Región de Magallanes | PatagoniaCoach",
    "description": "Liderazgo tecnológico y estratégico en la Región de Magallanes y de la Antártica Chilena. Conectamos la identidad austral con el mercado digital global.",
    "publisher": { "@id": "https://agenciapatagoniacoach.cl/#organization" }
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Marketing & Sistemas en Magallanes y Antártica | PatagoniaCoach"
        description="Agencia de transformación digital líder en la Región de Magallanes. Sistemas inteligentes para turismo, industria, logística y academia austral."
        schema={schema}
        schemas={[localBusinessSchema(data.city, data.region, data.lat, data.lng)]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="/patagonia_luxury_hero.webp" alt="Magallanes Region Gateway" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Globe className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Autoridad Regional Unificada</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Magallanes <span className="text-patagonia-gold italic">Global.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No somos solo una agencia de ciudad; somos el partner tecnológico de la <span className="text-white font-normal">Región de Magallanes y de la Antártica Chilena</span>. Diseñamos ecosistemas digitales que trascienden fronteras geográficas para llevar el valor austral al mundo.
          </p>
          
          <div className="flex justify-center">
             <a href="#territorio" className="btn-primary min-w-[300px]">
                Explorar Nuestra Red Regional
             </a>
          </div>
        </div>
      </section>

      {/* Territorial Grid */}
      <section id="territorio" className="py-40 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Anchor, title: "Punta Arenas", desc: "Hub logístico y comercial. Sistemas para el corazón económico de la región." },
                { icon: Mountain, title: "Puerto Natales", desc: "Excelencia en turismo de lujo y servicios para Torres del Paine." },
                { icon: Zap, title: "Tierra del Fuego", desc: "Soberanía industrial y turismo de intereses especiales de alto valor." },
                { icon: ShieldCheck, title: "Antártica", desc: "Visión estratégica para la proyección científica y logística polar." }
              ].map((f, i) => (
                <div key={i} className="group p-10 bg-patagonia-surface/10 border border-white/5 rounded-[2.5rem] hover:border-patagonia-gold/20 transition-all duration-700">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-patagonia-gold group-hover:text-black transition-all">
                      <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-light text-patagonia-white mb-4">{f.title}</h3>
                  <p className="text-patagonia-secondary font-light leading-relaxed text-xs">{f.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Visual Regional Authority */}
      <section className="py-40 px-6 bg-patagonia-surface/5 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-24">
          <div className="text-center space-y-8 max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Ecosistema Integrado</span>
            <h2 className="text-5xl md:text-8xl font-heading font-light tracking-tight leading-[0.9]">Arquitectura Digital para un <br/><span className="italic text-patagonia-gold">Continente Digital.</span></h2>
          </div>

          <div className="w-full max-w-5xl aspect-square relative group rounded-[4rem] overflow-hidden border border-white/5 bg-black/60 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-patagonia-gold/5 blur-[120px] rounded-full group-hover:bg-patagonia-gold/10 transition-all duration-1000" />
            <img 
              src="/images/magallanes-authority.webp" 
              alt="Unified Magallanes Region Strategic Map" 
              className="w-full h-full object-contain p-8 opacity-90 scale-100 group-hover:scale-105 transition-transform duration-[12000ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-patagonia-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="grid md:grid-cols-3 gap-16 max-w-5xl">
            <div className="space-y-4">
              <h4 className="text-patagonia-gold font-heading text-lg">Identidad Austral</h4>
              <p className="text-sm text-patagonia-secondary font-light leading-relaxed">Entendemos el ADN de Magallanes. No aplicamos recetas genéricas; creamos soluciones que respetan y potencian la cultura local.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-patagonia-gold font-heading text-lg">Escalabilidad Global</h4>
              <p className="text-sm text-patagonia-secondary font-light leading-relaxed">Preparamos a las empresas locales para competir en mercados globales, con estándares de diseño y velocidad internacionales.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-patagonia-gold font-heading text-lg">Soberanía Tecnológica</h4>
              <p className="text-sm text-patagonia-secondary font-light leading-relaxed">Desarrollamos infraestructura resiliente, capaz de operar en los entornos más desafiantes del planeta.</p>
            </div>
          </div>
        </div>
      </section>

      <DigitalDiagnostic />
      <LeadCommand />

      <Footer />
    </div>
  );
};

export default ZonaMagallanes;
