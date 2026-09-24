import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './noa-baseline.css';
import { initNoaBaseline } from './engine/orchestrator.js';
import { NOA_BODY_HTML } from './noaMarkup.js';

export default function NoaBaseline() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = NOA_BODY_HTML;
    const cleanup = initNoaBaseline(containerRef.current);
    return () => {
      cleanup?.();
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="noa-baseline-root" ref={containerRef}>
      <Helmet>
        <title>Noa Vale — Study XI / An image learns to move</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    </div>
  );
}
