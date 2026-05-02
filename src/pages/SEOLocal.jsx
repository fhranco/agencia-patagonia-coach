import { motion } from 'framer-motion';
import { MapPin, Search, Target, TrendingUp, ArrowRight, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const SEOLocal = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/seo-local-punta-arenas/#service",
    "name": "SEO Local Magallanes",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Punta Arenas, Puerto Natales, Tierra del Fuego" },
    "description": "Dominio estratégico en Google para empresas de Magallanes. Posicionamos su marca donde sus clientes regionales están buscando."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="SEO Local en Punta Arenas | PatagoniaCoach: Dominio del Mercado Regional"
        description="Capture la demanda de Magallanes. Expertos en posicionamiento web y Google Business Profile para empresas líderes en Punta Arenas y la Patagonia."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="Local SEO Mastery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-patagonia-gold/20 mb-12 bg-patagonia-gold/5 backdrop-blur-md"
          >
            <MapPin className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Autoridad Territorial Inapelable</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Dominio <span className="text-patagonia-gold italic">Regional.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No basta con estar en internet; <span className="text-white font-normal">debe ser el dueño de su territorio digital</span>. Posicionamos su empresa de Magallanes en la cima de los resultados locales para capturar la demanda de alta intención.
          </p>
          
          <div className="flex justify-center">
             <a href="#territory" className="btn-primary min-w-[300px]">
                Auditar Presencia Local
             </a>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="territory" className="py-40 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Search,
                title: "Google Business Mastery",
                desc: "Optimizamos su perfil de negocio para dominar el 'Local Pack'. Aseguramos que su empresa sea la primera opción cuando se busca logística, turismo o servicios en Punta Arenas."
              },
              {
                icon: Target,
                title: "Segmentación Táctica",
                desc: "Estrategias de palabras clave centradas en la intención de búsqueda magallánica. No buscamos tráfico; buscamos clientes locales listos para contratar."
              },
              {
                icon: TrendingUp,
                title: "Autoridad Territorial",
                desc: "Construimos relevancia local mediante contenido estratégico que conecta su marca con la identidad y las necesidades de la Región de Magallanes."
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

      {/* Visual Map Showcase */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 space-y-12 order-2 md:order-1">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">El Mapa del Valor</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Su Negocio, <span className="italic text-patagonia-gold">Ubicado</span> en la Cima.</h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                En una región con una identidad tan fuerte como Magallanes, su presencia digital debe respirar localismo y profesionalismo a partes iguales.
              </p>
              <p>
                Desde la Zona Franca hasta los fiordos de Natales, diseñamos la visibilidad que las empresas líderes necesitan para consolidar su mercado y expandirse.
              </p>
            </div>
            
            <div className="pt-10">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                <BarChart3 className="w-10 h-10 text-patagonia-gold" />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest">ROI LOCAL</h4>
                  <p className="text-[10px] text-patagonia-secondary uppercase tracking-wider">Métricas reales de llamadas y visitas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full aspect-square relative group order-1 md:order-2">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[4rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-4">
              <img 
                src="/images/seo-map.png" 
                alt="Digital Map of Magallanes and Punta Arenas" 
                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[6000ms] ease-out opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
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

export default SEOLocal;
