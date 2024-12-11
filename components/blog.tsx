'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { BlogCard } from './blog/BlogCard'
import { blogPosts } from '@/data/blog-posts'

export function Blog() {
  const { isChristmas, colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section id="blog" className={`py-24 relative overflow-hidden ${
      isDark
        ? 'bg-gradient-to-b from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-0 left-0 w-96 h-96 rounded-full ${
            isDark ? 'bg-blue-500/5' : 'bg-blue-500/10'
          } blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-0 right-0 w-96 h-96 rounded-full ${
            isDark ? 'bg-purple-500/5' : 'bg-purple-500/10'
          } blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {isChristmas && (
        <div className="absolute inset-0 z-0 opacity-10" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Latest from Our Blog
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className={`mt-6 text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Insights and innovations from our team of experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={post}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}