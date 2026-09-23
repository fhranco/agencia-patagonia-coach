/**
 * Centralized SEO Configuration for PatagoniaCoach Canonical Routes (Consolidation V2)
 * High-authority consolidated routes with clean semantic mapping.
 */

export const SITE_URL = 'https://agenciapatagoniacoach.cl';
export const DEFAULT_IMAGE = `${SITE_URL}/portafolio-web.webp`;

export const SEO_CONFIG = {
  "/": {
    title: "Agencia de Transformación Digital y SEO en Punta Arenas | PatagoniaCoach",
    description: "Impulsamos negocios en Punta Arenas, Puerto Natales y Magallanes. Desarrollo web premium, SEO local, manejo de redes sociales y automatización con IA.",
    schemaType: "LocalBusiness",
    zone: "punta-arenas",
    breadcrumbs: []
  },
  "/servicios/desarrollo-web": {
    title: "Diseño y Creación de Páginas Web Premium en Punta Arenas | PatagoniaCoach",
    description: "Desarrollamos sitios web corporativos de alto rendimiento, rápidos y móviles con React/Next.js. Integración de Tours 360, e-commerce y optimización SEO en Magallanes.",
    schemaType: "Service",
    category: "Desarrollo de Software y Diseño Web",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Desarrollo Web", item: "/servicios/desarrollo-web" }
    ]
  },
  "/servicios/seo-local-magallanes": {
    title: "Posicionamiento SEO Local y GEO en Magallanes | PatagoniaCoach",
    description: "Aparece en Google Maps y búsquedas de IA (ChatGPT, Gemini, Perplexity) en Punta Arenas y Magallanes. Estrategia SEO local y optimización GEO a medida.",
    schemaType: "Service",
    category: "Optimización de Motores de Búsqueda",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "SEO Local Magallanes", item: "/servicios/seo-local-magallanes" }
    ]
  },
  "/servicios/automatizacion-con-ia": {
    title: "Automatización con IA y Agentes Cognitivos | PatagoniaCoach",
    description: "Optimiza tus procesos y atención 24/7. Implementamos asistentes inteligentes, agentes autónomos, flujos de trabajo e IA generativa visual en Magallanes.",
    schemaType: "Service",
    category: "Inteligencia Artificial aplicada a Negocios",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Automatización IA", item: "/servicios/automatizacion-con-ia" }
    ]
  },
  "/servicios/comunicacion-digital": {
    title: "Comunicación Digital, Redes Sociales y Producción Audiovisual | PatagoniaCoach",
    description: "Estrategia integral de marca en Magallanes: gestión de redes sociales, producción de reels/videos, fotografía corporativa y marketing digital de alto impacto.",
    schemaType: "Service",
    category: "Marketing y Comunicación",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Comunicación Digital", item: "/servicios/comunicacion-digital" }
    ]
  },
  "/servicios/consultoria-transformacion-digital": {
    title: "Consultoría en Transformación Digital y Estrategia B2B | PatagoniaCoach",
    description: "Auditoría de entropía digital, arquitectura de sistemas y acompañamiento estratégico para dirección de empresas en la Patagonia. Maximización de ROI tecnológico.",
    schemaType: "Service",
    category: "Consultoría Estratégica",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Consultoría Digital", item: "/servicios/consultoria-transformacion-digital" }
    ]
  },
  "/academia": {
    title: "Academia PatagoniaCoach | Formación y Capacitación Práctica en IA",
    description: "Capacitaciones corporativas presenciales y online sobre IA Generativa, productividad y herramientas digitales para equipos y directivos de empresas en Magallanes.",
    schemaType: "Service",
    category: "Capacitación y Educación Corporativa",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Academia", item: "/academia" }
    ]
  },
  "/zonas/magallanes": {
    title: "Agencia SEO y Ecosistemas Digitales en la Región de Magallanes | PatagoniaCoach",
    description: "Hub de transformación tecnológica para Magallanes y la Patagonia. Lideramos posicionamiento GEO/SEO, sistemas inteligentes y consultoría desde Punta Arenas.",
    schemaType: "LocalBusiness",
    zone: "magallanes",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Región de Magallanes", item: "/zonas/magallanes" }
    ]
  },
  "/zonas/puerto-natales": {
    title: "Marketing Digital, Hotelería de Lujo y Web en Puerto Natales | PatagoniaCoach",
    description: "Potenciamos marcas hoteleras, gastronómicas y operadores en Puerto Natales y Torres del Paine. Sitios web rápidos, tours 360 y captación internacional.",
    schemaType: "LocalBusiness",
    zone: "puerto-natales",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Puerto Natales", item: "/zonas/puerto-natales" }
    ]
  },
  "/zonas/tierra-del-fuego": {
    title: "Transformación Digital e Industria en Tierra del Fuego | PatagoniaCoach",
    description: "Soluciones digitales para la industria, energía, logística y turismo de intereses especiales en Tierra del Fuego. Sistemas adaptados a conectividad austral.",
    schemaType: "LocalBusiness",
    zone: "magallanes",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Tierra del Fuego", item: "/zonas/tierra-del-fuego" }
    ]
  },
  // CONDITIONAL (Sujeto a validación de oferta comercial diferenciada)
  "/servicios/aplicaciones-web-pro": {
    title: "Desarrollo de Aplicaciones Web Pro y Sistemas a Medida | PatagoniaCoach",
    description: "Software a medida, plataformas SaaS y paneles de gestión empresarial en la Patagonia. Arquitectura cloud escalable para automatización de operaciones complejas.",
    schemaType: "Service",
    category: "Desarrollo de Aplicaciones Web",
    breadcrumbs: [
      { name: "Inicio", item: "/" },
      { name: "Aplicaciones Web Pro", item: "/servicios/aplicaciones-web-pro" }
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

export const routeConfig = SEO_CONFIG;
