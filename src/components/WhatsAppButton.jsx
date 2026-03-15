import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "56995684198"; 
  const message = "Hola! Me interesa saber más sobre los servicios de PatagoniaCoach.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.6 }}
      whileHover={{ scale: 1.05, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
      className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group transition-all hover:bg-[#25D366]"
    >
      <MessageSquare className="w-6 h-6 text-white/70 group-hover:text-white" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-patagonia-void border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-heading tracking-widest text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        WHATSAPP
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
