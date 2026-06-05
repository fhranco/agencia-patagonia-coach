import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CustomCursor from './components/CustomCursor';
import FloatingActions from './components/FloatingActions';
import ScrollToHash from './components/ScrollToHash';
import PageLoader from './components/PageLoader';

const MainLanding = lazy(() => import('./pages/MainLanding'));
const IALanding = lazy(() => import('./pages/IALanding'));
const MarketingLanding = lazy(() => import('./pages/MarketingLanding'));
const ConsultingLanding = lazy(() => import('./pages/ConsultingLanding'));
const AcademiaLanding = lazy(() => import('./pages/AcademiaLanding'));
const DesarrolloWeb = lazy(() => import('./pages/DesarrolloWeb'));
const SEOLocal = lazy(() => import('./pages/SEOLocal'));
const IAVisual = lazy(() => import('./pages/IAVisual'));
const Tours360 = lazy(() => import('./pages/Tours360'));
const AppsPro = lazy(() => import('./pages/AppsPro'));
const ZonaPuntaArenas = lazy(() => import('./pages/ZonaPuntaArenas'));
const ZonaPuertoNatales = lazy(() => import('./pages/ZonaPuertoNatales'));
const ZonaTierraDelFuego = lazy(() => import('./pages/ZonaTierraDelFuego'));
const ZonaMagallanes = lazy(() => import('./pages/ZonaMagallanes'));

function App() {
  return (
    <HelmetProvider>
    <Router>
      <div className="relative">
        <ScrollToHash />
        <CustomCursor />
        <FloatingActions />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<MainLanding />} />
            
            <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
            <Route path="/servicios/seo-local-magallanes" element={<SEOLocal />} />
            <Route path="/servicios/seo-local-punta-arenas" element={<SEOLocal />} />
            <Route path="/servicios/automatizacion-con-ia" element={<IALanding />} />
            <Route path="/servicios/inteligencia-artificial-punta-arenas" element={<IALanding />} />
            <Route path="/servicios/comunicacion-digital" element={<MarketingLanding />} />
            <Route path="/servicios/consultoria-transformacion-digital" element={<ConsultingLanding />} />
            <Route path="/servicios/ia-generativa-visual" element={<IAVisual />} />
            <Route path="/servicios/tours-virtuales-360" element={<Tours360 />} />
            <Route path="/servicios/aplicaciones-web-pro" element={<AppsPro />} />
            <Route path="/servicios/academia" element={<AcademiaLanding />} />
            
            <Route path="/zonas/punta-arenas" element={<ZonaPuntaArenas />} />
            <Route path="/zonas/puerto-natales" element={<ZonaPuertoNatales />} />
            <Route path="/zonas/tierra-del-fuego" element={<ZonaTierraDelFuego />} />
            <Route path="/zonas/magallanes" element={<ZonaMagallanes />} />
            
            <Route path="/ia" element={<IALanding />} />
            <Route path="/marketing" element={<MarketingLanding />} />
            <Route path="/consultoria" element={<ConsultingLanding />} />
            <Route path="/academia" element={<AcademiaLanding />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
    </HelmetProvider>
  )
}


export default App
