'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface CircularProgressProps {
  percentage: number
  size?: number
  strokeWidth?: number
  color?: string
  backgroundColor?: string
  duration?: number
}

export default function CircularProgress({
  percentage,
  size = 200,
  strokeWidth = 15,
  color = '#5b7cff',
  backgroundColor = '#1a1f3a',
  duration = 2,
}: CircularProgressProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (count / 100) * circumference

  // Animar el conteo cuando entra en el viewport
  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = percentage
      const incrementTime = (duration * 1000) / end

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) {
          clearInterval(timer)
        }
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, percentage, duration])

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      {/* SVG Circle */}
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: offset } : {}}
          transition={{ duration, ease: 'easeOut' }}
          style={{
            filter: 'drop-shadow(0 0 10px rgba(91, 124, 255, 0.5))',
          }}
        />
      </svg>

      {/* Percentage Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <span className="text-5xl md:text-6xl font-heading font-bold text-white">
          {count}%
        </span>
        <span className="text-sm text-gray-400 mt-1">Eficiencia</span>
      </motion.div>

      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-30"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
      />
    </div>
  )
}
