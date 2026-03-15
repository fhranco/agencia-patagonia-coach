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
      <div className="grid md:grid-cols-2 gap-16 items-center bg-patagonia-surface rounded-card p-12 md:p-24 border border-white/5 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-patagonia-red/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-patagonia-red/10 border border-patagonia-red/20 text-patagonia-red text-xs font-heading tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4" /> Disponibilidad Limitada
          </div>
          <h2 className="text-6xl font-bold leading-none">LEAD COMMAND</h2>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            No aceptamos a todos los clientes. Buscamos organizaciones comprometidas con la transformación radical. 
            <strong className="text-white"> Solicite su Auditoría Estratégica</strong> y nuestro equipo evaluará su caso en 48hs.
          </p>
          
          <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/5">
            <div>
              <p className="text-3xl font-bold">12</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-2">Slots Mensuales</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.9/5</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-2">Satisfaction ROI</p>
            </div>
          </div>
        </div>

        <div className="bg-patagonia-void p-8 md:p-12 rounded-card border border-white/10 relative z-10 shadow-2xl">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 bg-patagonia-cyan/20 rounded-full flex items-center justify-center mx-auto border border-patagonia-cyan/30">
                  <CheckCircle2 className="w-10 h-10 text-patagonia-cyan" />
                </div>
                <h3 className="text-2xl font-bold">Solicitud Enviada</h3>
                <p className="text-white/60">Gracias por su interés. Un consultor senior analizará su perfil y se contactará vía email en las próximas 48hs.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-xs uppercase tracking-widest text-patagonia-red border-b border-patagonia-red/20 pb-1"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            ) : (
              <form 
                name="lead-command"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Honeypot field for security */}
                <input type="hidden" name="_honeypot" value={formData._honeypot} onChange={handleChange} style={{ display: 'none' }} />
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Nombre Completo</label>
                  <input 
                    required
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Ej. John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-btn p-4 focus:border-patagonia-cyan outline-none transition-all placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Email Corporativo</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="john@empresa.com"
                    className="w-full bg-white/5 border border-white/10 rounded-btn p-4 focus:border-patagonia-cyan outline-none transition-all placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Presupuesto Estimado (Anual)</label>
                  <div className="relative">
                    <select 
                      name="presupuesto"
                      value={formData.presupuesto}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-btn p-4 focus:border-patagonia-cyan outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option className="bg-patagonia-void">$10k - $50k</option>
                      <option className="bg-patagonia-void">$50k - $250k</option>
                      <option className="bg-patagonia-void">$250k+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Desafío Principal</label>
                  <textarea 
                    required
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describa su situación actual..."
                    className="w-full bg-white/5 border border-white/10 rounded-btn p-4 focus:border-patagonia-cyan outline-none transition-all placeholder:text-white/10 resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className="btn-primary w-full flex items-center justify-center gap-3 py-6 shadow-[0_0_30px_rgba(240,20,10,0.2)] disabled:opacity-50 group"
                >
                  {status === 'submitting' ? (
                    <>PROCESANDO <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : (
                    <>SOLICITAR AUDITORIA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
                <p className="text-[10px] text-center text-white/30 uppercase tracking-widest mt-4">
                  Auditamos cultura, tecnología y potencial de mercado.
                </p>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LeadCommand;

