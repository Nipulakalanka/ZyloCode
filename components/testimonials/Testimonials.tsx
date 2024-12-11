'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import Image from 'next/image'
import { TestimonialsHeader } from './TestimonialsHeader'
import { TestimonialCard } from './TestimonialsCard'
import { testimonials } from '@/data/testimonials-post'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export function Testimonials() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
      
        <div className={`
          absolute inset-0 
          ${isDark 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'}
          backdrop-blur-sm
        `} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsHeader isDark={isDark} />
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              isDark={isDark}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}