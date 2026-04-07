import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Agencia', path: '/' },
    { name: 'Evolución IA', path: '/ia', color: 'text-patagonia-gold' },
    { name: 'Marketing', path: '/marketing' },
    { name: 'Consultoría', path: '/consultoria' },
    { name: 'Academia', path: '/academia' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-patagonia-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" onClick={() => setIsOpen(false)} className="transition-transform hover:scale-105 duration-500">
          <BrandLogo className="scale-100 transform origin-left" />
        </Link>

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
          <button className="hidden sm:block px-8 py-3 bg-patagonia-red text-patagonia-white rounded-full font-black text-[9px] uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,23,33,0.15)]">
            ACCESO CLIENTE
          </button>

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
              <button className="w-[240px] mt-8 bg-patagonia-red text-patagonia-white py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl">
                ACCESO CLIENTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

