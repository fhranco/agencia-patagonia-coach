import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, ArrowRight, BarChart3, ShieldCheck, Zap, MessageSquare } from 'lucide-react';

const questions = [
  {
    id: 1,
    title: "¿Cuál es el tamaño actual de su ecosistema?",
    options: [
      { text: "Individual / Profesional", score: 10 },
      { text: "PYME en crecimiento", score: 20 },
      { text: "Gran Empresa / Corporación", score: 30 }
    ]
  },
  {
    id: 2,
    title: "¿Qué nivel de automatización tiene su marketing?",
    options: [
      { text: "Manual (Dependo de mi tiempo)", score: 5 },
      { text: "Básica (Email simple, redes)", score: 15 },
      { text: "Avanzada (CRM, flujos automáticos)", score: 25 }
    ]
  },
  {
    id: 3,
    title: "¿Utiliza IA en su flujo de trabajo diario?",
    options: [
      { text: "No, aún investigando", score: 5 },
      { text: "Uso herramientas básicas (ChatGPT)", score: 15 },
      { text: "IA Integrada en mis procesos", score: 30 }
    ]
  },
  {
    id: 4,
    title: "¿Cuál es su prioridad estratégica actual?",
    options: [
      { text: "Generar más Leads / Ventas", score: 20 },
      { text: "Optimizar Tiempos / Costos", score: 20 },
      { text: "Escalabilidad Tecnológica", score: 25 }
    ]
  }
];

const DigitalDiagnostic = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [leadData, setLeadData] = useState({ nombre: '', whatsapp: '' });

  const handleOptionSelect = (score) => {
    const nextScore = totalScore + score;
    setTotalScore(nextScore);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
    // Track conversion
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'unlock_diagnostic', {
          'nombre': leadData.nombre,
          'whatsapp': leadData.whatsapp,
          'score': totalScore
        });
    }
  };

  const getResult = () => {
    if (totalScore < 50) return {
      status: "Ecosistema Emergente",
      message: "Su negocio tiene un potencial de digitalización gigante. Actualmente está perdiendo eficiencia y oportunidades que la IA podría capturar.",
      focus: "Recomendación: Iniciarse en el 'Patagonia Protocol: Architecture' para diseñar su base digital.",
      color: "text-patagonia-red"
    };
    if (totalScore < 85) return {
      status: "Ecosistema en Proceso",
      message: "Ya tiene bases digitales, pero falta 'Fusión'. Sus herramientas no están hablando entre sí para maximizar su rentabilidad.",
      focus: "Recomendación: Integración táctica de IA y automatización de marketing B2B.",
      color: "text-patagonia-cyan"
    };
    return {
      status: "Ecosistema Avanzado",
      message: "Está en la vanguardia. Para mantenerse como líder, necesita optimizar su IA actual y escalar de forma masiva.",
      focus: "Recomendación: Mantenimiento de élite y expansión de flujos de trabajo con 'Evolution'.",
      color: "text-white"
    };
  };

  const restart = () => {
    setCurrentStep(0);
    setTotalScore(0);
    setIsFinished(false);
    setShowResult(false);
  };

  const result = getResult();
  const whatsappMsg = `Hola Franco! Acabo de completar el Diagnóstico Digital en la web. Mi ecosistema es: *${result.status}*. Me gustaría agendar la sesión estratégica de 15 min.`;
  const whatsappUrl = `https://wa.me/56995684198?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="diagnostic" className="section-container bg-black py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-patagonia-cyan/5 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <ClipboardCheck className="w-4 h-4 text-patagonia-red" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Diagnóstico de Ecosistema v1.0</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 italic">
            Mide tu <span className="text-patagonia-cyan">Potencial Digital.</span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-2xl mx-auto">
            Descubre en 60 segundos el estado real de tu empresa frente a la IA.
          </p>
        </div>

        <div className="glass-card min-h-[400px] flex flex-col justify-center p-8 md:p-16 border-white/10 bg-white/[0.02] backdrop-blur-3xl relative">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-patagonia-red text-xs font-bold tracking-widest uppercase">Pregunta {currentStep + 1} de {questions.length}</span>
                  <div className="flex gap-1">
                    {questions.map((_, i) => (
                      <div key={i} className={`h-1 w-8 rounded-full transition-all ${i <= currentStep ? 'bg-patagonia-red' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold italic">{questions[currentStep].title}</h3>

                <div className="grid gap-4">
                  {questions[currentStep].options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ x: 10 }}
                      onClick={() => handleOptionSelect(option.score)}
                      className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-patagonia-cyan/50 hover:bg-patagonia-cyan/5 transition-all text-left"
                    >
                      <span className="text-lg font-light group-hover:text-patagonia-cyan transition-colors">{option.text}</span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-patagonia-cyan" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : !showResult ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-8"
              >
                <div className="w-16 h-16 bg-patagonia-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-patagonia-cyan" />
                </div>
                <h3 className="text-3xl font-bold">Diagnóstico Completado.</h3>
                <p className="text-white/40 max-w-md mx-auto">Ingresa tus datos para desbloquear tu Reporte Estratégico y los pasos a seguir.</p>
                
                <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto space-y-4">
                    <input 
                        required
                        type="text" 
                        placeholder="Nombre completo"
                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:border-patagonia-cyan outline-none"
                        value={leadData.nombre}
                        onChange={(e) => setLeadData({...leadData, nombre: e.target.value})}
                    />
                    <input 
                        required
                        type="tel" 
                        placeholder="WhatsApp (Ej: +569...)"
                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:border-patagonia-cyan outline-none"
                        value={leadData.whatsapp}
                        onChange={(e) => setLeadData({...leadData, whatsapp: e.target.value})}
                    />
                    <button className="btn-primary w-full py-4 text-sm font-bold shadow-[0_0_30px_rgba(240,20,10,0.3)]">
                        VER MI RESULTADO <ArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest italic font-medium">Recibirás una copia de tu estrategia personalizada.</p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-10"
              >
                <div className="space-y-4">
                  <div className="inline-block p-4 rounded-full bg-white/5 mb-4">
                    <BarChart3 className="w-12 h-12 text-patagonia-red" />
                  </div>
                  <h3 className={`text-4xl font-bold italic ${result.color}`}>{result.status}</h3>
                  <p className="text-xl text-white/70 max-w-xl mx-auto font-light leading-relaxed italic">
                    {result.message}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-xl mx-auto">
                    <div className="flex items-start gap-4 text-left">
                        <Zap className="w-6 h-6 text-patagonia-cyan flex-shrink-0" />
                        <p className="text-sm text-patagonia-cyan font-bold leading-relaxed italic">
                            {result.focus}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2"
                  >
                    SESIÓN ESTRATÉGICA YA <MessageSquare className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={restart}
                    className="px-8 py-4 bg-white/5 text-white/50 hover:text-white rounded-full font-medium transition-all"
                  >
                    Repetir Test
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DigitalDiagnostic;
