'use client'

import { companyData } from '@/lib/data'
import { Target, TrendingUp } from 'lucide-react'

export default function Mission() {
  return (
    <section id="mission" className="relative py-24 bg-bg-secondary">
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
            {companyData.mission.title}
          </h2>
          <div className="h-1 w-20 bg-brand-primary rounded-full" />
          <p className="mt-6 text-lg text-text-secondary max-w-3xl">
            {companyData.mission.description}
          </p>
        </div>

        {/* Mission Blocks */}
        <div className="grid md:grid-cols-2 gap-6">
          {companyData.mission.blocks.map((block) => (
            <div
              key={block.number}
              className="rounded-lg p-8"
              style={{
                background: `linear-gradient(${'#0a0d14'}, ${'#0a0d14'}) padding-box, linear-gradient(90deg, #18cade 0%, #a78bfa 50%, #f472b6 100%) border-box`,
                border: '1px solid transparent',
              }}
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-brand-primary/20">
                  <span className="text-xl font-heading font-bold text-brand-primary">
                    {block.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                    {block.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
