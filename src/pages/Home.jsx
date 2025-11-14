import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import CTAButton from '../components/CTAButton'
import Counter from '../components/Counter'
import ProgramCard from '../components/ProgramCard'
import TestimonialCarousel from '../components/TestimonialCarousel'

const programs = [
  { title: 'Orphanage Support', description: 'Providing education, nutrition, and safe shelter to orphans with dignity and care.', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1887&auto=format&fit=crop' },
  { title: 'Food Distribution', description: 'Monthly food baskets and Ramadan iftar distributions to vulnerable families.', image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1887&auto=format&fit=crop' },
  { title: 'Women’s Hygiene Kits', description: 'Access to essential sanitary kits and awareness to support women’s health.', image: 'https://images.unsplash.com/photo-1599666882726-fe28581e3147?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcnBoYW5hZ2UlMjBTdXBwb3J0fGVufDB8MHx8fDE3NjMxMzc3Njh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eef2ff] via-white to-[#eef2ff]" />
        <div className="relative">
          <div className="h-[520px] w-full">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                  Compassion in Action for a Brighter Tomorrow
                </h1>
                <p className="mt-4 text-gray-600 text-base sm:text-lg">
                  Hunayn CBO is a grassroots Islamic charity supporting orphans, families, and communities in need across Ethiopia.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <CTAButton>Donate Now</CTAButton>
                  <button className="inline-flex items-center rounded-full bg-white border border-gray-300 text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-gray-50">Volunteer</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Section subtitle="Our Mission" title="Serving with Integrity and Mercy">
        <p className="text-gray-600 max-w-3xl">We strive to uplift vulnerable families through sustainable programs rooted in compassion, transparency, and community partnership.</p>
      </Section>

      <Section subtitle="Programs" title="Where Your Support Goes">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section subtitle="Impact" title="Together, we are making a difference" className="bg-[#eef2ff]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Counter to={2500} suffix="+" />
            <p className="text-sm text-gray-600 mt-1">Food Baskets</p>
          </div>
          <div className="text-center">
            <Counter to={300} suffix="+" />
            <p className="text-sm text-gray-600 mt-1">Orphans Supported</p>
          </div>
          <div className="text-center">
            <Counter to={120} suffix="+" />
            <p className="text-sm text-gray-600 mt-1">Women Kits</p>
          </div>
          <div className="text-center">
            <Counter to={40} suffix="+" />
            <p className="text-sm text-gray-600 mt-1">Volunteers</p>
          </div>
        </div>
      </Section>

      <Section subtitle="Gallery" title="Moments from the field">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1887&auto=format&fit=crop" alt="" className="w-full h-64 object-cover rounded-2xl" />
          </div>
        </div>
      </Section>

      <Section subtitle="Voices" title="What people say about Hunayn">
        <TestimonialCarousel />
      </Section>

      <Section>
        <div className="bg-[#1025a2] rounded-2xl text-white p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Join us in making a lasting impact</h3>
            <p className="mt-2 text-white/80">Donate, volunteer, or partner with us to bring hope and dignity to those who need it most.</p>
          </div>
          <div className="flex items-center gap-3">
            <CTAButton className="bg-white text-[#1025a2] hover:bg-gray-100">Donate</CTAButton>
            <button className="inline-flex items-center rounded-full bg-transparent border border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white/10">Volunteer</button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
