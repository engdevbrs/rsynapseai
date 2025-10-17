'use client'

import { motion } from 'framer-motion'

interface FloatingParticlesProps {
  count?: number
  color?: string
  size?: number
  opacity?: number
  speed?: number
}

export default function FloatingParticles({
  count = 15,
  color = 'bg-neon-cyan',
  size = 1,
  opacity = 0.6,
  speed = 3
}: FloatingParticlesProps) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${color} rounded-full opacity-${Math.floor(opacity * 10)}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [opacity, 1, opacity],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: speed + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}
