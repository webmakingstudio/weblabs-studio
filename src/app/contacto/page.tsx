"use client";

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Shield, User, MessageSquare, Building } from 'lucide-react';

interface FormData {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  servicio: string;
  mensaje: string;
  consentimientoPrivacidad: boolean;
  consentimientoMarketing: boolean;
  consentimientoCookies: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contacto() {
  const [isDark, setIsDark] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    servicio: '',
    mensaje: '',
    consentimientoPrivacidad: false,
    consentimientoMarketing: false,
    consentimientoCookies: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    }

    if (!formData.consentimientoPrivacidad) {
      newErrors.consentimientoPrivacidad = 'Debes aceptar la política de privacidad';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí iría la lógica real de envío del formulario
      // Por ejemplo, enviar a una API o servicio de email
      
      setSubmitStatus('success');
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        telefono: '',
        servicio: '',
        mensaje: '',
        consentimientoPrivacidad: false,
        consentimientoMarketing: false,
        consentimientoCookies: false,
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Formulario de Contacto</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    ¡Mensaje enviado con éxito! Te responderemos en las próximas 24 horas.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-xl flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Información Personal */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                          errors.nombre ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600'
                        }`}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    {errors.nombre && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.nombre}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                          errors.email ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600'
                        }`}
                        placeholder="tu@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Información de la Empresa */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                      Teléfono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="+34 XXX XXX XXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Servicio de Interés */}
                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona un servicio</option>
                    {servicios.map((servicio) => (
                      <option key={servicio} value={servicio}>
                        {servicio}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Mensaje *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none ${
                        errors.mensaje ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-600'
                      }`}
                      placeholder="Cuéntanos sobre tu proyecto, necesidades y objetivos..."
                    />
                  </div>
                  {errors.mensaje && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.mensaje}</p>
                  )}
                </div>

                {/* Consentimientos RGPD */}
                <div className="space-y-4 p-6 bg-white dark:bg-zinc-700 rounded-xl border border-zinc-200 dark:border-zinc-600">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>Consentimientos Legales</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {/* Consentimiento Privacidad - Obligatorio */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consentimientoPrivacidad"
                        name="consentimientoPrivacidad"
                        checked={formData.consentimientoPrivacidad}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-green-600 bg-zinc-100 border-zinc-300 rounded focus:ring-green-500 focus:ring-2"
                        required
                      />
                      <label htmlFor="consentimientoPrivacidad" className="text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="font-medium">Acepto la política de privacidad *</span>
                        <br />
                        <span className="text-xs text-zinc-600 dark:text-zinc-400">
                          He leído y acepto la{' '}
                          <a href="/privacidad" className="text-green-600 dark:text-green-400 hover:underline" target="_blank">
                            política de privacidad
                          </a>
                          . Este consentimiento es obligatorio para procesar tu solicitud.
                        </span>
                      </label>
                    </div>
                    {errors.consentimientoPrivacidad && (
                      <p className="ml-7 text-sm text-red-600 dark:text-red-400">{errors.consentimientoPrivacidad}</p>
                    )}

                    {/* Consentimiento Marketing - Opcional */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consentimientoMarketing"
                        name="consentimientoMarketing"
                        checked={formData.consentimientoMarketing}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-green-600 bg-zinc-100 border-zinc-300 rounded focus:ring-green-500 focus:ring-2"
                      />
                      <label htmlFor="consentimientoMarketing" className="text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="font-medium">Acepto recibir comunicaciones comerciales</span>
                        <br />
                        <span className="text-xs text-zinc-600 dark:text-zinc-400">
                          Te enviaremos información sobre nuestros servicios, ofertas especiales y novedades. 
                          Puedes revocar este consentimiento en cualquier momento.
                        </span>
                      </label>
                    </div>

                    {/* Consentimiento Cookies - Opcional */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consentimientoCookies"
                        name="consentimientoCookies"
                        checked={formData.consentimientoCookies}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-green-600 bg-zinc-100 border-zinc-300 rounded focus:ring-green-500 focus:ring-2"
                      />
                      <label htmlFor="consentimientoCookies" className="text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="font-medium">Acepto el uso de cookies analíticas</span>
                        <br />
                        <span className="text-xs text-zinc-600 dark:text-zinc-400">
                          Utilizamos cookies para mejorar tu experiencia. Consulta nuestra{' '}
                          <a href="/cookies" className="text-green-600 dark:text-green-400 hover:underline" target="_blank">
                            política de cookies
                          </a>
                          .
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Botón de Envío */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>

                {/* Información Adicional */}
                <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
                  Al enviar este formulario, confirmas que tienes al menos 16 años y que la información proporcionada es veraz.
                  <br />
                  <a href="/terminos" className="text-green-600 dark:text-green-400 hover:underline" target="_blank">
                    Términos y condiciones
                  </a>
                  {' '}•{' '}
                  <a href="/aviso-legal" className="text-green-600 dark:text-green-400 hover:underline" target="_blank">
                    Aviso legal
                  </a>
                </p>
              </form>
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
