'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Users, Smile, Award, Briefcase } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Employees', value: 150, suffix: '+' },
  { icon: Smile, label: 'Happy Clients', value: 500, suffix: '+' },
  { icon: Briefcase, label: 'Projects Completed', value: 1000, suffix: '+' },
  { icon: Award, label: 'Awards Won', value: 50, suffix: '+' },
]

export function Stats() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27872-large.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${isDark 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'}`} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <motion.h3
                className={`text-4xl font-bold mb-2 ${colorMode === 'dark' ? 'text-white' : 'text-gray-900'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                {stat.value}{stat.suffix}
              </motion.h3>
              <p className={`text-lg ${colorMode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

