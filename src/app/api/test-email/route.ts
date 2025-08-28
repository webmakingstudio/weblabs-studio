import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Test simple de Resend
    const testEmailData = {
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || '',
      subject: '🧪 Test de Resend - WEBLABS STUDIO',
      html: `
        <h1>Test de Resend</h1>
        <p>Este es un email de prueba para verificar que Resend funciona correctamente.</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <p><strong>Environment:</strong> ${process.env.VERCEL_ENV || 'development'}</p>
        <p><strong>API Key:</strong> ${process.env.RESEND_API_KEY ? '✅ Configurada' : '❌ No configurada'}</p>
        <p><strong>Contact Email:</strong> ${process.env.CONTACT_EMAIL || '❌ No configurado'}</p>
        <p><strong>From Email:</strong> ${process.env.FROM_EMAIL || '❌ No configurado'}</p>
      `,
      text: `
Test de Resend - WEBLABS STUDIO

Este es un email de prueba para verificar que Resend funciona correctamente.

Timestamp: ${new Date().toISOString()}
Environment: ${process.env.VERCEL_ENV || 'development'}
API Key: ${process.env.RESEND_API_KEY ? 'Configurada' : 'No configurada'}
Contact Email: ${process.env.CONTACT_EMAIL || 'No configurado'}
From Email: ${process.env.FROM_EMAIL || 'No configurado'}
      `
    };

    console.log('🧪 Enviando email de test...', {
      to: testEmailData.to,
      from: testEmailData.from,
      environment: process.env.VERCEL_ENV || 'development',
      timestamp: new Date().toISOString()
    });

    const { data, error } = await resend.emails.send(testEmailData);

    if (error) {
      console.error('❌ Error en test de Resend:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: error.message,
          code: 'RESEND_ERROR',
          timestamp: new Date().toISOString()
        },
        { status: 500 }
      );
    }

    console.log('✅ Test de Resend exitoso:', {
      messageId: data?.id,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true, 
        messageId: data?.id,
        message: 'Email de test enviado correctamente',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error en test de email:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error interno del servidor',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'API de test de email funcionando',
      config: {
        resendApiKey: process.env.RESEND_API_KEY ? '✅ Configurada' : '❌ No configurada',
        contactEmail: process.env.CONTACT_EMAIL || '❌ No configurado',
        fromEmail: process.env.FROM_EMAIL || '❌ No configurado',
        environment: process.env.VERCEL_ENV || 'development'
      },
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}
