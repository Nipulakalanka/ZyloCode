'use client'

import { motion } from 'framer-motion'

interface TestimonialsHeaderProps {
  isDark: boolean
}

export function TestimonialsHeader({ isDark }: TestimonialsHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className={`
        text-4xl font-bold mb-4
        ${isDark ? 'text-white' : 'text-gray-900'}
      `}>
        What Our Clients Say
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
      />
    </motion.div>
  )
}