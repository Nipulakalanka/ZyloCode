'use client'

import { useTheme } from '@/components/providers/providers_theme-provider'
import { Brain, Cpu, Globe, Layers } from 'lucide-react'
import { ServiceCard } from '@/components/ui/serviceCard'
import { ServicesHeader } from '@/components/ui/servicesHeader'

const services = [
  {
    icon: Brain,
    title: 'AI Consulting',
    description: 'Expert guidance on integrating AI into your business strategy.',
  },
  {
    icon: Cpu,
    title: 'Machine Learning Solutions',
    description: 'Custom ML models to solve complex business problems.',
  },
  {
    icon: Globe,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with our advanced analytics.',
  },
  {
    icon: Layers,
    title: 'Cloud AI Integration',
    description: 'Seamlessly integrate AI capabilities into your cloud infrastructure.',
  },
]

export function Services() {
  const { isChristmas, colorMode } = useTheme()

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 ${
            colorMode === 'dark' 
              ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
              : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
          }`} 
        />
      </div>
      
      {isChristmas && (
        <div className="absolute inset-0 z-10  opacity-10" />
      )}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader colorMode={colorMode} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              colorMode={colorMode}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}