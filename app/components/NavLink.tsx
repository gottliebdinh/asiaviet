"use client"

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

type Props = {
  href: string
  className?: string
  children: React.ReactNode
}

export default function NavLink({ href, className = '', children }: Props) {
  const pathname = usePathname()
  const search = useSearchParams()
  const [hash, setHash] = useState<string>(typeof window !== 'undefined' ? window.location.hash : '')

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isActive = useMemo(() => {
    try {
      // Section links: active when hash matches
      if (href.startsWith('/#')) {
        return hash === href.replace('/', '')
      }
      // Home: only active when at top (no hash)
      if (href === '/') {
        return pathname === '/' && (hash === '' || hash === '#' || hash === '#home')
      }
      // Other routes: exact path match
      return pathname === href
    } catch {
      return false
    }
  }, [pathname, hash, href])

  const base = 'relative px-1 py-1 text-amber-900/90 transition-colors'
  const underlineAnim = 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-amber-900/80 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
  const active = 'after:scale-x-100'

  return (
    <Link href={href} className={`${base} ${underlineAnim} ${isActive ? active : ''} ${className}`}>
      {children}
    </Link>
  )
}


