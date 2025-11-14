import { useState } from 'react'

const photos = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  url: `https://images.unsplash.com/photo-15${20 + i}000000-000000000000?auto=format&fit=crop&w=1200&q=60`,
  category: ['field', 'event', 'distribution'][i % 3],
}))

const categories = ['all', 'field', 'event', 'distribution']

export default function PhotoGallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'all' ? photos : photos.filter((p) => p.category === filter)

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            className={`px-3 py-1.5 rounded-full text-sm border ${filter === c ? 'bg-[#1025a2] text-white border-[#1025a2]' : 'bg-white text-gray-700 border-gray-200'}`}
            onClick={() => setFilter(c)}
          >
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]
      *:mb-4">
        {filtered.map((p) => (
          <img
            key={p.id}
            src={p.url}
            alt=""
            className="w-full rounded-xl cursor-pointer hover:opacity-90"
            onClick={() => setLightbox(p.url)}
          />
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" className="max-h-[80vh] rounded-xl shadow-2xl" />
        </div>
      )}
    </div>
  )
}
