import { motion } from 'framer-motion';
import { Bot, Zap, Cpu, Code2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';

import SEO from '../components/SEO';

const IALanding = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/inteligencia-artificial-punta-arenas/#service",
    "name": "Evolución e Implementación de IA",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Región de Magallanes y de la Antártica Chilena" },
    "description": "Consultoría e implementación de soluciones de Inteligencia Artificial para empresas de Magallanes. Automatización operativa y asistentes inteligentes."
  };

  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <SEO 
        title="Inteligencia Artificial en Punta Arenas | PatagoniaCoach: Evolución Operativa"
        description="Lidere la transformación digital en Magallanes con Inteligencia Artificial. Implementamos asistentes cognitivos y automatización inteligente para su empresa."
        schema={schema}
      />
      <Navbar />
      
      {/* AI Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Background image med/high opacity gradient */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="AI Luxury Experience" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-patagonia-black/80 to-patagonia-black" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Breadcrumbs */}
          <div className="flex justify-center items-center gap-3 mb-8 text-[9px] uppercase tracking-[0.3em] font-black text-white/40">
             <a href="/" className="hover:text-patagonia-gold transition-colors">Inicio</a>
             <span className="opacity-50">/</span>
             <a href="/#servicios" className="hover:text-patagonia-gold transition-colors">Servicios</a>
             <span className="opacity-50">/</span>
             <span className="text-patagonia-gold">Evolución IA</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-patagonia-gold/20 mb-12"
          >
            <Bot className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black pointer-events-none">Ecosistemas de Inteligencia Superior</span>
          </motion.div>
          
          {/* SEO H1 Hidden - Para que Google reconozca el servicio */}
          <h1 className="sr-only">Agencia de Inteligencia Artificial en Punta Arenas: Consultoría, Implementación y Capacitaciones</h1>

          <h2 className="text-6xl md:text-[7rem] font-heading font-light tracking-[-0.05em] mb-10 leading-[0.9] text-balance">
            Inteligencia <span className="text-patagonia-gold italic">Aplicada.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
            Transformamos empresas en la Patagonia mediante Inteligencia Artificial. <span className="text-white font-normal">Abarcamos todo el ecosistema:</span> desde el diagnóstico y consultoría, hasta la implementación técnica y capacitación corporativa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
             <a href="#servicios-ia" className="btn-primary min-w-[280px]">
                Explorar Soluciones IA 
             </a>
          </div>
        </div>
      </section>

      {/* AI Deep Features - Comprehensive Core */}
      <section id="servicios-ia" className="py-40 px-6 bg-patagonia-black">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black block mb-6">El Ecosistema IA Integral</span>
          <h2 className="text-4xl md:text-6xl font-heading font-light mb-10">Cobertura <span className="italic opacity-60 text-white">Total.</span></h2>
          <p className="text-xl text-patagonia-secondary font-light leading-relaxed">
            No somos instaladores de software. Somos arquitectos de transformación cognitiva. Abordamos cada etapa de adopción de Inteligencia Artificial para empresas B2B en Magallanes.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {[
              {
                icon: Cpu,
                title: "1. Consultoría & Viabilidad IA",
                desc: "Diagnóstico inicial y diseño de hoja de ruta. Analizamos sus procesos actuales para identificar exactamente dónde la IA generará el mayor Retorno de Inversión (ROI)."
              },
              {
                icon: Zap,
                title: "2. Automatizaciones y Agentes",
                desc: "Implementación de Empleados Digitales y agentes autónomos. Automatizamos flujos repetitivos (cotizaciones, reportes, reservas) reduciendo hasta un 60% la latencia operativa."
              },
              {
                icon: Bot,
                title: "3. Capacitación Corporativa",
                desc: "A través de la Academia Patagoniacoach, formamos a sus directivos y equipos en Prompt Engineering, uso de LLMs y mentalidad IA, asegurando independencia tecnológica."
              },
              {
                icon: Code2,
                title: "4. Marketing Potenciado por IA",
                desc: "No más contenido genérico. Usamos inteligencia predictiva y IA generativa para crear campañas hiper-personalizadas, captando clientes locales y globales con precisión láser."
              }
            ].map((f, i) => (
              <div key={i} className="group p-12 bg-patagonia-surface/20 border border-white/5 rounded-[2.5rem] hover:border-patagonia-gold/10 transition-all duration-700">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:bg-patagonia-gold group-hover:text-black transition-all">
                    <f.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-light text-patagonia-white mb-4">{f.title}</h3>
                <p className="text-patagonia-secondary font-light leading-relaxed text-sm md:text-base">{f.desc}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Deep Technical Content for SEO & LLMs */}
      <section className="py-32 px-6 bg-patagonia-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            <div className="space-y-10">
              <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">Arquitectura de IA para Negocios</span>
              <h3 className="text-4xl md:text-5xl font-heading font-light tracking-tight">Infraestructura <span className="italic">Cognitiva</span>.</h3>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Nuestros agentes no son "chatbots de respuestas rápidas". Construimos arquitecturas basadas en RAG (Retrieval-Augmented Generation) y flujos autónomos que leen sus datos privados para ejecutar tareas complejas con un profundo contexto humano.
              </p>
              <div className="space-y-10 mt-12">
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">1. Motores Cognitivos y Gestión de Tokens</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Desplegamos Modelos de Lenguaje Avanzados (LLMs) bajo un esquema de disponibilidad por uso de tokens, garantizando eficiencia de costos y un Retorno de Inversión (ROI) medible. Usted mantiene control absoluto sobre las directrices de la IA mediante "System Prompts", asegurando que el agente responda siempre bajo las reglas y el tono único de su marca.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">2. Sistemas RAG (Generación Aumentada por Recuperación)</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    Conectamos la Inteligencia Artificial a sus documentos internos (CRMs, Inventarios). Mediante bases de datos vectoriales, el agente busca la información real de su empresa en milisegundos antes de emitir una respuesta, eliminando el 100% de las "alucinaciones" (respuestas inventadas).
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-patagonia-gold transition-colors">3. Automatización de Flujos (RPA & Webhooks)</h4>
                  <p className="text-patagonia-secondary font-light leading-relaxed">
                    La IA de primer nivel no solo conversa; ejecuta. Cuando nuestro Agente cierra un prospecto de ventas en WhatsApp, dispara webhooks que automáticamente generan presupuestos, agendan reuniones y actualizan las etapas en su embudo de ventas sin intervención humana.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-patagonia-surface/20 border border-white/5 rounded-[3rem] p-12 lg:sticky lg:top-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-patagonia-gold/5 to-transparent pointer-events-none" />
              <h4 className="text-lg font-bold text-white mb-10 tracking-[0.4em] uppercase text-[10px] relative z-10">Métricas de Implementación IA</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">RAG</div>
                  <p className="text-sm text-patagonia-secondary font-light">Acceso al conocimiento interno de su negocio en tiempo real sin entrenamientos costosos.</p>
                </div>
                <div className="pb-8 border-b border-white/5">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">LLM API</div>
                  <p className="text-sm text-patagonia-secondary font-light">Integración nativa Serverless con infraestructuras OpenAI y Anthropic.</p>
                </div>
                <div className="pb-8">
                  <div className="text-5xl font-light text-patagonia-gold mb-3 font-heading">0 Latencia Humana</div>
                  <p className="text-sm text-patagonia-secondary font-light">Respuestas comerciales con contexto múltiple ejecutadas en menos de 2.5 segundos.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] sm:text-xs text-white/40 overflow-x-auto relative z-10">
                <code>
                  import openai<br/>
                  response = openai.ChatCompletion.create(<br/>
                  &nbsp;&nbsp;model="gpt-4o",<br/>
                  &nbsp;&nbsp;messages=[{"{"}"role": "system", "content": "B2B Sales Agent"{"}"}]<br/>
                  )
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Protocol Section */}
      <section className="py-40 px-6 bg-patagonia-surface/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-patagonia-gold font-black">El Protocolo de Evolución</span>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight leading-[1.1]">Inyectamos <span className="italic text-patagonia-gold">Inteligencia</span> en el ADN de su Marca.</h2>
            <div className="space-y-8 text-lg text-patagonia-secondary font-light leading-relaxed">
              <p>
                La verdadera transformación no ocurre con herramientas aisladas. Ocurre cuando la **Inteligencia Artificial** se convierte en la columna vertebral de su comunicación, ventas y operaciones.
              </p>
              <p>
                Desde Magallanes, hemos perfeccionado un sistema que permite a las empresas de la Patagonia competir en la arena global con la eficiencia de una multinacional tecnológica.
              </p>
            </div>
            
            <ul className="grid grid-cols-2 gap-8 pt-10">
              {[
                "Reducción de Latencia Operativa",
                "Cierre de Leads 24/7",
                "Análisis Predictivo de Mercado",
                "Estructuras de Costo Escalables"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                  <div className="w-1 h-1 bg-patagonia-gold rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full aspect-square relative group">
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[120px] rounded-full group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
            <div className="relative z-10 w-full h-full border border-white/5 rounded-[3rem] bg-black/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-4">
              <img 
                src="/images/ai-core.png" 
                alt="Patagonia AI Neural Core" 
                className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-[3000ms] ease-out"
              />
              {/* Decorative data lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-patagonia-gold to-transparent" />
                <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-patagonia-gold to-transparent" />
                <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-patagonia-gold to-transparent" />
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

export default IALanding;
