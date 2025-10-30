import Image from 'next/image'
import { Utensils, Fish, Award, Users, MapPin, Quote, Star, StarHalf, ChevronDown } from 'lucide-react'
import ScrollHint from './components/ScrollHint'

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Logo, Title, CTA */}
          <div className="text-left">
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
            <div className="mt-6">
              <button className="group relative inline-flex items-center gap-3 px-8 py-3 overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-500 border border-white/30 hover:border-white/50">
                Speisekarte ansehen
                <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Decorative Glass Card */}
          <div className="relative">
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
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
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
    </main>
  )
}
