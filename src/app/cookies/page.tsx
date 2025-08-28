"use client";

import { useState, useEffect } from 'react';
import { Cookie, Settings, Shield, Database, Eye, Clock, AlertTriangle } from 'lucide-react';

export default function Cookies() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 p-4" role="banner">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 dark:from-zinc-900 dark:via-zinc-600 dark:to-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-2xl p-2">
            <div className="flex items-center justify-between h-10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h1 className="text-lg font-bold text-zinc-900 dark:text-white">WebLabs Studio</h1>
              </div>
              <a href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">
                ← Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8" role="main">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-6">
            <Cookie className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Política de <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Cookies</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Conoce cómo utilizamos las cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* ¿Qué son las Cookies? */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">¿Qué son las Cookies?</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Recordar tus preferencias y configuraciones</li>
                <li>Analizar cómo utilizas nuestro sitio web</li>
                <li>Mejorar la funcionalidad y experiencia del usuario</li>
                <li>Proporcionar contenido personalizado</li>
                <li>Garantizar la seguridad del sitio</li>
              </ul>
            </div>
          </section>

          {/* Tipos de Cookies */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Tipos de Cookies que Utilizamos</h2>
            </div>
            <div className="space-y-6">
              {/* Cookies Técnicas */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">🍪 Cookies Técnicas (Necesarias)</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">Son esenciales para el funcionamiento del sitio web:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Cookies de sesión para mantener tu login</li>
                  <li>Cookies de seguridad para proteger el sitio</li>
                  <li>Cookies de preferencias del idioma</li>
                  <li>Cookies de carrito de compras (si aplica)</li>
                </ul>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
                  <strong>Duración:</strong> Sesión o hasta 1 año
                </p>
              </div>

              {/* Cookies Analíticas */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">📊 Cookies Analíticas</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">Nos ayudan a entender cómo utilizas el sitio:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Google Analytics para estadísticas de visitas</li>
                  <li>Análisis de comportamiento del usuario</li>
                  <li>Métricas de rendimiento del sitio</li>
                  <li>Identificación de páginas más populares</li>
                </ul>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
                  <strong>Duración:</strong> Hasta 2 años
                </p>
              </div>

              {/* Cookies de Marketing */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">🎯 Cookies de Marketing</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">Para mostrar publicidad relevante:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Cookies de redes sociales (Facebook, Twitter)</li>
                  <li>Cookies de publicidad (Google Ads)</li>
                  <li>Cookies de remarketing</li>
                  <li>Cookies de afiliados</li>
                </ul>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
                  <strong>Duración:</strong> Hasta 2 años
                </p>
              </div>
            </div>
          </section>

          {/* Cookies de Terceros */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Cookies de Terceros</h2>
            </div>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
              <p>Utilizamos servicios de terceros que pueden instalar cookies en tu dispositivo:</p>
              
              <div className="bg-white dark:bg-zinc-700 rounded-xl p-4">
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Google Analytics</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                  Para analizar el tráfico del sitio web y mejorar nuestros servicios.
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Política de privacidad de Google →
                  </a>
                </p>
              </div>

              <div className="bg-white dark:bg-zinc-700 rounded-xl p-4">
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Redes Sociales</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                  Para integrar contenido de redes sociales y botones de compartir.
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Política de Facebook →
                  </a>
                </p>
              </div>

              <div className="bg-white dark:bg-zinc-700 rounded-xl p-4">
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">Vercel Analytics</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                  Para analizar el rendimiento y la experiencia del usuario.
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Política de Vercel →
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Gestión de Cookies */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Gestión y Control de Cookies</h2>
            </div>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
              <p>Puedes controlar y gestionar las cookies de varias maneras:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-zinc-700 rounded-xl p-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">🔧 Configuración del Navegador</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Configura tu navegador para rechazar cookies o recibir notificaciones cuando se instalen.
                  </p>
                </div>

                <div className="bg-white dark:bg-zinc-700 rounded-xl p-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">🎛️ Panel de Control</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Utiliza nuestro banner de cookies para aceptar o rechazar cookies no esenciales.
                  </p>
                </div>

                <div className="bg-white dark:bg-zinc-700 rounded-xl p-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">📱 Aplicaciones Móviles</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Configura las opciones de privacidad en tu dispositivo móvil.
                  </p>
                </div>

                <div className="bg-white dark:bg-zinc-700 rounded-xl p-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">🌐 Herramientas Online</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Utiliza herramientas como YourOnlineChoices o Network Advertising Initiative.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Duración de Cookies */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Duración de las Cookies</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p><strong>Tipos de duración:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies de sesión:</strong> Se eliminan al cerrar el navegador</li>
                <li><strong>Cookies persistentes:</strong> Permanecen hasta su fecha de expiración</li>
                <li><strong>Cookies de terceros:</strong> Siguen las políticas de cada proveedor</li>
              </ul>
              <div className="bg-white dark:bg-zinc-700 rounded-xl p-4 mt-4">
                <p className="text-sm"><strong>Nota importante:</strong> Algunas cookies son esenciales para el funcionamiento del sitio web. Si las desactivas, es posible que algunas funciones no funcionen correctamente.</p>
              </div>
            </div>
          </section>

          {/* Actualizaciones */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Actualizaciones de la Política</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>Esta política de cookies puede ser actualizada periódicamente para reflejar:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cambios en la legislación sobre cookies</li>
                <li>Nuevos servicios o funcionalidades</li>
                <li>Actualizaciones en las políticas de terceros</li>
                <li>Mejoras en la transparencia y control</li>
              </ul>
              <p className="mt-4">
                <strong>Fecha de última actualización:</strong> <span className="font-semibold">Enero 2025</span>
              </p>
            </div>
          </section>

          {/* Contacto */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Contacto y Dudas</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>Si tienes alguna pregunta sobre nuestra política de cookies, puedes contactarnos en:</p>
              <div className="bg-white dark:bg-zinc-700 rounded-xl p-4 mt-4">
                <p><strong>Email:</strong> cookies@webmakingstudio.com</p>
                <p><strong>Asunto:</strong> Consulta sobre cookies</p>
                <p><strong>Respuesta:</strong> Máximo 48 horas</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Section */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="text-center">
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Última actualización: <span className="font-semibold">Enero 2025</span>
            </p>
            <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-2">
              Esta política puede ser actualizada. Te notificaremos cualquier cambio significativo.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-100 dark:bg-zinc-800 border-t border-zinc-300 dark:border-zinc-700 py-4 mt-16" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zinc-500 dark:text-zinc-400">
              <a href="/privacidad" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Privacidad</a>
              <a href="/terminos" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Términos</a>
              <a href="/cookies" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Cookies</a>
            </div>
            <div className="flex flex-col items-center text-center space-y-0">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">© WEBLABS STUDIO // 2025</span>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">POLÍTICA DE COOKIES</p>
            </div>
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
