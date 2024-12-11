'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Shield, Heart, Zap, Star } from 'lucide-react'

export function AboutValues() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We prioritize the security and confidentiality of our clients\' data above all else.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Our success is measured by the success and satisfaction of our clients.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.'
    }
  ]

  return (
    <section className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Our Core Values
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-12 h-12 rounded-lg ${
                  isDark ? 'bg-gray-700' : 'bg-gray-100'
                } flex items-center justify-center mb-4`}
              >
                <value.icon className={`w-6 h-6 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </motion.div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {value.title}
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}