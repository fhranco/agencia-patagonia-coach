import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, MessageSquare, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../constants/contact';

const LeadAgent = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed top-1/2 -translate-y-1/2 right-6 md:right-16 z-[1050]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-[320px] md:w-[380px] bg-patagonia-black/95 backdrop-blur-3xl border border-white/10 rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col p-6 space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-patagonia-gold/30 flex items-center justify-center bg-patagonia-gold/10">
                  <Bot className="w-5 h-5 text-patagonia-gold" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Asistente PatagoniaCoach</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span className="text-[8px] text-patagonia-secondary uppercase tracking-[0.2em] font-bold">Canal Directo Activo</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                aria-label="Cerrar asistente"
                className="p-2 hover:bg-white/5 rounded-full text-patagonia-secondary hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Status & Information */}
            <div className="space-y-4 text-left">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <p className="text-xs text-patagonia-white font-light leading-relaxed">
                  Para brindarte atención técnica personalizada y responder requerimientos sobre desarrollo, SEO e inteligencia artificial, nuestro canal principal está coordinado directamente por WhatsApp.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppUrl('Hola PatagoniaCoach, me gustaría hacer una consulta técnica y comercial sobre sus servicios.')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
                className="w-full py-4 bg-patagonia-gold text-black rounded-full text-[10px] tracking-[0.3em] font-black uppercase hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar por WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-center text-[8px] uppercase tracking-[0.2em] text-patagonia-secondary/60 font-bold">
                Atención para empresas de Magallanes
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadAgent;
