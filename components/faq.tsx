'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is artificial intelligence?',
    answer: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. This includes problem-solving, learning, planning, and creativity.',
  },
  {
    question: 'How can AI benefit my business?',
    answer: 'AI can benefit businesses in numerous ways, including automating repetitive tasks, providing data-driven insights, enhancing customer experiences, improving decision-making processes, and enabling predictive maintenance.',
  },
  {
    question: 'Is AI implementation expensive?',
    answer: 'The cost of AI implementation varies depending on the scope and complexity of the project. While initial investments can be significant, the long-term benefits often outweigh the costs through increased efficiency and innovation.',
  },
  {
    question: 'How does ZyloCode ensure data privacy and security?',
    answer: 'At ZyloCode, we prioritize data privacy and security. We employ state-of-the-art encryption methods, conduct regular security audits, and strictly adhere to data protection regulations such as GDPR and CCPA.',
  },
  {
    question: 'What industries does ZyloCode serve?',
    answer: 'ZyloCode serves a wide range of industries including healthcare, finance, manufacturing, retail, and more. Our AI solutions are adaptable and can be customized to meet the specific needs of various sectors.',
  },
]

export function FAQ() {
  const { colorMode } = useTheme()
  const isDark = colorMode === 'dark'
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-network-24970-large.mp4" type="video/mp4" /> */}
        </video>
        <div className={`absolute inset-0 ${isDark 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'}`} />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl font-bold mb-4 ${colorMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`w-full text-left p-4 rounded-lg ${
                  colorMode === 'dark'
                    ? 'bg-gray-800/50 hover:bg-gray-700/50'
                    : 'bg-white/50 hover:bg-gray-100/50'
                } backdrop-blur-sm transition-colors duration-200`}
              >
                <div className="flex justify-between items-center">
                  <h3 className={`text-lg font-semibold ${colorMode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <ChevronUp className={colorMode === 'dark' ? 'text-white' : 'text-gray-900'} />
                  ) : (
                    <ChevronDown className={colorMode === 'dark' ? 'text-white' : 'text-gray-900'} />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-2 p-4 rounded-lg ${
                      colorMode === 'dark' ? 'bg-gray-700/50' : 'bg-gray-100/50'
                    } backdrop-blur-sm`}
                  >
                    <p className={colorMode === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

