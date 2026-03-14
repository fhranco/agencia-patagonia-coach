import { motion } from 'framer-motion';

import BrandLogo from './BrandLogo';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-patagonia-void/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <BrandLogo className="scale-90 transform origin-left" />

        <div className="hidden md:flex items-center gap-12 font-heading text-xs uppercase tracking-widest text-white/60">
          <a href="#" className="hover:text-patagonia-red transition-colors">Agencia</a>
          <a href="#consultoría" className="hover:text-patagonia-red transition-colors">Consultoría</a>
          <a href="#academia" className="hover:text-patagonia-red transition-colors">Academia</a>
          <a href="#contacto" className="hover:text-patagonia-red transition-colors text-patagonia-cyan">Contacto</a>
        </div>


        <button className="btn-primary !px-6 !py-3 !text-xs">
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
