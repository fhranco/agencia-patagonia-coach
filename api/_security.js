/**
 * PatagoniaCoach Backend Security & Anti-Spam Utility
 */

const ipRequests = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30; // 30 req / min

/**
 * Get client IP from headers
 */
export function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : forwarded[0];
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || '127.0.0.1';
}

/**
 * Basic in-memory rate limiter per IP
 */
export function isRateLimited(req, max = MAX_REQUESTS_PER_WINDOW) {
  const ip = getClientIp(req);
  const now = Date.now();
  const windowData = ipRequests.get(ip) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };

  if (now > windowData.resetAt) {
    windowData.count = 1;
    windowData.resetAt = now + RATE_LIMIT_WINDOW_MS;
  } else {
    windowData.count++;
  }

  ipRequests.set(ip, windowData);

  // Cleanup old records periodically
  if (ipRequests.size > 10000) {
    for (const [key, val] of ipRequests.entries()) {
      if (now > val.resetAt) ipRequests.delete(key);
    }
  }

  return windowData.count > max;
}

/**
 * Check honeypot field (bots fill hidden inputs)
 */
export function isBot(body) {
  if (!body || typeof body !== 'object') return false;
  // Common honeypot fields
  return Boolean(body.website_hp || body.hp_field || body.confirm_email_hp);
}

/**
 * Sanitize strings
 */
export function sanitizeString(str, maxLength = 1000) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // strip < and >
    .trim()
    .slice(0, maxLength);
}

/**
 * Validate email format
 */
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Standard CORS and Security Headers
 */
export function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
}
