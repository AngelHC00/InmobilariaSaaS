import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  })
});

const db = getFirestore(app);

const tenants = [
  {
    slug: 'residencial',
    name: 'Residencial Prime',
    planId: 'growth',
    status: 'active',
    branding: {
      logoUrl: 'https://placehold.co/120x40',
      primaryColor: '#1E40AF',
      secondaryColor: '#60A5FA',
      showPoweredBy: true
    },
    contact: {
      email: 'residencial@demo.com',
      phone: '+000000000',
      whatsapp: 'https://wa.me/000000000'
    },
    seo: {
      title: 'Residencial Prime',
      description: 'Encuentra tu próximo hogar con asesoría premium.',
      image: 'https://placehold.co/1200x630'
    },
    limits: {
      services: 6,
      portfolio: 12,
      leads: 200,
      branding: true,
      domain: true,
      analytics: true,
      storageMb: 2000
    },
    upsells: ['domain'],
    onboarding: {
      completed: true,
      step: 5
    },
    paymentStatus: 'paid'
  },
  {
    slug: 'corporativo',
    name: 'Inmuebles Corporativos',
    planId: 'starter',
    status: 'active',
    branding: {
      logoUrl: 'https://placehold.co/120x40',
      primaryColor: '#0F172A',
      secondaryColor: '#38BDF8',
      showPoweredBy: true
    },
    contact: {
      email: 'corporativo@demo.com',
      phone: '+000000000',
      whatsapp: 'https://wa.me/000000000'
    },
    seo: {
      title: 'Inmuebles Corporativos',
      description: 'Soluciones inmobiliarias para empresas y oficinas premium.',
      image: 'https://placehold.co/1200x630'
    },
    limits: {
      services: 3,
      portfolio: 6,
      leads: 50,
      branding: true,
      domain: false,
      analytics: false,
      storageMb: 500
    },
    upsells: [],
    onboarding: {
      completed: true,
      step: 5
    },
    paymentStatus: 'pending'
  }
];

async function run() {
  for (const tenant of tenants) {
    const existing = await db.collection('tenants').where('slug', '==', tenant.slug).get();
    if (existing.empty) {
      await db.collection('tenants').add(tenant);
    }
  }
  console.log('Tenants demo creados');
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
