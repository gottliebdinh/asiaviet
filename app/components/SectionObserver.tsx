"use client"

import { useEffect } from 'react'

export default function SectionObserver() {
  useEffect(() => {
    const sectionIds = ['home', 'about', 'visit']
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

    // Keep a visibility map to avoid gaps when entries array contains only changes
    const visibility = new Map<Element, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target, entry.isIntersecting ? (entry.intersectionRatio || 0) : 0)
        })

        // Determine the most visible currently intersecting section across all observed
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
          // Keep current hash to avoid flicker between sections
        }
      },
      // Center window: a section is "active" when it overlaps the middle 10% band
      { root: null, rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}


