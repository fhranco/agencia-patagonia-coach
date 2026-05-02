import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, ArrowRight, BarChart3, ShieldCheck, Zap, MessageSquare, Target, Activity, FileText } from 'lucide-react';

const questions = [
  // DIMENSIÓN 1: ARQUITECTURA & DATOS
  {
    id: 1,
    title: "¿Cuál es el sector principal de su ecosistema?",
    options: [
      { text: "Turismo de Lujo / Intereses Especiales", sector: "tourism", score: 20 },
      { text: "Industria / Logística / Energía", sector: "industry", score: 20 },
      { text: "Retail / Servicios Profesionales B2B", sector: "retail", score: 20 }
    ]
  },
  {
    id: 2,
    title: "¿Posee un repositorio centralizado de datos (Single Source of Truth)?",
    options: [
      { text: "Datos fragmentados en múltiples plataformas", score: 5 },
      { text: "CRM básico con integraciones limitadas", score: 15 },
      { text: "Data Warehouse unificado y estructurado", score: 30 }
    ]
  },
  {
    id: 3,
    title: "¿Cómo se sincronizan sus datos operativos con su marketing?",
    options: [
      { text: "Carga manual de bases de datos", score: 5 },
      { text: "Sincronización vía Webhooks o APIs básicas", score: 15 },
      { text: "Fusión bidireccional en tiempo real", score: 30 }
    ]
  },
  {
    id: 4,
    title: "¿Cuál es el nivel de salud de su base de contactos actual?",
    options: [
      { text: "Baja tasa de apertura y datos desactualizados", score: 5 },
      { text: "Segmentación básica por compras anteriores", score: 15 },
      { text: "Segmentación predictiva basada en comportamiento", score: 30 }
    ]
  },
  {
    id: 5,
    title: "¿Sus activos digitales son propiedad soberana o dependen de terceros?",
    options: [
      { text: "Dependencia total de Marketplaces / Redes", score: 5 },
      { text: "Híbrido con plataforma propia limitada", score: 15 },
      { text: "Ecosistema propietario de alta resiliencia", score: 30 }
    ]
  },
  // DIMENSIÓN 2: INTELIGENCIA ARTIFICIAL
  {
    id: 6,
    title: "¿Utiliza modelos de lenguaje (LLMs) para la creación de contenido?",
    options: [
      { text: "Uso esporádico y manual", score: 5 },
      { text: "Uso asistido con Prompts estructurados", score: 15 },
      { text: "Flujos de contenido 100% asistidos por IA", score: 30 }
    ]
  },
  {
    id: 7,
    title: "¿Ha entrenado una IA con el tono y datos de su propia marca?",
    options: [
      { text: "No, usamos IA genérica", score: 5 },
      { text: "Estamos en fase de entrenamiento", score: 15 },
      { text: "IA Personalizada operativa en producción", score: 30 }
    ]
  },
  {
    id: 8,
    title: "¿Aplica IA Generativa para activos visuales o catálogos?",
    options: [
      { text: "Stock genérico o fotos tradicionales", score: 5 },
      { text: "Retoque asistido por IA", score: 15 },
      { text: "Generación completa de activos visuales de élite", score: 30 }
    ]
  },
  {
    id: 9,
    title: "¿Su equipo utiliza agentes de IA para tareas administrativas?",
    options: [
      { text: "Cero integración de agentes", score: 5 },
      { text: "Uso de bots básicos de respuesta", score: 15 },
      { text: "Agentes autónomos para flujos de trabajo", score: 30 }
    ]
  },
  {
    id: 10,
    title: "¿Cómo califica la cultura de 'IA-First' en su organización?",
    options: [
      { text: "Resistencia o desconocimiento total", score: 5 },
      { text: "Adopción temprana por algunos líderes", score: 20 },
      { text: "ADN tecnológico en todos los niveles", score: 30 }
    ]
  },
  // DIMENSIÓN 3: AUTOMATIZACIÓN DE DEMANDA
  {
    id: 11,
    title: "¿Cuál es el tiempo de respuesta promedio ante un Lead?",
    options: [
      { text: "Más de 12 horas", score: 5 },
      { text: "Menos de 1 hora (Esfuerzo humano)", score: 15 },
      { text: "Inmediato (Segundos vía IA)", score: 30 }
    ]
  },
  {
    id: 12,
    title: "¿Posee embudos de venta automatizados (Funneling)?",
    options: [
      { text: "Venta directa lineal únicamente", score: 5 },
      { text: "Embudo básico con seguimiento por email", score: 15 },
      { text: "Ecosistema de conversión dinámico y multi-paso", score: 30 }
    ]
  },
  {
    id: 13,
    title: "¿Utiliza Lead Scoring para priorizar sus ventas?",
    options: [
      { text: "Tratamos a todos los leads por igual", score: 5 },
      { text: "Calificación manual post-llamada", score: 15 },
      { text: "Score automático basado en interacciones", score: 30 }
    ]
  },
  {
    id: 14,
    title: "¿Cómo gestiona las reseñas y la reputación online?",
    options: [
      { text: "Reactivo: solo si hay quejas", score: 5 },
      { text: "Solicitud manual a clientes felices", score: 15 },
      { text: "Sistema automático de captura de autoridad", score: 30 }
    ]
  },
  {
    id: 15,
    title: "¿Su publicidad online está conectada con su CRM?",
    options: [
      { text: "Datos desconectados (Solo vemos clics)", score: 5 },
      { text: "Importación manual de leads", score: 15 },
      { text: "Cierre de bucle: Pauta optimizada por ventas reales", score: 30 }
    ]
  },
  // DIMENSIÓN 4: SOBERANÍA OPERATIVA
  {
    id: 16,
    title: "¿Qué tan escalable es su modelo de entrega de servicio?",
    options: [
      { text: "Dependencia total de Horas Hombre", score: 5 },
      { text: "Procesos semi-estandarizados", score: 20 },
      { text: "Escalabilidad total vía sistemas propietarios", score: 30 }
    ]
  },
  {
    id: 17,
    title: "¿Su equipo cuenta con capacitación técnica recurrente?",
    options: [
      { text: "Capacitación nula o esporádica", score: 5 },
      { text: "Capacitación por proyectos específicos", score: 15 },
      { text: "Protocolo de maestría continua activado", score: 30 }
    ]
  },
  {
    id: 18,
    title: "¿Cómo monitorea el ROI de sus acciones digitales?",
    options: [
      { text: "Por 'sensación' de ventas", score: 5 },
      { text: "Reportes mensuales estáticos", score: 15 },
      { text: "Dashboard de Inteligencia en tiempo real", score: 30 }
    ]
  },
  {
    id: 19,
    title: "¿Posee protocolos de seguridad y respaldo de datos?",
    options: [
      { text: "Confiamos en las nubes de terceros", score: 10 },
      { text: "Respaldos manuales periódicos", score: 20 },
      { text: "Arquitectura resiliente con redundancia", score: 30 }
    ]
  },
  {
    id: 20,
    title: "¿Cuál es su meta de crecimiento para este año?",
    options: [
      { text: "Mantener la estabilidad actual", score: 10 },
      { text: "Crecimiento lineal (10-30%)", score: 20 },
      { text: "Escalado exponencial (+100%) vía sistemas", score: 30 }
    ]
  }
];

