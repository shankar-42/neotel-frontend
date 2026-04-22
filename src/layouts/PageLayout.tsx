import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
}

/**
 * Root layout for all pages.
 * Enforces dark mode, base bg/text, font-body, and antialiasing.
 * Navbar + Footer are always present.
 */
export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="dark bg-background text-on-surface font-body min-h-screen antialiased selection:bg-primary selection:text-on-primary">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}

