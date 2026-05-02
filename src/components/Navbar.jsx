import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowLeft } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Desarrollo Web', path: '/servicios/desarrollo-web' },
    { name: 'Evolución IA', path: '/servicios/automatizacion-con-ia' },
    { name: 'Academia', path: '/academia' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-patagonia-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" onClick={() => setIsOpen(false)} className="transition-transform hover:scale-105 duration-500">
            <BrandLogo className="scale-100 transform origin-left" />
          </Link>
          
          {!isHome && (
            <Link 
              to="/" 
              className="hidden md:flex items-center gap-3 text-[9px] font-black tracking-[0.4em] text-patagonia-gold hover:text-white transition-all duration-500 bg-white/5 px-4 py-2 rounded-full border border-patagonia-gold/20"
            >
              <ArrowLeft className="w-3 h-3" />
              VOLVER AL INICIO
            </Link>
          )}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-14 font-heading text-[10px] uppercase tracking-[0.3em] font-semibold text-patagonia-secondary">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`hover:text-patagonia-gold transition-all duration-500 hover:tracking-[0.4em] ${link.color || ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contacto" className="hover:text-patagonia-gold transition-all duration-500 text-patagonia-gold border-b border-patagonia-gold/20 pb-0.5">Contacto</a>
        </div>

        <div className="flex items-center gap-6">
          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-patagonia-white hover:text-patagonia-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden absolute top-24 left-0 w-full bg-patagonia-black/95 backdrop-blur-2xl border-b border-white/5 min-h-[60vh] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-10 px-6 py-12 font-heading text-lg uppercase tracking-[0.4em] text-center">
              {!isHome && (
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)}
                  className="text-patagonia-gold flex items-center justify-center gap-4 mb-4 border border-patagonia-gold/20 py-4 rounded-2xl"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Inicio
                </Link>
              )}
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-patagonia-gold transition-all ${link.color || 'text-patagonia-secondary'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="#contacto" 
                onClick={() => setIsOpen(false)}
                className="text-patagonia-gold border-b border-patagonia-gold/30 pb-2"
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

