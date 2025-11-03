"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SectionObserver() {
  const pathname = usePathname()

  useEffect(() => {
    // Only observe on homepage
    if (pathname !== '/') return

    let observer: IntersectionObserver | null = null
    let retryCount = 0
    const maxRetries = 20

    const initObserver = () => {
      const sectionIds = ['home', 'about', 'visit']
      const sections = sectionIds
        .map((id) => document.getElementById(id))
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
        if (currentHash === hash) return
        currentHash = hash
        history.replaceState(null, '', hash || window.location.pathname)
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      }

      const visibility = new Map<Element, number>()

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibility.set(entry.target, entry.isIntersecting ? (entry.intersectionRatio || 0) : 0)
          })

          let bestEl: Element | null = null
          let bestRatio = 0
          sections.forEach((el) => {
            const ratio = visibility.get(el) || 0
            if (ratio > bestRatio) {
              bestRatio = ratio
              bestEl = el
            }
          })

          if (bestEl && bestRatio > 0) {
            const id = (bestEl as HTMLElement).id
            setHash(`#${id}`)
          } else {
            // If no section is clearly visible or we're near the top, set to home
            if (window.scrollY < 200) {
              setHash('#home')
            } else {
              // Otherwise, check if home section is in viewport middle
              const homeSection = document.getElementById('home')
              if (homeSection) {
                const homeRect = homeSection.getBoundingClientRect()
                const viewportMiddle = window.innerHeight / 2
                if (homeRect.top <= viewportMiddle && homeRect.bottom >= viewportMiddle - 100) {
                  setHash('#home')
                }
              }
            }
          }
        },
        { root: null, rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
      )

      sections.forEach((el) => observer!.observe(el))
      retryCount = 0 // Reset on success
      
      // Set initial hash based on scroll position
      const checkInitialHash = () => {
        if (window.location.hash && window.location.hash !== '#home') return
        const homeSection = document.getElementById('home')
        if (homeSection) {
          const homeRect = homeSection.getBoundingClientRect()
          const viewportMiddle = window.innerHeight / 2
          // If we're at the top, set to home
          if (window.scrollY < 100 || (homeRect.top <= viewportMiddle && homeRect.bottom >= viewportMiddle)) {
            if (window.location.hash !== '#home') {
              history.replaceState(null, '', '#home')
              window.dispatchEvent(new HashChangeEvent('hashchange'))
            }
          }
        }
      }
      // Check after a small delay to ensure DOM is ready
      setTimeout(checkInitialHash, 50)
    }

    // Initial attempt + retry mechanism
    initObserver()

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [pathname])

  return null
}


