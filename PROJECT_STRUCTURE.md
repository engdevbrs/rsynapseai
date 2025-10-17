# \ud83c\udfdb PROJECT STRUCTURE - Synapse.ia

> Documentaci\u00f3n de la arquitectura y estructura del proyecto

---

## \ud83d\udcca Vista General

Este documento describe la organizaci\u00f3n del c\u00f3digo, patrones de dise\u00f1o y mejores pr\u00e1cticas utilizadas en el proyecto Synapse.ia.

---

## \ud83d\udcc2 Estructura de Carpetas Completa

```
rsynapseai-app/
\u251c\u2500\u2500 \ud83d\udcc4 .env.local                    # Variables de entorno (no commitear)
\u251c\u2500\u2500 \ud83d\udcc4 .eslintrc.json                # Configuraci\u00f3n ESLint
\u251c\u2500\u2500 \ud83d\udcc4 .gitignore                    # Archivos ignorados por Git
\u251c\u2500\u2500 \ud83d\udcc4 next.config.js                # Configuraci\u00f3n de Next.js
\u251c\u2500\u2500 \ud83d\udcc4 package.json                  # Dependencias del proyecto
\u251c\u2500\u2500 \ud83d\udcc4 postcss.config.js             # Configuraci\u00f3n PostCSS
\u251c\u2500\u2500 \ud83d\udcc4 README.md                     # Documentaci\u00f3n principal
\u251c\u2500\u2500 \ud83d\udcc4 TASKS.md                      # Sistema de tareas
\u251c\u2500\u2500 \ud83d\udcc4 PROJECT_STRUCTURE.md          # Este archivo
\u251c\u2500\u2500 \ud83d\udcc4 tailwind.config.ts            # Configuraci\u00f3n Tailwind CSS
\u251c\u2500\u2500 \ud83d\udcc4 tsconfig.json                 # Configuraci\u00f3n TypeScript
\u251c\u2500\u2500 \ud83d\udcc1 app/                          # Next.js App Router
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 favicon.ico
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 globals.css              # Estilos globales + CSS variables
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 layout.tsx               # Root layout con metadata
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 page.tsx                 # Home page
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 sitemap.ts               # Sitemap autogenerado
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 robots.ts                # Robots.txt config
\u2502   \u251c\u2500\u2500 \ud83d\udcc1 fonts/                   # Fuentes optimizadas
\u2502   \u2502   \u251c\u2500\u2500 oswald.ts
\u2502   \u2502   \u251c\u2500\u2500 inter.ts
\u2502   \u2502   \u2514\u2500\u2500 space-grotesk.ts
\u2502   \u2514\u2500\u2500 \ud83d\udcc1 api/                     # API Routes
\u2502       \u2514\u2500\u2500 \ud83d\udcc1 contact/
\u2502           \u2514\u2500\u2500 \ud83d\udcc4 route.ts          # Endpoint de contacto
\u251c\u2500\u2500 \ud83d\udcc1 components/                  # Componentes React
\u2502   \u251c\u2500\u2500 \ud83d\udcc1 ui/                      # shadcn/ui components
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 button.tsx
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 card.tsx
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 input.tsx
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 textarea.tsx
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 form.tsx
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 progress.tsx
\u2502   \u2502   \u2514\u2500\u2500 ...
\u2502   \u251c\u2500\u2500 \ud83d\udcc1 sections/                # Secciones de la p\u00e1gina
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 Hero.tsx            # Secci\u00f3n Hero con t\u00edtulo principal
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 About.tsx           # Qui\u00e9nes somos + gr\u00e1fico 80%
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 Services.tsx        # Grid de servicios (6)
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 Projects.tsx        # Proyectos futuros
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 Vision.tsx          # Nuestra visi\u00f3n
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 Mission.tsx         # Nuestra misi\u00f3n
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 Portfolio.tsx       # Portafolio de proyectos
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 Team.tsx            # Equipo/CEO profile
\u2502   \u2502   \u2514\u2500\u2500 \ud83d\udcc4 Contact.tsx         # Formulario de contacto
\u2502   \u251c\u2500\u2500 \ud83d\udcc1 layout/                  # Componentes de layout
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 Header.tsx          # Navbar con navegaci\u00f3n
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 Footer.tsx          # Footer con links
\u2502   \u2502   \u251c\u2500\u2500 \ud83d\udcc4 Navigation.tsx      # Menu mobile
\u2502   \u2502   \u2514\u2500\u2500 \ud83d\udcc4 ScrollToTop.tsx     # Bot\u00f3n scroll to top
\u2502   \u2514\u2500\u2500 \ud83d\udcc1 animations/              # Wrappers de animaciones
\u2502       \u251c\u2500\u2500 \ud83d\udcc4 FadeIn.tsx           # Fade in animation
\u2502       \u251c\u2500\u2500 \ud83d\udcc4 SlideIn.tsx          # Slide in animation
\u2502       \u251c\u2500\u2500 \ud83d\udcc4 ScaleIn.tsx          # Scale animation
\u2502       \u251c\u2500\u2500 \ud83d\udcc4 ParallaxSection.tsx  # Parallax effects
\u2502       \u2514\u2500\u2500 \ud83d\udcc4 StaggerContainer.tsx # Stagger children
\u251c\u2500\u2500 \ud83d\udcc1 lib/                         # Utilidades y helpers
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 utils.ts                 # Utilidad cn() y helpers
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 data.ts                  # Contenido de Synapse.ia
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 constants.ts             # Constantes del proyecto
\u2502   \u2514\u2500\u2500 \ud83d\udcc4 validations.ts           # Schemas de Zod
\u251c\u2500\u2500 \ud83d\udcc1 public/                      # Archivos est\u00e1ticos
\u2502   \u251c\u2500\u2500 \ud83d\udcc1 images/                  # Im\u00e1genes
\u2502   \u2502   \u251c\u2500\u2500 \ud83c\uddedero/                 # Im\u00e1genes del hero
\u2502   \u2502   \u251c\u2500\u2500 about/                  # Im\u00e1genes about
\u2502   \u2502   \u251c\u2500\u2500 services/               # Im\u00e1genes servicios
\u2502   \u2502   \u251c\u2500\u2500 portfolio/              # Im\u00e1genes portfolio
\u2502   \u2502   \u251c\u2500\u2500 team/                   # Fotos del equipo
\u2502   \u2502   \u2514\u2500\u2500 robots/                 # Im\u00e1genes de robots IA
\u2502   \u251c\u2500\u2500 \ud83d\udcc1 icons/                   # \u00cdconos y logos
\u2502   \u2502   \u251c\u2500\u2500 logo.svg
\u2502   \u2502   \u2514\u2500\u2500 logo-white.svg
\u2502   \u2514\u2500\u2500 \ud83d\udcc1 videos/                  # Videos (opcional)
\u251c\u2500\u2500 \ud83d\udcc1 styles/                      # Estilos adicionales
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 animations.css           # Animaciones CSS custom
\u2502   \u2514\u2500\u2500 \ud83d\udcc4 utilities.css           # Utilidades CSS extra
\u251c\u2500\u2500 \ud83d\udcc1 types/                       # TypeScript types
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 index.ts                # Types globales
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 service.ts              # Types de servicios
\u2502   \u251c\u2500\u2500 \ud83d\udcc4 project.ts              # Types de proyectos
\u2502   \u2514\u2500\u2500 \ud83d\udcc4 contact.ts              # Types de contacto
\u2514\u2500\u2500 \ud83d\udcc1 hooks/                       # Custom React hooks
    \u251c\u2500\u2500 \ud83d\udcc4 useScrollSpy.ts          # Detectar secci\u00f3n activa
    \u251c\u2500\u2500 \ud83d\udcc4 useMediaQuery.ts         # Responsive breakpoints
    \u2514\u2500\u2500 \ud83d\udcc4 useIntersectionObserver.ts # Scroll animations
```

