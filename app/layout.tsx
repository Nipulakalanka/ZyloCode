import { ThemeProvider } from '@/components/providers/providers_theme-provider'
import { Nav } from '@/components/nav'
import './globals.css'
import { Toaster } from '@/components/ui/toaster' 

export const metadata = {
  title: 'ZyloCode - Innovating Your Digital World',
  description: 'Leading Software company based in Australia & Sri Lanka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider>
          <Nav />
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  )
}

