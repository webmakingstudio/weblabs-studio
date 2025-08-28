"use client";

import { useState, useEffect } from "react";
import { Pricing } from "@/components/ui/pricing";

const pricingPlans = [
  {
    name: "STARTER",
    price: "49",
    yearlyPrice: "39",
    period: "por mes",
    features: [
      "Hasta 5 páginas internas",
      "Diseño personalizado básico",
      "Adaptación móvil incluida",
      "Implementación de contacto y mapa",
      "Integración con tus redes sociales",
      "Soporte por email (respuesta en 48 horas)",
      "1 ronda de revisiones / mes",
    ],
    description: "Ideal para emprendedores y pequeños negocios que buscan una web profesional básica.",
    buttonText: "Contratar",
    href: "/contacto",
    isPopular: false,
  },
  {
    name: "PROFESIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "por mes",
    features: [
      "Páginas ilimitadas",
      "Diseño premium personalizado",
      "Optimización SEO inicial y avanzada",
      "Blog integrado y gestión de contenidos",
      "Integración WhatsApp, redes y formularios avanzados",
      "Soporte prioritario (respuesta en 24 horas)",
      "3 rondas de revisiones / mes",
      "Acceso a panel de estadísticas y analítica",
    ],
    description: "Pensado para empresas que quieren una web avanzada y herramientas para crecer online.",
    buttonText: "Comenzar Ahora",
    href: "/contacto",
    isPopular: true,
  },
  {
    name: "EMPRESARIAL",
    price: "249",
    yearlyPrice: "199",
    period: "por mes",
    features: [
      "Todo lo del Plan Profesional",
      "Funcionalidades personalizadas (tienda online, membresías, áreas privadas…)",
      "Integración con CRM y APIs externas",
      "Gestor de cuenta dedicado",
      "Seguridad avanzada y certificados SSL",
      "Actualizaciones y mantenimiento continuo",
      "Soporte en 1 hora (prioridad máxima)",
      "Contrato personalizado y acuerdo SLA",
    ],
    description: "Solución integral para marcas consolidadas y proyectos con necesidades avanzadas.",
    buttonText: "Contactar Ventas",
    href: "/contacto",
    isPopular: false,
  },
];

export default function PreciosPage() {
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

  // Manejar errores de renderizado
  if (!pricingPlans || pricingPlans.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            Error al cargar los precios
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Por favor, intenta recargar la página
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 p-4">
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
              
              <nav className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">Inicio</a>
                <a href="/precios" className="text-zinc-900 dark:text-white font-semibold text-sm">Precios</a>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm relative">
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
                  <a href="/" className="text-zinc-400 hover:text-white transition-colors text-sm">Inicio</a>
                  <a href="/precios" className="text-white font-semibold text-sm">Precios</a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm relative">
                    Blog
                    <span className="inline-block ml-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">New</span>
                  </a>
                  <button className="flex items-center space-x-2 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                    <span>🔥</span>
                    <span>Explore 70+ new components and templates</span>
                  </button>
                  <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-zinc-600">
                    WEBLABS Pro ↗
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4 mb-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
              Planes de <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">Precios</span> Transparentes
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tu negocio. Todos incluyen acceso a nuestra plataforma, herramientas de generación de leads y soporte dedicado.
            </p>
          </div>

          {/* Pricing Component */}
          <div className="mt-8">
            <Pricing 
              plans={pricingPlans}
              title="Planes de Precios Transparentes"
              description="Elige el plan que mejor funcione para ti\nTodos los planes incluyen acceso a nuestra plataforma, herramientas de generación de leads y soporte dedicado."
            />
          </div>
        </div>
      </main>

             {/* Footer */}
       <footer className="bg-zinc-100 dark:bg-zinc-800 border-t border-zinc-300 dark:border-zinc-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
                         {/* Left Section - Navigation Links */}
             <div className="flex items-center space-x-6 text-sm text-zinc-500 dark:text-zinc-400">
               <a href="/precios" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Precios</a>
               <a href="#" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Docs</a>
               <a href="#" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Blog</a>
             </div>
             
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
