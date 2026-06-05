import { Helmet } from 'react-helmet-async';
import { DEFAULT_IMAGE } from '../seo/config';
import { breadcrumbSchema } from '../seo/schemas';

const SITE_URL = 'https://agenciapatagoniacoach.cl';

const SEO = ({ title, description, schema, image, noindex = false, schemas: extraSchemas }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : SITE_URL;
  const currentImage = image || DEFAULT_IMAGE;
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  const schemas = [];

  schemas.push(breadcrumbSchema(pathname));

  if (schema) {
    schemas.push(schema);
  }

  if (extraSchemas) {
    schemas.push(...extraSchemas);
  }

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={currentImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={currentImage} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
