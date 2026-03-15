import { motion } from 'framer-motion';
import { GraduationCap, Zap, Users, Trophy, ArrowRight, CheckCircle2, BookOpen, Sparkles, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeadCommand from '../components/LeadCommand';

const AcademiaLanding = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Academia Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-patagonia-cyan/5 blur-[140px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <GraduationCap className="w-4 h-4 text-patagonia-cyan" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-patagonia-cyan">Ecosistema de Formación Continua</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 italic leading-[0.9]">
            No solo use la IA. <br />
            <span className="text-patagonia-cyan">Domínela.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Programas de alto rendimiento diseñados para equipos que necesitan pasar de la teoría a la ejecución en tiempo récord.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="#cursos" className="px-10 py-5 bg-patagonia-cyan text-black rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,229,255,0.2)] flex items-center gap-2">
                Ver Programas Disponibles <ArrowRight className="w-5 h-5" />
             </a>
          </div>
        </div>
      </section>

      {/* The 3 Course Types */}
      <section id="cursos" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 italic">Nuestra <span className="text-patagonia-cyan">Oferta Formativa.</span></h2>
                <p className="text-white/40 max-w-xl mx-auto font-light">Especializadamente diseñados para diferentes niveles de necesidad y profundidad.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 1. Sprints Tácticos */}
                <motion.div 
                    whileHover={{ y: -10 }}
                    className="p-10 rounded-3xl bg-black border border-white/5 hover:border-patagonia-cyan/30 transition-all flex flex-col h-full"
                >
                    <Zap className="w-12 h-12 text-patagonia-cyan mb-8" />
                    <h3 className="text-2xl font-bold mb-4 italic">Sprints Tácticos de IA</h3>
                    <p className="text-white/40 font-light leading-relaxed mb-8">
                        Talleres de un solo día enfocados en una herramienta o proceso específico. Ideal para equipos que necesitan soluciones rápidas a problemas concretos.
                    </p>
                    <ul className="space-y-4 mb-10 flex-grow">
                        {["Uso de ChatGPT Pro", "Automatización de Email", "Creación de Contenido con IA"].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-white/60">
                                <CheckCircle2 className="w-4 h-4 text-patagonia-cyan flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a href="#contacto" className="w-full py-4 text-center border border-white/10 rounded-xl hover:bg-white/5 transition-colors font-bold text-sm uppercase tracking-widest">
                        Me interesa un Sprint
                    </a>
                </motion.div>

                {/* 2. Bootcamps */}
                <motion.div 
                    whileHover={{ y: -10 }}
                    className="p-10 rounded-3xl bg-patagonia-cyan/5 border border-patagonia-cyan/30 transition-all flex flex-col h-full relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 bg-patagonia-cyan text-black text-[10px] font-bold px-4 py-1 uppercase tracking-widest">Popular</div>
                    <Users className="w-12 h-12 text-patagonia-cyan mb-8" />
                    <h3 className="text-2xl font-bold mb-4 italic text-patagonia-cyan">Bootcamps de Acción Directa</h3>
                    <p className="text-white/70 font-light leading-relaxed mb-8">
                        Inmersiones intensivas de 1 a 4 semanas. Pasamos de cero a implementar un ecosistema operativo completo con su equipo.
                    </p>
                    <ul className="space-y-4 mb-10 flex-grow">
                        {["Metodología Hand-On", "Proyecto Real Implementado", "Soporte Post-Bootcamp"].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-white/90">
                                <CheckCircle2 className="w-4 h-4 text-patagonia-cyan flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a href="#contacto" className="w-full py-4 text-center bg-patagonia-cyan text-black rounded-xl hover:scale-105 transition-all font-bold text-sm uppercase tracking-widest">
                        Reservar para mi Equipo
                    </a>
                </motion.div>

                {/* 3. Liderazgo Digital */}
                <motion.div 
                    whileHover={{ y: -10 }}
                    className="p-10 rounded-3xl bg-black border border-white/5 hover:border-patagonia-cyan/30 transition-all flex flex-col h-full"
                >
                    <Trophy className="w-12 h-12 text-patagonia-cyan mb-8" />
                    <h3 className="text-2xl font-bold mb-4 italic">Programas de Liderazgo</h3>
                    <p className="text-white/40 font-light leading-relaxed mb-8">
                        Formación estratégica para directivos y dueños de negocio. Cómo gestionar equipos en la era de la IA y tomar decisiones basadas en datos.
                    </p>
                    <ul className="space-y-4 mb-10 flex-grow">
                        {["Visión Estratégica", "Gestión de Talento Híbrido", "Ética y Seguridad en IA"].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-white/60">
                                <CheckCircle2 className="w-4 h-4 text-patagonia-cyan flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a href="#contacto" className="w-full py-4 text-center border border-white/10 rounded-xl hover:bg-white/5 transition-colors font-bold text-sm uppercase tracking-widest">
                        Consultar sobre Liderazgo
                    </a>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Why Patagonia Academia? */}
      <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
              <div className="flex-1 space-y-8">
                  <h2 className="text-5xl font-bold italic leading-tight">Formación <br /><span className="text-patagonia-cyan">Sin Burocracia.</span></h2>
                  <p className="text-xl text-white/50 font-light">No damos diplomas para colgar en la pared. Entregamos capacidades para mejorar su flujo de caja.</p>
                  
                  <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                          <p className="text-4xl font-bold italic text-patagonia-cyan">100%</p>
                          <p className="text-[10px] uppercase tracking-widest text-white/40">Práctico y Aplicable</p>
                      </div>
                      <div className="space-y-2">
                          <p className="text-4xl font-bold italic text-patagonia-cyan">+500</p>
                          <p className="text-[10px] uppercase tracking-widest text-white/40">Profesionales Formados</p>
                      </div>
                  </div>
              </div>
              
              <div className="flex-1 relative">
                  <div className="p-10 bg-white/5 border border-white/10 rounded-3xl relative z-10">
                      <Sparkles className="w-10 h-10 text-patagonia-cyan mb-6" />
                      <p className="text-2xl font-light italic leading-relaxed text-white/80">
                         "La capacitación en PatagoniaCoach fue el punto de inflexión. En 2 semanas mi equipo aprendió a automatizar tareas que antes nos tomaban días."
                      </p>
                      <div className="mt-8 flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-white/10" />
                          <div>
                              <p className="font-bold text-sm">Director de Operaciones</p>
                              <p className="text-[10px] text-white/40 uppercase tracking-widest">Empresa Logística B2B</p>
                          </div>
                      </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-full h-full border border-patagonia-cyan/20 rounded-3xl -z-10" />
              </div>
          </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-32 px-6 bg-patagonia-cyan">
          <div className="max-w-4xl mx-auto text-center space-y-10">
              <h2 className="text-4xl md:text-7xl font-bold italic text-black leading-tight">Lleve a su equipo <br /> al siguiente nivel.</h2>
              <p className="text-xl text-black/70 font-medium">Diseñamos programas in-house a medida según los desafíos específicos de su organización.</p>
              <a href="#contacto" className="inline-block bg-black text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl">
                 HABLEMOS DE SU EQUIPO
              </a>
          </div>
      </section>

      <LeadCommand />

      <Footer />
    </div>
  );
};

export default AcademiaLanding;
