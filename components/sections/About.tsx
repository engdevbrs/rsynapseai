'use client'

import Image from 'next/image'
import { companyData } from '@/lib/data'
import { Building2, User, Users, Award, Calendar, Briefcase, CheckCircle2, Linkedin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-bg-primary">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Section Header */}
        <div className="mb-16">
          <h2
            className="text-3xl lg:text-4xl font-heading font-semibold mb-4"
            style={{
              background: 'linear-gradient(90deg, #18cade 0%, #4ade80 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {companyData.about.title}
          </h2>
          <div className="h-1 w-20 bg-brand-primary rounded-full" />
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">

          {/* Left Column - Profile */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div
                className="w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                style={{
                  background: `linear-gradient(${'#0a0d14'}, ${'#0a0d14'}) padding-box, linear-gradient(90deg, #18cade 0%, #4ade80 100%) border-box`,
                  border: '2px solid transparent',
                }}
              >
                <Image
                  src="/images/profile.png"
                  alt={companyData.ceo.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold text-text-primary mb-2">
                  {companyData.ceo.name}
                </h3>
                <p className="text-brand-primary font-medium mb-4">
                  {companyData.ceo.title}
                </p>
                <p className="text-text-secondary leading-relaxed">
                  {companyData.ceo.bio}
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div
              className="rounded-lg p-6"
              style={{
                background: `linear-gradient(${'#0a0d14'}, ${'#0a0d14'}) padding-box, linear-gradient(90deg, #18cade 0%, #4ade80 100%) border-box`,
                border: '1px solid transparent',
              }}
            >
              <h4 className="text-sm font-heading font-semibold text-text-muted uppercase tracking-wide mb-4">
                Credenciales
              </h4>
              <div className="space-y-3">
                {companyData.ceo.credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span className="text-text-secondary">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="space-y-8">
            <p className="text-lg text-text-secondary leading-relaxed">
              {companyData.about.description}
            </p>

            {/* Experience Highlight */}
            <div
              className="rounded-lg p-6"
              style={{
                background: `linear-gradient(${'#0a0d14'}, ${'#0a0d14'}) padding-box, linear-gradient(90deg, #18cade 0%, #4ade80 100%) border-box`,
                border: '1px solid transparent',
              }}
            >
              <h4 className="text-sm font-heading font-semibold text-text-muted uppercase tracking-wide mb-4">
                Experiencia
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {companyData.history.content}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div
                className="rounded-lg p-4 text-center"
                style={{
                  background: `linear-gradient(${'#0a0d14'}, ${'#0a0d14'}) padding-box, linear-gradient(90deg, #18cade 0%, #4ade80 100%) border-box`,
                  border: '1px solid transparent',
                }}
              >
                <Calendar className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                <div className="text-2xl font-heading font-semibold text-brand-primary mb-1">
                  10+
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wide">
                  Años
                </div>
              </div>
              <div
                className="rounded-lg p-4 text-center"
                style={{
                  background: `linear-gradient(${'#0a0d14'}, ${'#0a0d14'}) padding-box, linear-gradient(90deg, #18cade 0%, #4ade80 100%) border-box`,
                  border: '1px solid transparent',
                }}
              >
                <Briefcase className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                <div className="text-2xl font-heading font-semibold text-brand-primary mb-1">
                  100+
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wide">
                  Proyectos
                </div>
              </div>
              <div
                className="rounded-lg p-4 text-center"
                style={{
                  background: `linear-gradient(${'#0a0d14'}, ${'#0a0d14'}) padding-box, linear-gradient(90deg, #18cade 0%, #4ade80 100%) border-box`,
                  border: '1px solid transparent',
                }}
              >
                <Users className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                <div className="text-2xl font-heading font-semibold text-brand-primary mb-1">
                  50+
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wide">
                  Clientes
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Section */}
        <div
          className="rounded-lg p-8 lg:p-12"
          style={{
            background: `linear-gradient(${'#0a0d14'}, ${'#0a0d14'}) padding-box, linear-gradient(90deg, #18cade 0%, #4ade80 100%) border-box`,
            border: '1px solid transparent',
          }}
        >
          <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6">
            Equipo Técnico
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-bg-tertiary rounded-lg flex items-center justify-center flex-shrink-0 border border-brand-primary/10">
                <Award className="w-7 h-7 text-brand-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-heading font-semibold text-text-primary mb-2">
                  Boris Rioseco Elgueta
                </h4>
                <p className="text-brand-primary font-medium text-sm mb-3">
                  Coordinador de Equipo
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                    Desarrollador Senior
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                    IA Aplicada
                  </span>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Profesional apasionado por la tecnología y la resolución de problemas, con una sólida formación técnica y amplia experiencia en diversos proyectos. Comprometido con el aprendizaje continuo y la excelencia en cada proyecto en el que participa.
                </p>

                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/borisfre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105"
                  style={{
                    background: 'linear-gradient(#0a0d14, #0a0d14) padding-box, linear-gradient(90deg, #18cade 0%, #4ade80 100%) border-box',
                    border: '1px solid transparent',
                    color: '#18cade',
                  }}
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Ver perfil en LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-bg-tertiary rounded-lg flex items-center justify-center flex-shrink-0 border border-brand-primary/10">
                <Building2 className="w-7 h-7 text-brand-primary" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold text-text-primary mb-2">
                  Red de Expertos
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Trabajamos con una red de profesionales especializados en diferentes áreas tecnológicas para ofrecer soluciones completas.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
