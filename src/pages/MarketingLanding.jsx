import { motion } from 'framer-motion';
import { Target, TrendingUp, BarChart3, Magnet, ArrowRight, CheckCircle2, XCircle, Zap, ShieldCheck, Users, History } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadCommand from '../components/LeadCommand';

const MarketingLanding = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Marketing Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-patagonia-red/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Target className="w-4 h-4 text-patagonia-red" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Marketing de Resultados B2B</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 italic leading-[0.9]">
            Historias que Venden. <br />
            <span className="text-patagonia-red">Canales que Escalan.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            No gestionamos perfiles; construimos legados. Transformamos sus redes sociales en canales de venta directos mediante un storytelling auténtico que conecta con la identidad de su marca.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="#contacto" className="px-10 py-5 bg-patagonia-red text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(240,20,10,0.3)] flex items-center gap-2">
                Solicitar Auditoría de ROI <ArrowRight className="w-5 h-5" />
             </a>
          </div>
        </div>
      </section>

      {/* Comparison Section (The 'Anti-Vanity' Block) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 italic">Marketing Tradicional vs <span className="text-patagonia-red">Ecosistema Patagonia.</span></h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional Marketing */}
                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 space-y-8">
                    <h3 className="text-2xl font-bold text-white/30 italic">Marketing de Vanidad</h3>
                    <ul className="space-y-4">
                        {[
                            "Foco en métricas de ego (likes, followers).",
                            "Campañas sin seguimiento de conversión real.",
                            "Gasto publicitario sin control de retorno (ROI).",
                            "Contenido genérico que no atrae leads calificados."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 items-center text-white/40">
                                <XCircle className="w-5 h-5 flex-shrink-0" />
                                <span className="font-light">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Patagonia Method */}
                <div className="p-10 rounded-3xl bg-patagonia-red/5 border border-patagonia-red/30 space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Users className="w-20 h-20 text-patagonia-red" />
                    </div>
                    <h3 className="text-2xl font-bold text-patagonia-red italic">Método de Identidad Directa</h3>
                    <ul className="space-y-4">
                        {[
                            "Storytelling Auténtico: Contamos su verdadera historia.",
                            "Social-Selling: RRSS como un canal de venta activo.",
                            "Trazabilidad: Medimos el impacto real de cada contenido.",
                            "Comunidad: Fidelizamos clientes que comparten sus valores."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 items-center">
                                <CheckCircle2 className="w-5 h-5 text-patagonia-red flex-shrink-0" />
                                <span className="font-bold">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Storytelling & Social Sales Pillars */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold italic">Redes Sociales con <span className="text-patagonia-red">Propósito de Venta.</span></h2>
                <p className="text-white/40 mt-4 max-w-xl mx-auto">No publicamos fotos bonitas; narramos historias que obligan a su audiencia a actuar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    {
                        icon: History,
                        title: "Storytelling de Identidad",
                        desc: "Extraemos el ADN de su marca para contar su historia real. La autenticidad es el activo más caro en la era de la IA."
                    },
                    {
                        icon: Target,
                        title: "Social-Selling Activo",
                        desc: "Diseñamos estrategias de contenido que guían al usuario desde el 'scroll' hasta el botón de 'comprar' o 'agendar'."
                    },
                    {
                        icon: BarChart3,
                        title: "Métricas de Negocio",
                        desc: "Auditamos el rendimiento de cada historia y post bajo un solo prisma: ¿Cuántos leads reales generó?"
                    }
                ].map((pilar, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-patagonia-red/30 transition-all">
                        <div className="w-14 h-14 bg-patagonia-red/10 rounded-xl flex items-center justify-center mb-6">
                            <pilar.icon className="w-7 h-7 text-patagonia-red" />
                        </div>
                        <h3 className="text-2xl font-bold italic mb-4">{pilar.title}</h3>
                        <p className="text-white/40 font-light leading-relaxed">{pilar.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto bg-patagonia-surface border border-white/10 rounded-[3rem] p-12 md:p-20 relative z-10">
              <div className="grid md:grid-cols-3 gap-12 text-center">
                  <div className="space-y-2">
                      <p className="text-5xl font-bold text-patagonia-red italic">3.5x</p>
                      <p className="text-xs uppercase tracking-widest text-white/40">Promedio de ROAS alcanzado</p>
                  </div>
                  <div className="space-y-2">
                      <p className="text-5xl font-bold text-patagonia-cyan italic">-40%</p>
                      <p className="text-xs uppercase tracking-widest text-white/40">Reducción en Costo por Lead</p>
                  </div>
                  <div className="space-y-2">
                      <p className="text-5xl font-bold text-white italic">100%</p>
                      <p className="text-xs uppercase tracking-widest text-white/40">Trazabilidad de sus Datos</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
              <ShieldCheck className="w-20 h-20 text-patagonia-cyan mx-auto opacity-50" />
              <h2 className="text-4xl md:text-6xl font-bold italic leading-tight">¿Listo para dejar de gastar y <br /><span className="text-patagonia-red">empezar a invertir?</span></h2>
              <p className="text-xl text-white/50 font-light">Auditamos sus campañas actuales y su ecosistema digital para encontrar el camino más corto a su rentabilidad.</p>
              <a href="#contacto" className="inline-block bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                  OBTENER MI AUDITORÍA DE ROI
              </a>
          </div>
      </section>

      <LeadCommand />

      <Footer />
    </div>
  );
};

export default MarketingLanding;
