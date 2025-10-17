'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface AIImageProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  delay?: number
}

export default function AIImage({ 
  icon: Icon, 
  title, 
  description, 
  className = '',
  delay = 0 
}: AIImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative group ${className}`}
    >
      {/* AI Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan-subtle to-electric-blue-subtle rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
      
      {/* Circuit Pattern Overlay */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(90deg, var(--neon-cyan-subtle) 1px, transparent 1px),
            linear-gradient(var(--neon-cyan-subtle) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 p-8 text-center">
        {/* Icon Container */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-neon-cyan to-electric-blue rounded-2xl flex items-center justify-center shadow-lg shadow-neon-cyan-subtle"
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>
        
        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-text-primary mb-4 text-glow-neon">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-2xl border border-neon-cyan-subtle group-hover:border-neon-cyan transition-colors duration-300" />
      </div>
    </motion.div>
  )
}
