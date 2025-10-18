'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { companyData } from '@/lib/data'

export default function Hero() {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-bg-primary py-20"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/50 to-bg-primary pointer-events-none" />

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-heading font-light leading-tight"
                style={{
                  background: 'linear-gradient(90deg, #18cade 0%, #4ade80 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Soluciones de Inteligencia Artificial
                <span className="block font-normal mt-2">
                  para tu negocio
                </span>
              </h2>

              <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl">
                {companyData.subtitle}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-heading font-semibold text-brand-primary mb-1">
                  10+
                </div>
                <div className="text-sm text-text-muted uppercase tracking-wide">
                  Años exp.
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-heading font-semibold text-brand-primary mb-1">
                  100+
                </div>
                <div className="text-sm text-text-muted uppercase tracking-wide">
                  Proyectos
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-heading font-semibold text-brand-primary mb-1">
                  50+
                </div>
                <div className="text-sm text-text-muted uppercase tracking-wide">
                  Clientes
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleContactClick}
                className="group relative px-8 py-4 font-heading font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(90deg, #18cade 0%, #4ade80 100%)',
                }}
              >
                <span className="relative z-10 text-white">
                  {companyData.cta}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-light to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={scrollToServices}
                className="px-8 py-4 border-2 border-brand-primary text-brand-primary font-heading font-semibold text-lg rounded-lg hover:bg-brand-primary/10 transition-all duration-300 hover:scale-105 hover:border-brand-light"
              >
                Ver Servicios
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/hero-image.png"
                alt="Inteligencia Artificial"
                width={500}
                height={500}
                className="w-full h-auto object-contain opacity-80"
                priority
              />
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-brand-primary/10 blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
