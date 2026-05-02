import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import MainLanding from './pages/MainLanding';
import IALanding from './pages/IALanding';
import MarketingLanding from './pages/MarketingLanding';
import ConsultingLanding from './pages/ConsultingLanding';
import AcademiaLanding from './pages/AcademiaLanding';

// New SEO Architecture Pages
import DesarrolloWeb from './pages/DesarrolloWeb';
import SEOLocal from './pages/SEOLocal';
import ZonaPuntaArenas from './pages/ZonaPuntaArenas';

import IAVisual from './pages/IAVisual';
import Tours360 from './pages/Tours360';
import AppsPro from './pages/AppsPro';
import ZonaPuertoNatales from './pages/ZonaPuertoNatales';
import ZonaTierraDelFuego from './pages/ZonaTierraDelFuego';
import ZonaMagallanes from './pages/ZonaMagallanes';

function App() {
  return (
    <Router>
      <div className="relative">
        <CustomCursor />
        <FloatingActions />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<MainLanding />} />
          
          {/* Servicios */}
          <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/servicios/seo-local-punta-arenas" element={<SEOLocal />} />
          <Route path="/servicios/automatizacion-con-ia" element={<IALanding />} />
          <Route path="/servicios/comunicacion-digital" element={<MarketingLanding />} />
          <Route path="/servicios/consultoria-transformacion-digital" element={<ConsultingLanding />} />
          <Route path="/servicios/ia-generativa-visual" element={<IAVisual />} />
          <Route path="/servicios/tours-virtuales-360" element={<Tours360 />} />
          <Route path="/servicios/aplicaciones-web-pro" element={<AppsPro />} />
          
          {/* Zonas */}
          <Route path="/zonas/punta-arenas" element={<ZonaPuntaArenas />} />
          <Route path="/zonas/puerto-natales" element={<ZonaPuertoNatales />} />
          <Route path="/zonas/tierra-del-fuego" element={<ZonaTierraDelFuego />} />
          <Route path="/zonas/magallanes" element={<ZonaMagallanes />} />
          
          {/* Legacy & Others */}
          <Route path="/ia" element={<IALanding />} />
          <Route path="/marketing" element={<MarketingLanding />} />
          <Route path="/consultoria" element={<ConsultingLanding />} />
          <Route path="/academia" element={<AcademiaLanding />} />
        </Routes>
      </div>
    </Router>
  )
}


export default App

