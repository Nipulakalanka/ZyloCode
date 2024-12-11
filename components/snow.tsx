'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Snowflake {
  id: number
  x: number
  size: number
  opacity: number
  blur: number
}

export function Snow() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const flakes = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.6 + 0.4,
      blur: Math.random() * 2,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white"
          initial={{ x: `${flake.x}vw`, y: -20 }}
          animate={{
            y: '100vh',
            x: [
              `${flake.x}vw`,
              `${flake.x + Math.sin(flake.id) * 15}vw`,
              `${flake.x}vw`,
            ],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ 
            width: `${flake.size}px`, 
            height: `${flake.size}px`,
            opacity: flake.opacity,
            filter: `blur(${flake.blur}px)`,
          }}
        />
      ))}
    </div>
  )
}

