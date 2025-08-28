export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WEBLABS STUDIO",
    "url": "https://weblabs.studio",
    "logo": "https://weblabs.studio/logo.png",
    "description": "Expertos en creación de páginas web profesionales. Diseñamos sitios web modernos, rápidos y personalizados que generan resultados reales para tu empresa.",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES",
      "addressLocality": "España"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@weblabs.studio",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://twitter.com/weblabsstudio",
      "https://github.com/weblabsstudio",
      "https://linkedin.com/company/weblabsstudio"
    ],
    "serviceType": "Web Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planes de Páginas Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Starter",
            "description": "Hasta 5 páginas internas, diseño personalizado básico, adaptación móvil incluida"
          },
          "price": "49",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "49",
            "priceCurrency": "EUR",
            "billingIncrement": "P1M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Profesional",
            "description": "Páginas ilimitadas, diseño premium personalizado, optimización SEO inicial y avanzada"
          },
          "price": "99",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "99",
            "priceCurrency": "EUR",
            "billingIncrement": "P1M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Empresarial",
            "description": "Todo lo del Plan Profesional, funcionalidades personalizadas, integración con CRM"
          },
          "price": "249",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "249",
            "priceCurrency": "EUR",
            "billingIncrement": "P1M"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
