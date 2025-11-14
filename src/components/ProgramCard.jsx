import { useState } from 'react'

export default function ProgramCard({ title, description, image }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-40 bg-gray-100">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <button
          className="mt-4 text-sm font-medium text-[#1025a2] hover:underline"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Hide details' : 'Read more'}
        </button>
        {open && (
          <div className="mt-3 text-sm text-gray-700">
            {description}
          </div>
        )}
      </div>
    </div>
  )
}
