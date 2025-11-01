import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

// Menu data based on the Lieferando HTML
const menuData = {
  popular: [
    { name: 'Pad Thai', category: 'Speziales', price: 'ab 17,00 €' },
    { name: 'Gebratene Nudeln', category: 'Speziales', price: 'ab 15,00 €' },
    { name: 'Massaman Curry', category: 'Hauptspeisen', price: 'ab 14,40 €' },
    { name: 'Mango Curry', category: 'Hauptspeisen', price: 'ab 14,40 €' },
    { name: 'Gebackenes mit Gemüse', category: 'Hauptspeisen', price: 'ab 15,40 €' },
  ],
  sushiMenus: [
    { name: 'Vegetarisches Menü', price: '17,90 €', description: '6 Avocado Maki, 6 Kappa Maki und 8 Mango Inside Out' },
    { name: 'Lachs und Tempura Menü', price: '28,70 €', description: '8 Lachs, Avocado Inside Out, 8 Tempura Unagi Power Roll' },
    { name: 'Menü 3', price: '27,50 €', description: '6 Thunfisch Maki, 8 Lachs Philadelphia Avocado Inside Out und 8 Ebi Philadelphia Inside Out' },
    { name: 'Menü 4', price: '27,50 €', description: '6 Mango Maki, 8 Lachs Maki, 8 Veggie Philadelphia Gurke Inside Out und 8 Tobiko Roll Inside Out' },
    { name: 'Menü 5', price: '29,90 €', description: '6 Thunfisch Maki, 8 Lachs Philadelphia Gurke Inside Out, 2 Lachs Nigiri und 2 Ebi Nigiri' },
    { name: 'Menü (für 2 Personen)', price: '63,50 €', description: '2 Lachs Nigiri, 2 Ebi Nigiri, 6 Kappa Maki, 8 Lachs Philadelphia Gurke Inside Out, 10 Tempura Unagi Power Roll und 10 Tempura Avocado Power Roll' },
  ],
  soups: [
    { name: 'Gemüsesuppe', price: '7,10 €', description: 'mit saisonalem Gemüse' },
    { name: 'Tom-Kha', price: '7,90 €', description: 'Thai Suppe mit Kokosmilch, Champignons, Limettenblättern und einer Zutat nach Wahl' },
    { name: 'Tom-Yam', price: '8,40 €', description: 'mit Zitronengras, Garnelen und Limettenblättern' },
    { name: 'Peking Suppe', price: '7,90 €', description: 'Süß-Sauer-Scharf Suppe mit Hühnerfleisch, Eiern, Morcheln und Pilzen' },
  ],
  appetizers: [
    { name: 'Mini Frühlingsrollen (6 Stück)', price: '4,90 €', description: 'gefüllt mit Gemüse' },
    { name: 'Sommerrollen (2 Stück)', price: '6,90 €', description: 'mit frischem Gemüse und Reisnudeln' },
    { name: 'Wan-Tan (6 Stück)', price: '6,90 €', description: 'gedämpfte Teigtaschen mit Garnelen gefüllt' },
    { name: 'Edamame', price: '4,90 €', description: 'gesalzene grüne Sojabohnen' },
    { name: 'Gebackene Garnelen (4 Stück)', price: '7,90 €', description: 'knusprig panierte Garnelen' },
    { name: 'Gyoza (5 Stück)', price: '6,90 €', description: 'japanische Teigtaschen mit Gemüse oder Fleisch' },
    { name: 'Sate-Spieße (3 Stück)', price: '7,90 €', description: 'gegrillte Hühnchenspieße mit Erdnusssauce' },
    { name: 'Miso-Suppe', price: '3,90 €', description: 'traditionelle japanische Suppe mit Tofu und Wakame' },
  ],
  mainDishes: [
    { name: 'Gebratener Reis mit Gemüse', price: 'ab 12,90 €', description: 'mit saisonalem Gemüse und Ei' },
    { name: 'Gebratene Nudeln mit Gemüse', price: 'ab 12,90 €', description: 'mit saisonalem Gemüse' },
    { name: 'Rotes Curry', price: 'ab 14,40 €', description: 'mit Kokosmilch, Bambus und Thai-Basilikum' },
    { name: 'Grünes Curry', price: 'ab 14,40 €', description: 'mit Kokosmilch, Bambus und Thai-Basilikum' },
    { name: 'Massaman Curry', price: 'ab 14,40 €', description: 'mit Kokosmilch, Erdnüssen und Kartoffeln' },
    { name: 'Mango Curry', price: 'ab 14,40 €', description: 'mit Kokosmilch, frischer Mango und Thai-Basilikum' },
    { name: 'Panang Curry', price: 'ab 14,40 €', description: 'mit Kokosmilch und Erdnusssauce' },
    { name: 'Gebratenes Gemüse', price: 'ab 13,40 €', description: 'mit saisonalem Gemüse in Austern- oder süß-saurer Sauce' },
    { name: 'Gebackenes mit Gemüse', price: 'ab 15,40 €', description: 'knusprig gebacken mit saisonalem Gemüse' },
    { name: 'Chop-Suey', price: 'ab 13,90 €', description: 'mit Gemüse in heller Sauce' },
  ],
  specials: [
    { name: 'Pho Bo', price: '15,00 €', description: 'vietnamesische Rindfleisch-Nudelsuppe mit Reisnudeln und Kräutern' },
    { name: 'Pho Ga', price: '14,00 €', description: 'vietnamesische Hühnchen-Nudelsuppe mit Reisnudeln und Kräutern' },
    { name: 'Bun Bo Nam Bo', price: '15,50 €', description: 'Reisnudeln mit gegrilltem Rindfleisch, Erdnüssen und Kräutern' },
    { name: 'Pad Thai', price: 'ab 17,00 €', description: 'gebratene Reisnudeln mit Ei, Erdnüssen und Tamarinde' },
    { name: 'Gebratene Nudeln', price: 'ab 15,00 €', description: 'mit Gemüse nach Wahl' },
    { name: 'Gebratener Reis', price: 'ab 14,00 €', description: 'mit Gemüse und Ei nach Wahl' },
    { name: 'Bun Cha Hanoi', price: '16,50 €', description: 'gegrilltes Schweinefleisch mit Reisnudeln und Kräutern' },
    { name: 'Com Tam', price: '15,50 €', description: 'Reis mit gegrilltem Schweinefleisch und Spiegelei' },
    { name: 'Banh Xeo', price: '14,90 €', description: 'vietnamesischer Pfannkuchen mit Garnelen und Sprossen' },
    { name: 'Mi Xao Gion', price: '16,00 €', description: 'knusprige Eiernudeln mit Gemüse und Fleisch nach Wahl' },
  ],
  nigiri: [
    { name: 'Lachs Nigiri (2 Stück)', price: '4,50 €', description: '' },
    { name: 'Thunfisch Nigiri (2 Stück)', price: '5,00 €', description: '' },
    { name: 'Ebi Nigiri (2 Stück)', price: '4,00 €', description: '' },
    { name: 'Avocado Nigiri (2 Stück)', price: '3,50 €', description: '' },
    { name: 'Tamago Nigiri (2 Stück)', price: '3,00 €', description: '' },
    { name: 'Unagi Nigiri (2 Stück)', price: '5,50 €', description: '' },
  ],
  makiInsideOut: [
    { name: 'Lachs Avocado Inside Out (8 Stück)', price: '9,50 €', description: '' },
    { name: 'Thunfisch Avocado Inside Out (8 Stück)', price: '10,00 €', description: '' },
    { name: 'Ebi Philadelphia Inside Out (8 Stück)', price: '9,50 €', description: '' },
    { name: 'Lachs Philadelphia Inside Out (8 Stück)', price: '10,00 €', description: '' },
    { name: 'California Roll Inside Out (8 Stück)', price: '9,00 €', description: 'mit Surimi, Avocado und Gurke' },
    { name: 'Veggie Philadelphia Inside Out (8 Stück)', price: '8,50 €', description: 'mit Gurke, Avocado und Frischkäse' },
    { name: 'Mango Inside Out (8 Stück)', price: '8,00 €', description: 'mit frischer Mango' },
    { name: 'Tobiko Roll Inside Out (8 Stück)', price: '11,00 €', description: 'mit Tobiko (Fischeier)' },
    { name: 'Sake Cheese Inside Out (8 Stück)', price: '10,50 €', description: 'mit Lachs und Frischkäse' },
    { name: 'Tempura Ebi Inside Out (8 Stück)', price: '11,50 €', description: 'mit knuspriger Garnele' },
    { name: 'Spicy Tuna Inside Out (8 Stück)', price: '11,00 €', description: 'mit Thunfisch und scharfer Sauce' },
    { name: 'Chicken Teriyaki Inside Out (8 Stück)', price: '9,00 €', description: 'mit Hühnchen in Teriyaki-Sauce' },
    { name: 'Sake Mango Inside Out (8 Stück)', price: '10,50 €', description: 'mit Lachs und Mango' },
    { name: 'Ebi Tempura Avocado Inside Out (8 Stück)', price: '11,00 €', description: 'mit Tempura-Garnele und Avocado' },
    { name: 'Rainbow Roll Inside Out (8 Stück)', price: '13,50 €', description: 'mit verschiedenen Fischsorten' },
    { name: 'Dragon Roll Inside Out (8 Stück)', price: '12,50 €', description: 'mit Unagi und Avocado' },
    { name: 'Red Dragon Inside Out (8 Stück)', price: '13,00 €', description: 'mit Thunfisch und Avocado' },
  ],
  makiInsideOutCrunchy: [
    { name: 'Tempura Lachs Power Roll (10 Stück)', price: '14,50 €', description: 'knusprig frittiert mit Lachs' },
    { name: 'Tempura Thunfisch Power Roll (10 Stück)', price: '15,00 €', description: 'knusprig frittiert mit Thunfisch' },
    { name: 'Tempura Ebi Power Roll (10 Stück)', price: '14,00 €', description: 'knusprig frittiert mit Garnelen' },
    { name: 'Tempura Unagi Power Roll (10 Stück)', price: '15,50 €', description: 'knusprig frittiert mit Aal' },
    { name: 'Tempura Avocado Power Roll (10 Stück)', price: '12,50 €', description: 'knusprig frittiert mit Avocado' },
    { name: 'Tempura California Power Roll (10 Stück)', price: '13,50 €', description: 'knusprig frittiert mit Surimi' },
    { name: 'Tempura Chicken Power Roll (10 Stück)', price: '13,00 €', description: 'knusprig frittiert mit Hühnchen' },
    { name: 'Tempura Veggie Power Roll (10 Stück)', price: '12,00 €', description: 'knusprig frittiert mit Gemüse' },
    { name: 'Tempura Spicy Tuna Power Roll (10 Stück)', price: '15,50 €', description: 'knusprig frittiert mit scharfem Thunfisch' },
    { name: 'Tempura Philadelphia Power Roll (10 Stück)', price: '14,50 €', description: 'knusprig frittiert mit Lachs und Frischkäse' },
    { name: 'Tempura Rainbow Power Roll (10 Stück)', price: '16,50 €', description: 'knusprig frittiert mit verschiedenen Fischsorten' },
    { name: 'Tempura Dragon Power Roll (10 Stück)', price: '16,00 €', description: 'knusprig frittiert mit Unagi' },
    { name: 'Tempura Mango Power Roll (10 Stück)', price: '13,50 €', description: 'knusprig frittiert mit Mango' },
    { name: 'Tempura Sake Cheese Power Roll (10 Stück)', price: '15,00 €', description: 'knusprig frittiert mit Lachs und Käse' },
    { name: 'Tempura Crunchy Chicken Power Roll (10 Stück)', price: '14,00 €', description: 'knusprig frittiert mit Hühnchen' },
    { name: 'Tempura Spicy Salmon Power Roll (10 Stück)', price: '15,50 €', description: 'knusprig frittiert mit scharfem Lachs' },
  ],
  powerRoll: [
    { name: 'Tempura Unagi Power Roll (10 Stück)', price: '15,50 €', description: 'aus einer Rolle, knusprig frittiert mit Aal' },
    { name: 'Tempura Avocado Power Roll (10 Stück)', price: '12,50 €', description: 'aus einer Rolle, knusprig frittiert mit Avocado' },
    { name: 'Tempura Lachs Power Roll (10 Stück)', price: '14,50 €', description: 'aus einer Rolle, knusprig frittiert mit Lachs' },
    { name: 'Tempura Ebi Power Roll (10 Stück)', price: '14,00 €', description: 'aus einer Rolle, knusprig frittiert mit Garnelen' },
    { name: 'Tempura California Power Roll (10 Stück)', price: '13,50 €', description: 'aus einer Rolle, knusprig frittiert mit Surimi' },
  ],
  drinks: [
    { name: 'Coca-Cola (0,33l)', price: '3,50 €', description: '' },
    { name: 'Coca-Cola Zero (0,33l)', price: '3,50 €', description: '' },
    { name: 'Fanta (0,33l)', price: '3,50 €', description: '' },
    { name: 'Sprite (0,33l)', price: '3,50 €', description: '' },
    { name: 'Apfelschorle (0,33l)', price: '3,50 €', description: '' },
    { name: 'Orangensaft (0,33l)', price: '3,90 €', description: '' },
    { name: 'Apfelsaft (0,33l)', price: '3,90 €', description: '' },
    { name: 'Wasser still (0,5l)', price: '3,00 €', description: '' },
    { name: 'Wasser spritzig (0,5l)', price: '3,00 €', description: '' },
  ],
}

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
    <main className="flex flex-col min-h-screen">
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
          <nav className="sticky top-28 z-20 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg p-3 mb-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
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
  )
}

