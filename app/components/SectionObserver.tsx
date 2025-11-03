"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SectionObserver() {
  const pathname = usePathname()

  useEffect(() => {
    // Only observe on homepage and DESKTOP ONLY (mobile has its own navigation)
    if (pathname !== '/') return
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) return

    let observer: IntersectionObserver | null = null
    let retryCount = 0
    const maxRetries = 20

    const initObserver = () => {
      const sectionIds = ['home', 'about', 'visit']
      const getVisibleById = (id: string): HTMLElement | null => {
        const nodes = Array.from(document.querySelectorAll(`#${id}`)) as HTMLElement[]
        // Prefer visible element (offsetParent !== null means not display:none and in layout)
        const visible = nodes.find((el) => el.offsetParent !== null)
        return visible || nodes[0] || null
      }
      let sections = sectionIds
        .map((id) => getVisibleById(id))
        .filter(Boolean) as HTMLElement[]

      if (sections.length === 0) {
        // Retry if sections not found yet (e.g., after navigation)
        if (retryCount < maxRetries) {
          retryCount++
          setTimeout(initObserver, 100)
        }
        return
      }

      let currentHash = window.location.hash
      const setHash = (hash: string) => {
        // Normalize hash: empty or #home means home
        const normalizedHash = hash === '' || hash === '#' || hash === '#home' ? '#home' : hash.startsWith('#') ? hash : `#${hash}`
        
        if (currentHash === normalizedHash) return
        currentHash = normalizedHash
        // Update both history AND window.location.hash so NavLink can read it
        history.replaceState(null, '', normalizedHash || window.location.pathname)
        if (window.location.hash !== normalizedHash) {
          window.location.hash = normalizedHash
        }
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      }

      // Build a scroll map of section absolute tops adjusted by scroll-margin-top
      const computeSectionTops = () => {
        return sections
          .map((el) => {
            const rect = el.getBoundingClientRect()
            const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
            const absoluteTop = rect.top + currentScrollY
            const styles = window.getComputedStyle(el)
            const scrollMarginTop = parseInt(styles.scrollMarginTop) || 0
            return { id: el.id, top: Math.max(0, absoluteTop - scrollMarginTop) }
          })
          .sort((a, b) => a.top - b.top)
      }

      let sectionTops = computeSectionTops()
      const computeBoundaries = () => {
        const b: Array<{ id: string; start: number; end: number }> = []
        if (sectionTops.length === 0) return b
        for (let i = 0; i < sectionTops.length; i++) {
          const cur = sectionTops[i]
          const prev = sectionTops[i - 1]
          const next = sectionTops[i + 1]
          const start = prev ? (prev.top + cur.top) / 2 : -Infinity
          const end = next ? (cur.top + next.top) / 2 : Infinity
          b.push({ id: cur.id, start, end })
        }
        return b
      }
      let boundaries = computeBoundaries()
      // Prevent early hash overrides while we honor an initial hash navigation
      let isBootstrapping = false

      // Remember the initial hash to preserve it during bootstrapping
      let preservedHash: string | null = null
      
      const updateActiveSection = () => {
        // If we have a preserved hash and we're still bootstrapping, don't update
        if (isBootstrapping && preservedHash) {
          return
        }
        
        const y = window.pageYOffset || document.documentElement.scrollTop || 0
        // Choose the section whose midpoint-interval contains current y
        let activeId = sectionTops[0]?.id || 'home'
        for (const seg of boundaries) {
          if (y >= seg.start && y < seg.end) {
            activeId = seg.id
            break
          }
        }
        setHash(`#${activeId}`)
      }

      // Listen to scroll (throttled) and resize/orientation changes to recompute positions
      let scrollTimeout: NodeJS.Timeout | null = null
      const onScroll = () => {
        if (isBootstrapping) return
        if (scrollTimeout) return
        scrollTimeout = setTimeout(() => {
          updateActiveSection()
          scrollTimeout = null
        }, 50)
      }

      const onResize = () => {
        // Re-select visible sections (avoid hidden mobile duplicates on desktop)
        sections = sectionIds
          .map((id) => getVisibleById(id))
          .filter(Boolean) as HTMLElement[]
        // Recompute positions after layout changes
        sectionTops = computeSectionTops()
        boundaries = computeBoundaries()
        // Update active section immediately after recompute
        if (!isBootstrapping) {
          updateActiveSection()
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onResize, { passive: true })
      window.addEventListener('orientationchange', onResize)

      retryCount = 0 // Reset on success

      // Honor initial hash if present: scroll to it properly
      const initialHash = window.location.hash
      const isValidInitial = initialHash === '#home' || initialHash === '#about' || initialHash === '#visit'
      if (isValidInitial) {
        isBootstrapping = true
        preservedHash = initialHash
        // Ensure hash is set immediately so NavLink can see it
        setHash(initialHash)
        // Wait for layout, then scroll to correct position
        setTimeout(() => {
          onResize()
          const target = getVisibleById(initialHash.replace('#', ''))
          if (target) {
            // Scroll smoothly to correct position with scroll-margin-top
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          // Keep the hash preserved during scroll
          setTimeout(() => {
            // Only allow updates after scroll completes AND user starts scrolling manually
            // Keep the initial hash until user scrolls
            preservedHash = null
            isBootstrapping = false
          }, 800)
        }, 100)
      } else {
        // No initial hash; just initialize normally
        setTimeout(() => {
          onResize()
          updateActiveSection()
        }, 120)
      }

      return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onResize)
        window.removeEventListener('orientationchange', onResize)
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }
      }
    }

    // Initial attempt + retry mechanism
    const cleanup = initObserver()

    return () => {
      if (cleanup) cleanup()
    }
  }, [pathname])

  return null
}


