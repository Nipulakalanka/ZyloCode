'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { ProductCard } from '@/components/ui/productCard'

const products = [
  {
    name: 'ZyloAI Assistant',
    description: 'Experience the future of business automation with our advanced AI-powered virtual assistant. Streamline operations, enhance customer service, and boost productivity with intelligent automation.',
    image: ''
  },
  {
    name: 'ZyloVision',
    description: 'Revolutionary computer vision solution that transforms visual inspection processes. Leverage deep learning for real-time quality control, defect detection, and automated visual analysis.',
    image: ''
  },
  {
    name: 'ZyloPredict',
    description: 'Harness the power of predictive analytics to make data-driven decisions. Our platform combines machine learning with business intelligence for accurate forecasting and strategic insights.',
    image: ''
  }
]

export function Products() {
  const { isChristmas, colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section id="products" className={`py-24 relative overflow-hidden ${
      isDark
        ? 'bg-gradient-to-b from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full ${
            isDark ? 'bg-blue-500/5' : 'bg-blue-500/10'
          } blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [-100, 100, -100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full ${
            isDark ? 'bg-purple-500/5' : 'bg-purple-500/10'
          } blur-3xl`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [100, -100, 100],
          }}
          transition={{
            duration: 20,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {isChristmas && (
        <div className="absolute inset-0 z-0  opacity-10" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
          >
            <h2 className={`text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Our Products
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`mt-6 text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Innovative solutions powered by cutting-edge technology
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              {...product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}