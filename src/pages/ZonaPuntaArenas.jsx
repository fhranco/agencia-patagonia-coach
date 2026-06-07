import PageTemplate from './PageTemplate';
import { localBusinessSchema, ZONE_DATA } from '../seo/schemas';

const ZonaPuntaArenas = () => {
  const data = ZONE_DATA['punta-arenas'];
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://agenciapatagoniacoach.cl/zonas/punta-arenas/#webpage",
    "name": "Agencia de Transformación Digital en Punta Arenas | PatagoniaCoach",
    "description": "Lideramos la evolución tecnológica en la capital de la Patagonia. Inteligencia Artificial, Desarrollo Web Pro y Estrategia B2B para empresas de Punta Arenas.",
    "publisher": { "@id": "https://agenciapatagoniacoach.cl/#organization" }
  };

  const features = [
    {
      title: "Despliegue de IA Local",
      desc: "Implementamos 'Empleados Digitales' y agentes de IA diseñados específicamente para resolver los cuellos de botella operativos de las empresas en Punta Arenas."
    },
    {
      title: "Ecosistemas Web Pro",
      desc: "Arquitecturas digitales de alto rendimiento que posicionan su marca como líder indiscutible en el mercado regional y global."
    },
    {
      title: "Dominio de SEO Regional",
      desc: "Estrategias de posicionamiento local para capturar el 100% de la demanda de alta intención en Punta Arenas y alrededores."
    }
  ];

  const faqs = [
    {
      q: "¿Por qué elegir una agencia basada en Punta Arenas?",
      a: "La conectividad y los desafíos logísticos de la Patagonia requieren un socio que entienda la realidad territorial. Operamos localmente con estándares de clase mundial."
    },
    {
      q: "¿Cómo ayuda la IA a mi empresa en Magallanes?",
      a: "La IA permite automatizar la atención al cliente 24/7 y optimizar procesos internos, permitiendo que su equipo humano se enfoque en el valor estratégico."
    }
  ];

  const content = (
    <div className="space-y-8">
      <p>
        Como la firma de mayor autoridad técnica en la capital de la Patagonia, diseñamos ecosistemas digitales que permiten a las empresas líderes de Punta Arenas dominar su mercado y proyectarse globalmente. No instalamos herramientas; evolucionamos resultados.
      </p>
      <div className="pt-8 border-t border-white/5 space-y-4">
        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-patagonia-gold block">Servicios de Élite en Punta Arenas:</span>
        <div className="flex flex-wrap gap-x-6 gap-y-4 text-xs font-semibold uppercase tracking-wider">
          <a href="/servicios/marketing-digital-punta-arenas" className="text-white/60 hover:text-patagonia-gold transition-colors">Marketing Digital</a>
          <a href="/servicios/creacion-paginas-web-punta-arenas" className="text-white/60 hover:text-patagonia-gold transition-colors">Diseño Web</a>
          <a href="/servicios/manejo-redes-sociales-punta-arenas" className="text-white/60 hover:text-patagonia-gold transition-colors">Redes Sociales</a>
          <a href="/servicios/videos-redes-sociales-punta-arenas" className="text-white/60 hover:text-patagonia-gold transition-colors">Videos</a>
          <a href="/servicios/creacion-reels-punta-arenas" className="text-white/60 hover:text-patagonia-gold transition-colors">Reels</a>
          <a href="/servicios/fotografia-para-redes-sociales" className="text-white/60 hover:text-patagonia-gold transition-colors">Fotografía</a>
          <a href="/servicios/seo-local-punta-arenas" className="text-white/60 hover:text-patagonia-gold transition-colors">SEO Local</a>
          <a href="/servicios/automatizacion-ia-empresas" className="text-white/60 hover:text-patagonia-gold transition-colors">Automatización IA</a>
        </div>
      </div>
    </div>
  );

  return (
    <PageTemplate
      title="Agencia de Transformación Digital en Punta Arenas | PatagoniaCoach"
      h1="Liderando el futuro digital en Punta Arenas"
      description="Potenciamos el crecimiento de empresas en la capital regional mediante tecnología, IA y marketing estratégico de élite."
      content={content}
      features={features}
      faqs={faqs}
      schema={schema}
      extraSchemas={[localBusinessSchema(data.city, data.region, data.lat, data.lng)]}
    />
  );
};

export default ZonaPuntaArenas;
