export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-10">
            {subtitle && (
              <p className="text-sm font-medium text-[#1025a2] tracking-wide uppercase">{subtitle}</p>
            )}
            {title && (
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
