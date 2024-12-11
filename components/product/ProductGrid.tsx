'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { products } from '@/data/product'

export function ProductGrid() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Our Products
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover our range of innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/80' 
                  : 'bg-white hover:bg-gray-50'
              }`}>
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {product.name}
                    </h3>
                    <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className={`${
                            isDark
                              ? 'border-gray-700 text-gray-300'
                              : 'border-gray-200 text-gray-600'
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}