---

## \ud83e\udde9 Arquitectura de Componentes

### **Atomic Design Pattern**

Seguimos el patr\u00f3n Atomic Design para organizar componentes:

```
\u2699\ufe0f Atoms (ui/)
   \u2192 Componentes m\u00e1s peque\u00f1os y reutilizables
   \u2192 Ejemplos: Button, Input, Icon

\ud83e\uddf1 Molecules (ui/)
   \u2192 Combinaci\u00f3n de atoms
   \u2192 Ejemplos: Card, FormField, SearchBar

\ud83c\udfdb Organisms (sections/, layout/)
   \u2192 Componentes complejos con l\u00f3gica de negocio
   \u2192 Ejemplos: Header, Hero, ServiceCard

\ud83d\udcf1 Templates (app/)
   \u2192 Layouts de p\u00e1gina
   \u2192 Ejemplos: HomeTemplate, ContactTemplate

\ud83d\udcc4 Pages (app/)
   \u2192 P\u00e1ginas completas con datos
   \u2192 Ejemplos: page.tsx, about/page.tsx
```

---

## \ud83d\udcdd Convenciones de Nomenclatura

### **Archivos y Carpetas**

```typescript
// Componentes React
Hero.tsx              // PascalCase
ServiceCard.tsx
ContactForm.tsx

// Utilidades y hooks
useScrollSpy.ts       // camelCase con prefijo 'use'
formatDate.ts
cn.ts

// Tipos TypeScript
index.ts              // camelCase
service.ts
IUser.ts              // Interfaces con prefijo 'I'
TService.ts           // Types con prefijo 'T'

// Constantes
constants.ts          // camelCase
API_ENDPOINTS.ts      // UPPERCASE para archivos de constantes
```

