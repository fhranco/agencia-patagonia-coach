import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEO_CONFIG } from '../seo/config';
import {
  localBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema
} from '../seo/schemas';

const SEO = ({ 
  title: overrideTitle, 
  description: overrideDescription, 
  schema: overrideSchema,
  faqData = null
}) => {
  const { pathname } = useLocation();
  
  // Clean pathname to match config (e.g., strip trailing slash)
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const routeConfig = SEO_CONFIG[cleanPath] || SEO_CONFIG["/"];
  
  const title = overrideTitle || routeConfig.title;
  const description = overrideDescription || routeConfig.description;
  const canonicalUrl = `https://agenciapatagoniacoach.cl${cleanPath}`;
  const defaultImage = 'https://agenciapatagoniacoach.cl/portafolio-web.png';
  
  // Generate schemas
  const schemasToInject = [];
  
  // 1. Breadcrumb Schema (if defined)
  if (routeConfig.breadcrumbs && routeConfig.breadcrumbs.length > 0) {
    schemasToInject.push(breadcrumbSchema(routeConfig.breadcrumbs));
  }
  
  // 2. Custom or Config-based Schema
  if (overrideSchema) {
    schemasToInject.push(overrideSchema);
  } else if (routeConfig.schemaType === "LocalBusiness") {
    schemasToInject.push(localBusinessSchema(routeConfig.zone));
  } else if (routeConfig.schemaType === "Service") {
    schemasToInject.push(
      serviceSchema({
        name: title.split("|")[0].trim(),
        description: description,
        category: routeConfig.category
      })
    );
  }
  
  // 3. FAQ Schema (if FAQs are passed dynamically)
  if (faqData && faqData.length > 0) {
    const generatedFaq = faqSchema(faqData);
    if (generatedFaq) {
      schemasToInject.push(generatedFaq);
    }
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      
      {/* Schema.org JSON-LD structured data */}
      {schemasToInject.map((schemaObj, index) => (
        <script 
          key={`schema-${index}`} 
          type="application/ld+json"
          id={`json-ld-${index}`}
        >
          {JSON.stringify(schemaObj)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
