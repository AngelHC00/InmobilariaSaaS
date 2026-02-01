import type { Metadata } from 'next';
import './globals.css';
import { TenantProvider } from './lib/tenant-provider';

export const metadata: Metadata = {
  title: {
    template: '%s | Inmobilaria SaaS',
    default: 'Inmobilaria SaaS'
  },
  description: 'SaaS inmobiliario multi-tenant listo para producción',
  metadataBase: new URL('https://inmobilaria.app'),
  openGraph: {
    title: 'Inmobilaria SaaS',
    description: 'SaaS inmobiliario multi-tenant listo para producción',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <TenantProvider>{children}</TenantProvider>
      </body>
    </html>
  );
}
