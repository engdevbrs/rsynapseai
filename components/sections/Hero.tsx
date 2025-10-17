'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import ClientOnlyMotionParticles from '@/components/ui/ClientOnlyMotionParticles'
import { companyData } from '@/lib/data'

export default function Hero() {
  const scrollToNextSection = () => {
    const servicesSection = document.querySelector('#services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-futuristic-gradient"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-primary rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-accent rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-accent rounded-full blur-3xl opacity-20"
        />

        {/* Circuit Pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
        
        {/* Holographic Overlay */}
        <div className="absolute inset-0 holographic opacity-20" />
        
        {/* Subtle Floating Particles */}
        <ClientOnlyMotionParticles 
          count={8} 
          color="bg-neon-cyan" 
          size={1} 
          opacity={0.2} 
          speed={4} 
        />
        <ClientOnlyMotionParticles 
          count={5} 
          color="bg-electric-blue" 
          size={1} 
          opacity={0.15} 
          speed={5} 
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Main Title with Stagger Animation */}
            <div className="space-y-4">
              <FadeIn delay={0.2} direction="right">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-tight">
                  <span className="block text-text-primary">SYNAPSYS</span>
                  <span className="block text-gradient-title">
                    INTELLIGENCE
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.4} direction="right">
                <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-electric-blue mx-auto lg:mx-0 rounded-full" />
              </FadeIn>
            </div>

            {/* Subtitle */}
            <FadeIn delay={0.6} direction="right">
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white">
                  {companyData.tagline}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                  {companyData.subtitle}
                </p>
              </div>
            </FadeIn>

            {/* CTA Button */}
            <FadeIn delay={0.8} direction="right">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <motion.button
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-electric-blue text-text-primary font-semibold text-base sm:text-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-neon-cyan/20 hover:border-neon-cyan/40"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
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
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-accent to-purple-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>

                <motion.button
                  onClick={scrollToNextSection}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white font-bold text-lg rounded-lg transition-all duration-300"
                >
                  Ver Servicios
                </motion.button>
              </div>
            </FadeIn>

            {/* Stats or Features */}
            <FadeIn delay={1} direction="right">
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-heading font-bold text-cyan-accent">10+</div>
                  <div className="text-sm text-gray-400">Años Experiencia</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-heading font-bold text-cyan-accent">100+</div>
                  <div className="text-sm text-gray-400">Proyectos</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-heading font-bold text-cyan-accent">50+</div>
                  <div className="text-sm text-gray-400">Clientes</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Visual Element */}
          <FadeIn delay={0.5} direction="left" className="relative">
            <div className="relative lg:h-[600px] flex items-center justify-center">
              {/* Placeholder for Robot Image */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                {/* Glow Effect Behind */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-primary via-cyan-accent to-purple-accent opacity-30 blur-3xl rounded-full scale-150" />

                {/* Main Visual - Hero Image */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
                >
                  <Image
                    src="/images/hero-image.png"
                    alt="Inteligencia Artificial - Synapse.ia"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNextSection}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-accent hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Descubre más</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.button>
    </section>
  )
}
