'use client'

import { motion } from 'framer-motion'
import FadeIn from '@/components/animations/FadeIn'
import { companyData } from '@/lib/data'
import {
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Linkedin,
  Mail,
  MapPin
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
            delay: 2,
          }}
          className="absolute bottom-1/4 -left-40 w-96 h-96 bg-cyan-accent rounded-full blur-3xl"
        />
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-4">
              NUESTRO
              <span className="block text-gradient-subtitle">
                EQUIPO
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-primary to-cyan-accent mx-auto rounded-full mt-6" />
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary mx-auto text-center">
              Conoce al equipo experto detrás de Synapse.ia que hace posible la transformación digital
            </p>
          </motion.div>
        </FadeIn>

        {/* CEO Profile Card */}
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.4}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
                    className="grid lg:grid-cols-5 gap-6 lg:gap-12 items-center p-8 lg:p-12 rounded-3xl card-futuristic border-2 border-neon-cyan/20 shadow-2xl overflow-hidden relative"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-primary/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-accent/10 to-transparent rounded-full blur-3xl" />

              {/* Photo Column */}
              <div className="lg:col-span-2 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Photo Container with Glow */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-accent/30 border-4 border-cyan-accent/30 group">
                    {/* Placeholder Photo */}
                    <div className="aspect-square bg-gradient-to-br from-navy-dark to-navy-medium flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-primary to-cyan-accent flex items-center justify-center shadow-glow-cyan">
                          <Users className="w-16 h-16 text-white" />
                        </div>
                        <p className="text-cyan-accent font-heading text-xl font-bold">
                          {ceo.name}
                        </p>
                        <p className="text-gray-400 text-sm mt-1">{ceo.title}</p>
                      </div>
                    </div>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Decorative Corner Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: 'spring' }}
                    className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-accent to-blue-primary rounded-full flex items-center justify-center shadow-glow-cyan"
                  >
                    <Award className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-3 space-y-6 relative z-10">
                {/* Name and Title */}
                <FadeIn delay={0.5} direction="right">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-2">
                      {ceo.name}
                    </h3>
                    <p className="text-xl text-neon-cyan font-medium">{ceo.title}</p>
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
                  <div className="space-y-3">
                    <h4 className="text-sm font-heading font-bold text-text-muted uppercase tracking-wider">
                      Credenciales
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {ceo.credentials.map((credential, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-navy-dark/50 border border-blue-primary/20 group hover:border-cyan-accent/50 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-primary to-cyan-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            {index < 2 ? (
                              <GraduationCap className="w-4 h-4 text-white" />
                            ) : (
                              <Briefcase className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {credential}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                {/* Contact/Social Links */}
                <FadeIn delay={1} direction="right">
                  <div className="flex flex-wrap gap-3 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-primary/20 hover:bg-blue-primary/30 text-cyan-accent rounded-lg border border-cyan-accent/30 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const contactSection = document.querySelector('#contact')
                        contactSection?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-accent/20 hover:bg-cyan-accent/30 text-cyan-accent rounded-lg border border-cyan-accent/30 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm font-medium">Contactar</span>
                    </motion.button>
                  </div>
                </FadeIn>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Additional Info Section */}
        <FadeIn delay={1.1} className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-navy-medium border border-blue-primary/20 hover:border-cyan-accent/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-primary to-cyan-accent rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-white mb-2">10+</h4>
              <p className="text-gray-400 text-sm">Años de Experiencia</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-navy-medium border border-blue-primary/20 hover:border-cyan-accent/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-accent to-purple-accent rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-white mb-2">50+</h4>
              <p className="text-gray-400 text-sm">Proyectos Completados</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-navy-medium border border-blue-primary/20 hover:border-cyan-accent/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-accent to-blue-primary rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-white mb-2">100%</h4>
              <p className="text-gray-400 text-sm">Satisfacción Cliente</p>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
