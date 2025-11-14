import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Section title="Donate" subtitle="How to support">
        <div className="rounded-2xl border p-6">
          <p className="text-gray-700">Bank transfer and mobile money instructions will be added here. You can also contact us for zakat and sadaqah contributions.</p>
          <div className="mt-4 flex items-center gap-3">
            <CTAButton>Donate Now</CTAButton>
            <button className="inline-flex items-center rounded-full bg-white border border-gray-300 text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-gray-50">Learn More</button>
          </div>
        </div>
      </Section>

      <Section title="Volunteer">
        <form className="space-y-4 max-w-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1025a2]" />
            <input type="email" required placeholder="Email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1025a2]" />
          </div>
          <input placeholder="Phone" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1025a2]" />
          <textarea rows={4} placeholder="Tell us why you want to volunteer" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1025a2]" />
          <CTAButton type="submit">Submit</CTAButton>
        </form>
      </Section>

      <Section title="Partnerships">
        <div className="rounded-2xl border p-6 text-gray-700">
          We collaborate with mosques, NGOs, and community leaders to deliver aid effectively. Reach out to discuss partnerships.
        </div>
      </Section>

      <Footer />
    </div>
  )
}
