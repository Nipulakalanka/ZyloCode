'use client'

import { motion } from 'framer-motion'

export function LoadingGrid() {
  return (
    <div className="grid grid-cols-3 gap-1">
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: i * 0.1,
            ease: "easeOut"
          }}
          className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"
        />
      ))}
    </div>
  )
}