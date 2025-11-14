import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote: 'Your support helped us feed hundreds of families this Ramadan. May you be rewarded.',
    name: 'Aisha, Beneficiary',
  },
  {
    quote: 'We trust Hunayn CBO because of their transparency and grassroots work.',
    name: 'Ahmed, Donor',
  },
  {
    quote: 'Volunteering with Hunayn changed my perspective on community service.',
    name: 'Liya, Volunteer',
  },
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-200 p-8">
      <div className="transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
        <div className="flex">
          {testimonials.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <blockquote className="text-xl text-gray-800">“{t.quote}”</blockquote>
              <p className="mt-4 text-sm text-gray-500">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-[#1025a2]' : 'bg-gray-300'}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
