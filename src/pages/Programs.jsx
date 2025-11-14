import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import ProgramCard from '../components/ProgramCard'

const data = [
  { title: 'Orphanage Support', description: 'Education, nutrition, and safety for children in need.', image: 'https://images.unsplash.com/photo-1599666882726-fe28581e3147?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcnBoYW5hZ2UlMjBTdXBwb3J0fGVufDB8MHx8fDE3NjMxMzc3Njh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Food Distribution', description: 'Monthly food baskets and iftar support for families.', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1887&auto=format&fit=crop' },
  { title: 'Women’s Hygiene Kits', description: 'Sanitary kits and awareness for women’s health.', image: 'https://images.unsplash.com/photo-1599666882726-fe28581e3147?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcnBoYW5hZ2UlMjBTdXBwb3J0fGVufDB8MHx8fDE3NjMxMzc3Njh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Community Assistance', description: 'Emergency response and livelihood support.', image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1887&auto=format&fit=crop' },
]

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Section title="Programs" subtitle="Serving with purpose">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  )
}
