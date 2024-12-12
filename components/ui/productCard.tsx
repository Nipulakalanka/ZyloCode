'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/providers/providers_theme-provider'

interface ProductCardProps {
  name: string
  description: string
  index: number
}

export function ProductCard({ name, description, index }: ProductCardProps) {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`
        relative rounded-2xl overflow-hidden
        ${isDark ? 'bg-gray-900/50' : 'bg-white'}
        backdrop-blur-lg border
        ${isDark ? 'border-white/10' : 'border-gray-200'}
        transition-all duration-500
        group-hover:scale-[1.02] group-hover:shadow-xl
      `}>
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
            ${isDark ? 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10'
                    : 'bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50'}
          `}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Product Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt={name}
              fill
              className="object-cover"
            />
            <div className={`absolute inset-0 ${
              isDark ? 'bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent'
                    : 'bg-gradient-to-t from-white via-white/50 to-transparent'
            }`} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Floating sparkles */}
          <motion.div
            className="absolute -top-6 right-6"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className={`w-6 h-6 ${
              isDark ? 'text-blue-400/50' : 'text-blue-500/50'
            }`} />
          </motion.div>

          <h3 className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {name}
          </h3>
          
          <p className={`mb-6 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {description}
          </p>

          <Button
            variant="ghost"
            className={`w-full group/button ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
            } border ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}
          >
            <span className="mr-2">Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}