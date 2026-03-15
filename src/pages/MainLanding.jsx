import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ValueLadder from '../components/ValueLadder';
import Consultancy from '../components/Consultancy';
import ServiceMatrix from '../components/ServiceMatrix';
import Protocol from '../components/Protocol';
import CaseStudies from '../components/CaseStudies';
import AcademyHub from '../components/AcademyHub';
import Vision from '../components/Vision';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import Footer from '../components/Footer';

const MainLanding = () => {
  return (
    <>
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
        <DigitalDiagnostic />
        <LeadCommand />
      </main>
      <Footer />
    </>
  );
};

export default MainLanding;
