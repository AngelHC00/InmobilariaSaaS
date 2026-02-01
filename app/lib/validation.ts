import { z } from 'zod';

export const leadSchema = z.object({
  tenantId: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5)
});

export const onboardingSchema = z.object({
  businessName: z.string().min(2),
  primaryColor: z.string().min(4),
  secondaryColor: z.string().min(4),
  services: z.array(z.string().min(2)).min(1),
  contactEmail: z.string().email(),
  whatsapp: z.string().min(5)
});
