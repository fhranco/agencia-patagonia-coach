/**
 * Centralized SEO Configuration for PatagoniaCoach Routes
 * Incorporating keyword-optimized titles and descriptions for B2B search intent.
 */

export const SITE_URL = 'https://agenciapatagoniacoach.cl';
export const DEFAULT_IMAGE = `${SITE_URL}/portafolio-web.png`;

export const SEO_CONFIG = {
  "/": {
    title: "Agencia de Transformación Digital y SEO en Punta Arenas | PatagoniaCoach",
    description: "Impulsamos negocios en Punta Arenas, Puerto Natales y Magallanes. Desarrollo web premium, SEO local, manejo de redes sociales y automatización con IA.",
    schemaType: "LocalBusiness",
    zone: "punta-arenas",
    breadcrumbs: []
  },
  "/servicios/desarrollo-web": {
    title: "Diseño y Creación de Páginas Web Premium en Punta Arenas",
    description: "Desarrollamos sitios web de alto rendimiento, rápidos y móviles con React/Next.js. Optimización SEO local y diseño exclusivo en Magallanes.",
    schemaType: "Service",
    category: "Desarrollo de Software y Diseño Web",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Desarrollo Web", item: "/servicios/desarrollo-web" }
    ]
  },
  "/servicios/seo-local-magallanes": {
    title: "Posicionamiento SEO Local y GEO en Magallanes | PatagoniaCoach",
    description: "Aparece en Google Maps y búsquedas de IA (ChatGPT, Claude) en Magallanes. Estrategia SEO local a medida para dominar el mercado regional.",
    schemaType: "Service",
    category: "Optimización de Motores de Búsqueda",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "SEO Local Magallanes", item: "/servicios/seo-local-magallanes" }
    ]
  },
  "/servicios/seo-local-punta-arenas": {
    title: "SEO Local en Punta Arenas | Posiciona en Google Maps",
    description: "Optimiza tu presencia en búsquedas locales en Punta Arenas. Domina Google Maps, búsquedas por voz y atiende clientes de la zona de inmediato.",
    schemaType: "Service",
    category: "SEO Local",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "SEO Local Punta Arenas", item: "/servicios/seo-local-punta-arenas" }
    ]
  },
  "/servicios/automatizacion-con-ia": {
    title: "Automatización con IA para Empresas en Punta Arenas",
    description: "Optimiza tus procesos y atención al cliente 24/7. Agentes cognitivos y automatización con IA de nivel corporativo en la Región de Magallanes.",
    schemaType: "Service",
    category: "Inteligencia Artificial aplicada a Negocios",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Automatización IA", item: "/servicios/automatizacion-con-ia" }
    ]
  },
  "/servicios/comunicacion-digital": {
    title: "Comunicación y Manejo de Redes Sociales en Magallanes",
    description: "Diseño de marca, reputación B2B, creación de contenido y marketing digital estratégico en Punta Arenas. Incrementa el capital social de tu marca.",
    schemaType: "Service",
    category: "Marketing y Comunicación",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Comunicación Digital", item: "/servicios/comunicacion-digital" }
    ]
  },
  "/servicios/consultoria-transformacion-digital": {
    title: "Consultoría en Transformación Digital en Punta Arenas",
    description: "Consultoría de negocio y auditoría tecnológica integral para empresas de Magallanes. Diseñamos planes estratégicos y optimización de ROI.",
    schemaType: "Service",
    category: "Consultoría Estratégica",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Consultoría Digital", item: "/servicios/consultoria-transformacion-digital" }
    ]
  },
  "/servicios/ia-generativa-visual": {
    title: "IA Generativa Visual e Imagen Corporativa en Punta Arenas",
    description: "Generación de activos visuales hiper-realistas mediante IA avanzada. Diseño gráfico disruptivo y fotografía digital para campañas de marketing en Magallanes.",
    schemaType: "Service",
    category: "Diseño y Contenido Visual con IA",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "IA Visual", item: "/servicios/ia-generativa-visual" }
    ]
  },
  "/servicios/tours-virtuales-360": {
    title: "Tours Virtuales 360º para Turismo e Industria en Patagonia",
    description: "Digitalización inmersiva 3D de hoteles, plantas industriales y espacios comerciales. Sorprende a tus clientes en Punta Arenas y Puerto Natales.",
    schemaType: "Service",
    category: "Fotografía y Realidad Virtual",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Tours 360", item: "/servicios/tours-virtuales-360" }
    ]
  },
  "/servicios/aplicaciones-web-pro": {
    title: "Desarrollo de Aplicaciones Web Pro y Sistemas a Medida",
    description: "Software a medida, plataformas SaaS y desarrollo de aplicaciones robustas en la Patagonia. Arquitectura cloud escalable para automatización comercial.",
    schemaType: "Service",
    category: "Desarrollo de Aplicaciones Web",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Aplicaciones Web Pro", item: "/servicios/aplicaciones-web-pro" }
    ]
  },
  // 8 B2B Local SEO Pages
  "/servicios/marketing-digital-punta-arenas": {
    title: "Marketing Digital en Punta Arenas | Estrategias B2B Locales",
    description: "Atrae clientes calificados en Magallanes con marketing de precisión. Agencia experta en SEO, anuncios, contenido y embudos de ventas B2B.",
    schemaType: "Service",
    category: "Marketing Digital",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Marketing Digital Punta Arenas", item: "/servicios/marketing-digital-punta-arenas" }
    ]
  },
  "/servicios/creacion-paginas-web-punta-arenas": {
    title: "Creación de Páginas Web en Punta Arenas | Diseño y SEO",
    description: "Diseño y creación de páginas web ultrarrápidas en Punta Arenas. Sitios auto-administrables, responsivos y listos para vender más.",
    schemaType: "Service",
    category: "Diseño Web",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Creación Páginas Web", item: "/servicios/creacion-paginas-web-punta-arenas" }
    ]
  },
  "/servicios/manejo-redes-sociales-punta-arenas": {
    title: "Manejo de Redes Sociales en Punta Arenas | Gestión Profesional",
    description: "Gestión estratégica de Instagram, LinkedIn y Facebook para empresas en Punta Arenas. Calendario de contenido, publicaciones profesionales y crecimiento real.",
    schemaType: "Service",
    category: "Manejo de Redes Sociales",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Manejo Redes Sociales", item: "/servicios/manejo-redes-sociales-punta-arenas" }
    ]
  },
  "/servicios/videos-redes-sociales-punta-arenas": {
    title: "Videos para Redes Sociales en Punta Arenas | Reels y TikTok",
    description: "Producción audiovisual profesional para redes sociales en Magallanes. Grabación y edición optimizada para captar atención de forma inmediata.",
    schemaType: "Service",
    category: "Producción Audiovisual",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Videos Redes Sociales", item: "/servicios/videos-redes-sociales-punta-arenas" }
    ]
  },
  "/servicios/creacion-reels-punta-arenas": {
    title: "Creación de Reels en Punta Arenas | Contenido Viral y B2B",
    description: "Creamos reels de alto impacto que captan leads y clientes en Punta Arenas. Grabación presencial y edición premium para tu marca corporativa.",
    schemaType: "Service",
    category: "Producción Audiovisual",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Creación de Reels", item: "/servicios/creacion-reels-punta-arenas" }
    ]
  },
  "/servicios/fotografia-para-redes-sociales": {
    title: "Fotografía para Redes Sociales en Punta Arenas y Magallanes",
    description: "Sesiones de fotografía corporativa y de productos en Magallanes. Fotografía profesional en alta resolución adaptada para formatos de redes sociales.",
    schemaType: "Service",
    category: "Servicio de Fotografía",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Fotografía Redes Sociales", item: "/servicios/fotografia-para-redes-sociales" }
    ]
  },
  "/servicios/automatizacion-ia-empresas": {
    title: "Automatización con IA para Empresas | Consultoría Magallanes",
    description: "Sistemas de automatización y agentes de IA diseñados a medida. Reduce costos, ahorra horas de trabajo y automatiza la atención de tu empresa.",
    schemaType: "Service",
    category: "Automatización Corporativa con IA",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Automatización IA Empresas", item: "/servicios/automatizacion-ia-empresas" }
    ]
  },
  // Zones
  "/zonas/punta-arenas": {
    title: "Servicios de Marketing Digital y Diseño Web en Punta Arenas",
    description: "Soluciones de transformación digital de alta gama en Punta Arenas. Especialistas en diseño web premium, SEO local de precisión y automatizaciones.",
    schemaType: "LocalBusiness",
    zone: "punta-arenas",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Punta Arenas", item: "/zonas/punta-arenas" }
    ]
  },
  "/zonas/puerto-natales": {
    title: "Marketing Digital y Diseño de Páginas Web en Puerto Natales",
    description: "Potenciamos marcas hoteleras, gastronómicas y de servicios en Puerto Natales. Sitios web rápidos, tours 360 y optimización SEO local.",
    schemaType: "LocalBusiness",
    zone: "puerto-natales",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Puerto Natales", item: "/zonas/puerto-natales" }
    ]
  },
  "/zonas/tierra-del-fuego": {
    title: "Transformación Digital y Conectividad SEO en Tierra del Fuego",
    description: "Soluciones digitales adaptadas para la logística y el comercio de Tierra del Fuego. Sitios ultralivianos y optimización para baja conectividad.",
    schemaType: "LocalBusiness",
    zone: "magallanes",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Tierra del Fuego", item: "/zonas/tierra-del-fuego" }
    ]
  },
  "/zonas/magallanes": {
    title: "Agencia SEO y Ecosistemas Digitales en la Región de Magallanes",
    description: "Lideramos la digitalización en Magallanes y la Patagonia. Posicionamiento GEO/SEO, capacitación in-house con IA y consultoría empresarial.",
    schemaType: "LocalBusiness",
    zone: "magallanes",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Región de Magallanes", item: "/zonas/magallanes" }
    ]
  },
  // Fallbacks & Short paths
  "/servicios/inteligencia-artificial-punta-arenas": {
    title: "Inteligencia Artificial en Punta Arenas | PatagoniaCoach: Evolución Operativa",
    description: "Lidere la transformación digital en Magallanes con Inteligencia Artificial. Implementamos asistentes cognitivos y automatización inteligente para su empresa.",
    schemaType: "Service",
    category: "Inteligencia Artificial",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Inteligencia Artificial", item: "/servicios/inteligencia-artificial-punta-arenas" }
    ]
  },
  "/servicios/academia": {
    title: "Academia PatagoniaCoach | Formación Práctica Digital",
    description: "Capacitación técnica de alto impacto en Magallanes. Talleres, Bootcamps e Implementaciones Corporativas de IA y Marketing Digital.",
    schemaType: "Service",
    category: "Capacitación y Educación Corporativa",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Academia", item: "/servicios/academia" }
    ]
  },
  "/ia": {
    title: "Inteligencia Artificial y Automatización de Procesos | PatagoniaCoach",
    description: "Sistemas autónomos de IA y empleados virtuales. Eleva la eficiencia operativa de tu empresa con soluciones cognitivas de vanguardia.",
    schemaType: "Service",
    category: "Inteligencia Artificial",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Inteligencia Artificial", item: "/ia" }
    ]
  },
  "/marketing": {
    title: "Marketing Digital de Precisión y Gestión de Redes Sociales",
    description: "Diseño estratégico de marca y marketing B2B para crear tracción de ventas y autoridad digital inigualable en la Patagonia.",
    schemaType: "Service",
    category: "Marketing y Ventas",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Marketing Digital", item: "/marketing" }
    ]
  },
  "/consultoria": {
    title: "Consultoría y Auditoría en Transformación Digital",
    description: "Auditoría integral de procesos tecnológicos para maximizar el ROI. Asesoría estratégica para el desarrollo y adopción digital empresarial.",
    schemaType: "Service",
    category: "Consultoría Empresarial",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Consultoría", item: "/consultoria" }
    ]
  },
  "/academia": {
    title: "Academia PatagoniaCoach | Formación y Capacitación en IA",
    description: "Capacitaciones corporativas presenciales y online sobre IA Generativa, productividad e innovación digital para equipos empresariales.",
    schemaType: "Service",
    category: "Capacitación y Educación Corporativa",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Academia", item: "/academia" }
    ]
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": SITE_URL + "/#organization",
  "name": "PatagoniaCoach",
  "url": SITE_URL,
  "description": "Agencia de transformación digital en Punta Arenas, especializada en desarrollo web, SEO local, comunicación digital, automatización con inteligencia artificial y estrategias digitales para empresas de Magallanes.",
  "image": DEFAULT_IMAGE,
  "telephone": "+56995684198",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Magallanes",
    "addressLocality": "Punta Arenas",
    "addressRegion": "Magallanes y de la Antártica Chilena",
    "postalCode": "6200000",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -53.1638,
    "longitude": -70.9171
  },
  "areaServed": [
    { "@type": "City", "name": "Punta Arenas" },
    { "@type": "City", "name": "Puerto Natales" },
    { "@type": "AdministrativeArea", "name": "Región de Magallanes y de la Antártica Chilena" },
    { "@type": "Country", "name": "Chile" }
  ],
  "sameAs": [
    "https://instagram.com/patagoniacoach.cl",
    "https://www.linkedin.com/in/francogallardo/"
  ]
};

// Backwards compatibility alias for routeConfig in scripts/components
export const routeConfig = SEO_CONFIG;
