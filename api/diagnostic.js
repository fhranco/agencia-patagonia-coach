/**
 * POST /api/diagnostic
 * PatagoniaCoach Digital Diagnostic Persistence Serverless Endpoint
 */

import { setCorsHeaders, isRateLimited, isBot, sanitizeString, isValidEmail } from './_security.js';
import { saveLead, saveDiagnostic } from './_db.js';

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Anti-Spam checks
  if (isRateLimited(req, 15)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment.' });
  }

  const body = req.body || {};
  if (isBot(body)) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  // Explicit consent verification
  if (body.consent !== true && body.consent !== 'true') {
    return res.status(400).json({ error: 'Explicit consent is required to process diagnostic data' });
  }

  const name = sanitizeString(body.name || body.nombre, 150);
  const email = sanitizeString(body.email, 150);
  const phone = sanitizeString(body.phone || body.whatsapp, 50);
  const company = sanitizeString(body.company, 150);
  const sector = sanitizeString(body.sector, 100) || 'general';
  const niche = sanitizeString(body.niche, 100) || 'general';
  const score = typeof body.score === 'number' ? body.score : parseFloat(body.score) || 0;
  const answers_json = Array.isArray(body.answers_json) ? body.answers_json : (body.answers || []);
  
  const source = sanitizeString(body.source || 'digital-diagnostic', 100);
  const page = sanitizeString(body.page || '/', 200);
  const cta = sanitizeString(body.cta || 'diagnostic-submit', 100);
  const consent_timestamp = body.consent_timestamp || new Date().toISOString();

  try {
    let lead_id = body.lead_id || null;

    // If user provided contact info, create/link lead
    if (!lead_id && name) {
      const leadResult = await saveLead({
        name,
        email: email && isValidEmail(email) ? email : email || null,
        phone,
        company,
        source,
        page,
        cta,
        service_interest: `Diagnóstico Digital: ${sector} / ${niche}`,
        message: `Score obtenido: ${score}%`,
        consent: true,
        consent_timestamp
      });
      lead_id = leadResult.lead?.id || null;
    }

    const diagResult = await saveDiagnostic({
      lead_id,
      sector,
      niche,
      score,
      answers_json,
      source,
      page,
      cta,
      consent: true,
      consent_timestamp
    });

    return res.status(200).json({
      status: 'success',
      diagnostic_id: diagResult.diagnostic?.id || 'diagnostic_recorded',
      lead_id,
      score,
      created_at: diagResult.diagnostic?.created_at || new Date().toISOString()
    });
  } catch (err) {
    console.error('[Diagnostic] Exception while saving diagnostic:', err);
    return res.status(500).json({ error: 'Failed to process diagnostic' });
  }
}
