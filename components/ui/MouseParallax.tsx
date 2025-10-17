'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

interface MouseParallaxProps {
  children: ReactNode
  strength?: number
  className?: string
}

export default function MouseParallax({
  children,
  strength = 20,
  className = '',
}: MouseParallaxProps) {
  const [isClient, setIsClient] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useSpring(0, { stiffness: 100, damping: 30 })
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [strength / 2, -strength / 2])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-strength / 2, strength / 2])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = (e.clientX - centerX) / (rect.width / 2)
      const y = (e.clientY - centerY) / (rect.height / 2)

      mouseX.set(x)
      mouseY.set(y)
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [isClient, mouseX, mouseY])

  if (!isClient) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={containerRef} className={className}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
