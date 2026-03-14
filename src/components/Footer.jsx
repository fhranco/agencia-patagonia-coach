const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-black">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-16">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-patagonia-red rounded-sm rotate-45" />
              <span className="font-heading font-bold text-3xl tracking-tighter uppercase">PatagoniaCoach</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Cultura y Tecnología para la Economía del Mañana. Impulsamos su negocio en <strong>agenciapatagoniacoach.cl</strong> mediante IA aplicada y estrategia digital.
            </p>

          </div>
          
          <div className="space-y-6">
            <h4 className="text-sm font-heading tracking-widest text-patagonia-red">NAVEGACIÓN</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Agencia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultoría</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Protocolo</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-heading tracking-widest text-patagonia-red">LEGAL</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer IA</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 uppercase tracking-[0.3em]">
          <span>© 2026 PATAGONIACOACH. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/francogallardo/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linkedin</a>
            <a href="https://instagram.com/patagoniacoach.cl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://wa.me/56995684198" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
