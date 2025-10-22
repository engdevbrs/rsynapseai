'use client'

import { useEffect, useState } from 'react'

export default function AnalyticsDebug() {
  const [analyticsStatus, setAnalyticsStatus] = useState<string>('Verificando...')
  const [gaId, setGaId] = useState<string>('')

  useEffect(() => {
    // Verificar si Google Analytics está cargado
    const checkAnalytics = () => {
      const gaId = process.env.NEXT_PUBLIC_GA_ID
      setGaId(gaId || 'No configurado')

      if (typeof window !== 'undefined') {
        if (window.gtag) {
          setAnalyticsStatus('✅ Google Analytics funcionando')
        } else {
          setAnalyticsStatus('❌ Google Analytics no detectado')
        }
      }
    }

    // Verificar después de un delay para que se cargue
    const timer = setTimeout(checkAnalytics, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Solo mostrar en desarrollo
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50">
      <div><strong>Analytics Debug:</strong></div>
      <div>GA ID: {gaId}</div>
      <div>Estado: {analyticsStatus}</div>
    </div>
  )
}
