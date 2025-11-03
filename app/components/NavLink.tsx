"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

type Props = {
  href: string
  className?: string
  children: React.ReactNode
}

export default function NavLink({ href, className = '', children }: Props) {
  const pathname = usePathname()
  // Store current hash to trigger re-renders
  const [urlHash, setUrlHash] = useState<string>('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Read hash immediately on mount and on pathname change
    const updateHash = () => {
      const hash = window.location.hash || ''
      setUrlHash(hash)
    }
    
    // Read immediately
    updateHash()
    
    // Force check after a tiny delay (for initial page load with hash)
    const timeout = setTimeout(updateHash, 0)
    
    // Listen to hash changes
    const handleHashChange = () => {
      updateHash()
    }
    window.addEventListener('hashchange', handleHashChange)
    
    // Check periodically
    const interval = setInterval(updateHash, 100)
    
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('hashchange', handleHashChange)
      clearInterval(interval)
    }
  }, [pathname]) // Re-run when pathname changes

  // Normalize hash: empty or # means #home
  const normalizedHash = urlHash === '' || urlHash === '#' ? '#home' : urlHash
  
  // Simple logic: directly compare hash with href
  let isActive = false
  if (href.startsWith('/#')) {
    const targetHash = href.replace('/', '')
    // Normalize target too: / or /#home means #home
    const normalizedTarget = targetHash === '' || targetHash === '#home' ? '#home' : targetHash
    isActive = pathname === '/' && normalizedHash === normalizedTarget
  } else if (href === '/menu') {
    isActive = pathname === '/menu'
  } else if (href === '/') {
    // Home link: active when on / and hash is empty or #home
    isActive = pathname === '/' && normalizedHash === '#home'
  } else {
    isActive = pathname === href
  }

  const base = 'relative px-1 py-1 text-amber-900/90 transition-colors'
  const isMenu = href === '/menu'
  const underlineAnim = isMenu
    ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-rose-500 after:to-orange-400 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
    : 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-amber-900/80 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
  const active = 'after:scale-x-100'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a hash link, handle scrolling manually
    if (href.startsWith('/#')) {
      e.preventDefault()
      
      const targetHash = href.replace('/', '')
      const targetId = targetHash.replace('#', '')
      const isHome = targetId === 'home' || targetHash === '#home' || targetHash === ''
      
      // If we're not on homepage, navigate first
      if (pathname !== '/') {
        // Navigate to homepage with hash - the hash will be in URL after navigation
        window.location.href = href
        return
      }
      
      // We're on homepage, scroll to section
      if (isHome) {
        // Scroll to top for home
        window.scrollTo(0, 0)
        history.pushState(null, '', targetHash || '/')
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      } else {
        // Find the visible element with this id (avoid hidden mobile duplicate)
        const candidates = Array.from(document.querySelectorAll(`#${targetId}`)) as HTMLElement[]
        const element = candidates.find((el) => el.offsetParent !== null) || candidates[0] || null
        if (element) {
          // Simple scrollIntoView - respects scroll-margin-top automatically
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          
          // Update hash without page jump
          history.pushState(null, '', targetHash)
          window.dispatchEvent(new HashChangeEvent('hashchange'))
        } else {
          // Element not found, just update hash
          history.pushState(null, '', targetHash)
          window.dispatchEvent(new HashChangeEvent('hashchange'))
        }
      }
    } else if (href === '/') {
      if (pathname === '/') {
        e.preventDefault()
        window.scrollTo(0, 0)
        history.pushState(null, '', '/#home')
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      }
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={`${base} ${underlineAnim} ${isActive ? active : ''} ${className}`}>
      {children}
    </Link>
  )
}