### **Variables y Funciones**

```typescript
// Variables
const userName = 'John'              // camelCase
const MAX_RETRY_COUNT = 3            // UPPERCASE para constantes
const isActive = true                // camelCase para booleans

// Funciones
function calculateTotal() {}         // camelCase
const handleSubmit = () => {}        // camelCase
async function fetchUserData() {}    // camelCase con async

// Componentes
const HeroSection = () => {}         // PascalCase
export default function Hero() {}    // PascalCase

// Tipos e Interfaces
interface IUser {}                   // PascalCase con prefijo 'I'
type TService = {}                   // PascalCase con prefijo 'T'
```

---

## \ud83c\udfa8 Sistema de Estilos

### **Tailwind CSS + CSS Variables**

```css
/* globals.css - Variables CSS */
:root {
  /* Colors */
  --navy-dark: #0a0e27;
  --navy-medium: #1a1f3a;
  --blue-primary: #5b7cff;
  --blue-secondary: #4a6de5;
  --cyan-accent: #00d4ff;
  --purple-accent: #d946ef;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;

  /* Typography */
  --font-heading: 'Oswald', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-accent: 'Space Grotesk', monospace;

  /* Animations */
  --transition-fast: 150ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;
}
```

### **Tailwind Configuration**

```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          dark: 'var(--navy-dark)',
          medium: 'var(--navy-medium)',
        },
        blue: {
          primary: 'var(--blue-primary)',
          secondary: 'var(--blue-secondary)',
        },
        cyan: {
          accent: 'var(--cyan-accent)',
        },
        purple: {
          accent: 'var(--purple-accent)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
        accent: ['var(--font-accent)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
    },
  },
}
```

---

## \u26a1 Patrones de Componentes

### **Server vs Client Components**

```typescript
// Server Component (por defecto en Next.js 15)
// components/sections/Hero.tsx
export default function Hero() {
  return <div>Hero content (server)</div>
}

// Client Component (con interactividad)
// components/layout/Navigation.tsx
'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  return <nav>...</nav>
}
```

### **Componentes Reutilizables**

```typescript
// components/ui/ServiceCard.tsx
interface ServiceCardProps {
  number: string
  title: string
  description: string
  icon?: React.ReactNode
}

export function ServiceCard({
  number,
  title,
  description,
  icon
}: ServiceCardProps) {
  return (
    <div className="service-card">
      <span className="number">{number}</span>
      {icon && <div className="icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
```

### **Animation Wrappers**

```typescript
// components/animations/FadeIn.tsx
'use client'

import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
```

---

## \ud83d\udd17 Integraci\u00f3n de Datos

