import React from 'react';

export default function HomeLoader() {
  return (
    <div id="studio-loader">
      <div className="loader-veil"></div>
      <span className="loader-mark monogram" aria-hidden="true">
        PC<span>•</span>
      </span>
      <div
        className="loader-progress"
        role="progressbar"
        aria-label="Cargando experiencia"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="0"
      >
        <span className="loader-count micro">
          <span data-count="">0</span>
          <span className="loader-percent">%</span>
        </span>
      </div>
    </div>
  );
}
