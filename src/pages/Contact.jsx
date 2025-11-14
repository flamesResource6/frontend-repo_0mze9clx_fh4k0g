import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Section title="Contact" subtitle="We would love to hear from you">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> info@hunayn.org</p>
            <p><strong>Phone:</strong> +000 000 0000</p>
            <p><strong>Social:</strong> @hunayn on all platforms</p>
            <div className="h-40 rounded-xl bg-gray-200 flex items-center justify-center text-gray-500">Map placeholder</div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
