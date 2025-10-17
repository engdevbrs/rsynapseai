'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import { companyData } from '@/lib/data'
import {
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Linkedin
} from 'lucide-react'

export default function Team() {
  const { ceo } = companyData

  return (
    <section id="team" className="relative py-20 lg:py-32 bg-futuristic-gradient overflow-hidden">
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
          className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-accent rounded-full blur-3xl"
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
            delay: 1,
          }}
          className="absolute bottom-1/4 -left-40 w-96 h-96 bg-cyan-accent rounded-full blur-3xl"
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
              NUESTRO
              <span className="block text-gradient-subtitle">
                EQUIPO
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-primary to-cyan-accent mx-auto rounded-full" style={{ marginTop: 0 }} />
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary mx-auto text-center">
              Conoce al equipo experto detrás de RSYNAPSYSEAI que hace posible la transformación digital
            </p>
          </motion.div>
        </FadeIn>

        {/* CEO Profile Card */}
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.4}>
            <motion.div
              className="group grid lg:grid-cols-5 gap-8 lg:gap-16 items-center p-10 lg:p-16 rounded-3xl bg-gradient-to-br from-cyan-accent/20 via-blue-primary/15 to-purple-accent/10 border-2 border-cyan-accent/50 backdrop-blur-xl hover:border-cyan-accent/80 shadow-2xl overflow-hidden relative transition-all duration-100"
              style={{
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.3), 0 25px 50px -10px rgba(6, 182, 212, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
              }}
            >

              {/* Photo Column */}
              <div className="lg:col-span-2 relative z-10">
                <div className="relative">
                  {/* Photo Container */}
                  <div className="relative rounded-2xl overflow-hidden border-4 border-cyan-accent/50">
                    {/* Profile Photo */}
                    <div className="aspect-square relative">
                      <Image
                        src="/images/profile.jpg"
                        alt={`${ceo.name} - ${ceo.title}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                      {/* Overlay with name and title */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                        <p className="font-heading text-xl font-bold text-white" style={{
                          backgroundImage: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}>
                          {ceo.name}
                        </p>
                        <p className="text-gray-300 text-sm mt-1">{ceo.title}</p>
                      </div>
                    </div>
                  </div>
                  </div>

                {/* Decorative Corner Badge - Moved outside photo container */}
                <div
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-accent to-blue-primary rounded-full flex items-center justify-center z-30 p-6"
                >
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-3 space-y-6 relative z-10">
                {/* Name and Title */}
                <FadeIn delay={0.5} direction="right">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2" style={{
                      backgroundImage: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #A855F7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))'
                    }}>
                      {ceo.name}
                    </h3>
                    <p className="text-xl font-medium" style={{
                      backgroundImage: 'linear-gradient(90deg, #06B6D4 0%, #3B82F6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>{ceo.title}</p>
                  </div>
                </FadeIn>

                {/* Bio */}
                <FadeIn delay={0.6} direction="right">
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {ceo.bio}
                  </p>
                </FadeIn>

                {/* Credentials */}
                <FadeIn delay={0.7} direction="right">
                  <div>
                    <h4 className="text-lg font-heading font-bold uppercase tracking-wider" style={{
                      backgroundImage: 'linear-gradient(90deg, #00FFFF 0%, #3B82F6 35%, #A855F7 70%, #EC4899 100%)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'shimmer 3s linear infinite',
                      filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.4))',
                      marginBottom: '16px'
                    }}>
                      Credenciales
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {ceo.credentials.map((credential, index) => {
                        const colors = [
                          { bg: 'from-cyan-500/20 to-blue-500/10', border: 'border-cyan-400/40', icon: 'from-cyan-500 to-blue-500', text: 'text-cyan-300' },
                          { bg: 'from-blue-500/20 to-purple-500/10', border: 'border-blue-400/40', icon: 'from-blue-500 to-purple-500', text: 'text-blue-300' },
                          { bg: 'from-purple-500/20 to-pink-500/10', border: 'border-purple-400/40', icon: 'from-purple-500 to-pink-500', text: 'text-purple-300' },
                          { bg: 'from-pink-500/20 to-red-500/10', border: 'border-pink-400/40', icon: 'from-pink-500 to-red-500', text: 'text-pink-300' },
                          { bg: 'from-green-500/20 to-emerald-500/10', border: 'border-green-400/40', icon: 'from-green-500 to-emerald-500', text: 'text-green-300' }
                        ]
                        const colorScheme = colors[index % colors.length]
                        
                        return (
                        <motion.div
                          key={index}
                            initial={{ opacity: 0, x: -20, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                          viewport={{ once: true }}
                            transition={{ delay: 0.8 + index * 0.1, type: 'spring', stiffness: 100 }}
                            whileHover={{ scale: 1.05, x: 8, y: -5 }}
                            className={`group relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br ${colorScheme.bg} border ${colorScheme.border} backdrop-blur-sm hover:border-opacity-80 transition-all duration-400 overflow-hidden`}
                            style={{
                              boxShadow: `0 0 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
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
                                delay: index * 0.2
                              }}
                              className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bg} rounded-2xl`}
                            />

                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />

                            {/* Icon with enhanced styling */}
                            <div className={`relative flex-shrink-0 w-12 h-12 bg-gradient-to-br ${colorScheme.icon} rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg`}
                              style={{
                                boxShadow: `0 0 20px rgba(0, 0, 0, 0.2), 0 0 40px ${colorScheme.icon.includes('cyan') ? 'rgba(6, 182, 212, 0.3)' : colorScheme.icon.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : colorScheme.icon.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : colorScheme.icon.includes('pink') ? 'rgba(236, 72, 153, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`
                              }}
                            >
                            {index < 2 ? (
                                <GraduationCap className="w-6 h-6 text-white" />
                            ) : (
                                <Briefcase className="w-6 h-6 text-white" />
                            )}
                          </div>
                            
                            {/* Text with better styling */}
                            <span className={`relative text-sm ${colorScheme.text} hover:text-white transition-colors font-semibold leading-relaxed`}>
                            {credential}
                          </span>

                            {/* Decorative corner elements */}
                            <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                            <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-tr from-white/20 to-transparent rounded-full" />
                        </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </FadeIn>

                {/* Contact/Social Links */}
                <FadeIn delay={1} direction="right">
                  <div className="flex flex-wrap gap-4 pt-6">
                    <motion.button
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        window.open('https://www.linkedin.com/in/rodolfo-cristian-figueroa-portuguez-6973aa89/', '_blank')
                      }}
                      className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 text-cyan-300 hover:text-white rounded-xl border border-cyan-400/40 hover:border-cyan-400/70 transition-all duration-300 overflow-hidden"
                      style={{
                        boxShadow: '0 0 20px rgba(6, 182, 212, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {/* Animated background */}
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                      />
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      
                      <Linkedin className="w-5 h-5 relative z-10" />
                      <span className="text-sm font-semibold relative z-10">LinkedIn</span>
                    </motion.button>
                  </div>
                </FadeIn>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Additional Info Section */}
        <FadeIn delay={1.1} className="mt-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05, x: 8, y: -5 }}
              className="group relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-400/40 backdrop-blur-sm hover:border-opacity-80 transition-all duration-400 overflow-hidden"
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
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-2xl"
              />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Icon with enhanced styling */}
              <div className="relative flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.2), 0 0 40px rgba(6, 182, 212, 0.3)'
                }}
              >
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              
              {/* Text with better styling */}
              <div className="relative flex-1">
                <div className="text-2xl font-heading font-bold mb-1"
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
                <span className="text-sm text-cyan-300 hover:text-white transition-colors font-semibold leading-relaxed">
                  AÑOS EXPERIENCIA
                </span>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-tr from-white/20 to-transparent rounded-full" />
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05, x: 8, y: -5 }}
              className="group relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-400/40 backdrop-blur-sm hover:border-opacity-80 transition-all duration-400 overflow-hidden"
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
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-2xl"
              />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Icon with enhanced styling */}
              <div className="relative flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.2), 0 0 40px rgba(59, 130, 246, 0.3)'
                }}
              >
                <Award className="w-6 h-6 text-white" />
              </div>
              
              {/* Text with better styling */}
              <div className="relative flex-1">
                <div className="text-2xl font-heading font-bold mb-1"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #A855F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))'
                  }}
                >
                  50+
                </div>
                <span className="text-sm text-blue-300 hover:text-white transition-colors font-semibold leading-relaxed">
                  PROYECTOS
                </span>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-tr from-white/20 to-transparent rounded-full" />
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05, x: 8, y: -5 }}
              className="group relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-400/40 backdrop-blur-sm hover:border-opacity-80 transition-all duration-400 overflow-hidden"
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
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-2xl"
              />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Icon with enhanced styling */}
              <div className="relative flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.2), 0 0 40px rgba(168, 85, 247, 0.3)'
                }}
              >
                <Users className="w-6 h-6 text-white" />
              </div>
              
              {/* Text with better styling */}
              <div className="relative flex-1">
                <div className="text-2xl font-heading font-bold mb-1"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #A855F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 6px rgba(168, 85, 247, 0.4))'
                  }}
                >
                  100%
                </div>
                <span className="text-sm text-purple-300 hover:text-white transition-colors font-semibold leading-relaxed">
                  SATISFACCIÓN
                </span>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-tr from-white/20 to-transparent rounded-full" />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
