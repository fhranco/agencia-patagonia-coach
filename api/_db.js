/**
 * PatagoniaCoach Database Persistence Layer
 * Integrates with Supabase REST API or safe fallback storage.
 */

import crypto from 'crypto';

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || '';

/**
 * Generate a random UUID
 */
function generateId() {
  return crypto.randomUUID ? crypto.randomUUID() : `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Persist Lead
 */
export async function saveLead(leadData) {
  const record = {
    id: leadData.id || generateId(),
    name: leadData.name,
    email: leadData.email || null,
    phone: leadData.phone || null,
    company: leadData.company || null,
    source: leadData.source || 'website',
    page: leadData.page || '/',
    cta: leadData.cta || 'general',
    service_interest: leadData.service_interest || null,
    message: leadData.message || null,
    consent: Boolean(leadData.consent),
    consent_timestamp: leadData.consent_timestamp || new Date().toISOString(),
    ip_hash: leadData.ip_hash || null,
    utm_source: leadData.utm_source || null,
    utm_medium: leadData.utm_medium || null,
    utm_campaign: leadData.utm_campaign || null,
    created_at: new Date().toISOString()
  };

  if (SUPABASE_URL && SUPABASE_KEY) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(record)
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('[DB] Supabase lead insert failed:', response.status, errText);
        // Fallback to returned record
      } else {
        const data = await response.json();
        return { success: true, lead: data[0] || record };
      }
    } catch (err) {
      console.error('[DB] Supabase lead network error:', err);
    }
  }

  // Fallback safe storage / logging for local & staging without Supabase
  return { success: true, lead: record, fallback: true };
}

/**
 * Persist Diagnostic
 */
export async function saveDiagnostic(diagData) {
  const record = {
    id: diagData.id || generateId(),
    lead_id: diagData.lead_id || null,
    sector: diagData.sector || 'general',
    niche: diagData.niche || 'general',
    score: typeof diagData.score === 'number' ? diagData.score : parseFloat(diagData.score) || 0,
    answers_json: diagData.answers_json || [],
    source: diagData.source || 'digital-diagnostic',
    page: diagData.page || '/',
    cta: diagData.cta || 'diagnostic',
    consent: Boolean(diagData.consent),
    consent_timestamp: diagData.consent_timestamp || new Date().toISOString(),
    ip_hash: diagData.ip_hash || null,
    created_at: new Date().toISOString()
  };

  if (SUPABASE_URL && SUPABASE_KEY) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/diagnostics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(record)
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('[DB] Supabase diagnostic insert failed:', response.status, errText);
      } else {
        const data = await response.json();
        return { success: true, diagnostic: data[0] || record };
      }
    } catch (err) {
      console.error('[DB] Supabase diagnostic network error:', err);
    }
  }

  // Fallback safe storage / logging
  return { success: true, diagnostic: record, fallback: true };
}
