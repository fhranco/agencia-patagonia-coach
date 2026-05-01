import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Bot, X, Share2, Plus } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import PhoneButton from './PhoneButton';
import LeadAgent from './LeadAgent';

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const handleOpenChat = () => {
      setShowChat(true);
      setIsOpen(false);
    };

    window.addEventListener('open-ai-chat', handleOpenChat);
    return () => window.removeEventListener('open-ai-chat', handleOpenChat);
  }, []);

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-[500] flex flex-col items-center gap-6">
      {/* Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="flex flex-col items-center gap-4 pr-6"
          >
            {/* AI Assistant Button */}
            <motion.button
               whileHover={{ scale: 1.1 }}
               onClick={() => {
                 setShowChat(true);
                 setIsOpen(false);
               }}
               className="w-14 h-14 bg-patagonia-red rounded-full flex items-center justify-center border border-patagonia-gold/30 shadow-[0_0_20px_rgba(255,23,33,0.3)] group"
            >
              <Bot className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </motion.button>

            <PhoneButton />
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editorial Sidebar Tab Button with Pulse (Slim Mode) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-10 h-48 rounded-l-2xl flex flex-col items-center justify-center shadow-2xl transition-all border-y border-l border-white/10 backdrop-blur-3xl group relative overflow-hidden ${
          isOpen 
            ? 'bg-white text-black' 
            : 'bg-patagonia-red text-white'
        }`}
      >
        {/* Continuous Pulse Glow (Very Soft) */}
        {!isOpen && (
           <motion.div
             animate={{ 
               opacity: [0, 0.4, 0]
             }}
             transition={{ repeat: Infinity, duration: 3 }}
             className="absolute inset-0 bg-patagonia-gold/20 z-0"
           />
        )}

        {isOpen ? (
          <X className="w-4 h-4" />
        ) : (
          <div className="flex flex-col items-center gap-8 z-10">
             <Bot className="w-4 h-4 text-patagonia-gold opacity-80" />
             <span className="[writing-mode:vertical-lr] rotate-180 text-[7px] uppercase tracking-[0.6em] font-black group-hover:tracking-[0.8em] transition-all whitespace-nowrap">MASTER CENTER</span>
             <Share2 className="w-4 h-4 opacity-20" />
          </div>
        )}
      </motion.button>

      {/* DeepSeek Agent Window */}
      <LeadAgent 
        isOpen={showChat} 
        onClose={() => setShowChat(false)} 
      />
    </div>
  );
};

export default FloatingActions;

