import { NavbarDemo } from './components/navbar'
import { Hero } from './components/hero'
import { GridBackground } from './components/grid-background'
import { HowItWorks } from './components/how-it-works'
import { Footer } from './components/footer'


export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <GridBackground />
      <div className="relative z-10">
        <NavbarDemo />
        <Hero />
        <HowItWorks />
        <Footer />
      </div>
    </main>
  )
}