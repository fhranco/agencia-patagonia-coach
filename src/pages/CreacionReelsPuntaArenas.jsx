import PageTemplate from './PageTemplate';

const CreacionReelsPuntaArenas = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/creacion-reels-punta-arenas/#service",
    "name": "Creación de Reels en Punta Arenas",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Punta Arenas" },
      { "@type": "City", "name": "Puerto Natales" },
      { "@type": "AdministrativeArea", "name": "Magallanes" }
    ],
    "description": "Servicio de creación de Reels y videos cortos estratégicos para empresas en Punta Arenas. Guiones comerciales y edición dinámica de alta conversión.",
    "knowsAbout": [
      "Creación de Reels",
      "Edición de Video Corto",
      "Ganchos de Atención de 3 Segundos",
      "Guiones Comerciales",
      "Algoritmos de Instagram y TikTok"
    ]
  };

  const features = [
    {
      title: "Ganchos de Atención Inmediata",
      desc: "Diseñamos los primeros 3 segundos de cada Reel para retener al usuario de inmediato con ganchos visuales y textos directos."
    },
    {
      title: "Guiones con Enfoque de Ventas",
      desc: "Escribimos guiones concisos que plantean un problema común, exponen su solución y cierran con un llamado claro a la cotización."
    },
    {
      title: "Edición y Ritmo de Retención",
      desc: "Aplicamos transiciones, zooms, subtítulos sincronizados y efectos de audio para mantener al usuario interesado hasta el final."
    }
  ];

  const faqs = [
    {
      q: "¿Cómo ayuda un Reel a conseguir clientes?",
      desc: "El formato de Reels tiene un alcance orgánico superior en Instagram, lo que permite que su marca llegue a dueños de negocios e inversionistas de Magallanes sin pagar publicidad."
    },
    {
      q: "¿Qué pasa si no me gusta hablar frente a la cámara?",
      desc: "No es estrictamente necesario hablar frente a la cámara. Podemos estructurar reels basados en tomas de sus procesos productivos, bodegas, herramientas o testimonios con una voz en off profesional o subtítulos estratégicos."
    },
    {
      q: "¿La edición incluye subtítulos y música con derechos libres?",
      desc: "Sí, todos los videos se entregan con subtítulos limpios integrados y música en tendencia optimizada para su correcta visualización y alcance en Instagram y Facebook."
    }
  ];

  const formattedFaqs = faqs.map(f => ({ q: f.q, a: f.desc }));

  return (
    <PageTemplate
      title="Creación de Reels en Punta Arenas | Videos Cortos Estratégicos"
      h1="Creación de reels de alto impacto en Punta Arenas"
      description="Creación de Reels profesionales para empresas en Punta Arenas y Magallanes. Guiones claros, ganchos de 3 segundos y edición de alta retención para vender."
      content="Los Reels y videos cortos no deben ser improvisados si quieres proyectar profesionalismo. En PatagoniaCoach diseñamos, guionizamos y editamos Reels comerciales en Punta Arenas dirigidos al público local. Creamos contenidos con ganchos magnéticos en los primeros 3 segundos, audios seleccionados y subtítulos dinámicos que mantienen enganchada a la audiencia y generan cotizaciones efectivas."
      features={features}
      faqs={formattedFaqs}
      schema={schema}
    />
  );
};

export default CreacionReelsPuntaArenas;
