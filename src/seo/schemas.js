/**
 * Centralized JSON-LD Schema Factory for PatagoniaCoach SEO
 * Adaptive signatures to support both local configurations and remote legacy pages.
 */

const SITE_URL = 'https://agenciapatagoniacoach.cl';
const DEFAULT_IMAGE = `${SITE_URL}/portafolio-web.webp`;

export const ZONE_DATA = {
  "punta-arenas": {
    name: "Punta Arenas",
    city: "Punta Arenas",
    region: "Magallanes y de la Antártica Chilena",
    latitude: -53.1638,
    lat: -53.1638,
    longitude: -70.9171,
    lng: -70.9171,
    address: "Punta Arenas, Región de Magallanes, Chile"
  },
  "puerto-natales": {
    name: "Puerto Natales",
    city: "Puerto Natales",
    region: "Provincia de Última Esperanza",
    latitude: -51.7269,
    lat: -51.7269,
    longitude: -72.5060,
    lng: -72.5060,
    address: "Puerto Natales, Región de Magallanes, Chile"
  },
  "tierra-del-fuego": {
    name: "Tierra del Fuego",
    city: "Tierra del Fuego",
    region: "Provincia de Tierra del Fuego",
    latitude: -53.7962,
    lat: -53.7962,
    longitude: -67.6908,
    lng: -67.6908,
    address: "Región de Magallanes y de la Antártica Chilena, Chile"
  },
  "magallanes": {
    name: "Magallanes",
    city: "Región de Magallanes",
    region: "Magallanes y de la Antártica Chilena",
    latitude: -53.1500,
    lat: -53.1638,
    longitude: -70.9000,
    lng: -70.9171,
    address: "Región de Magallanes y de la Antártica Chilena, Chile"
  }
};

const LABEL_MAP = {
  servicios: 'Servicios',
  'desarrollo-web': 'Desarrollo Web',
  'seo-local-magallanes': 'SEO Local Magallanes',
  'seo-local-punta-arenas': 'SEO Local Punta Arenas',
  'automatizacion-con-ia': 'Automatización con IA',
  'inteligencia-artificial-punta-arenas': 'IA Punta Arenas',
  'comunicacion-digital': 'Comunicación Digital',
  'consultoria-transformacion-digital': 'Consultoría',
  'ia-generativa-visual': 'IA Generativa Visual',
  'tours-virtuales-360': 'Tours Virtuales 360',
  'aplicaciones-web-pro': 'Apps Web Pro',
  academia: 'Academia',
  zonas: 'Zonas',
  'punta-arenas': 'Punta Arenas',
  'puerto-natales': 'Puerto Natales',
  'tierra-del-fuego': 'Tierra del Fuego',
  magallanes: 'Magallanes',
  ia: 'Inteligencia Artificial',
  marketing: 'Marketing Digital',
  consultoria: 'Consultoría',
};

/**
 * Generates BreadcrumbList JSON-LD schema
 * Supports both path string parsing (remote) and explicit breadcrumb lists (local)
 */
export function breadcrumbSchema(input = []) {
  if (typeof input === 'string') {
    const parts = input.replace(/\/+$/, '').split('/').filter(Boolean);
    const items = [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": SITE_URL }
    ];

    let accumulated = '';
    parts.forEach((part, i) => {
      accumulated += `/${part}`;
      items.push({
        "@type": "ListItem",
        "position": i + 2,
        "name": LABEL_MAP[part] || part.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        "item": `${SITE_URL}${accumulated}/`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
    };
  } else {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": input.map((itm, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": itm.name,
        "item": itm.item.startsWith("http") ? itm.item : `https://agenciapatagoniacoach.cl${itm.item}`
      }))
    };
  }
}

/**
 * Generates LocalBusiness JSON-LD schema
 * Supports (zoneKey) and (city, region, lat, lng) signatures
 */
export function localBusinessSchema(cityOrZoneKey = "punta-arenas", region, latitude, longitude) {
  if (region !== undefined) {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#local-${cityOrZoneKey.toLowerCase().replace(/\s+/g, '-')}`,
      "name": `PatagoniaCoach en ${cityOrZoneKey}`,
      "parentOrganization": { "@id": `${SITE_URL}/#organization` },
      "description": `Agencia de transformación digital en ${cityOrZoneKey}, ${region}. Desarrollo web, SEO local, IA y automatización.`,
      "url": SITE_URL,
      "telephone": "+56995684198",
      "areaServed": [
        { "@type": "City", "name": cityOrZoneKey },
        { "@type": "AdministrativeArea", "name": region }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityOrZoneKey,
        "addressRegion": region,
        "addressCountry": "CL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      }
    };
  } else {
    const zone = ZONE_DATA[cityOrZoneKey] || ZONE_DATA["punta-arenas"];
    
    return {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `https://agenciapatagoniacoach.cl/#localbusiness-${cityOrZoneKey}`,
      "name": `PatagoniaCoach - ${zone.name}`,
      "image": "https://agenciapatagoniacoach.cl/LogoPatagoniacoach%20.svg",
      "url": "https://agenciapatagoniacoach.cl/",
      "telephone": "+56995684198",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": zone.address,
        "addressLocality": zone.name,
        "addressRegion": "Magallanes",
        "addressCountry": "CL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": zone.latitude,
        "longitude": zone.longitude
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:30"
      },
      "sameAs": [
        "https://www.linkedin.com/in/francogallardo/",
        "https://agenciapatagoniacoach.cl/llms.txt"
      ]
    };
  }
}

/**
 * Generates Service JSON-LD schema
 * Supports ({ name, description, category }) and (name, description, area) signatures
 */
export function serviceSchema(firstParam, description, area) {
  if (typeof firstParam === 'object' && firstParam !== null) {
    const { name, description: desc, category } = firstParam;
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": name,
      "description": desc,
      "provider": {
        "@type": "LocalBusiness",
        "name": "PatagoniaCoach",
        "image": "https://agenciapatagoniacoach.cl/LogoPatagoniacoach%20.svg",
        "telephone": "+56995684198",
        "url": "https://agenciapatagoniacoach.cl/",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Punta Arenas",
          "addressRegion": "Magallanes",
          "addressCountry": "CL"
        }
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Punta Arenas"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Puerto Natales"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Región de Magallanes"
        }
      ],
      "category": category || "Marketing Digital y Tecnología"
    };
  } else {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": { "@id": `${SITE_URL}/#organization` },
      "name": firstParam,
      "description": description,
      "areaServed": { "@type": "AdministrativeArea", "name": area || "Región de Magallanes y de la Antártica Chilena" }
    };
  }
}

/**
 * Generates FAQPage JSON-LD schema
 * @param {Array<{q: string, a: string}>} faqs
 */
export function faqSchema(faqs = []) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a || faq.desc
      }
    }))
  };
}