const DigitalDiagnostic = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [selectedSector, setSelectedSector] = useState('general');
  const [isFinished, setIsFinished] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [leadData, setLeadData] = useState({ nombre: '', email: '', whatsapp: '' });

  const handleOptionSelect = (option) => {
    if (option.sector) setSelectedSector(option.sector);
    const nextScore = totalScore + option.score;
    setTotalScore(nextScore);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate audit processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
    }, 3000);

    // Send data to mail.php (Background)
    try {
      const formData = new FormData();
      formData.append('nombre', leadData.nombre);
      formData.append('email', leadData.email);
      formData.append('whatsapp', leadData.whatsapp);
      formData.append('score', totalScore);
      formData.append('sector', selectedSector);
      formData.append('form_type', 'Auditoría Estratégica');
      
      fetch('/mail.php', { method: 'POST', body: formData });
    } catch (e) { console.error(e); }
  };

  const getRoadmap = () => {
    const roadmaps = {
      tourism: {
        steps: ["Implementar Tour Virtual 360º", "Automatizar Reservas via WhatsApp", "SEO Global de Nicho"],
        priority: "Visibilidad y Conversión Instantánea"
      },
      industry: {
        steps: ["Digitalización de Logística", "Telemetría de Datos IA", "Soberanía de Infraestructura"],
        priority: "Eficiencia Operativa y Control"
      },
      retail: {
        steps: ["Portal B2B de Alta Velocidad", "Fusión CRM + IA", "Marketing de Retención Automático"],
        priority: "Escalabilidad de Ventas"
      },
      general: {
        steps: ["Arquitectura Web Pro", "Integración de IA Básica", "Estrategia de Contenidos"],
        priority: "Fundación Digital"
      }
    };
    return roadmaps[selectedSector] || roadmaps.general;
  };

  const scorePercentage = Math.min((totalScore / 580) * 100, 100);
  const roadmap = getRoadmap();

  return (
    <section id="diagnostico" className="py-40 px-6 bg-patagonia-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-patagonia-gold/10 border border-patagonia-gold/20 mb-4">
            <Activity className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-patagonia-gold">Auditoría Táctica de Madurez Digital</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight text-white italic">
            Mide tu <span className="text-patagonia-gold">Potencial.</span>
          </h2>
          <p className="text-patagonia-secondary text-lg font-light max-w-xl mx-auto leading-relaxed">
            Obtén un reporte de madurez digital personalizado y descubre las brechas críticas de tu ecosistema en Magallanes.
          </p>
        </div>

        <div className="relative min-h-[500px] bg-patagonia-surface/10 rounded-[4rem] border border-white/5 p-8 md:p-16 backdrop-blur-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Protocolo {currentStep + 1} / {questions.length}</span>
                  <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-patagonia-gold" 
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-light text-white leading-tight">{questions[currentStep].title}</h3>
                <div className="grid gap-4">
                  {questions[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(opt)}
                      className="w-full text-left p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-patagonia-gold/30 hover:bg-patagonia-gold/5 transition-all group flex justify-between items-center"
                    >
                      <span className="text-lg font-light text-patagonia-secondary group-hover:text-white transition-colors">{opt.text}</span>
                      <ArrowRight className="w-5 h-5 text-patagonia-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : isProcessing ? (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-8 py-20"
              >
                <div className="relative w-24 h-24">
                  <motion.div 
                    className="absolute inset-0 border-2 border-patagonia-gold rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-10 h-10 text-patagonia-gold animate-pulse" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-heading text-white">Generando Inteligencia...</h4>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/20 animate-pulse">Cruzando datos con estándares globales de la industria</p>
                </div>
              </motion.div>
            ) : !showResult ? (
              <motion.div
                key="lead"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-12"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-patagonia-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-patagonia-gold" />
                  </div>
                  <h3 className="text-4xl font-heading font-light text-white leading-tight">Su Diagnóstico está listo.</h3>
                  <p className="text-patagonia-secondary max-w-md mx-auto font-light">Complete sus datos para desbloquear el **Reporte Estratégico Completo** y su Roadmap táctico personalizado.</p>
                </div>
                <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto space-y-4">
                  <input 
                    required type="text" placeholder="Nombre completo" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-patagonia-gold outline-none text-white"
                    onChange={(e) => setLeadData({...leadData, nombre: e.target.value})}
                  />
                  <input 
                    required type="email" placeholder="Email corporativo" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-patagonia-gold outline-none text-white"
                    onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                  />
                  <input 
                    required type="tel" placeholder="WhatsApp (Ej: +569...)" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-patagonia-gold outline-none text-white"
                    onChange={(e) => setLeadData({...leadData, whatsapp: e.target.value})}
                  />
                  <button className="btn-primary w-full py-5 text-[10px] tracking-[0.3em] font-black shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                    DESBLOQUEAR MI REPORTE ESTRATÉGICO <ArrowRight className="inline ml-2 w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-white/10 uppercase tracking-widest italic">Recibirá una copia digital protegida en su email.</p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-16"
              >
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="relative w-48 h-48 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                      <motion.circle 
                        cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-patagonia-gold"
                        strokeDasharray={552.92}
                        initial={{ strokeDashoffset: 552.92 }}
                        animate={{ strokeDashoffset: 552.92 - (552.92 * scorePercentage) / 100 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-heading font-light text-white">{Math.round(scorePercentage)}%</span>
                      <span className="text-[8px] uppercase tracking-widest text-patagonia-gold font-bold">Madurez Digital</span>
                    </div>
                  </div>
                  <div className="space-y-6 text-left">
                    <h3 className="text-3xl md:text-5xl font-heading font-light text-white leading-tight">Estado: <span className="italic text-patagonia-gold">{scorePercentage > 70 ? "Ecosistema de Élite" : scorePercentage > 40 ? "Ecosistema en Desarrollo" : "Ecosistema Crítico"}</span></h3>
                    <p className="text-patagonia-secondary font-light text-lg italic leading-relaxed">
                      "Su organización cuenta con una base funcional, pero requiere una **unificación arquitectónica** para evitar fugas de eficiencia en el sector de {selectedSector}."
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 space-y-6">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-patagonia-gold" />
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white">Prioridad Táctica</h4>
                    </div>
                    <p className="text-xl font-heading font-light text-patagonia-gold leading-tight">{roadmap.priority}</p>
                    <ul className="space-y-4 pt-4 border-t border-white/5">
                      {roadmap.steps.map((step, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-patagonia-secondary">
                          <div className="w-1 h-1 rounded-full bg-patagonia-gold" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center items-center p-8 rounded-[2.5rem] bg-patagonia-gold text-black text-center space-y-6">
                    <ShieldCheck className="w-12 h-12" />
                    <h4 className="text-2xl font-heading font-bold leading-tight">¿Listo para ejecutar este Roadmap?</h4>
                    <a 
                      href={`https://wa.me/56995684198?text=Hola Franco! Acabo de obtener mi reporte de madurez (${Math.round(scorePercentage)}%). Mi prioridad es ${roadmap.priority}. Agendemos la sesión estratégica.`}
                      target="_blank" rel="noopener noreferrer"
                      className="w-full py-4 bg-black text-white rounded-full font-black text-[10px] tracking-[0.3em] uppercase hover:scale-105 transition-all"
                    >
                      AGENDAR SESIÓN DE DESPLIEGUE
                    </a>
                    <p className="text-[9px] uppercase font-bold tracking-widest opacity-60">Sesión de 15 minutos sin costo para Magallanes.</p>
                  </div>
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
