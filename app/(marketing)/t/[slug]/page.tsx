import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTenantBySlug } from '../../../lib/tenant-service';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tenant = await getTenantBySlug(params.slug);
  if (!tenant) {
    return { title: 'Tenant no encontrado' };
  }
  return {
    title: tenant.seo.title,
    description: tenant.seo.description,
    openGraph: {
      title: tenant.seo.title,
      description: tenant.seo.description,
      images: [tenant.seo.image]
    },
    alternates: {
      canonical: `https://${tenant.slug}.inmobilaria.app`
    }
  };
}

export default async function TenantLanding({ params }: { params: { slug: string } }) {
  const tenant = await getTenantBySlug(params.slug);
  if (!tenant) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: tenant.name,
    url: `https://${tenant.slug}.inmobilaria.app`,
    logo: tenant.branding.logoUrl,
    sameAs: [tenant.contact.whatsapp]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-slate-950 text-white">
        <div className="container py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-light">
                {tenant.planId.toUpperCase()}
              </p>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">{tenant.name}</h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-200">{tenant.seo.description}</p>
            </div>
            <Button href={`/t/${tenant.slug}/contacto`} variant="secondary">
              Agendar visita
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Servicios</h3>
            <p className="mt-2 text-sm text-slate-600">
              Gestión completa de compra, venta y alquiler. Asesoría legal y financiera incluida.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Portafolio destacado</h3>
            <p className="mt-2 text-sm text-slate-600">
              Propiedades premium seleccionadas con tours virtuales y reporte de visitas.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Atención inmediata</h3>
            <p className="mt-2 text-sm text-slate-600">
              Respuesta en menos de 15 minutos a través de WhatsApp o teléfono.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold">Testimonios</h3>
            <p className="mt-3 text-sm text-slate-600">
              "Excelente acompañamiento durante todo el proceso de compra."
            </p>
            <p className="mt-4 text-sm font-semibold">María López</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">FAQ</h3>
            <p className="mt-3 text-sm text-slate-600">
              ¿Cuánto tarda la compra? Nuestro equipo prepara la documentación en 7 días hábiles.
            </p>
          </Card>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Contacto</h3>
            <p className="mt-2 text-sm text-slate-600">{tenant.contact.email}</p>
            <p className="text-sm text-slate-600">{tenant.contact.phone}</p>
          </Card>
          <Card className="md:col-span-2">
            <h3 className="text-lg font-semibold">Solicita información</h3>
            <form className="mt-4 grid gap-3" action="/api/leads" method="POST">
              <input name="tenantId" type="hidden" value={tenant.id} />
              <input
                name="name"
                required
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Nombre"
              />
              <input
                name="email"
                required
                type="email"
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Email"
              />
              <textarea
                name="message"
                required
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Cuéntanos qué propiedad te interesa"
              />
              <Button type="submit">Enviar</Button>
            </form>
          </Card>
        </div>
      </section>

      {tenant.limits.branding && tenant.branding.showPoweredBy ? (
        <footer className="bg-slate-950 py-8 text-center text-sm text-white">
          Powered by Inmobilaria SaaS
        </footer>
      ) : (
        <footer className="bg-slate-950 py-8 text-center text-sm text-white">
          {tenant.name}
        </footer>
      )}

      {tenant.contact.whatsapp ? (
        <a
          href={tenant.contact.whatsapp}
          className="fixed bottom-6 right-6 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg"
        >
          WhatsApp
        </a>
      ) : null}
    </main>
  );
}
