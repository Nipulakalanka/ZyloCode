'use client'

import { motion } from 'framer-motion'

const words = ['Innovation', 'Creativity', 'Excellence']

export function LoadingText() {
  return (
    <div className="h-6 overflow-hidden">
      {words.map((word, i) => (
        <motion.div
          key={word}
          initial={{ y: 50 }}
          animate={{ y: -50 * i }}
          transition={{
            duration: 0.5,
            delay: i * 1.5,
            repeat: Infinity,
            repeatDelay: words.length * 1.5 - 1.5
          }}
          className="text-lg font-medium text-gray-600 dark:text-gray-300"
        >
          {word}
        </motion.div>
      ))}
    </div>
  )
}