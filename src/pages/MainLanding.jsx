import DigitalJourney from '../components/scrollytelling/DigitalJourney';
import Manifesto from '../components/v2/Manifesto';
import SEO from '../components/SEO';

const MainLanding = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://agenciapatagoniacoach.cl/#organization",
    "name": "PatagoniaCoach",
    "url": "https://agenciapatagoniacoach.cl/",
    "description": "Firma de ingeniería digital y transformación tecnológica en Punta Arenas, especializada en desarrollo web de alta gama, SEO local, optimización para motores generativos (GEO) y automatización con IA en Magallanes.",
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
        title="PatagoniaCoach | Ingeniería Digital & Soberanía Tecnológica en Magallanes" 
        description="Firma de transformación digital en Punta Arenas. Desarrollo web de alto rendimiento, SEO local, GEO e inteligencia artificial para empresas de la Patagonia."
        schema={schema}
      />
      <main className="bg-[#05070A] text-[#F8FAFC]">
        {/* =========================================================================
            HIGH-FIDELITY VERTICAL SLICE (FASE 02)
            ACTO 00: Entry / Cold Open (The Cartographic Aperture)
            ACTO 01: Digital Journey (240 Frames WebP + Nueva Capa Editorial)
            TRANSICIÓN: Frame 240 Exit Mask
            ACTO 02: Positioning / Manifesto (Soberanía Austral)
            ========================================================================= */}
        <DigitalJourney />
        <Manifesto />

        {/* Note: Subsequent acts (Portfolio, Capabilities, Deep Dive, Patagonia, Clients, Contact) 
            remain preserved in codebase and will be implemented in subsequent phases after approval. */}
      </main>
    </>
  );
};

export default MainLanding;

