import { motion } from 'framer-motion';
import { MapPin, Search, Target, TrendingUp, ArrowRight, BarChart3, FileCode2, PenTool } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const SEOLocal = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/seo-local-magallanes/#service",
    "name": "Estrategia de SEO Local y Dominio Territorial",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Punta Arenas" },
      { "@type": "City", "name": "Puerto Natales" },
      { "@type": "AdministrativeArea", "name": "Magallanes" }
    ],
    "description": "Posicionamiento web estratégico para el mercado de la Patagonia. Expertos en SEO Local, Google Business Profile y Generative Engine Optimization (GEO).",
    "knowsAbout": [
      "SEO Local",
      "Google Business Profile Optimization",
      "Generative Engine Optimization",
      "Local Knowledge Graph",
      "Análisis de Competencia Regional"
    ]
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
          <img src="/patagonia_luxury_hero.webp" alt="Local SEO Mastery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Breadcrumbs */}
          <div className="flex justify-center items-center gap-3 mb-8 text-[9px] uppercase tracking-[0.3em] font-black text-white/40">
             <a href="/" className="hover:text-patagonia-gold transition-colors">Inicio</a>
             <span className="opacity-50">/</span>
             <a href="/#servicios" className="hover:text-patagonia-gold transition-colors">Servicios</a>
             <span className="opacity-50">/</span>
             <span className="text-patagonia-gold">SEO Local Magallanes</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-patagonia-gold/20 mb-12 bg-patagonia-gold/5 backdrop-blur-md"
          >
            <MapPin className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Autoridad Territorial Inapelable</span>
          </motion.div>
          
          {/* SEO H1 Hidden - Para que Google reconozca el servicio */}
          <h1 className="sr-only">Servicios de SEO Local y Posicionamiento Web en Punta Arenas y Magallanes</h1>

          <h2 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Dominio <span className="text-patagonia-gold italic">Regional.</span>
          </h2>
          
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

      {/* Sub-Services Ecosystem */}
      <section id="territory" className="py-32 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Ecosistema de Posicionamiento</span>
            <h3 className="text-4xl md:text-5xl font-heading font-light mt-6 tracking-tight">¿Qué podemos optimizar <span className="italic text-patagonia-gold">para usted</span>?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Search,
                title: "Gestión de Google Business",
                desc: "Optimizamos su perfil de negocio para dominar el 'Local Pack'. Aseguramos que su empresa sea la primera opción en Google Maps cuando se busquen sus servicios en Magallanes."
              },
              {
                icon: FileCode2,
                title: "SEO Técnico y Estructural",
                desc: "Auditamos y reparamos la salud interna de su web. Mejoramos la velocidad de carga (Core Web Vitals), inyectamos esquemas JSON-LD y aseguramos una indexación perfecta."
              },
              {
                icon: PenTool,
                title: "Contenido SEO Estratégico",
                desc: "Redactamos páginas de servicio corporativas orientadas a capturar las búsquedas exactas que realizan sus clientes potenciales. Convertimos intención de búsqueda en ventas."
              },
              {
                icon: TrendingUp,
                title: "Auditoría de Competencia",
                desc: "Analizamos el tráfico, las palabras clave y la estrategia orgánica de sus principales competidores locales. Detectamos sus debilidades para posicionar su marca por encima de ellos."
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
            
            {/* Left: LLM / Deep Context Text */}
            <div className="space-y-10">
              <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Arquitectura de Posicionamiento</span>
              <h3 className="text-4xl md:text-5xl font-heading font-light tracking-tight">Estructura <span className="italic">Técnica</span> del Ecosistema.</h3>
              
              <p className="text-lg text-white/70 font-light leading-relaxed">
                El posicionamiento orgánico en 2026 no depende de la simple repetición de palabras clave. Depende de la construcción de un **Gráfico de Conocimiento Local** (Local Knowledge Graph) que los motores de búsqueda y los Modelos de Lenguaje Grande (LLMs) como ChatGPT y Claude puedan procesar de manera estructurada para reconocer a su empresa como la máxima autoridad en Magallanes.
              </p>

              <div className="space-y-10 mt-12">
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">1. Estructuración Semántica (JSON-LD)</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Implementamos esquemas de datos avanzados (Schema.org) específicos para su industria. Declaramos coordenadas geográficas, áreas de servicio exactas (Toda la Región de Magallanes), horarios dinámicos y jerarquía de servicios corporativos directamente en el código fuente. Esto permite que la Inteligencia Artificial referencie su negocio con precisión absoluta ante consultas locales complejas.
                  </p>
                </div>

                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">2. Core Web Vitals & Reducción de Latencia</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Un sitio web lento es penalizado comercialmente por los algoritmos. Optimizamos la infraestructura de su servidor, el First Contentful Paint (FCP) y el Cumulative Layout Shift (CLS). Aseguramos que su plataforma cargue en menos de 1.5 segundos, garantizando una retención superior de leads B2B que navegan desde redes móviles de distintas capacidades en la Patagonia.
                  </p>
                </div>

                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">3. Dominio del Ecosistema de Google (Map Pack)</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Transformamos su perfil de Google Business en una máquina de captura de demanda. No nos limitamos a verificar la ubicación; publicamos contenido transaccional constante, gestionamos la reputación mediante análisis de sentimiento (NLP) y estructuramos su catálogo de servicios para capitalizar el 80% de las búsquedas locales que no pasan de la primera página.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Stats / Visual Code Context */}
            <div className="bg-patagonia-surface/20 border border-white/5 rounded-[3rem] p-12 lg:sticky lg:top-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-patagonia-gold/5 to-transparent pointer-events-none" />
              <h4 className="text-lg font-bold text-white mb-10 tracking-[0.4em] uppercase text-[10px] relative z-10">Auditoría de Métricas Tácticas</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">JSON-LD</div>
                  <p className="text-sm text-patagonia-secondary font-light">Inyección de esquemas de datos estructurados para lectura nativa de IAs y Crawlers.</p>
                </div>
                
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">&lt; 1.5s</div>
                  <p className="text-sm text-patagonia-secondary font-light">Latencia máxima garantizada en carga de activos principales para evitar rebote.</p>
                </div>

                <div className="pb-8">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">99.9%</div>
                  <p className="text-sm text-patagonia-secondary font-light">Precisión en la indexación de entidades semánticas locales para Magallanes.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] sm:text-xs text-white/40 overflow-x-auto relative z-10">
                <code>
                  {"{"}<br/>
                  &nbsp;&nbsp;"@context": "https://schema.org",<br/>
                  &nbsp;&nbsp;"@type": "LocalBusiness",<br/>
                  &nbsp;&nbsp;"name": "Patagonia B2B",<br/>
                  &nbsp;&nbsp;"areaServed": ["Región de Magallanes"],<br/>
                  &nbsp;&nbsp;"knowsAbout": ["Logística", "Turismo"]<br/>
                  {"}"}
                </code>
              </div>
            </div>

          </div>
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
                src="/images/seo-map.webp" 
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
