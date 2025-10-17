'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  number: string
  title: string
  description: string
  icon?: LucideIcon
  delay?: number
}

export default function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="group relative p-8 rounded-3xl card-futuristic transition-all duration-300 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/0 to-cyan-accent/0 group-hover:from-blue-primary/10 group-hover:to-cyan-accent/10 transition-all duration-300 rounded-2xl" />

      {/* Number Badge */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0 w-14 h-14 card-number-minimal rounded-2xl flex items-center justify-center"
        >
          <span className="text-xl font-heading font-bold">
            {number}
          </span>
        </motion.div>

        {/* Icon */}
        {Icon && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="w-10 h-10 card-icon-minimal rounded-xl flex items-center justify-center text-neon-cyan/60 group-hover:text-neon-cyan transition-colors duration-300"
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-3">
        <h3 className="text-xl font-heading card-title-minimal group-hover:text-neon-cyan transition-colors duration-300 leading-tight mb-3">
          {title}
        </h3>
        <p className="card-description-minimal group-hover:text-text-primary transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Subtle Accent Line */}
      <div className="card-accent-line absolute bottom-0 left-0 right-0" />
    </motion.div>
  )
}
