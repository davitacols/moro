import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Impact from '@/components/Impact'
import Events from '@/components/Events'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Impact />
      <Events />
      <CTA />
      <Footer />
    </main>
  )
}