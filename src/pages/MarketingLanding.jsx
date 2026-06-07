import { motion } from 'framer-motion';
import { Target, MessageSquare, ShieldCheck, Zap, ArrowRight, Share2, Globe, BarChart3, Instagram, Linkedin, Users, Filter, LineChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const MarketingLanding = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/comunicacion-digital/#service",
    "name": "Comunicación Digital Estratégica",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Región de Magallanes y de la Antártica Chilena" },
    "description": "Narrativas de autoridad para marcas líderes en la Patagonia. Gestión estratégica de canales digitales con enfoque en ROI y reputación corporativa."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Comunicación Digital & RRSS en Magallanes | PatagoniaCoach"
        description="Transformamos su presencia digital en un activo de autoridad. Estrategias de comunicación para empresas de logística, turismo y servicios en la Patagonia."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img src="/patagonia_luxury_hero.webp" alt="High-End Communication" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Breadcrumbs */}
          <div className="flex justify-center items-center gap-3 mb-8 text-[9px] uppercase tracking-[0.3em] font-black text-white/40">
             <a href="/" className="hover:text-patagonia-gold transition-colors">Inicio</a>
             <span className="opacity-50">/</span>
             <a href="/#servicios" className="hover:text-patagonia-gold transition-colors">Servicios</a>
             <span className="opacity-50">/</span>
             <span className="text-patagonia-gold">Comunicación Digital & RRSS</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Share2 className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Arquitectura de Influencia B2B</span>
          </motion.div>
          
          {/* SEO H1 Hidden - Para que Google reconozca el servicio */}
          <h1 className="sr-only">Servicios de Marketing Digital, Comunicación Estratégica y Redes Sociales en Magallanes</h1>
          
          <h2 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Narrativas de <span className="text-patagonia-gold italic">Maestría.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No gestionamos perfiles; <span className="text-white font-normal">construimos legados de autoridad digital</span>. Diseñamos la comunicación estratégica de las marcas que definen el futuro de la Patagonia.
          </p>
          
          <div className="flex justify-center">
             <a href="#narrative" className="btn-primary min-w-[300px]">
                Solicitar Auditoría Narrativa
             </a>
          </div>
        </div>
      </section>

      {/* Sub-Services Ecosystem */}
      <section id="narrative" className="py-32 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Ecosistema de Crecimiento Digital</span>
            <h3 className="text-4xl md:text-5xl font-heading font-light mt-6 tracking-tight">¿Qué podemos ejecutar <span className="italic text-patagonia-gold">para usted</span>?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Diseño de Planes de Contenido",
                desc: "No publicamos al azar. Estructuramos una parrilla mensual estratégica (Grillas) que define exactamente qué comunicar, cuándo y con qué objetivo comercial para posicionar su marca en la región."
              },
              {
                icon: Users,
                title: "Creación de Contenido (Reels & Diseño)",
                desc: "Producimos activos visuales de primera línea. Desde el diseño de carruseles corporativos hasta la edición de Reels y videos cortos que capturan la esencia de su marca y conectan genuinamente con su audiencia."
              },
              {
                icon: Share2,
                title: "Gestión y Publicación Continua",
                desc: "Nos encargamos del trabajo pesado. Programamos, monitoreamos y publicamos el contenido en todas sus plataformas (Instagram, LinkedIn, Facebook) para mantener su marca siempre activa."
              },
              {
                icon: MessageSquare,
                title: "Capacitación en Herramientas",
                desc: "Entrenamos a su equipo interno o líderes de negocio. Les enseñamos a entender las métricas, dominar aplicaciones de diseño ágil y gestionar sus redes con estándares 100% profesionales."
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
              <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Arquitectura de Prestigio y Confianza</span>
              <h3 className="text-4xl md:text-5xl font-heading font-light tracking-tight">Construcción <span className="italic">Cultural</span>.</h3>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                El marketing en Magallanes no se trata de perseguir métricas frías o automatizaciones invasivas. Se trata de construir prestigio de marca, establecer relaciones de confianza a largo plazo y liderar la conversación en la región mediante contenido que refleje la excelencia de su negocio.
              </p>
              <div className="space-y-10 mt-12">
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">1. Storytelling de Alto Nivel (Reels & Diseño)</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Creamos narrativas visuales de primera línea. Su marca no se limitará a "subir fotos"; educaremos, inspiraremos y demostraremos su autoridad en la región a través de un diseño cuidado y producción de video impecable.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">2. Construcción de Comunidad Local</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Las redes sociales son el nuevo boca a boca de Magallanes. Gestionamos su presencia digital para que su empresa sea percibida orgánicamente como la opción más segura, prestigiosa y confiable por el consumidor magallánico.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">3. Capacitación y Empoderamiento Interno</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    No creamos dependencia; transferimos conocimiento. Entrenamos a su equipo para que dominen las herramientas digitales de publicación y creación gráfica. Usted mantiene el control total de sus activos con los más altos estándares profesionales de la industria, sin pagar de más.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-patagonia-surface/20 border border-white/5 rounded-[3rem] p-12 lg:sticky lg:top-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-patagonia-gold/5 to-transparent pointer-events-none" />
              <h4 className="text-lg font-bold text-white mb-10 tracking-[0.4em] uppercase text-[10px] relative z-10">Indicadores de Prestigio</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Autoridad</div>
                  <p className="text-sm text-patagonia-secondary font-light">Contenido diseñado para establecer jerarquía y confianza a primera vista.</p>
                </div>
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Presencia</div>
                  <p className="text-sm text-patagonia-secondary font-light">Publicación constante, estética y profesional en todas sus plataformas.</p>
                </div>
                <div className="pb-8">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Conexión</div>
                  <p className="text-sm text-patagonia-secondary font-light">Comunicación que resuena genuinamente con la identidad del cliente local.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] sm:text-xs text-white/40 overflow-x-auto relative z-10">
                <code>
                  {"{"}<br/>
                  &nbsp;&nbsp;"Parrilla": "Mensual",<br/>
                  &nbsp;&nbsp;"Tono": "Lujo Silencioso",<br/>
                  &nbsp;&nbsp;"Semana_1": "Reel Educativo",<br/>
                  &nbsp;&nbsp;"Semana_2": "Carrusel de Autoridad"<br/>
                  {"}"}
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Global Showcase */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 w-full aspect-square relative group">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[4rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-6">
              <img 
                src="/images/comm-global.webp" 
                alt="Global Digital Communication from the South" 
                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[6000ms] ease-out opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">La Red de Autoridad</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Conectando su <span className="italic text-patagonia-gold">Maestría</span> con el Mundo.</h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                Para las empresas de logística, turismo y servicios industriales de la Patagonia, la comunicación digital no es una opción; es su ventana competitiva al mercado global.
              </p>
              <p>
                Diseñamos estrategias que proyectan la solidez de sus operaciones desde el Estrecho de Magallanes hacia sus clientes en Santiago, América y Europa.
              </p>
            </div>
            
            <div className="pt-10 flex flex-wrap gap-4">
              <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <Instagram className="w-5 h-5 text-patagonia-gold" />
                <span className="text-[10px] font-black tracking-widest">BRAND AUTHORITY</span>
              </div>
              <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <Linkedin className="w-5 h-5 text-patagonia-gold" />
                <span className="text-[10px] font-black tracking-widest">EXECUTIVE REPUTATION</span>
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

export default MarketingLanding;
