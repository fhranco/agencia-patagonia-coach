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
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] border border-white/20 group"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
      <MessageSquare className="w-8 h-8 text-white relative z-10" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-patagonia-void border border-white/10 px-4 py-2 rounded-lg text-xs font-heading tracking-widest text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        HABLAR CON UN EXPERTO
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
