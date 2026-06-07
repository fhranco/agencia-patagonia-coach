import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import FloatingActions from './components/FloatingActions';
import ScrollToHash from './components/ScrollToHash';
import BottomNav from './components/BottomNav';

// Static import for the primary landing to ensure instant initial load
import MainLanding from './pages/MainLanding';

// Lazy loaded page components
const IALanding = lazy(() => import('./pages/IALanding'));
const MarketingLanding = lazy(() => import('./pages/MarketingLanding'));
const ConsultingLanding = lazy(() => import('./pages/ConsultingLanding'));
const AcademiaLanding = lazy(() => import('./pages/AcademiaLanding'));

// Core Service Pages
const DesarrolloWeb = lazy(() => import('./pages/DesarrolloWeb'));
const SEOLocal = lazy(() => import('./pages/SEOLocal'));
const IAVisual = lazy(() => import('./pages/IAVisual'));
const Tours360 = lazy(() => import('./pages/Tours360'));
const AppsPro = lazy(() => import('./pages/AppsPro'));

// Regional Zone Pages
const ZonaPuntaArenas = lazy(() => import('./pages/ZonaPuntaArenas'));
const ZonaPuertoNatales = lazy(() => import('./pages/ZonaPuertoNatales'));
const ZonaTierraDelFuego = lazy(() => import('./pages/ZonaTierraDelFuego'));
const ZonaMagallanes = lazy(() => import('./pages/ZonaMagallanes'));

// 8 B2B Local SEO Pages
const MarketingDigitalPuntaArenas = lazy(() => import('./pages/MarketingDigitalPuntaArenas'));
const CreacionPaginasWebPuntaArenas = lazy(() => import('./pages/CreacionPaginasWebPuntaArenas'));
const ManejoRedesSocialesPuntaArenas = lazy(() => import('./pages/ManejoRedesSocialesPuntaArenas'));
const VideosRedesSocialesPuntaArenas = lazy(() => import('./pages/VideosRedesSocialesPuntaArenas'));
const CreacionReelsPuntaArenas = lazy(() => import('./pages/CreacionReelsPuntaArenas'));
const FotografiaRedesSociales = lazy(() => import('./pages/FotografiaRedesSociales'));
const SEOLocalPuntaArenas = lazy(() => import('./pages/SEOLocalPuntaArenas'));
const AutomatizacionIAEmpresas = lazy(() => import('./pages/AutomatizacionIAEmpresas'));

const PageLoader = () => (
  <div className="min-h-screen bg-[#070b19] flex flex-col items-center justify-center space-y-4">
    <div className="w-12 h-12 rounded-full border-4 border-patagonia-cyan/20 border-t-patagonia-cyan animate-spin"></div>
    <span className="text-sm font-mono text-slate-400 tracking-wider">PATAGONIACOACH</span>
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative">
        <ScrollToHash />
        <CustomCursor />
        <FloatingActions />
        <BottomNav />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<MainLanding />} />
            
            {/* Core Services */}
            <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
            <Route path="/servicios/seo-local-magallanes" element={<SEOLocal />} />
            <Route path="/servicios/automatizacion-con-ia" element={<IALanding />} />
            <Route path="/servicios/comunicacion-digital" element={<MarketingLanding />} />
            <Route path="/servicios/consultoria-transformacion-digital" element={<ConsultingLanding />} />
            <Route path="/servicios/ia-generativa-visual" element={<IAVisual />} />
            <Route path="/servicios/tours-virtuales-360" element={<Tours360 />} />
            <Route path="/servicios/aplicaciones-web-pro" element={<AppsPro />} />
            
            {/* 8 B2B Local SEO Pages */}
            <Route path="/servicios/marketing-digital-punta-arenas" element={<MarketingDigitalPuntaArenas />} />
            <Route path="/servicios/creacion-paginas-web-punta-arenas" element={<CreacionPaginasWebPuntaArenas />} />
            <Route path="/servicios/manejo-redes-sociales-punta-arenas" element={<ManejoRedesSocialesPuntaArenas />} />
            <Route path="/servicios/videos-redes-sociales-punta-arenas" element={<VideosRedesSocialesPuntaArenas />} />
            <Route path="/servicios/creacion-reels-punta-arenas" element={<CreacionReelsPuntaArenas />} />
            <Route path="/servicios/fotografia-para-redes-sociales" element={<FotografiaRedesSociales />} />
            <Route path="/servicios/seo-local-punta-arenas" element={<SEOLocalPuntaArenas />} />
            <Route path="/servicios/automatizacion-ia-empresas" element={<AutomatizacionIAEmpresas />} />
            
            {/* Zones */}
            <Route path="/zonas/punta-arenas" element={<ZonaPuntaArenas />} />
            <Route path="/zonas/puerto-natales" element={<ZonaPuertoNatales />} />
            <Route path="/zonas/tierra-del-fuego" element={<ZonaTierraDelFuego />} />
            <Route path="/zonas/magallanes" element={<ZonaMagallanes />} />
            
            {/* Legacy & Short Paths */}
            <Route path="/ia" element={<IALanding />} />
            <Route path="/marketing" element={<MarketingLanding />} />
            <Route path="/consultoria" element={<ConsultingLanding />} />
            <Route path="/academia" element={<AcademiaLanding />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
