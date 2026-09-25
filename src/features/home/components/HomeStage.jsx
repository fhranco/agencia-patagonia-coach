import React from 'react';

export default function HomeStage({ children }) {
  return (
    <div id="stage">
      <div className="grain" aria-hidden="true"></div>
      <canvas id="gallery-canvas" aria-hidden="true"></canvas>
      <video id="card-motion" muted playsInline preload="none" hidden aria-hidden="true"></video>
      {children}
    </div>
  );
}
