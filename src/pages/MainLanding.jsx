import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ValueLadder from '../components/ValueLadder';
import QuickOffers from '../components/QuickOffers';
import Consultancy from '../components/Consultancy';
import ServiceMatrix from '../components/ServiceMatrix';
import ProjectShowcase from '../components/ProjectShowcase';
import MasteryGallery from '../components/MasteryGallery';
import Vision from '../components/Vision';
import DigitalDiagnostic from '../components/DigitalDiagnostic';
import LeadCommand from '../components/LeadCommand';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const MainLanding = () => {
  const [showDiagnostic, setShowDiagnostic] = useState(false);
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
      "Generative Engine Optimization (GEO)",
      "Inteligencia Artificial Aplicada",
      "Desarrollo Web de Alto Rendimiento",
      "SEO Local en la Patagonia",
      "Automatización de Procesos Corporativos",
      "Soberanía Digital"
    ],
    "serviceType": [
      "Consultoría en IA",
      "GEO (Generative Engine Optimization)",
      "Desarrollo Web Corporativo",
      "SEO Local Magallanes",
      "Automatización de Ventas 24/7"
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
        
        <div className="hidden md:block">
          <ValueLadder />
        </div>
        
        <QuickOffers />
        
        <div className="hidden md:block">
          <Consultancy />
        </div>
        
        <ServiceMatrix />
        
        <ProjectShowcase />
        
        <div className="hidden md:block">
          <MasteryGallery />
        </div>
        <div className="hidden md:block">
          <Vision />
        </div>
        
        {/* Mobile-first: Collapse Diagnostic Tool under a CTA Card */}
        <div className="md:hidden px-6 py-12 bg-patagonia-black">
          <div className="glass-card text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-patagonia-gold/5 blur-[50px] rounded-full pointer-events-none" />
            <h3 className="text-2xl font-heading text-white tracking-tight leading-tight">¿Cuál es el nivel digital de su empresa?</h3>
            <p className="text-sm text-patagonia-secondary font-light leading-relaxed">Responda nuestro test de 2 minutos para recibir un reporte técnico personalizado de optimización para Magallanes.</p>
            <button 
              onClick={() => setShowDiagnostic(true)}
              className="btn-primary w-full py-4 text-[10px] font-bold tracking-widest uppercase"
            >
              Iniciar Diagnóstico Digital
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <DigitalDiagnostic />
        </div>

        {/* Fullscreen Mobile Diagnostic Modal */}
        {showDiagnostic && (
          <div className="fixed inset-0 z-[1000] bg-patagonia-black overflow-y-auto">
            <div className="max-w-7xl mx-auto px-6 py-8 flex justify-end sticky top-0 bg-patagonia-black/90 backdrop-blur-md z-50">
              <button 
                onClick={() => setShowDiagnostic(false)}
                className="px-6 py-3 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                Cerrar Test
              </button>
            </div>
            <div className="pb-20">
              <DigitalDiagnostic />
            </div>
          </div>
        )}

        <LeadCommand />
      </main>
      <Footer />
    </>
  );
};

export default MainLanding;

