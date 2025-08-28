"use client";

import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle, Shield, User, MessageSquare, Building } from 'lucide-react';

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

interface ContactFormProps {
  variant?: 'default' | 'compact' | 'inline';
  onSuccess?: (data: FormData) => void;
  onError?: (error: string) => void;
  className?: string;
}

export default function ContactForm({ 
  variant = 'default', 
  onSuccess, 
  onError,
  className = '' 
}: ContactFormProps) {
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
      // Preparar datos para la API
      const formPayload = {
        nombre: formData.nombre.trim(),
        email: formData.email.trim(),
        empresa: formData.empresa.trim(),
        telefono: formData.telefono.trim(),
        servicio: formData.servicio,
        mensaje: formData.mensaje.trim(),
        consentimientos: {
          privacidad: formData.consentimientoPrivacidad,
          marketing: formData.consentimientoMarketing,
          cookies: formData.consentimientoCookies,
        }
      };

      // Enviar a nuestra API de Vercel
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `Error ${response.status}: ${response.statusText}`);
      }

      if (result.success) {
        setSubmitStatus('success');
        onSuccess?.(formData);
        
        // Reset form after success
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

        // Log success para debugging
        console.log('✅ Formulario enviado exitosamente:', result);
      } else {
        throw new Error(result.error || 'Error desconocido al enviar el formulario');
      }

    } catch (error) {
      console.error('❌ Error enviando formulario:', error);
      setSubmitStatus('error');
      onError?.(error instanceof Error ? error.message : 'Error desconocido');
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

  // Variante compacta para sidebars o widgets
  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-6 ${className}`}>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Contacto Rápido</h3>
        
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-xl flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            <p className="text-sm text-green-800 dark:text-green-200">¡Mensaje enviado!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Tu nombre *"
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Tu email *"
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              placeholder="Tu mensaje *"
              rows={3}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="consentimientoPrivacidad"
              checked={formData.consentimientoPrivacidad}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-green-600 bg-zinc-100 border-zinc-300 rounded focus:ring-green-500 focus:ring-2"
              required
            />
            <label className="text-xs text-zinc-600 dark:text-zinc-400">
              Acepto la{' '}
              <a href="/privacidad" className="text-green-600 dark:text-green-400 hover:underline" target="_blank">
                política de privacidad
              </a>
              *
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Enviar</span>
              </>
            )}
          </button>
        </form>
      </div>
    );
  }

  // Variante inline para headers o banners
  if (variant === 'inline') {
    return (
      <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Tu email"
          className="flex-1 px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button
          type="button"
          onClick={() => window.location.href = '/contacto'}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
        >
          <Mail className="w-4 h-4" />
          <span>Contactar</span>
        </button>
      </div>
    );
  }

  // Variante por defecto (completa)
  return (
    <div className={`bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-8 ${className}`}>
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
  );
}
