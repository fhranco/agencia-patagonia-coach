import { motion } from 'framer-motion';
import { Camera, Globe, Zap, ArrowRight, ShieldCheck, Map, Eye } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const Tours360 = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/tours-virtuales-360/#service",
    "name": "Tours Virtuales 360º Inmersivos",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Torres del Paine, Punta Arenas, Magallanes" },
    "description": "Experiencias de inmersión total 360º para el sector turístico e inmobiliario de Magallanes. Conectamos su ubicación con el mundo."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Tours Virtuales 360 en Magallanes | PatagoniaCoach: Inmersión Total"
        description="Lleve su ubicación al mundo. Tours virtuales 360º de alta definición para hoteles, estancias e industria en Punta Arenas y Torres del Paine."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="360 Immersion Mastery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Globe className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Experiencia de Telepresencia Elite</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Inmersión <span className="text-patagonia-gold italic">Absoluta.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No tomamos fotos; <span className="text-white font-normal">transportamos a sus clientes al corazón de su negocio</span>. Tours virtuales 360º de alta fidelidad diseñados para el sector turismo, inmobiliario e industrial de la Patagonia.
          </p>
          
          <div className="flex justify-center">
             <a href="#explore" className="btn-primary min-w-[300px]">
                Explorar el Formato 360
             </a>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="explore" className="py-40 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Camera,
                title: "Alta Fidelidad 8K",
                desc: "Capturamos cada detalle con tecnología de punta. Una nitidez absoluta que permite a sus clientes explorar sus instalaciones en Punta Arenas o Natales con realismo total."
              },
              {
                icon: Map,
                title: "Integración Google Maps",
                desc: "Llevamos su tour 360º al interior de Google Street View, mejorando drásticamente su visibilidad en búsquedas locales y atrayendo turistas de todo el globo."
              },
              {
                icon: Zap,
                title: "Interactividad Pro",
                desc: "Añadimos capas de información, videos y enlaces de reserva directamente dentro del tour. Su espacio físico se convierte en una herramienta de venta 24/7."
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

      {/* Visual 360 Showcase */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 w-full aspect-square relative group">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[4rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-4">
              <img 
                src="/images/tours-360.png" 
                alt="360 Immersion Mastery Visual" 
                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[8000ms] ease-out opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">La Ventana al Sur</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Su Espacio, <span className="italic text-patagonia-gold">Sin Límites</span> Físicos.</h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                Para el turismo de alta gama en Magallanes, la primera impresión es la decisión de compra. Nuestros tours 360º permiten que su cliente ideal "viva" la estancia o el hotel antes de llegar.
              </p>
              <p>
                Optimizado para dispositivos móviles, VR y pantallas de alta resolución. Una experiencia fluida que proyecta la calidad y el estándar de su marca.
              </p>
            </div>
            
            <div className="pt-10">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                <Eye className="w-10 h-10 text-patagonia-gold" />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest">VISIÓN 8K</h4>
                  <p className="text-[10px] text-patagonia-secondary uppercase tracking-wider">Nitidez absoluta en cada ángulo.</p>
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

export default Tours360;
