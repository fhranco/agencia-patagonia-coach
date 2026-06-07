import { motion } from 'framer-motion';
import { Layout, Rocket, Shield, Globe, ArrowRight, Code } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const DesarrolloWeb = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/desarrollo-web/#service",
    "name": "Arquitectura Web de Alto Rendimiento",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Punta Arenas" },
      { "@type": "City", "name": "Puerto Natales" },
      { "@type": "AdministrativeArea", "name": "Magallanes" }
    ],
    "description": "Desarrollo de ecosistemas web de alta fidelidad. Especialistas en Next.js, Headless CMS y optimización para motores generativos (GEO) en la Patagonia.",
    "knowsAbout": [
      "Desarrollo Web Full-stack",
      "Next.js & React",
      "Arquitectura Jamstack",
      "SEO Técnico",
      "Optimización de Performance Web"
    ]
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Desarrollo Web Corporativo | PatagoniaCoach: Arquitectura de Alto Rendimiento"
        description="Diseñamos ecosistemas web que proyectan autoridad. Desarrollo web profesional en Punta Arenas optimizado para conversión, SEO y velocidad extrema."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="Luxury Web Development" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Breadcrumbs */}
          <div className="flex justify-center items-center gap-3 mb-8 text-[9px] uppercase tracking-[0.3em] font-black text-white/40">
             <a href="/" className="hover:text-patagonia-gold transition-colors">Inicio</a>
             <span className="opacity-50">/</span>
             <a href="/#servicios" className="hover:text-patagonia-gold transition-colors">Servicios</a>
             <span className="opacity-50">/</span>
             <span className="text-patagonia-gold">Desarrollo Web Profesional</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Code className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Arquitectura Digital de Autor</span>
          </motion.div>
          
          {/* SEO H1 Hidden - Para que Google reconozca el servicio */}
          <h1 className="sr-only">Servicio de Desarrollo Web Corporativo y Arquitectura Digital en Punta Arenas</h1>
          
          <h2 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Estructura <span className="text-patagonia-gold italic">Impecable.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No creamos simples sitios web; <span className="text-white font-normal">construimos activos digitales de alto rendimiento</span> que funcionan como herramientas de venta ininterrumpidas. Diseño de inmersión para marcas que lideran.
          </p>
          
          <div className="flex justify-center">
             <a href="#masterplan" className="btn-primary min-w-[300px]">
                Explorar el Masterplan Web
             </a>
          </div>
        </div>
      </section>

      {/* Sub-Services Ecosystem */}
      <section id="masterplan" className="py-32 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Ecosistema de Soluciones Web</span>
            <h3 className="text-4xl md:text-5xl font-heading font-light mt-6 tracking-tight">¿Qué podemos construir <span className="italic text-patagonia-gold">para usted</span>?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Layout,
                title: "Tiendas Virtuales (E-commerce)",
                desc: "Plataformas de venta online robustas (Shopify Headless, WooCommerce) optimizadas para alta conversión, gestión de inventario sincronizada y pasarelas de pago seguras. Su negocio abierto 24/7."
              },
              {
                icon: Code,
                title: "Sistemas B2B a Medida",
                desc: "Desarrollo de software desde cero para digitalizar los procesos operativos únicos de su empresa. Intranets corporativas, sistemas de reservas complejos y paneles de administración exclusivos."
              },
              {
                icon: Rocket,
                title: "Aplicaciones Web Pro (PWA)",
                desc: "Plataformas híbridas que funcionan como una app nativa en el teléfono de su cliente. Permiten navegación offline, notificaciones push y máxima velocidad sin la fricción de descargar desde una App Store."
              },
              {
                icon: Globe,
                title: "Sitios Corporativos Dinámicos",
                desc: "Páginas web de alto impacto visual (Lujo Silencioso) equipadas con herramientas especiales: calculadoras de presupuesto, integración de Tours 360, cotizadores en tiempo real y chatbots impulsados por IA."
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
              <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Arquitectura Frontend & Backend</span>
              <h3 className="text-4xl md:text-5xl font-heading font-light tracking-tight">Estructura <span className="italic">Técnica</span> del Ecosistema.</h3>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                No usamos plantillas prefabricadas. Construimos aplicaciones web para negocios locales ambiciosos utilizando stacks tecnológicos modernos (React, Next.js, Headless CMS) que aseguran escalabilidad, seguridad de primer nivel y tiempos de carga instantáneos para maximizar la conversión.
              </p>
              <div className="space-y-10 mt-12">
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">1. React & Server-Side Rendering (SSR)</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Utilizamos arquitecturas basadas en componentes y renderizado dinámico del lado del servidor (Next.js). Esto significa que Google y los LLMs pueden leer su sitio e indexarlo inmediatamente, mientras que los usuarios experimentan interfaces de usuario (UI) fluidas, sin recargas de página (SPA).
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">2. Headless CMS y APIs E-commerce</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Desacoplamos el frontend visual del backend de contenido. Mediante arquitecturas Headless e integraciones API, garantizamos que su catálogo de productos y la información de su negocio sea rápida, segura y escalable para servir simultáneamente a la web y a tótems físicos.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">3. Infraestructura Cloud y Edge Computing</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Desplegamos los activos en redes globales descentralizadas (Edge). Su código se ejecuta en los nodos más cercanos al usuario, reduciendo la latencia de red a mínimos absolutos, blindando la plataforma contra ataques cibernéticos y garantizando un 99.99% de Uptime operativo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-patagonia-surface/20 border border-white/5 rounded-[3rem] p-12 lg:sticky lg:top-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-patagonia-gold/5 to-transparent pointer-events-none" />
              <h4 className="text-lg font-bold text-white mb-10 tracking-[0.4em] uppercase text-[10px] relative z-10">Métricas de Arquitectura Web</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">SSR Core</div>
                  <p className="text-sm text-patagonia-secondary font-light">Renderizado desde el servidor para máxima indexación SEO (Frameworks modernos).</p>
                </div>
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">API REST</div>
                  <p className="text-sm text-patagonia-secondary font-light">Consultas de datos eficientes para evitar la sobrecarga y lentitud del frontend.</p>
                </div>
                <div className="pb-8">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">99.99% Uptime</div>
                  <p className="text-sm text-patagonia-secondary font-light">Mantenimiento continuo y despliegue en infraestructuras Cloud de clase mundial.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] sm:text-xs text-white/40 overflow-x-auto relative z-10">
                <code>
                  export const getServerSideProps = async () =&gt; {"{"}<br/>
                  &nbsp;&nbsp;const data = await fetchBusinessData();<br/>
                  &nbsp;&nbsp;return {"{"} props: {"{"} data {"}"} {"}"};<br/>
                  {"}"};
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 w-full aspect-[4/5] md:aspect-square relative group">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[3.5rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-6">
              <img 
                src="/images/web-core.png" 
                alt="Digital Architecture Core" 
                className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-[4000ms] ease-out"
              />
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">La Arquitectura del Éxito</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Ecosistemas que <span className="italic text-patagonia-gold">Hablan</span> de su Poder.</h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                Un sitio web corporativo es su declaración de autoridad ante el mundo. En la era de la IA, su presencia digital debe ser impecable, rápida y estratégicamente estructurada.
              </p>
              <p>
                Diseñamos sistemas que se adaptan a cualquier dispositivo, garantizando una experiencia de usuario de primer nivel desde Magallanes hasta cualquier rincón del globo.
              </p>
            </div>
            
            <div className="pt-10">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
                <Globe className="w-10 h-10 text-patagonia-gold" />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest">VISIÓN GLOBAL</h4>
                  <p className="text-[10px] text-patagonia-secondary uppercase tracking-wider">Arquitectura para mercados internacionales.</p>
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

export default DesarrolloWeb;
