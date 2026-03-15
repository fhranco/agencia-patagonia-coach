import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import Native3DLogo from './Native3DLogo';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Word stagger for title to fix weird line breaks
      const words = titleRef.current.innerText.split(" ");
      titleRef.current.innerHTML = words.map(w => `<span class="inline-block">${w}</span>`).join(" ");
      
      gsap.from(titleRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-animation pointer-events-none" />

      <div className="section-container grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight font-heading font-bold text-white text-balance"
          >
            Lidera la era de la IA con un Ecosistema Organizacional diseñado para escalar.
          </h1>
          <p className="hero-text text-lg sm:text-xl font-light text-white/70 max-w-lg leading-relaxed">
            Ayudamos a las organizaciones a escalar sus resultados mediante la integración de capacidades digitales avanzadas y automatización.
          </p>
          <div className="hero-text flex flex-wrap gap-4 pt-4">
            <a href="#contacto" className="btn-primary group inline-block">
              Agendar Auditoría Estratégica
              <span className="absolute inset-0 border-2 border-patagonia-red rounded-btn opacity-50 animate-ping group-hover:hidden" />
            </a>
            <Link to="/academia" className="btn-secondary inline-block text-center">
              Explorar Academia
            </Link>
          </div>
        </div>

        <Native3DLogo />
      </div>
    </section>
  );
};

export default Hero;
