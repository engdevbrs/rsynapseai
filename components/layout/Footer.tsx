'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import { companyData } from '@/lib/data'

export default function Footer() {
  // Función para scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Función para navegar a secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-bg-tertiary border-t border-brand-primary/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-accent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <FadeIn delay={0.2} direction="up" className="lg:col-span-2">
              <div className="space-y-6">
                {/* Logo */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => scrollToSection('home')}
                >
                  <Image
                    src="/images/logo-realistic.png"
                    alt="synapse.ai Logo"
                    height={80}
                    width={140}
                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed max-w-md">
                  {companyData.subtitle}
                </p>
              </div>
            </FadeIn>

            {/* Quick Links */}
            <FadeIn delay={0.3} direction="up">
              <div className="space-y-6">
                <h4 className="text-lg font-heading font-bold text-white">
                  Enlaces Rápidos
                </h4>
                <nav className="space-y-3">
                  {companyData.navigation.map((item) => (
                    <motion.button
                      key={item.label}
                      onClick={() => scrollToSection(item.href.replace('#', ''))}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="block text-gray-300 hover:text-cyan-accent transition-all duration-300 text-sm font-medium group"
                    >
                      <span className="relative">
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-accent to-blue-primary group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </FadeIn>

            {/* Services */}
            <FadeIn delay={0.4} direction="up">
              <div className="space-y-6">
                <h4 className="text-lg font-heading font-bold text-white">
                  Servicios
                </h4>
                <div className="space-y-3">
                  {companyData.services.slice(0, 4).map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="text-gray-300 hover:text-cyan-accent transition-all duration-300 text-sm cursor-pointer font-medium group"
                    >
                      <span className="relative">
                        {service.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-accent to-blue-primary group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-primary/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-text-primary text-sm font-medium">
              © {new Date().getFullYear()} synapse.ai. Todos los derechos reservados.
            </p>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-brand-primary/10 hover:bg-brand-primary/20 border border-brand-primary/30 rounded-lg transition-all duration-300 cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4 text-brand-primary" />
              <span className="text-sm text-text-secondary">
                Volver arriba
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}