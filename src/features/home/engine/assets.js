export const PATAGONIA_ASSET_CONFIG = Object.freeze({
  "assets/biography-action/studio-camera.png": "/images/strategy-core.webp",
  "assets/guide-poses/practice-image.png": "/images/ai-core.webp",
  "assets/guide-poses/works-guide.png": "/images/web-core.webp",
  "assets/identity/patagonia-signature.png": "/Logoweb.svg",
  "assets/portraits/contact-portrait.png": "/images/comm-global.webp",
  "assets/portraits/fullbody-contour.svg": "/images/strategy-core.webp",
  "assets/portraits/fullbody.png": "/patagonia_luxury_hero.webp",
  "assets/practice/01-magnetic.png": "/portfolio/portafolio web de nutrición integrativa.webp",
  "assets/practice/02-filament.png": "/images/seo-map.webp",
  "assets/practice/03-kinetic.png": "/images/web-core.webp",
  "assets/practice/04-mechanism.png": "/images/magallanes-authority.webp",
  "assets/practice/05-architecture.png": "/images/comm-global.webp",
  "assets/practice/06-typography.png": "/images/tours-360.webp",
  "assets/practice/07-portrait.png": "/images/ai-core.webp",
  "assets/practice/08-botanical.png": "/images/strategy-core.webp",
  "assets/practice/09-landscape.png": "/images/natales-authority.webp",
  "assets/practice/10-optics.png": "/images/tdf-authority.webp",
  "assets/selected-motion/01.mp4": "",
  "assets/selected-motion/01.png": "/portfolio/agm rent a car en la patagonia.webp",
  "assets/selected-motion/02.mp4": "",
  "assets/selected-motion/02.png": "/portfolio/pedidos rápidos, burgers increíbles.webp",
  "assets/selected-motion/03.mp4": "",
  "assets/selected-motion/03.png": "/portfolio/presentación web remag_ reciclaje sostenible.webp",
  "assets/selected-motion/04.mp4": "",
  "assets/selected-motion/04.png": "/portfolio/boostpatagonia_ marketing digital en patagonia.webp",
  "assets/selected-motion/05.mp4": "",
  "assets/selected-motion/05.png": "/portfolio/travesía paine_ la patagonia te espera.webp",
  "assets/selected-motion/06.mp4": "",
  "assets/selected-motion/06.png": "/portfolio/presentación web inmobiliaria magallanes.webp",
  "assets/selected-motion/07.mp4": "",
  "assets/selected-motion/07.png": "/portfolio/seguridad y tecnología en magallanes.webp",
  "assets/selected-motion/08.mp4": "",
  "assets/selected-motion/08.png": "/portfolio/impulsando el desarrollo con tailor servicios.webp"
});

export function resolveHomeAsset(path) {
  const key = path.split("?")[0];
  const url = PATAGONIA_ASSET_CONFIG[key];
  if (!url) return path;
  return url;
}

export function createProceduralPlaceholder(title = "Proyecto", accent = "#c8552b") {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 1000;
  const ctx = canvas.getContext("2d");
  const grad = ctx.createLinearGradient(0, 0, 800, 1000);
  grad.addColorStop(0, "#efebe3");
  grad.addColorStop(0.5, "#e5ded4");
  grad.addColorStop(1, "#d6cfc3");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 800, 1000);
  ctx.strokeStyle = accent;
  ctx.lineWidth = 4;
  ctx.strokeRect(40, 40, 720, 920);
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.arc(400, 450, 160, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#22231f";
  ctx.font = "600 36px 'Geist', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(title, 400, 720);
  return canvas.toDataURL();
}

export function loadImage(src, fallbackTitle = "Proyecto") {
  return new Promise((resolve) => {
    if (!src) {
      const fallback = new Image();
      fallback.onload = () => resolve(fallback);
      fallback.src = createProceduralPlaceholder(fallbackTitle);
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => {
      const fallback = new Image();
      fallback.crossOrigin = "anonymous";
      fallback.onload = () => resolve(fallback);
      fallback.src = createProceduralPlaceholder(fallbackTitle);
    };
    img.src = src;
  });
}
