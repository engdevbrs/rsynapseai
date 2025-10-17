# \ud83d\udccb Synapse.ia - Task Tracker

> Sistema de seguimiento de tareas para el desarrollo del sitio web

**\u00daltima Actualizaci\u00f3n**: Octubre 17, 2025
**Estado General**: \ud83d\udfe1 En Desarrollo

---

## \ud83d\udcc8 Progreso General

```
\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 0% Completado

Fase 1: Fundaci\u00f3n              [░░░░░░░░░░] 0%
Fase 2: Layout                 [░░░░░░░░░░] 0%
Fase 3: Hero Section           [░░░░░░░░░░] 0%
Fase 4: About                  [░░░░░░░░░░] 0%
Fase 5: Services               [░░░░░░░░░░] 0%
Fase 6: Projects               [░░░░░░░░░░] 0%
Fase 7: Vision & Mission       [░░░░░░░░░░] 0%
Fase 8: Portfolio              [░░░░░░░░░░] 0%
Fase 9: Team/CEO               [░░░░░░░░░░] 0%
Fase 10: Contact               [░░░░░░░░░░] 0%
Fase 11: SEO                   [░░░░░░░░░░] 0%
Fase 12: Testing               [░░░░░░░░░░] 0%
Fase 13: Deployment            [░░░░░░░░░░] 0%
```

---

## \ud83d\udfe2 FASE 1: FUNDACI\u00d3N

### \u2705 **Tareas Completadas**

- [x] Crear repositorio Git
- [x] Crear README.md con documentaci\u00f3n completa
- [x] Crear TASKS.md para seguimiento

### \ud83d\udfe1 **Tareas en Progreso**

- [ ] **TASK-001**: Inicializar proyecto Next.js 15
  - Comando: `npx create-next-app@latest`
  - Opciones: TypeScript, App Router, Tailwind CSS
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 10 min

### \u26aa **Tareas Pendientes**

- [ ] **TASK-002**: Instalar dependencias principales
  ```bash
  npm install framer-motion
  npm install lucide-react
  npm install react-hook-form
  npm install zod
  npm install @hookform/resolvers
  npm install react-intersection-observer
  ```
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 5 min

- [ ] **TASK-003**: Instalar shadcn/ui
  ```bash
  npx shadcn-ui@latest init
  ```
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 5 min

- [ ] **TASK-004**: Configurar Tailwind CSS
  - Agregar colores custom al `tailwind.config.ts`
  - Configurar breakpoints
  - Agregar animaciones custom
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 20 min

- [ ] **TASK-005**: Configurar variables CSS globales
  - Archivo: `app/globals.css`
  - Definir colores del sistema de dise\u00f1o
  - Configurar fuentes
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 15 min

- [ ] **TASK-006**: Setup de fuentes optimizadas
  - Instalar: Oswald, Inter, Space Grotesk
  - Configurar en `app/layout.tsx`
  - Usar next/font para optimizaci\u00f3n
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 20 min

- [ ] **TASK-007**: Crear estructura de carpetas
  - components/ui/
  - components/sections/
  - components/layout/
  - components/animations/
  - lib/
  - types/
  - styles/
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 10 min

- [ ] **TASK-008**: Configurar archivos base
  - `lib/utils.ts` (cn helper)
  - `lib/data.ts` (contenido de la empresa)
  - `types/index.ts` (TypeScript types)
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 15 min

- [ ] **TASK-009**: Configurar ESLint y Prettier
  - Reglas de formateo
  - Configuraci\u00f3n de imports
  - Prioridad: \ud83d\udfe2 BAJA
  - Tiempo estimado: 10 min

---

## \ud83d\udfe1 FASE 2: LAYOUT & NAVEGACI\u00d3N

### \u26aa **Tareas Pendientes**

- [ ] **TASK-010**: Crear componente Header
  - Archivo: `components/layout/Header.tsx`
  - Logo de Synapse.ia
  - Men\u00fa de navegaci\u00f3n (Home, Service, About Us, Contact)
  - Navbar sticky con backdrop blur
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 45 min

- [ ] **TASK-011**: Implementar navegaci\u00f3n responsive
  - Menu mobile con hamburger icon
  - Animaciones de apertura/cierre
  - Smooth scroll a secciones
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 1 hora

- [ ] **TASK-012**: Crear componente Footer
  - Archivo: `components/layout/Footer.tsx`
  - Links de navegaci\u00f3n
  - Copyright \u00a9 2025
  - Bot\u00f3n "scroll to top"
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

- [ ] **TASK-013**: Implementar smooth scroll
  - Configuraci\u00f3n de scroll-behavior
  - Links de navegaci\u00f3n funcionales
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 20 min

