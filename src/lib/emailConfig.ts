// Configuración de emails para PRODUCCIÓN en Vercel
export const EMAIL_CONFIG = {
  // Configuración de producción
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Configuración de Vercel
  VERCEL_ENV: process.env.VERCEL_ENV || 'development',
  
  // Configuración de Resend
  RESEND_CONFIG: {
    enabled: true,
    maxRetries: 3,
    timeout: 10000, // 10 segundos
  }
};

// Función para obtener configuración de producción
export function getEmailConfig() {
  const config = {
    contactEmail: process.env.CONTACT_EMAIL || '',
    fromEmail: process.env.FROM_EMAIL || '',
    resendApiKey: process.env.RESEND_API_KEY || '',
    nodeEnv: EMAIL_CONFIG.NODE_ENV,
    vercelEnv: EMAIL_CONFIG.VERCEL_ENV,
    resendEnabled: EMAIL_CONFIG.RESEND_CONFIG.enabled,
    maxRetries: EMAIL_CONFIG.RESEND_CONFIG.maxRetries,
    timeout: EMAIL_CONFIG.RESEND_CONFIG.timeout,
  };

  // Validaciones para producción
  if (config.vercelEnv === 'production' && !config.resendApiKey) {
    console.warn('⚠️ ADVERTENCIA: RESEND_API_KEY no configurada en producción');
  }

  return config;
}

// Función para validar configuración
export function validateEmailConfig() {
  const config = getEmailConfig();
  const errors: string[] = [];

  if (!config.contactEmail) {
    errors.push('CONTACT_EMAIL no configurado');
  }

  if (!config.resendApiKey && config.vercelEnv === 'production') {
    errors.push('RESEND_API_KEY obligatoria en producción');
  }

  if (errors.length > 0) {
    console.error('❌ Errores en configuración de email:', errors);
    return false;
  }

  return true;
}
