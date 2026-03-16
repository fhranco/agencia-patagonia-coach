import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Agencia', path: '/' },
    { name: 'Evolución IA', path: '/ia', color: 'text-patagonia-cyan' },
    { name: 'Marketing', path: '/marketing' },
    { name: 'Consultoría', path: '/consultoria' },
    { name: 'Academia', path: '/academia' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-patagonia-void/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <BrandLogo className="scale-90 transform origin-left" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 font-heading text-xs uppercase tracking-widest text-white/60">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`hover:text-patagonia-red transition-colors ${link.color || ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contacto" className="hover:text-patagonia-red transition-colors text-patagonia-cyan">Contacto</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block btn-primary !px-6 !py-3 !text-xs">
            LOGIN
          </button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-patagonia-void border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-10 font-heading text-sm uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-patagonia-red transition-colors ${link.color || 'text-white/60'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="#contacto" 
                onClick={() => setIsOpen(false)}
                className="text-patagonia-cyan hover:text-patagonia-red transition-colors"
              >
                Contacto
              </a>
              <button className="btn-primary w-full mt-4">
                LOGIN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

