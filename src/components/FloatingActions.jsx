import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Cpu, Bot, X, Activity, Home, ArrowUp } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import PhoneButton from './PhoneButton';
import LeadAgent from './LeadAgent';
import DigitalDiagnostic from './DigitalDiagnostic';

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showAudit, setShowAudit] = useState(false);
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePath = location.pathname === '/';

  useEffect(() => {
    const handleOpenChat = () => {
      setShowChat(true);
      setIsOpen(false);
    };

    const toggleHomeVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsHomeVisible(true);
      } else {
        setIsHomeVisible(false);
      }
    };

    window.addEventListener('open-ai-chat', handleOpenChat);
    window.addEventListener('scroll', toggleHomeVisibility);
    
    return () => {
      window.removeEventListener('open-ai-chat', handleOpenChat);
      window.removeEventListener('scroll', toggleHomeVisibility);
    };
  }, []);

  const handleHomeClick = () => {
    if (isHomePath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {/* 0. Full Screen Mobile Overlay when Menu is Open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[450] bg-black/80 backdrop-blur-2xl md:hidden"
          />
        )}
      </AnimatePresence>

      {/* 1. Digital Audit Tab (YELLOW) - ELEVATED POSITION */}
      <motion.button
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowAudit(true)}
        aria-label="Iniciar Diagnóstico Digital"
        className="fixed top-[35%] right-0 z-[500] w-10 md:w-14 h-10 md:h-14 rounded-l-full flex items-center justify-center bg-patagonia-gold text-black shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all border-y border-l border-white/20 backdrop-blur-3xl group overflow-hidden"
      >
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-white/40 rounded-full"
        />
        <Activity className="w-4 h-4 md:w-6 md:h-6 relative z-10" />
      </motion.button>

      <div className="fixed bottom-8 md:bottom-12 right-0 z-[500] flex flex-col items-end gap-2 md:gap-3">
        {/* 2. Expanded Menu & AI Assistant Tab (CALIPSO) */}
        <div className="flex flex-col items-end gap-2 md:gap-3">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { 
                    opacity: 1, 
                    transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
                  },
                  hidden: { 
                    opacity: 0,
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                className="flex flex-col items-end gap-2 md:gap-3 pr-2 md:pr-4 mb-2 z-[600]"
              >
                <motion.div variants={{ visible: { opacity: 1, x: 0, scale: 1 }, hidden: { opacity: 0, x: 50, scale: 0.8 } }}>
                   <button
                     onClick={() => { setShowChat(true); setIsOpen(false); }}
                     aria-label="Abrir Asistente IA"
                     className="w-10 h-10 md:w-12 md:h-12 bg-white/5 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/20 shadow-2xl hover:bg-[#00D4FF]/20 transition-all relative overflow-hidden"
                   >
                     <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-[#00D4FF]/30 rounded-full" />
                     <Cpu className="w-4 h-4 md:w-5 md:h-5 text-[#00D4FF] relative z-10" />
                   </button>
                </motion.div>
                <motion.div variants={{ visible: { opacity: 1, x: 0, scale: 1 }, hidden: { opacity: 0, x: 50, scale: 0.8 } }}>
                  <PhoneButton size="small" />
                </motion.div>
                <motion.div variants={{ visible: { opacity: 1, x: 0, scale: 1 }, hidden: { opacity: 0, x: 50, scale: 0.8 } }}>
                  <WhatsAppButton size="small" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Alternar menú de contacto y chat de IA"
            className={`w-10 h-10 md:w-14 md:h-14 rounded-l-full flex items-center justify-center shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all border-y border-l border-white/20 backdrop-blur-3xl z-[600] group overflow-hidden ${
              isOpen ? 'bg-white text-black' : 'bg-[#00D4FF] text-white'
            }`}
          >
            {!isOpen && (
               <>
                <motion.div animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.3, 0.3] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute inset-0 bg-white/30 rounded-full z-0" />
                <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="absolute inset-0 bg-[#00D4FF]/20 rounded-full z-0" />
               </>
            )}
            {isOpen ? <X className="w-4 h-4 md:w-5 md:h-5 relative z-10" /> : <Bot className="w-4 h-4 md:w-6 md:h-6 text-black/80 relative z-10" />}
          </motion.button>
        </div>

        {/* 3. Smart Home Button - Tab (CALIPSO) */}
        <AnimatePresence>
          {isHomeVisible && (
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHomeClick}
              aria-label={isHomePath ? "Desplazarse arriba" : "Ir al inicio"}
              className="w-10 h-10 md:w-12 md:h-12 rounded-l-full flex items-center justify-center bg-white/10 text-[#00D4FF] shadow-2xl transition-all border-y border-l border-white/10 backdrop-blur-3xl group overflow-hidden z-[500]"
            >
               <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute inset-0 bg-[#00D4FF]/10 rounded-full" />
              {isHomePath ? <ArrowUp className="w-4 h-4 md:w-5 md:h-5 relative z-10" /> : <Home className="w-4 h-4 md:w-5 md:h-5 relative z-10" />}
            </motion.button>
          )}
        </AnimatePresence>

        <LeadAgent isOpen={showChat} onClose={() => setShowChat(false)} />
      </div>

      {/* Audit Modal Integration */}
      <AnimatePresence>
        {showAudit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl"
            >
              {/* Botón de Cierre Elite - Pantalla Completa */}
              <button 
                onClick={() => setShowAudit(false)}
                aria-label="Cerrar Diagnóstico Digital"
                className="fixed top-8 right-8 z-[1100] w-12 h-12 bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-patagonia-red transition-all group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
              <div className="bg-patagonia-surface/5 rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden">
                <DigitalDiagnostic isModal={true} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActions;

