import React, { useState } from 'react';
import { 
  Code2, 
  Search, 
  Workflow, 
  Compass, 
  ArrowUpRight, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Phone
} from 'lucide-react';
import { CONTACT, getWhatsAppUrl } from '../../constants/contact';
import './ConversionSection.css';

const OPTIONS = [
  {
    id: 'construir',
    num: '01',
    label: 'NECESITO CONSTRUIR',
    subtext: 'Web corporativa, plataforma de alto rendimiento o software a medida.',
    orientation: 'Podemos comenzar por Desarrollo & Plataformas Web.',
    category: 'Desarrollo Web / Plataformas',
    icon: Code2
  },
  {
    id: 'encontrar',
    num: '02',
    label: 'NECESITO SER ENCONTRADO',
    subtext: 'Posicionamiento en Google, presencia en mapas y optimización GEO.',
    orientation: 'Podemos comenzar por SEO Local & Estructura Semántica.',
    category: 'SEO Local & GEO',
    icon: Search
  },
  {
    id: 'automatizar',
    num: '03',
    label: 'NECESITO AUTOMATIZAR',
    subtext: 'Integración de procesos, conexión de sistemas y agentes de IA.',
    orientation: 'Podemos comenzar por Automatización & Orquestación con IA.',
    category: 'Automatización & IA',
    icon: Workflow
  },
  {
    id: 'diagnostico',
    num: '04',
    label: 'NO SÉ POR DÓNDE EMPEZAR',
    subtext: 'Revisemos la infraestructura, datos y procesos de la organización.',
    orientation: 'Podemos comenzar por una Auditoría y Diagnóstico de Ecosistema Digital.',
    category: 'Diagnóstico & Consultoría',
    icon: Compass
  }
];

const ConversionSection = () => {
  const [selectedOpt, setSelectedOpt] = useState(OPTIONS[0]);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    contacto: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepara mensaje de WhatsApp directo
    const msg = (
      `Hola PatagoniaCoach, me interesa evaluar un proyecto.\n` +
      `• Nombre: ${formData.nombre}\n` +
      `• Empresa: ${formData.empresa || 'N/A'}\n` +
      `• Contacto: ${formData.contacto}\n` +
      `• Necesidad: ${selectedOpt.label} (${selectedOpt.category})\n` +
      `• Mensaje: ${formData.mensaje || 'Solicito coordinar una llamada de diagnóstico.'}`
    );
    window.open(getWhatsAppUrl(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <section 
      id="diagnostico" 
      className="conversion-root" 
      aria-label="Punto de Entrada y Conversión de Proyectos"
    >
      <div className="conversion-viewport">
        
        {/* Editorial Lead Header */}
        <header className="conversion-header">
          <div className="conversion-eyebrow-wrap">
            <span className="conversion-step-num">06</span>
            <span className="conversion-eyebrow">PUNTO DE ENTRADA</span>
          </div>

          <h2 className="conversion-title">
            ¿DÓNDE ESTÁ HOY TU ECOSISTEMA DIGITAL?
          </h2>

          <p className="conversion-statement">
            Selecciona tu prioridad actual para orientar el punto de contacto más directo y eficiente.
          </p>
        </header>

        {/* 4 Interactive Decision Options */}
        <div className="conversion-options-grid" role="radiogroup" aria-label="Opciones de prioridad digital">
          {OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedOpt.id === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedOpt(opt)}
                className={`conversion-option-card ${isSelected ? 'option-selected' : ''}`}
              >
                <div className="option-topline">
                  <span className="option-num">{opt.num}</span>
                  <div className="option-icon-wrap">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="option-label">{opt.label}</h3>
                <p className="option-subtext">{opt.subtext}</p>
                <div className="option-status-dot" aria-hidden="true" />
              </button>
            );
          })}
        </div>

        {/* Orientation Feedback Banner */}
        <div className="conversion-orientation-box">
          <div className="orientation-content">
            <Sparkles className="w-4 h-4 text-patagonia-cyan shrink-0" />
            <p className="orientation-text">
              <strong>Diagnóstico preliminar:</strong> {selectedOpt.orientation}
            </p>
          </div>
          <span className="orientation-badge">{selectedOpt.category}</span>
        </div>

        {/* Brief Contact Form & Direct WhatsApp Bridge */}
        <div className="conversion-interaction-grid">
          
          {/* Direct Form */}
          <div className="conversion-form-wrap">
            <form onSubmit={handleSubmit} className="conversion-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="input-nombre" className="form-label">Tu Nombre *</label>
                  <input
                    id="input-nombre"
                    type="text"
                    required
                    placeholder="Ej. Francisca Morales"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="input-empresa" className="form-label">Empresa / Negocio</label>
                  <input
                    id="input-empresa"
                    type="text"
                    placeholder="Ej. Hotel Austral / Rent a Car"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="input-contacto" className="form-label">Email o WhatsApp *</label>
                  <input
                    id="input-contacto"
                    type="text"
                    required
                    placeholder="contacto@empresa.cl o +56 9..."
                    value={formData.contacto}
                    onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Prioridad Seleccionada</label>
                  <input
                    type="text"
                    readOnly
                    value={selectedOpt.label}
                    className="form-input form-input-readonly"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="input-mensaje" className="form-label">Breve detalle del requerimiento (Opcional)</label>
                <textarea
                  id="input-mensaje"
                  rows={3}
                  placeholder="Cuéntanos brevemente qué desafío deseas resolver..."
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="conversion-submit-btn"
                  id="btn-conversar-proyecto"
                >
                  <span>Hablemos de Tu Proyecto</span>
                  <span className="submit-icon-wrap">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>
                <span className="form-privacy-note">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Tratamos tu información con confidencialidad profesional.</span>
                </span>
              </div>
            </form>
          </div>

          {/* Direct Channels Card */}
          <aside className="conversion-direct-card">
            <div className="direct-card-header">
              <MessageSquare className="w-4 h-4 text-patagonia-gold" />
              <span>CANALES DIRECTOS // 53°S</span>
            </div>
            
            <p className="direct-card-desc">
              Si prefieres una conversación inmediata, contáctanos directamente a través de nuestros canales oficiales:
            </p>

            <div className="direct-channels-list">
              <a 
                href={getWhatsAppUrl('Hola PatagoniaCoach, quisiera coordinar una conversación directa para evaluar un proyecto.')}
                target="_blank" 
                rel="noopener noreferrer"
                data-cta="whatsapp"
                className="direct-channel-link"
              >
                <div className="channel-icon-box bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="channel-info">
                  <span className="channel-tag">WHATSAPP DIRECTO</span>
                  <span className="channel-val">{CONTACT.phone}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 channel-arrow" />
              </a>

              <a 
                href={`mailto:${CONTACT.email}`}
                data-cta="email"
                className="direct-channel-link"
              >
                <div className="channel-icon-box bg-sky-500/10 border-sky-500/30 text-sky-400">
                  <Send className="w-4 h-4" />
                </div>
                <div className="channel-info">
                  <span className="channel-tag">CORREO ELECTRÓNICO</span>
                  <span className="channel-val">{CONTACT.email}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 channel-arrow" />
              </a>
            </div>

            <div className="direct-location-box">
              <span className="location-tag">SEDE REGIONAL</span>
              <span className="location-val">{CONTACT.city} • {CONTACT.region} • Chile</span>
              <span className="location-coords">{CONTACT.coords.display}</span>
            </div>
          </aside>

        </div>

      </div>
    </section>
  );
};

export default ConversionSection;
