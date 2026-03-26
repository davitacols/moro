import Navigation from '@/components/Navigation'
import Mission from '@/components/Mission'
import Team from '@/components/Team'
import Founder from '@/components/Founder'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="pt-28">
      <Navigation />
      <Mission />
      <Team />
      <Founder />
      <CTA />
      <Footer />
    </main>
  )
}
