import { Card } from '../../components/ui/card';

export default function DemoPage() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-semibold">Demo de la plataforma</h1>
      <p className="mt-3 text-sm text-slate-600">
        Explora un tenant demo y revisa el flujo completo de onboarding y planes.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-lg font-semibold">Tenant Residencial</h3>
          <p className="mt-2 text-sm text-slate-600">https://residencial.inmobilaria.app</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Tenant Corporativo</h3>
          <p className="mt-2 text-sm text-slate-600">https://corporativo.inmobilaria.app</p>
        </Card>
      </div>
    </main>
  );
}
