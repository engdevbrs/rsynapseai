'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import CircularProgress from '@/components/ui/CircularProgress'
import ClientOnlyFloatingParticles from '@/components/ui/ClientOnlyFloatingParticles'
import { companyData } from '@/lib/data'
import { Brain, Zap, Users, TrendingUp } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Brain,
      title: 'IA Avanzada',
      description: 'Soluciones con tecnología de punta',
    },
    {
      icon: Zap,
      title: 'Automatización',
      description: 'Procesos optimizados y eficientes',
    },
    {
      icon: Users,
      title: 'Equipo Experto',
      description: '10+ años de experiencia',
    },
    {
      icon: TrendingUp,
      title: 'Resultados',
      description: 'ROI comprobado',
    },
  ]

  return (
    <section id="about" className="relative py-24 lg:py-40 bg-futuristic-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-primary rounded-full blur-3xl"
        />
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-15" />
        
        {/* Subtle Floating Particles */}
        <ClientOnlyFloatingParticles count={6} color="bg-neon-cyan" size={1} opacity={0.2} speed={5} />
        <ClientOnlyFloatingParticles count={4} color="bg-electric-blue" size={1} opacity={0.15} speed={4} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn delay={0.2} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary" style={{ marginBottom: 0 }}>
              ACERCA DE
              <span className="block text-gradient-subtitle">
                INTELIGENCIA ARTIFICIAL
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-electric-blue mx-auto rounded-full" style={{ marginTop: 0 }} />
          </motion.div>
        </FadeIn>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Circular Progress & Visual */}
          <FadeIn delay={0.3} direction="left">
            <div className="relative">
              {/* Circular Progress */}
              <div className="flex justify-center lg:justify-start mb-6 lg:mb-8">
                <CircularProgress
                  percentage={companyData.about.percentage}
                  size={240}
                  strokeWidth={16}
                  color="#00d4ff"
                  duration={2.5}
                />
              </div>

              {/* Innovation Image */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden rounded-lg"
              >
                <Image
                  src="/images/innovation.png"
                  alt="Innovación Tecnológica"
                  width={500}
                  height={300}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-contain"
                  priority
                />
              </motion.div>
            </div>
          </FadeIn>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <FadeIn delay={0.4} direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text-primary">
                  {companyData.about.title}
                </h3>
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                  {companyData.about.description}
                </p>
              </div>
            </FadeIn>

            {/* Features Grid */}
            <FadeIn delay={0.6} direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 mt-6 lg:mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-5 sm:p-5 rounded-2xl card-futuristic hover:border-neon-cyan/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 card-icon-minimal rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan" />
                      </div>
                      <div className="flex-1 min-w-0 pr-2 sm:pr-0">
                        <h4 className="font-heading font-semibold text-text-primary text-sm sm:text-base mb-2 group-hover:text-neon-cyan transition-colors duration-300 break-words">
                          {feature.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            {/* CTA Button */}
            <FadeIn delay={0.8} direction="right">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-electric-blue text-text-primary font-semibold text-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-neon-cyan/20 hover:border-neon-cyan/40"
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

        {/* Bottom Section - History */}
        <FadeIn delay={1} className="mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-8 lg:p-12 rounded-2xl bg-transparent border border-purple-accent/40 transition-all duration-300 hover:border-purple-accent/70"
              style={{
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >

              <div className="relative z-10 flex flex-col items-center gap-8">
                <motion.h3
                  className="text-2xl md:text-3xl font-heading font-bold"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #A855F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))'
                  }}
                >
                  {companyData.history.title}
                </motion.h3>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {companyData.history.content}
                </p>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-accent/50 rounded-tr-lg" />
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-accent/50 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-purple-accent/50 rounded-br-lg" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-purple-accent/50 rounded-bl-lg" />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
