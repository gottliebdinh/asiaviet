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
  const [hash, setHash] = useState<string>(typeof window !== 'undefined' ? window.location.hash : '')

  useEffect(() => {
    // Update hash immediately on mount and when it changes
    const updateHash = () => setHash(window.location.hash)
    updateHash()
    
    // Listen to hash changes
    window.addEventListener('hashchange', updateHash)
    // Also check periodically in case smooth scroll updates hash without firing hashchange
    const interval = setInterval(updateHash, 150)
    
    return () => {
      window.removeEventListener('hashchange', updateHash)
      clearInterval(interval)
    }
  }, [])

  const isActive = useMemo(() => {
    try {
      // Section links: active when hash matches
      if (href.startsWith('/#')) {
        const targetHash = href.replace('/', '')
        return hash === targetHash
      }
      // Home: active when hash is empty or #home, and on homepage
      if (href === '/#home' || href === '/') {
        return pathname === '/' && (!hash || hash === '' || hash === '#' || hash === '#home')
      }
      // Other routes: exact path match
      return pathname === href
    } catch {
      return false
    }
  }, [pathname, hash, href])

  const base = 'relative px-1 py-1 text-amber-900/90 transition-colors'
  const isMenu = href === '/menu'
  const underlineAnim = isMenu
    ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-rose-500 after:to-orange-400 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
    : 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-amber-900/80 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
  const active = 'after:scale-x-100'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a hash link, update hash immediately after navigation
    if (href.startsWith('/#')) {
      const targetHash = href.replace('/', '')
      // Small delay to let browser update hash first
      setTimeout(() => {
        setHash(window.location.hash)
      }, 100)
    } else if (href === '/') {
      setTimeout(() => {
        setHash('')
      }, 100)
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={`${base} ${underlineAnim} ${isActive ? active : ''} ${className}`}>
      {children}
    </Link>
  )
}


