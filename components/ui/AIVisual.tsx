'use client'

import { motion } from 'framer-motion'
import { Brain, Cpu, Eye, MessageSquare, Database, Zap } from 'lucide-react'

interface AIVisualProps {
  type: 'brain' | 'cpu' | 'eye' | 'message' | 'database' | 'zap'
  title: string
  description: string
  className?: string
  delay?: number
}

const iconMap = {
  brain: Brain,
  cpu: Cpu,
  eye: Eye,
  message: MessageSquare,
  database: Database,
  zap: Zap,
}

export default function AIVisual({ 
  type, 
  title, 
  description, 
  className = '',
  delay = 0 
}: AIVisualProps) {
  const IconComponent = iconMap[type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative group ${className}`}
    >
      {/* Main Container */}
      <div className="relative p-8 rounded-3xl bg-card-primary border border-neon-cyan-subtle overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan-subtle to-electric-blue-subtle opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
        
        {/* Circuit Pattern */}
        <div 
          className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
          style={{
            backgroundImage: `
              linear-gradient(90deg, var(--neon-cyan-subtle) 1px, transparent 1px),
              linear-gradient(var(--neon-cyan-subtle) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Icon with Glow Effect */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-neon-cyan to-electric-blue rounded-3xl flex items-center justify-center shadow-2xl shadow-neon-cyan-subtle group-hover:shadow-neon-cyan-subtle transition-all duration-300"
          >
            <IconComponent className="w-12 h-12 text-text-primary" />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-heading font-bold text-text-primary mb-4 text-glow-neon">
            {title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed max-w-md mx-auto">
            {description}
          </p>

          {/* Animated Border */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.3 }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-cyan via-electric-blue to-purple-neon origin-left"
            style={{ width: '100%' }}
          />
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl border border-neon-cyan-subtle group-hover:border-neon-cyan transition-colors duration-300" />
      </div>
    </motion.div>
  )
}
