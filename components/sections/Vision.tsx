'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import { companyData } from '@/lib/data'
import { 
  Users, 
  Lightbulb, 
  Building,
  Award,
  Heart,
  Clock
} from 'lucide-react'

export default function Vision() {
  return (
    <section id="vision" className="relative py-32 lg:py-48 bg-futuristic-gradient overflow-hidden">
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
          className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-accent rounded-full blur-3xl"
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
          className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-primary rounded-full blur-3xl"
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
              {companyData.vision.title}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-accent to-blue-primary mx-auto rounded-full" style={{ marginTop: 0 }} />
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary mx-auto text-center">
              {companyData.vision.description}
            </p>
          </motion.div>
        </FadeIn>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Vision Blocks */}
          <FadeIn delay={0.3} direction="left">
            <div className="space-y-8">
              {companyData.vision.blocks.map((block, index) => (
                <motion.div
                  key={block.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.4 + index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                    type: "tween"
                  }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group p-6 lg:p-8 rounded-3xl card-futuristic hover:border-neon-cyan/30 transition-all duration-300 will-change-transform"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    perspective: 1000,
                    transformStyle: 'preserve-3d'
                  }}
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
            </div>
          </FadeIn>

          {/* Right Column - Robot Images Grid */}
          <FadeIn delay={0.4} direction="right">
            <div className="relative">
              {/* Main Vision Image */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden rounded-lg mb-6"
              >
                <Image
                  src="/images/vision.png"
                  alt="Nuestra Visión"
                  width={600}
                  height={450}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-contain"
                  priority
                />
              </motion.div>

              {/* Additional Robot Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, text: "Humanos + IA" },
                  { icon: Lightbulb, text: "Innovación" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg bg-navy-dark/50 border border-cyan-accent/20 text-center group hover:border-cyan-accent/50 transition-all duration-300"
                  >
                    <item.icon className="w-8 h-8 text-cyan-accent mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Stats */}
        <FadeIn delay={0.8} className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { number: "100+", label: "Empresas Transformadas", icon: Building, colorScheme: { bg: "from-cyan-500/20 to-blue-500/10", border: "border-cyan-400/40", icon: "from-cyan-500 to-blue-500", text: "text-cyan-300" } },
              { number: "50+", label: "Proyectos Exitosos", icon: Award, colorScheme: { bg: "from-blue-500/20 to-purple-500/10", border: "border-blue-400/40", icon: "from-blue-500 to-purple-500", text: "text-blue-300" } },
              { number: "95%", label: "Satisfacción Cliente", icon: Heart, colorScheme: { bg: "from-purple-500/20 to-pink-500/10", border: "border-purple-400/40", icon: "from-purple-500 to-pink-500", text: "text-purple-300" } },
              { number: "24/7", label: "Soporte Técnico", icon: Clock, colorScheme: { bg: "from-green-500/20 to-emerald-500/10", border: "border-green-400/40", icon: "from-green-500 to-emerald-500", text: "text-green-300" } },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05, x: 8, y: -5 }}
                className={`group relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br ${stat.colorScheme.bg} border ${stat.colorScheme.border} backdrop-blur-sm hover:border-opacity-80 transition-all duration-400 overflow-hidden`}
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
                    delay: index * 0.2
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${stat.colorScheme.bg} rounded-2xl`}
                />

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Icon with enhanced styling */}
                <div className={`relative flex-shrink-0 w-12 h-12 bg-gradient-to-br ${stat.colorScheme.icon} rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg`}
                  style={{
                    boxShadow: `0 0 20px rgba(0, 0, 0, 0.2), 0 0 40px ${stat.colorScheme.icon.includes('cyan') ? 'rgba(6, 182, 212, 0.3)' : stat.colorScheme.icon.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : stat.colorScheme.icon.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`
                  }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
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
                    {stat.number}
                  </div>
                  <span className={`text-sm ${stat.colorScheme.text} hover:text-white transition-colors font-semibold leading-relaxed`}>
                    {stat.label}
                  </span>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-tr from-white/20 to-transparent rounded-full" />
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
