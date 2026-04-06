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
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-24 px-6 md:px-12 bg-patagonia-black">
      {/* Background image med/high opacity gradient */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="/patagonia_luxury_hero.png" alt="Patagonia Luxury Experience" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-patagonia-black via-patagonia-black/80 to-transparent" />
      </div>

      <div className="section-container relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="inline-block px-4 py-1.5 border border-patagonia-gold/30 rounded-full">
            <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-patagonia-gold">Ecosistemas de Alto Impacto</span>
          </div>
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.05em] font-heading font-light text-patagonia-white text-balance"
          >
            Donde la <span className="text-patagonia-gold italic">visión</span> se encuentra con la <span className="opacity-60">tecnología</span>.
          </h1>
          <p className="hero-text text-lg sm:text-xl font-light text-patagonia-secondary max-w-lg leading-relaxed mix-blend-plus-lighter">
            Ayudamos a las organizaciones a escalar sus resultados corporativos mediante el diseño de experiencias digitales de inmersión y capacidades tecnológicas avanzadas.
          </p>
          <div className="hero-text flex flex-wrap gap-6 pt-6">
            <a href="#contacto" className="btn-primary group inline-block text-center min-w-[240px]">
              Agendar Auditoría Elite
            </a>
            <Link to="/academia" className="btn-secondary inline-block text-center min-w-[200px]">
              Explorar Academia
            </Link>
          </div>
        </div>

        <div className="hidden md:block scale-110 opacity-90">
          <Native3DLogo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
