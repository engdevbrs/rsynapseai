'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import ServiceCard from '@/components/ui/ServiceCard'
import ClientOnlyFloatingParticles from '@/components/ui/ClientOnlyFloatingParticles'
import { companyData } from '@/lib/data'
import {
  Brain,
  Zap,
  Code,
  MessageSquare,
  Database,
  Lightbulb
} from 'lucide-react'

export default function Services() {
  // Íconos para cada servicio
  const serviceIcons = [Brain, Zap, Code, MessageSquare, Database, Lightbulb]

  return (
    <section id="services" className="relative py-32 lg:py-48 bg-futuristic-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-purple-accent rounded-full blur-3xl"
        />
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
        
        {/* Subtle Floating Particles */}
        <ClientOnlyFloatingParticles count={8} color="bg-neon-cyan" size={1} opacity={0.2} speed={4} />
        <ClientOnlyFloatingParticles count={5} color="bg-electric-blue" size={1} opacity={0.15} speed={3} />
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
              ACERCA DE NUESTROS
              <span className="block text-gradient-subtitle">
                SERVICIOS
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-purple-neon mx-auto rounded-full" style={{ marginTop: 0 }} />
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary mx-auto text-center">
              Descubre cómo nuestras soluciones de inteligencia artificial pueden
              transformar y optimizar tu negocio para un futuro más inteligente.
            </p>
          </motion.div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16">
          {companyData.services.map((service, index) => (
            <ServiceCard
              key={service.id}
              number={service.id}
              title={service.title}
              description={service.description}
              icon={serviceIcons[index]}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom Section - Technology Image Placeholder */}
        <FadeIn delay={0.8} className="mt-16 sm:mt-20 lg:mt-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Digital Transformation Image */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative overflow-hidden rounded-lg order-1 lg:order-2"
            >
              <Image
                src="/images/digital-transformation.png"
                alt="Transformación Digital"
                width={600}
                height={450}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-100 object-contain"
                priority
              />
            </motion.div>

            {/* Right - Additional Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <FadeIn delay={0.9} direction="right">
                     <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text-primary">
                       Soluciones Personalizadas Para Cada Negocio
                     </h3>
              </FadeIn>

              <FadeIn delay={1} direction="right">
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                  {companyData.solutions.title}
                </p>
              </FadeIn>

              <FadeIn delay={1.1} direction="right">
                <div className="space-y-4">
                  <div className="group p-5 rounded-2xl card-futuristic hover:border-neon-cyan/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 card-icon-minimal rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-neon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-text-primary mb-2 text-sm group-hover:text-neon-cyan transition-colors duration-300">
                          {companyData.solutions.personalizedSolutions.title}
                        </h4>
                        <p className="text-xs text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                          {companyData.solutions.personalizedSolutions.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-5 rounded-2xl card-futuristic hover:border-neon-cyan/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 card-icon-minimal rounded-xl flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-neon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-text-primary mb-2 text-sm group-hover:text-neon-cyan transition-colors duration-300">
                          {companyData.solutions.expertise.title}
                        </h4>
                        <p className="text-xs text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                          {companyData.solutions.expertise.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={1.2} direction="right">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.querySelector('#contact')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-electric-blue text-text-primary font-semibold text-base sm:text-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-neon-cyan/20 hover:border-neon-cyan/40"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {companyData.cta}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
