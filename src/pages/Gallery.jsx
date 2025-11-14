import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import PhotoGallery from '../components/PhotoGallery'

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Section title="Gallery" subtitle="From the field">
        <PhotoGallery />
      </Section>

      <Footer />
    </div>
  )
}
