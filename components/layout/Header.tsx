'use client'

import { useState, useEffect } from 'react'
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/95 backdrop-blur-md border-b border-brand-primary/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Container with proper constraints */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          
          {/* Logo Section - Left aligned */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center justify-center cursor-pointer"
            >
              <Image
                src="/images/logo-realistic.png"
                alt="synapse.ai Logo"
                height={100}
                width={160}
                className="object-contain"
                priority
              />
            </button>
          </div>

          {/* Desktop Navigation - Centered on large screens */}
          <div className="hidden xl:flex flex-1 justify-center">
            <nav className="flex items-center space-x-6">
              {companyData.navigation.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-brand-primary'
                      : 'text-text-secondary hover:text-brand-light'
                  }`}
                >
                  {item.label}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ease-out ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-brand-primary opacity-100 scale-x-100'
                        : 'bg-transparent opacity-0 scale-x-0'
                    }`}
                    style={{
                      background: activeSection === item.href.replace('#', '')
                        ? 'linear-gradient(90deg, #18cade 0%, #4ade80 100%)'
                        : 'transparent',
                      transformOrigin: 'center'
                    }}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* CTA and Menu Section - Right aligned */}
          <div className="flex items-center space-x-2 sm:space-x-4 ml-auto">
            {/* CTA Button - Hidden on very small screens */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden xs:block px-4 py-2 bg-brand-primary text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-brand-light transition-colors duration-200 cursor-pointer"
            >
              Contacto
            </button>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-brand-primary transition-colors duration-200 xl:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-bg-primary/98 backdrop-blur-md border-t border-brand-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="space-y-2">
              {companyData.navigation.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer ${
                    activeSection === item.href.replace('#', '')
                      ? 'bg-brand-primary/20 text-brand-primary border-l-4 border-brand-primary'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile CTA Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 px-6 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-light transition-colors duration-200 cursor-pointer"
              >
                {companyData.cta}
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}