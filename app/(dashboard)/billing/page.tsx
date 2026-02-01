import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export default function BillingPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Planes y pagos</h1>
        <p className="text-sm text-slate-600">
          Estado de pago manual y arquitectura lista para automatizar con Stripe.
        </p>
      </div>
      <Card>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-500">Plan actual</p>
            <p className="text-xl font-semibold">Growth</p>
            <p className="text-sm text-slate-500">Renovación: 30/09/2024</p>
          </div>
          <Button href="https://wa.me/000000000">Contactar para pagar</Button>
        </div>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold">Estado de pago</h3>
        <p className="mt-2 text-sm text-slate-600">Pago pendiente. El servicio se pausa al expirar.</p>
      </Card>
    </div>
  );
}
