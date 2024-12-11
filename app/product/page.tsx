'use client'

import { motion } from 'framer-motion'
import { ProductHero } from '@/components/product/ProductHero'
import { ProductGrid } from '@/components/product/ProductGrid'
import { ProductFeatures } from '@/components/product/ProductFeatures'
import { Footer } from '@/components/footer'
// import { ProductPricing } from '@/components/sections/products/product-pricing'
// import { ProductTestimonials } from '@/components/sections/products/product-testimonials'
// import { ProductCTA } from '@/components/sections/products/product-cta'

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <ProductHero />
      <ProductGrid />
      <ProductFeatures />
      <Footer/>
      {/* <ProductPricing />
      <ProductTestimonials />
      <ProductCTA /> */}
    </main>
  )
}