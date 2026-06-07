import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Loader2, CheckCircle2, X } from 'lucide-react';

const LeadCommand = ({ isModal = false, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    presupuesto: '$10M - $30M CLP',
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
    <section className={isModal ? "" : "section-container py-32 md:py-48"} id={isModal ? "" : "contacto"}>
      <div className={`grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center ${isModal ? 'p-0' : 'bg-patagonia-surface/20 rounded-3xl md:rounded-[5rem] p-10 md:p-24 border border-white/5'} relative overflow-hidden`}>
        {/* Close Button for Modal */}
        {isModal && (
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-50 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/40 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        
        {/* Subtle Gold Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-patagonia-gold/5 blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="space-y-12 relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-patagonia-gold/5 border border-patagonia-gold/10 text-patagonia-gold text-[9px] font-heading tracking-[0.4em] uppercase font-black">
            <ShieldCheck className="w-4 h-4 opacity-50" /> Protocolo de Admisión Selectiva
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-light leading-[1] tracking-tight text-white/90 text-balance">
            SOLICITUD DE <br/>
            <span className="italic text-patagonia-gold">AUDITORÍA.</span>
          </h2>
          <p className="text-xl md:text-2xl text-patagonia-secondary font-light leading-relaxed max-w-xl">
            Iniciamos procesos de transformación solo con organizaciones que buscan <span className="text-white font-normal">liderazgo absoluto</span> en su nicho.
          </p>
          
          <div className="pt-16 grid grid-cols-2 gap-16 border-t border-white/5 max-w-md">
            <div>
              <p className="text-5xl font-heading font-light text-patagonia-white tracking-tighter">03</p>
              <p className="text-[8px] text-patagonia-gold uppercase tracking-[0.5em] mt-4 font-black opacity-60">Cupos Senior Disponibles</p>
            </div>
            <div>
              <p className="text-5xl font-heading font-light text-patagonia-white tracking-tighter">AES</p>
              <p className="text-[8px] text-patagonia-secondary/40 uppercase tracking-[0.5em] mt-4 font-black">Protocolo de Seguridad</p>
            </div>
          </div>
        </div>

        <div className="bg-patagonia-black/40 backdrop-blur-3xl p-10 md:p-16 rounded-3xl md:rounded-[3.5rem] border border-white/5 relative z-10 shadow-[0_60px_120px_rgba(0,0,0,0.5)]">
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
                  <h3 className="text-3xl font-heading font-light text-patagonia-white">Transmisión Exitosa</h3>
                  <p className="text-patagonia-secondary text-sm leading-relaxed max-w-[280px] mx-auto font-light">Su requerimiento ha sido encriptado y enviado a nuestro comité de evaluación senior.</p>
                </div>
              </motion.div>
            ) : (
              <form 
                name="lead-command"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input type="hidden" name="_honeypot" value={formData._honeypot} onChange={handleChange} style={{ display: 'none' }} />
                
                <div className="space-y-3">
                  <label htmlFor="input-nombre" className="text-[9px] uppercase tracking-[0.4em] text-patagonia-white/65 font-black">Identidad & Organización</label>
                  <input 
                    required
                    id="input-nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Nombre Completo / Empresa"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 focus:border-patagonia-gold/50 outline-none transition-all placeholder:text-white/10 font-light text-sm"
                  />
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label htmlFor="input-email" className="text-[9px] uppercase tracking-[0.4em] text-patagonia-white/65 font-black">Canal de Contacto (Email)</label>
                    <input 
                      required
                      id="input-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="email@corporativo.com"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 focus:border-patagonia-gold/50 outline-none transition-all placeholder:text-white/10 font-light text-base"
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="input-whatsapp" className="text-[9px] uppercase tracking-[0.4em] text-patagonia-white/65 font-black">WhatsApp de Contacto</label>
                    <input 
                      required
                      id="input-whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp || ''}
                      onChange={handleChange}
                      type="tel" 
                      placeholder="+56 9 XXXX XXXX"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 focus:border-patagonia-gold/50 outline-none transition-all placeholder:text-white/10 font-light text-base"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="select-presupuesto" className="text-[9px] uppercase tracking-[0.4em] text-patagonia-white/65 font-black">Escala de Inversión Estimada</label>
                    <div className="relative">
                      <select 
                        id="select-presupuesto"
                        name="presupuesto"
                        value={formData.presupuesto}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 focus:border-patagonia-gold/50 outline-none transition-all appearance-none cursor-pointer font-light text-sm text-patagonia-white/60"
                      >
                        <option className="bg-patagonia-black text-white">$10M - $30M CLP</option>
                        <option className="bg-patagonia-black text-white">$30M - $100M CLP</option>
                        <option className="bg-patagonia-black text-white">$100M+ CLP</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="textarea-mensaje" className="text-[9px] uppercase tracking-[0.4em] text-patagonia-white/65 font-black">Objetivos Estratégicos</label>
                  <textarea 
                    required
                    id="textarea-mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Describa el desafío táctico de su organización..."
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 focus:border-patagonia-gold/50 outline-none transition-all placeholder:text-white/10 font-light text-sm resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className="btn-primary w-full flex items-center justify-center gap-4 py-6 shadow-2xl disabled:opacity-50 group !text-[10px]"
                >
                  {status === 'submitting' ? (
                    <>PROCESANDO REQUERIMIENTO <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : (
                    <>INICIAR AUDITORÍA ESTRATÉGICA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 opacity-20 grayscale">
                   <ShieldCheck className="w-3 h-3" />
                   <span className="text-[8px] uppercase tracking-[0.4em] font-black">Transmisión Segura SSL-256</span>
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

