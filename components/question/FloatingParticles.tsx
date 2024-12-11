'use client'

import { motion } from 'framer-motion'

interface FloatingParticlesProps {
  isDark: boolean;
}

export function FloatingParticles({ isDark }: FloatingParticlesProps) {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`
            absolute w-2 h-2 rounded-full
            ${isDark 
              ? 'bg-white/30 backdrop-blur-sm' 
              : 'bg-blue-500/30 backdrop-blur-sm'
            }
          `}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  )
}