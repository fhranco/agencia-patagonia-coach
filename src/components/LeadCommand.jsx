import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

const LeadCommand = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    presupuesto: '$10k - $50k',
    mensaje: '',
    _honeypot: '' // Anti-spam field
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Security: Check honeypot
    if (formData._honeypot) {
      console.warn('Bot detected');
      return;
    }

    setStatus('submitting');
    
    try {
      // Integration for Hostinger (using custom mail.php)
      const form = new FormData();
      Object.keys(formData).forEach(key => form.append(key, formData[key]));
      form.append('form_type', 'Auditoría Estratégica (Formulario)');

      const response = await fetch('/mail.php', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setStatus('success');
        // Track conversion in Google Analytics
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'generate_lead', {
            'event_category': 'Engagement',
            'event_label': 'Lead Command Form',
            'value': formData.presupuesto
          });
        }
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };



  return (
    <section className="section-container" id="contacto">
      <div className="grid md:grid-cols-2 gap-20 items-center bg-patagonia-surface/30 rounded-[3rem] p-12 md:p-28 border border-white/5 relative overflow-hidden">
        {/* Subtle Gold Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-patagonia-gold/5 blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="space-y-10 relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-patagonia-gold/10 border border-patagonia-gold/20 text-patagonia-gold text-[10px] font-heading tracking-[0.3em] uppercase font-bold">
            <ShieldCheck className="w-4 h-4" /> Disponibilidad Restringida
          </div>
          <h2 className="text-6xl md:text-[5rem] font-heading font-light leading-[0.9] tracking-[-0.05em] text-patagonia-white">SOLICITUD DE <br/><span className="text-patagonia-gold italic">AUDITORÍA ELITE</span>.</h2>
          <p className="text-xl text-patagonia-secondary font-light leading-relaxed max-w-lg">
            No aceptamos a todas las marcas. Buscamos organizaciones comprometidas con una <strong className="text-patagonia-gold">evolución radical</strong>. Nuestro comité senior evaluará su perfil en un lapso de 48 horas.
          </p>
          
          <div className="pt-12 grid grid-cols-2 gap-12 border-t border-white/5">
            <div>
              <p className="text-4xl font-heading font-light text-patagonia-white tracking-tighter">05</p>
              <p className="text-[9px] text-patagonia-gold uppercase tracking-[0.5em] mt-3 font-black">Cupos Mensuales</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-light text-patagonia-white tracking-tighter">100%</p>
              <p className="text-[9px] text-patagonia-secondary/40 uppercase tracking-[0.5em] mt-3 font-black">Confidencialidad</p>
            </div>
          </div>
        </div>

        <div className="bg-patagonia-black/60 backdrop-blur-3xl p-10 md:p-14 rounded-[2.5rem] border border-white/10 relative z-10 shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-8"
              >
                <div className="w-24 h-24 bg-patagonia-gold/10 rounded-full flex items-center justify-center mx-auto border border-patagonia-gold/30">
                  <CheckCircle2 className="w-12 h-12 text-patagonia-gold" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-heading font-light text-patagonia-white">Requerimiento Procesado</h3>
                  <p className="text-patagonia-secondary text-sm leading-relaxed max-w-[280px] mx-auto">Nuestro equipo de consultoría senior analizará su ecosistema y se contactará a la brevedad.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-[9px] uppercase tracking-[0.4em] font-black text-patagonia-white hover:text-patagonia-gold transition-colors pt-10"
                >
                  Nuevo Requerimiento
                </button>
              </motion.div>
            ) : (
              <form 
                name="lead-command"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input type="hidden" name="_honeypot" value={formData._honeypot} onChange={handleChange} style={{ display: 'none' }} />
                
                <div className="space-y-3">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-patagonia-white/30 font-black">Nombre & Cargo</label>
                  <input 
                    required
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Ej. Alexander von Patagonia"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 focus:border-patagonia-gold/50 outline-none transition-all placeholder:text-white/10 font-light text-sm"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[9px] uppercase tracking-[0.4em] text-patagonia-white/30 font-black">Email Corporativo</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="vip@empresa.com"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 focus:border-patagonia-gold/50 outline-none transition-all placeholder:text-white/10 font-light text-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] uppercase tracking-[0.4em] text-patagonia-white/30 font-black">Inversión Estimada</label>
                    <div className="relative">
                      <select 
                        name="presupuesto"
                        value={formData.presupuesto}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 focus:border-patagonia-gold/50 outline-none transition-all appearance-none cursor-pointer font-light text-sm text-patagonia-white/60"
                      >
                        <option className="bg-patagonia-black text-white">$10.000 - $50.000 USD</option>
                        <option className="bg-patagonia-black text-white">$50.000 - $250.000 USD</option>
                        <option className="bg-patagonia-black text-white">$250.000+ USD</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-patagonia-white/30 font-black">Visión de Escalamiento</label>
                  <textarea 
                    required
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Describa su ambición de mercado..."
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 focus:border-patagonia-gold/50 outline-none transition-all placeholder:text-white/10 font-light text-sm resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className="btn-primary w-full flex items-center justify-center gap-4 py-6 shadow-2xl disabled:opacity-50 group !text-[10px]"
                >
                  {status === 'submitting' ? (
                    <>ENCRIPTANDO DATOS <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : (
                    <>SOLICITAR ACCESO ESTRATÉGICO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 opacity-20 grayscale">
                   <ShieldCheck className="w-3 h-3" />
                   <span className="text-[8px] uppercase tracking-[0.4em] font-black">Encriptación de Nivel Bancario 256-bit</span>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LeadCommand;

