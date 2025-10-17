'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export default function TypewriterText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = '',
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const text = texts[currentTextIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < text.length) {
            setCurrentText(text.slice(0, currentText.length + 1))
          } else {
            // Finished typing, pause then start deleting
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(text.slice(0, currentText.length - 1))
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-[1em] bg-cyan-accent ml-1 align-middle"
      />
    </span>
  )
}
