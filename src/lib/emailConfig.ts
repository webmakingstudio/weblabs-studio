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
    fromEmail: process.env.FROM_EMAIL || 'onboarding@resend.dev',
    resendApiKey: process.env.RESEND_API_KEY || '',
    nodeEnv: EMAIL_CONFIG.NODE_ENV,
    vercelEnv: EMAIL_CONFIG.VERCEL_ENV,
    resendEnabled: EMAIL_CONFIG.RESEND_CONFIG.enabled,
    maxRetries: EMAIL_CONFIG.RESEND_CONFIG.maxRetries,
    timeout: EMAIL_CONFIG.RESEND_CONFIG.timeout,
  };

  // Logging detallado para debugging en Vercel
  console.log('🔧 Configuración de Email:', {
    contactEmail: config.contactEmail ? '✅ Configurado' : '❌ No configurado',
    fromEmail: config.fromEmail,
    resendApiKey: config.resendApiKey ? '✅ Configurado' : '❌ No configurado',
    nodeEnv: config.nodeEnv,
    vercelEnv: config.vercelEnv,
    timestamp: new Date().toISOString()
  });

  // Validaciones para producción
  if (config.vercelEnv === 'production') {
    if (!config.resendApiKey) {
      console.error('❌ ERROR CRÍTICO: RESEND_API_KEY no configurada en producción');
      console.error('💡 Solución: Configura RESEND_API_KEY en Vercel Dashboard');
    }
    
    if (!config.contactEmail) {
      console.error('❌ ERROR CRÍTICO: CONTACT_EMAIL no configurado en producción');
      console.error('💡 Solución: Configura CONTACT_EMAIL en Vercel Dashboard');
    }
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
    console.error('💡 Soluciones:');
    console.error('   1. Ve a Vercel Dashboard → Settings → Environment Variables');
    console.error('   2. Añade RESEND_API_KEY con tu clave de Resend');
    console.error('   3. Añade CONTACT_EMAIL con tu email');
    console.error('   4. Añade FROM_EMAIL (puede ser onboarding@resend.dev)');
    console.error('   5. Redeploy tu proyecto');
    return false;
  }

  return true;
}
