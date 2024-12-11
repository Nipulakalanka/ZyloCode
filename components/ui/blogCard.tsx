'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { BlogPost } from '@/types/blog'
import { useTheme } from '@/components/providers/providers_theme-provider'

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  const router = useRouter()
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card className={`
        relative overflow-hidden h-[500px] flex flex-col
        ${isDark 
          ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-white/10' 
          : 'bg-white border-gray-200 shadow-lg'
        }
        backdrop-blur-sm transition-all duration-300
        group-hover:shadow-xl group-hover:scale-[1.02]
      `}>
        <motion.div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
              : 'bg-gradient-to-r from-blue-100/50 to-purple-100/50'
          } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className={`absolute inset-0 bg-gradient-to-t ${
            isDark 
              ? 'from-gray-900' 
              : 'from-gray-100'
          } to-transparent opacity-60`} />
        </div>

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
          <div className={`flex items-center space-x-4 text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          } flex-shrink-0`}>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime} min read
            </div>
          </div>

          <p className={`line-clamp-3 flex-grow ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {post.excerpt}
          </p>

          <div className="pt-4 mt-auto">
            <Button 
              variant="ghost" 
              className={`
                w-full group 
                ${isDark
                  ? 'hover:bg-white/10 border-white/10'
                  : 'hover:bg-gray-100 border-gray-200'
                }
                border transition-all duration-300
              `}
              onClick={() => router.push(`/blog/${post.slug}`)}
            >
              <span className={`mr-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
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