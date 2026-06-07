import PageTemplate from './PageTemplate';

const VideosRedesSocialesPuntaArenas = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/videos-redes-sociales-punta-arenas/#service",
    "name": "Videos para Redes Sociales en Punta Arenas",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Punta Arenas" },
      { "@type": "City", "name": "Puerto Natales" },
      { "@type": "AdministrativeArea", "name": "Magallanes" }
    ],
    "description": "Producción de videos profesionales para redes sociales en Punta Arenas. Grabación de procesos, infraestructura y servicios locales en alta definición.",
    "knowsAbout": [
      "Producción de Video para Redes Sociales",
      "Edición de Video Vertical (Reels/TikTok)",
      "Grabación de Procesos Industriales",
      "Subtitulado y Edición Dinámica",
      "Storytelling Audiovisual"
    ]
  };

  const features = [
    {
      title: "Grabación In-Situ en Magallanes",
      desc: "Capturamos su infraestructura local, maquinarias, equipo humano y proyectos reales directamente en su ubicación en la región."
    },
    {
      title: "Edición Profesional y Dinámica",
      desc: "Optimizamos el ritmo del video, aplicamos corrección de color, subtítulos limpios y efectos sonoros que aumentan el tiempo de visualización."
    },
    {
      title: "Guionización Estratégica",
      desc: "No grabamos tomas al azar. Estructuramos el contenido audiovisual para explicar de forma concisa cómo su empresa resuelve problemas reales."
    }
  ];

  const faqs = [
    {
      q: "¿Qué tipo de equipamiento utilizan?",
      desc: "Utilizamos cámaras profesionales de alta definición (con soporte 8K), estabilizadores electrónicos, micrófonos inalámbricos de solapa para audio nítido y drones para tomas aéreas si la zona lo permite."
    },
    {
      q: "¿Cuánto dura el proceso de producción de un video?",
      desc: "Dependiendo de la complejidad, la filmación en terreno toma entre 2 a 4 horas, y la edición final se entrega en un plazo aproximado de 5 a 7 días hábiles."
    },
    {
      q: "¿Se pueden adaptar los videos para LinkedIn y web?",
      desc: "Sí, podemos entregar versiones horizontales adaptadas para su sitio web y para LinkedIn corporativo, además de las versiones verticales para Reels."
    }
  ];

  const formattedFaqs = faqs.map(f => ({ q: f.q, a: f.desc }));

  return (
    <PageTemplate
      title="Videos para Redes Sociales en Punta Arenas | Producción Profesional"
      h1="Producción de videos para redes sociales en Punta Arenas"
      description="Creación y producción de videos profesionales para redes sociales en Punta Arenas y Magallanes. Muestre su infraestructura, procesos y equipo con calidad élite."
      content="Los reels y videos deben mostrar lo que tu empresa realmente hace en el día a día. En PatagoniaCoach producimos videos para redes sociales en Punta Arenas que capturan tu infraestructura real, tus maquinarias, tus obras o la experiencia de tus servicios. Grabamos con equipos profesionales de alta definición para entregar material audiovisual dinámico que capta la atención del cliente y genera confianza inmediata en el mercado."
      features={features}
      faqs={formattedFaqs}
      schema={schema}
    />
  );
};

export default VideosRedesSocialesPuntaArenas;
