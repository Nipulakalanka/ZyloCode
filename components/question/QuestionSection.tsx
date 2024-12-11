'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { QuestionForm } from './QuestionForm'
import { FloatingParticles } from './FloatingParticles'

export function QuestionSection() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section id="ask-question" className="py-24 relative overflow-hidden scroll-mt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className={`
            absolute inset-0 
            ${ isDark 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
            }
          `}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Radial gradient overlay */}
        <div className={`
          absolute inset-0
          ${isDark
            ? 'bg-radial-gradient-dark'
            : 'bg-radial-gradient-light'
          }
        `} />
      </div>

      <FloatingParticles isDark={isDark} />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`
            text-4xl font-bold mb-6
            ${isDark 
              ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
              : 'text-gray-900'
            }
          `}
        >
          Have a Question?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`
            text-xl mb-8
            ${isDark ? 'text-gray-300' : 'text-gray-600'}
          `}
        >
          Feel free to ask us anything. We're here to help!
        </motion.p>

        <QuestionForm isDark={isDark} />
      </motion.div>
    </section>
  )
}