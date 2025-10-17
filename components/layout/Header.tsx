'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import { companyData } from '@/lib/data'
import { useClientOnly } from '@/hooks/useClientOnly'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const isClient = useClientOnly()

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient])

  // Detectar sección activa para resaltar en navegación
  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact']
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
  }, [isClient])

  // Función para navegar a secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-dark/95 backdrop-blur-md border-b border-blue-primary/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <FadeIn delay={0.2} direction="left">
            <motion.button
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-primary to-cyan-accent rounded-lg flex items-center justify-center group-hover:from-cyan-accent group-hover:to-purple-accent transition-all duration-300">
                <span className="text-white font-bold text-lg lg:text-xl">S</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-heading font-bold text-white group-hover:text-cyan-accent transition-colors duration-300">
                  RSYNAPSYSEAI
                </h1>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  AI Solutions
                </p>
              </div>
            </motion.button>
          </FadeIn>

          {/* Desktop Navigation */}
          <FadeIn delay={0.4} direction="right" className="hidden lg:block">
            <nav className="flex items-center space-x-8">
              {companyData.navigation.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-cyan-accent'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-primary to-cyan-accent rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>
          </FadeIn>

          {/* CTA Button - Desktop */}
          <FadeIn delay={0.6} direction="right" className="hidden lg:block">
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 bg-gradient-to-r from-blue-primary to-cyan-accent text-white font-bold text-sm rounded-lg overflow-hidden shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                {companyData.cta}
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-accent to-purple-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          </FadeIn>

          {/* Mobile Menu Button */}
          <FadeIn delay={0.4} direction="right" className="lg:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Toggle mobile menu"
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
          </FadeIn>
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
            className="lg:hidden bg-navy-dark/98 backdrop-blur-md border-t border-blue-primary/20"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                {companyData.navigation.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
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
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-blue-primary to-cyan-accent text-white font-bold rounded-lg shadow-glow-blue"
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