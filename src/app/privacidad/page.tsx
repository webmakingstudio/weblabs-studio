"use client";

import { useState, useEffect } from 'react';
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';

export default function Privacidad() {
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Política de <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Privacidad</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Tu privacidad es fundamental para nosotros. Conoce cómo protegemos y gestionamos tu información personal.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Información del Responsable */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Responsable del Tratamiento</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p><strong>Identidad:</strong> WEBLABS STUDIO</p>
              <p><strong>NIF/CIF:</strong> [Tu NIF/CIF aquí]</p>
              <p><strong>Domicilio:</strong> [Tu dirección fiscal aquí]</p>
              <p><strong>Email:</strong> info@webmakingstudio.com</p>
              <p><strong>Teléfono:</strong> [Tu teléfono aquí]</p>
            </div>
          </section>

          {/* Finalidad del Tratamiento */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Finalidad del Tratamiento</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>Tratamos tus datos personales para las siguientes finalidades:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gestionar consultas y solicitudes de información</li>
                <li>Prestar servicios de diseño y desarrollo web</li>
                <li>Enviar comunicaciones comerciales (con tu consentimiento)</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Cumplir obligaciones legales y contractuales</li>
              </ul>
            </div>
          </section>

          {/* Base Legal */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Base Legal</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>El tratamiento de tus datos se basa en:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Consentimiento:</strong> Para comunicaciones comerciales</li>
                <li><strong>Ejecución de contrato:</strong> Para prestar nuestros servicios</li>
                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios</li>
                <li><strong>Obligación legal:</strong> Para cumplir requisitos legales</li>
              </ul>
            </div>
          </section>

          {/* Derechos ARCO */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Tus Derechos ARCO</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>Tienes derecho a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                <li><strong>Cancelación:</strong> Eliminar tus datos</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                <li><strong>Limitación:</strong> Limitar el tratamiento de tus datos</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Política de Cookies</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>Utilizamos cookies para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Analizar el tráfico del sitio web</li>
                <li>Personalizar el contenido</li>
                <li>Mejorar la funcionalidad</li>
                <li>Recordar tus preferencias</li>
              </ul>
              <p className="mt-4">
                <a href="/cookies" className="text-green-500 hover:text-green-400 underline">
                  Ver política completa de cookies →
                </a>
              </p>
            </div>
          </section>

          {/* Contacto */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Ejercer tus Derechos</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>Para ejercer cualquiera de tus derechos, puedes contactarnos en:</p>
              <div className="bg-white dark:bg-zinc-700 rounded-xl p-4 mt-4">
                <p><strong>Email:</strong> privacidad@webmakingstudio.com</p>
                <p><strong>Dirección:</strong> [Tu dirección para notificaciones]</p>
                <p><strong>Plazo de respuesta:</strong> Máximo 30 días</p>
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
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">PROTEGIENDO TU PRIVACIDAD</p>
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
