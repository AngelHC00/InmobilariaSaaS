import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container flex items-center justify-between py-4">
          <Link href="/dashboard" className="text-lg font-semibold">
            Inmobilaria Dashboard
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/dashboard">Resumen</Link>
            <Link href="/leads">Leads</Link>
            <Link href="/onboarding">Onboarding</Link>
            <Link href="/billing">Planes</Link>
            <Link href="/settings">Branding</Link>
            <Link href="/admin">Admin</Link>
          </nav>
        </div>
      </header>
      <main className="container py-8">{children}</main>
    </div>
  );
}
