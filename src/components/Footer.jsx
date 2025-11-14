import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#1a1a1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-[#1025a2] text-white flex items-center justify-center font-bold">H</div>
              <span className="font-semibold text-white">Hunayn CBO</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Compassion in action. Supporting orphans, families in need, and communities with dignity.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Organization</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/get-involved" className="hover:text-white">Donate</Link></li>
              <li><Link to="/get-involved" className="hover:text-white">Volunteer</Link></li>
              <li><Link to="/get-involved" className="hover:text-white">Partner with us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@hunayn.org</li>
              <li>Phone: +000 000 0000</li>
              <li>Location: Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Hunayn CBO. All rights reserved.</p>
          <Link to="/get-involved" className="inline-flex items-center rounded-full bg-[#1025a2] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-900">
            Quick Donate
          </Link>
        </div>
      </div>
    </footer>
  )
}
