import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Planes de Precios - WEBLABS STUDIO',
  description: 'Planes de precios transparentes para páginas web profesionales. Desde 49€/mes. Diseño personalizado, SEO optimizado y soporte dedicado. ¡Elige el plan perfecto para tu negocio!',
  keywords: ['precios páginas web', 'planes web', 'coste diseño web', 'tarifas desarrollo web', 'precios SEO', 'hosting web'],
  openGraph: {
    title: 'Planes de Precios - WEBLABS STUDIO',
    description: 'Planes de precios transparentes para páginas web profesionales. Desde 49€/mes. Diseño personalizado, SEO optimizado y soporte dedicado.',
    url: 'https://weblabs.studio/precios',
    images: [
      {
        url: '/og-precios.jpg',
        width: 1200,
        height: 630,
        alt: 'Planes de Precios WEBLABS STUDIO',
      },
    ],
  },
  alternates: {
    canonical: '/precios',
  },
}

export default function PreciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
