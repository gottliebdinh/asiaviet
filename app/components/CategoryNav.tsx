"use client"

import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Category = {
  id: string
  name: string
  count: number
}

type Props = {
  categories: Category[]
}

export default function CategoryNav({ categories }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current
    if (!container) return

    const { scrollLeft, scrollWidth, clientWidth } = container
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Check buttons after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(checkScrollButtons, 100)
    container.addEventListener('scroll', checkScrollButtons)
    window.addEventListener('resize', checkScrollButtons)

    return () => {
      clearTimeout(timeoutId)
      container.removeEventListener('scroll', checkScrollButtons)
      window.removeEventListener('resize', checkScrollButtons)
    }
  }, [categories])

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 300
    const currentScroll = container.scrollLeft
    const targetScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
  }

  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    e.preventDefault()
    
    // Find all elements with this ID (might be multiple for mobile/desktop)
    const allElements = document.querySelectorAll(`#${categoryId}`)
    
    // Find the visible one (desktop version)
    let element: HTMLElement | null = null
    for (let i = 0; i < allElements.length; i++) {
      const el = allElements[i] as HTMLElement
      const rect = el.getBoundingClientRect()
      const styles = window.getComputedStyle(el)
      // Check if element is visible (not display:none and has dimensions)
      if (styles.display !== 'none' && rect.width > 0 && rect.height > 0) {
        element = el
        break
      }
    }
    
    // Fallback to first element if none found
    if (!element && allElements.length > 0) {
      element = allElements[0] as HTMLElement
    }
    
    if (!element) {
      console.error('Element not found:', categoryId)
      return
    }
    
    // Update URL hash
    window.location.hash = `#${categoryId}`
    window.history.pushState(null, '', `#${categoryId}`)
    
    // Wait a bit for DOM to settle
    setTimeout(() => {
      // Measure nav height
      const navHeight = navRef.current ? navRef.current.getBoundingClientRect().height : 80
      
      // Navigation is sticky below main header
      // Calculate header bottom position based on viewport width
      // Header: top-4 (16px) + h-20 (80px) = 96px base
      // Header: top-5 (20px) + h-22 (88px) = 108px xl  
      // Header: top-6 (24px) + h-24 (96px) = 120px 2xl
      const width = window.innerWidth
      let navTop = 96 // default
      if (width >= 1536) { // 2xl
        navTop = 120 // top-6 (24px) + h-24 (96px)
      } else if (width >= 1280) { // xl
        navTop = 108 // top-5 (20px) + h-22 (88px)
      } else { // md
        navTop = 96 // top-4 (16px) + h-20 (80px)
      }
      
      // Try to find actual header and use its position
      const allHeaders = document.querySelectorAll('header')
      for (let i = 0; i < allHeaders.length; i++) {
        const header = allHeaders[i] as HTMLElement
        const styles = window.getComputedStyle(header)
        if (styles.display !== 'none') {
          const rect = header.getBoundingClientRect()
          if (rect.width > 0 && rect.height > 0 && rect.bottom > 0) {
            navTop = rect.bottom
            break
          }
        }
      }
      
      // Also check current nav position
      const navRect = navRef.current ? navRef.current.getBoundingClientRect() : null
      
      const padding = 16
      const totalOffset = navTop + navHeight + padding
      
      // Get element's absolute position using getBoundingClientRect (more reliable after timeout)
      const elementRect = element.getBoundingClientRect()
      const currentScroll = window.pageYOffset || window.scrollY
      const elementTop = elementRect.top + currentScroll
      
      // Calculate target scroll position
      // We want element to be at totalOffset from top after scrolling
      const targetScroll = elementTop - totalOffset

      // DEBUG: Log all values
      console.log('=== CategoryNav Position Debug ===')
      console.log('Viewport width:', width)
      console.log('Calculated navTop:', navTop)
      if (navRect) {
        console.log('Nav rect:', navRect)
        console.log('Nav top:', navRect.top)
      }
      console.log('Nav height:', navHeight)
      console.log('Padding:', padding)
      console.log('Total offset:', totalOffset)
      console.log('Element top:', elementTop)
      console.log('Current scroll:', currentScroll)
      console.log('Target scroll:', targetScroll)
      console.log('Nav CSS classes:', navRef.current?.className)
      console.log('==================================')

      // Scroll to position
      window.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth'
      })
    }, 50)
  }

  return (
    <div className="sticky top-24 xl:top-28 2xl:top-32 z-30 pb-4 pt-2">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
        <nav ref={navRef} className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg p-3 mb-4 relative">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white hover:shadow-lg transition-all duration-200 text-amber-900"
          aria-label="Nach links scrollen"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white hover:shadow-lg transition-all duration-200 text-amber-900"
          aria-label="Nach rechts scrollen"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className={`flex gap-2 overflow-x-auto scrollbar-hide ${showLeftArrow ? 'pl-12' : ''} ${showRightArrow ? 'pr-12' : ''}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            onClick={(e) => handleCategoryClick(e, category.id)}
            className="flex-shrink-0 px-4 py-2.5 text-sm font-semibold text-amber-900 rounded-xl hover:bg-white/80 transition-all duration-200 group whitespace-nowrap"
          >
            <div className="flex items-center gap-2">
              <span className="group-hover:text-red-600 transition-colors">{category.name}</span>
              <span className="text-xs text-amber-900/60 group-hover:text-red-600/60">({category.count})</span>
            </div>
          </a>
          ))}
        </div>
      </nav>
      </div>
    </div>
  )
}

