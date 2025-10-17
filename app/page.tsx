import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Vision from '@/components/sections/Vision'
import Mission from '@/components/sections/Mission'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      <Projects />

      {/* Vision Section */}
      <Vision />

      {/* Mission Section */}
      <Mission />

      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
