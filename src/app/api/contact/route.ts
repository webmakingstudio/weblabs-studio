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

    // Crear plantilla de email usando nuestro servicio
    const emailTemplate = createContactEmailTemplate({
      nombre,
      email,
      empresa,
      telefono,
      servicio,
      mensaje,
      consentimientos
    });

    // Preparar datos del email para Resend
    const emailData = {
      to: process.env.CONTACT_EMAIL || '',
      from: process.env.FROM_EMAIL || '',
      subject: `🆕 Nuevo formulario de contacto - ${nombre}`,
      html: emailTemplate.html,
      text: emailTemplate.text
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
