'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  colorMode: string
  index: number
}

export function ServiceCard({ icon: Icon, title, description, colorMode, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card 
        className={`
          ${colorMode === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} 
          backdrop-blur-sm 
          border-white/20 
          transition-all 
          duration-300 
          hover:shadow-lg 
          hover:border-blue-500/30
          group
          h-full
          flex
          flex-col
        `}
      >
        <CardHeader className="space-y-4 flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto group-hover:bg-blue-500/20 transition-colors">
            <Icon className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
          </div>
          <CardTitle className={`text-center ${colorMode === 'dark' ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex items-center">
          <p className={`text-center ${colorMode === 'dark' ? 'text-gray-300' : 'text-gray-700'} line-clamp-4`}>
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

