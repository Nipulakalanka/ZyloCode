'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Users, Award, Globe, Cpu } from 'lucide-react'

export function AboutStats() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards Won',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Globe,
      value: '30+',
      label: 'Countries Served',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Cpu,
      value: '100+',
      label: 'AI Solutions',
      color: 'from-red-400 to-red-600'
    }
  ]

  return (
    <section className={`py-24 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}