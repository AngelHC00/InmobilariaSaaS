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

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    priceMonthly: 29,
    features: ['Landing básica', 'Leads ilimitados', 'WhatsApp'],
    limits: {
      services: 3,
      portfolio: 6,
      leads: 50,
      branding: true,
      domain: false,
      analytics: false,
      storageMb: 500
    }
  },
  {
    id: 'growth',
    name: 'Growth',
    priceMonthly: 79,
    features: ['White-label parcial', 'Dashboard completo', 'Upsells'],
    limits: {
      services: 6,
      portfolio: 12,
      leads: 200,
      branding: true,
      domain: true,
      analytics: true,
      storageMb: 2000
    }
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceMonthly: 199,
    features: ['White-label total', 'Soporte premium', 'SLAs'],
    limits: {
      services: 12,
      portfolio: 30,
      leads: 1000,
      branding: true,
      domain: true,
      analytics: true,
      storageMb: 10000
    }
  }
];

async function run() {
  for (const plan of plans) {
    await db.collection('plans').doc(plan.id).set(plan);
  }
  console.log('Planes creados');
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
