'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/app/hooks/use-toast'

export function ContactForm() {
  const [formState, setFormState] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData])

      if (error) throw error

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      })
      
      setFormData({ name: '', email: '', message: '' })
      setFormState('sent')
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      })
      setFormState('idle')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-2">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-background/50 backdrop-blur-sm border-primary/10 focus:border-primary/30 h-12"
        />
      </div>
      <div className="space-y-2">
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-background/50 backdrop-blur-sm border-primary/10 focus:border-primary/30 h-12"
        />
      </div>
      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-background/50 backdrop-blur-sm border-primary/10 focus:border-primary/30 min-h-[120px]"
        />
      </div>
      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        disabled={formState !== 'idle'}
      >
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={false}
          animate={{
            opacity: formState === 'sending' ? 0.7 : 1,
          }}
        >
          {formState === 'idle' && (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
          {formState === 'sending' && 'Sending...'}
          {formState === 'sent' && '✓ Message Sent!'}
        </motion.div>
      </Button>
    </motion.form>
  )
}