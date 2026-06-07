import PageTemplate from './PageTemplate';

const MarketingDigitalPuntaArenas = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/marketing-digital-punta-arenas/#service",
    "name": "Marketing Digital en Punta Arenas",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Punta Arenas" },
      { "@type": "City", "name": "Puerto Natales" },
      { "@type": "AdministrativeArea", "name": "Magallanes" }
    ],
    "description": "Estrategias de marketing digital en Punta Arenas orientadas a resultados reales. Captura de leads de alta intención de compra, optimización de conversión y copywriting comercial para la Patagonia.",
    "knowsAbout": [
      "Marketing Digital Local",
      "Meta Ads & Google Ads",
      "Copywriting Comercial B2B",
      "Optimización de Embudo de Ventas",
      "Análisis de ROI Local"
    ]
  };

  const features = [
    {
      title: "Captura de Demanda Local",
      desc: "Diseñamos campañas publicitarias y orgánicas segmentadas con precisión para la Región de Magallanes, atrayendo a los tomadores de decisiones locales."
    },
    {
      title: "Copywriting de Conversión",
      desc: "Redactamos textos comerciales claros y directos que eliminan la jerga innecesaria y explican de forma simple por qué su negocio es la mejor opción."
    },
    {
      title: "Optimización de Canales de Venta",
      desc: "Auditamos y mejoramos la estructura de sus puntos de contacto digitales para asegurar que las visitas se conviertan en cotizaciones y llamadas telefónicas."
    }
  ];

  const faqs = [
    {
      q: "¿Por qué hacer marketing digital enfocado en Magallanes?",
      desc: "El comportamiento de compra de las empresas y personas en la región es diferente. Diseñar campañas con entendimiento del territorio duplica la efectividad del presupuesto publicitario."
    },
    {
      q: "¿Cómo miden el éxito de las campañas de marketing?",
      desc: "Nos enfocamos en el Retorno de Inversión (ROI) real: cantidad de clientes calificados, cotizaciones recibidas y llamadas de ventas, en lugar de métricas de vanidad como likes o comentarios."
    },
    {
      q: "¿Trabajan con empresas B2B y servicios locales?",
      desc: "Sí, nos especializamos en estructurar la presencia de empresas que venden a otras empresas o servicios profesionales que necesitan generar un alto nivel de confianza inicial."
    }
  ];

  // Convert desc to a for PageTemplate structure (q, a)
  const formattedFaqs = faqs.map(f => ({ q: f.q, a: f.desc }));

  return (
    <PageTemplate
      title="Marketing Digital en Punta Arenas | PatagoniaCoach: Conversión y ROI"
      h1="Marketing digital de alto impacto en Punta Arenas"
      description="Posicionamiento y marketing digital profesional en Punta Arenas. Atraiga clientes de alta intención de compra en Magallanes con estrategias que sí generan retorno."
      content="El marketing digital en Punta Arenas y la Patagonia no puede depender de agencias externas que no conocen el territorio, ni de presupuestos diluidos en anuncios sin retorno. Diseñamos e implementamos campañas comerciales que capturan la demanda real local, ordenan sus canales de venta y aseguran que cada peso invertido se traduzca en cotizaciones y llamadas reales."
      features={features}
      faqs={formattedFaqs}
      schema={schema}
    />
  );
};

export default MarketingDigitalPuntaArenas;
