'use client';

import { useState, useEffect } from 'react';

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('analytics-consent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const acceptAnalytics = () => {
    localStorage.setItem('analytics-consent', 'true');
    setShowBanner(false);
    // Recargar la página para activar analytics
    window.location.reload();
  };

  const rejectAnalytics = () => {
    localStorage.setItem('analytics-consent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 text-white p-4 z-50 border-t border-zinc-700">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold mb-2">🍪 Utilizamos cookies para mejorar tu experiencia</h3>
          <p className="text-sm text-zinc-300">
            Utilizamos cookies y tecnologías similares para analizar el tráfico del sitio web, 
            personalizar el contenido y proporcionar publicidad relevante. 
            <a href="/privacidad" className="text-green-400 hover:text-green-300 underline ml-1">
              Más información
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={rejectAnalytics}
            className="px-4 py-2 text-sm border border-zinc-600 hover:border-zinc-500 transition-colors rounded-lg"
          >
            Rechazar
          </button>
          <button
            onClick={acceptAnalytics}
            className="px-4 py-2 text-sm bg-green-600 hover:bg-green-500 transition-colors rounded-lg font-medium"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
