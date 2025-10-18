'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import FadeIn from '@/components/animations/FadeIn'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'

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
    <section id="contact" className="relative py-32 lg:py-48 bg-futuristic-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-0 -left-40 w-96 h-96 bg-cyan-accent rounded-full blur-3xl"
        />
        
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn delay={0.2} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center"
          >
                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary" style={{ marginBottom: 0 }}>
              CONTACTO
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-primary to-cyan-accent mx-auto rounded-full" style={{ marginTop: 0 }} />
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary mx-auto text-center">
              ¿Listo para transformar tu negocio? Contáctanos y comencemos a trabajar juntos
            </p>
          </motion.div>
        </FadeIn>

        {/* Información de Contacto y Formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Información de Contacto - Columna Izquierda */}
          <FadeIn delay={0.3} direction="left">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                  Información de Contacto
                </h3>
                <p className="text-lg text-text-secondary">
                  ¿Tienes una idea revolucionaria? ¿Necesitas transformar tu negocio con IA? 
                  Cualquier duda o consulta no dudes en contactarnos. Nuestro equipo de expertos 
                  está listo para convertir tus visiones en realidad tecnológica. 
                  <span className="text-neon-cyan font-semibold"> ¡El futuro de tu empresa comienza con una conversación!</span>
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Formulario de Contacto - Columna Derecha */}
          <FadeIn delay={0.4} direction="right">
            <div className="card-futuristic rounded-2xl p-6 sm:p-8">
                     <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">
                       Envíanos un Mensaje
                     </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-card-secondary border border-neon-cyan/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error flex items-center">
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
                      className="w-full px-4 py-3 bg-card-secondary border border-neon-cyan/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error flex items-center">
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
                      className="w-full px-4 py-3 bg-card-secondary border border-neon-cyan/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan transition-all duration-300"
                      placeholder="+56 (9) 1234-5678"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-error flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Empresa */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">
                      Empresa (Opcional)
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 bg-card-secondary border border-neon-cyan/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan transition-all duration-300"
                      placeholder="Nombre de tu empresa"
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
                      className="w-full px-4 py-3 bg-card-secondary border border-neon-cyan/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan transition-all duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-error flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Botón de Envío */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-neon-cyan to-electric-blue text-text-primary font-semibold py-4 px-8 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl border border-neon-cyan/20 hover:border-neon-cyan/40"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-text-primary border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </motion.button>

                  {/* Mensajes de Estado */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-success bg-success/10 p-3 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-error bg-error/10 p-3 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Error al enviar el mensaje. Por favor, inténtalo de nuevo.</span>
                    </motion.div>
                  )}
                </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
