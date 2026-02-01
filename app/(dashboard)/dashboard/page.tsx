import { Card } from '../../components/ui/card';

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Resumen del tenant</h1>
        <p className="text-sm text-slate-600">
          Estado general del plan, leads y próximos pasos de onboarding.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <h3 className="text-sm font-semibold text-slate-500">Leads nuevos</h3>
          <p className="mt-2 text-2xl font-semibold">12</p>
          <p className="text-xs text-slate-500">Últimos 7 días</p>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-slate-500">Plan activo</h3>
          <p className="mt-2 text-2xl font-semibold">Growth</p>
          <p className="text-xs text-slate-500">Renovación 30/09</p>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-slate-500">Onboarding</h3>
          <p className="mt-2 text-2xl font-semibold">80%</p>
          <p className="text-xs text-slate-500">Paso 4 de 5</p>
        </Card>
      </div>
    </div>
  );
}
