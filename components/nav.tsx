'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Switch } from '@/components/ui/switch'
import { useSmoothScroll } from '@/app/hooks/use-smooth-scroll'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, colorMode, setColorMode } = useTheme()
  const { scrollToElement } = useSmoothScroll()

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/product', label: 'Products' },
    { href: '/blogMain', label: 'Blog' },
  ]

  const handleScrollToQuestion = () => {
    scrollToElement('ask-question', { offset: 64, duration: 1200 })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const nav = document.querySelector('nav')
      if (nav) {
        if (scrollPosition > 50) {
          nav.classList.add('bg-opacity-90', 'backdrop-blur-md')
        } else {
          nav.classList.remove('bg-opacity-90', 'backdrop-blur-md')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white/10 dark:bg-black/10 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              ZyloCode
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Christmas Mode</span>
              <Switch
                checked={theme === 'christmas'}
                onCheckedChange={() => setTheme(theme === 'christmas' ? 'default' : 'christmas')}
              />
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
              className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              {colorMode === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="default" 
                onClick={handleScrollToQuestion}
                className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300"
              >
                Let&apos;s Talk
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Christmas Mode</span>
              <Switch
                checked={theme === 'christmas'}
                onCheckedChange={() => setTheme(theme === 'christmas' ? 'default' : 'christmas')}
              />
            </div>
            <div className="px-3 py-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="default" 
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300"
                  onClick={() => {
                    handleScrollToQuestion()
                    setIsOpen(false)
                  }}
                >
                  Let&apos;s Talk
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}