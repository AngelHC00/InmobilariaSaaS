import { Button } from '../../components/ui/button';

export default function RegistroPage() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-semibold">Crear cuenta</h1>
      <p className="mt-3 text-sm text-slate-600">
        Registra tu primer tenant y activa el onboarding automáticamente.
      </p>
      <form className="mt-8 grid max-w-xl gap-4">
        <input
          className="rounded-md border border-slate-200 px-3 py-2 text-sm"
          placeholder="Nombre del negocio"
          required
        />
        <input
          className="rounded-md border border-slate-200 px-3 py-2 text-sm"
          placeholder="Email del owner"
          type="email"
          required
        />
        <Button type="submit">Solicitar acceso</Button>
      </form>
    </main>
  );
}
