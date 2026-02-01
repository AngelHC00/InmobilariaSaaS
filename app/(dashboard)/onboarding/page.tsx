import { OnboardingWizard } from '../../components/onboarding-wizard';

export default function OnboardingPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Onboarding inicial</h1>
        <p className="text-sm text-slate-600">
          Completa estos pasos para publicar tu landing y desbloquear el plan.
        </p>
      </div>
      <OnboardingWizard />
    </div>
  );
}