- [ ] **TASK-014**: Crear layout global
  - Archivo: `app/layout.tsx`
  - Metadata SEO base
  - Estructura HTML sem\u00e1ntica
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

---

## \ud83d\udfe1 FASE 3: HERO SECTION

### \u26aa **Tareas Pendientes**

- [ ] **TASK-015**: Estructura HTML del Hero
  - Archivo: `components/sections/Hero.tsx`
  - Layout con imagen y contenido
  - T\u00edtulo: "ARTIFICIAL INTELLIGENCE"
  - Subt\u00edtulo: "Transformamos Negocios! Innovaci\u00f3n Inteligente..."
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-016**: Estilizar Hero Section
  - Fondo degradado azul oscuro
  - Tipograf\u00eda impactante (Oswald)
  - Layout responsive
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 45 min

- [ ] **TASK-017**: Agregar imagen de robot IA
  - Optimizar imagen con next/image
  - Efectos de iluminaci\u00f3n (glow)
  - Posicionamiento
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

- [ ] **TASK-018**: Bot\u00f3n CTA principal
  - Texto: "COMENCEMOS A TRABAJAR JUNTOS"
  - Efectos hover con glow
  - Animaciones suaves
  - Link a secci\u00f3n de contacto
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 20 min

- [ ] **TASK-019**: Animaciones del Hero
  - Fade in cascada del t\u00edtulo
  - Slide in del bot\u00f3n
  - Parallax sutil en fondo
  - Usar Framer Motion
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 1 hora

- [ ] **TASK-020**: Indicador de scroll
  - \u00cdcono animado "scroll down"
  - Posicionamiento en bottom
  - Prioridad: \ud83d\udfe2 BAJA
  - Tiempo estimado: 15 min

---

## \ud83d\udfe1 FASE 4: ABOUT SECTION (Qui\u00e9nes Somos)

### \u26aa **Tareas Pendientes**

- [ ] **TASK-021**: Estructura de About Section
  - Archivo: `components/sections/About.tsx`
  - Layout 2 columnas (imagen + contenido)
  - T\u00edtulo: "ABOUT ARTIFICIAL INTELLIGENCE"
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-022**: Gr\u00e1fico circular animado (80%)
  - Crear componente CircularProgress
  - Animaci\u00f3n de conteo (0 a 80%)
  - Trigger on scroll
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 1 hora

- [ ] **TASK-023**: Contenido de Synapse.ia
  - Integrar texto del archivo ia-company.txt
  - Formateo y espaciado
  - Responsive design
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 20 min

- [ ] **TASK-024**: Imagen de VR/IA
  - Optimizar imagen
  - Efectos de hover
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 20 min

- [ ] **TASK-025**: Animaciones on scroll
  - Fade in + slide up
  - Stagger animations
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

---

## \ud83d\udfe1 FASE 5: SERVICES SECTION

### \u26aa **Tareas Pendientes**

- [ ] **TASK-026**: Estructura de Services Section
  - Archivo: `components/sections/Services.tsx`
  - T\u00edtulo: "ABOUT TECHNOLOGY"
  - Grid 2x2 responsive
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-027**: Crear componente ServiceCard
  - Archivo: `components/ui/ServiceCard.tsx`
  - N\u00famero destacado
  - T\u00edtulo del servicio
  - Descripci\u00f3n
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 45 min

- [ ] **TASK-028**: Integrar 6 servicios principales
  - 01: Consultor\u00eda en IA aplicada al negocio
  - 02: Automatizaci\u00f3n de procesos
  - 03: Desarrollo de software a medida
  - 04: Chatbots y asistentes virtuales
  - 05: Machine learning
  - 06: Asesor\u00eda t\u00e9cnica
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-029**: Efectos hover en cards
  - Scale + glow effect
  - Transiciones suaves
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

- [ ] **TASK-030**: Animaciones stagger
  - Cards aparecen uno tras otro
  - Trigger on scroll
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

- [ ] **TASK-031**: Imagen lateral de tecnolog\u00eda
  - Persona con casco VR
  - Efectos de iluminaci\u00f3n
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 20 min

---

## \ud83d\udfe1 FASE 6: PROJECTS SECTION

### \u26aa **Tareas Pendientes**

- [ ] **TASK-032**: Estructura de Projects Section
  - Archivo: `components/sections/Projects.tsx`
  - T\u00edtulo: "OUR FUTURE PROJECT"
  - Layout con imagen y lista
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-033**: Lista de 4 proyectos
  - Componente ProjectItem
  - N\u00famero + descripci\u00f3n
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

- [ ] **TASK-034**: Imagen de headphones/tecnolog\u00eda
  - Posicionamiento
  - Efectos visuales
  - Prioridad: \ud83d\udfe2 BAJA
  - Tiempo estimado: 15 min

