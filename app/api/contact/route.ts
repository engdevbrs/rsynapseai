import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData, contactFormSchema } from '@/lib/validations'
import { companyData } from '@/lib/data'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar los datos del formulario
    const validatedData = contactFormSchema.parse(body)

    // Simular envío de email (aquí integrarías con un servicio real como Resend, SendGrid, etc.)
    console.log('📧 Nuevo mensaje de contacto recibido:', {
      timestamp: new Date().toISOString(),
      data: validatedData,
    })

    // En un entorno de producción, aquí enviarías el email real:
    // await sendEmail({
    //   to: companyData.contact.email,
    //   from: 'noreply@synapse.ia',
    //   subject: `Nuevo mensaje de contacto de ${validatedData.name}`,
    //   html: generateEmailTemplate(validatedData),
    // })

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

    // Error interno del servidor
    return NextResponse.json(
      {
        success: false,
        message: 'Error interno del servidor. Por favor, inténtalo de nuevo.',
      },
      { status: 500 }
    )
  }
}

// Función auxiliar para generar el template del email (opcional)
function generateEmailTemplate(data: ContactFormData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #5b7cff;">Nuevo mensaje de contacto - Synapse.ia</h2>
      
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
        <p>Este mensaje fue enviado desde el formulario de contacto de synapse.ia</p>
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
