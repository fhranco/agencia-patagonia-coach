const Footer = () => {
  return (
    <footer className="py-32 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-patagonia-red/50 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-patagonia-red rounded-sm rotate-45 shadow-[0_0_20px_rgba(240,20,10,0.4)]" />
                <span className="font-heading font-bold text-4xl tracking-tighter uppercase text-white">PatagoniaCoach</span>
              </div>
              <p className="text-white/50 text-xl font-light leading-relaxed max-w-md">
                Diseñamos ecosistemas donde la cultura y la tecnología convergen para liderar la nueva economía digital.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-heading tracking-[0.4em] text-patagonia-red uppercase">Sello de Origen</p>
              <p className="text-lg font-light text-white/80">Desde el fin del mundo, impulsando la transformación global.</p>
              <p className="text-[10px] text-white/30 uppercase tracking-widest">Punta Arenas, Patagonia Chilena.</p>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <h4 className="text-xs font-heading tracking-[0.4em] text-white/40 uppercase">Ecosistema</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><a href="#agencia" className="hover:text-patagonia-red transition-colors">Agencia</a></li>
              <li><a href="#consultoria" className="hover:text-patagonia-red transition-colors">Consultoría</a></li>
              <li><a href="#academia" className="hover:text-patagonia-red transition-colors">Academia</a></li>
              <li><a href="#protocolo" className="hover:text-patagonia-red transition-colors">Protocolo</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-8">
            <h4 className="text-xs font-heading tracking-[0.4em] text-white/40 uppercase">Legal</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer IA</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="text-xs font-heading tracking-[0.4em] text-white/40 uppercase">Contacto Directo</h4>
            <div className="space-y-6">
              <a href="mailto:hola@agenciapatagoniacoach.cl" className="block text-white/80 hover:text-patagonia-cyan transition-colors font-light text-lg">
                hola@agenciapatagoniacoach.cl
              </a>
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/francogallardo/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-patagonia-red/20 transition-all">
                  <span className="text-xs font-bold">IN</span>
                </a>
                <a href="https://instagram.com/patagoniacoach.cl" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-patagonia-red/20 transition-all">
                  <span className="text-xs font-bold">IG</span>
                </a>
                <a href="https://wa.me/56995684198" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-patagonia-red/20 transition-all">
                  <span className="text-xs font-bold">WA</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/20 uppercase tracking-[0.5em] font-medium">
          <span>© 2026 PATAGONIACOACH. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-12">
            <span>Security Certified</span>
            <span>AI Ethical Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
