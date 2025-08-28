"use client";

import { useState, useEffect } from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale, Users, Shield, Clock } from 'lucide-react';

export default function Terminos() {
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Términos y <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Condiciones</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Conoce las condiciones que rigen el uso de nuestros servicios y la relación comercial con nuestros clientes.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Información de la Empresa */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Información de la Empresa</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p><strong>Razón Social:</strong> WEBLABS STUDIO</p>
              <p><strong>NIF/CIF:</strong> [Tu NIF/CIF aquí]</p>
              <p><strong>Domicilio Fiscal:</strong> [Tu dirección fiscal aquí]</p>
              <p><strong>Email:</strong> info@webmakingstudio.com</p>
              <p><strong>Teléfono:</strong> [Tu teléfono aquí]</p>
              <p><strong>Actividad:</strong> Diseño y desarrollo web, servicios digitales</p>
            </div>
          </section>

          {/* Servicios Ofrecidos */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Servicios Ofrecidos</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>WEBLABS STUDIO ofrece los siguientes servicios:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Diseño y desarrollo de sitios web personalizados</li>
                <li>Optimización SEO y marketing digital</li>
                <li>Mantenimiento y soporte técnico</li>
                <li>Consultoría en estrategia digital</li>
                <li>Integración con sistemas y APIs</li>
                <li>Formación y capacitación en herramientas digitales</li>
              </ul>
            </div>
          </section>

          {/* Condiciones de Contratación */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Condiciones de Contratación</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p><strong>Proceso de Contratación:</strong></p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Consulta inicial y análisis de necesidades</li>
                <li>Propuesta comercial detallada</li>
                <li>Aceptación y firma del contrato</li>
                <li>Pago del 50% del proyecto</li>
                <li>Desarrollo y entregas parciales</li>
                <li>Pago del 50% restante al finalizar</li>
                <li>Entrega final y activación</li>
              </ol>
            </div>
          </section>

          {/* Precios y Pagos */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Precios y Condiciones de Pago</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p><strong>Estructura de Pagos:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>50% al inicio:</strong> Para comenzar el desarrollo</li>
                <li><strong>50% al finalizar:</strong> Antes de la entrega final</li>
                <li><strong>Mantenimiento:</strong> Pago mensual o anual según plan</li>
              </ul>
              <p className="mt-4"><strong>Formas de Pago:</strong> Transferencia bancaria, tarjeta de crédito, PayPal</p>
              <p><strong>Facturación:</strong> Se emite factura por cada pago realizado</p>
            </div>
          </section>

          {/* Plazos de Entrega */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Plazos de Entrega</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p><strong>Plazos Estimados:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Landing Page:</strong> 1-2 semanas</li>
                <li><strong>Sitio Web Corporativo:</strong> 3-4 semanas</li>
                <li><strong>E-commerce Básico:</strong> 4-6 semanas</li>
                <li><strong>Proyectos Personalizados:</strong> Según complejidad</li>
              </ul>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Nota:</strong> Los plazos pueden variar según la complejidad del proyecto y la disponibilidad del cliente para revisiones.
              </p>
            </div>
          </section>

          {/* Garantías */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Garantías y Soporte</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p><strong>Garantía de Funcionamiento:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>30 días:</strong> Garantía de funcionamiento básico</li>
                <li><strong>3 meses:</strong> Corrección de errores críticos</li>
                <li><strong>1 año:</strong> Soporte técnico según plan contratado</li>
              </ul>
              <p className="mt-4"><strong>Soporte Incluido:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Corrección de errores de programación</li>
                <li>Actualizaciones de seguridad</li>
                <li>Soporte por email y teléfono</li>
                <li>Respuesta en máximo 24 horas</li>
              </ul>
            </div>
          </section>

          {/* Limitaciones */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Limitaciones y Exclusiones</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>No cubrimos los siguientes aspectos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contenido y textos del sitio web</li>
                <li>Imágenes y recursos multimedia</li>
                <li>Configuración de dominios y hosting</li>
                <li>Mantenimiento de contenido</li>
                <li>Problemas causados por terceros</li>
                <li>Modificaciones no autorizadas</li>
              </ul>
            </div>
          </section>

          {/* Resolución de Conflictos */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Resolución de Conflictos</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p><strong>Proceso de Resolución:</strong></p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Comunicación directa con el equipo de proyecto</li>
                <li>Escalación al director de proyecto</li>
                <li>Mediación interna</li>
                <li>Resolución por arbitraje (si es necesario)</li>
              </ol>
              <p className="mt-4"><strong>Ley Aplicable:</strong> Legislación española</p>
              <p><strong>Jurisdicción:</strong> Tribunales de [Tu ciudad/provincia]</p>
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
              Estos términos pueden ser actualizados. Te notificaremos cualquier cambio significativo.
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
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">TÉRMINOS LEGALES</p>
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
