'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import { companyData } from '@/lib/data'
import { 
  Award, 
  TrendingUp, 
  CheckCircle,
  Star
} from 'lucide-react'

export default function Mission() {
  return (
    <section id="mission" className="relative py-32 lg:py-48 bg-futuristic-gradient overflow-hidden">
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
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-accent rounded-full blur-3xl"
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
          className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-primary rounded-full blur-3xl"
        />
        
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn delay={0.2} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary" style={{ marginBottom: 0 }}>
              {companyData.mission.title}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-accent to-blue-primary mx-auto rounded-full" style={{ marginTop: 0 }} />
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary mx-auto text-center">
              {companyData.mission.description}
            </p>
          </motion.div>
        </FadeIn>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Large Technology Image */}
          <FadeIn delay={0.3} direction="left">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden rounded-lg"
              >
                <Image
                  src="/images/mision.png"
                  alt="Nuestra Misión"
                  width={600}
                  height={450}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-100 object-contain"
                  priority
                />
              </motion.div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="p-4 rounded-2xl card-futuristic text-center"
                >
                  <Award className="w-6 h-6 text-neon-cyan mx-auto mb-2" />
                  <div className="text-sm font-heading font-semibold text-text-primary mb-1">Excelencia</div>
                  <div className="text-xs text-text-secondary">Técnica</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="p-4 rounded-2xl card-futuristic text-center"
                >
                  <TrendingUp className="w-6 h-6 text-neon-cyan mx-auto mb-2" />
                  <div className="text-sm font-heading font-semibold text-text-primary mb-1">Impacto</div>
                  <div className="text-xs text-text-secondary">Empresarial</div>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Mission Blocks */}
          <FadeIn delay={0.4} direction="right">
            <div className="space-y-10">
              {companyData.mission.blocks.map((block, index) => (
                <motion.div
                  key={block.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.5 + index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                    type: "tween"
                  }}
                  whileHover={{ scale: 1.02, x: -10 }}
                  className="group p-6 lg:p-8 rounded-3xl card-futuristic hover:border-neon-cyan/30 transition-all duration-300 will-change-transform"
                >
                  <div className="flex items-start space-x-6">
                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-16 h-16 card-number-minimal rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-heading font-bold">
                        {block.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl lg:text-2xl font-heading font-semibold text-text-primary mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                        {block.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                        {block.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Mission Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-6 rounded-2xl card-futuristic"
              >
                <h4 className="text-lg font-heading font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-neon-cyan" />
                  Nuestros Valores
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Innovación Constante",
                    "Calidad Superior",
                    "Transparencia Total",
                    "Resultados Medibles"
                  ].map((value) => (
                    <div key={value} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.9} className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative p-8 lg:p-12 rounded-2xl bg-transparent border border-purple-accent/40 transition-all duration-300 hover:border-purple-accent/70"
            style={{
              boxShadow: 'none',
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
                ¿Compartes nuestra visión?
              </motion.h3>

              <p className="text-base sm:text-lg text-gray-300 mx-auto text-center leading-relaxed">
                Únete a nosotros en esta misión de transformar el futuro empresarial
                mediante la inteligencia artificial.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group relative px-8 py-4 bg-transparent text-text-primary font-semibold text-lg rounded-2xl transition-all duration-300 border border-neon-cyan/40 hover:border-neon-cyan/60"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Trabajemos juntos
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
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-accent/50 rounded-tr-lg" />
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-accent/50 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-purple-accent/50 rounded-br-lg" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-purple-accent/50 rounded-bl-lg" />
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
