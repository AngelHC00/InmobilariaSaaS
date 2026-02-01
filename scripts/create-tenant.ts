import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  })
});

const db = getFirestore(app);
const auth = getAuth(app);

const [slug, email] = process.argv.slice(2);

if (!slug || !email) {
  console.error('Uso: npm run create:tenant <slug> <email>');
  process.exit(1);
}

async function run() {
  const user = await auth.createUser({ email });
  const tenant = {
    slug,
    name: `Inmobiliaria ${slug}`,
    planId: 'growth',
    status: 'active',
    branding: {
      logoUrl: 'https://placehold.co/120x40',
      primaryColor: '#1E40AF',
      secondaryColor: '#60A5FA',
      showPoweredBy: true
    },
    contact: {
      email,
      phone: '+000000000',
      whatsapp: 'https://wa.me/000000000'
    },
    seo: {
      title: `Inmobiliaria ${slug}`,
      description: 'Compra, venta y alquiler de propiedades con asesoría premium.',
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
    upsells: ['domain', 'analytics'],
    onboarding: {
      completed: false,
      step: 1
    },
    ownerId: user.uid,
    paymentStatus: 'pending'
  };
  await db.collection('tenants').add(tenant);
  console.log(`Tenant creado para ${email}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
