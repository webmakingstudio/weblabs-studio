'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error en página de precios:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          😕 Algo salió mal
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Ha ocurrido un error al cargar la página de precios. 
          Por favor, intenta de nuevo.
        </p>
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="block w-full bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white px-6 py-3 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors font-medium"
          >
            Volver al inicio
          </a>
        </div>
        <details className="mt-6 text-left">
          <summary className="cursor-pointer text-sm text-zinc-500 dark:text-zinc-400">
            Detalles del error
          </summary>
          <pre className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 p-3 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      </div>
    </div>
  );
}
