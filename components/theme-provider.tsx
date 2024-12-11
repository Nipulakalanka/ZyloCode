'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type ColorMode = 'dark' | 'light'
type Theme = 'default' | 'christmas'

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  isChristmas: boolean
  colorMode: ColorMode
  setColorMode: (mode: ColorMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('default')
  const [isChristmas, setIsChristmas] = useState(false)
  const [colorMode, setColorMode] = useState<ColorMode>('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme
    const storedColorMode = localStorage.getItem('colorMode') as ColorMode
    if (storedTheme) {
      setTheme(storedTheme)
      setIsChristmas(storedTheme === 'christmas')
    }
    if (storedColorMode) {
      setColorMode(storedColorMode)
      document.documentElement.classList.toggle('dark', storedColorMode === 'dark')
    }
  }, [])

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    setIsChristmas(newTheme === 'christmas')
    localStorage.setItem('theme', newTheme)
  }

  const changeColorMode = (newMode: ColorMode) => {
    setColorMode(newMode)
    localStorage.setItem('colorMode', newMode)
    document.documentElement.classList.toggle('dark', newMode === 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme, isChristmas, colorMode, setColorMode: changeColorMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

