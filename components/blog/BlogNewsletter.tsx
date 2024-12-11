'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/app/hooks/use-toast'

export function BlogNewsletter() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, created_at: new Date().toISOString() }])

      if (error) throw error

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      })
      
      setEmail('')
    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Mail className={`w-12 h-12 mx-auto mb-6 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`} />
          <h2 className={`text-3xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Subscribe to Our Newsletter
          </h2>
          <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Get the latest insights and updates delivered to your inbox
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
              disabled={isLoading}
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}