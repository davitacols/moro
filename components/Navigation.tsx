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
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-full border px-3 transition-all duration-300 sm:px-6 ${
          isScrolled || isMobileMenuOpen
            ? 'border-white/75 bg-white/90 shadow-[0_22px_70px_-38px_rgba(36,19,47,0.78)] backdrop-blur-xl'
            : 'border-white/50 bg-white/[0.65] backdrop-blur-lg'
        }`}
      >
        <div className="flex h-[4.5rem] items-center justify-between gap-3 sm:h-20 sm:gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="Morolake Cares Logo"
              width={44}
              height={44}
              className="h-10 w-10 rounded-full border border-white/70 bg-white/80 p-1 shadow-md sm:h-12 sm:w-12"
            />
            <div className="min-w-0">
              <div className="truncate font-display text-base font-black uppercase tracking-[0.14em] text-slate-900 sm:text-xl sm:tracking-[0.2em] lg:text-2xl">
                Morolake Cares
              </div>
              <div className="hidden text-sm tracking-[0.18em] text-slate-500 lg:block">
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
            className={`group flex items-center gap-2.5 rounded-full border px-2.5 py-2 text-slate-900 transition-all duration-300 md:hidden ${
              isMobileMenuOpen
                ? 'border-purple/15 bg-purple/10 shadow-[0_18px_40px_-26px_rgba(83,19,100,0.8)]'
                : 'border-slate-200/80 bg-white/80 shadow-[0_14px_34px_-24px_rgba(36,19,47,0.5)] hover:border-purple/20 hover:bg-purple/5'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="pl-1 text-[0.65rem] font-black uppercase tracking-[0.28em] text-slate-700 transition-colors duration-300 group-hover:text-purple">
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </span>
            <span
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'border-purple/20 bg-white text-purple'
                  : 'border-slate-200 bg-white/90 text-slate-900'
              }`}
            >
              <span
                className={`absolute h-0.5 rounded-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'w-5 rotate-45' : 'w-5 -translate-y-[5px]'
                }`}
              />
              <span
                className={`absolute h-0.5 rounded-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'w-5 -rotate-45' : 'w-3 translate-x-1 translate-y-[5px]'
                }`}
              />
              <span
                className={`absolute h-1.5 w-1.5 rounded-full bg-[#f2bb52] transition-all duration-300 ${
                  isMobileMenuOpen ? 'scale-0 opacity-0' : '-translate-x-[7px] translate-y-[5px] opacity-100'
                }`}
              />
            </span>
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
