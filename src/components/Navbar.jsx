import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#1025a2] text-white flex items-center justify-center font-bold">H</div>
            <span className="font-semibold text-gray-900">Hunayn CBO</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-[#1025a2]' : 'text-gray-700 hover:text-gray-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/get-involved"
              className="inline-flex items-center rounded-full bg-[#1025a2] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-900 transition-colors"
            >
              Donate
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${isActive ? 'bg-[#eef2ff] text-[#1025a2]' : 'text-gray-800 hover:bg-gray-100'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/get-involved"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full bg-[#1025a2] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-900"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
