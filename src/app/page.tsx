"use client";

import { useState, useEffect } from 'react';
import { RefreshCw, ArrowRight, Repeat2, Activity, Zap } from 'lucide-react';
import BentoGrid from '@/components/BentoGrid';
import { Testimonials } from '@/components/ui/testimonials';


export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Aplicar tema inicial al cargar
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      {/* Isometric Cards - Fixed Left Sidebar */}

      
      {/* Header */}
      <header className="sticky top-0 z-50 p-4" role="banner">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 dark:from-zinc-900 dark:via-zinc-600 dark:to-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-2xl p-2">
            <div className="flex items-center justify-between h-10">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h1 className="text-lg font-bold text-zinc-900 dark:text-white">WebLabs Studio</h1>
              </div>
              
              {/* Separador con gradiente */}
              <div className="hidden md:flex items-center mx-4">
                <div className="w-px h-4 bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-400 dark:from-zinc-500 dark:via-zinc-400 dark:to-zinc-500"></div>
              </div>
              
              <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
                <a href="/precios" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">Precios</a>
                <a href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm relative">
                  Blog
                  <span className="absolute -top-2 -right-12 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">New</span>
                </a>
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* CTA Button */}
              <button className="hidden lg:flex items-center space-x-2 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                <span>🔥</span>
                <span>Explore 70+ new components and templates</span>
              </button>
              
              {/* Pro Button */}
              <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-zinc-700">
                WEBLABS Pro ↗
              </button>

              {/* GitHub */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-zinc-700 mt-4">
                <nav className="flex flex-col space-y-4">
                  <a href="/precios" className="text-zinc-300 hover:text-white transition-colors">Precios</a>
                                      <a href="#" className="text-zinc-300 hover:text-white transition-colors relative">
                      Blog
                      <span className="inline-block ml-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">New</span>
                    </a>
                    <button className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium text-left">
                      🔥 Explore 70+ new components
                    </button>
                  <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-zinc-700 text-left">
                    WEBLABS Pro ↗
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white dark:bg-black min-h-screen" role="main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Hero Section */}
            <section className="space-y-8" aria-labelledby="hero-heading">
              <div className="space-y-6">
                <h1 id="hero-heading" className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
                  ¡Haz <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">despegar</span> tu negocio con una web profesional!
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-zinc-700 dark:text-zinc-200 leading-tight">
                  Tu página web, lista para <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">atraer más clientes</span> y aumentar tus ventas.
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Creamos sitios web modernos, rápidos y personalizados a la medida de tu negocio. Destaca en internet con una web optimizada para atraer clientes, posicionar tu marca y aumentar tus oportunidades de venta. ¡Más que diseño, <span className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">generamos resultados reales</span> para tu empresa!
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/precios" className="inline-block">
                    <button className="relative bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100 text-white dark:text-zinc-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-[0_0_80px_rgba(22,101,52,0.8)] hover:shadow-[0_0_100px_rgba(22,101,52,1)] dark:shadow-[0_0_60px_rgba(34,197,94,0.3)] dark:hover:shadow-[0_0_60px_rgba(34,197,94,0.6)]">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/20 via-green-500/20 to-green-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">Solicita tu sitio hoy mismo</span>
                    </button>
                  </a>
                  <a href="/precios" className="bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                    Conoce nuestros planes web
                  </a>
                </div>
              </div>

              {/* Technology Stack */}
              <section className="space-y-4" aria-labelledby="features-heading">
                <h3 id="features-heading" className="text-lg font-semibold text-zinc-900 dark:text-white">Ofrecemos</h3>
                <div className="space-y-8">
                  {/* Primera fila - 3 elementos perfectamente centrados */}
                  <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-16">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <span className="text-zinc-600 dark:text-zinc-300 text-sm">Diseño<br />Personalizado</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <span className="text-zinc-600 dark:text-zinc-300 text-sm">Carga<br />Rápida</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <span className="text-zinc-600 dark:text-zinc-300 text-sm">Adaptación<br />a móvil</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Segunda fila - 3 elementos perfectamente centrados */}
                  <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-16">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <span className="text-zinc-600 dark:text-zinc-300 text-sm">Integración<br />Redes Sociales</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <span className="text-zinc-600 dark:text-zinc-300 text-sm">SEO<br />Optimizado</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <span className="text-zinc-600 dark:text-zinc-300 text-sm">Soporte<br />Continuo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Copyright */}
              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono"> © <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">WEBLABS STUDIO</span>. // 2025<br />Expertos en creacion de páginas web.</p>
              </div>
            </section>

            {/* Right Column - BentoGrid */}
            <div className="space-y-6">
              {/* BentoGrid con todos los widgets */}
              <BentoGrid isDark={isDark} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-100 dark:bg-zinc-800 border-t border-zinc-300 dark:border-zinc-700 py-4" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Left Section - Navigation Links */}
            <nav className="flex items-center space-x-6 text-sm text-zinc-500 dark:text-zinc-400" aria-label="Enlaces del pie de página">
              <a href="/precios" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Precios</a>
              <a href="/privacidad" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Privacidad</a>
              <a href="/terminos" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Términos</a>
              <a href="/cookies" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Cookies</a>
              <a href="/aviso-legal" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Aviso Legal</a>
            </nav>
            
            {/* Center Section - Company Information */}
            <div className="flex flex-col items-center text-center space-y-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">© WEBLABS STUDIO // 2025</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">EXPERTOS EN CREACION DE PAGINAS WEB</p>
            </div>
            
            {/* Right Section - Credit */}
            <div className="flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
              <span>built for you by</span>
              <a href="#" className="text-orange-500 underline hover:text-orange-400 transition-colors">WEBLABS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
