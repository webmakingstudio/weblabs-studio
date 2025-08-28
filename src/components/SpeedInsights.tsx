'use client';

import { useEffect } from 'react';
import { injectSpeedInsights } from '@vercel/speed-insights';

export default function SpeedInsights() {
  useEffect(() => {
    // Inyectar Speed Insights cuando el componente se monta
    const speedInsights = injectSpeedInsights();
    
    // Cleanup cuando el componente se desmonta
    return () => {
      if (speedInsights) {
        // Cleanup si es necesario
      }
    };
  }, []);

  // Este componente no renderiza nada visual
  return null;
}
