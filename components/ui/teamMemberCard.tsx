'use client'

import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { Linkedin, Twitter, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/providers/providers_theme-provider'

interface TeamMemberProps {
  name: string
  role: string
  image: StaticImageData | string
  bio: string
  linkedin: string
  twitter: string
  github: string
  index: number
}

export function TeamMemberCard({ name, role, image, bio, linkedin, twitter, github, index }: TeamMemberProps) {
  const { theme, isChristmas, colorMode } = useTheme()
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className={`
        relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90
        backdrop-blur-sm border border-white/10 p-6
      `}>
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

        {/* Profile Image Container */}
        <motion.div
          className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-b from-blue-400 to-purple-400"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectPosition: 'center 20%',
            }}
          />
        </motion.div>

        {/* Content */}
        <div className="text-center relative z-10">
          <motion.h3
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {name}
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-3 py-1 text-sm text-blue-300 mb-4"
          >
            {role}
          </motion.div>

          <motion.p
            className="text-gray-300 text-sm mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {bio}
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: Linkedin, href: linkedin, label: 'LinkedIn' },
              { icon: Twitter, href: twitter, label: 'Twitter' },
              { icon: Github, href: github, label: 'GitHub' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* View Profile Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <Button
              variant="ghost"
              className="w-full group hover:bg-white/10 border border-white/10"
            >
              <span className="mr-2">View Profile</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

