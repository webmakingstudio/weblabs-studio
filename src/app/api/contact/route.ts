import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, createContactEmailTemplate } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, empresa, telefono, servicio, mensaje, consentimientos } = body;

    // Validación de campos obligatorios
    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios: nombre, email y mensaje son requeridos' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      );
    }

    // Validación de consentimiento de privacidad (obligatorio por RGPD)
    if (!consentimientos?.privacidad) {
      return NextResponse.json(
        { error: 'Debes aceptar la política de privacidad para continuar' },
        { status: 400 }
      );
    }

    // Preparar datos del email
    const emailData = {
      to: process.env.CONTACT_EMAIL || 'info@webmakingstudio.com', // Tu email
      from: process.env.FROM_EMAIL || 'noreply@webmakingstudio.com',
      subject: `🆕 Nuevo formulario de contacto - ${nombre}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Nuevo Formulario de Contacto</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #22c55e; }
            .value { background: #f8f9fa; padding: 10px; border-radius: 5px; border-left: 4px solid #22c55e; }
            .consent { background: #e8f5e8; padding: 15px; border-radius: 5px; border: 1px solid #22c55e; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🆕 Nuevo Formulario de Contacto</h1>
              <p>Has recibido una nueva solicitud de contacto desde tu web</p>
            </div>
            
            <div class="field">
              <div class="label">👤 Nombre Completo:</div>
              <div class="value">${nombre}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value">${email}</div>
            </div>
            
            ${empresa ? `
            <div class="field">
              <div class="label">🏢 Empresa:</div>
              <div class="value">${empresa}</div>
            </div>
            ` : ''}
            
            ${telefono ? `
            <div class="field">
              <div class="label">📞 Teléfono:</div>
              <div class="value">${telefono}</div>
            </div>
            ` : ''}
            
            ${servicio ? `
            <div class="field">
              <div class="label">🎯 Servicio de Interés:</div>
              <div class="value">${servicio}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">💬 Mensaje:</div>
              <div class="value">${mensaje.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="consent">
              <div class="label">✅ Consentimientos RGPD:</div>
              <ul>
                <li>Política de Privacidad: ${consentimientos.privacidad ? '✅ Aceptado' : '❌ No aceptado'}</li>
                <li>Marketing: ${consentimientos.marketing ? '✅ Aceptado' : '❌ No aceptado'}</li>
                <li>Cookies: ${consentimientos.cookies ? '✅ Aceptado' : '❌ No aceptado'}</li>
              </ul>
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
              <p><strong>🌐 IP:</strong> ${request.headers.get('x-forwarded-for') || 'No disponible'}</p>
              <p><strong>🔗 User Agent:</strong> ${request.headers.get('user-agent') || 'No disponible'}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nuevo Formulario de Contacto

Nombre: ${nombre}
Email: ${email}
Empresa: ${empresa || 'No especificada'}
Teléfono: ${telefono || 'No especificado'}
Servicio: ${servicio || 'No especificado'}

Mensaje:
${mensaje}

Consentimientos:
- Política de Privacidad: ${consentimientos.privacidad ? 'Aceptado' : 'No aceptado'}
- Marketing: ${consentimientos.marketing ? 'Aceptado' : 'No aceptado'}
- Cookies: ${consentimientos.cookies ? 'Aceptado' : 'No aceptado'}

Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
      `
    };

    // Enviar email usando nuestro servicio de PRODUCCIÓN
    try {
      console.log('📧 Enviando email...');
      const emailResult = await sendEmail(emailData);
      console.log('✅ Email enviado exitosamente:', emailResult);
      
      // Log adicional para producción
      if (process.env.VERCEL_ENV === 'production') {
        console.log('🚀 Email enviado en PRODUCCIÓN:', {
          messageId: emailResult.messageId,
          timestamp: new Date().toISOString(),
          environment: 'production'
        });
      }
    } catch (emailError) {
      console.error('❌ Error enviando email:', emailError);
      
      // En producción, fallar si el email no se envía
      if (process.env.VERCEL_ENV === 'production') {
        return NextResponse.json(
          { 
            error: 'Error enviando email. Por favor, inténtalo de nuevo más tarde.',
            timestamp: new Date().toISOString()
          },
          { status: 500 }
        );
      }
      
      // En desarrollo, solo loguear el error
      console.log('⚠️ Modo desarrollo: Continuando sin email');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Formulario recibido correctamente. Te responderemos en las próximas 24 horas.',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error en la API de contacto:', error);
    return NextResponse.json(
      { 
        error: 'Error interno del servidor. Por favor, inténtalo de nuevo más tarde.',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    );
  }
}

// Método GET para testing
export async function GET() {
  return NextResponse.json(
    { 
      message: 'API de contacto funcionando correctamente',
      timestamp: new Date().toISOString(),
      status: 'active'
    },
    { status: 200 }
  );
}
