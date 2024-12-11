'use client'

import { motion } from 'framer-motion'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServicesList } from '@/components/services/ServicesList'
import { ServicesProcess } from '@/components/services/ServicesProcess'
import { ServicesCTA } from '@/components/services/ServicesCTA'
import { Footer } from '@/components/footer'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesCTA />
      <Footer/>
    </main>
  )
}