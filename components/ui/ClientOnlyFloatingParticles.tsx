'use client'

import { useClientOnly } from '@/hooks/useClientOnly'
import FloatingParticles from './FloatingParticles'

interface ClientOnlyFloatingParticlesProps {
  count: number
  color: string
  size: number
  opacity: number
  speed: number
}

export default function ClientOnlyFloatingParticles({
  count,
  color,
  size,
  opacity,
  speed
}: ClientOnlyFloatingParticlesProps) {
  const isClient = useClientOnly()

  if (!isClient) {
    return null
  }

  return (
    <FloatingParticles
      count={count}
      color={color}
      size={size}
      opacity={opacity}
      speed={speed}
    />
  )
}
