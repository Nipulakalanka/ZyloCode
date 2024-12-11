'use client'

import { motion } from 'framer-motion'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { BlogNewsletter } from '@/components/blog/BlogNewsletter'
import { Footer } from '@/components/footer'

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <BlogGrid />
      <BlogNewsletter />
      <Footer/>
    </main>
  )
}