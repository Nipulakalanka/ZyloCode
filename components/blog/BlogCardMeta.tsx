'use client'

import { Calendar, Clock } from 'lucide-react'

interface BlogCardMetaProps {
  date: string;
  readTime: number;
  isDark: boolean;
}

export function BlogCardMeta({ date, readTime, isDark }: BlogCardMetaProps) {
  return (
    <div className={`
      flex items-center space-x-4 text-sm 
      ${isDark ? 'text-gray-400' : 'text-gray-500'}
      flex-shrink-0
    `}>
      <div className="flex items-center">
        <Calendar className="w-4 h-4 mr-1" />
        {date}
      </div>
      <div className="flex items-center">
        <Clock className="w-4 h-4 mr-1" />
        {readTime} min read
      </div>
    </div>
  )
}