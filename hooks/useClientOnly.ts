import { useState, useEffect } from 'react'

// Hook para detectar si estamos en el cliente
// Útil para prevenir errores de hidratación
export function useClientOnly() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
