/**
 * Editorial Content & Configuration for PatagoniaCoach Home
 */
import { CONTACT, getWhatsAppUrl } from '../../../constants/contact.js';

export const HOME_CONTENT = {
  title: "Agencia de Transformación Digital y SEO en Punta Arenas | PatagoniaCoach",
  description: "Impulsamos negocios en Punta Arenas, Puerto Natales y Magallanes. Desarrollo web premium, SEO local, manejo de redes sociales y automatización con IA."
};

export const AGENCY_INFO = {
  name: "PatagoniaCoach",
  initials: "PC",
  role: "Ingeniería Digital & IA",
  territory: "Punta Arenas · Patagonia · Chile",
  badge: "53°09′S // Confín Austral",
  whatsappUrl: getWhatsAppUrl(),
  email: CONTACT.email,
  phone: CONTACT.phone
};

export const HERO_CONTENT = {
  edition: "Ecosistemas Digitales",
  location: "Punta Arenas · Patagonia · Chile",
  title: "Estrategia, tecnología e IA que generan negocio.",
  cue: "Detrás del sistema.\nConocer el enfoque."
};

export const ENTRANCE_CONTENT = {
  overline: "Enfoque Austral // Hacia el Estudio",
  title: "Detrás\ndel sistema",
  foot: "Pasar de lo que construimos a cómo pensamos."
};

export const APPROACH_CONTENT = {
  tagline: "Detrás del sistema",
  title: "PatagoniaCoach",
  subtitle: "Ingeniería Digital & Ecosistemas IA",
  quote: "— “No construimos solo sitios.\nConstruimos sistemas digitales.”",
  lead: "En un territorio donde la geografía aísla y la conectividad exige excelencia, la infraestructura digital no es un folleto decorativo: es la arteria de los negocios que dominan su mercado.",
  body: "Diseñamos arquitecturas web de ultra-alta velocidad, soberanía técnica sin plantillas y orquestación con inteligencia artificial desde el confín austral hacia el mundo."
};

export const CAPABILITIES_CONTENT = {
  kicker: "02 / Capacidades",
  kickerSubtitle: "Sistemas que generan negocio.",
  railPrinciple: "Estrategia + Software.\nEjecución territorial.",
  items: [
    {
      index: "01",
      tag: "Automatización & Agentes",
      title: "Inteligencia Artificial",
      lead: "Agentes autónomos.\n Automatización de procesos.\n Decisiones con datos reales.",
      body: "Integramos IA directamente en la operación del negocio. Flujos que reducen fricción manual y multiplican la capacidad de atención y conversión."
    },
    {
      index: "02",
      tag: "Plataformas & Software",
      title: "Desarrollo Digital",
      lead: "Arquitectura moderna.\n Carga instantánea.\n Experiencias de alto rendimiento.",
      body: "Construimos plataformas web y aplicaciones a medida. Código limpio, infraestructura escalable y diseño enfocado en la conversión comercial."
    },
    {
      index: "03",
      tag: "Posicionamiento & GEO",
      title: "Crecimiento",
      lead: "Visibilidad estratégica donde buscan tus clientes.",
      body: "Posicionamiento en motores de búsqueda e inteligencias generativas (GEO) para captación de clientes de alto valor."
    }
  ]
};

export const WORKS_CONTENT = {
  kicker: "03 / Casos Seleccionados",
  kickerSubtitle: "Sistemas reales en producción.",
  title: "Construimos sistemas que perduran.",
  description: "Una mirada a proyectos y arquitecturas desplegadas. Y la solución que podemos construir para tu empresa."
};

export const FINALE_CONTENT = {
  kicker: "El próximo ecosistema puede ser el tuyo.",
  title: "Iniciemos una conversación.",
  note: "Un diagnóstico técnico, un proyecto nuevo, una evolución digital."
};

export const HOME_SEO_SCHEMA = {
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
