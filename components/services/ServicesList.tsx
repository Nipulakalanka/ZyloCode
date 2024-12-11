'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Globe, Smartphone, Brain, Cloud, Code, Palette, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Transforming your visionary web ideas into seamless, powerful, and user-friendly experiences.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Lets collaborate to create mobile apps designed to delight and scale to millions.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'We develop cutting-edge AI solutions that enable startups and enterprises to transform and scale.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Get cloud development right and unlock new potential for your software and team. Lets build!',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Code,
    title: 'Software Solutions',
    description: 'We create smart digital solutions for startups and enterprises, revolutionizing the way they work.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Palette,
    title: 'UX Designs',
    description: 'We create seamless, user-centric digital experiences that make your products beloved by all.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Users,
    title: 'Extended Teams',
    description: 'Our team becomes an extension of yours. Whether its your first hire or your hundredth, we scale with you.',
    color: 'from-indigo-500 to-indigo-600'
  }
]

export function ServicesList() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section className={`py-24 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              } group`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 rounded-lg bg-gradient-to-r ${service.color} 
                  flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </motion.div>

              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>

              <p className={`mb-6 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {service.description}
              </p>

              <Button 
                variant="ghost" 
                className={`group ${
                  isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                }`}
              >
                Learn More
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}