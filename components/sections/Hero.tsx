'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Briefcase, Award, Users } from 'lucide-react'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import ClientOnlyMotionParticles from '@/components/ui/ClientOnlyMotionParticles'
import TypewriterText from '@/components/ui/TypewriterText'
import MouseParallax from '@/components/ui/MouseParallax'
import DataConnections from '@/components/ui/DataConnections'
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-futuristic-gradient py-20 sm:py-16 lg:py-0"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs - Optimized for performance */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-primary rounded-full blur-3xl opacity-30 will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-accent rounded-full blur-3xl opacity-20 will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-accent rounded-full blur-3xl opacity-20 will-change-transform"
        />

        {/* Circuit Pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-30" />

        {/* Holographic Overlay */}
        <div className="absolute inset-0 holographic opacity-20" />

        {/* Data Connection Network */}
        <DataConnections nodeCount={10} className="opacity-40" />

        {/* Subtle Floating Particles */}
        <ClientOnlyMotionParticles
          count={12}
          color="bg-neon-cyan"
          size={1}
          opacity={0.3}
          speed={4}
        />
        <ClientOnlyMotionParticles
          count={8}
          color="bg-electric-blue"
          size={1}
          opacity={0.2}
          speed={5}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Main Title with Stagger Animation */}
            <div className="space-y-3">
              <FadeIn delay={0.2} direction="right">
                <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold leading-tight">
                  <span className="block text-text-primary">RSYNAPSYSEAI</span>
                  <span className="block text-gradient-title">
                    INTELLIGENCE
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.4} direction="right">
                <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-electric-blue mx-auto lg:mx-0 rounded-full" />
              </FadeIn>
            </div>

            {/* Subtitle with Typewriter Effect */}
            <FadeIn delay={0.6} direction="right">
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white min-h-[4rem] flex items-center justify-center lg:justify-start">
                  <TypewriterText
                    texts={[
                      'Transformamos Negocios con IA',
                      'Automatizamos Procesos Inteligentes',
                      'Innovación que Genera Resultados',
                      'El Futuro de tu Empresa, Hoy'
                    ]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseDuration={2500}
                    className="text-gradient-title"
                  />
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-heading text-white min-h-[4rem] flex items-center justify-center lg:justify-start">
                  {companyData.subtitle}
                </p>
              </div>
            </FadeIn>

            {/* CTA Buttons - Enhanced */}
            <FadeIn delay={0.8} direction="right">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center lg:justify-start max-w-2xl mx-auto lg:mx-0">
                {/* Primary CTA Button */}
                <motion.button
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 md:py-4 lg:py-5 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] overflow-hidden transition-all duration-300 w-full sm:w-auto"
                  style={{
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.4), 0 10px 25px -5px rgba(6, 182, 212, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.3)',
                    backgroundSize: '200% 100%',
                  }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 opacity-100"
                    style={{ backgroundSize: '200% 100%' }}
                  />

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span className="drop-shadow-lg">{companyData.cta}</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-xl"
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>

                {/* Secondary Button */}
                <motion.button
                  onClick={scrollToNextSection}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 md:py-4 lg:py-5 bg-gradient-to-r from-purple-accent via-purple-500 to-purple-accent text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] overflow-hidden transition-all duration-300 w-full sm:w-auto"
                  style={{
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.3), 0 10px 25px -5px rgba(168, 85, 247, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.3)',
                    backgroundSize: '200% 100%',
                  }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-accent via-purple-500 to-purple-accent opacity-100"
                    style={{ backgroundSize: '200% 100%' }}
                  />

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="drop-shadow-lg">Ver Servicios</span>
                    <motion.span
                      className="text-xl opacity-70 group-hover:opacity-100 transition-opacity"
                      animate={{ y: [0, 3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      ↓
                    </motion.span>
                  </span>
                </motion.button>
              </div>
            </FadeIn>

            {/* Stats - Enhanced with Color */}
            <FadeIn delay={1} direction="right">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto lg:mx-0 pt-6">
                {/* Stat 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 1.1, duration: 0.3, ease: "easeOut" }}
                  className="group relative flex items-center gap-2 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-400/40 backdrop-blur-sm hover:border-opacity-80 transition-all duration-200 overflow-hidden"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Animated background glow */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-xl"
                  />

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500" />

                  {/* Icon with enhanced styling */}
                    <div className="relative flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 0, 0, 0.2), 0 0 40px rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Text with better styling */}
                  <div className="relative flex-1 min-w-0">
                    <div className="text-lg sm:text-xl font-heading font-bold mb-0.5"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #A855F7 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 6px rgba(6, 182, 212, 0.4))'
                      }}
                    >
                      10+
                    </div>
                    <div className="text-[0.6rem] sm:text-xs text-cyan-300 hover:text-white transition-colors font-semibold leading-tight">
                      AÑOS EXP.
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                  <div className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-gradient-to-tr from-white/20 to-transparent rounded-full" />
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 1.2, duration: 0.3, ease: "easeOut" }}
                  className="group relative flex items-center gap-2 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-400/40 backdrop-blur-sm hover:border-opacity-80 transition-all duration-200 overflow-hidden"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Animated background glow */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-xl"
                  />

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500" />

                  {/* Icon with enhanced styling */}
                    <div className="relative flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 0, 0, 0.2), 0 0 40px rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Text with better styling */}
                  <div className="relative flex-1 min-w-0">
                    <div className="text-lg sm:text-xl font-heading font-bold mb-0.5"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #A855F7 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))'
                      }}
                    >
                      100+
                    </div>
                    <div className="text-[0.6rem] sm:text-xs text-blue-300 hover:text-white transition-colors font-semibold leading-tight">
                      PROYECTOS
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                  <div className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-gradient-to-tr from-white/20 to-transparent rounded-full" />
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 1.3, duration: 0.3, ease: "easeOut" }}
                  className="group relative flex items-center gap-2 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-400/40 backdrop-blur-sm hover:border-opacity-80 transition-all duration-200 overflow-hidden"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Animated background glow */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-xl"
                  />

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500" />

                  {/* Icon with enhanced styling */}
                    <div className="relative flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 0, 0, 0.2), 0 0 40px rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Text with better styling */}
                  <div className="relative flex-1 min-w-0">
                    <div className="text-lg sm:text-xl font-heading font-bold mb-0.5"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #A855F7 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 6px rgba(168, 85, 247, 0.4))'
                      }}
                    >
                      50+
                </div>
                    <div className="text-[0.6rem] sm:text-xs text-purple-300 hover:text-white transition-colors font-semibold leading-tight">
                      CLIENTES
                </div>
                </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                  <div className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-gradient-to-tr from-white/20 to-transparent rounded-full" />
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Visual Element */}
          <FadeIn delay={0.5} direction="left" className="relative">
            <MouseParallax strength={15} className="relative min-h-[400px] lg:h-[600px] flex items-center justify-center py-4 sm:py-8 lg:py-12">
              {/* Container with centered content */}
              <div className="relative z-10 flex items-center justify-center">
                {/* Glow Effect Behind */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-primary via-cyan-accent to-purple-accent opacity-20 blur-3xl rounded-full scale-125" />

                {/* Main Visual - Hero Image */}
              <motion.div
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
                >
                  <Image
                    src="/images/hero-image.png"
                    alt="Inteligencia Artificial - RSYNAPSYSEAI"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                    priority
                  />

                  {/* Corner Accents - Minimal */}
                  <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-neon-cyan/60 rounded-tl-lg" />
                  <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-neon-cyan/60 rounded-tr-lg" />
                  <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-neon-cyan/60 rounded-bl-lg" />
                  <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-neon-cyan/60 rounded-br-lg" />
                </motion.div>

                {/* Floating Tech Icons */}
                  <motion.div
                    animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, 0],
                    }}
                    transition={{
                    duration: 3,
                      repeat: Infinity,
                    delay: 0.5,
                    }}
                  className="absolute top-2 right-2 md:top-4 md:right-4 lg:-top-4 lg:-right-4 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-accent to-blue-primary rounded-xl flex items-center justify-center shadow-lg shadow-cyan-accent/50"
                  >
                  <span className="text-xl md:text-2xl">🤖</span>
                  </motion.div>

                    <motion.div
                      animate={{
                    y: [0, -8, 0],
                    rotate: [0, -5, 0],
                      }}
                      transition={{
                    duration: 3.5,
                        repeat: Infinity,
                    delay: 1,
                  }}
                  className="absolute bottom-2 left-2 md:bottom-4 md:left-4 lg:-bottom-4 lg:-left-4 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-accent to-blue-primary rounded-xl flex items-center justify-center shadow-lg shadow-purple-accent/50"
                >
                  <span className="text-xl md:text-2xl">⚡</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                  className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 lg:-right-8 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-primary to-cyan-accent rounded-lg flex items-center justify-center shadow-lg shadow-blue-primary/50"
                >
                  <span className="text-lg md:text-xl">💡</span>
              </motion.div>
            </div>
            </MouseParallax>
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
          ease: "easeInOut",
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
