'use client'

import { useCallback } from 'react'

interface ScrollOptions {
  offset?: number
  duration?: number
}

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string, options: ScrollOptions = {}) => {
    const { offset = 0, duration = 1000 } = options
    const element = document.getElementById(elementId)
    
    if (!element) return

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    const startPosition = window.pageYOffset
    const distance = offsetPosition - startPosition
    let startTime: number | null = null

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      // Easing function for smooth acceleration and deceleration
      const ease = (t: number) => {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      }

      window.scrollTo(0, startPosition + distance * ease(progress))

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }, [])

  return { scrollToElement }
}