'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useTheme } from '@/components/providers/providers_theme-provider'

const contactItems = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@ZyloCode.com',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 AI Street, Tech City, USA',
    color: 'from-purple-500 to-purple-600',
  },
]

export function ContactInfo() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <div className="space-y-8">
      {contactItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center space-x-4"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
          >
            <item.icon className="text-white w-6 h-6" />
          </motion.div>
          <div>
            <h4 className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
              {item.title}
            </h4>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{item.content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}