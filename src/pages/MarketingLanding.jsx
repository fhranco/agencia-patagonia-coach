import { motion } from 'framer-motion';
import { Target, TrendingUp, BarChart3, Magnet, ArrowRight } from 'lucide-react';
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
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Marketing de Alto Impacto</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 italic">
            Domine su <span className="text-patagonia-red">Mercado.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            No vendemos clicks. Construimos infraestructuras de adquisición masiva de clientes B2B diseñadas para escalar su rentabilidad neta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="#contacto" className="px-10 py-5 bg-patagonia-red text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(240,20,10,0.3)] flex items-center gap-2">
                Solicitar Auditoría de Marketing <ArrowRight className="w-5 h-5" />
             </a>
          </div>
        </div>
      </section>

      {/* Marketing Pillars */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                    <TrendingUp className="w-8 h-8 text-patagonia-red" />
                </div>
                <h3 className="text-2xl font-bold italic">Crecimiento Basado en Datos</h3>
                <p className="text-white/40 font-light">Eliminamos las conjeturas. Cada dólar invertido tiene un objetivo de retorno claro y medible.</p>
            </div>
            <div className="space-y-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                    <Magnet className="w-8 h-8 text-patagonia-red" />
                </div>
                <h3 className="text-2xl font-bold italic">Adquisición Magnética</h3>
                <p className="text-white/40 font-light">Creamos sistemas que atraen a su cliente ideal de forma orgánica y pagada.</p>
            </div>
            <div className="space-y-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                    <BarChart3 className="w-8 h-8 text-patagonia-red" />
                </div>
                <h3 className="text-2xl font-bold italic">Optimización de Funnels</h3>
                <p className="text-white/40 font-light">Ingeniería de conversión aplicada a cada etapa del viaje de su cliente.</p>
            </div>
        </div>
      </section>

      {/* Direct Conversion Section */}
      <LeadCommand />

      <Footer />
    </div>
  );
};

export default MarketingLanding;
