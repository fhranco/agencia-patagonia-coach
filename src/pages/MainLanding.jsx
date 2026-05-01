import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ValueLadder from '../components/ValueLadder';
import QuickOffers from '../components/QuickOffers';
import Consultancy from '../components/Consultancy';
import ServiceMatrix from '../components/ServiceMatrix';
import MasteryGallery from '../components/MasteryGallery';
import AcademyHub from '../components/AcademyHub';
import Vision from '../components/Vision';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const MainLanding = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://agenciapatagoniacoach.cl/#organization",
    "name": "PatagoniaCoach",
    "url": "https://agenciapatagoniacoach.cl/",
    "description": "Agencia de transformación digital en Punta Arenas, especializada en desarrollo web, SEO local, comunicación digital, automatización con inteligencia artificial y estrategias digitales para empresas de Magallanes.",
    "areaServed": [
      { "@type": "City", "name": "Punta Arenas" },
      { "@type": "City", "name": "Puerto Natales" },
      { "@type": "AdministrativeArea", "name": "Región de Magallanes y de la Antártica Chilena" },
      { "@type": "Country", "name": "Chile" }
    ],
    "knowsAbout": [
      "Transformación digital", "Desarrollo web", "SEO local", "Automatización con inteligencia artificial",
      "Marketing digital B2B", "Comunicación digital", "Contenido para redes sociales", "Fotografía de producto"
    ],
    "serviceType": [
      "Desarrollo web", "SEO local", "Automatización con IA", "Comunicación digital",
      "Gestión de publicidad", "Diseño de contenido", "Fotografía 360 de productos"
    ]
  };

  return (
    <>
      <SEO 
        title="Agencia de Transformación Digital en Punta Arenas | PatagoniaCoach" 
        description="PatagoniaCoach ayuda a empresas de Magallanes a mejorar su presencia digital con desarrollo web, SEO local, comunicación digital y automatización con IA."
        schema={schema}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ValueLadder />
        <QuickOffers />
        <Consultancy />
        <ServiceMatrix />
        <MasteryGallery />
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

