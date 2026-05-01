import PageTemplate from './PageTemplate';

const SEOLocal = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Local Punta Arenas",
    "description": "Optimización en buscadores para que empresas de Punta Arenas y Magallanes aparezcan en los primeros resultados locales."
  };

  const features = [
    { title: "Google Business Mastery", desc: "Optimización total de su perfil de negocio para dominar el 'Local Pack' de Google." },
    { title: "Autoridad Territorial", desc: "Estrategias de contenido diseñadas para conectar con la audiencia específica de Magallanes." },
    { title: "Reportes Proyectivos", desc: "Métricas claras de llamadas, visitas y leads generados por su presencia local." }
  ];

  return (
    <PageTemplate
      title="SEO Local en Punta Arenas y Magallanes | PatagoniaCoach"
      h1="Domina Google en Punta Arenas con SEO Local"
      description="Posicionamos tu empresa en los primeros resultados de búsqueda en Punta Arenas y Magallanes para atraer clientes locales de alta intención."
      content="El SEO local es la clave para que los negocios de Magallanes sean encontrados por quienes ya están buscando sus servicios. Optimizamos tu Google Business Profile y tu estructura web para dominar el territorio."
      schema={schema}
      features={features}
    />
  );
};

export default SEOLocal;
