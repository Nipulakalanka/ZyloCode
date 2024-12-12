'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ServicesCTA() {
  const { colorMode } = useTheme()
  const router = useRouter()
  const isDark = colorMode === 'dark'

  const handleGetStarted = () => {
    console.log('hit');
    router.push('/#contact')
  }

  return (
    <section className={`py-24 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Transform Your Business?
          </h2>
          <p className={`text-xl mb-8 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Let&apos;s discuss how we can help you achieve your goals with our innovative solutions.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button onClick={handleGetStarted} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-6 text-lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}