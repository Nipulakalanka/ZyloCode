'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'
  
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className={`min-h-screen pt-16 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 ${
          isDark ? 'bg-black/60' : 'bg-white/60'
        }`} />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {post.title}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center items-center space-x-6 text-sm"
            >
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime} min read
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/#blog">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <div className="flex items-center mb-8 space-x-4">
          <div>
            <div className="font-semibold">{post.author.name}</div>
            <div className="text-sm text-gray-500">{post.author.role}</div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <div
                key={tag}
                className="flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}