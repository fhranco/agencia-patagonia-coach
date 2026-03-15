import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-patagonia-void/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/">
          <BrandLogo className="scale-90 transform origin-left" />
        </Link>

        <div className="hidden md:flex items-center gap-12 font-heading text-xs uppercase tracking-widest text-white/60">
          <Link to="/" className="hover:text-patagonia-red transition-colors">Agencia</Link>
          <Link to="/ia" className="hover:text-patagonia-cyan transition-colors">Evolución IA</Link>
          <Link to="/marketing" className="hover:text-patagonia-red transition-colors">Marketing</Link>
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
