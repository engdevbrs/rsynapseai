'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useClientOnly } from '@/hooks/useClientOnly'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const isClient = useClientOnly()

  // Mostrar/ocultar botón basado en scroll
  useEffect(() => {
    if (!isClient) return

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [isClient])

  // Función para scroll to top
  const scrollToTop = () => {
    if (isClient) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-neon-cyan to-electric-blue hover:from-electric-blue hover:to-purple-neon text-text-primary rounded-full shadow-2xl hover:shadow-neon-cyan-subtle transition-all duration-300 flex items-center justify-center group border-2 border-neon-cyan/30 hover:border-neon-cyan backdrop-blur-sm"
          aria-label="Volver al inicio"
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
