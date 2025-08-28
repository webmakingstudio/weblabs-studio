"use client";

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Shield, User, MessageSquare, Building } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Contacto() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const servicios = [
    'Diseño Web Personalizado',
    'Desarrollo Web',
    'Optimización SEO',
    'Mantenimiento Web',
    'Consultoría Digital',
    'Otro',
  ];

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
      <main className="max-w-6xl mx-auto px-4 py-8" role="main">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Hablemos de tu <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Proyecto</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad. Nuestro equipo está listo para transformar tu visión en una web que genere resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Información de Contacto */}
          <div className="lg:col-span-1 space-y-6">
            {/* Información de la Empresa */}
            <div className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Información de Contacto</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Email</p>
                    <p className="text-zinc-700 dark:text-zinc-300">info@webmakingstudio.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Teléfono</p>
                    <p className="text-zinc-700 dark:text-zinc-300">[Tu teléfono aquí]</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Dirección</p>
                    <p className="text-zinc-700 dark:text-zinc-300">[Tu dirección aquí]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios de Atención */}
            <div className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Horarios de Atención</h3>
              <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <p><strong>Lunes - Viernes:</strong> 9:00 - 18:00</p>
                <p><strong>Sábados:</strong> 10:00 - 14:00</p>
                <p><strong>Domingos:</strong> Cerrado</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">
                  <strong>Nota:</strong> Para proyectos urgentes, contacta fuera de horario.
                </p>
              </div>
            </div>

            {/* Servicios Destacados */}
            <div className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Servicios Destacados</h3>
              <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <p>• Diseño Web Personalizado</p>
                <p>• Desarrollo Web Profesional</p>
                <p>• Optimización SEO</p>
                <p>• Mantenimiento Web</p>
                <p>• Consultoría Digital</p>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto REAL */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Formulario de Contacto</h2>
              
              {/* Componente ContactForm REAL que envía emails */}
              <ContactForm 
                onSuccess={(data) => {
                  console.log('✅ Formulario enviado exitosamente:', data);
                  // Aquí podrías mostrar un mensaje de éxito personalizado
                }}
                onError={(error) => {
                  console.error('❌ Error en formulario:', error);
                  // Aquí podrías mostrar un mensaje de error personalizado
                }}
              />
            </div>
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
              <a href="/aviso-legal" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Aviso Legal</a>
            </div>
            <div className="flex flex-col items-center text-center space-y-0">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">© WEBLABS STUDIO // 2025</span>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">CONTACTO RGPD</p>
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
