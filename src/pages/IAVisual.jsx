import { motion } from 'framer-motion';
import { Palette, Camera, Zap, Sparkles, ArrowRight, ShieldCheck, Image as ImageIcon, Wand2, ImagePlus } from 'lucide-react';
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
          <img src="/patagonia_luxury_hero.webp" alt="Visual AI Mastery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex justify-center items-center gap-3 mb-8 text-[9px] uppercase tracking-[0.3em] font-black text-white/40">
             <a href="/" className="hover:text-patagonia-gold transition-colors">Inicio</a>
             <span className="opacity-50">/</span>
             <a href="/#servicios" className="hover:text-patagonia-gold transition-colors">Servicios</a>
             <span className="opacity-50">/</span>
             <span className="text-patagonia-gold">IA Generativa Visual</span>
          </div>

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
            La Inteligencia Artificial no reemplaza el buen ojo fotográfico. <span className="text-white font-normal">Combinamos nuestra experiencia en fotografía tradicional con ingeniería de Prompts y postproducción (Lightroom/Photoshop)</span> para crear activos visuales únicos y verosímiles.
          </p>
          
          <div className="flex justify-center">
             <a href="#vision" className="btn-primary min-w-[300px]">
                Explorar el Portafolio Sintético
             </a>
          </div>
        </div>
      </section>

      {/* Sub-Services Ecosystem */}
      <section id="vision" className="py-32 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Ecosistema de Soluciones Visuales</span>
            <h3 className="text-4xl md:text-5xl font-heading font-light mt-6 tracking-tight">¿Qué podemos diseñar <span className="italic text-patagonia-gold">para usted</span>?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Camera,
                title: "Fotografía Híbrida (IA + Base Real)",
                desc: "No dejamos todo en manos del algoritmo. Integramos fotografía base real con generación sintética para crear imágenes comerciales impecables y verosímiles que respetan las leyes de la física y la óptica."
              },
              {
                icon: ImagePlus,
                title: "Expansión de Entornos (E-commerce)",
                desc: "Tomamos fotografías de su producto y, mediante herramientas de IA, generamos fondos y contextos de lujo alrededor de él. Multiplicamos el valor visual de su catálogo sin costosas sesiones en exteriores."
              },
              {
                icon: Wand2,
                title: "Postproducción Avanzada",
                desc: "El toque final es humano. Utilizamos Lightroom y Photoshop junto con algoritmos de upscaling para limpiar, restaurar y dar a cada imagen un acabado analógico profesional."
              },
              {
                icon: Palette,
                title: "Dirección de Arte Asistida",
                desc: "Aceleramos el proceso creativo. Diseñamos moodboards y bocetos visuales con IA antes de realizar una sesión fotográfica final, asegurando que toda la producción esté alineada a su marca."
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
              <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Flujo de Trabajo Híbrido: Fotografía + IA</span>
              <h3 className="text-4xl md:text-5xl font-heading font-light tracking-tight">La Combinación <span className="italic">Perfecta</span>.</h3>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                La IA genérica suele verse artificial o "plástica". Nuestro verdadero diferencial es fusionar el ojo del fotógrafo tradicional con la potencia de los Modelos de Difusión. Entendemos de iluminación de estudio, encuadres y colorimetría para guiar a la IA con precisión.
              </p>
              <div className="space-y-10 mt-12">
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">1. Experiencia Fotográfica Base</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    El prompt es solo una herramienta. Aplicamos conocimientos de ópticas (lentes de 35mm, 50mm, 85mm), diafragmas e iluminación corporativa tradicional a nuestros comandos de IA.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">2. Generación Asistida (Modelos de Difusión)</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Utilizamos la Inteligencia Artificial para expandir posibilidades, no para hacer el trabajo completo. Guiamos la generación para asegurar consistencia visual en todas las imágenes de su empresa.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">3. Retoque Humano (Photoshop & Lightroom)</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Ninguna imagen generada se entrega tal cual. Cada activo pasa por un revelado digital riguroso en Lightroom y Photoshop para corregir artefactos y lograr el color grading exacto de su marca.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-patagonia-surface/20 border border-white/5 rounded-[3rem] p-12 lg:sticky lg:top-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-patagonia-gold/5 to-transparent pointer-events-none" />
              <h4 className="text-lg font-bold text-white mb-10 tracking-[0.4em] uppercase text-[10px] relative z-10">Indicadores de Calidad Visual</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Escalabilidad</div>
                  <p className="text-sm text-patagonia-secondary font-light">Capacidad para generar cientos de variaciones de un producto en minutos.</p>
                </div>
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Consistencia</div>
                  <p className="text-sm text-patagonia-secondary font-light">Mantenimiento riguroso de la paleta de colores y el estilo de su marca.</p>
                </div>
                <div className="pb-8">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Acabado Realista</div>
                  <p className="text-sm text-patagonia-secondary font-light">Texturas, iluminación y sombras que eluden el aspecto artificial de la IA genérica.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] sm:text-xs text-white/40 overflow-x-auto relative z-10">
                <code>
                  // Flujo Híbrido PatagoniaCoach<br/>
                  1. Fotografía Base (Composición Humana)<br/>
                  2. Prompt: "35mm lens, cinematic lighting, luxury --v 6.0"<br/>
                  3. Color Grading: Adobe Lightroom<br/>
                  4. Limpieza de Artefactos: Adobe Photoshop
                </code>
              </div>
            </div>
          </div>
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
