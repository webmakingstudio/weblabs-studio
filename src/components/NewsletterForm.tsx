"use client";

import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Shield } from 'lucide-react';

interface NewsletterFormProps {
  variant?: 'default' | 'compact' | 'inline';
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSuccess?: (email: string) => void;
  onError?: (error: string) => void;
  className?: string;
}

export default function NewsletterForm({
  variant = 'default',
  title = 'Suscríbete a nuestro Newsletter',
  description = 'Recibe las últimas novedades, consejos y ofertas exclusivas directamente en tu email.',
  placeholder = 'Tu email aquí',
  buttonText = 'Suscribirse',
  onSuccess,
  onError,
  className = ''
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [consentimiento, setConsentimiento] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !consentimiento) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      onSuccess?.(email);
      
      // Reset form after success
      setEmail('');
      setConsentimiento(false);
    } catch (error) {
      setSubmitStatus('error');
      onError?.(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Variante compacta para sidebars
  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-xl p-4 ${className}`}>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>
        
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            <p className="text-sm text-green-800 dark:text-green-200">¡Suscrito con éxito!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
          
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="newsletter-consent"
              checked={consentimiento}
              onChange={(e) => setConsentimiento(e.target.checked)}
              className="mt-1 w-4 h-4 text-green-600 bg-zinc-100 border-zinc-300 rounded focus:ring-green-500 focus:ring-2"
              required
            />
            <label htmlFor="newsletter-consent" className="text-xs text-zinc-600 dark:text-zinc-400">
              Acepto recibir el newsletter y la{' '}
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
                <span>Suscribiendo...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>{buttonText}</span>
              </>
            )}
          </button>
        </form>
      </div>
    );
  }

  // Variante inline para headers
  if (variant === 'inline') {
    return (
      <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        />
        <button
          type="button"
          onClick={() => window.location.href = '/contacto'}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
        >
          <Mail className="w-4 h-4" />
          <span>{buttonText}</span>
        </button>
      </div>
    );
  }

  // Variante por defecto (completa)
  return (
    <div className={`bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-2xl p-8 ${className}`}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">{title}</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-xl flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          <p className="text-green-800 dark:text-green-200 font-medium">
            ¡Te has suscrito con éxito! Revisa tu email para confirmar la suscripción.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-xl flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
          <p className="text-red-800 dark:text-red-200 font-medium">
            Hubo un error al suscribirte. Por favor, inténtalo de nuevo.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div>
          <label htmlFor="newsletter-email" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              placeholder={placeholder}
              required
            />
          </div>
        </div>

        {/* Consentimiento RGPD */}
        <div className="space-y-4 p-6 bg-white dark:bg-zinc-700 rounded-xl border border-zinc-200 dark:border-zinc-600">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span>Consentimiento Legal</span>
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="newsletter-consent"
                checked={consentimiento}
                onChange={(e) => setConsentimiento(e.target.checked)}
                className="mt-1 w-4 h-4 text-green-600 bg-zinc-100 border-zinc-300 rounded focus:ring-green-500 focus:ring-2"
                required
              />
              <label htmlFor="newsletter-consent" className="text-sm text-zinc-700 dark:text-zinc-300">
                <span className="font-medium">Acepto recibir comunicaciones por email *</span>
                <br />
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  Al suscribirte, aceptas recibir nuestro newsletter con novedades, consejos y ofertas. 
                  Puedes darte de baja en cualquier momento haciendo clic en el enlace de "unsubscribe" 
                  que aparece en cada email. Consulta nuestra{' '}
                  <a href="/privacidad" className="text-green-600 dark:text-green-400 hover:underline" target="_blank">
                    política de privacidad
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
              <span>Suscribiendo...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>{buttonText}</span>
            </>
          )}
        </button>

        {/* Información Adicional */}
        <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
          Al suscribirte, confirmas que tienes al menos 16 años y que la información proporcionada es veraz.
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
