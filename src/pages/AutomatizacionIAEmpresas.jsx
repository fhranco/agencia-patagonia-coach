import PageTemplate from './PageTemplate';

const AutomatizacionIAEmpresas = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://agenciapatagoniacoach.cl/servicios/automatizacion-ia-empresas/#service",
    "name": "Automatización con IA para Empresas",
    "provider": { "@id": "https://agenciapatagoniacoach.cl/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Punta Arenas" },
      { "@type": "City", "name": "Puerto Natales" },
      { "@type": "AdministrativeArea", "name": "Magallanes" }
    ],
    "description": "Soluciones de automatización con inteligencia artificial para empresas en Punta Arenas. Bots de WhatsApp con lenguaje natural, automatización con Make y n8n, y agentes corporativos.",
    "knowsAbout": [
      "Automatización con IA",
      "Agentes Conversacionales (NLP)",
      "WhatsApp Business API",
      "Integraciones con Make / n8n",
      "Optimización de Procesos de Negocio"
    ]
  };

  const features = [
    {
      title: "Bots Inteligentes en WhatsApp",
      desc: "Asistentes conversacionales que atienden dudas, envían información de servicios y filtran leads 24/7 sin sonar robóticos."
    },
    {
      title: "Conexiones y Flujos (Make / n8n)",
      desc: "Automatizamos el traspaso de información entre sus planillas, CRM, correos y bases de datos para eliminar el tipeo manual de datos."
    },
    {
      title: "Base de Conocimiento Propia",
      desc: "Alimentamos los agentes inteligentes con sus políticas de venta, tarifas e información corporativa para garantizar respuestas 100% verídicas."
    }
  ];

  const faqs = [
    {
      q: "¿La automatización reemplazará a mi equipo de trabajo?",
      desc: "No. Su objetivo es liberar a su equipo de las tareas repetitivas y de bajo valor (como copiar datos o responder las mismas preguntas de precios), permitiéndoles enfocarse en negociaciones y tareas de mayor valor."
    },
    {
      q: "¿Cómo aseguran que el bot no entregue información incorrecta?",
      desc: "Configuramos restricciones estrictas (guardrails) en la programación del agente inteligente, de modo que si no sabe la respuesta a una pregunta compleja, deriva el caso a un agente humano de inmediato."
    },
    {
      q: "¿Es costoso implementar estas herramientas?",
      desc: "La inversión se recupera rápidamente al reducir las horas hombre gastadas en tareas mecánicas y al capturar el 100% de los leads que escriben fuera del horario de oficina."
    }
  ];

  const formattedFaqs = faqs.map(f => ({ q: f.q, a: f.desc }));

  return (
    <PageTemplate
      title="Automatización con IA para Empresas | Soluciones de Eficiencia"
      h1="Automatización con inteligencia artificial para empresas"
      description="Optimice y automatice sus procesos comerciales e internos con IA. Implementación de bots de WhatsApp, integraciones con Make/n8n y agentes inteligentes."
      content="Tus ejecutivos y empleados no deberían perder horas valiosas respondiendo consultas repetitivas de WhatsApp o haciendo tareas administrativas manuales y tediosas. En PatagoniaCoach diseñamos e implementamos sistemas de automatización con IA para empresas en Punta Arenas y Magallanes. Desarrollamos agentes conversacionales y flujos conectados que atienden, filtran y agendan prospectos 24/7 sin requerir supervisión."
      features={features}
      faqs={formattedFaqs}
      schema={schema}
    />
  );
};

export default AutomatizacionIAEmpresas;
