import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray(".protocol-step");
      
      // Horizontal Content Scroll
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => `+=${containerRef.current.offsetWidth * horizontalSections.length}`,
        }
      });

      // Color Activation without Parallax
      gsap.fromTo(bgRef.current, 
        { 
          filter: "grayscale(100%) brightness(0.6)",
          opacity: 0.5,
        },
        {
          filter: "grayscale(0%) brightness(1)",
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "top top",
            scrub: true,
          }
        }
      );

      // Interactive Spotlight / Particles Effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const target = containerRef.current;
        if (!target) return;
        
        const rect = target.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        gsap.to(spotlightRef.current, {
          left: x,
          top: y,
          duration: 0.5,
          ease: "power2.out"
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      id: "01",
      title: "Arquitectura",
      description: "Diseño del mapa de integración entre su equipo y la IA. Identificamos cuellos de botella y diseñamos su arquitectura de datos única.",
      status: "Designing..."
    },
    {
      id: "02",
      title: "Fusión",
      description: "Despliegue donde la tecnología se vuelve parte orgánica del flujo diario. Integración de procesos y automatización de alto impacto.",
      status: "Building..."
    },
    {
      id: "03",
      title: "Evolución",
      description: "Donde el ecosistema empieza a aprender y crecer de forma autónoma. Aseguramos la sostenibilidad y el liderazgo continuo.",
      status: "Evolving..."
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img 
          ref={bgRef}
          src="/patagonia_protocol_v4.webp" 
          alt="Protocol Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Spotlight Effect Layer */}
        <div 
          ref={spotlightRef}
          className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1] hidden md:block"
          style={{
            background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, rgba(240,20,10,0.05) 50%, transparent 70%)',
            mixBlendMode: 'screen',
            filter: 'blur(40px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-patagonia-void via-transparent to-patagonia-void opacity-90 z-[2]" />
      </div>

      <div className="flex h-screen items-center z-10 relative">
        {/* Intro Slide */}
        <div className="protocol-step min-w-full flex items-center justify-center px-4 sm:px-12 md:px-20">
          <div className="max-w-4xl text-center space-y-4 sm:space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold leading-none tracking-tighter">EL PROTOCOLO</h2>
            <p className="text-sm sm:text-lg md:text-xl text-white/50 font-light tracking-wide uppercase">Metodología de Alto Impacto para la Innovación</p>
            <div className="w-12 h-1 bg-patagonia-red mx-auto" />
          </div>
        </div>

        {steps.map((step, i) => (
          <div key={i} className="protocol-step min-w-full h-full flex items-center py-20 px-6 sm:px-12 md:px-24">
            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center max-w-[1800px] mx-auto w-full">
              <div className="space-y-6 sm:space-y-8 relative order-2 md:order-1">
                <div className="text-7xl sm:text-9xl md:text-[15rem] font-bold text-white/[0.03] leading-none absolute -top-10 sm:-top-20 left-0 pointer-events-none select-none">
                  {step.id}
                </div>
                <div className="relative pt-10 sm:pt-0">
                  <span className="text-patagonia-red font-heading tracking-[0.3em] text-xs sm:text-sm uppercase mb-2 sm:mb-4 block">{step.status}</span>
                  <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-8">{step.title}</h3>
                  <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="glass-card flex flex-col items-center justify-center gap-4 sm:gap-6 py-12 sm:py-20 border-patagonia-cyan/20 bg-patagonia-cyan/5 order-1 md:order-2">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-patagonia-cyan/20 animate-pulse border border-patagonia-cyan/50 flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-patagonia-cyan shadow-[0_0_15px_#00E5FF]" />
                </div>
                <p className="text-patagonia-cyan font-heading text-[10px] sm:text-xs tracking-widest text-glow-cyan uppercase">System Active</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Protocol;
