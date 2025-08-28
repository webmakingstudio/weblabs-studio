import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Información Legal - WEBLABS STUDIO',
    template: '%s | WEBLABS STUDIO'
  },
  description: 'Información legal, políticas de privacidad, términos y condiciones de WEBLABS STUDIO. Cumplimiento RGPD y transparencia legal.',
  keywords: ['legal', 'privacidad', 'términos', 'cookies', 'RGPD', 'aviso legal', 'WEBLABS STUDIO'],
  robots: {
    index: true,
    follow: true,
  },
}

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <meta name="theme-color" content="#22c55e" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
