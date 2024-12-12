'use client'

import { motion } from 'framer-motion'
import { LoadingLogo } from './LoadingLogo'
import { LoadingGrid } from './LoadingGrid'
import { LoadingText } from './LoadingText'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onLoadingComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="space-y-8 text-center">
        <LoadingLogo />
        <LoadingGrid />
        <LoadingText />
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 3 }}
          className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full max-w-xs mx-auto"
        />
      </div>
    </motion.div>
  )
}