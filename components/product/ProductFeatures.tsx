'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Card, CardContent } from '@/components/ui/card'
import {
  Zap,
  Shield,
  BarChart,
  Cloud,
  Users,
  Lock,
  Clock,
  Globe
} from 'lucide-react'

export function ProductFeatures() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for quick response times'
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'Built-in security features to protect your data'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Detailed insights and reporting capabilities'
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Designed for modern cloud infrastructure'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built for teams of all sizes'
    },
    {
      icon: Lock,
      title: 'Enterprise Ready',
      description: 'Meeting enterprise security standards'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deployed across multiple regions worldwide'
    }
  ]

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Powerful Features
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Everything you need to succeed in the digital world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/80' 
                  : 'bg-white hover:bg-gray-50'
              }`}>
                <CardContent className="p-6">
                  <feature.icon className={`w-12 h-12 mb-4 ${
                    isDark ? 'text-blue-400' : 'text-blue-500'
                  }`} />
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}