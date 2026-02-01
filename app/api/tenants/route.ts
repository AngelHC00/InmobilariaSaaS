import { NextResponse } from 'next/server';
import { adminDb } from '../../lib/firebase-admin';

export async function GET() {
  const snapshot = await adminDb.collection('tenants').get();
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json({ data });
}
