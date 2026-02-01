import { Card } from '../../components/ui/card';

const leads = [
  { name: 'Carlos Medina', email: 'carlos@demo.com', status: 'Nuevo' },
  { name: 'Paula Reyes', email: 'paula@demo.com', status: 'Contactado' }
];

export default function LeadsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Leads</h1>
        <p className="text-sm text-slate-600">Gestiona estados, notas y seguimiento.</p>
      </div>
      <Card>
        <table className="w-full text-sm">
          <thead className="text-left text-slate-500">
            <tr>
              <th className="pb-3">Nombre</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Estado</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {leads.map((lead) => (
              <tr key={lead.email} className="border-t border-slate-200">
                <td className="py-3">{lead.name}</td>
                <td className="py-3">{lead.email}</td>
                <td className="py-3">{lead.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
