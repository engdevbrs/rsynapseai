'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { companyData } from '@/lib/data'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detectar sección activa para resaltar en navegación
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'projects', 'mission', 'vision', 'team', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Función para navegar a secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    
    if (element) {
      // Cerrar el menú móvil primero
      setIsMobileMenuOpen(false)
      
      // Pequeño delay para que el menú se cierre antes del scroll
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }, 100)
    } else {
      console.error('Sección no encontrada:', sectionId)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-dark/95 backdrop-blur-md border-b border-blue-primary/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Container with proper constraints */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          
          {/* Logo Section - Left aligned */}
          <div className="flex-shrink-0">
            <motion.button
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 group-hover:scale-110 transition-all duration-300">
                <Image 
                  src="/logo-compact.svg" 
                  alt="RSYNAPSYSEAI Logo" 
                  width={48}
                  height={48}
                  className="w-full h-full"
                  priority
                />
              </div>
              <div className="hidden md:block">
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  AI Solutions
                </p>
              </div>
            </motion.button>
          </div>

          {/* Desktop Navigation - Centered on large screens */}
          <div className="hidden xl:flex flex-1 justify-center">
            <nav className="flex items-center space-x-6">
              {companyData.navigation.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className="relative px-3 py-2 text-sm font-medium text-white hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105 hover:translate-y-[-2px] hover:bg-white/5 hover:rounded-md hover:shadow-lg hover:shadow-cyan-500/20"
                  style={{
                    color: activeSection === item.href.replace('#', '') ? '#00FFFF' : '#E5E7EB'
                  }}
                >
                  {item.label}
                  {activeSection === item.href.replace('#', '') && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* CTA and Menu Section - Right aligned */}
          <div className="flex items-center space-x-2 sm:space-x-4 ml-auto">
            {/* CTA Button - Hidden on very small screens */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden xs:block relative px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-xs sm:text-sm rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 ease-out shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 hover:translate-y-[-3px] hover:shadow-cyan-500/40 hover:brightness-110 transform-gpu overflow-hidden group"
            >
              <span className="relative z-10">Contacto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </button>

            {/* Mobile/Tablet Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-300 xl:hidden"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden bg-navy-dark/98 backdrop-blur-md border-t border-blue-primary/20"
            data-mobile-menu
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <nav className="space-y-4">
                {companyData.navigation.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.1, // Delay fijo para todos los elementos
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    className={`block text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer hover:scale-105 hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/20 ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-blue-primary/20 text-cyan-accent border-l-4 border-cyan-accent'
                        : 'text-gray-300 hover:text-white hover:bg-navy-medium/50'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.2, // Delay reducido para que aparezca casi al mismo tiempo
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-blue-primary to-cyan-accent text-white font-bold rounded-lg shadow-glow-blue cursor-pointer hover:scale-105 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  {companyData.cta}
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}