'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Testimonial } from '@/types/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
  isDark: boolean
}

export function TestimonialCard({ testimonial, isDark }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        className={`
          ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} 
          backdrop-blur-sm border-white/20
          transform transition-all duration-300
          hover:shadow-xl
        `}
      >
        <CardContent className="p-6">
          <motion.div 
            className="flex items-center mb-6"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-16 h-16 mr-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className={`
                font-semibold text-lg
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {testimonial.name}
              </h3>
              <p className={`
                text-sm font-medium
                ${isDark ? 'text-gray-300' : 'text-gray-700'}
              `}>
                {testimonial.role}
              </p>
              <p className={`
                text-sm
                ${isDark ? 'text-gray-400' : 'text-gray-500'}
              `}>
                {testimonial.company}
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           <p
              className={`
                mb-6 text-lg italic
                ${isDark ? 'text-gray-300' : 'text-gray-600'}
              `}
            >
              &ldquo; {testimonial.quote} &rdquo;
            </p>

            
            <motion.div 
              className="flex"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 text-yellow-400 fill-current" 
                />
              ))}
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}