import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const TrustBar = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = marquee.firstElementChild;
    
    // Duplicate content for seamless loop
    const clone = content.cloneNode(true);
    marquee.appendChild(clone);

    const duration = 30;
    const animation = gsap.to(marquee, {
      x: `-${content.offsetWidth}px`,
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    return () => animation.kill();
  }, []);

  const clients = [
    "TECHCORP", "ALPINELABS", "GLACIERSYSTEMS", "ANDESAI", "SUMMITDIGITAL", "VOLCANOTECH", "PATAGONIASTRATEGY"
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-patagonia-void overflow-hidden">
      <div className="section-container !py-0 mb-4 opacity-50 uppercase tracking-[0.3em] text-[10px] text-center">
        Trusted by Industry Leaders
      </div>
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <div ref={marqueeRef} className="flex gap-24 py-4 min-w-full">
          <div className="flex gap-24 items-center">
            {clients.map((client, i) => (
              <span key={i} className="text-4xl font-heading font-bold text-white/20 hover:text-white transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
