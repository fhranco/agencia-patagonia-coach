import PageTemplate from './PageTemplate';

const DesarrolloWeb = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/desarrollo-web/#service",
    "name": "Desarrollo web profesional",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": { "@type": "AdministrativeArea", "name": "Región de Magallanes y de la Antártica Chilena" },
    "description": "Servicio de desarrollo web profesional para empresas de Punta Arenas y Magallanes, con enfoque en diseño, SEO, velocidad, estructura comercial y conversión."
  };

  const features = [
    { title: "Diseño de Inmersión", desc: "Interfaces que proyectan autoridad y confianza, alineadas con los estándares de Lujo Silencioso." },
    { title: "Optimización SEO", desc: "Arquitectura técnica impecable para que Google indexe y posicione su marca con ventaja competitiva." },
    { title: "Velocidad de Élite", desc: "Carga instantánea optimizada para la infraestructura de conectividad en la Patagonia." }
  ];

  const faqs = [
    { q: "¿Cuánto demora desarrollar una página web profesional?", a: "Un ecosistema de alto impacto suele tomar entre 4 a 6 semanas, dependiendo de la complejidad y las integraciones requeridas." },
    { q: "¿El sitio queda optimizado para Google?", a: "Absolutamente. La arquitectura SEO es la columna vertebral de nuestro desarrollo, no un extra." }
  ];

  return (
    <PageTemplate
      title="Desarrollo Web en Punta Arenas para Empresas | PatagoniaCoach"
      h1="Desarrollo web profesional para empresas de Punta Arenas"
      description="Diseñamos sitios web profesionales para empresas de Punta Arenas y Magallanes, optimizados para SEO, velocidad, conversión e identidad digital."
      content="Creamos arquitecturas web de alto impacto diseñadas para convertir visitantes en clientes. Nuestros sitios no son solo estéticos, sino herramientas de venta automatizadas preparadas para el mercado regional y global."
      schema={schema}
      features={features}
      faqs={faqs}
    />
  );
};

export default DesarrolloWeb;
