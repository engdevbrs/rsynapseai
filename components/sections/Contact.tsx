'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, CheckCircle, AlertCircle, Linkedin, Twitter, Github, Instagram } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { companyData } from '@/lib/data'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return Linkedin
      case 'twitter':
        return Twitter
      case 'github':
        return Github
      case 'instagram':
        return Instagram
      default:
        return Linkedin
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-bg-secondary">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            className="text-3xl lg:text-4xl font-heading font-semibold mb-4"
            style={{
              background: 'linear-gradient(90deg, #18cade 0%, #4ade80 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Contacto
          </h2>
          <div className="h-1 w-20 bg-brand-primary rounded-full" />
          <p className="mt-6 text-lg text-text-secondary max-w-3xl">
            ¿Listo para transformar tu negocio? Contáctanos y comencemos a trabajar juntos.
          </p>
        </div>

        {/* Información de Contacto y Formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Información de Contacto - Columna Izquierda */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Información de Contacto
              </h3>
              <p className="text-text-secondary leading-relaxed">
                ¿Tienes un proyecto en mente o necesitas asesoría en IA?
                Nuestro equipo está disponible para ayudarte a encontrar la solución adecuada para tu negocio.
              </p>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 text-text-primary">
                Síguenos
              </h4>
              <div className="flex gap-4">
                {companyData.socialMedia.map((social) => {
                  const Icon = getSocialIcon(social.icon)
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer"
                      style={{
                        background: 'linear-gradient(#0f1936, #0f1936) padding-box, linear-gradient(90deg, #18cade 0%, #4ade80 100%) border-box',
                        border: '1px solid transparent',
                      }}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-brand-primary group-hover:text-brand-light transition-colors duration-300" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Formulario de Contacto - Columna Derecha */}
          <div className="bg-bg-tertiary border border-brand-primary/10 rounded-lg p-8">
            <h3 className="text-xl font-heading font-semibold mb-6">
              Envíanos un Mensaje
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                  Nombre Completo *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-bg-secondary border border-brand-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors"
                  placeholder="Tu nombre completo"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-bg-secondary border border-brand-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                  Teléfono (Opcional)
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-bg-secondary border border-brand-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors"
                  placeholder="+56 (9) 1234-5678"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Entidad */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">
                  Entidad (Opcional)
                </label>
                <input
                  {...register('company')}
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-bg-secondary border border-brand-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors"
                  placeholder="Tu empresa, organización o nombre"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Mensaje *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-secondary border border-brand-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Botón de Envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white font-heading font-semibold py-4 px-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #18cade 0%, #4ade80 100%)',
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>

              {/* Mensajes de Estado */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>Error al enviar el mensaje. Por favor, inténtalo de nuevo.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
