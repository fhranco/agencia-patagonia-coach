const SITE_URL = 'https://agenciapatagoniacoach.cl';
const DEFAULT_IMAGE = `${SITE_URL}/portafolio-web.png`;

const ORGANIZATION = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  "name": "PatagoniaCoach",
  "url": SITE_URL,
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
  "sameAs": [
    "https://instagram.com/patagoniacoach.cl",
    "https://www.linkedin.com/in/francogallardo/"
  ]
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

export function breadcrumbSchema(pathname) {
  const parts = pathname.replace(/\/+$/, '').split('/').filter(Boolean);
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
}

export function localBusinessSchema(city, region, latitude, longitude) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#local-${city.toLowerCase().replace(/\s+/g, '-')}`,
    "name": `PatagoniaCoach en ${city}`,
    "parentOrganization": { "@id": `${SITE_URL}/#organization` },
    "description": `Agencia de transformación digital en ${city}, ${region}. Desarrollo web, SEO local, IA y automatización.`,
    "url": SITE_URL,
    "telephone": "+56995684198",
    "areaServed": [
      { "@type": "City", "name": city },
      { "@type": "AdministrativeArea", "name": region }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": region,
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    }
  };
}

export function faqSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };
}

export function serviceSchema(name, description, area) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": { "@id": `${SITE_URL}/#organization` },
    "name": name,
    "description": description,
    "areaServed": { "@type": "AdministrativeArea", "name": area || "Región de Magallanes y de la Antártica Chilena" }
  };
}

export const ZONE_DATA = {
  'punta-arenas': {
    city: 'Punta Arenas', region: 'Magallanes y de la Antártica Chilena',
    lat: -53.1638, lng: -70.9171
  },
  'puerto-natales': {
    city: 'Puerto Natales', region: 'Provincia de Última Esperanza',
    lat: -51.7269, lng: -72.5060
  },
  'tierra-del-fuego': {
    city: 'Tierra del Fuego', region: 'Provincia de Tierra del Fuego',
    lat: -53.7962, lng: -67.6908
  },
  'magallanes': {
    city: 'Región de Magallanes', region: 'Magallanes y de la Antártica Chilena',
    lat: -53.1638, lng: -70.9171
  }
};
