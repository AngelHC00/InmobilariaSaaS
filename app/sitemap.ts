import type { MetadataRoute } from 'next';
import { adminDb } from './lib/firebase-admin';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const snapshot = await adminDb.collection('tenants').get();
  const tenantUrls = snapshot.docs.map((doc) => ({
    url: `https://${doc.data().slug}.inmobilaria.app`,
    lastModified: new Date()
  }));
  return [
    {
      url: 'https://inmobilaria.app',
      lastModified: new Date()
    },
    ...tenantUrls
  ];
}
