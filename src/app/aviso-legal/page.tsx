"use client";

import { useState, useEffect } from 'react';
import { Scale, Building2, Globe, Mail, Phone, MapPin, AlertTriangle, Shield } from 'lucide-react';

export default function AvisoLegal() {
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Aviso <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">Legal</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Información legal y de contacto de WEBLABS STUDIO. Conoce los datos de la empresa y las condiciones de uso del sitio web.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Información de la Empresa */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Información de la Empresa</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p><strong>Razón Social:</strong> WEBLABS STUDIO</p>
              <p><strong>NIF/CIF:</strong> [Tu NIF/CIF aquí]</p>
              <p><strong>Domicilio Fiscal:</strong> [Tu dirección fiscal aquí]</p>
              <p><strong>Código Postal:</strong> [Tu código postal aquí]</p>
              <p><strong>Ciudad:</strong> [Tu ciudad aquí]</p>
              <p><strong>Provincia:</strong> [Tu provincia aquí]</p>
              <p><strong>País:</strong> España</p>
              <p><strong>Inscripción Registral:</strong> [Datos del registro mercantil si aplica]</p>
            </div>
          </section>

          {/* Información de Contacto */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Información de Contacto</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Email General</p>
                    <p className="text-zinc-700 dark:text-zinc-300">info@webmakingstudio.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Teléfono</p>
                    <p className="text-zinc-700 dark:text-zinc-300">[Tu teléfono aquí]</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Dirección</p>
                    <p className="text-zinc-700 dark:text-zinc-300">[Tu dirección física aquí]</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Sitio Web</p>
                    <p className="text-zinc-700 dark:text-zinc-300">https://webmakingstudio.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Actividad de la Empresa */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Actividad de la Empresa</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p><strong>Actividad Principal:</strong> Diseño y desarrollo web, servicios digitales</p>
              <p><strong>Servicios Ofrecidos:</strong></p>
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

          {/* Condiciones de Uso del Sitio Web */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Condiciones de Uso del Sitio Web</h2>
            </div>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
              <p><strong>Propiedad Intelectual:</strong></p>
              <p>Todo el contenido de este sitio web, incluyendo textos, imágenes, gráficos, logotipos, iconos y software, es propiedad de WEBLABS STUDIO o de sus licenciantes y está protegido por las leyes de propiedad intelectual.</p>
              
              <p><strong>Uso del Sitio:</strong></p>
              <p>El uso de este sitio web está sujeto a las siguientes condiciones:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>El contenido se proporciona únicamente con fines informativos</li>
                <li>No se permite el uso comercial no autorizado</li>
                <li>No se permite la reproducción total o parcial sin autorización</li>
                <li>El usuario se compromete a no realizar actividades que puedan dañar el sitio</li>
              </ul>
            </div>
          </section>

          {/* Limitación de Responsabilidad */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Limitación de Responsabilidad</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>WEBLABS STUDIO no se hace responsable de:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Daños directos o indirectos derivados del uso del sitio web</li>
                <li>Interrupciones en el servicio o errores técnicos</li>
                <li>Contenido de sitios web de terceros enlazados</li>
                <li>Virus informáticos o software malicioso</li>
                <li>Pérdida de datos o información</li>
                <li>Daños causados por el uso incorrecto del sitio</li>
              </ul>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Nota:</strong> WEBLABS STUDIO se esfuerza por mantener la información actualizada y precisa, pero no garantiza la exactitud, integridad o actualidad del contenido.
              </p>
            </div>
          </section>

          {/* Enlaces Externos */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Enlaces Externos</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>Este sitio web puede contener enlaces a sitios web de terceros. WEBLABS STUDIO:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No tiene control sobre el contenido de estos sitios</li>
                <li>No se hace responsable de su contenido o políticas</li>
                <li>No respalda necesariamente las opiniones expresadas en ellos</li>
                <li>Recomienda revisar las políticas de privacidad de cada sitio</li>
              </ul>
              <p className="mt-4">
                <strong>Nota:</strong> Los enlaces externos se abren en nuevas ventanas para mantener la navegación en nuestro sitio.
              </p>
            </div>
          </section>

          {/* Legislación Aplicable */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Legislación Aplicable</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p><strong>Jurisdicción:</strong> Este sitio web se rige por la legislación española</p>
              <p><strong>Foro Competente:</strong> Tribunales de [Tu ciudad/provincia]</p>
              <p><strong>Leyes Aplicables:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información</li>
                <li>Real Decreto Legislativo 1/2007, de 16 de noviembre, Ley de Defensa de Consumidores</li>
                <li>Reglamento (UE) 2016/679, de 27 de abril, de Protección de Datos (RGPD)</li>
                <li>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos (LOPDGDD)</li>
              </ul>
            </div>
          </section>

          {/* Modificaciones */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Modificaciones del Aviso Legal</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>WEBLABS STUDIO se reserva el derecho de modificar este aviso legal en cualquier momento. Los cambios entrarán en vigor desde su publicación en el sitio web.</p>
              <p><strong>Notificación de Cambios:</strong> Los cambios significativos serán notificados a través de:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Banner informativo en el sitio web</li>
                <li>Comunicación por email a usuarios registrados</li>
                <li>Publicación en redes sociales</li>
              </ul>
              <p className="mt-4">
                <strong>Fecha de última actualización:</strong> <span className="font-semibold">Enero 2025</span>
              </p>
            </div>
          </section>

          {/* Contacto para Cuestiones Legales */}
          <section className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Contacto para Cuestiones Legales</h2>
            </div>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <p>Para cualquier consulta relacionada con este aviso legal, puedes contactarnos en:</p>
              <div className="bg-white dark:bg-zinc-700 rounded-xl p-4 mt-4">
                <p><strong>Email:</strong> legal@webmakingstudio.com</p>
                <p><strong>Asunto:</strong> Consulta sobre aviso legal</p>
                <p><strong>Dirección:</strong> [Tu dirección para notificaciones legales]</p>
                <p><strong>Respuesta:</strong> Máximo 5 días hábiles</p>
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
              Este aviso legal puede ser actualizado. Te notificaremos cualquier cambio significativo.
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
              <a href="/aviso-legal" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Aviso Legal</a>
            </div>
            <div className="flex flex-col items-center text-center space-y-0">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">© WEBLABS STUDIO // 2025</span>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">AVISO LEGAL</p>
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
