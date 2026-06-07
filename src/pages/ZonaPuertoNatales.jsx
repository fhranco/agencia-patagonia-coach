import { motion } from 'framer-motion';
import { Mountain, Hotel, Ship, ShieldCheck, ArrowRight, Globe, Camera, Cpu } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';
import { localBusinessSchema, ZONE_DATA } from '../seo/schemas';

const ZonaPuertoNatales = () => {
  const data = ZONE_DATA['puerto-natales'];
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://agenciapatagoniacoach.cl/zonas/puerto-natales/#webpage",
    "name": "Estrategia Digital Puerto Natales & Torres del Paine | PatagoniaCoach",
    "description": "Liderazgo digital para el sector turismo de lujo y logística portuaria en Puerto Natales. Sistemas de reserva, tours 360 y marketing global.",
    "publisher": { "@id": "https://agenciapatagoniacoach.cl/#organization" }
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Marketing & Sistemas en Puerto Natales | PatagoniaCoach"
        description="Potenciamos marcas de lujo y logística en Puerto Natales. Especialistas en hotelería de alta gama en Torres del Paine y servicios portuarios."
        schema={schema}
        schemas={[localBusinessSchema(data.city, data.region, data.lat, data.lng)]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img src="/patagonia_luxury_hero.webp" alt="Puerto Natales Gateway" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Mountain className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Puerta de Entrada al Lujo Austral</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Destino <span className="text-patagonia-gold italic">Global.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            Puerto Natales es el epicentro del turismo de alta gama en Chile. <span className="text-white font-normal">Diseñamos la infraestructura digital</span> que conecta sus servicios con el viajero internacional más exigente y optimiza la logística de la Provincia de Última Esperanza.
          </p>
          
          <div className="flex justify-center">
             <a href="#soluciones" className="btn-primary min-w-[300px]">
                Explorar Soluciones Natales
             </a>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="soluciones" className="py-40 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Hotel,
                title: "Hotelería de Lujo (LODGES)",
                desc: "Sistemas de reserva avanzados, tours 360º de alta definición y estrategias de marketing de 'Quiet Luxury' para los hoteles más exclusivos de Torres del Paine."
              },
              {
                icon: Ship,
                title: "Logística & Servicios Portuarios",
                desc: "Digitalización de procesos operativos para el sector portuario y de transporte. Sistemas que aseguran la eficiencia en la puerta de entrada marítima de la provincia."
              },
              {
                icon: Globe,
                title: "Posicionamiento Internacional",
                desc: "Campañas de visibilidad global orientadas a mercados europeos, norteamericanos y asiáticos. Llevamos la esencia de Natales a los ojos del mundo."
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
                src="/images/natales-authority.png" 
                alt="Puerto Natales Digital Architecture" 
                className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-[8000ms] ease-out opacity-90"
              />
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Conectividad Global</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Sistemas para la <span className="italic text-patagonia-gold">Última Esperanza.</span></h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                Natales exige un estándar de excelencia internacional. Nuestras soluciones no solo se ven bien; funcionan bajo la presión de una temporada turística de alto nivel.
              </p>
              <p>
                Desde la automatización de flujos de check-in hasta el SEO especializado en 'Adventure Travel', proporcionamos la ventaja tecnológica que las marcas líderes de la provincia necesitan para destacar.
              </p>
            </div>
            
            <div className="pt-10">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                <Camera className="w-10 h-10 text-patagonia-gold" />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest">ESTÁNDAR 8K</h4>
                  <p className="text-[10px] text-patagonia-secondary uppercase tracking-wider">Visuales que venden el destino.</p>
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

export default ZonaPuertoNatales;
