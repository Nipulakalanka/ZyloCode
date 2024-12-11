'use client'

import { motion } from 'framer-motion'
import { BlogCard } from './BlogCard'
import { blogPosts } from '@/data/blog-posts'
import { useTheme } from '@/components/providers/providers_theme-provider'

export function BlogGrid() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section className={`py-24 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}