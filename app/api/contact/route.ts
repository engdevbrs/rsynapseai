import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData, contactFormSchema } from '@/lib/validations'
import nodemailer from 'nodemailer'

// Función para crear transporter con credenciales validadas
function createTransporter() {
  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD

  if (!emailUser || !emailPass) {
    throw new Error('Credenciales de email no configuradas')
  }

  // Detectar si es Gmail o SiteGround
  const isGmail = emailUser.includes('@gmail.com')

  if (isGmail) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })
  } else {
    // Configuración para SiteGround u otros proveedores
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'gtxm1002.siteground.biz',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })
  }
}

// Verificar configuración de email
function validateEmailConfig() {
  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD
  
  if (!emailUser) {
    throw new Error('EMAIL_USER no está configurado. Configura la variable de entorno EMAIL_USER')
  }
  
  if (!emailPass) {
    throw new Error('EMAIL_PASS o GMAIL_APP_PASSWORD no está configurado. Configura una de estas variables de entorno')
  }
  
  return { emailUser, emailPass }
}

// Función para enviar email
async function sendEmail(data: ContactFormData) {
  // Validar configuración antes de enviar
  validateEmailConfig()
  
  // Crear transporter con credenciales validadas
  const transporter = createTransporter()
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'contacto@rsynapseai.com',
    subject: `Nuevo mensaje de contacto de ${data.name}`,
    html: generateEmailTemplate(data),
  }

  try {
    // Verificar conexión del transporter
    await transporter.verify()
    console.log('✅ Conexión SMTP verificada correctamente')
    
    const result = await transporter.sendMail(mailOptions)
    console.log('✅ Email enviado exitosamente:', result.messageId)
    return result
  } catch (error) {
    console.error('❌ Error al enviar email:', error)
    
    // Proporcionar mensajes de error más específicos
    if (error instanceof Error) {
      if (error.message.includes('Invalid login') || error.message.includes('EAUTH')) {
        throw new Error('Credenciales de email inválidas. Verifica EMAIL_USER y EMAIL_PASS')
      } else if (error.message.includes('Connection timeout')) {
        throw new Error('Timeout de conexión con el servidor de email')
      } else if (error.message.includes('Authentication failed')) {
        throw new Error('Autenticación fallida. Verifica las credenciales de Gmail')
      } else if (error.message.includes('Missing credentials')) {
        throw new Error('Credenciales de email faltantes. Configura EMAIL_USER y EMAIL_PASS')
      }
    }
    
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar los datos del formulario
    const validatedData = contactFormSchema.parse(body)

    console.log('📧 Nuevo mensaje de contacto recibido:', {
      timestamp: new Date().toISOString(),
      data: validatedData,
    })

    // Verificar configuración de email antes de intentar enviar
    try {
      validateEmailConfig()
    } catch (configError) {
      console.error('❌ Error de configuración de email:', configError)
      return NextResponse.json(
        {
          success: false,
          message: 'Configuración de email no disponible. Contacta al administrador.',
          error: process.env.NODE_ENV === 'development' ? (configError instanceof Error ? configError.message : String(configError)) : undefined,
        },
        { status: 500 }
      )
    }

    // Enviar email real
    await sendEmail(validatedData)

    // Respuesta de éxito
    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado exitosamente',
        data: {
          id: `msg_${Date.now()}`,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Error en API de contacto:', error)

    // Si es un error de validación de Zod
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Datos del formulario inválidos',
          errors: error.message,
        },
        { status: 400 }
      )
    }

    // Si es un error de configuración de email
    if (error instanceof Error && error.message.includes('Configuración de email')) {
      return NextResponse.json(
        {
          success: false,
          message: 'Configuración de email no disponible. Contacta al administrador.',
          error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        },
        { status: 500 }
      )
    }

    // Si es un error de envío de email
    if (error instanceof Error && (error.message.includes('email') || error.message.includes('SMTP') || error.message.includes('Gmail'))) {
      return NextResponse.json(
        {
          success: false,
          message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
          error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        },
        { status: 500 }
      )
    }

    // Error interno del servidor
    return NextResponse.json(
      {
        success: false,
        message: 'Error interno del servidor. Por favor, inténtalo de nuevo.',
        error: process.env.NODE_ENV === 'development' ? error : undefined,
      },
      { status: 500 }
    )
  }
}

// Función auxiliar para generar el template del email (opcional)
function generateEmailTemplate(data: ContactFormData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #5b7cff;">Nuevo mensaje de contacto - RSYNAPSYSEAI</h2>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Información del contacto:</h3>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
        ${data.company ? `<p><strong>Entidad:</strong> ${data.company}</p>` : ''}
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
        <p style="white-space: pre-wrap;">${data.message}</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
        <p>Este mensaje fue enviado desde el formulario de contacto de RSYNAPSYSEAI</p>
        <p>Fecha: ${new Date().toLocaleString('es-ES')}</p>
      </div>
    </div>
  `
}

// Método GET para verificar que la API está funcionando
export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: 'API de contacto funcionando correctamente',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  )
}
