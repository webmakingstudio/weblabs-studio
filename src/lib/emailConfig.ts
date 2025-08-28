// Configuración de emails para PRODUCCIÓN en Vercel
export const EMAIL_CONFIG = {
  // Email donde recibirás los formularios (TU EMAIL REAL)
  CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'webmakingstudios@gmail.com',
  
  // Email desde donde se enviarán (Resend)
  FROM_EMAIL: process.env.FROM_EMAIL || 'onboarding@resend.dev',
  
  // API Key de Resend (OBLIGATORIA para producción)
  RESEND_API_KEY: process.env.RESEND_API_KEY || '',
  
  // Configuración de producción
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Configuración de Vercel
  VERCEL_ENV: process.env.VERCEL_ENV || 'development',
  
  // Configuración de Resend
  RESEND_CONFIG: {
    enabled: true,
    domain: process.env.RESEND_DOMAIN || 'onboarding.resend.dev',
    maxRetries: 3,
    timeout: 10000, // 10 segundos
  }
};

// Función para obtener configuración de producción
export function getEmailConfig() {
  const config = {
    contactEmail: process.env.CONTACT_EMAIL || EMAIL_CONFIG.CONTACT_EMAIL,
    fromEmail: process.env.FROM_EMAIL || EMAIL_CONFIG.FROM_EMAIL,
    resendApiKey: process.env.RESEND_API_KEY || EMAIL_CONFIG.RESEND_API_KEY,
    nodeEnv: EMAIL_CONFIG.NODE_ENV,
    vercelEnv: EMAIL_CONFIG.VERCEL_ENV,
    resendEnabled: EMAIL_CONFIG.RESEND_CONFIG.enabled,
    resendDomain: EMAIL_CONFIG.RESEND_CONFIG.domain,
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
