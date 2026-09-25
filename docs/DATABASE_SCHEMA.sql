-- ==========================================================
-- PATAGONIACOACH — DATABASE SCHEMA FOR LEADS & DIAGNOSTICS
-- Compatible with Supabase / PostgreSQL
-- ==========================================================

-- Enable UUID extension if not enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. LEADS TABLE
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(100),
    company VARCHAR(255),
    source VARCHAR(100) DEFAULT 'website',
    page VARCHAR(255) DEFAULT '/',
    cta VARCHAR(100) DEFAULT 'general',
    service_interest VARCHAR(255),
    message TEXT,
    consent BOOLEAN NOT NULL DEFAULT true,
    consent_timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ip_hash VARCHAR(64),
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. DIAGNOSTICS TABLE
CREATE TABLE IF NOT EXISTS public.diagnostics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
    sector VARCHAR(100) NOT NULL,
    niche VARCHAR(100) NOT NULL,
    score NUMERIC(5,2) NOT NULL,
    answers_json JSONB NOT NULL DEFAULT '[]'::jsonb,
    source VARCHAR(100) DEFAULT 'digital-diagnostic',
    page VARCHAR(255) DEFAULT '/',
    cta VARCHAR(100) DEFAULT 'diagnostic',
    consent BOOLEAN NOT NULL DEFAULT true,
    consent_timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ip_hash VARCHAR(64),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_cta ON public.leads(cta);
CREATE INDEX IF NOT EXISTS idx_diagnostics_lead_id ON public.diagnostics(lead_id);
CREATE INDEX IF NOT EXISTS idx_diagnostics_created_at ON public.diagnostics(created_at DESC);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diagnostics ENABLE ROW LEVEL SECURITY;

-- Deny public reading (protect PII)
CREATE POLICY "Deny public select on leads" 
    ON public.leads FOR SELECT 
    USING (false);

CREATE POLICY "Deny public select on diagnostics" 
    ON public.diagnostics FOR SELECT 
    USING (false);

-- Only backend service_role can insert/select/update
CREATE POLICY "Service role full access on leads" 
    ON public.leads FOR ALL 
    TO service_role 
    USING (true) 
    WITH CHECK (true);

CREATE POLICY "Service role full access on diagnostics" 
    ON public.diagnostics FOR ALL 
    TO service_role 
    USING (true) 
    WITH CHECK (true);
