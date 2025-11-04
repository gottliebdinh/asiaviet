"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Star, StarHalf, ChevronDown, MapPin, Clock, Phone, Utensils, Fish, Award, Users, Quote } from 'lucide-react'
import ScrollHint from './ScrollHint'

export default function MobileHome() {
  return (
    <main className="flex flex-col pt-24">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-start pt-0 pb-12 px-0">
        <div className="w-full">
          <div className="text-center animate-fadeUp">
            <h1 className="text-4xl font-asian font-bold leading-tight mb-4">
              <span className="text-red-600 drop-shadow-lg">ASIA</span>{' '}
              <span className="text-yellow-500 drop-shadow-lg">VIET</span>
            </h1>
            <p className="text-base text-amber-900/80 mt-4 px-2">
              Deine vietnamesische Küche im Herzens München – direkt neben dem Hauptbahnhof. Schnell und lecker.
            </p>
            
            {/* Rating */}
            <div className="mt-6 flex items-center justify-center gap-2 text-amber-900">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <StarHalf className="w-4 h-4 text-yellow-500" />
              </div>
              <span className="text-xs font-medium">4.6/5 · über 600 Bewertungen</span>
            </div>

            {/* Food Image */}
            <div className="mt-8 relative">
              <div className="rounded-2xl border border-white/40 bg-white/30 backdrop-blur-xl shadow-lg p-4 mx-auto max-w-xs">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <div className="absolute -top-8 -right-6 w-32 h-32 bg-gradient-to-br from-red-400/60 via-orange-300/60 to-yellow-300/60 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gradient-to-tr from-amber-300/50 to-red-300/50 rounded-full blur-2xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/essen.png" 
                      alt="Vietnamesische & Japanische Küche" 
                      width={400}
                      height={300}
                      className="w-auto h-48 object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link 
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white rounded-xl text-base font-semibold shadow-xl active:scale-95 transition-transform"
              >
                Speisekarte ansehen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll hint */}
        <ScrollHint targetId="about" className="absolute left-1/2 -translate-x-1/2 bottom-4">
          <ChevronDown className="w-6 h-6 text-amber-900/80 animate-float" />
        </ScrollHint>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-12 px-4 scroll-mt-24">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900 tracking-tight mb-3">Unsere Geschichte</h2>
            <p className="text-sm text-amber-900/80 leading-relaxed">
              Seit Jahren vereinen wir die Aromen Vietnams mit modernen Einflüssen: authentische Pho, frische Sommerrollen,
              feines Sushi – alles mit Liebe zum Detail, in Familienhand geführt und fußläufig zum Münchner Hauptbahnhof.
            </p>
          </div>

          {/* Feature Cards - Stacked for Mobile */}
          <div className="space-y-4">
            <div className="rounded-xl border border-white/40 bg-white/40 backdrop-blur p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-amber-900">
                <Utensils className="w-5 h-5" />
                <span className="font-semibold text-base">Vietnamesische Klassiker</span>
              </div>
              <p className="text-amber-900/80 text-sm">Von aromatischer Pho über knusprige Frühlingsrollen bis zu frischen Sommerrollen – unsere vietnamesischen Klassiker werden nach traditionellen Rezepten zubereitet.</p>
            </div>

            {/* Chef Image Card */}
            <div className="rounded-xl border border-white/40 bg-white/40 backdrop-blur shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/chef.png" 
                  alt="Unsere Chefin" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white/60 backdrop-blur">
                <div className="flex items-center gap-2 mb-1.5 text-amber-900">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold text-base">Familienbetrieb</span>
                </div>
                <p className="text-amber-900/80 text-sm">Herzlich, bodenständig und persönlich – Gastfreundschaft aus Tradition.</p>
              </div>
            </div>
            
            <div className="rounded-xl border border-white/40 bg-white/40 backdrop-blur p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-amber-900">
                <Fish className="w-5 h-5" />
                <span className="font-semibold text-base">Sushi & Frische</span>
              </div>
              <p className="text-amber-900/80 text-sm">Feinste Auswahl an Sushi, täglich frisch zubereitet. Von klassischen Nigiri und Maki bis zu kreativen Spezialrollen.</p>
            </div>

            <div className="rounded-xl border border-white/40 bg-white/40 backdrop-blur p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-amber-900">
                <Award className="w-5 h-5" />
                <span className="font-semibold text-base">Beste Qualität</span>
              </div>
              <p className="text-amber-900/80 text-sm">Wir setzen auf sorgfältig ausgewählte Zutaten, hohe Standards und liebevolle Zubereitung.</p>
            </div>

            <div className="rounded-xl border border-white/40 bg-white/40 backdrop-blur p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-amber-900">
                <Quote className="w-5 h-5" />
                <span className="font-semibold text-base">Unser Versprechen</span>
              </div>
              <p className="text-amber-900/80 text-sm italic">&ldquo;Gutes Essen verbindet Menschen und Kulturen. Mit jedem Gericht bringen wir ein Stück Vietnam nach München – authentisch, herzlich und mit Leidenschaft gekocht.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit us preview */}
      <section id="visit" className="py-12 px-4 scroll-mt-24">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-amber-900 tracking-tight mb-2">Besuche uns</h3>
            <p className="text-sm text-amber-900/80">Direkt am Münchner Hauptbahnhof – schnell erreichbar.</p>
          </div>

          {/* Map */}
          <div className="mb-6 rounded-2xl border border-red-400/50 bg-white/40 backdrop-blur-2xl shadow-lg p-3 overflow-hidden">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <iframe
                title="AsiaViet Standort"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Bayerstraße%2015,%2080335%20München&output=embed"
              />
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-6 rounded-2xl border border-amber-400/50 bg-white/40 backdrop-blur-2xl p-4 shadow-lg">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-900/70">Kundenstimmen</div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <StarHalf className="w-4 h-4" />
              </div>
              <span className="text-xs text-amber-900/90 font-medium">4.6/5 · über 600</span>
            </div>
            <div className="relative h-48 overflow-hidden">
              <ul className="animate-scrollY space-y-2 text-amber-950 text-sm">
                <li className="rounded-xl bg-white/80 border border-white/60 px-3 py-2">
                  <div className="font-semibold text-amber-950 text-xs">Anna K.</div>
                  <p className="mt-1 text-xs text-amber-950">Bester Pho in München. Brühe aromatisch, Portion groß.</p>
                </li>
                <li className="rounded-xl bg-white/80 border border-white/60 px-3 py-2">
                  <div className="font-semibold text-amber-950 text-xs">Marcel R.</div>
                  <p className="mt-1 text-xs text-amber-950">Sushi sehr frisch, Nigiri ist der Hammer!</p>
                </li>
                <li className="rounded-xl bg-white/75 border border-white/60 px-3 py-2">
                  <div className="font-semibold text-amber-900 text-xs">Anna K.</div>
                  <p className="mt-1 text-xs text-amber-900">Mein lieblings Vietnamese in ganz Deutschland!</p>
                </li>
                <li className="rounded-xl bg-white/75 border border-white/60 px-3 py-2">
                  <div className="font-semibold text-amber-900 text-xs">Gottlieb D.</div>
                  <p className="mt-1 text-xs text-amber-900">So ein liebes Personal! Ich komme sehr gerne wieder!</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Info cards */}
          <div className="space-y-3">
            <div className="rounded-xl border border-white/40 bg-white/40 backdrop-blur shadow-sm p-3">
              <div className="flex items-center gap-2 text-amber-900">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-bold">Bayerstraße 15, 80335 München</span>
              </div>
            </div>
            <div className="rounded-xl border border-white/40 bg-white/40 backdrop-blur shadow-sm p-3">
              <div className="flex items-center gap-2 text-amber-900">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-bold">Täglich 11:00–22:00 Uhr</span>
              </div>
            </div>
            <div className="rounded-xl border border-white/40 bg-white/40 backdrop-blur shadow-sm p-3">
              <div className="flex items-center gap-2 text-amber-900">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+4915738848357" className="text-sm font-bold hover:text-red-600 transition-colors">+49 157 38848357</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

