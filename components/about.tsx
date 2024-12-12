'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'

export function About() {
  const { theme } = useTheme()

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: theme === 'christmas'
            ? "url('')"
            : "url('')",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About ZyloCode</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              At ZyloCode, we&apos;re on a mission to revolutionize industries through cutting-edge AI solutions. We believe in harnessing the power of artificial intelligence to solve complex problems and drive innovation across various sectors.
            </p>
            <p className="text-gray-600">
              With offices in Australia and Sri Lanka, we bring a global perspective to local challenges, offering tailored solutions that meet the unique needs of our diverse clientele.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-400 to-pink-500 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Why Choose Us?</h3>
            <ul className="text-white space-y-2">
              <li>✓ Cutting-edge AI technology</li>
              <li>✓ Global expertise, local solutions</li>
              <li>✓ Customized approach for each client</li>
              <li>✓ Proven track record of success</li>
              <li>✓ Commitment to ethical AI practices</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

