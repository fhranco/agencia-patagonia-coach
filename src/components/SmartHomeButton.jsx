import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ArrowUp } from 'lucide-react';

const SmartHomeButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="fixed right-8 bottom-8 z-[150] w-14 h-14 rounded-full flex items-center justify-center bg-[#00D4FF] text-black shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all border border-white/20 backdrop-blur-3xl group overflow-hidden"
        >
          {/* Symmetrical Radar/Pulse Effect */}
          <motion.div
            animate={{ 
              scale: [1, 1.6, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-white/40 rounded-full z-0"
          />
          
          <div className="relative z-10 flex items-center justify-center">
            {isHome ? (
              <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <Home className="w-6 h-6 group-hover:scale-110 transition-transform" />
            )}
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default SmartHomeButton;
