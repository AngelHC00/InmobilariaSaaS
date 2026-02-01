import { adminDb } from './firebase-admin';
import type { Tenant } from './tenant';

export async function getTenantBySlug(slug: string): Promise<Tenant | null> {
  const snapshot = await adminDb.collection('tenants').where('slug', '==', slug).limit(1).get();
  const doc = snapshot.docs[0];
  if (!doc) {
    return null;
  }
  return { id: doc.id, ...(doc.data() as Omit<Tenant, 'id'>) };
}
