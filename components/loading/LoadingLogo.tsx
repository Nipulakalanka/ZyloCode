'use client'

import { motion } from 'framer-motion'
import { Code2, Zap } from 'lucide-react'

export function LoadingLogo() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2"
    >
      <Code2 className="w-8 h-8 text-blue-500" />
      <motion.span 
        initial={{ width: 0 }}
        animate={{ width: 'auto' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl font-bold overflow-hidden whitespace-nowrap"
      >
        ZyloCode
      </motion.span>
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Zap className="w-6 h-6 text-yellow-400" />
      </motion.div>
    </motion.div>
  )
}