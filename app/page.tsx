import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Mission from '@/components/sections/Mission'
import Vision from '@/components/sections/Vision'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Mission />
      <Vision />
      <Contact />
    </main>
  );
}
