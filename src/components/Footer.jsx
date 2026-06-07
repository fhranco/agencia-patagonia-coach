const Footer = () => {
  return (
    <footer className="py-40 border-t border-white/5 bg-patagonia-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-patagonia-gold/30 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-12 gap-20 md:gap-32">
          <div className="md:col-span-5 space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-patagonia-gold rounded-sm rotate-45 shadow-[0_0_30px_rgba(251,145,77,0.3)]" />
                <span className="font-heading font-light text-4xl tracking-tighter text-patagonia-white">PatagoniaCoach</span>
              </div>
              <p className="text-patagonia-secondary text-xl font-light leading-relaxed max-w-md">
                Diseñamos ecosistemas de inmersión total donde la cultura y la tecnología convergen para liderar la nueva economía digital.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-[9px] font-heading tracking-[0.5em] text-patagonia-gold uppercase font-bold">Protocolo de Origen</p>
              <p className="text-xl font-heading font-light text-patagonia-white/80 tracking-tight">Desde el territorio más salvaje, <br/>impulsando la transformación global.</p>
              <p className="text-[10px] text-patagonia-secondary/70 uppercase tracking-[0.3em]">Punta Arenas · Patagonia Chilena.</p>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-10">
            <h3 className="text-[9px] font-heading tracking-[0.5em] text-patagonia-white/60 uppercase font-black">Servicios</h3>
            <ul className="space-y-6 text-patagonia-secondary font-light text-[10px] uppercase tracking-widest">
              <li><a href="/servicios/desarrollo-web" className="hover:text-patagonia-gold transition-colors">diseño web</a></li>
              <li><a href="/servicios/seo-local-magallanes" className="hover:text-patagonia-gold transition-colors">SEO Local</a></li>
              <li><a href="/servicios/automatizacion-con-ia" className="hover:text-patagonia-gold transition-colors">Inteligencia Artificial</a></li>
              <li><a href="/servicios/comunicacion-digital" className="hover:text-patagonia-gold transition-colors">redes sociales</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-10">
            <h3 className="text-[9px] font-heading tracking-[0.5em] text-patagonia-white/60 uppercase font-black">Zonas</h3>
            <ul className="space-y-6 text-patagonia-secondary font-light text-[10px] uppercase tracking-widest">
              <li><a href="/zonas/punta-arenas" className="hover:text-patagonia-gold transition-colors">Punta Arenas</a></li>
              <li><a href="/zonas/puerto-natales" className="hover:text-patagonia-gold transition-colors">Puerto Natales</a></li>
              <li><a href="/zonas/magallanes" className="hover:text-patagonia-gold transition-colors">Magallanes</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-10">
            <h3 className="text-[9px] font-heading tracking-[0.5em] text-patagonia-white/60 uppercase font-black">Contacto Elite</h3>
            <div className="space-y-8">
              <a href="mailto:hola@agenciapatagoniacoach.cl" className="block text-patagonia-white/90 hover:text-patagonia-gold transition-colors font-heading font-light text-2xl tracking-tighter">
                hola@agenciapatagoniacoach.cl
              </a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/francogallardo/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full hover:bg-patagonia-gold/20 transition-all border border-white/5">
                  <span className="text-[9px] font-black">IN</span>
                </a>
                <a href="https://instagram.com/patagoniacoach.cl" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full hover:bg-patagonia-gold/20 transition-all border border-white/5">
                  <span className="text-[9px] font-black">IG</span>
                </a>
                <a href="https://wa.me/56995684198" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full hover:bg-patagonia-gold/20 transition-all border border-white/5">
                  <span className="text-[9px] font-black">WA</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] text-white/70 uppercase font-black tracking-[0.6em]">
          <span>© 2026 PATAGONIACOACH · FREEDOM PERSPECTIVE EDITION.</span>
          <div className="flex gap-14">
            <span className="hover:text-patagonia-gold transition-colors cursor-help">Security Certified</span>
            <span className="hover:text-patagonia-gold transition-colors cursor-help">AI Ethical Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
