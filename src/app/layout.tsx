import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import ConsentBanner from '@/components/ConsentBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'WEBLABS STUDIO - Expertos en Creación de Páginas Web Profesionales',
    template: '%s | WEBLABS STUDIO'
  },
  description: 'WEBLABS STUDIO - Expertos en creación de páginas web profesionales. Diseñamos sitios web modernos, rápidos y personalizados que generan resultados reales para tu empresa. SEO optimizado, diseño responsive y soporte 24/7.',
  keywords: ['diseño web', 'páginas web', 'desarrollo web', 'SEO', 'marketing digital', 'empresas', 'profesional', 'responsive', 'WordPress', 'Next.js'],
  authors: [{ name: 'WEBLABS STUDIO' }],
  creator: 'WEBLABS STUDIO',
  publisher: 'WEBLABS STUDIO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://weblabs.studio'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://weblabs.studio',
    title: 'WEBLABS STUDIO - Expertos en Creación de Páginas Web Profesionales',
    description: 'Creamos sitios web modernos, rápidos y personalizados que generan resultados reales para tu empresa. SEO optimizado y diseño responsive.',
    siteName: 'WEBLABS STUDIO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WEBLABS STUDIO - Expertos en Desarrollo Web',
      },
      {
        url: '/og-mobile.jpg',
        width: 750,
        height: 1334,
        alt: 'WEBLABS STUDIO - Versión móvil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBLABS STUDIO - Expertos en Creación de Páginas Web',
    description: 'Creamos sitios web modernos, rápidos y personalizados que generan resultados reales para tu empresa.',
    images: ['/og-image.jpg'],
    creator: '@weblabsstudio',
    site: '@weblabsstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-google-verification',
    yandex: 'tu-codigo-yandex',
    yahoo: 'tu-codigo-yahoo',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#22c55e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="WEBLABS" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <JsonLd />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
        <div className="scale-100 origin-top">
          {children}
        </div>
        <ConsentBanner />
      </body>
    </html>
  )
}
