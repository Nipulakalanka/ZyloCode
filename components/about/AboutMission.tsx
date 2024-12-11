'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Target, Lightbulb, Users } from 'lucide-react'

export function AboutMission() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  const missions = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize businesses through innovative technology solutions that drive growth and efficiency.'
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To be the global leader in digital transformation, setting new standards in technological excellence.'
    },
    {
      icon: Users,
      title: 'Our Culture',
      description: 'Foster a collaborative environment where creativity, innovation, and excellence thrive.'
    }
  ]

  return (
    <section className={`py-24 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {missions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-gray-100'
                } flex items-center justify-center`}
              >
                <item.icon className={`w-8 h-8 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </motion.div>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {item.title}
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}