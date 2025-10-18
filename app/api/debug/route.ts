import { NextResponse } from 'next/server'

export async function GET() {
  // Solo permitir en desarrollo o con autenticación
  if (process.env.NODE_ENV === 'production' && !process.env.DEBUG_ENABLED) {
    return NextResponse.json(
      { error: 'Debug endpoint disabled in production' },
      { status: 403 }
    )
  }

  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

  return NextResponse.json({
    environment: process.env.NODE_ENV,
    emailConfig: {
      hasEmailUser: !!emailUser,
      hasEmailPass: !!emailPass,
      hasGmailAppPassword: !!gmailAppPassword,
      emailUserValue: emailUser ? `${emailUser.split('@')[0]}@gmail.com` : 'Not set',
      emailPassLength: emailPass ? emailPass.length : 0,
      gmailAppPasswordLength: gmailAppPassword ? gmailAppPassword.length : 0,
    },
    recommendations: {
      emailUser: emailUser ? '✅ Configurado' : '❌ Falta configurar EMAIL_USER',
      emailPass: emailPass ? '✅ Configurado' : '❌ Falta configurar EMAIL_PASS',
      gmailAppPassword: gmailAppPassword ? '✅ Configurado' : '❌ Falta configurar GMAIL_APP_PASSWORD',
      nextSteps: !emailUser || (!emailPass && !gmailAppPassword) 
        ? 'Configura las variables de entorno en tu plataforma de hosting'
        : 'Configuración completa, prueba el formulario de contacto'
    },
    timestamp: new Date().toISOString(),
    message: 'Debug endpoint - verifica las variables de entorno'
  })
}
