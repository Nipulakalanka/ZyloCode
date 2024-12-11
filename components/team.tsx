'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/providers_theme-provider'
import { TeamMemberCard } from '@/components/ui/teamMemberCard'

//import Images
import achira from '@/public/Images/team/achira.png'
import chathuri from '@/public/Images/team/chathuri.png'
import ash from '@/public/Images/team/ash.png'

const teamMembers = [
  {
    name: 'Mr. Aashish Wagley',
    role: 'Director',
    image: ash,
    bio: 'Ph.D. in Machine Learning from MIT. Pioneer in AI research with over 15 years of experience leading innovative tech companies.',
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
    github: 'https://github.com/janesmith'
  },
  {
    name: 'Mr. Achira De Silva',
    role: 'CEO',
    image: achira,
    bio: 'Former Google AI researcher. Specialized in deep learning and neural networks. Led multiple successful AI projects.',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    github: 'https://github.com/johndoe'
  },
  {
    name: 'Miss Chathuri Silva',
    role: 'CEO',
    image: chathuri,
    bio: 'Data science expert with experience at Amazon and Microsoft. Specialized in big data analytics and predictive modeling.',
    linkedin: 'https://www.linkedin.com/in/sarahjohnson',
    twitter: 'https://twitter.com/sarahjohnson',
    github: 'https://github.com/sarahjohnson'
  },
  {
    name: 'Mr.Chamod Jayampathi',
    role: 'CTO',
    image: '',
    bio: 'Full-stack developer with expertise in scalable systems. Previously built AI-powered solutions at Tesla.',
    linkedin: 'https://www.linkedin.com/in/michaelchen',
    twitter: 'https://twitter.com/michaelchen',
    github: 'https://github.com/michaelchen'
  }
]

export function Team() {
  const { isChristmas, colorMode } = useTheme()
  const isDark = colorMode === 'dark'

  return (
    <section id="team" className={`py-24 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-0 left-0 w-96 h-96 rounded-full ${
            isDark ? 'bg-blue-500/5' : 'bg-blue-500/10'
          } blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-0 right-0 w-96 h-96 rounded-full ${
            isDark ? 'bg-purple-500/5' : 'bg-purple-500/10'
          } blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {isChristmas && (
        <div className="absolute inset-0 z-0  opacity-10" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Meet Our Team
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className={`mt-6 text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Exceptional minds driving innovation and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              {...member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}