import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './home.css';
import { initHomeEngine } from './engine/orchestrator.js';
import { HOME_CONTENT, HOME_SEO_SCHEMA } from './data/homeContent.js';

import HomeLoader from './components/HomeLoader.jsx';
import HomeHeader from './components/HomeHeader.jsx';
import HomeStage from './components/HomeStage.jsx';
import HomeHero from './components/HomeHero.jsx';
import HomeEntrance from './components/HomeEntrance.jsx';
import HomeApproach from './components/HomeApproach.jsx';
import HomeCapabilities from './components/HomeCapabilities.jsx';
import HomeWork from './components/HomeWork.jsx';
import HomeFooter from './components/HomeFooter.jsx';
import HomeProjectDialog from './components/HomeProjectDialog.jsx';
import HomeContactDialog from './components/HomeContactDialog.jsx';

export default function PatagoniaHome() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanup = initHomeEngine(containerRef.current);
    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <div className="patagonia-home-root noa-baseline-root" ref={containerRef}>
      <Helmet>
        <title>{HOME_CONTENT.title}</title>
        <meta name="description" content={HOME_CONTENT.description} />
        <link rel="canonical" href="https://agenciapatagoniacoach.cl/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agenciapatagoniacoach.cl/" />
        <meta property="og:title" content={HOME_CONTENT.title} />
        <meta property="og:description" content={HOME_CONTENT.description} />
        <meta property="og:locale" content="es_CL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={HOME_CONTENT.title} />
        <meta name="twitter:description" content={HOME_CONTENT.description} />
        <script type="application/ld+json">
          {JSON.stringify(HOME_SEO_SCHEMA)}
        </script>
      </Helmet>

      <HomeLoader />
      <HomeHeader />

      <HomeStage>
        <HomeHero />
        <HomeEntrance />
        <HomeApproach />
        <HomeCapabilities />
        <HomeWork />
        <div id="loading" hidden=""></div>
      </HomeStage>

      <HomeFooter />
      <HomeProjectDialog />
      <HomeContactDialog />

      <noscript>
        <p className="noscript">
          Esta experiencia interactiva requiere JavaScript. <a data-asset-href="/images/projects-showcase.webp">Ver proyectos</a>.
        </p>
      </noscript>
    </div>
  );
}
