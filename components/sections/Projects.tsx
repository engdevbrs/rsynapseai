'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import { companyData } from '@/lib/data'
import { 
  Brain, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  ArrowRight,
  Clock,
  CheckCircle,
  Lightbulb,
  Code
} from 'lucide-react'

export default function Projects() {
  // Íconos para cada proyecto
  const projectIcons = [Brain, Zap, MessageSquare, TrendingUp]
  
  // Colores para cada estado
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En desarrollo':
        return 'text-green-400 bg-green-400/10 border-green-400/20'
      case 'Planificación':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
      case 'Investigación':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
      case 'Concepto':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20'
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  }

  // Íconos para cada estado
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'En desarrollo':
        return <Code className="w-4 h-4" />
      case 'Planificación':
        return <Clock className="w-4 h-4" />
      case 'Investigación':
        return <Lightbulb className="w-4 h-4" />
      case 'Concepto':
        return <CheckCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <section id="projects" className="relative py-32 lg:py-48 bg-futuristic-gradient overflow-hidden">
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
          className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-accent rounded-full blur-3xl"
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
              NUESTROS
              <span className="block text-gradient-subtitle">
                PROYECTOS
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-accent to-cyan-accent mx-auto rounded-full mt-6" />
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary mx-auto text-center">
              Descubre los proyectos innovadores que estamos desarrollando para revolucionar 
              el futuro de la inteligencia artificial empresarial.
            </p>
          </motion.div>
        </FadeIn>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Column - Projects List */}
          <FadeIn delay={0.3} direction="left">
            <div className="space-y-6 sm:space-y-8">
              {companyData.projects.map((project, index) => {
                const IconComponent = projectIcons[index]
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group p-4 sm:p-6 rounded-3xl card-futuristic hover:border-neon-cyan/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      {/* Project Icon */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 card-icon-minimal rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan" />
                      </div>

                      {/* Project Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                          <h3 className="text-sm sm:text-base lg:text-lg font-heading font-semibold text-text-primary group-hover:text-neon-cyan transition-colors duration-300">
                            {project.title}
                          </h3>
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 w-fit ${getStatusColor(project.status)}`}>
                            {getStatusIcon(project.status)}
                            <span className="hidden sm:inline">{project.status}</span>
                            <span className="sm:hidden">{project.status.split(' ')[0]}</span>
                          </span>
                        </div>
                        
                        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 group-hover:text-text-primary transition-colors duration-300">
                          {project.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-neon-cyan font-medium">
                            {project.category}
                          </span>
                          <motion.div
                            className="text-neon-cyan group-hover:text-electric-blue transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </FadeIn>

          {/* Right Column - Technology Image */}
          <FadeIn delay={0.4} direction="right">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden rounded-lg"
              >
                <Image
                  src="/images/future-technology.png"
                  alt="Tecnología Futura"
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
                  className="p-4 rounded-lg bg-navy-medium/50 border border-purple-accent/20 text-center"
                >
                  <div className="text-2xl font-heading font-bold text-purple-accent mb-1">4+</div>
                  <div className="text-xs text-gray-400">Proyectos Activos</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="p-4 rounded-lg bg-navy-medium/50 border border-cyan-accent/20 text-center"
                >
                  <div className="text-2xl font-heading font-bold text-cyan-accent mb-1">2025</div>
                  <div className="text-xs text-gray-400">Lanzamiento</div>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.8} className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-navy-medium to-navy-light border border-purple-accent/20 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(217, 70, 239, 0.5) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
                ¿Interesado en nuestros proyectos?
              </h3>
              <p className="text-lg text-text-secondary mb-6 mx-auto text-center">
                Mantente al día con nuestros últimos desarrollos y sé el primero en conocer 
                las innovaciones que estamos creando.
              </p>
              
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
                  Mantenerse informado
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
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
