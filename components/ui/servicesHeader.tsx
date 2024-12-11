'use client'

import { motion } from 'framer-motion'

interface ServicesHeaderProps {
  colorMode: string
}

export function ServicesHeader({ colorMode }: ServicesHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className={`text-4xl font-bold mb-6 ${colorMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Our Services
      </h2>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
        <div className="w-4 h-1 bg-blue-300 rounded-full"></div>
        <div className="w-2 h-1 bg-blue-200 rounded-full"></div>
      </div>
    </motion.div>
  )
}