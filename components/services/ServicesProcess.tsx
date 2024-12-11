'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Lightbulb, Code, Rocket } from 'lucide-react'

export function ServicesProcess() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description: 'We start by understanding your vision, goals, and requirements.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Our expert team brings your ideas to life with cutting-edge technology.'
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'We ensure smooth deployment and provide ongoing support.'
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
          <h2 className={`text-3xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Our Process
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className={`hidden md:block absolute top-12 right-0 w-full h-0.5 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-200'
                }`} />
              )}
              
              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-24 h-24 mx-auto mb-6 rounded-full ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg flex items-center justify-center`}
                >
                  <step.icon className={`w-12 h-12 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </motion.div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {step.title}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}