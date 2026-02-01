import { NextResponse } from 'next/server';
import { adminDb } from '../../lib/firebase-admin';
import { leadSchema } from '../../lib/validation';

export async function POST(request: Request) {
  const body = Object.fromEntries(await request.formData());
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
  }

  const { tenantId, name, email, message } = parsed.data;
  const tenantRef = adminDb.collection('tenants').doc(tenantId);
  const tenantSnap = await tenantRef.get();
  if (!tenantSnap.exists) {
    return NextResponse.json({ error: 'Tenant no encontrado' }, { status: 404 });
  }

  const tenant = tenantSnap.data();
  if (tenant?.status !== 'active') {
    return NextResponse.json({ error: 'Tenant inactivo' }, { status: 403 });
  }

  const leadsRef = adminDb.collection('leads').where('tenantId', '==', tenantId);
  const leadsCount = await leadsRef.count().get();
  const maxLeads = tenant?.limits?.leads ?? 0;

  if (leadsCount.data().count >= maxLeads) {
    return NextResponse.json({ error: 'Límite de leads alcanzado' }, { status: 402 });
  }

  await adminDb.collection('leads').add({
    tenantId,
    name,
    email,
    message,
    status: 'new',
    createdAt: new Date().toISOString()
  });

  return NextResponse.json({ ok: true });
}
