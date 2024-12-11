'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import  {ContactForm}  from '@/components/ui/contactForm'
import { ContactInfo } from '@/components/ui/contactinfo'

export function Contact() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-black via-gray-900 to-black'
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full">
          <motion.div
            className={`w-96 h-96 rounded-full ${
              isDark ? 'bg-blue-500/5' : 'bg-blue-500/5'
            } blur-3xl`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full">
          <motion.div
            className={`w-96 h-96 rounded-full ${
              isDark ? 'bg-purple-500/5' : 'bg-purple-500/5'
            } blur-3xl`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get in Touch
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className={`absolute inset-0 -m-4 rounded-2xl ${
                isDark ? 'bg-gray-800/50' : 'bg-white'
              } shadow-xl backdrop-blur-sm -z-10`}
            />
            <div className="p-4">
              <ContactForm />
            </div>
          </motion.div>

          <ContactInfo />
        </div>
      </div>
    </section>
  )
}