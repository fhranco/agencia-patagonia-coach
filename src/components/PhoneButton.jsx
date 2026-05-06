import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const PhoneButton = ({ size = "normal" }) => {
  const phoneNumber = "+56995684198";
  const isSmall = size === "small";

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.6 }}
      whileHover={{ scale: 1.05, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
      className={`${isSmall ? 'w-10 h-10 md:w-12 md:h-12' : 'w-14 h-14'} bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group transition-all hover:bg-patagonia-cyan shadow-xl relative overflow-hidden`}
    >
      {/* Dynamic Pulse */}
      <motion.div
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.2, 0, 0.2]
        }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="absolute inset-0 bg-white/40 rounded-full"
      />
      <Phone className={`${isSmall ? 'w-4 h-4 md:w-5 md:h-5' : 'w-6 h-6'} text-white/70 group-hover:text-patagonia-void relative z-10`} />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-patagonia-void border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-heading tracking-widest text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        LLAMAR
      </div>
    </motion.a>
  );
};

export default PhoneButton;
