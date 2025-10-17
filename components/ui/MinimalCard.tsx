'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface MinimalCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  delay?: number
}

export default function MinimalCard({ 
  icon: Icon, 
  title, 
  description, 
  className = '',
  delay = 0 
}: MinimalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className={`group relative p-8 rounded-3xl card-futuristic transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 mx-auto mb-6 card-icon-minimal rounded-2xl flex items-center justify-center"
        >
          <Icon className="w-8 h-8 text-neon-cyan" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-heading card-title-minimal mb-4 group-hover:text-neon-cyan transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="card-description-minimal group-hover:text-text-primary transition-colors duration-300">
          {description}
        </p>

        {/* Subtle Accent Line */}
        <div className="card-accent-line absolute bottom-0 left-0 right-0" />
      </div>
    </motion.div>
  )
}
