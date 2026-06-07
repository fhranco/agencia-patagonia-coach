import { motion } from 'framer-motion';
import { Camera, Globe, Zap, ArrowRight, ShieldCheck, Map, Eye, Building, LayoutTemplate } from 'lucide-react';
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
    "areaServed": { "@type": "AdministrativeArea", "name": "Región de Magallanes y de la Antártica Chilena" },
    "description": "Experiencias de inmersión total 360º para el sector turístico e inmobiliario de Magallanes. Conectamos su ubicación con el mundo."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Tours Virtuales 360 en Magallanes | PatagoniaCoach: Inmersión Total"
        description="Lleve su ubicación al mundo. Tours virtuales 360º de alta definición para hoteles, estancias e industria en toda la Región de Magallanes."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img src="/patagonia_luxury_hero.webp" alt="360 Immersion Mastery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex justify-center items-center gap-3 mb-8 text-[9px] uppercase tracking-[0.3em] font-black text-white/40">
             <a href="/" className="hover:text-patagonia-gold transition-colors">Inicio</a>
             <span className="opacity-50">/</span>
             <a href="/#servicios" className="hover:text-patagonia-gold transition-colors">Servicios</a>
             <span className="opacity-50">/</span>
             <span className="text-patagonia-gold">Tours 360º</span>
          </div>

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

      {/* Sub-Services Ecosystem */}
      <section id="explore" className="py-32 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Ecosistema de Inmersión</span>
            <h3 className="text-4xl md:text-5xl font-heading font-light mt-6 tracking-tight">¿Qué podemos capturar <span className="italic text-patagonia-gold">para usted</span>?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Camera,
                title: "Tours Virtuales Interactivos",
                desc: "Creación de experiencias inmersivas con puntos de información interactivos (Hotspots), videos incrustados y galerías de fotos. Su cliente puede recorrer sus instalaciones desde cualquier dispositivo."
              },
              {
                icon: Map,
                title: "Integración Google Street View",
                desc: "Conectamos su recorrido virtual directamente al ecosistema de Google Maps. Cuando un turista en Magallanes busque su hotel o restaurante, podrá entrar virtualmente desde el mapa."
              },
              {
                icon: Building,
                title: "Recorridos Inmobiliarios",
                desc: "Acelere la venta o arriendo de propiedades. Mostramos cada rincón de sus bienes raíces en resolución 8K, filtrando clientes curiosos y atrayendo compradores con intención real."
              },
              {
                icon: LayoutTemplate,
                title: "Levantamiento para Retail e Industria",
                desc: "Digitalizamos showrooms, plantas de producción o locales comerciales. Ideal para capacitaciones internas, inspección remota o presentación de infraestructura a inversores internacionales."
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
              <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Arquitectura de Telepresencia</span>
              <h3 className="text-4xl md:text-5xl font-heading font-light tracking-tight">Ingeniería <span className="italic">Espacial</span>.</h3>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Un Tour 360 no es solo un conjunto de fotografías panorámicas. Es una estructura de datos espaciales optimizada para cargar instantáneamente en navegadores móviles sin requerir aplicaciones adicionales.
              </p>
              <div className="space-y-10 mt-12">
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">1. Captura HDR Multiexposición</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Utilizamos equipos de óptica esférica de grado profesional. Tomamos múltiples exposiciones por nodo para fusionar las luces de las ventanas y las sombras interiores, logrando un balance lumínico perfecto.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">2. Cosido Algorítmico (Stitching)</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Eliminamos los errores de paralaje, reflejos de trípodes y distorsiones mediante software avanzado. La transición entre espacios es fluida, generando una verdadera ilusión de profundidad.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">3. Plataformas y Motor 3DVista</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Alojamos sus recorridos en plataformas de publicación estándar para rápida implementación. Si su proyecto requiere interactividad avanzada, E-learning o menús personalizados, desarrollamos sobre el motor profesional <strong>3DVista</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-patagonia-surface/20 border border-white/5 rounded-[3rem] p-12 lg:sticky lg:top-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-patagonia-gold/5 to-transparent pointer-events-none" />
              <h4 className="text-lg font-bold text-white mb-10 tracking-[0.4em] uppercase text-[10px] relative z-10">Especificaciones de Renderizado</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Cross-Platform</div>
                  <p className="text-sm text-patagonia-secondary font-light">Totalmente responsivo: funciona en iOS, Android, Desktop y visores de Realidad Virtual (Meta Quest).</p>
                </div>
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Integración Nativa</div>
                  <p className="text-sm text-patagonia-secondary font-light">Incrustamos el recorrido directamente en su sitio web corporativo, reteniendo el tráfico y controlando la experiencia del usuario.</p>
                </div>
                <div className="pb-8">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Interactividad</div>
                  <p className="text-sm text-patagonia-secondary font-light">Métricas exactas de qué áreas de su negocio capturan más la atención de los visitantes mediante Hotspots.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] sm:text-xs text-white/40 overflow-x-auto relative z-10">
                <code>
                  &lt;iframe <br/>
                  &nbsp;&nbsp;src="https://tour.agenciapatagoniacoach.cl/su-empresa"<br/>
                  &nbsp;&nbsp;width="100%" height="600px"<br/>
                  &nbsp;&nbsp;allow="xr-spatial-tracking; gyroscope; accelerometer"<br/>
                  &nbsp;&nbsp;allowfullscreen&gt;<br/>
                  &lt;/iframe&gt;
                </code>
              </div>
            </div>
          </div>
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
