import Image from 'next/image'
import { Utensils, Fish, Award, Users, MapPin, Quote, Star, StarHalf, ChevronDown, Clock, Phone } from 'lucide-react'
import ScrollHint from './components/ScrollHint'

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Logo, Title, CTA */}
          <div className="text-left animate-fadeUp [animation-delay:100ms]">
            <div className="flex items-center gap-4 mb-4">
              <Image src="/logo.png" alt="AsiaViet Logo" width={160} height={60} className="h-12 w-auto drop-shadow" priority />
            </div>
            <h1 className="text-5xl md:text-7xl font-asian font-bold leading-tight">
              <span className="text-red-600 drop-shadow-lg shadow-red-500/50">ASIA</span>{' '}
              <span className="text-yellow-500 drop-shadow-lg shadow-yellow-500/50">VIET</span>
            </h1>
            <p className="text-lg md:text-xl text-amber-900/80 mt-5 max-w-xl">
              Deine vietnamesische Küche im Herzens München – direkt neben dem Hauptbahnhof. Schnell und lecker.
            </p>
            {/* Rating (moved above CTA) */}
            <div className="mt-6 flex items-center gap-3 text-amber-900">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <StarHalf className="w-5 h-5 text-yellow-500" />
              </div>
              <span className="text-sm font-medium">4.6/5 · über 600 Bewertungen</span>
            </div>
            <div className="mt-6 animate-fadeUp [animation-delay:320ms]">
              <button className="group relative inline-flex items-center gap-3 px-8 py-3 overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-500 border border-white/30 hover:border-white/50">
                Speisekarte ansehen
                <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Decorative Glass Card */}
          <div className="relative animate-scaleIn [animation-delay:480ms]">
            <div className="rounded-3xl border border-white/40 bg-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-8">
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden">
                <div className="absolute -top-12 -right-10 w-64 h-64 bg-gradient-to-br from-red-400/60 via-orange-300/60 to-yellow-300/60 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-8 w-72 h-72 bg-gradient-to-tr from-amber-300/50 to-red-300/50 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <div className="flex items-center gap-3 text-amber-900 mb-2">
                    <Utensils className="w-5 h-5" />
                    <span className="text-sm font-semibold">Authentische Küche</span>
                  </div>
                  <div className="flex items-center gap-3 text-amber-900 mb-2">
                    <Fish className="w-5 h-5" />
                    <span className="text-sm font-semibold">Frisches Sushi</span>
                  </div>
                  <div className="flex items-center gap-3 text-amber-900">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-semibold">Beste Qualität</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll hint */}
        <ScrollHint targetId="about" className="absolute left-1/2 -translate-x-1/2 bottom-6 inline-flex items-center justify-center transition-opacity hover:opacity-90">
          <ChevronDown className="w-7 h-7 text-amber-900/80 animate-float" />
        </ScrollHint>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 scroll-mt-28">
        {/* Vietnam map background - fades in/out with section */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <Image 
            src="/vietnam.png" 
            alt="" 
            fill
            className="object-contain object-center"
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 tracking-tight">Unsere Geschichte</h2>
            <p className="mt-4 text-lg text-amber-900/80 max-w-3xl mx-auto">
              Seit Jahren vereinen wir die Aromen Vietnams mit modernen Einflüssen: authentische Pho, frische Sommerrollen,
              feines Sushi – alles mit Liebe zum Detail, in Familienhand geführt und fußläufig zum Münchner Hauptbahnhof.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3 text-amber-900">
                <Utensils className="w-5 h-5" />
                <span className="font-semibold">Vietnamesische Klassiker</span>
              </div>
              <p className="text-amber-900/80">Pho, Bun, Sommerrollen – traditionell zubereitet, modern serviert.</p>
            </div>
            
            <div className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3 text-amber-900">
                <Fish className="w-5 h-5" />
                <span className="font-semibold">Sushi & Frische</span>
              </div>
              <p className="text-amber-900/80">Feinste Auswahl an Sushi – frisch, ausgewogen und elegant.</p>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3 text-amber-900">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Beste Qualität</span>
              </div>
              <p className="text-amber-900/80">Sorgfältig ausgewählte Zutaten, hohe Standards, liebevolle Zubereitung.</p>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3 text-amber-900">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Familienbetrieb</span>
              </div>
              <p className="text-amber-900/80">Herzlich, bodenständig und persönlich – Gastfreundschaft aus Tradition.</p>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3 text-amber-900">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Zentrale Lage</span>
              </div>
              <p className="text-amber-900/80">Nur wenige Minuten vom Münchner Hauptbahnhof – ideal erreichbar.</p>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3 text-amber-900">
                <Quote className="w-5 h-5" />
                <span className="font-semibold">Unser Versprechen</span>
              </div>
              <p className="text-amber-900/80 italic">„Gutes Essen verbindet – wir bringen Vietnam nach München.“</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit us preview (contact info on homepage) */}
      <section id="visit" className="py-16 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-4xl md:text-5xl font-bold text-amber-900 tracking-tight">Besuche uns</h3>
            <p className="mt-3 text-amber-900/80">Direkt am Münchner Hauptbahnhof – schnell erreichbar.</p>
          </div>
          

          {/* Map and reviews (match contact page layout) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="flex flex-col gap-5">
              <div className="rounded-3xl border border-red-400/50 ring-1 ring-red-300/40 bg-white/40 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06),0_0_60px_rgba(220,38,38,0.18)] p-3 overflow-visible">
                <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden">
                <iframe
                  title="AsiaViet Standort"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Bayerstraße%2015,%2080335%20München&output=embed"
                />
                </div>
              </div>
            </div>
            {/* Reviews */}
            <div className="flex flex-col gap-5">
              <div className="rounded-3xl border border-amber-400/50 ring-1 ring-amber-300/40 bg-white/40 backdrop-blur-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06),0_0_60px_rgba(245,158,11,0.18)]">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-900/70">Kundenstimmen</div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-5 h-5" />
                    <Star className="w-5 h-5" />
                    <Star className="w-5 h-5" />
                    <Star className="w-5 h-5" />
                    <StarHalf className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-amber-900/90 font-medium">4.6/5 · über 600 Bewertungen</span>
                </div>
                <div className="relative h-56 overflow-hidden">
                  <ul className="animate-scrollY space-y-3 text-amber-950 text-[15px] leading-relaxed">
                    <li className="rounded-2xl bg-white/80 border border-white/60 px-4 py-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-10 w-1 rounded-full bg-gradient-to-b from-amber-700 to-amber-500" />
                        <div className="min-w-0">
                          <div className="text-amber-950 font-semibold">Anna K.</div>
                          <div className="text-[11px] text-amber-900/70">vor 2 Tagen</div>
                          <p className="mt-2 text-amber-950">Beste Pho in München. Brühe aromatisch, Portion groß.</p>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-2xl bg-white/80 border border-white/60 px-4 py-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-10 w-1 rounded-full bg-gradient-to-b from-amber-700 to-amber-500" />
                        <div className="min-w-0">
                          <div className="text-amber-950 font-semibold">Marcel R.</div>
                          <div className="text-[11px] text-amber-900/70">letzte Woche</div>
                          <p className="mt-2 text-amber-950">Sushi sehr frisch, Nigiri ist der Hammer kann ich nur empfehle!.</p>
                        </div>
                      </div>
                    </li>
                    {/* duplicate for seamless loop */}
                    <li className="rounded-2xl bg-white/75 border border-white/60 px-4 py-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-10 w-1 rounded-full bg-gradient-to-b from-amber-800 to-amber-600" />
                        <div className="min-w-0">
                          <div className="text-amber-900 font-semibold">Anna K.</div>
                          <div className="text-[11px] text-amber-900/70">vor 2 Tagen</div>
                          <p className="mt-2 text-amber-900">Beste Pho in München. Brühe aromatisch, Portion groß.</p>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-2xl bg-white/75 border border-white/60 px-4 py-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-10 w-1 rounded-full bg-gradient-to-b from-amber-800 to-amber-600" />
                        <div className="min-w-0">
                          <div className="text-amber-900 font-semibold">Gottlieb D.</div>
                          <div className="text-[11px] text-amber-900/70">letzte Woche</div>
                          <p className="mt-2 text-amber-900">So ein liebes Personal! Ich komme sehr gerne wieder!.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Info cards under map/reviews */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm overflow-hidden">
              <div className="flex items-center justify-center gap-3 h-16 px-4 text-amber-900">
                <MapPin className="w-6 h-6" aria-hidden="true" />
                <span className="truncate" title="Bayerstraße 15, 80335 München">Bayerstraße 15, 80335 München</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm overflow-hidden">
              <div className="flex items-center justify-center gap-3 h-16 px-4 text-amber-900">
                <Clock className="w-6 h-6" aria-hidden="true" />
                <span className="whitespace-nowrap" title="11:00–22:00 Uhr">Täglich 11:00–22:00 Uhr</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm overflow-hidden">
              <div className="flex items-center justify-center gap-3 h-16 px-4 text-amber-900">
                <Phone className="w-6 h-6" aria-hidden="true" />
                <span className="whitespace-nowrap" title="089 59068703">089 59068703</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
