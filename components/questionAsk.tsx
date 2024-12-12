'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Send, Sparkles } from 'lucide-react'

export function QuestionSection() {
  const { colorMode } = useTheme()
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="ask-question" className="py-20 relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 z-0">
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
      </div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 
          variants={itemVariants}
          className={`text-4xl font-bold mb-6 ${colorMode === 'dark' ? 'text-white' : 'text-gray-900'}`}
        >
          Have a Question?
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className={`text-xl mb-8 ${colorMode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
        >
          Feel free to ask us anything. We&apos;re here to help!
        </motion.p>
        <motion.form 
          variants={itemVariants}
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row gap-4"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" className="group w-full sm:w-auto">
              <span className="mr-2">Ask Now</span>
              <motion.span
                animate={{ rotate: isSubmitted ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {isSubmitted ? <Sparkles className="h-5 w-5" /> : <Send className="h-5 w-5" />}
              </motion.span>
            </Button>
          </motion.div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isSubmitted ? 1 : 0, y: isSubmitted ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className={`mt-4 ${colorMode === 'dark' ? 'text-green-400' : 'text-green-600'}`}
        >
          {isSubmitted && "Thanks! We'll get back to you soon."}
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              colorMode === 'dark' ? 'bg-white' : 'bg-blue-500'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}