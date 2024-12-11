'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Sparkles } from 'lucide-react'

export function AboutHero() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Animated background elements */}
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
        <motion.div
          className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full ${
            isDark ? 'bg-purple-500/5' : 'bg-purple-500/10'
          } blur-3xl`}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
            className="flex justify-center"
          >
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
              isDark 
                ? 'bg-white/5 text-white/90 border border-white/10' 
                : 'bg-gray-900/5 text-gray-900/90 border border-gray-900/10'
            } backdrop-blur-md`}>
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Innovating Since 2024</span>
            </div>
          </motion.div>

          <motion.h1
            className={`text-5xl md:text-7xl font-bold mt-8 mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Empowering Your{' '}
            <span className={`${
              isDark 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Digital Tomorrow
            </span>
          </motion.h1>

          <motion.p
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            At ZyloTech, we leverage the latest advancements in cutting-edge technology 
            to create innovative solutions that not only meet but exceed the unique needs 
            of businesses, empowering them to thrive, scale, and stay ahead in the 
            rapidly evolving digital age.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}