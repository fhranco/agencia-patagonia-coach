import { motion } from 'framer-motion';
import { Gamepad2, Code, Zap, ArrowRight, ShieldCheck, Cpu, Smartphone, Database, Terminal, LayoutDashboard } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import SEO from '../components/SEO';

const AppsPro = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/aplicaciones-web-pro/#service",
    "name": "Aplicaciones Web & Sistemas Pro",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Región de Magallanes y de la Antártica Chilena" },
    "description": "Desarrollo de herramientas interactivas, sistemas de gestión y experiencias gamificadas para empresas en la Patagonia Chilena."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Aplicaciones Web Pro en Magallanes | PatagoniaCoach: Sistemas a Medida"
        description="Soluciones interactivas para su negocio. Desarrollo de aplicaciones web, sistemas de gestión y PWAs en Punta Arenas optimizadas para rendimiento."
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="High-Performance Apps" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-transparent to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex justify-center items-center gap-3 mb-8 text-[9px] uppercase tracking-[0.3em] font-black text-white/40">
             <a href="/" className="hover:text-patagonia-gold transition-colors">Inicio</a>
             <span className="opacity-50">/</span>
             <a href="/#servicios" className="hover:text-patagonia-gold transition-colors">Servicios</a>
             <span className="opacity-50">/</span>
             <span className="text-patagonia-gold">Apps Pro</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 mb-12 bg-white/5 backdrop-blur-md"
          >
            <Cpu className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Ingeniería de Software de Alto Impacto</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.85] text-balance">
            Sistemas <span className="text-patagonia-gold italic">Vivos.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            No desarrollamos software estático; <span className="text-white font-normal">creamos ecosistemas interactivos</span> que resuelven cuellos de botella operativos. Aplicaciones Web Pro diseñadas para la logística, el comercio y la industria de Magallanes.
          </p>
          
          <div className="flex justify-center">
             <a href="#apps" className="btn-primary min-w-[300px]">
                Explorar Soluciones Interactivas
             </a>
          </div>
        </div>
      </section>

      {/* Sub-Services Ecosystem */}
      <section id="apps" className="py-32 px-6 bg-patagonia-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Ecosistema de Software</span>
            <h3 className="text-4xl md:text-5xl font-heading font-light mt-6 tracking-tight">¿Qué podemos programar <span className="italic text-patagonia-gold">para usted</span>?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Progressive Web Apps (PWA)",
                desc: "Aplicaciones que se instalan directamente desde el navegador de su cliente. Navegación offline, notificaciones push y máxima velocidad sin las barreras comerciales de la App Store o Google Play."
              },
              {
                icon: LayoutDashboard,
                title: "Software as a Service (SaaS)",
                desc: "Plataformas de gestión B2B hechas a la medida de la logística magallánica. Digitalizamos el núcleo operativo de su empresa, desde el control de flotas hasta portales de clientes y proveedores."
              },
              {
                icon: Gamepad2,
                title: "Experiencias de Gamificación",
                desc: "Motores de lealtad e interfaces lúdicas. Diseñamos trivias, sistemas de recompensas y cuponeras digitales para capturar la atención del cliente final en puntos de venta y eventos."
              },
              {
                icon: Terminal,
                title: "Interfaces para Tótems Físicos",
                desc: "Desarrollo de pantallas interactivas de alto rendimiento para recepciones de hoteles, ferias comerciales o la Zona Franca. Diseño táctil intuitivo conectado en tiempo real a sus bases de datos."
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
              <h3 className="text-4xl md:text-5xl font-heading font-light tracking-tight">Ingeniería <span className="italic">Reactiva</span>.</h3>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Un sistema corporativo no puede depender de constructores de sitios básicos. Programamos arquitecturas desacopladas (Headless) utilizando React.js y bases de datos escalables para garantizar que la operatividad de su empresa nunca se detenga.
              </p>
              <div className="space-y-10 mt-12">
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">1. React & Vite Frameworks</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Construimos interfaces SPA (Single Page Applications) ultra-rápidas. Al no tener que recargar la página en cada clic, la experiencia del usuario final se percibe instantánea, igual a una aplicación nativa.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">2. Bases de Datos NoSQL en Tiempo Real</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Conectamos el frontend con soluciones en la nube (como Firebase o Supabase) para reflejar cambios de inventario, puntajes o reservas en tiempo real a todos los usuarios conectados.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">3. Infraestructura Offline-First</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Sabemos que en la Patagonia la conectividad puede fallar. Diseñamos sistemas con Service Workers que almacenan datos en la caché del dispositivo, permitiendo operar sin internet y sincronizando automáticamente al recuperar la señal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-patagonia-surface/20 border border-white/5 rounded-[3rem] p-12 lg:sticky lg:top-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-patagonia-gold/5 to-transparent pointer-events-none" />
              <h4 className="text-lg font-bold text-white mb-10 tracking-[0.4em] uppercase text-[10px] relative z-10">Métricas de Rendimiento</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Lighthouse 99+</div>
                  <p className="text-sm text-patagonia-secondary font-light">Optimización algorítmica para superar las métricas más estrictas de rendimiento de Google.</p>
                </div>
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Fricción Cero</div>
                  <p className="text-sm text-patagonia-secondary font-light">Eliminamos el paso por la App Store. Sus clientes ingresan al link y ya tienen la App instalada en el inicio de su teléfono.</p>
                </div>
                <div className="pb-8">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">Seguridad B2B</div>
                  <p className="text-sm text-patagonia-secondary font-light">Autenticación basada en Tokens (JWT) y cifrado de datos corporativos sensibles.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] sm:text-xs text-white/40 overflow-x-auto relative z-10">
                <code>
                  const manifest = {"{"}<br/>
                  &nbsp;&nbsp;name: 'Portal Patagonia',<br/>
                  &nbsp;&nbsp;short_name: 'Portal',<br/>
                  &nbsp;&nbsp;display: 'standalone',<br/>
                  &nbsp;&nbsp;background_color: '#000000',<br/>
                  &nbsp;&nbsp;theme_color: '#B69A5D'<br/>
                  {"}"};
                </code>
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

export default AppsPro;
