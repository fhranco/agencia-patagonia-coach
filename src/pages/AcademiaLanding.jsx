import { motion } from 'framer-motion';
import { GraduationCap, Zap, Users, Trophy, ArrowRight, CheckCircle2, BookOpen, Sparkles, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadCommand from '../components/LeadCommand';

const AcademiaLanding = () => {
  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen">
      <Navbar />
      
      {/* Academia Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img src="/patagonia_luxury_hero.png" alt="Academia Luxury" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-patagonia-black/80 to-patagonia-black" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-patagonia-gold/20 mb-12"
          >
            <GraduationCap className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black pointer-events-none">Ecosistema de Formación Superior</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-heading font-light tracking-[-0.05em] mb-12 leading-[0.85] text-balance">
            No solo use la IA. <br />
            <span className="text-patagonia-gold italic">Domínela.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-patagonia-secondary max-w-3xl mx-auto font-light leading-relaxed mb-16 mix-blend-plus-lighter">
            Programas de alto rendimiento diseñados para directivos y equipos que necesitan pasar de la teoría a la ejecución con autoridad total.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
             <a href="#cursos" className="btn-primary min-w-[280px]">
                Explorar Programas 
             </a>
          </div>
        </div>
      </section>

      {/* The 3 Course Types */}
      <section id="cursos" className="py-40 px-6 bg-patagonia-surface/10">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32 space-y-6">
                <h2 className="text-5xl md:text-[5.5rem] font-heading font-light">Oferta <span className="text-patagonia-gold italic">Académica.</span></h2>
                <p className="text-patagonia-secondary text-xl font-light">Diseñados bajo estándares de excelencia técnica y aplicabilidad inmediata.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    icon: Zap,
                    title: "Talleres de Impacto (2h)",
                    desc: "Cápsulas de ejecución pura. Entramos, resolvemos un desafío estructural con IA y consolidamos el resultado.",
                    highlight: false,
                    btn: "Consultar Sesión"
                  },
                  {
                    icon: Users,
                    title: "Workshops Profundos (4h)",
                    desc: "Inmersión estratégica. Rediseñamos flujos de trabajo reales junto a su equipo. De la visión a la automatización.",
                    highlight: true,
                    btn: "Reservar Workshop"
                  },
                  {
                    icon: Sparkles,
                    title: "Mentoring Elite (Custom)",
                    desc: "Programas in-house diseñados para su organización. Acompañamiento senior para liderar la era digital.",
                    highlight: false,
                    btn: "Diseñar Programa"
                  }
                ].map((p, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className={`p-12 rounded-[3rem] border transition-all duration-700 flex flex-col h-full ${
                      p.highlight 
                        ? 'bg-patagonia-gold/5 border-patagonia-gold/30 shadow-[0_40px_100px_rgba(218,165,32,0.05)]' 
                        : 'bg-patagonia-black/40 border-white/5 hover:border-patagonia-gold/20'
                    }`}
                  >
                    <div className="w-16 h-16 bg-patagonia-gold/10 rounded-2xl flex items-center justify-center mb-10 border border-patagonia-gold/20">
                      <p.icon className="w-8 h-8 text-patagonia-gold" />
                    </div>
                    <h3 className={`text-3xl font-heading font-light mb-6 ${p.highlight ? 'text-patagonia-gold' : 'text-patagonia-white'}`}>{p.title}</h3>
                    <p className="text-patagonia-secondary font-light leading-relaxed mb-10 flex-grow text-lg">
                      {p.desc}
                    </p>
                    <a href="#contacto" className={`w-full py-5 text-center rounded-2xl transition-all font-black text-[10px] uppercase tracking-[0.4em] ${
                      p.highlight ? 'bg-patagonia-gold text-patagonia-black' : 'border border-white/10 hover:bg-white/5 text-patagonia-white'
                    }`}>
                      {p.btn}
                    </a>
                  </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Why Patagonia Academia? */}
      <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-32 items-center">
              <div className="flex-1 space-y-12">
                  <h2 className="text-5xl md:text-7xl font-heading font-light leading-[1] tracking-[-0.04em]">Formación sin <br /><span className="text-patagonia-gold italic">Burocracia.</span></h2>
                  <p className="text-2xl text-patagonia-secondary font-light leading-relaxed max-w-lg">Auditamos sus metas de equipo para entregar capacidades que impactan directamente el flujo de caja.</p>
                  
                  <div className="grid grid-cols-2 gap-16 pt-6">
                      <div className="space-y-4">
                          <p className="text-6xl font-heading font-light text-patagonia-gold tracking-tighter">100%</p>
                          <p className="text-[10px] uppercase tracking-[0.5em] text-patagonia-secondary font-black">Práctico y Aplicable</p>
                      </div>
                      <div className="space-y-4">
                          <p className="text-6xl font-heading font-light text-patagonia-white/40 tracking-tighter">+500</p>
                          <p className="text-[10px] uppercase tracking-[0.5em] text-patagonia-secondary font-black">Líderes Formados</p>
                      </div>
                  </div>
              </div>
              
              <div className="flex-1 relative">
                  <div className="p-16 bg-patagonia-surface/30 backdrop-blur-3xl border border-white/5 rounded-[4rem] relative z-10">
                      <Sparkles className="w-12 h-12 text-patagonia-gold/40 mb-10" />
                      <p className="text-3xl font-heading font-light italic leading-relaxed text-patagonia-white/80">
                         "La formación en PatagoniaCoach fue el punto de inflexión estratégico. Mi equipo domina ahora tareas que antes eran cuellos de botella críticos."
                      </p>
                      <div className="mt-12 flex items-center gap-6">
                          <div className="w-14 h-14 rounded-full bg-patagonia-gold/10 border border-patagonia-gold/20" />
                          <div>
                              <p className="font-bold text-lg tracking-tight text-patagonia-white">Director de Estrategia</p>
                              <p className="text-[10px] text-patagonia-gold uppercase tracking-[0.5em] font-black">Corporativo Regional B2B</p>
                          </div>
                      </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-full h-full border border-patagonia-gold/10 rounded-[4rem] -z-10" />
              </div>
          </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-40 px-6 bg-patagonia-gold">
          <div className="max-w-5xl mx-auto text-center space-y-12">
              <h2 className="text-5xl md:text-[5.5rem] font-heading font-light text-patagonia-black leading-[1] tracking-[-0.05em]">Lleve a su equipo <br /> a la <span className="italic font-normal">maestría total.</span></h2>
              <p className="text-2xl text-patagonia-black/70 font-medium max-w-2xl mx-auto">Diseñamos protocolos formativos de alto nivel según los desafíos específicos de su organización.</p>
              <div className="pt-10">
                <a href="#contacto" className="inline-block bg-patagonia-black text-patagonia-gold px-12 py-8 rounded-full font-black text-xs tracking-[0.4em] hover:scale-105 transition-all shadow-2xl">
                   HABLEMOS DE SU EQUIPO
                </a>
              </div>
          </div>
      </section>

      <LeadCommand />

      <Footer />
    </div>
  );
};

export default AcademiaLanding;
