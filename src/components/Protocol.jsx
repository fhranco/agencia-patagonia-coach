import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const scrollRef = useRef(null);

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

      // Background Parallax & Color Activation
      gsap.fromTo(bgRef.current, 
        { 
          scale: 1.15, 
          filter: "grayscale(100%) brightness(0.7)",
          opacity: 0.4,
          y: "-10%" 
        },
        {
          scale: 1.1,
          filter: "grayscale(0%) brightness(1)",
          opacity: 0.8,
          y: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          ref={bgRef}
          src="/patagonia_protocol_v4.png" 
          alt="Protocol Background" 
          className="w-full h-full object-cover object-center transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-patagonia-void via-transparent to-patagonia-void opacity-80" />
      </div>

      <div ref={scrollRef} className="flex h-screen items-center z-10 relative">
        {/* Intro Slide */}
        <div className="protocol-step min-w-full flex items-center justify-center p-20">
          <div className="max-w-4xl text-center space-y-6">
            <h2 className="text-7xl font-bold leading-none">EL PROTOCOLO</h2>
            <p className="text-xl text-white/50 font-light tracking-wide uppercase">Metodología de Alto Impacto para la Innovación</p>
            <div className="w-12 h-0.5 bg-patagonia-red mx-auto" />
          </div>
        </div>

        {steps.map((step, i) => (
          <div key={i} className="protocol-step min-w-full h-full flex items-center py-24 px-12 md:px-24">
            <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto w-full">
              <div className="space-y-8">
                <div className="text-[12rem] font-bold text-white/5 leading-none absolute -top-10 left-0 pointer-events-none">
                  {step.id}
                </div>
                <div className="relative">
                  <span className="text-patagonia-red font-heading tracking-[0.3em] text-sm uppercase mb-4 block">{step.status}</span>
                  <h3 className="text-6xl font-bold mb-8">{step.title}</h3>
                  <p className="text-2xl text-white/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="glass-card flex flex-col items-center justify-center gap-6 py-20 border-patagonia-cyan/20 bg-patagonia-cyan/5">
                <div className="w-24 h-24 rounded-full bg-patagonia-cyan/20 animate-pulse border border-patagonia-cyan/50 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-patagonia-cyan shadow-[0_0_15px_#00E5FF]" />
                </div>
                <p className="text-patagonia-cyan font-heading text-xs tracking-widest text-glow-cyan uppercase">System Active</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Protocol;
