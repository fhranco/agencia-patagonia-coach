import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import MainLanding from './pages/MainLanding';
import IALanding from './pages/IALanding';
import MarketingLanding from './pages/MarketingLanding';
import ConsultingLanding from './pages/ConsultingLanding';

function App() {
  return (
    <Router>
      <div className="relative">
        <CustomCursor />
        <FloatingActions />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/ia" element={<IALanding />} />
          <Route path="/marketing" element={<MarketingLanding />} />
          <Route path="/consultoria" element={<ConsultingLanding />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

