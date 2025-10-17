'use client'

import { Suspense, lazy, ComponentType } from 'react'
import { motion } from 'framer-motion'

interface DynamicImportProps {
  importFunc: () => Promise<{ default: ComponentType<Record<string, unknown>> }>
  fallback?: React.ReactNode
  className?: string
}

export default function DynamicImport({
  importFunc,
  fallback = (
    <div className="min-h-[400px] bg-gradient-to-br from-navy-medium to-navy-light animate-pulse rounded-lg flex items-center justify-center">
      <div className="text-gray-400">Cargando...</div>
    </div>
  ),
  className = '',
}: DynamicImportProps) {
  const LazyComponent = lazy(importFunc)

  return (
    <div className={className}>
      <Suspense
        fallback={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            {fallback}
          </motion.div>
        }
      >
        <LazyComponent />
      </Suspense>
    </div>
  )
}
