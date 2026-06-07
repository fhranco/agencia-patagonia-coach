import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import LeadCommand from '../components/LeadCommand';
import { faqSchema } from '../seo/schemas';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const PageTemplate = ({ title, h1, description, content, schema, features = [], faqs = [], extraSchemas = [] }) => {
  return (
    <div className="bg-patagonia-black text-patagonia-white min-h-screen selection:bg-patagonia-red selection:text-white">
      <SEO title={title} description={description} schema={schema} faqData={faqs} schemas={extraSchemas} />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 px-6 overflow-hidden">
          {/* Background Ambient */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img src="/patagonia_luxury_hero.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-patagonia-black via-patagonia-black/90 to-patagonia-black" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="inline-block px-4 py-1 border border-patagonia-cyan/30 rounded-full bg-patagonia-cyan/5 mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-patagonia-cyan">Servicio de Élite</span>
              </div>
              <h1 className="text-5xl md:text-[6.5rem] font-heading font-light leading-[0.9] tracking-tighter mb-12 text-balance">
                {h1.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? 'text-patagonia-red italic' : ''}>{word} </span>
                ))}
              </h1>
              
              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-7">
                  <p className="text-xl md:text-2xl text-patagonia-secondary font-light leading-relaxed mix-blend-plus-lighter">
                    {content}
                  </p>
                </div>
                <div className="md:col-span-5 p-8 bg-white/[0.03] border border-white/5 backdrop-blur-3xl rounded-3xl">
                  <p className="text-sm font-light text-white/50 italic leading-relaxed">
                    <span className="text-patagonia-cyan font-bold not-italic block mb-2 uppercase tracking-widest text-[10px]">Resumen Ejecutivo</span>
                    "PatagoniaCoach es una agencia de transformación digital en Punta Arenas que ayuda a empresas de Magallanes a mejorar su presencia digital mediante desarrollo web, SEO local y automatizaciones de alto impacto."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features / Content Section */}
        {features.length > 0 && (
          <section className="py-32 px-6 bg-patagonia-black">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-heading font-light mb-16 tracking-widest uppercase text-white/30">Alcance del Servicio</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-10 bg-patagonia-surface/40 border border-white/5 rounded-[2rem] transition-all hover:border-patagonia-red/30"
                  >
                    <CheckCircle2 className="w-8 h-8 text-patagonia-red mb-6" />
                    <h3 className="text-2xl font-heading font-light mb-4">{feature.title}</h3>
                    <p className="text-patagonia-secondary font-light leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        {faqs.length > 0 && (
          <section className="py-32 px-6 border-t border-white/5 bg-patagonia-black">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-heading font-light mb-16 italic text-center">Preguntas Frecuentes</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <h4 className="text-lg font-bold text-patagonia-cyan mb-3">{faq.q}</h4>
                    <p className="text-white/60 font-light leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <LeadCommand />
      </main>
      
      <Footer />
    </div>
  );
};

export default PageTemplate;
