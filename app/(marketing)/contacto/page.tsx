import { Button } from '../../components/ui/button';

export default function ContactoPage() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-semibold">Contacto comercial</h1>
      <p className="mt-3 text-sm text-slate-600">
        Recibe una propuesta para lanzar tu SaaS inmobiliario en días.
      </p>
      <form className="mt-8 grid max-w-xl gap-4">
        <input
          className="rounded-md border border-slate-200 px-3 py-2 text-sm"
          placeholder="Nombre"
          required
        />
        <input
          className="rounded-md border border-slate-200 px-3 py-2 text-sm"
          placeholder="Email"
          type="email"
          required
        />
        <textarea
          className="rounded-md border border-slate-200 px-3 py-2 text-sm"
          placeholder="Cuéntanos sobre tu proyecto"
          required
        />
        <Button type="submit">Enviar</Button>
      </form>
    </main>
  );
}
