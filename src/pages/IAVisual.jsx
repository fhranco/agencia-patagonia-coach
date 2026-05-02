import { motion } from 'framer-motion';
import { Palette, Camera, Zap, Sparkles, ArrowRight, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const IAVisual = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/ia-generativa-visual/#service",
    "name": "IA Generativa Visual Elite",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Magallanes, Chile" },
    "description": "Generación de activos visuales de alta gama mediante IA. Fotografía sintética y diseño conceptual para marcas líderes en la Patagonia."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="IA Generativa Visual en Magallanes | PatagoniaCoach"
        description="Producción visual de vanguardia para marcas que lideran. Fotografía con IA y diseño conceptual en Punta Arenas para campañas de alto impacto."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="Visual AI Mastery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Palette className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Estética Algorítmica de Autor</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Visión <span className="text-patagonia-gold italic">Ilimitada.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No usamos filtros; <span className="text-white font-normal">diseñamos realidades visuales a medida</span>. Producción de activos de alta gama mediante IA para marcas que necesitan proyectar una imagen de clase mundial desde el sur del mundo.
          </p>
          
          <div className="flex justify-center">
             <a href="#vision" className="btn-primary min-w-[300px]">
                Explorar el Portafolio Sintético
             </a>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="vision" className="py-40 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Camera,
                title: "Fotografía Sintética",
                desc: "Creación de imágenes realistas sin necesidad de sesiones físicas. Ideal para catálogos de lujo, inmobiliarias y marcas de turismo en Magallanes que buscan perfección visual."
              },
              {
                icon: Sparkles,
                title: "Identidad Visual IA",
                desc: "Evolución de su marca mediante conceptos visuales generados por algoritmos avanzados. Diseñamos la estética del futuro para los líderes del presente."
              },
              {
                icon: Zap,
                title: "Producción Ágil",
                desc: "Escalamos su producción de contenido visual reduciendo tiempos y costos operativos en un 70%, sin comprometer la calidad artística de sus campañas."
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

      {/* Visual Artistic Showcase */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 w-full aspect-square relative group">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[4rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-12">
              <img 
                src="/images/ia-visual.png" 
                alt="AI Generated Visual Mastery" 
                className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-[6000ms] ease-out opacity-90"
              />
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">El Futuro de la Imagen</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Creatividad sin <span className="italic text-patagonia-gold">Fronteras.</span></h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                En la era del contenido infinito, solo las marcas con una identidad visual coherente y poderosa logran capturar la atención del cliente de alto valor.
              </p>
              <p>
                Utilizamos las herramientas de IA más avanzadas para materializar cualquier concepto, desde paisajes oníricos de la Patagonia hasta prototipos industriales de alta precisión.
              </p>
            </div>
            
            <div className="pt-10">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                <ImageIcon className="w-10 h-10 text-patagonia-gold" />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest">ACTIVOS DE AUTOR</h4>
                  <p className="text-[10px] text-patagonia-secondary uppercase tracking-wider">Diseño visual con alma algorítmica.</p>
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

export default IAVisual;
