import HeroEditorial from '../components/v2/HeroEditorial';
import SelectedWork from '../components/v2/SelectedWork';
import DevelopmentPillar from '../components/v2/DevelopmentPillar';
import SeoPillar from '../components/v2/SeoPillar';
import IaPillar from '../components/v2/IaPillar';
import MethodologySection from '../components/v2/MethodologySection';
import TerritorySection from '../components/v2/TerritorySection';
import ProofSection from '../components/v2/ProofSection';
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
            PATAGONIACOACH V2 — NUEVA DIRECCIÓN DEFINITIVA
            01 — HERO EDITORIAL (Estrategia, Creatividad, Tecnología)
            02 — SELECTED WORK (AGM Rent a Car, Ruta 9, Óptica Harris, REMAG)
            03 — PILAR 01: DESARROLLO (Construir — Ingeniería de Software)
            04 — PILAR 02: SEO (Encontrar — Autoridad Territorial & Semántica)
            05 — PILAR 03: INTELIGENCIA ARTIFICIAL (Potenciar — Orquestación & Procesos)
            06 — METODOLOGÍA (De la Estrategia a la Ejecución — Ruta de Trabajo)
            07 — PATAGONIA (Territorio / Identidad / Perspectiva 53°S)
            08 — EVIDENCIA (Registro de Trabajo Real // AGM, Ruta 9, Harris, REMAG)
            ========================================================================= */}
        <HeroEditorial />
        <SelectedWork />
        <DevelopmentPillar />
        <SeoPillar />
        <IaPillar />
        <MethodologySection />
        <TerritorySection />
        <ProofSection />
      </main>
    </>
  );
};

export default MainLanding;


