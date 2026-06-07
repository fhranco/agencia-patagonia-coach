/**
 * Centralized JSON-LD Schema Factory for PatagoniaCoach SEO
 */

export const ZONE_DATA = {
  "punta-arenas": {
    name: "Punta Arenas",
    latitude: -53.1638,
    longitude: -70.9171,
    address: "Punta Arenas, Región de Magallanes, Chile"
  },
  "puerto-natales": {
    name: "Puerto Natales",
    latitude: -51.7269,
    longitude: -72.5060,
    address: "Puerto Natales, Región de Magallanes, Chile"
  },
  "magallanes": {
    name: "Magallanes",
    latitude: -53.1500,
    longitude: -70.9000,
    address: "Región de Magallanes y de la Antártica Chilena, Chile"
  }
};

/**
 * Generates LocalBusiness JSON-LD schema
 */
export function localBusinessSchema(zoneKey = "punta-arenas") {
  const zone = ZONE_DATA[zoneKey] || ZONE_DATA["punta-arenas"];
  
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://agenciapatagoniacoach.cl/#localbusiness-${zoneKey}`,
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

/**
 * Generates BreadcrumbList JSON-LD schema based on a list of items
 * @param {Array<{name: string, item: string}>} items 
 */
export function breadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((itm, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": itm.name,
      "item": itm.item.startsWith("http") ? itm.item : `https://agenciapatagoniacoach.cl${itm.item}`
    }))
  };
}

/**
 * Generates Service JSON-LD schema
 */
export function serviceSchema({ name, description, category }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
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
        "text": faq.a
      }
    }))
  };
}
