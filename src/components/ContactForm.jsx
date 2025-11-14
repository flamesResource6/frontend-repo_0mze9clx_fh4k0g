import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)

    // Simple API route mock
    await new Promise((r) => setTimeout(r, 700))
    setStatus('success')
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" required placeholder="Your name" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1025a2]" />
        <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1025a2]" />
      </div>
      <input name="subject" placeholder="Subject" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1025a2]" />
      <textarea name="message" required rows={5} placeholder="Your message" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1025a2]" />
      <button type="submit" disabled={status==='loading'} className="inline-flex items-center rounded-full bg-[#1025a2] text-white px-6 py-3 text-sm font-semibold hover:bg-blue-900">
        {status==='loading' ? 'Sending…' : 'Send message'}
      </button>
      {status==='success' && <p className="text-sm text-green-600">Thanks! We will get back to you.</p>}
    </form>
  )
}
