'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  useEffect(() => {
    // Verificar si el usuario ha dado consentimiento
    const hasConsent = localStorage.getItem('analytics-consent') === 'true';
    
    if (!hasConsent) return;

    // Cargar Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'user_type',
          'custom_parameter_2': 'page_category'
        }
      });
    `;
    document.head.appendChild(script2);

    // Eventos personalizados
    const trackPageView = () => {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_referrer: document.referrer
      });
    };

    const trackClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        window.gtag('event', 'click', {
          element_text: target.textContent?.trim(),
          element_type: target.tagName.toLowerCase(),
          page_location: window.location.href
        });
      }
    };

    // Event listeners
    document.addEventListener('click', trackClick);
    window.addEventListener('popstate', trackPageView);

    // Track initial page view
    trackPageView();

    return () => {
      document.removeEventListener('click', trackClick);
      window.removeEventListener('popstate', trackPageView);
    };
  }, [GA_MEASUREMENT_ID]);

  return null;
}
