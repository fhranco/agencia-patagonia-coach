import PageTemplate from './PageTemplate';

const FotografiaRedesSociales = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/fotografia-para-redes-sociales/#service",
    "name": "Fotografía para Redes Sociales en Punta Arenas",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Punta Arenas" },
      { "@type": "City", "name": "Puerto Natales" },
      { "@type": "AdministrativeArea", "name": "Magallanes" }
    ],
    "description": "Sesiones de fotografía corporativa y de producto profesionales en Punta Arenas. Proyecte la escala e infraestructura real de su empresa en redes sociales.",
    "knowsAbout": [
      "Fotografía Corporativa",
      "Fotografía de Producto",
      "Edición y Retoque Digital",
      "Branding Visual",
      "Producción de Contenido Local"
    ]
  };

  const features = [
    {
      title: "Identidad Visual 100% Real",
      desc: "Evitamos las imágenes genéricas de internet. Capturamos a su equipo de trabajo, sus oficinas y sus bodegas operativas en Punta Arenas."
    },
    {
      title: "Optimización de Formatos Digitales",
      desc: "Entregamos imágenes adaptadas en tamaño y peso óptimos tanto para publicaciones cuadradas (Instagram) como para cabeceras y web."
    },
    {
      title: "Dirección de Arte y Estilo",
      desc: "Guiamos la sesión fotográfica para asegurar que las posturas, la luz y la composición transmitan confianza, orden y profesionalismo."
    }
  ];

  const faqs = [
    {
      q: "¿Cómo influye la fotografía profesional en la decisión de un cliente?",
      desc: "En el ámbito B2B y de servicios locales, el cliente compra confianza. Ver imágenes de alta calidad de sus instalaciones y personal real reduce drásticamente las dudas y acelera el cierre de negocios."
    },
    {
      q: "¿Realizan fotografía aérea con Dron?",
      desc: "Sí, disponemos de drones para realizar tomas aéreas espectaculares de sus terrenos, instalaciones industriales o proyectos en construcción en Magallanes."
    },
    {
      q: "¿Cómo se entregan las fotos y en qué plazo?",
      desc: "Las fotos se entregan en una galería digital privada para su descarga en alta resolución y en versiones optimizadas para web, en un plazo de 5 días hábiles tras la sesión."
    }
  ];

  const formattedFaqs = faqs.map(f => ({ q: f.q, a: f.desc }));

  return (
    <PageTemplate
      title="Fotografía para Redes Sociales en Punta Arenas | Calidad Corporativa"
      h1="Fotografía profesional para redes sociales en Punta Arenas"
      description="Fotografía profesional y corporativa en Punta Arenas. Capture la infraestructura real, el equipamiento y los productos de su empresa sin usar imágenes de stock artificiales."
      content="El uso abusivo de fotos de stock o de baja calidad daña la percepción de tu negocio local. En PatagoniaCoach realizamos sesiones de fotografía corporativa y de productos en Punta Arenas diseñadas específicamente para tus redes sociales y sitio web. Capturamos tus instalaciones, faenas, productos y equipo de trabajo real para proyectar seriedad, escala y la verdadera autoridad de tu empresa en Magallanes."
      features={features}
      faqs={formattedFaqs}
      schema={schema}
    />
  );
};

export default FotografiaRedesSociales;
