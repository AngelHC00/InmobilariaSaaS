'use client';

import { useState } from 'react';
import { Button } from './ui/button';

const steps = ['Datos del negocio', 'Branding', 'Servicios', 'Contacto', 'Revisión'];

export function OnboardingWizard() {
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(false);

  const next = () => setCurrent((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setCurrent((prev) => Math.max(prev - 1, 0));

  const finish = async () => {
    await fetch('/api/onboarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true, step: steps.length })
    });
    setCompleted(true);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Onboarding guiado</h2>
        <span className="text-xs text-slate-500">
          Paso {current + 1} de {steps.length}
        </span>
      </div>
      <div className="mt-6">
        <p className="text-sm font-semibold text-slate-700">{steps[current]}</p>
        <div className="mt-4 grid gap-3">
          {current === 0 && (
            <>
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Nombre del negocio"
              />
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Ciudad principal"
              />
            </>
          )}
          {current === 1 && (
            <>
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Color primario (#1E40AF)"
              />
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Color secundario (#60A5FA)"
              />
            </>
          )}
          {current === 2 && (
            <>
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Servicio principal"
              />
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Servicio secundario"
              />
            </>
          )}
          {current === 3 && (
            <>
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Email de contacto"
              />
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="WhatsApp"
              />
            </>
          )}
          {current === 4 && (
            <div className="rounded-md bg-slate-50 p-4 text-sm text-slate-600">
              Revisa que la información esté completa y confirma para publicar la landing.
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Button variant="outline" onClick={back} disabled={current === 0}>
          Anterior
        </Button>
        {current < steps.length - 1 ? (
          <Button onClick={next}>Siguiente</Button>
        ) : (
          <Button onClick={finish} variant="secondary">
            Confirmar y publicar
          </Button>
        )}
      </div>
      {completed && (
        <p className="mt-4 text-sm text-green-600">
          Onboarding completo. La landing ya está habilitada.
        </p>
      )}
    </div>
  );
}
