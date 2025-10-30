"use client"

import { useEffect, useRef } from 'react'

export default function SmoothScroll() {
  const targetScrollYRef = useRef(0)
  const currentScrollYRef = useRef(0)
  const isAnimatingRef = useRef(false)

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const delta = e.deltaY
      // Slightly faster scroll multiplier
      targetScrollYRef.current = Math.max(0, Math.min(maxScroll, targetScrollYRef.current + delta * 0.6))

      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true
        currentScrollYRef.current = window.scrollY
        animate()
      }
    }

    const onScroll = () => {
      if (!isAnimatingRef.current) {
        const y = window.scrollY
        targetScrollYRef.current = y
        currentScrollYRef.current = y
      }
    }

    const animate = () => {
      const diff = targetScrollYRef.current - currentScrollYRef.current
      // Quicker ease towards the target
      currentScrollYRef.current += diff * 0.16
      window.scrollTo(0, currentScrollYRef.current)

      if (Math.abs(diff) > 0.5) {
        requestAnimationFrame(animate)
      } else {
        isAnimatingRef.current = false
        currentScrollYRef.current = targetScrollYRef.current
        window.scrollTo(0, currentScrollYRef.current)
      }
    }

    // Initialize target to current on mount
    targetScrollYRef.current = window.scrollY
    currentScrollYRef.current = window.scrollY

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel as EventListener)
      window.removeEventListener('scroll', onScroll as EventListener)
    }
  }, [])

  return null
}


