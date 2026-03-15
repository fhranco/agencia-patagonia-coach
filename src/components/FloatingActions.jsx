import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Bot, X, Send, Loader2, ChevronUp } from 'lucide-react';
import AIChat from './AIChat';
import WhatsAppButton from './WhatsAppButton';
import PhoneButton from './PhoneButton';

const FloatingActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-4">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col items-center gap-4 mb-2"
          >
            {/* We'll pass a 'subtle' prop or just use them as they are but remove their fixed positioning if possible */}
            {/* For now, let's just coordinate their fixed positions instead of a wrapper to avoid breaking styles */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActions;
