'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Send, Sparkles } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/app/hooks/use-toast'

interface QuestionFormProps {
  isDark: boolean;
}

export function QuestionForm({ isDark }: QuestionFormProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitted(true)
    try {
      const { error } = await supabase
        .from('question_ask')
        .insert([{ email, created_at: new Date().toISOString() }])

      if (error) throw error

      toast({
        title: "Email Submitted!",
        description: "We've received your email. We'll get back to you shortly.",
        variant: "default",
      })
      
      setEmail('')
    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      toast({
        title: "Submission Failed",
        description: "We couldn't submit your question. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitted(false)
    }
    
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`
            flex-grow backdrop-blur-sm
            ${isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'}
          `}
        />
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            type="submit" 
            className={`
              group w-full sm:w-auto
              ${isDark 
                ? 'bg-white text-gray-900 hover:bg-white/90' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
              }
            `}
          >
            <span className="mr-2">Ask Now</span>
            <motion.span
              animate={{ rotate: isSubmitted ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {isSubmitted ? <Sparkles className="h-5 w-5" /> : <Send className="h-5 w-5" />}
            </motion.span>
          </Button>
        </motion.div>
      </form>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isSubmitted ? 1 : 0, y: isSubmitted ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className={`mt-4 text-center ${isDark ? 'text-green-400' : 'text-green-600'}`}
      >
        {isSubmitted && "Thanks! We'll get back to you soon."}
      </motion.div>
    </motion.div>
  )
}