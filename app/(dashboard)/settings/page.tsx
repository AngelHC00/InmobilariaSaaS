import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Branding y white-label</h1>
        <p className="text-sm text-slate-600">Personaliza colores, logo y footer.</p>
      </div>
      <Card>
        <form className="grid gap-4">
          <input
            className="rounded-md border border-slate-200 px-3 py-2 text-sm"
            placeholder="Nombre comercial"
          />
          <input
            className="rounded-md border border-slate-200 px-3 py-2 text-sm"
            placeholder="URL del logo"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-md border border-slate-200 px-3 py-2 text-sm"
              placeholder="Color primario"
            />
            <input
              className="rounded-md border border-slate-200 px-3 py-2 text-sm"
              placeholder="Color secundario"
            />
          </div>
          <Button type="submit">Guardar cambios</Button>
        </form>
      </Card>
    </div>
  );
}
