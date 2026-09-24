import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CustomCursor from './components/CustomCursor';
import FloatingActions from './components/FloatingActions';
import ScrollToHash from './components/ScrollToHash';
import BottomNav from './components/BottomNav';
import PageLoader from './components/PageLoader';

// Static import for the primary landing to ensure instant initial load
import MainLanding from './pages/MainLanding';

// Core Service Pages (KEEP)
const DesarrolloWeb = lazy(() => import('./pages/DesarrolloWeb'));
const SEOLocal = lazy(() => import('./pages/SEOLocal'));
const IALanding = lazy(() => import('./pages/IALanding'));
const MarketingLanding = lazy(() => import('./pages/MarketingLanding'));
const ConsultingLanding = lazy(() => import('./pages/ConsultingLanding'));
const AcademiaLanding = lazy(() => import('./pages/AcademiaLanding'));

// Conditional Service (Under evaluation)
const AppsPro = lazy(() => import('./pages/AppsPro'));

// Regional Territory Pages (KEEP)
const ZonaMagallanes = lazy(() => import('./pages/ZonaMagallanes'));
const ZonaPuertoNatales = lazy(() => import('./pages/ZonaPuertoNatales'));
const ZonaTierraDelFuego = lazy(() => import('./pages/ZonaTierraDelFuego'));

// Experimental Clone Laboratory (FASE 12A - Isolated, noindex)
const NoaBaseline = lazy(() => import('./experiments/noa-baseline'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="relative">
          <ScrollToHash />
          <CustomCursor />
          <FloatingActions />
          <BottomNav />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Hub Principal */}
              <Route path="/" element={<MainLanding />} />
              
              {/* 5 Pilares Estratégicos */}
              <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
              <Route path="/servicios/seo-local-magallanes" element={<SEOLocal />} />
              <Route path="/servicios/automatizacion-con-ia" element={<IALanding />} />
              <Route path="/servicios/comunicacion-digital" element={<MarketingLanding />} />
              <Route path="/servicios/consultoria-transformacion-digital" element={<ConsultingLanding />} />
              
              {/* Conditional Service */}
              <Route path="/servicios/aplicaciones-web-pro" element={<AppsPro />} />

              {/* Educación & Formación */}
              <Route path="/academia" element={<AcademiaLanding />} />
              
              {/* 3 Territorios / Verticales */}
              <Route path="/zonas/magallanes" element={<ZonaMagallanes />} />
              <Route path="/zonas/puerto-natales" element={<ZonaPuertoNatales />} />
              <Route path="/zonas/tierra-del-fuego" element={<ZonaTierraDelFuego />} />
              
              {/* Isolated Lab Route (Fase 12A - Isolated, noindex) */}
              <Route path="/lab/noa-baseline" element={<NoaBaseline />} />
              
              {/* Client-Side Fallback Redirects (301 matching server-side rules) */}
              <Route path="/servicios/creacion-paginas-web-punta-arenas" element={<Navigate to="/servicios/desarrollo-web" replace />} />
              <Route path="/servicios/tours-virtuales-360" element={<Navigate to="/servicios/desarrollo-web" replace />} />
              <Route path="/servicios/seo-local-punta-arenas" element={<Navigate to="/servicios/seo-local-magallanes" replace />} />
              <Route path="/servicios/automatizacion-ia-empresas" element={<Navigate to="/servicios/automatizacion-con-ia" replace />} />
              <Route path="/servicios/inteligencia-artificial-punta-arenas" element={<Navigate to="/servicios/automatizacion-con-ia" replace />} />
              <Route path="/ia" element={<Navigate to="/servicios/automatizacion-con-ia" replace />} />
              <Route path="/servicios/ia-generativa-visual" element={<Navigate to="/servicios/automatizacion-con-ia" replace />} />
              <Route path="/servicios/marketing-digital-punta-arenas" element={<Navigate to="/servicios/comunicacion-digital" replace />} />
              <Route path="/servicios/manejo-redes-sociales-punta-arenas" element={<Navigate to="/servicios/comunicacion-digital" replace />} />
              <Route path="/servicios/videos-redes-sociales-punta-arenas" element={<Navigate to="/servicios/comunicacion-digital" replace />} />
              <Route path="/servicios/creacion-reels-punta-arenas" element={<Navigate to="/servicios/comunicacion-digital" replace />} />
              <Route path="/servicios/fotografia-para-redes-sociales" element={<Navigate to="/servicios/comunicacion-digital" replace />} />
              <Route path="/marketing" element={<Navigate to="/servicios/comunicacion-digital" replace />} />
              <Route path="/consultoria" element={<Navigate to="/servicios/consultoria-transformacion-digital" replace />} />
              <Route path="/servicios/academia" element={<Navigate to="/academia" replace />} />
              <Route path="/zonas/punta-arenas" element={<Navigate to="/zonas/magallanes" replace />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              
              {/* Catch-all */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
