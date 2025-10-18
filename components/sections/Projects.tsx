'use client'

import { companyData } from '@/lib/data'
import {
  Brain,
  Zap,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  Lightbulb,
  Code
} from 'lucide-react'

export default function Projects() {
  const projectIcons = [Brain, Zap, MessageSquare, TrendingUp]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En desarrollo':
        return 'text-green-400 bg-green-400/10 border-green-400/20'
      case 'Planificación':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
      case 'Investigación':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
      case 'Concepto':
        return 'text-brand-primary bg-brand-primary/10 border-brand-primary/20'
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'En desarrollo':
        return <Code className="w-3 h-3" />
      case 'Planificación':
        return <Clock className="w-3 h-3" />
      case 'Investigación':
        return <Lightbulb className="w-3 h-3" />
      case 'Concepto':
        return <CheckCircle className="w-3 h-3" />
      default:
        return <Clock className="w-3 h-3" />
    }
  }

  return (
    <section id="projects" className="relative py-24 bg-bg-primary">
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
            Proyectos
          </h2>
          <div className="h-1 w-20 bg-brand-primary rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {companyData.projects.map((project, index) => {
            const Icon = projectIcons[index]
            return (
              <div
                key={project.id}
                className="rounded-lg p-6"
                style={{
                  background: `linear-gradient(${'#0a0d14'}, ${'#0a0d14'}) padding-box, linear-gradient(90deg, #18cade 0%, #a78bfa 50%, #f472b6 100%) border-box`,
                  border: '1px solid transparent',
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-bg-tertiary rounded-lg flex items-center justify-center flex-shrink-0 border border-brand-primary/20">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-heading font-semibold text-text-primary">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 flex-shrink-0 ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        {project.status}
                      </span>
                    </div>
                    <div className="text-xs text-brand-primary font-medium">
                      {project.category}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
