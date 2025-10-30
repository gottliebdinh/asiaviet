"use client"

import { useEffect } from 'react'

export default function SectionObserver() {
  useEffect(() => {
    const sectionIds = ['about', 'visit']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    let currentHash = window.location.hash
    const setHash = (hash: string) => {
      if (currentHash === hash) return
      currentHash = hash
      // Avoid jump; only update URL
      history.replaceState(null, '', hash || window.location.pathname)
      // Fire a hashchange event so listeners (NavLink) can react consistently
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0]
        if (visible?.target) {
          const id = (visible.target as HTMLElement).id
          setHash(`#${id}`)
        } else {
          // If no tracked section is visible (e.g., top hero), clear hash
          setHash('')
        }
      },
      { root: null, rootMargin: '0px 0px -50% 0px', threshold: [0.2, 0.4, 0.6, 0.8, 1] }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}


