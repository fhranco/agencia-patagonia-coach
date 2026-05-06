import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowLeft } from 'lucide-react';
import BrandLogo from './BrandLogo';
import LeadCommand from './LeadCommand';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'servicio', path: '/#servicios' },
    { name: 'Inteligencia Artificial', path: '/servicios/automatizacion-con-ia' },
    { name: 'diseño web', path: '/servicios/desarrollo-web' },
    { name: 'redes sociales', path: '/servicios/comunicacion-digital' },
    { name: 'academia', path: '/academia' },
  ];

  return (
    <>
      <nav aria-label="Navegación Principal" className="fixed top-0 left-0 w-full z-[200] border-b border-white/5 bg-patagonia-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" onClick={() => setIsOpen(false)} aria-label="Inicio Patagoniacoach" className="flex items-center gap-3 group">
            <BrandLogo className="scale-150 transform origin-left md:scale-[1.75] transition-transform" />
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
        <div className="hidden md:flex items-center gap-6 lg:gap-10 font-heading text-[10px] uppercase tracking-[0.3em] font-semibold text-patagonia-secondary">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`hover:text-patagonia-gold transition-all duration-500 hover:tracking-[0.4em] ${link.color || ''}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => setShowContact(true)}
            className="hover:text-patagonia-gold transition-all duration-500 text-patagonia-gold border-b border-patagonia-gold/20 pb-0.5"
          >
            Contacto
          </button>
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="md:hidden fixed inset-0 w-full h-screen bg-black z-[210] flex flex-col items-center justify-center"
          >
            {/* Close button for full screen menu */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 text-white/40 hover:text-patagonia-gold transition-colors"
            >
              <X className="w-10 h-10 font-light" />
            </button>

            <div className="flex flex-col gap-10 px-6 py-12 font-heading text-2xl uppercase tracking-[0.4em] text-center">
              {!isHome && (
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)}
                  className="text-patagonia-gold flex items-center justify-center gap-4 mb-4 border border-patagonia-gold/20 py-4 rounded-2xl text-base"
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
                  className={`hover:text-patagonia-gold transition-all duration-500 hover:tracking-[0.6em] ${link.color || 'text-patagonia-secondary'}`}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => { setShowContact(true); setIsOpen(false); }}
                className="text-patagonia-gold border-b border-patagonia-gold/30 pb-2 hover:tracking-[0.6em] transition-all duration-500"
              >
                Contacto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

    {/* Contact Modal Popup */}
    <AnimatePresence>
      {showContact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl bg-patagonia-surface/5 rounded-[4rem] border border-white/5 shadow-2xl p-8 md:p-16"
          >
            <button 
              onClick={() => setShowContact(false)}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-all flex items-center gap-2 group z-[1010]"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold group-hover:mr-2 transition-all">Cerrar</span>
              <X className="w-8 h-8" />
            </button>
            
            <LeadCommand isModal={true} onClose={() => setShowContact(false)} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>  );
};

export default Navbar;

