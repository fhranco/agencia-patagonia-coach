/**
 * POST /api/chat
 * PatagoniaCoach AI Assistant Serverless Endpoint
 */

import { setCorsHeaders, isRateLimited, isBot, sanitizeString } from './_security.js';
import { ASSISTANT_KNOWLEDGE } from '../src/data/assistantKnowledge.js';

const AI_API_KEY = process.env.AI_API_KEY || process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY || '';
const AI_API_URL = process.env.AI_API_URL || (process.env.DEEPSEEK_API_KEY ? 'https://api.deepseek.com/v1/chat/completions' : 'https://api.openai.com/v1/chat/completions');
const AI_MODEL = process.env.AI_MODEL || (process.env.DEEPSEEK_API_KEY ? 'deepseek-chat' : 'gpt-4o-mini');

const SYSTEM_PROMPT = `
Eres el Asistente de PatagoniaCoach, orientado a brindar asesoría comercial y técnica preliminar a empresas y profesionales interesados en servicios digitales.

IDENTIDAD Y TERRITORIO:
- Empresa: PatagoniaCoach
- Ubicación: Punta Arenas, Región de Magallanes, Chile (53°09′45″S).
- Cobertura: Magallanes (Punta Arenas, Puerto Natales, Porvenir) y proyectos en Chile / remoto.
- Canal directo oficial: WhatsApp +56 9 9568 4198.

SERVICIOS APROBADOS:
${ASSISTANT_KNOWLEDGE.approvedServices.map(s => `- ${s.title} (${s.path}): ${s.description}`).join('\n')}

HERRAMIENTA DE EVALUACIÓN:
- Diagnóstico Digital: Evaluación interactiva en tiempo real para medir madurez operativa y tecnológica.

REGLAS DE CONDUCTA ESTRICTAS:
1. Tono: Cercano, sobrio, profesional, ejecutivo. Sin lenguaje inflado (evitar palabras como "revolución", "élite", "dominio total").
2. Longitud: Respuestas breves de 2 a 3 párrafos cortos (máximo 120 palabras).
3. Transparencia: NO inventar precios ni paquetes fijos. Cada cotización depende del alcance y arquitectura requerida.
4. Plazos: NO prometer plazos cerrados sin revisión técnica previa.
5. Derivación natural:
   - Si el usuario no tiene claridad de su estado: sugiérele realizar el "Diagnóstico Digital" en la web.
   - Si el usuario tiene un proyecto concreto o requiere cotización: invítale a coordinar una llamada o conversación directa por WhatsApp con el equipo técnico.
6. Si preguntan si trabajamos fuera de Magallanes: sí, atendemos proyectos en todo Chile y de forma remota, con base de ingeniería en Magallanes.
`;

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Anti-Spam checks
  if (isRateLimited(req, 20)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment.' });
  }

  const body = req.body || {};
  if (isBot(body)) {
    return res.status(400).json({ error: 'Spam detected' });
  }

  const rawMessages = Array.isArray(body.messages) ? body.messages : [];
  if (rawMessages.length === 0) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  // Limit conversation history to last 10 messages for performance and cost control
  const sanitizedMessages = rawMessages.slice(-10).map(msg => ({
    role: msg.role === 'assistant' ? 'assistant' : 'user',
    content: sanitizeString(msg.content, 1000)
  }));

  // Verify backend API Key availability
  if (!AI_API_KEY) {
    return res.status(503).json({
      status: 'fallback',
      error: 'AI service currently offline',
      message: 'No pudimos conectar el asistente en este momento. Puedes continuar directamente por WhatsApp.',
      whatsapp_url: `https://wa.me/56995684198?text=${encodeURIComponent('Hola PatagoniaCoach, quisiera hacer una consulta sobre sus servicios.')}`
    });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

    const payload = {
      model: AI_MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...sanitizedMessages
      ],
      temperature: 0.6,
      max_tokens: 350
    };

    const response = await fetch(AI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_API_KEY}`
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errText = await response.text();
      console.error('[AI] Provider error:', response.status, errText);
      return res.status(503).json({
        status: 'fallback',
        error: 'Upstream AI error',
        message: 'No pudimos conectar el asistente en este momento. Puedes continuar directamente por WhatsApp.',
        whatsapp_url: `https://wa.me/56995684198?text=${encodeURIComponent('Hola PatagoniaCoach, quisiera hacer una consulta sobre sus servicios.')}`
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || '¿En qué podemos orientar tu proyecto hoy?';

    return res.status(200).json({
      status: 'success',
      reply: reply.trim(),
      created_at: new Date().toISOString()
    });

  } catch (err) {
    console.error('[AI] Request exception:', err);
    return res.status(503).json({
      status: 'fallback',
      error: err.name === 'AbortError' ? 'AI response timed out' : 'Service exception',
      message: 'No pudimos conectar el asistente en este momento. Puedes continuar directamente por WhatsApp.',
      whatsapp_url: `https://wa.me/56995684198?text=${encodeURIComponent('Hola PatagoniaCoach, quisiera hacer una consulta sobre sus servicios.')}`
    });
  }
}
