import { motion } from 'framer-motion'

export default function CTAButton({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: '0 10px 25px rgba(16,37,162,0.25)' }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center rounded-full bg-[#1025a2] text-white px-6 py-3 text-sm font-semibold hover:bg-blue-900 transition-colors ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
