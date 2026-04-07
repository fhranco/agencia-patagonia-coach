import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Bot, X, Share2, Plus } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import PhoneButton from './PhoneButton';
import LeadAgent from './LeadAgent';

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

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

      {/* Editorial Sidebar Tab Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: -10, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-28 rounded-l-3xl flex flex-col items-center justify-center shadow-2xl transition-all border-y border-l border-white/20 backdrop-blur-3xl group ${
          isOpen 
            ? 'bg-white text-black' 
            : 'bg-patagonia-red text-white'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="flex flex-col items-center gap-3">
             <Share2 className="w-6 h-6 mb-2" />
             <span className="[writing-mode:vertical-lr] rotate-180 text-[8px] uppercase tracking-[0.4em] font-black group-hover:tracking-[0.5em] transition-all">MASTER CENTER</span>
          </div>
        )}
        
        {/* Active Indicator Glow */}
        {!isOpen && (
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-patagonia-gold rounded-full blur-[2px]" 
          />
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

