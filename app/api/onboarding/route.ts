import { NextResponse } from 'next/server';
import { adminDb } from '../../lib/firebase-admin';

export async function POST(request: Request) {
  const body = await request.json();
  const tenantId = request.headers.get('x-tenant-id');
  if (!tenantId) {
    return NextResponse.json({ error: 'Tenant requerido' }, { status: 400 });
  }
  await adminDb.collection('tenants').doc(tenantId).set(
    {
      onboarding: {
        completed: Boolean(body.completed),
        step: Number(body.step ?? 0)
      }
    },
    { merge: true }
  );
  return NextResponse.json({ ok: true });
}
