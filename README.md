# InmobilariaSaaS

Plataforma SaaS inmobiliaria multi-tenant lista para clonar y vender a múltiples clientes.

## Requisitos

- Node.js 20+
- Firebase CLI (`npm i -g firebase-tools`)
- Proyecto Firebase con Auth, Firestore, Storage y Hosting habilitados

## Instalación

```bash
npm install
cp .env.example .env.local
```

Configura las variables en `.env.local` con tu proyecto Firebase.

## Desarrollo local

```bash
npm run dev
```

## Scripts de operación

```bash
npm run seed:plans
npm run seed:tenants
npm run create:tenant <slug> <email>
```

## Deploy

```bash
npm run build
firebase deploy
```

Firebase Hosting utiliza `frameworksBackend` para SSR real de Next.js.

## Estructura principal

- `app/(marketing)` Landing pública y tenant landing.
- `app/(dashboard)` Dashboard del cliente y panel admin.
- `app/api` Endpoints server-side para leads, onboarding y data.
- `scripts` Scripts de seed y creación de tenants.
- `firestore.rules` y `storage.rules` Reglas de seguridad.

## Multi-tenant

- Resolución por subdominio con `middleware.ts`.
- Fallback por path `/t/[slug]`.

## White-label y planes

Los planes y upsells se almacenan en Firestore y modifican dinámicamente los límites, branding y dominios permitidos.

## SEO

- Metadata dinámica por tenant.
- JSON-LD para RealEstateAgent.
- `robots.ts` y `sitemap.ts`.

## Checklist de éxito

- [x] Crear tenant en minutos con scripts.
- [x] Onboarding guiado funcional.
- [x] Límites y upsells activos.
- [x] SEO por tenant.
- [x] White-label configurable.
