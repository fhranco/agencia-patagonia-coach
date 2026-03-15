import { motion } from 'framer-motion';
import { Bot, Zap, Cpu, Code2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalDiagnostic from '../components/DigitalDiagnostic';

const IALanding = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* AI Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-patagonia-red/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Bot className="w-4 h-4 text-patagonia-cyan" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">IA & Automatización de Élite</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 italic">
            Evolución <span className="text-patagonia-cyan">Artificial.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            No implementamos bots genéricos. Diseñamos cerebros digitales integrados en su ecosistema para maximizar la rentabilidad y el tiempo de su equipo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="#diagnostic" className="px-10 py-5 bg-patagonia-cyan text-black rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,240,255,0.3)] flex items-center gap-2">
                Iniciar Diagnóstico IA <ArrowRight className="w-5 h-5" />
             </a>
          </div>
        </div>
      </section>

      {/* AI Deep Features */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                    <Zap className="w-8 h-8 text-patagonia-red" />
                </div>
                <h3 className="text-2xl font-bold italic">Integración Táctica</h3>
                <p className="text-white/40 font-light">Conectamos IA con su CRM, WhatsApp y flujos internos de trabajo.</p>
            </div>
            <div className="space-y-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                    <Cpu className="w-8 h-8 text-patagonia-cyan" />
                </div>
                <h3 className="text-2xl font-bold italic">Agentes Autónomos</h3>
                <p className="text-white/40 font-light">Sistemas que no solo responden, sino que ejecutan tareas y califican leads 24/7.</p>
            </div>
            <div className="space-y-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                    <Code2 className="w-8 h-8 text-patagonia-cyan" />
                </div>
                <h3 className="text-2xl font-bold italic">Entrenamiento Custom</h3>
                <p className="text-white/40 font-light">Entrenamos modelos específicamente con el conocimiento y tono de su marca.</p>
            </div>
        </div>
      </section>

      <DigitalDiagnostic />

      <Footer />
    </div>
  );
};

export default IALanding;
