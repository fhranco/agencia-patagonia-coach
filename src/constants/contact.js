/**
 * Centralized Contact Configuration for PatagoniaCoach
 * Single source of truth for NAP, phone, email, WhatsApp URLs, and default messages.
 */

export const CONTACT = {
  phone: "+56 9 9568 4198",
  phoneRaw: "+56995684198",
  whatsappNumber: "56995684198",
  email: "hola@agenciapatagoniacoach.cl",
  address: "Punta Arenas, Región de Magallanes y de la Antártica Chilena, Chile",
  city: "Punta Arenas",
  region: "Magallanes",
  coords: {
    lat: -53.1638,
    lng: -70.9171,
    display: "53°09′45″S 70°55′21″W"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/francogallardo/",
    instagram: "https://instagram.com/patagoniacoach.cl"
  },
  defaultMessages: {
    general: "Hola PatagoniaCoach, me gustaría coordinar una conversación sobre un proyecto digital.",
    diagnostic: "Hola PatagoniaCoach, completé el Diagnóstico Digital en la web y me gustaría revisar los resultados y la propuesta táctica.",
    development: "Hola PatagoniaCoach, me interesa evaluar un proyecto de Desarrollo Web / Plataforma digital.",
    seo: "Hola PatagoniaCoach, me gustaría auditar el posicionamiento SEO Local y visibilidad de mi empresa en Magallanes.",
    ai: "Hola PatagoniaCoach, quiero evaluar la integración de automatización e Inteligencia Artificial en los procesos de mi empresa."
  }
};

/**
 * Builds a direct WhatsApp link with an encoded prefilled message
 * @param {string} customMessage Optional custom message
 * @returns {string} Fully encoded WhatsApp URL
 */
export const getWhatsAppUrl = (customMessage = CONTACT.defaultMessages.general) => {
  const encodedText = encodeURIComponent(customMessage);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodedText}`;
};

/**
 * Global trigger helpers for custom modal events
 */
export const openAiChat = () => {
  window.dispatchEvent(new CustomEvent('open-ai-chat'));
};

export const openDigitalDiagnostic = () => {
  window.dispatchEvent(new CustomEvent('open-digital-diagnostic'));
};
