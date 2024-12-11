'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Code2 } from 'lucide-react'

export function ServicesHero() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full ${
            isDark ? 'bg-blue-500/5' : 'bg-blue-500/10'
          } blur-3xl`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="flex justify-center mb-6"
        >
          <div className={`p-3 rounded-xl ${
            isDark ? 'bg-blue-500/10' : 'bg-blue-500/5'
          }`}>
            <Code2 className={`w-8 h-8 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`} />
          </div>
        </motion.div>

        <motion.h1
          className={`text-4xl md:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Our{' '}
          <span className={`${
            isDark 
              ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Services
          </span>
        </motion.h1>

        <motion.p
          className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Empowering businesses with cutting-edge technology solutions
          that drive growth and innovation
        </motion.p>
      </div>
    </section>
  )
}