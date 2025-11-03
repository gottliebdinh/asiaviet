"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const [hash, setHash] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateHash = () => {
        const currentHash = window.location.hash || ''
        setHash(currentHash)
      }
      // Read hash immediately
      updateHash()
      // Update when pathname changes (important for navigation from /menu)
      const timeout = setTimeout(updateHash, 0)
      // Listen to hash changes
      window.addEventListener('hashchange', updateHash)
      return () => {
        clearTimeout(timeout)
        window.removeEventListener('hashchange', updateHash)
      }
    }
  }, [pathname]) // Re-run when pathname changes

  // Handle scrolling to hash after navigation (MOBILE ONLY)
  useEffect(() => {
    // Run only on mobile widths (< md breakpoint)
    if (typeof window === 'undefined') return
    if (window.matchMedia('(min-width: 768px)').matches) return
    
    if (pathname === '/') {
      // Read hash directly from URL (more reliable after navigation)
      const urlHash = window.location.hash || ''
      const targetId = urlHash.replace('#', '')
      
      // Special handling for home - scroll to top (also when no hash or empty hash)
      if (!urlHash || urlHash === '' || urlHash === '#' || targetId === 'home' || urlHash === '#home') {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 200)
      } else {
        // Wait a bit longer for page to fully render after navigation
        setTimeout(() => {
          // Find visible mobile element (avoid hidden desktop duplicate)
          const candidates = Array.from(document.querySelectorAll(`#${targetId}`)) as HTMLElement[]
          const element = candidates.find((el) => {
            // Check if element is visible (not display:none and in mobile layout)
            const styles = window.getComputedStyle(el)
            return styles.display !== 'none' && el.offsetParent !== null
          }) || candidates[0] || null
          
          if (element) {
            // Scroll to element
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 200)
      }
    }
  }, [pathname, hash])

  const navItems = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'Unsere Geschichte' },
    { href: '/#visit', label: 'Besuche uns' },
    { href: '/menu', label: 'Speisekarte' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      setIsOpen(false)
      
      const targetId = href.replace('/#', '')
      const isHome = targetId === 'home' || href === '/#home'
      
      // If we're not on the homepage, navigate there with hash
      // Use window.location.href to ensure hash is immediately in URL
      if (pathname !== '/') {
        window.location.href = href
        return
      } else {
        // We're already on homepage, just scroll
        if (isHome) {
          // Scroll to top for home
          window.scrollTo({ top: 0, behavior: 'smooth' })
          history.pushState(null, '', href)
          window.dispatchEvent(new HashChangeEvent('hashchange'))
        } else {
          // Find visible mobile element (avoid hidden desktop duplicate)
          const candidates = Array.from(document.querySelectorAll(`#${targetId}`)) as HTMLElement[]
          const element = candidates.find((el) => {
            const styles = window.getComputedStyle(el)
            return styles.display !== 'none' && el.offsetParent !== null
          }) || candidates[0] || null
          
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              // Update hash without jumping
              history.pushState(null, '', href)
              window.dispatchEvent(new HashChangeEvent('hashchange'))
            }, 100)
          } else {
            // Update hash and let useEffect handle scrolling
            history.pushState(null, '', href)
            window.dispatchEvent(new HashChangeEvent('hashchange'))
          }
        }
      }
    } else {
      // Regular page navigation (e.g., /menu)
      setIsOpen(false)
      // Let Next.js handle the navigation naturally
    }
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-4 left-0 right-0 z-50 pointer-events-none px-4">
        <nav className="pointer-events-auto relative mx-auto w-full max-w-xl rounded-[32px] bg-white/50 backdrop-blur-2xl border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-[32px]" />
          <div className="relative flex items-center justify-between px-4 h-14">
          <Link 
            href="/" 
            onClick={(e) => {
              setIsOpen(false)
              if (pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
                history.pushState(null, '', '/')
                window.dispatchEvent(new HashChangeEvent('hashchange'))
              }
            }}
            className="flex items-center transition-transform active:scale-95"
          >
            <Image 
              src="/logo.png" 
              alt="AsiaViet Logo" 
              width={120} 
              height={40} 
              className="h-7 w-auto drop-shadow-sm" 
              priority 
            />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 text-amber-900 rounded-xl bg-white/40 backdrop-blur-xl hover:bg-white/60 active:scale-95 transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-white/30 relative overflow-hidden group"
            aria-label="Menü öffnen"
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
            <span className="relative z-10">
              {isOpen ? (
                <X className="w-5 h-5 transition-transform duration-300 rotate-0" />
              ) : (
                <Menu className="w-5 h-5 transition-transform duration-300" />
              )}
            </span>
          </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-out ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900" />
        <div className="absolute inset-0 bg-amber-900/95 backdrop-blur-xl" />
        
        {/* Navigation */}
        <nav 
          className={`h-full flex flex-col items-center justify-center space-y-6 px-6 relative transition-all duration-500 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item, index) => {
            // Determine active state
            let isActive = false
            
            if (item.href === '/menu') {
              // Menu is active only when on menu page
              isActive = pathname === '/menu'
            } else if (item.href.startsWith('/#')) {
              // Hash links are only active on homepage with matching hash
              if (pathname === '/') {
                const targetHash = item.href.replace('/', '')
                if (item.href === '/#home') {
                  isActive = !hash || hash === '' || hash === '#' || hash === '#home'
                } else {
                  isActive = hash === targetHash
                }
              }
            }

            const isMenu = item.href === '/menu'

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-xl font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-white scale-105' 
                    : 'text-white/90 hover:text-white hover:scale-105'
                } active:scale-95`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <>
                    {isMenu ? (
                      <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-400 rounded-full shadow-lg shadow-orange-500/50" />
                    ) : (
                      <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white/80 rounded-full shadow-sm" />
                    )}
                    <span className="absolute -inset-2 bg-white/5 rounded-lg blur-sm" />
                  </>
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}

