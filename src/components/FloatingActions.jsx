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
    <div className="fixed bottom-8 right-28 z-[500] flex flex-col items-center gap-4">
      {/* Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col items-center gap-4 mb-2"
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

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all border border-white/20 backdrop-blur-xl ${
          isOpen 
            ? 'bg-white text-black rotate-45' 
            : 'bg-patagonia-red shadow-[0_0_40px_rgba(255,23,33,0.4)] text-white'
        }`}
      >
        {isOpen ? (
          <Plus className="w-8 h-8 rotate-45 text-black" />
        ) : (
          <div className="relative">
            <Share2 className="w-8 h-8" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-patagonia-gold rounded-full border-2 border-black" 
            />
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

