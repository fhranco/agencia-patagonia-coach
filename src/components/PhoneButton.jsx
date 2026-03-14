import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const PhoneButton = () => {
  const phoneNumber = "+56995684198";

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-28 right-8 z-50 w-16 h-16 bg-patagonia-cyan rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.2)] border border-white/20 group"
    >
      <div className="absolute inset-0 rounded-full bg-patagonia-cyan animate-pulse opacity-20 group-hover:opacity-40 transition-opacity" />
      <Phone className="w-7 h-7 text-patagonia-void relative z-10" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-patagonia-void border border-white/10 px-4 py-2 rounded-lg text-xs font-heading tracking-widest text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        LLAMAR A UN ASESOR
      </div>
    </motion.a>
  );
};

export default PhoneButton;
