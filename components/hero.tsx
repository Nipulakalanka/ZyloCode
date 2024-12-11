'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Button } from '@/components/ui/button'
import { Snow } from './snow'
import { Sparkles, Code2, Cpu, Rocket,Globe  } from 'lucide-react'

import logo from '@/public/Images/logo.png'
import Image from 'next/image'

const glowVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const floatingIconVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export function Hero() {
  const { theme, isChristmas, colorMode } = useTheme()

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {isChristmas && <Snow />}
      
      {/* Animated background gradient */}
      <motion.div 
        className={`absolute inset-0 ${
          colorMode === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/20' 
            : 'bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20'
        }`}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[Code2, Cpu, Rocket, Sparkles].map((Icon, index) => (
          <motion.div
            key={index}
            variants={floatingIconVariants}
            initial="initial"
            animate="animate"
            className={`absolute ${
              colorMode === 'dark' ? 'text-white/10' : 'text-gray-900/10'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`
            }}
          >
            <Icon size={32} />
          </motion.div>
        ))}
      </div>

      {/* <div className="absolute top-4 left-4 z-20">
        <Image
          src="/logo.png"
          alt="ZyloCode Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div> */}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Glowing accent element */}
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className={`absolute -left-20 -top-20 w-64 h-64 rounded-full blur-3xl ${
              colorMode === 'dark' 
                ? 'bg-blue-500/20' 
                : 'bg-indigo-200/30'
            }`}
          />

          <div className="relative">
            <motion.h1 
              className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
                colorMode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`${
                    colorMode === 'dark' 
                      ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400' 
                      : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}
                >
                  Empowering
                </motion.span>
              </span>{' '}
              businesses to thrive by crafting exceptional tech solutions
            </motion.h1>

            <motion.p 
              className={`text-lg md:text-xl mb-8 max-w-2xl ${
                colorMode === 'dark' 
                  ? 'text-gray-300/90 drop-shadow-lg' 
                  : 'text-gray-700/90'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className={`font-semibold ${
                colorMode === 'dark' 
                  ? 'text-blue-400' 
                  : 'text-blue-600'
              }`}>ZyloCode</span> develops innovative digital solutions designed to empower businesses, driving growth and success.{' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={`${
                  colorMode === 'dark' 
                    ? 'text-purple-400' 
                    : 'text-purple-600'
                } font-semibold`}
              >
                Leveraging AI and cutting-edge technologies,
              </motion.span>{' '}
            we transform industries and redefine the boundaries of possibility.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
              colorMode === 'dark' 
                ? 'bg-white/5 text-white/90 border border-white/10' 
                : 'bg-gray-900/5 text-gray-900/90 border border-gray-900/10'
            } backdrop-blur-md shadow-lg`}
          >
            <Globe className="w-4 h-4" />
            <span>Based in <span className="font-semibold">Australia &amp; Sri Lanka</span> · Operate worldwide</span>
          </motion.div>
        </motion.div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${
        colorMode === 'dark' ? 'from-black' : 'from-white'
      } to-transparent z-10`} />
    </div>
  )
}