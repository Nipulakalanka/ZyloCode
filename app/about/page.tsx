'use client'

import { motion } from 'framer-motion'
import { AboutHero } from '@/components/about/AboutHero'
import { AboutMission } from '@/components/about/AboutMission'
import { AboutValues } from '@/components/about/AboutValues'
import { AboutStats } from '@/components/about/AboutStats'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutStats />
      <Footer/>
    </main>
  )
}