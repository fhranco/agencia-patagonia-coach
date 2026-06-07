import PageTemplate from './PageTemplate';

const ManejoRedesSocialesPuntaArenas = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/manejo-redes-sociales-punta-arenas/#service",
    "name": "Manejo de Redes Sociales en Punta Arenas",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Punta Arenas" },
      { "@type": "City", "name": "Puerto Natales" },
      { "@type": "AdministrativeArea", "name": "Magallanes" }
    ],
    "description": "Gestión estratégica y manejo profesional de redes sociales en Punta Arenas. Parrillas de contenido mensual, diseño corporativo y copywriting B2B local.",
    "knowsAbout": [
      "Manejo de Redes Sociales",
      "Planificación de Contenido",
      "Diseño de Carruseles",
      "Copywriting para Redes Sociales",
      "Branding Digital"
    ]
  };

  const features = [
    {
      title: "Consistencia y Actividad Continua",
      desc: "Diseñamos y programamos una grilla mensual de contenidos para que sus redes se mantengan activas y dinámicas sin depender de su tiempo disponible."
    },
    {
      title: "Estética Visual de Autoridad",
      desc: "Desarrollamos una línea gráfica coherente y profesional para sus publicaciones que destaque la calidad real de los servicios de su empresa."
    },
    {
      title: "Redacción y Mensajes Claros",
      desc: "Escribimos textos enfocados en resolver las dudas del cliente, mostrar las fortalezas de su negocio y guiar a los usuarios hacia el contacto comercial."
    }
  ];

  const faqs = [
    {
      q: "¿Cómo ayuda el manejo de redes sociales a mi negocio?",
      desc: "Mantiene su marca en la mente de sus clientes locales y proyecta una imagen de empresa activa, organizada y confiable, lo cual facilita la decisión de compra."
    },
    {
      q: "¿Tengo control sobre lo que se publica?",
      desc: "Absolutamente. Planificamos todo el contenido del mes con anticipación y se lo presentamos para su revisión y aprobación antes de programar cualquier publicación."
    },
    {
      q: "¿Realizan la atención al cliente en los comentarios?",
      desc: "Monitoreamos la actividad y le notificamos de inmediato las consultas de cotización para que su equipo de ventas responda de forma directa a los leads calificados."
    }
  ];

  const formattedFaqs = faqs.map(f => ({ q: f.q, a: f.desc }));

  return (
    <PageTemplate
      title="Manejo de Redes Sociales en Punta Arenas | Gestión Profesional"
      h1="Manejo profesional de redes sociales en Punta Arenas"
      description="Gestión estratégica de redes sociales en Punta Arenas. Mantenga sus perfiles corporativos activos, profesionales y atractivos sin perder tiempo."
      content="Tus redes sociales no deberían depender de si tienes tiempo libre para publicar o no. En PatagoniaCoach asumimos el manejo profesional de tus canales en Punta Arenas y Magallanes. Diseñamos, redactamos y programamos una grilla estratégica mensual para que tu negocio mantenga una presencia constante, seria y atractiva, proyectando la verdadera calidad de tus servicios ante el mercado local."
      features={features}
      faqs={formattedFaqs}
      schema={schema}
    />
  );
};

export default ManejoRedesSocialesPuntaArenas;
