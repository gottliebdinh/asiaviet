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

  return (
    <nav className="sticky top-28 z-20 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg p-3 mb-4 relative">
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
  )
}

