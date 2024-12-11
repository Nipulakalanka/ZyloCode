'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import Image from 'next/image'

// Import tech stack logos
import reactLogo from '@/public/Images/reactjs.png'
import pythonLogo from '@/public/Images/python.png'
import nextjs from '@/public/Images/nextjs.png'
import nustjs from '@/public/Images/nustjs.png'
import java from '@/public/Images/java.png'
import net from '@/public/Images/net.png'
import kubernetes from '@/public/Images/kubernetes.png'
import docker from '@/public/Images/docker.png'

const techStacks = [
  { name: 'React Js', logo: reactLogo, color: 'from-cyan-400 to-blue-500' },
  { name: 'Python', logo: pythonLogo, color: 'from-blue-400 to-indigo-500' },
  { name: 'Next Js', logo: nextjs, color: 'from-indigo-400 to-purple-500' },
  { name: 'Nust Js', logo: nustjs, color: 'from-purple-400 to-pink-500' },
  { name: 'Java', logo: java, color: 'from-red-400 to-orange-500' },
  { name: '.Net', logo: net, color: 'from-emerald-400 to-teal-500' },
  { name: 'Kubernetes', logo: kubernetes, color: 'from-blue-400 to-cyan-500' },
  { name: 'Docker', logo: docker, color: 'from-sky-400 to-blue-500' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function TechStacks() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section className={`py-24 relative overflow-hidden ${
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
            Our Technology Stack
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className={`mt-6 text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Cutting-edge technologies we use to build exceptional solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {techStacks.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className={`
                relative z-10 p-6 rounded-2xl backdrop-blur-sm
                ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}
                border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'}
                transition-all duration-300 group-hover:shadow-xl
                group-hover:border-transparent
              `}>
                <div className="relative h-24 flex items-center justify-center mb-4">
                  <motion.div
                    className={`
                      absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                      bg-gradient-to-r ${tech.color} blur-xl transition-opacity duration-300
                    `}
                  />
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={64}
                    height={64}
                    className="relative z-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <motion.p
                  className={`text-center font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  } group-hover:text-white transition-colors duration-300`}
                >
                  {tech.name}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}