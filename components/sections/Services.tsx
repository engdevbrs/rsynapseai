'use client'

import { companyData } from '@/lib/data'
import {
  Brain,
  Zap,
  Code,
  MessageSquare,
  Database,
  Lightbulb
} from 'lucide-react'

export default function Services() {
  const serviceIcons = [Brain, Zap, Code, MessageSquare, Database, Lightbulb]

  return (
    <section id="services" className="relative py-24 bg-bg-secondary">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Section Header */}
        <div className="mb-16">
          <h2
            className="text-3xl lg:text-4xl font-heading font-semibold mb-4"
            style={{
              background: 'linear-gradient(90deg, #18cade 0%, #a78bfa 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Servicios
          </h2>
          <div className="h-1 w-20 bg-brand-primary rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <div
                key={service.id}
                className="rounded-lg p-6"
                style={{
                  background: `linear-gradient(${'#0a0d14'}, ${'#0a0d14'}) padding-box, linear-gradient(90deg, #18cade 0%, #a78bfa 50%, #f472b6 100%) border-box`,
                  border: '1px solid transparent',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-bg-primary rounded-lg flex items-center justify-center flex-shrink-0 border border-brand-primary/20">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-heading font-semibold text-brand-primary mb-2">
                      {service.id}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
