import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ValueLadder from './components/ValueLadder';
import Consultancy from './components/Consultancy';
import ServiceMatrix from './components/ServiceMatrix';
import Protocol from './components/Protocol';
import CaseStudies from './components/CaseStudies';
import AcademyHub from './components/AcademyHub';
import Vision from './components/Vision';
import LeadCommand from './components/LeadCommand';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import PhoneButton from './components/PhoneButton';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <WhatsAppButton />
      <PhoneButton />
      <AIChat />
      <ScrollToTop />

      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <ValueLadder />
        <Consultancy />
        <ServiceMatrix />
        <Protocol />
        <CaseStudies />
        <AcademyHub />
        <Vision />
        <LeadCommand />
      </main>
      <Footer />
    </div>
  )
}


export default App
