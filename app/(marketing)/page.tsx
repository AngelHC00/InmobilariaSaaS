import type { Metadata } from 'next';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export const metadata: Metadata = {
  title: 'Plataforma inmobiliaria multi-tenant',
  description:
    'Lanza y vende sitios inmobiliarios con onboarding automático, planes, límites y white-label completo.'
};

const features = [
  {
    title: 'Multi-tenant real',
    description: 'Aislamiento por tenant con subdominios y dominio personalizado.'
  },
  {
    title: 'Onboarding guiado',
    description: 'Wizard inicial que habilita la publicación solo al completar pasos clave.'
  },
  {
    title: 'Planes y upsells',
    description: 'Límites dinámicos con upgrades y bloqueos automáticos.'
  }
];

const testimonials = [
  {
    name: 'Laura Torres',
    company: 'Grupo Horizonte',
    quote:
      'En una semana lanzamos 3 sitios inmobiliarios con branding propio y seguimiento de leads.'
  },
  {
    name: 'Jorge Díaz',
    company: 'Inmobiliaria Central',
    quote: 'Los upsells nos permitieron monetizar dominios y analytics sin fricción.'
  }
];

export default function MarketingPage() {
  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="container py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-light">SaaS listo</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            Lanza tu plataforma inmobiliaria en días, no en meses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Producto multi-tenant con landing SEO, dashboard editable, planes, upsells y white-label
            total. Configura cada cliente sin código y escala ventas desde el primer día.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/demo" variant="primary">
              Ver demo
            </Button>
            <Button href="/contacto" variant="outline">
              Hablar con ventas
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Todo lo que necesita tu cliente final</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Landing profesional, sección de servicios, portafolio, testimonios y un formulario con
                tracking. Integración nativa con WhatsApp y panel de leads con estados.
              </p>
            </div>
            <Button href="/registro" variant="secondary">
              Empezar ahora
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-slate-900 text-white">
            <h3 className="text-2xl font-semibold">Onboarding automático</h3>
            <p className="mt-3 text-sm text-slate-200">
              El nuevo owner completa un wizard guiado que genera la landing, branding y contacto.
              No se publica nada sin completar el mínimo requerido.
            </p>
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold">White-label total</h3>
            <p className="mt-3 text-sm text-slate-600">
              Marca propia, dominio personalizado, favicon y footer configurable. Controla cuándo se
              muestra "Powered by" según el plan.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="container">
          <h2 className="text-3xl font-semibold">Testimonios</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <Card key={item.name} className="bg-slate-900 text-white">
                <p className="text-sm text-slate-200">“{item.quote}”</p>
                <p className="mt-4 text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-slate-400">{item.company}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">FAQ</h3>
            <p className="mt-3 text-sm text-slate-600">
              ¿Puedo vender dominios? Sí, el upsell de dominio habilita configuración directa por
              tenant.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Soporte</h3>
            <p className="mt-3 text-sm text-slate-600">
              Panel de admin para monitorear tenants, leads y métricas básicas.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Listo para clonar</h3>
            <p className="mt-3 text-sm text-slate-600">
              Scripts de seed y configuración paso a paso para clonar en minutos.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-semibold">Convierte clientes en sitios activos hoy mismo.</h2>
          <p className="mt-3 text-sm text-white/90">
            Stack optimizado en Firebase + Next.js para SSR real y escalabilidad con bajo costo.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contacto" variant="secondary">
              Contactar al equipo
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-white">
        <div className="container flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <span>© 2024 Inmobilaria SaaS.</span>
          <div className="flex gap-4">
            <a href="/terminos">Términos</a>
            <a href="/privacidad">Privacidad</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
