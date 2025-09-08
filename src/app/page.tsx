"use client";

import { useState, useEffect } from 'react';
import { RefreshCw, ArrowRight, Repeat2, Activity, Zap } from 'lucide-react';
import BentoGrid from '@/components/BentoGrid';
import { Testimonials } from '@/components/ui/testimonials';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';


export default function Home() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      {/* Isometric Cards - Fixed Left Sidebar */}

      
      <Navigation currentPage="home" />

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
                  <a href="/contacto" className="bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                    Contacta con nosotros
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
                <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono"> © <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">WebMaking Studio</span>. // 2025<br />Expertos en creacion de páginas web.</p>
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

      <Footer />
    </div>
  );
}
