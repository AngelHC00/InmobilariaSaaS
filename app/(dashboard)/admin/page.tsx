import { Card } from '../../components/ui/card';

export default function AdminPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Admin de proveedores</h1>
        <p className="text-sm text-slate-600">Gestiona tenants, planes y upsells.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="text-lg font-semibold">Crear tenant</h3>
          <p className="mt-2 text-sm text-slate-600">
            Usa el script create:tenant para generar un tenant con owner y plan.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Métricas básicas</h3>
          <p className="mt-2 text-sm text-slate-600">
            Reporte de leads, planes activos, upsells y estado de pago.
          </p>
        </Card>
      </div>
    </div>
  );
}
