/**
 * POST /api/leads
 * PatagoniaCoach Leads Ingestion & Persistence Serverless Endpoint
 */

import { setCorsHeaders, isRateLimited, isBot, sanitizeString, isValidEmail } from './_security.js';
import { saveLead } from './_db.js';

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

  const name = sanitizeString(body.name, 150);
  if (!name || name.length < 2) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Explicit consent is mandatory
  if (body.consent !== true && body.consent !== 'true') {
    return res.status(400).json({ error: 'Explicit consent is required to process contact information' });
  }

  const email = sanitizeString(body.email, 150);
  const phone = sanitizeString(body.phone, 50);
  const company = sanitizeString(body.company, 150);
  const source = sanitizeString(body.source || 'website', 100);
  const page = sanitizeString(body.page || '/', 200);
  const cta = sanitizeString(body.cta || 'lead-form', 100);
  const service_interest = sanitizeString(body.service_interest, 200);
  const message = sanitizeString(body.message, 2000);

  const utm_source = sanitizeString(body.utm_source, 100);
  const utm_medium = sanitizeString(body.utm_medium, 100);
  const utm_campaign = sanitizeString(body.utm_campaign, 100);

  const consent_timestamp = body.consent_timestamp || new Date().toISOString();

  try {
    const result = await saveLead({
      name,
      email: email && isValidEmail(email) ? email : email || null,
      phone,
      company,
      source,
      page,
      cta,
      service_interest,
      message,
      consent: true,
      consent_timestamp,
      utm_source,
      utm_medium,
      utm_campaign
    });

    return res.status(200).json({
      status: 'success',
      lead_id: result.lead?.id || 'lead_recorded',
      created_at: result.lead?.created_at || new Date().toISOString()
    });
  } catch (err) {
    console.error('[Leads] Exception while saving lead:', err);
    return res.status(500).json({ error: 'Failed to process lead' });
  }
}
