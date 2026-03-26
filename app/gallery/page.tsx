import Navigation from '@/components/Navigation'
import Gallery from '@/components/Gallery'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function GalleryPage() {
  return (
    <main className="pt-28">
      <Navigation />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  )
}
