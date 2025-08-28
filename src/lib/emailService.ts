import { Resend } from 'resend';
import { getEmailConfig } from './emailConfig';

// Configuración de Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Interfaz para los datos del email
interface EmailData {
  to: string;
  from: string;
  subject: string;
  html: string;
  text: string;
}

// Función para enviar email usando Resend
export async function sendEmailWithResend(emailData: EmailData) {
  try {
    const { data, error } = await resend.emails.send({
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text,
    });

    if (error) {
      console.error('❌ Error enviando email con Resend:', error);
      throw new Error(`Error de Resend: ${error.message}`);
    }

    console.log('✅ Email enviado con Resend:', data);
    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error('❌ Error en sendEmailWithResend:', error);
    throw error;
  }
}

// Función para enviar email usando Gmail (temporal)
export async function sendEmailWithGmail(emailData: EmailData) {
  try {
    // Por ahora, solo logueamos el email para que puedas ver los datos
    console.log('📧 Email que se enviaría con Gmail:');
    console.log('To:', emailData.to);
    console.log('From:', emailData.from);
    console.log('Subject:', emailData.subject);
    console.log('HTML:', emailData.html.substring(0, 200) + '...');
    
    // Simular envío exitoso
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('✅ Email simulado enviado con Gmail');
    return { success: true, messageId: 'gmail-simulated' };
  } catch (error) {
    console.error('❌ Error en sendEmailWithGmail:', error);
    throw error;
  }
}

// Función principal para PRODUCCIÓN
export async function sendEmail(emailData: EmailData) {
  try {
    const config = getEmailConfig();
    
    // En producción, SOLO usar Resend
    if (config.vercelEnv === 'production') {
      if (!config.resendApiKey) {
        throw new Error('RESEND_API_KEY obligatoria en producción');
      }
      
      console.log('🚀 Enviando email con Resend (PRODUCCIÓN)...');
      return await sendEmailWithResend(emailData);
    }
    
    // En desarrollo, usar Resend si está configurado, sino fallback
    if (config.resendApiKey && config.resendApiKey.startsWith('re_')) {
      console.log('🚀 Enviando email con Resend (DESARROLLO)...');
      return await sendEmailWithResend(emailData);
    } else {
      console.log('📧 Modo desarrollo: Simulando envío de email...');
      return await sendEmailWithGmail(emailData);
    }
  } catch (error) {
    console.error('❌ Error enviando email:', error);
    throw error;
  }
}

// Función para crear plantillas de email
export function createContactEmailTemplate(data: {
  nombre: string;
  email: string;
  empresa?: string;
  telefono?: string;
  servicio?: string;
  mensaje: string;
  consentimientos: {
    privacidad: boolean;
    marketing: boolean;
    cookies: boolean;
  };
}) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nuevo Formulario de Contacto</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 20px; 
          background-color: #f8f9fa;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white; 
          border-radius: 12px; 
          overflow: hidden; 
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: linear-gradient(135deg, #22c55e, #16a34a); 
          color: white; 
          padding: 30px 20px; 
          text-align: center;
        }
        .header h1 { 
          margin: 0; 
          font-size: 28px; 
          font-weight: 700;
        }
        .header p { 
          margin: 10px 0 0 0; 
          opacity: 0.9; 
          font-size: 16px;
        }
        .content { 
          padding: 30px 20px; 
        }
        .field { 
          margin-bottom: 20px; 
        }
        .label { 
          font-weight: 600; 
          color: #22c55e; 
          margin-bottom: 8px; 
          display: block;
        }
        .value { 
          background: #f8f9fa; 
          padding: 12px 16px; 
          border-radius: 8px; 
          border-left: 4px solid #22c55e; 
          font-size: 16px;
        }
        .consent { 
          background: #f0fdf4; 
          padding: 20px; 
          border-radius: 8px; 
          border: 1px solid #22c55e; 
          margin-top: 20px;
        }
        .consent .label { 
          color: #166534; 
          margin-bottom: 15px;
        }
        .consent ul { 
          margin: 0; 
          padding-left: 20px;
        }
        .consent li { 
          margin-bottom: 8px; 
          color: #166534;
        }
        .footer { 
          background: #f8f9fa; 
          padding: 20px; 
          text-align: center; 
          font-size: 12px; 
          color: #666; 
          border-top: 1px solid #e5e7eb;
        }
        .status-badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .status-accepted {
          background: #dcfce7;
          color: #166534;
        }
        .status-rejected {
          background: #fef2f2;
          color: #dc2626;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🆕 Nuevo Formulario de Contacto</h1>
          <p>Has recibido una nueva solicitud de contacto desde tu web</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">👤 Nombre Completo</span>
            <div class="value">${data.nombre}</div>
          </div>
          
          <div class="field">
            <span class="label">📧 Email</span>
            <div class="value">${data.email}</div>
          </div>
          
          ${data.empresa ? `
          <div class="field">
            <span class="label">🏢 Empresa</span>
            <div class="value">${data.empresa}</div>
          </div>
          ` : ''}
          
          ${data.telefono ? `
          <div class="field">
            <span class="label">📞 Teléfono</span>
            <div class="value">${data.telefono}</div>
          </div>
          ` : ''}
          
          ${data.servicio ? `
          <div class="field">
            <span class="label">🎯 Servicio de Interés</span>
            <div class="value">${data.servicio}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">💬 Mensaje</span>
            <div class="value">${data.mensaje.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="consent">
            <span class="label">✅ Consentimientos RGPD</span>
            <ul>
              <li>
                Política de Privacidad: 
                <span class="status-badge ${data.consentimientos.privacidad ? 'status-accepted' : 'status-rejected'}">
                  ${data.consentimientos.privacidad ? 'Aceptado' : 'No aceptado'}
                </span>
              </li>
              <li>
                Marketing: 
                <span class="status-badge ${data.consentimientos.marketing ? 'status-accepted' : 'status-rejected'}">
                  ${data.consentimientos.marketing ? 'Aceptado' : 'No aceptado'}
                </span>
              </li>
              <li>
                Cookies: 
                <span class="status-badge ${data.consentimientos.cookies ? 'status-accepted' : 'status-rejected'}">
                  ${data.consentimientos.cookies ? 'Aceptado' : 'No aceptado'}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>📅 Fecha:</strong> ${new Date().toLocaleString('es-ES', { 
            timeZone: 'Europe/Madrid',
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
          <p><strong>🌐 Origen:</strong> WEBLABS STUDIO - Formulario de Contacto</p>
          <p><strong>🔗 Acción:</strong> Responder a ${data.email} lo antes posible</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
Nuevo Formulario de Contacto - WEBLABS STUDIO

Nombre: ${data.nombre}
Email: ${data.email}
Empresa: ${data.empresa || 'No especificada'}
Teléfono: ${data.telefono || 'No especificado'}
Servicio: ${data.servicio || 'No especificado'}

Mensaje:
${data.mensaje}

Consentimientos:
- Política de Privacidad: ${data.consentimientos.privacidad ? 'Aceptado' : 'No aceptado'}
- Marketing: ${data.consentimientos.marketing ? 'Aceptado' : 'No aceptado'}
- Cookies: ${data.consentimientos.cookies ? 'Aceptado' : 'No aceptado'}

Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
Origen: WEBLABS STUDIO
Acción: Responder a ${data.email} lo antes posible
  `;

  return { html, text };
}
