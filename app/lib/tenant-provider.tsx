'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Tenant } from './tenant';

const TenantContext = createContext<Tenant | null>(null);

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [tenant, setTenant] = useState<Tenant | null>(null);

  useEffect(() => {
    const stored = window.sessionStorage.getItem('tenant');
    if (stored) {
      setTenant(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (tenant) {
      window.sessionStorage.setItem('tenant', JSON.stringify(tenant));
    }
  }, [tenant]);

  const value = useMemo(() => tenant, [tenant]);

  return <TenantContext.Provider value={value}>{children}</TenantContext.Provider>;
}

export function useTenant() {
  return useContext(TenantContext);
}
