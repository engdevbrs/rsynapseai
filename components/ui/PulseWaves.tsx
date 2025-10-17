'use client'

import { motion } from 'framer-motion'

interface PulseWavesProps {
  count?: number
  color?: string
  className?: string
}

export default function PulseWaves({
  count = 3,
  color = 'border-cyan-accent',
  className = '',
}: PulseWavesProps) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 2],
            opacity: [0.5, 0.1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
            ease: 'easeInOut',
            times: [0, 0.7, 1],
          }}
          className={`absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border ${color}`}
          style={{
            borderWidth: '1px',
          }}
        />
      ))}
    </div>
  )
}