### **lib/data.ts - Contenido Centralizado**

```typescript
// lib/data.ts
export const companyData = {
  name: 'Synapse.ia',
  tagline: 'Transformamos Negocios!',
  description: 'Innovaci\u00f3n Inteligente para un mundo m\u00e1s simple',

  about: {
    title: 'Qui\u00e9nes Somos',
    content: 'En synapse.ia somos una consultora...',
  },

  services: [
    {
      id: '01',
      title: 'Consultor\u00eda en Inteligencia Artificial',
      description: 'Asesoramos a las empresas...',
      icon: 'BrainIcon',
    },
    // ... m\u00e1s servicios
  ],

  ceo: {
    name: 'Rodolfo Figueroa',
    title: 'CEO Synapse.ia',
    bio: 'Ingeniero en Inform\u00e1tica...',
    photo: '/images/team/rodolfo.jpg',
  },

  contact: {
    email: 'info@synapse.ia',
    phone: '+123-456-7890',
    address: '123 Anywhere ST., Any City',
  },
}
```

---

## \ud83d\udd10 Validaciones con Zod

### **lib/validations.ts**

```typescript
// lib/validations.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),

  email: z
    .string()
    .email('Email inv\u00e1lido')
    .min(1, 'El email es requerido'),

  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede exceder 500 caracteres'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

---

## \ud83c\udfaf Estructura de P\u00e1ginas

### **app/page.tsx - Home Page**

```typescript
// app/page.tsx
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Vision from '@/components/sections/Vision'
import Mission from '@/components/sections/Mission'
import Portfolio from '@/components/sections/Portfolio'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Vision />
      <Mission />
      <Portfolio />
      <Team />
      <Contact />
    </main>
  )
}
```

---

## \ud83d\udd0c API Routes

### **app/api/contact/route.ts**

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validar datos
    const validatedData = contactFormSchema.parse(body)

    // Enviar email (usar Resend, SendGrid, etc.)
    // await sendEmail(validatedData)

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al enviar mensaje' },
      { status: 400 }
    )
  }
}
```

---

## \ud83e\uddf0 Custom Hooks

### **hooks/useScrollSpy.ts**

```typescript
// hooks/useScrollSpy.ts
'use client'

import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
```

---

## \ud83d\udee1 Mejores Pr\u00e1cticas

### **TypeScript**
\u2705 Type safety en todos los componentes
\u2705 Interfaces para props
\u2705 Avoid `any` type
\u2705 Use utility types (Partial, Pick, Omit)

### **Performance**
\u2705 Server Components por defecto
\u2705 Client Components solo cuando sea necesario
\u2705 Lazy loading de componentes pesados
\u2705 Image optimization con next/image
\u2705 Font optimization con next/font

### **Accesibilidad**
\u2705 Semantic HTML (header, nav, main, section, footer)
\u2705 ARIA labels donde sea necesario
\u2705 Keyboard navigation
\u2705 Focus management
\u2705 Alt text en im\u00e1genes

### **SEO**
\u2705 Metadata en cada p\u00e1gina
\u2705 Structured data (JSON-LD)
\u2705 Sitemap.xml
\u2705 robots.txt
\u2705 Open Graph tags

---

## \ud83d\udcca Monitoreo y Analytics

### **Integraciones Recomendadas**

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

---

## \ud83d\ude80 Optimizaciones de Build

### **next.config.js**

```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  experimental: {
    optimizeCss: true,
  },

  // Compresi\u00f3n
  compress: true,

  // PWA (opcional)
  // pwa: {
  //   dest: 'public',
  //   register: true,
  //   skipWaiting: true,
  // },
}
```

---

## \ud83d\udcdd Conclusi\u00f3n

Esta estructura est\u00e1 dise\u00f1ada para:
- \u2705 **Escalabilidad**: F\u00e1cil agregar nuevas features
- \u2705 **Mantenibilidad**: C\u00f3digo organizado y documentado
- \u2705 **Performance**: Optimizaciones en cada capa
- \u2705 **Developer Experience**: Convenciones claras y consistentes

---

**\ud83d\udd25 Happy Coding! \ud83d\udd25**
