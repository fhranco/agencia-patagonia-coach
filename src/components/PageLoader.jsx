const PageLoader = () => (
  <div className="h-screen w-full bg-patagonia-black flex items-center justify-center">
    <div className="flex flex-col items-center gap-6">
      <div className="w-8 h-8 border-2 border-patagonia-gold border-t-transparent rounded-full animate-spin" />
      <span className="text-[8px] uppercase tracking-[0.4em] font-black text-white/20">Cargando</span>
    </div>
  </div>
);

export default PageLoader;
