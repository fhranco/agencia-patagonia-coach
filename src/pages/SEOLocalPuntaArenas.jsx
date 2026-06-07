import PageTemplate from './PageTemplate';

const SEOLocalPuntaArenas = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/seo-local-punta-arenas/#service",
    "name": "SEO Local en Punta Arenas",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Punta Arenas" },
      { "@type": "City", "name": "Puerto Natales" },
      { "@type": "AdministrativeArea", "name": "Magallanes" }
    ],
    "description": "Estrategias de SEO Local en Punta Arenas. Posicionamiento en Google Maps, optimización de perfiles comerciales y datos estructurados Schema.org para capturar la demanda regional.",
    "knowsAbout": [
      "SEO Local",
      "Google Business Profile Optimization",
      "Local Business Schema JSON-LD",
      "Búsquedas Geolocalizadas",
      "Optimización de Tráfico Orgánico"
    ]
  };

  const features = [
    {
      title: "Optimización de Google Maps",
      desc: "Estructuramos su ficha de negocio para aparecer en los primeros tres resultados del mapa de Google cuando busquen sus servicios en la zona."
    },
    {
      title: "Schema Markup Local (JSON-LD)",
      desc: "Añadimos código semántico para declarar formalmente sus áreas de servicio en Magallanes, coordenadas de oficina y canales de contacto a los buscadores."
    },
    {
      title: "Estudio de Keywords Regionales",
      desc: "Identificamos las frases y palabras específicas que usan los clientes de Punta Arenas al buscar sus servicios, evitando gastar esfuerzos en búsquedas genéricas."
    }
  ];

  const faqs = [
    {
      q: "¿Por qué priorizar el SEO Local en Punta Arenas?",
      desc: "El SEO Local capta usuarios con alta intención de compra. Cuando alguien busca un servicio seguido de 'Punta Arenas', usualmente necesita contratar o comprar a corto plazo."
    },
    {
      q: "¿Cómo ayuda el posicionamiento orgánico a ahorrar costos?",
      desc: "A diferencia de los anuncios pagados en Google o Facebook donde debes pagar por cada clic recibido, las visitas y llamadas conseguidas por SEO Local son 100% orgánicas y gratuitas."
    },
    {
      q: "¿Qué es el 'Local Pack' de Google?",
      desc: "Es el bloque destacado con el mapa y tres negocios locales que Google muestra al principio del buscador ante consultas con intención local, atrayendo la mayoría de las llamadas telefónicas."
    }
  ];

  const formattedFaqs = faqs.map(f => ({ q: f.q, a: f.desc }));

  return (
    <PageTemplate
      title="SEO Local en Punta Arenas | Posicionamiento Web Local"
      h1="SEO local y posicionamiento web en Punta Arenas"
      description="Posicionamiento web y SEO local en Punta Arenas. Posicione su empresa en el mapa de Google Maps y atraiga a los clientes locales de Magallanes que buscan sus servicios."
      content="Tu negocio necesita verse profesional cuando lo buscan en Google. Si alguien busca tus servicios en Punta Arenas o Magallanes y aparece tu competencia primero, estás perdiendo clientes calificados todos los días. En PatagoniaCoach optimizamos técnicamente tu sitio web y tu perfil de Google Business Profile (Google Maps) para que tu empresa domine las búsquedas locales y sea la opción prioritaria ante consultas de alta intención."
      features={features}
      faqs={formattedFaqs}
      schema={schema}
    />
  );
};

export default SEOLocalPuntaArenas;
