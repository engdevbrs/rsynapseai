import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData, contactFormSchema } from '@/lib/validations'
import nodemailer from 'nodemailer'

// Configuración del transporter de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'rsynapseai@gmail.com',
    pass: process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD,
  },
})

// Función para enviar email
async function sendEmail(data: ContactFormData) {
  const mailOptions = {
    from: process.env.EMAIL_USER || 'rsynapseai@gmail.com',
    to: 'rsynapseai@gmail.com',
    subject: `Nuevo mensaje de contacto de ${data.name}`,
    html: generateEmailTemplate(data),
  }

  try {
    const result = await transporter.sendMail(mailOptions)
    console.log('✅ Email enviado exitosamente:', result.messageId)
    return result
  } catch (error) {
    console.error('❌ Error al enviar email:', error)
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

    // Si es un error de envío de email
    if (error instanceof Error && error.message.includes('email')) {
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
        ${data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : ''}
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
