import { headers } from 'next/headers';

export type Tenant = {
  id: string;
  slug: string;
  name: string;
  planId: string;
  status: 'active' | 'paused';
  branding: {
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
    showPoweredBy: boolean;
    faviconUrl?: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
  };
  seo: {
    title: string;
    description: string;
    image: string;
  };
  limits: {
    services: number;
    portfolio: number;
    leads: number;
    branding: boolean;
    domain: boolean;
    analytics: boolean;
    storageMb: number;
  };
  upsells: string[];
  onboarding: {
    completed: boolean;
    step: number;
  };
};

export type ResolvedTenant = {
  slug: string | null;
  hostname: string | null;
  source: 'subdomain' | 'path' | 'none';
};

export function resolveTenantFromRequest(pathname?: string): ResolvedTenant {
  const headerList = headers();
  const host = headerList.get('host');
  if (!host) {
    return { slug: null, hostname: null, source: 'none' };
  }

  const [subdomain] = host.split('.');
  if (subdomain && !['www', 'inmobilaria', 'localhost'].includes(subdomain)) {
    return { slug: subdomain, hostname: host, source: 'subdomain' };
  }

  if (pathname?.startsWith('/t/')) {
    const slug = pathname.split('/t/')[1]?.split('/')[0];
    return { slug: slug ?? null, hostname: host, source: 'path' };
  }

  return { slug: null, hostname: host, source: 'none' };
}
