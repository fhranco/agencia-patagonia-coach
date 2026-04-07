import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ValueLadder from '../components/ValueLadder';
import QuickOffers from '../components/QuickOffers';
import Consultancy from '../components/Consultancy';
import ServiceMatrix from '../components/ServiceMatrix';
import MasteryGallery from '../components/MasteryGallery';
import CaseStudies from '../components/CaseStudies';
import AcademyHub from '../components/AcademyHub';
import Vision from '../components/Vision';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import Footer from '../components/Footer';
import LeadAgent from '../components/LeadAgent';

const MainLanding = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ValueLadder />
        <QuickOffers />
        <Consultancy />
        <ServiceMatrix />
        <MasteryGallery />
        <CaseStudies />
        <AcademyHub />
        <Vision />
        <DigitalDiagnostic />
        <LeadCommand />
      </main>
      <Footer />
      <LeadAgent />
    </>
  );
};

export default MainLanding;
