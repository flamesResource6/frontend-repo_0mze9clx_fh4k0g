import { useEffect, useState } from 'react'

export default function Counter({ to = 100, duration = 1500, prefix = '', suffix = '' }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start = 0
    const startTime = performance.now()

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + (to - start) * eased)
      setValue(current)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [to, duration])

  return (
    <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">
      {prefix}{value.toLocaleString()}{suffix}
    </div>
  )
}
