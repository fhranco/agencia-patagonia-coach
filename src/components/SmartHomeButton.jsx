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
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          onClick={handleClick}
          className="fixed top-8 left-8 z-[150] flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full group hover:bg-white/10 transition-all shadow-2xl"
        >
          <div className="p-2 rounded-full bg-patagonia-gold/20 group-hover:bg-patagonia-gold transition-all">
            {isHome ? (
              <ArrowUp className="w-4 h-4 text-patagonia-gold group-hover:text-black transition-all" />
            ) : (
              <Home className="w-4 h-4 text-patagonia-gold group-hover:text-black transition-all" />
            )}
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/60 group-hover:text-white transition-all">
            {isHome ? "Subir" : "Inicio"}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default SmartHomeButton;
