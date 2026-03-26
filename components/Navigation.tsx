'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Impact', href: '/#impact' },
  { name: 'Events', href: '/#events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-full border px-4 transition-all duration-300 sm:px-6 ${
          isScrolled || isMobileMenuOpen
            ? 'border-white/75 bg-white/90 shadow-[0_22px_70px_-38px_rgba(36,19,47,0.78)] backdrop-blur-xl'
            : 'border-white/50 bg-white/[0.65] backdrop-blur-lg'
        }`}
      >
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="Morolake Cares Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border border-white/70 bg-white/80 p-1 shadow-md"
            />
            <div className="min-w-0">
              <div className="truncate font-display text-xl font-black uppercase tracking-[0.2em] text-slate-900 lg:text-2xl">
                Morolake Cares
              </div>
              <div className="hidden text-sm tracking-[0.18em] text-slate-500 md:block">
                Every life matters
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (pathname === '/about' && link.href === '/about') ||
                (pathname === '/gallery' && link.href === '/gallery') ||
                (pathname === '/contact' && link.href === '/contact')

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-[0.24em] transition-colors duration-300 ${
                    isActive ? 'text-purple' : 'text-slate-700 hover:text-purple'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="https://paystack.com/pay/morolakecares"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Donate now
            </Link>
          </div>

          <button
            className="rounded-full border border-transparent p-2 text-slate-900 transition-colors duration-300 hover:border-purple/20 hover:bg-purple/5 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex h-6 w-6 flex-col items-center justify-center">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`mt-1 block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`mt-1 block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isMobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-purple/10 py-5">
                <div className="space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block rounded-2xl border border-transparent px-4 py-3 text-sm font-bold uppercase tracking-[0.24em] text-slate-700 transition-all duration-300 hover:border-purple/[0.15] hover:bg-purple/5 hover:text-purple"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    href="https://paystack.com/pay/morolakecares"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-2 w-full"
                  >
                    Donate now
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  )
}
