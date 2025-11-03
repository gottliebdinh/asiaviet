"use client"

import { useState } from 'react'
import { menuData } from '../data/menuData'

export default function MobileMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('popular')

  const categories = [
    { id: 'popular', name: 'Beliebt', count: menuData.popular.length },
    { id: 'sushi-menus', name: 'Sushi Menüs', count: menuData.sushiMenus.length },
    { id: 'soups', name: 'Suppen', count: menuData.soups.length },
    { id: 'appetizers', name: 'Vorspeisen', count: menuData.appetizers.length },
    { id: 'main-dishes', name: 'Hauptspeisen', count: menuData.mainDishes.length },
    { id: 'specials', name: 'Speziales', count: menuData.specials.length },
    { id: 'nigiri', name: 'Nigiri', count: menuData.nigiri.length },
    { id: 'maki-inside-out', name: 'Maki Inside Out', count: menuData.makiInsideOut.length },
    { id: 'maki-crunchy', name: 'Maki Crunchy', count: menuData.makiInsideOutCrunchy.length },
    { id: 'power-roll', name: 'Power Roll', count: menuData.powerRoll.length },
    { id: 'drinks', name: 'Getränke', count: menuData.drinks.length },
  ]

  const renderSection = (sectionId: string) => {
    const dataMap: { [key: string]: any[] } = {
      'popular': menuData.popular,
      'sushi-menus': menuData.sushiMenus,
      'soups': menuData.soups,
      'appetizers': menuData.appetizers,
      'main-dishes': menuData.mainDishes,
      'specials': menuData.specials,
      'nigiri': menuData.nigiri,
      'maki-inside-out': menuData.makiInsideOut,
      'maki-crunchy': menuData.makiInsideOutCrunchy,
      'power-roll': menuData.powerRoll,
      'drinks': menuData.drinks,
    }

    const items = dataMap[sectionId] || []
    const category = categories.find(c => c.id === sectionId)

    return (
      <section key={sectionId} id={sectionId} className="py-8 px-4 scroll-mt-32">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-amber-900 mb-1">{category?.name}</h2>
          {category && <p className="text-sm text-amber-900/60">{category.count} Artikel</p>}
        </div>

        <div className="space-y-3">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className="rounded-xl border border-white/40 bg-white/40 backdrop-blur p-4 shadow-sm"
            >
              {item.category && (
                <div className="text-xs font-semibold uppercase tracking-wide text-amber-900/70 mb-1">
                  {item.category}
                </div>
              )}
              <div className="flex justify-between items-start gap-3 mb-2">
                <h3 className="text-base font-bold text-amber-900 flex-1">{item.name}</h3>
                <p className="text-lg font-bold text-red-600 whitespace-nowrap">{item.price}</p>
              </div>
              {item.description && (
                <p className="text-sm text-amber-900/80 leading-relaxed">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <main className="flex flex-col min-h-screen pt-24">
      {/* Header Title */}
      <section className="pt-6 pb-4 px-4">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-amber-900 tracking-tight mb-2">
            Unsere Speisekarte
          </h1>
          <p className="text-sm text-amber-900/80">
            Entdecke die Vielfalt der vietnamesischen und japanischen Küche
          </p>
        </div>
      </section>

      {/* Sticky Category Selector */}
      <div className="sticky top-20 z-30 px-4 pb-4 pt-2">
        <div className="relative max-w-xl mx-auto">
          {/* Glass container wrapper */}
          <div className="relative rounded-2xl border border-white/30 bg-white/50 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <select
              value={activeCategory}
              onChange={(e) => {
                setActiveCategory(e.target.value)
                const element = document.getElementById(e.target.value)
                if (element) {
                  setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 100)
                }
              }}
              className="relative z-10 w-full px-4 py-3 bg-transparent text-amber-900 font-semibold text-sm appearance-none border-0 outline-none"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
              <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="flex-1">
        {categories.map((category) => renderSection(category.id))}
      </div>

      {/* Footer Note */}
      <section className="py-6 px-4 bg-white/20 backdrop-blur">
        <div className="text-center">
          <p className="text-amber-900/70 text-xs mb-1">
            Alle Preise in Euro inkl. MwSt. • Änderungen vorbehalten
          </p>
          <p className="text-amber-900/70 text-xs">
            Bei Allergien oder Unverträglichkeiten sprechen Sie uns gerne an.
          </p>
        </div>
      </section>
    </main>
  )
}

