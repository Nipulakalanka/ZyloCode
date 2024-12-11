'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import Link from 'next/link'
import { Twitter, Linkedin, Github, Mail, MapPin, ExternalLink } from 'lucide-react'

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

export function Footer() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ]

  const quickLinks = [
    'Home', 'About', 'Services', 'Products', 'Team', 'Contact'
  ]

  return (
    <footer className={`py-16 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              ZyloCode
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-md`}>
              Empowering the future through AI innovation and digital transformation.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    isDark 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-600'
                  } transition-colors`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className={`text-lg font-semibold ${
              isDark ? 'text-gray-200' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <ExternalLink size={14} className={`mr-2 ${
                    isDark ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className={`${
                      isDark 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    } transition-colors`}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className={`text-lg font-semibold ${
              isDark ? 'text-gray-200' : 'text-gray-900'
            }`}>
              Contact Us
            </h3>
            <div className="space-y-4">
              <motion.a 
                href="mailto:info@ZyloCode.com"
                className={`flex items-center ${
                  isDark 
                    ? 'text-gray-400 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors`}
              >
                <Mail size={16} className="mr-2" />
                info@ZyloCode.com
              </motion.a>
              <div className={`flex items-start ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>123 AI Street, Tech City,<br />Australia</p>
                  <p className="mt-2">456 Innovation Avenue,<br />Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className={`pt-8 mt-8 border-t ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          } text-center`}
        >
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} ZyloCode. All rights reserved.
            <span className="mx-2">·</span>
            <Link 
              href="/privacy-policy" 
              className={`hover:${isDark ? 'text-blue-400' : 'text-blue-600'} transition-colors`}
            >
              Privacy Policy
            </Link>
            <span className="mx-2">·</span>
            <Link 
              href="/terms-of-service" 
              className={`hover:${isDark ? 'text-blue-400' : 'text-blue-600'} transition-colors`}
            >
              Terms of Service
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}