- [ ] **TASK-035**: Animaciones
  - Fade in de items
  - Hover effects
  - Prioridad: \ud83d\udfe2 BAJA
  - Tiempo estimado: 20 min

---

## \ud83d\udfe1 FASE 7: VISION & MISSION SECTIONS

### \u26aa **Tareas Pendientes**

- [ ] **TASK-036**: Estructura de Vision Section
  - Archivo: `components/sections/Vision.tsx`
  - T\u00edtulo: "OUR VISION"
  - Layout con im\u00e1genes de robots
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

- [ ] **TASK-037**: Contenido de Vision
  - 2 bloques numerados
  - Descripci\u00f3n de cada visi\u00f3n
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 20 min

- [ ] **TASK-038**: Estructura de Mission Section
  - Archivo: `components/sections/Mission.tsx`
  - T\u00edtulo: "OUR MISSION"
  - Imagen grande de tecnolog\u00eda
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

- [ ] **TASK-039**: Contenido de Mission
  - 2 bloques numerados
  - Integraci\u00f3n con datos de Synapse.ia
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 20 min

- [ ] **TASK-040**: Im\u00e1genes de robots optimizadas
  - M\u00faltiples im\u00e1genes
  - Grid layout
  - Prioridad: \ud83d\udfe2 BAJA
  - Tiempo estimado: 30 min

---

## \ud83d\udfe1 FASE 8: PORTFOLIO SECTION

### \u26aa **Tareas Pendientes**

- [ ] **TASK-041**: Estructura de Portfolio Section
  - Archivo: `components/sections/Portfolio.tsx`
  - T\u00edtulo: "OUR PORTFOLIO"
  - Grid de proyectos
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

- [ ] **TASK-042**: Galer\u00eda de proyectos
  - Layout con im\u00e1genes de robots
  - Textos descriptivos
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 45 min

- [ ] **TASK-043**: Hover effects en im\u00e1genes
  - Overlay con informaci\u00f3n
  - Zoom sutil
  - Prioridad: \ud83d\udfe2 BAJA
  - Tiempo estimado: 30 min

- [ ] **TASK-044**: Lightbox/Modal (opcional)
  - Ver imagen en grande
  - Navegaci\u00f3n entre proyectos
  - Prioridad: \ud83d\udfe2 BAJA
  - Tiempo estimado: 1 hora

---

## \ud83d\udfe1 FASE 9: TEAM/CEO SECTION

### \u26aa **Tareas Pendientes**

- [ ] **TASK-045**: Estructura de Team Section
  - Archivo: `components/sections/Team.tsx`
  - T\u00edtulo: "OUR TEAM"
  - Layout profesional
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

- [ ] **TASK-046**: Card de CEO - Rodolfo Figueroa
  - Componente TeamMemberCard
  - Foto profesional con efectos
  - Nombre y cargo
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-047**: Bio del CEO
  - Integraci\u00f3n del texto desde ia-company.txt
  - Credenciales y experiencia
  - Formateo elegante
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 20 min

- [ ] **TASK-048**: Efectos visuales
  - Border glow en foto
  - Animaciones hover
  - Prioridad: \ud83d\udfe2 BAJA
  - Tiempo estimado: 20 min

---

## \ud83d\udfe1 FASE 10: CONTACT SECTION

### \u26aa **Tareas Pendientes**

- [ ] **TASK-049**: Estructura de Contact Section
  - Archivo: `components/sections/Contact.tsx`
  - T\u00edtulo: "CONTACT US"
  - Layout con imagen de robot
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-050**: Informaci\u00f3n de contacto
  - \u00cdcono + Tel\u00e9fono
  - \u00cdcono + Email
  - \u00cdcono + Sitio web
  - \u00cdcono + Direcci\u00f3n
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-051**: Formulario de contacto
  - Campos: Nombre, Email, Mensaje
  - Validaci\u00f3n con React Hook Form + Zod
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 1.5 horas

- [ ] **TASK-052**: Integraci\u00f3n con servicio de email
  - API route en Next.js
  - Env\u00edo de emails (Resend, SendGrid, etc.)
  - Mensajes de \u00e9xito/error
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 1 hora

- [ ] **TASK-053**: Animaciones de feedback
  - Loading state
  - Success animation
  - Error handling
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

---

## \ud83d\udfe1 FASE 11: SEO OPTIMIZATION

### \u26aa **Tareas Pendientes**

- [ ] **TASK-054**: Configurar Metadata din\u00e1micos
  - Archivo: `app/layout.tsx`
  - Title, description, keywords
  - Open Graph tags
  - Twitter cards
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-055**: JSON-LD Structured Data
  - Schema.org markup
  - Organization schema
  - LocalBusiness schema
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 45 min

- [ ] **TASK-056**: Generar sitemap.xml
  - Autogenerado con Next.js
  - Incluir todas las rutas
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 20 min

