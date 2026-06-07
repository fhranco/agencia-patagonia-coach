import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import Native3DLogo from './Native3DLogo';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Ken Burns Effect (Background Zoom)
      gsap.fromTo(imageRef.current, 
        { scale: 1.1 }, 
        { scale: 1, duration: 20, ease: "none", repeat: -1, yoyo: true }
      );

      // 2. Sophisticated Title Reveal
      // Wrap words in hidden containers for "rising" effect
      const words = titleRef.current.innerText.split(" ");
      titleRef.current.innerHTML = words
        .map(w => `<span class="inline-block overflow-hidden pb-2"><span class="word-inner inline-block translate-y-full">${w}</span></span>`)
        .join(" ");

      gsap.to(".word-inner", {
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5
      });

      // 3. Staggered reveal for subtext and buttons
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        delay: 1.2
      });

      // 4. Floating Light Leak (Golden Glow)
      gsap.to(".light-leak", {
        x: '20vw',
        y: '10vh',
        opacity: 0.4,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 5. Mouse Parallax Effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(contentRef.current, { x: xPos * 0.5, y: yPos * 0.5, duration: 1, ease: "power2.out" });
        gsap.to(logoRef.current, { x: -xPos, y: -yPos, rotationY: xPos * 0.2, rotationX: -yPos * 0.2, duration: 1, ease: "power2.out" });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-24 px-6 md:px-12 bg-patagonia-black">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          ref={imageRef}
          src="/patagonia_luxury_hero.webp" 
          alt="Patagonia Luxury Experience" 
          className="w-full h-full object-cover opacity-30"
          fetchpriority="high"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-patagonia-black via-patagonia-black/90 to-transparent" />
        
        {/* Animated Light Leak */}
        <div className="light-leak absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-patagonia-gold/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="section-container relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div ref={contentRef} className="space-y-10">
          <div className="hero-reveal inline-block px-5 py-2 border border-patagonia-gold/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-patagonia-gold pointer-events-none">Ecosistemas de Alto Impacto</span>
          </div>
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.85] tracking-[-0.05em] font-heading font-light text-patagonia-white text-balance"
          >
            Transformación digital para empresas de <span className="text-patagonia-red italic">Magallanes</span>.
          </h1>
          <p className="hero-reveal text-xl font-light text-patagonia-secondary max-w-lg leading-relaxed mix-blend-plus-lighter">
            Creamos sitios web, estrategias de comunicación, contenido profesional, SEO local y automatizaciones con inteligencia artificial para empresas que quieren crecer desde la Patagonia hacia el mundo.
          </p>
          <div className="hero-reveal flex flex-wrap gap-8 pt-4">
            <a href="#contacto" className="px-12 py-5 bg-patagonia-red text-patagonia-white rounded-full font-black text-xs tracking-[0.3em] hover:scale-105 transition-all shadow-[0_20px_50px_rgba(255,23,33,0.2)] text-center min-w-[260px]">
              Agendar Auditoría Elite
            </a>
            <Link to="/academia" className="btn-secondary group flex items-center gap-3 py-4 px-8 rounded-full border border-white/10 hover:border-patagonia-gold/30 transition-all">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-patagonia-white group-hover:text-patagonia-gold">Academia</span>
              <div className="w-2 h-2 rounded-full bg-patagonia-gold animate-pulse" />
            </Link>
          </div>
        </div>

        <div ref={logoRef} className="hidden md:block scale-110 perspective-[1000px]">
          <div className="relative group">
            <Native3DLogo />
            {/* Subtle floating gold glow behind the red logo circle */}
            <div className="absolute inset-0 bg-patagonia-gold/10 blur-[100px] rounded-full -z-10 group-hover:bg-patagonia-gold/20 transition-all duration-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
