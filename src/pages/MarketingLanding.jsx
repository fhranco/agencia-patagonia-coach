import { motion } from 'framer-motion';
import { Target, TrendingUp, BarChart3, Magnet, ArrowRight, CheckCircle2, XCircle, Zap, ShieldCheck, Users, History, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadCommand from '../components/LeadCommand';

const MarketingLanding = () => {
  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <Navbar />
      
      {/* Marketing Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="Marketing Luxury" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-patagonia-black/80 to-patagonia-black" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-patagonia-gold/20 mb-12"
          >
            <Target className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Arquitectura de Influencia B2B</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-12 leading-[0.85] text-balance">
            Historias que <span className="text-patagonia-gold italic">vibran.</span> <br />
            <span className="opacity-40">Canales que escalan.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-patagonia-secondary max-w-3xl mx-auto font-light leading-relaxed mb-16 mix-blend-plus-lighter">
            No gestionamos perfiles; construimos legados de autoridad. Transformamos su presencia digital en una extensión de su maestría organizacional mediante un storytelling de alta fidelidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
             <a href="#contacto" className="btn-primary min-w-[280px]">
                Solicitar Auditoría de Valor
             </a>
          </div>
        </div>
      </section>

      {/* Comparison Section (The 'Anti-Vanity' Block) */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-[5rem] font-heading font-light text-center mb-28 tracking-[-0.04em]">
              Marketing Convencional vs <br/><span className="text-patagonia-gold italic">Diseño de Influencia.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
                {/* Traditional Marketing */}
                <div className="p-14 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-12">
                    <h3 className="text-3xl font-heading font-light text-patagonia-white/20">Métricas de Vanidad</h3>
                    <ul className="space-y-6">
                        {[
                            "Foco en volumen sin intención (likes, seguidores).",
                            "Campañas desconectadas de la visión de negocio.",
                            "Gasto publicitario sin trazabilidad de ROI.",
                            "Narrativa plana orientada al consumo efímero."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 items-center text-patagonia-secondary/60">
                                <XCircle className="w-5 h-5 flex-shrink-0 opacity-40" />
                                <span className="font-light text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Patagonia Method */}
                <div className="p-14 rounded-[3rem] bg-patagonia-gold/5 border border-patagonia-gold/30 space-y-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Users className="w-24 h-24 text-patagonia-gold" />
                    </div>
                    <h3 className="text-3xl font-heading font-light text-patagonia-gold">Ecosistema de Influencia</h3>
                    <ul className="space-y-6">
                        {[
                            "Storytelling de Identidad: ADN de marca real.",
                            "Autoridad Progresiva: RRSS como activos de valor.",
                            "Trazabilidad Elite: Medimos impacto estratégico.",
                            "Comunidad Selectiva: Fidelización de alto nivel."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 items-center">
                                <CheckCircle2 className="w-5 h-5 text-patagonia-gold flex-shrink-0" />
                                <span className="font-semibold text-lg text-patagonia-white">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Storytelling & Social Sales Pillars */}
      <section className="py-40 px-6 bg-patagonia-surface/20">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-28 space-y-6">
                <h2 className="text-5xl md:text-7xl font-heading font-light">Redes con <span className="text-patagonia-gold italic">Propósito.</span></h2>
                <p className="text-patagonia-secondary mt-4 max-w-2xl mx-auto text-xl font-light">Diseñamos narrativas que no solo capturan la atención, sino que exigen una respuesta de alto valor.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                    {
                        icon: History,
                        title: "Storytelling de Identidad",
                        desc: "Extraemos el ADN de su marca para narrar su evolución. La autenticidad es el único activo inalcanzable para la IA."
                    },
                    {
                        icon: Target,
                        title: "Influencia Activa",
                        desc: "Diseñamos ecosistemas de contenido que guían al usuario desde el descubrimiento hasta la lealtad absoluta."
                    },
                    {
                        icon: BarChart3,
                        title: "Métricas de Capital",
                        desc: "Auditamos cada impacto bajo un solo criterio: ¿Cuánto valor real está construyendo para su organización?"
                    }
                ].map((pilar, i) => (
                    <div key={i} className="p-12 rounded-[2.5rem] bg-patagonia-black/40 border border-white/5 hover:border-patagonia-gold/30 transition-all duration-700">
                        <div className="w-16 h-16 bg-patagonia-gold/10 rounded-2xl flex items-center justify-center mb-10 border border-patagonia-gold/20">
                            <pilar.icon className="w-8 h-8 text-patagonia-gold" />
                        </div>
                        <h3 className="text-3xl font-heading font-light text-patagonia-white mb-6">{pilar.title}</h3>
                        <p className="text-patagonia-secondary font-light leading-relaxed text-lg">{pilar.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto bg-patagonia-surface/40 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-12 md:p-24">
              <div className="grid md:grid-cols-3 gap-20 text-center">
                  <div className="space-y-4">
                      <p className="text-6xl md:text-7xl font-heading font-light text-patagonia-gold tracking-tighter">3.5x</p>
                      <p className="text-[10px] uppercase tracking-[0.5em] text-patagonia-secondary font-black">Promedio de ROAS</p>
                  </div>
                  <div className="space-y-4">
                      <p className="text-6xl md:text-7xl font-heading font-light text-patagonia-white tracking-tighter">-40%</p>
                      <p className="text-[10px] uppercase tracking-[0.5em] text-patagonia-secondary font-black">Eficiencia en LeadGen</p>
                  </div>
                  <div className="space-y-4">
                      <p className="text-6xl md:text-7xl font-heading font-light text-patagonia-gold/40 tracking-tighter">100%</p>
                      <p className="text-[10px] uppercase tracking-[0.5em] text-patagonia-secondary font-black">Trazabilidad Total</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Profile Evaluation Section (Lead Magnet) */}
      <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-patagonia-gold/5 via-patagonia-black to-patagonia-black border border-white/5 rounded-[4rem] p-10 md:p-24 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-16 opacity-5">
                      <MessageSquare className="w-72 h-72" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-24 items-center relative z-10">
                      <div className="space-y-10">
                          <h2 className="text-5xl md:text-[4.5rem] font-heading font-light leading-[1] tracking-[-0.04em]">Auditoría de <br/><span className="text-patagonia-gold italic">Identidad Digital.</span></h2>
                          <p className="text-xl text-patagonia-secondary font-light leading-relaxed max-w-md">
                              Analizamos su autoridad actual para identificar brechas de confianza y oportunidades de consolidación de marca.
                          </p>
                          <div className="flex gap-6">
                              <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4 group hover:bg-patagonia-gold/10 transition-all cursor-pointer">
                                  <Instagram className="w-5 h-5 text-patagonia-gold" />
                                  <span className="text-xs font-black tracking-widest">INSTAGRAM</span>
                              </div>
                              <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4 group hover:bg-patagonia-gold/10 transition-all cursor-pointer">
                                  <Linkedin className="w-5 h-5 text-patagonia-gold" />
                                  <span className="text-xs font-black tracking-widest">LINKEDIN</span>
                              </div>
                          </div>
                      </div>
                      
                      <div className="space-y-8">
                          <h3 className="text-[10px] font-heading tracking-[0.6em] text-patagonia-gold uppercase font-black mb-10">Protocolo de Análisis</h3>
                          {[
                              "Integridad del Funnel de Conversión.",
                              "Nivel de Autoridad Narrativa.",
                              "Engagement de Alta Fidelidad.",
                              "Optimización de Interfaz Biográfica."
                          ].map((item, i) => (
                              <div key={i} className="flex gap-5 items-center p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-patagonia-gold/30 transition-all">
                                  <CheckCircle2 className="w-5 h-5 text-patagonia-gold opacity-60" />
                                  <span className="text-patagonia-white text-lg font-light tracking-tight">{item}</span>
                              </div>
                          ))}
                          <a href="#contacto" className="btn-primary w-full block text-center mt-10">
                              SOLICITAR EVALUACIÓN DE ESTATUS
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-40 px-6">
          <div className="max-w-5xl mx-auto text-center space-y-12">
              <ShieldCheck className="w-24 h-24 text-patagonia-gold/20 mx-auto" />
              <h2 className="text-5xl md:text-[5.5rem] font-heading font-light leading-[1] tracking-[-0.05em]">¿Preparado para una <br /><span className="text-patagonia-gold italic">evolución de capital?</span></h2>
              <p className="text-2xl text-patagonia-secondary font-light max-w-3xl mx-auto">Auditamos su arquitectura de marca para trazar el camino más directo hacia la autoridad de mercado.</p>
              <div className="pt-10">
                <a href="#contacto" className="btn-primary !text-lg !px-16">
                    OBTENER MI AUDITORÍA DE ROI
                </a>
              </div>
          </div>
      </section>

      <LeadCommand />

      <Footer />
    </div>
  );
};

export default MarketingLanding;
