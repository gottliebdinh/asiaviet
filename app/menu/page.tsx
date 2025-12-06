import type { Metadata } from 'next'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import CategoryNav from '../components/CategoryNav'
import MobileMenu from '../components/MobileMenu'
import { menuData } from '../data/menuData'

export const metadata: Metadata = {
  title: 'Speisekarte',
  description: 'Unsere komplette Speisekarte: Vietnamesische Pho, frisches Sushi, Frühlingsrollen, Nigiri, Maki, Power Rolls und mehr. Alle Preise und Zutaten im Überblick.',
  openGraph: {
    title: 'Speisekarte - AsiaViet Restaurant München',
    description: 'Entdecke unsere komplette Speisekarte mit vietnamesischen und japanischen Spezialitäten. Pho, Sushi, Frühlingsrollen und mehr.',
    images: [
      {
        url: '/essen.png',
        width: 1200,
        height: 630,
        alt: 'AsiaViet Speisekarte - Vietnamesische und Japanische Gerichte',
      },
    ],
  },
  alternates: {
    canonical: '/menu',
  },
}

export default function MenuPage() {
  const categories = [
    { id: 'soups', name: 'Suppen', count: menuData.soups.length },
    { id: 'appetizers', name: 'Vorspeisen', count: menuData.appetizers.length },
    { id: 'main-dishes', name: 'Hauptspeisen', count: menuData.mainDishes.length },
    { id: 'specials', name: 'Spezielles', count: menuData.specials.length },
    { id: 'nigiri', name: 'Nigiri', count: menuData.nigiri.length },
    { id: 'maki', name: 'Maki', count: menuData.maki.length },
    { id: 'maki-inside-out', name: 'Maki Inside Out', count: menuData.makiInsideOut.length },
    { id: 'sushi-rolls', name: 'Sushi Rollen', count: menuData.sushiRolls.length },
    { id: 'power-roll', name: 'Power Roll', count: menuData.powerRoll.length },
    { id: 'sushi-menus', name: 'Sushi Menüs', count: menuData.sushiMenus.length },
    { id: 'box-to-go', name: 'Box to Go', count: menuData.boxToGo.length },
    { id: 'drinks', name: 'Getränke', count: menuData.drinks?.length || 0 },
  ]

  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
      
      {/* Desktop Version */}
      <main className="hidden md:block min-h-screen">
      {/* Vertical decorations */}
      <div className="hidden wide:block fixed left-20 top-1/2 z-10 pointer-events-none animate-slideDown [animation-delay:300ms]">
        <div className="text-amber-900/70 text-2xl font-black tracking-wider leading-snug flex flex-col items-center [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.1)]">
          <span>X</span>
          <span>i</span>
          <span>n</span>
          <span>&nbsp;</span>
          <span>c</span>
          <span>h</span>
          <span>à</span>
          <span>o</span>
        </div>
      </div>
      <div className="hidden wide:block fixed right-20 top-1/2 z-10 pointer-events-none animate-slideDown [animation-delay:450ms]">
        <div className="text-amber-900/70 text-2xl font-black tracking-wider leading-snug flex flex-col items-center [text-shadow:_0_1px_3px_rgb(0_0_0_/_0.1)]">
          <span>C</span>
          <span>ả</span>
          <span>m</span>
          <span>&nbsp;</span>
          <span>ơ</span>
          <span>n</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-8">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="text-center animate-fadeUp mb-8">
            <h1 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-amber-900 tracking-tight mb-4">
              Unsere Speisekarte
            </h1>
            <p className="text-lg xl:text-xl 2xl:text-2xl text-amber-900/80 max-w-3xl mx-auto">
              Entdecke die Vielfalt der vietnamesischen und japanischen Küche – von traditioneller Pho bis zu frischem Sushi.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation Bar - Outside container for sticky to work */}
      <CategoryNav categories={categories} />


      {/* Suppen */}
      <section id="soups" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Suppen</h2>
            <span className="text-amber-900/60">{menuData.soups.length} Artikel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.soups.map((item, index) => (
              <article 
                key={index}
                className={`rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300 ${
                  item.description ? 'p-5 xl:p-6' : 'p-5'
                }`}
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price} €</p>
                </div>
                {item.description && <p className="text-amber-900/80 leading-relaxed">{item.description}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vorspeisen */}
      <section id="appetizers" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Vorspeisen</h2>
            <span className="text-amber-900/60">{menuData.appetizers.length} Artikel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.appetizers.map((item, index) => (
              <article 
                key={index}
                className={`rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300 ${
                  item.description ? 'p-5 xl:p-6' : 'p-5'
                }`}
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price} €</p>
                </div>
                {item.description && <p className="text-amber-900/80 leading-relaxed">{item.description}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hauptspeisen */}
      <section id="main-dishes" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Hauptspeisen</h2>
            <span className="text-amber-900/60">{menuData.mainDishes.length} Artikel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.mainDishes.map((item, index) => (
              <article 
                key={index}
                className={`rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300 ${
                  item.options && item.options.length > 0 
                    ? 'p-6 xl:p-7 2xl:p-8' 
                    : item.description 
                      ? 'p-5 xl:p-6' 
                      : 'p-5'
                }`}
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  </div>
                  {item.price && <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price} €</p>}
                </div>
                {item.description && <p className="text-amber-900/80 mb-3 leading-relaxed">{item.description}</p>}
                {item.options && item.options.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {item.options.map((option: any, optIndex: number) => (
                      <div key={optIndex} className="flex justify-between items-center text-sm">
                        <span className="text-amber-900/80">{option.label}</span>
                        <span className="text-red-600 font-semibold">{option.price} €</span>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Spezielles */}
      <section id="specials" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Spezielles</h2>
            <span className="text-amber-900/60">{menuData.specials.length} Artikel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.specials.map((item, index) => (
              <article 
                key={index}
                className={`rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300 ${
                  item.options && item.options.length > 0 
                    ? 'p-6 xl:p-7 2xl:p-8' 
                    : item.description 
                      ? 'p-5 xl:p-6' 
                      : 'p-5'
                }`}
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  </div>
                  {item.price && <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price} €</p>}
                </div>
                {item.description && <p className="text-amber-900/80 mb-3 leading-relaxed">{item.description}</p>}
                {item.options && item.options.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {item.options.map((option: any, optIndex: number) => (
                      <div key={optIndex} className="flex justify-between items-center text-sm">
                        <span className="text-amber-900/80">{option.label}</span>
                        <span className="text-red-600 font-semibold">{option.price} €</span>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nigiri */}
      <section id="nigiri" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Nigiri</h2>
            <span className="text-amber-900/60">{menuData.nigiri.length} Artikel</span>
          </div>
          <p className="text-amber-900/70 mb-8 italic">Es werden jeweils 2 Stück serviert.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.nigiri.map((item, index) => (
              <article 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price} €</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Maki */}
      <section id="maki" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Maki</h2>
            <span className="text-amber-900/60">{menuData.maki.length} Artikel</span>
          </div>
          <p className="text-amber-900/70 mb-8 italic">Sushi-Rolle (mit/with)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.maki.map((item, index) => (
              <article 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price} €</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Maki Inside Out */}
      <section id="maki-inside-out" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Maki Inside Out</h2>
            <span className="text-amber-900/60">{menuData.makiInsideOut.length} Artikel</span>
          </div>
          <p className="text-amber-900/70 mb-8 italic">8 Stück (mit Sesam) oder Frittiertes Sushi 10 Stück</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.makiInsideOut.map((item, index) => (
              <article 
                key={index}
                className={`rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300 ${
                  item.options && item.options.length > 0 
                    ? 'p-6 xl:p-7' 
                    : 'p-5 xl:p-6'
                }`}
              >
                <h3 className="text-xl font-bold text-amber-900 mb-3">{item.name}</h3>
                {item.description && <p className="text-amber-900/80 mb-3 leading-relaxed">{item.description}</p>}
                {item.options && item.options.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {item.options.map((option: any, optIndex: number) => (
                      <div key={optIndex} className="flex justify-between items-center text-sm">
                        <span className="text-amber-900/80">{option.label}</span>
                        <div className="flex gap-2">
                          <span className="text-red-600 font-semibold">{option.price} €</span>
                          {option.priceCrunchy && <span className="text-red-600 font-semibold">/ {option.priceCrunchy} €</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sushi Rollen */}
      <section id="sushi-rolls" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Sushi Rollen Inside Out</h2>
            <span className="text-amber-900/60">{menuData.sushiRolls.length} Artikel</span>
          </div>
          <p className="text-amber-900/70 mb-8 italic">Normal 8 Stk / Crunchy 10 Stk</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.sushiRolls.map((item, index) => (
              <article 
                key={index}
                className={`rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300 ${
                  item.description ? 'p-5 xl:p-6' : 'p-5'
                }`}
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-2">
                      <span className="text-xl font-bold text-red-600">{item.price} €</span>
                      {item.priceCrunchy && <span className="text-xl font-bold text-red-600">/ {item.priceCrunchy} €</span>}
                    </div>
                  </div>
                </div>
                {item.description && <p className="text-amber-900/80 leading-relaxed">{item.description}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Power Roll */}
      <section id="power-roll" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Sushi Spezialitäten – POWER ROLL</h2>
            <span className="text-amber-900/60">{menuData.powerRoll.length} Artikel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.powerRoll.map((item, index) => (
              <article 
                key={index}
                className={`rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300 ${
                  item.description ? 'p-5 xl:p-6' : 'p-5'
                }`}
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  </div>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price} €</p>
                </div>
                {item.description && <p className="text-amber-900/80 leading-relaxed">{item.description}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sushi Menüs */}
      <section id="sushi-menus" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Sushi Menü</h2>
            <span className="text-amber-900/60">{menuData.sushiMenus.length} Artikel</span>
          </div>
          <div className="space-y-4">
            {menuData.sushiMenus.map((item, index) => (
              <article 
                key={index}
                className={`rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300 ${
                  item.description && item.description.length > 80 
                    ? 'p-6 xl:p-7 2xl:p-8' 
                    : 'p-5 xl:p-6'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
                    {item.description && <p className="text-amber-900/80 mb-3 leading-relaxed">{item.description}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-red-600 whitespace-nowrap">{item.price} €</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Box to Go */}
      <section id="box-to-go" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Box to Go</h2>
            <span className="text-amber-900/60">{menuData.boxToGo.length} Artikel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.boxToGo.map((item, index) => (
              <article 
                key={index}
                className={`rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300 ${
                  item.description ? 'p-5 xl:p-6' : 'p-5'
                }`}
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  </div>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price} €</p>
                </div>
                {item.description && <p className="text-amber-900/80 leading-relaxed">{item.description}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Alkoholfreie Getränke */}
      <section id="drinks" className="py-12 pb-24 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Alkoholfreie Getränke</h2>
            <span className="text-amber-900/60">{menuData.drinks?.length || 0} Artikel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.drinks.map((item, index) => (
              <article 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-white/20 backdrop-blur">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16 text-center">
          <p className="text-amber-900/70 text-sm">
            Alle Preise in Euro inkl. MwSt. • Änderungen vorbehalten
          </p>
          <p className="text-amber-900/70 text-sm mt-2">
            Bei Allergien oder Unverträglichkeiten sprechen Sie uns gerne an.
          </p>
        </div>
      </section>
      </main>
    </>
  )
}
