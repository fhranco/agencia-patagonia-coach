import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, X } from 'lucide-react';
import DigitalDiagnostic from './DigitalDiagnostic';

const FloatingAudit = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón Flotante */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-patagonia-gold rounded-full shadow-[0_0_30px_rgba(250,204,21,0.4)] flex items-center justify-center group border-4 border-black/20"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-patagonia-gold rounded-full opacity-30"
        />
        <Activity className="w-8 h-8 text-black relative z-10" />
        
        {/* Tooltip */}
        <div className="absolute right-20 bg-patagonia-gold text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl">
          Auditoría Digital Gratis
        </div>
      </motion.button>

      {/* Modal de Auditoría */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl"
            >
              {/* Cerrar */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 md:-right-12 text-white/40 hover:text-white transition-all flex items-center gap-2 group"
              >
                <span className="text-[10px] uppercase tracking-widest font-bold group-hover:mr-2 transition-all">Cerrar Auditoría</span>
                <X className="w-8 h-8" />
              </button>

              {/* Contenedor del Diagnóstico */}
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

export default FloatingAudit;
