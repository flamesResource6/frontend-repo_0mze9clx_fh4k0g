import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Section title="Our Story" subtitle="About Hunayn CBO">
        <div className="prose max-w-none">
          <p>
            Hunayn CBO began with a simple vision: to serve the most vulnerable with dignity and compassion. Our work focuses on orphans, families facing food insecurity, and women’s health.
          </p>
          <p>
            Guided by Islamic values of mercy and justice, we operate transparently and partner with local communities to ensure lasting impact.
          </p>
        </div>
      </Section>

      <Section title="Mission, Vision, Values">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold text-gray-900">Mission</h3>
            <p className="text-gray-600 mt-2">Serve vulnerable communities through impactful and transparent programs.</p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold text-gray-900">Vision</h3>
            <p className="text-gray-600 mt-2">A future where every child and family has the support to thrive with dignity.</p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold text-gray-900">Values</h3>
            <p className="text-gray-600 mt-2">Compassion, Integrity, Transparency, Partnership, and Sustainability.</p>
          </div>
        </div>
      </Section>

      <Section title="Team">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center">
              <div className="h-28 w-28 rounded-full bg-gray-200 mx-auto" />
              <p className="mt-3 font-medium">Team Member {i + 1}</p>
              <p className="text-sm text-gray-500">Role</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Registration Status">
        <div className="rounded-2xl border p-6 text-gray-600">
          Registered CBO — Documentation available upon request.
        </div>
      </Section>

      <Footer />
    </div>
  )
}
