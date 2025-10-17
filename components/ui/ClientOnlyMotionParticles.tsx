'use client'

import { motion } from 'framer-motion'
import { useClientOnly } from '@/hooks/useClientOnly'

interface ClientOnlyMotionParticlesProps {
  count: number
  color: string
  size?: number
  opacity?: number
  speed?: number
}

export default function ClientOnlyMotionParticles({
  count,
  color,
  size = 1,
  opacity = 0.2,
  speed = 4
}: ClientOnlyMotionParticlesProps) {
  const isClient = useClientOnly()

  if (!isClient) {
    return null
  }

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-${size} h-${size} ${color} rounded-full`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: opacity,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [opacity, opacity * 2, opacity],
          }}
          transition={{
            duration: speed + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </>
  )
}
