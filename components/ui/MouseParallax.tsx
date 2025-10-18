'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

interface MouseParallaxProps {
  children: ReactNode
  strength?: number
  className?: string
  disabled?: boolean
}

export default function MouseParallax({
  children,
  strength = 20,
  className = '',
  disabled = false,
}: MouseParallaxProps) {
  const [isClient, setIsClient] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useSpring(0, { stiffness: 150, damping: 40 })
  const mouseY = useSpring(0, { stiffness: 150, damping: 40 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [strength / 2, -strength / 2])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-strength / 2, strength / 2])

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Detectar si el menú móvil está abierto
  useEffect(() => {
    if (!isClient) return

    const checkMenuState = () => {
      const mobileMenu = document.querySelector('[data-mobile-menu]')
      if (mobileMenu) {
        const isOpen = mobileMenu.classList.contains('opacity-100')
        setIsMenuOpen(isOpen)
      }
    }

    // Verificar estado inicial
    checkMenuState()

    // Observar cambios en el DOM
    const observer = new MutationObserver(checkMenuState)
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [isClient])

  useEffect(() => {
    if (!isClient || disabled || isMenuOpen) return

    let animationFrame: number

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      // Usar requestAnimationFrame para optimizar el rendimiento
      animationFrame = requestAnimationFrame(() => {
        const rect = containerRef.current!.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const x = (e.clientX - centerX) / (rect.width / 2)
        const y = (e.clientY - centerY) / (rect.height / 2)

        mouseX.set(x)
        mouseY.set(y)
      })
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true })
      container.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [isClient, mouseX, mouseY, disabled, isMenuOpen])

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
