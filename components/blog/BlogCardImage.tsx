'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface BlogCardImageProps {
  src: string;
  alt: string;
  isDark: boolean;
}

export function BlogCardImage({ src, alt, isDark }: BlogCardImageProps) {
  return (
    <div className="relative h-48 overflow-hidden flex-shrink-0">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div 
        className={`
          absolute inset-0 bg-gradient-to-t 
          ${isDark ? 'from-gray-900' : 'from-gray-100'} 
          to-transparent opacity-60
        `}
      />
    </div>
  )
}