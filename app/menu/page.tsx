import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import CategoryNav from '../components/CategoryNav'
import MobileMenu from '../components/MobileMenu'
import { menuData } from '../data/menuData'

export default function MenuPage() {
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

  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
      
      {/* Desktop Version */}
      <main className="hidden md:flex flex-col min-h-screen">
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

          {/* Category Navigation Bar */}
          <CategoryNav categories={categories} />
        </div>
      </section>

      {/* Popular Items */}
      <section id="popular" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900 mb-8">Beliebt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.popular.map((item, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-amber-900/70 mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-2xl font-bold text-red-600">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sushi Menüs */}
      <section id="sushi-menus" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Sushi Menüs</h2>
            <span className="text-amber-900/60">{menuData.sushiMenus.length} Artikel</span>
          </div>
          <div className="space-y-4">
            {menuData.sushiMenus.map((item, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
                    <p className="text-amber-900/80 mb-3">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-red-600 whitespace-nowrap">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suppen */}
      <section id="soups" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Suppen</h2>
            <span className="text-amber-900/60">{menuData.soups.length} Artikel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.soups.map((item, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price}</p>
                </div>
                <p className="text-amber-900/80">{item.description}</p>
              </div>
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
              <div 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price}</p>
                </div>
                {item.description && <p className="text-amber-900/80">{item.description}</p>}
              </div>
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
              <div 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price}</p>
                </div>
                {item.description && <p className="text-amber-900/80">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speziales */}
      <section id="specials" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Speziales</h2>
            <span className="text-amber-900/60">{menuData.specials.length} Artikel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.specials.map((item, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price}</p>
                </div>
                {item.description && <p className="text-amber-900/80">{item.description}</p>}
              </div>
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
              <div 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maki Inside Out Sesam */}
      <section id="maki-inside-out" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Maki Inside Out Sesam</h2>
            <span className="text-amber-900/60">{menuData.makiInsideOut.length} Artikel</span>
          </div>
          <p className="text-amber-900/70 mb-8 italic">Es werden jeweils 8 Stück serviert. Alle Inside Out werden mit Sesam zubereitet.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.makiInsideOut.map((item, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price}</p>
                </div>
                {item.description && <p className="text-amber-900/80">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maki Inside Out Crunchy */}
      <section id="maki-crunchy" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Maki Inside Out Crunchy</h2>
            <span className="text-amber-900/60">{menuData.makiInsideOutCrunchy.length} Artikel</span>
          </div>
          <p className="text-amber-900/70 mb-8 italic">Es werden jeweils 10 Stück serviert.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.makiInsideOutCrunchy.map((item, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price}</p>
                </div>
                {item.description && <p className="text-amber-900/80">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Power Roll */}
      <section id="power-roll" className="py-12 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Power Roll</h2>
            <span className="text-amber-900/60">{menuData.powerRoll.length} Artikel</span>
          </div>
          <p className="text-amber-900/70 mb-8 italic">Es werden jeweils 10 Stück aus einer Rolle serviert.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.powerRoll.map((item, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price}</p>
                </div>
                {item.description && <p className="text-amber-900/80">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alkoholfreie Getränke */}
      <section id="drinks" className="py-12 pb-24 scroll-mt-28">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-amber-900">Alkoholfreie Getränke</h2>
            <span className="text-amber-900/60">{menuData.drinks.length} Artikel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.drinks.map((item, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
                  <p className="text-xl font-bold text-red-600 whitespace-nowrap">{item.price}</p>
                </div>
              </div>
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