- [ ] **TASK-057**: Configurar robots.txt
  - Permitir crawling
  - Link a sitemap
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 10 min

- [ ] **TASK-058**: Optimizaci\u00f3n de im\u00e1genes
  - Todas con next/image
  - Alt text descriptivos
  - Tama\u00f1os responsive
  - WebP format
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 1 hora

- [ ] **TASK-059**: Lazy loading
  - Componentes pesados
  - Im\u00e1genes fuera del viewport
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

- [ ] **TASK-060**: Code splitting
  - Dynamic imports
  - Bundle analysis
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 30 min

---

## \ud83d\udfe1 FASE 12: TESTING & REFINAMIENTO

### \u26aa **Tareas Pendientes**

- [ ] **TASK-061**: Testing responsive
  - Mobile (320px - 480px)
  - Tablet (768px - 1024px)
  - Desktop (1280px+)
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 1.5 horas

- [ ] **TASK-062**: Auditor\u00eda Lighthouse
  - Performance: 90+
  - SEO: 95+
  - Accessibility: 90+
  - Best Practices: 95+
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 1 hora

- [ ] **TASK-063**: Optimizaci\u00f3n Core Web Vitals
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 2 horas

- [ ] **TASK-064**: Testing de animaciones
  - Chrome, Firefox, Safari
  - Verificar 60fps
  - Reducir motion para accesibilidad
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 1 hora

- [ ] **TASK-065**: Testing de formularios
  - Validaciones funcionando
  - Mensajes de error claros
  - Env\u00edo exitoso
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-066**: Testing de navegaci\u00f3n
  - Links funcionando
  - Smooth scroll
  - Menu mobile
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-067**: Testing de accesibilidad
  - Keyboard navigation
  - Screen reader compatibility
  - ARIA labels
  - Contrast ratios
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 1 hora

- [ ] **TASK-068**: Cross-browser testing
  - Chrome, Firefox, Safari, Edge
  - Verificar compatibilidad
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 1 hora

- [ ] **TASK-069**: Ajustes finales UI/UX
  - Espaciados
  - Colores
  - Tipograf\u00eda
  - Consistencia visual
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 2 horas

---

## \ud83d\udfe1 FASE 13: DEPLOYMENT

### \u26aa **Tareas Pendientes**

- [ ] **TASK-070**: Preparaci\u00f3n para producci\u00f3n
  - Build test local
  - Verificar env variables
  - Remover console.logs
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-071**: Optimizaci\u00f3n de build
  - Analizar bundle size
  - Tree shaking
  - Compresi\u00f3n
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 1 hora

- [ ] **TASK-072**: Deploy en Vercel
  - Conectar repositorio
  - Configurar proyecto
  - Variables de entorno
  - Prioridad: \ud83d\udd34 ALTA
  - Tiempo estimado: 30 min

- [ ] **TASK-073**: Configuraci\u00f3n de dominio
  - Comprar/configurar dominio
  - DNS setup
  - SSL certificate
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 1 hora

- [ ] **TASK-074**: Monitoreo y analytics
  - Google Analytics
  - Vercel Analytics
  - Error tracking (Sentry)
  - Prioridad: \ud83d\udfe1 MEDIA
  - Tiempo estimado: 45 min

- [ ] **TASK-075**: Documentaci\u00f3n final
  - Actualizar README
  - Gu\u00eda de deployment
  - Changelog
  - Prioridad: \ud83d\udfe2 BAJA
  - Tiempo estimado: 30 min

---

## \ud83d\udcca Estad\u00edsticas del Proyecto

- **Total de Tareas**: 75
- **Completadas**: 3 (\u2705)
- **En Progreso**: 1 (\ud83d\udfe1)
- **Pendientes**: 71 (\u26aa)
- **Tiempo Total Estimado**: ~40-50 horas

---

## \ud83d\uddd2 Notas y Consideraciones

### **Prioridades**
- \ud83d\udd34 **ALTA**: Bloqueante, necesario para continuar
- \ud83d\udfe1 **MEDIA**: Importante pero no bloqueante
- \ud83d\udfe2 **BAJA**: Nice-to-have, opcional

### **Consejos**
- Completar tareas en orden secuencial por fase
- No saltar fases sin terminar la anterior
- Hacer commits frecuentes con mensajes descriptivos
- Probar cada feature antes de continuar

### **Bloqueos Actuales**
- Ninguno

### **Pr\u00f3ximos Pasos Inmediatos**
1. Inicializar proyecto Next.js 15 (TASK-001)
2. Instalar dependencias (TASK-002 y TASK-003)
3. Configurar Tailwind (TASK-004)

---

**\ud83d\ude80 \u00a1Manos a la obra! Let's build this amazing website!**
