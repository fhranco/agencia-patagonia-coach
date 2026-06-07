import PageTemplate from './PageTemplate';

const CreacionPaginasWebPuntaArenas = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/creacion-paginas-web-punta-arenas/#service",
    "name": "Creación de Páginas Web en Punta Arenas",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Punta Arenas" },
      { "@type": "City", "name": "Puerto Natales" },
      { "@type": "AdministrativeArea", "name": "Magallanes" }
    ],
    "description": "Diseño y creación de páginas web profesionales en Punta Arenas. Sitios web rápidos, optimizados para SEO y conversión B2B en la Región de Magallanes.",
    "knowsAbout": [
      "Diseño Web Profesional",
      "Desarrollo Web en React & Next.js",
      "Optimización de Velocidad Web",
      "SEO Técnico Integrado",
      "WordPress Profesional & Webflow"
    ]
  };

  const features = [
    {
      title: "Diseño Web de Alta Confianza",
      desc: "Estructuramos su sitio web para que transmita solidez y profesionalismo desde el primer segundo, organizando sus servicios con claridad."
    },
    {
      title: "Optimización de Carga Austral",
      desc: "Desarrollamos páginas web ultralivianas que abren al instante, optimizadas para el rendimiento móvil y conexiones de datos en Magallanes."
    },
    {
      title: "Preparado para Google (SEO)",
      desc: "Inyectamos las etiquetas técnicas, metadatos y velocidad de carga necesarios para que los motores de búsqueda posicionen su web rápidamente."
    }
  ];

  const faqs = [
    {
      q: "¿Por qué evitar las plantillas genéricas de WordPress?",
      desc: "Las plantillas prefabricadas suelen estar llenas de código innecesario que ralentiza el sitio y lo hace vulnerable a fallos y hackeos. En PatagoniaCoach optamos por código limpio y optimizado a medida."
    },
    {
      q: "¿La página web es compatible con celulares?",
      desc: "Completamente. Todo desarrollo que realizamos se diseña bajo el principio de 'Mobile First', garantizando una experiencia visual impecable en teléfonos inteligentes y tablets."
    },
    {
      q: "¿Cómo ayuda una web a generar más contactos?",
      desc: "Ubicamos botones de contacto directo a WhatsApp, formularios sencillos de cotización y llamadas a la acción en zonas de alta visibilidad para reducir al mínimo la fricción del usuario."
    }
  ];

  const formattedFaqs = faqs.map(f => ({ q: f.q, a: f.desc }));

  return (
    <PageTemplate
      title="Creación de Páginas Web en Punta Arenas | Diseño Web Profesional"
      h1="Creación de páginas web profesionales en Punta Arenas"
      description="Diseño web profesional en Punta Arenas. Desarrollamos páginas web rápidas, estables y optimizadas para Google que facilitan el contacto y generan confianza."
      content="Una página web debe ordenar tus servicios, generar confianza instantánea y facilitar que tus clientes se pongan en contacto. En PatagoniaCoach diseñamos e implementamos sitios web profesionales y ultrarrápidos para empresas de Punta Arenas y Magallanes. Desarrollamos plataformas limpias, libres de plantillas inestables, preparadas para cargar de inmediato incluso con la señal móvil de la Patagonia."
      features={features}
      faqs={formattedFaqs}
      schema={schema}
    />
  );
};

export default CreacionPaginasWebPuntaArenas;
