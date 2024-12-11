'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { BlogPost } from '@/types/blog'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { BlogCardImage } from './BlogCardImage'
import { BlogCardMeta } from './BlogCardMeta'

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  const router = useRouter()
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'
  
  const handleCardClick = () => {
    router.push(`/blog/${post.slug}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={handleCardClick}
    >
      <Card className={`
        relative overflow-hidden h-[500px] flex flex-col
        ${isDark 
          ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-white/10' 
          : 'bg-white border-gray-200 shadow-lg'
        }
        backdrop-blur-sm transition-all duration-300
        hover:shadow-xl hover:scale-[1.02]
      `}>
        <motion.div
          className={`
            absolute inset-0 
            ${isDark
              ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
              : 'bg-gradient-to-r from-blue-100/50 to-purple-100/50'
            } 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500
          `}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <BlogCardImage 
          src={post.image} 
          alt={post.title} 
          isDark={isDark} 
        />

        <CardHeader className="flex-shrink-0">
          <CardTitle className={`
            text-xl font-bold line-clamp-2 h-14
            ${isDark
              ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
              : 'text-gray-900'
            }
          `}>
            {post.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 flex-grow flex flex-col">
          <BlogCardMeta 
            date={post.date} 
            readTime={post.readTime} 
            isDark={isDark} 
          />

          <p className={`
            line-clamp-3 flex-grow 
            ${isDark ? 'text-gray-300' : 'text-gray-600'}
          `}>
            {post.excerpt}
          </p>

          <div className="pt-4 mt-auto">
            <Button 
              variant="ghost" 
              className={`
                w-full group relative z-10
                ${isDark
                  ? 'hover:bg-white/10 border-white/10'
                  : 'hover:bg-gray-100 border-gray-200'
                }
                border transition-all duration-300
              `}
              onClick={(e) => {
                e.stopPropagation()
                handleCardClick()
              }}
            >
              <span className={`
                mr-2 
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                Read More
              </span>
              <ArrowRight className={`
                w-4 h-4 transition-transform 
                group-hover:translate-x-1
                ${isDark ? 'text-white' : 'text-gray-900'}
              `} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}