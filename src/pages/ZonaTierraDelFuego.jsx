import { motion } from 'framer-motion';
import { Anchor, Zap, Globe, ShieldCheck, ArrowRight, Wind, Fish, Cpu } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';
import { localBusinessSchema, ZONE_DATA } from '../seo/schemas';

const ZonaTierraDelFuego = () => {
  const data = ZONE_DATA['tierra-del-fuego'];
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://agenciapatagoniacoach.cl/zonas/tierra-del-fuego/#webpage",
    "name": "Estrategia Digital Tierra del Fuego | PatagoniaCoach",
    "description": "Sistemas avanzados para la industria, energía y turismo de intereses especiales en Tierra del Fuego. Potenciamos la soberanía productiva de la isla.",
    "publisher": { "@id": "https://agenciapatagoniacoach.cl/#organization" }
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Marketing & Sistemas en Tierra del Fuego | PatagoniaCoach"
        description="Liderazgo digital para la industria y turismo de intereses especiales en Tierra del Fuego. Sistemas para energía, logística y expediciones extremas."
        schema={schema}
        schemas={[localBusinessSchema(data.city, data.region, data.lat, data.lng)]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="Tierra del Fuego Frontier" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Anchor className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Soberanía Digital en la Isla Grande</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            La Frontera del <span className="text-patagonia-gold italic">Valor.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            Tierra del Fuego no es solo territorio; es un motor industrial y turístico de precisión. <span className="text-white font-normal">Diseñamos la arquitectura digital</span> que conecta la energía, la logística y el turismo de intereses especiales con el mercado global.
          </p>
          
          <div className="flex justify-center">
             <a href="#territorio" className="btn-primary min-w-[300px]">
                Explorar Soluciones Territoriales
             </a>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="territorio" className="py-40 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Wind,
                title: "Energía e Industria",
                desc: "Sistemas de gestión y comunicación estratégica para el sector energético e industrial. Potenciamos la visibilidad de proyectos de Hidrógeno Verde y minería energética."
              },
              {
                icon: Fish,
                title: "Turismo de Intereses Especiales",
                desc: "Estrategias de nicho para expediciones extremas, pesca con mosca de clase mundial y turismo científico. Conectamos la exclusividad con el cliente global de alto valor."
              },
              {
                icon: Cpu,
                title: "Logística Transbordadora",
                desc: "Optimización de flujos de información para empresas de transporte y logística insular. Sistemas que aseguran la continuidad operativa en condiciones extremas."
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

      {/* Visual Territorial Showcase */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 w-full aspect-square relative group">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[4rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-4">
              <img 
                src="/images/tdf-authority.png" 
                alt="Tierra del Fuego Semantic Map" 
                className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-[8000ms] ease-out opacity-90"
              />
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Dominio Insular</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Ingeniería para el <span className="italic text-patagonia-gold">Fin del Mundo.</span></h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                Entendemos los desafíos únicos de operar en Tierra del Fuego: el clima, la distancia y la necesidad de una infraestructura digital soberana.
              </p>
              <p>
                Desde Cerro Sombrero hasta Porvenir, acompañamos a las organizaciones líderes en su transición hacia ecosistemas de datos inteligentes y estrategias de marketing de alta precisión para mercados de nicho.
              </p>
            </div>
            
            <div className="pt-10">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                <ShieldCheck className="w-10 h-10 text-patagonia-gold" />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest">RESILIENCIA TÉCNICA</h4>
                  <p className="text-[10px] text-patagonia-secondary uppercase tracking-wider">Protocolos para entornos extremos.</p>
                </div>
              </div>
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

export default ZonaTierraDelFuego;
