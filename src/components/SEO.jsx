import { useEffect } from 'react';

const SEO = ({ title, description, schema }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Handle JSON-LD Schema
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, schema]);

  return null;
};

export default SEO;
