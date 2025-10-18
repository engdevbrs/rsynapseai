import { ReactNode } from 'react'

interface GradientTitleProps {
  children: ReactNode
  className?: string
  variant?: 'h1' | 'h2'
}

export default function GradientTitle({
  children,
  className = '',
  variant = 'h2'
}: GradientTitleProps) {
  const gradients = {
    h1: 'linear-gradient(135deg, #6366f1 0%, #18cade 50%, #4dd9e8 100%)',
    h2: 'linear-gradient(135deg, #18cade 0%, #a78bfa 100%)',
  }

  const Tag = variant

  return (
    <Tag
      className={className}
      style={{
        background: gradients[variant],
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </Tag>
  )
}
