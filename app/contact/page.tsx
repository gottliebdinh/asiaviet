import type { Metadata } from 'next'
import { MapPin, Phone, Clock, Star, StarHalf, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Besuche uns | AsiaViet',
  description: 'Adresse, Öffnungszeiten und Kontakt von AsiaViet in München',
}

export default function ContactPage() {
  return (
    <main>
      {/* Above-the-fold compact layout */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-10">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 tracking-tight">Besuche uns</h1>
            <p className="mt-2 text-base md:text-lg text-amber-900/80">Direkt am Münchner Hauptbahnhof – schnell erreichbar.</p>
          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left column: Map */}
            <div className="flex flex-col gap-5">
              <div className="rounded-3xl border border-red-400/50 ring-1 ring-red-300/40 bg-white/40 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06),0_0_60px_rgba(220,38,38,0.18)] flex-1 relative overflow-visible p-3">
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

            {/* Right column: Bewertungen */}
            <div className="flex flex-col gap-5">
              <div className="rounded-3xl border border-amber-400/50 ring-1 ring-amber-300/40 bg-white/40 backdrop-blur-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06),0_0_60px_rgba(245,158,11,0.18)] flex-1 relative overflow-visible">
                <div className="relative z-10">
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
                          <p className="mt-2 text-amber-950">Sushi sehr frisch, Nigiri könnten etwas größer sein.</p>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-2xl bg-white/80 border border-white/60 px-4 py-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-10 w-1 rounded-full bg-gradient-to-b from-amber-700 to-amber-500" />
                        <div className="min-w-0">
                          <div className="text-amber-950 font-semibold">Lisa W.</div>
                          <div className="text-[11px] text-amber-900/70">gestern</div>
                          <p className="mt-2 text-amber-950">Sehr freundlicher Service und fairer Preis. Komme wieder.</p>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-2xl bg-white/80 border border-white/60 px-4 py-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-10 w-1 rounded-full bg-gradient-to-b from-amber-700 to-amber-500" />
                        <div className="min-w-0">
                          <div className="text-amber-950 font-semibold">Thanh N.</div>
                          <div className="text-[11px] text-amber-900/70">vor 3 Wochen</div>
                          <p className="mt-2 text-amber-950">Bun Bo Nam Bo richtig gut gewürzt. Authentischer Geschmack.</p>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-2xl bg-white/80 border border-white/60 px-4 py-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-10 w-1 rounded-full bg-gradient-to-b from-amber-700 to-amber-500" />
                        <div className="min-w-0">
                          <div className="text-amber-950 font-semibold">Jonas P.</div>
                          <div className="text-[11px] text-amber-900/70">vor 5 Tagen</div>
                          <p className="mt-2 text-amber-950">Zur Mittagszeit etwas Wartezeit, Essen trotzdem sehr lecker.</p>
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
                          <div className="text-amber-900 font-semibold">Marcel R.</div>
                          <div className="text-[11px] text-amber-900/70">letzte Woche</div>
                          <p className="mt-2 text-amber-900">Sushi sehr frisch, Nigiri könnten etwas größer sein.</p>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-2xl bg-white/75 border border-white/60 px-4 py-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-10 w-1 rounded-full bg-gradient-to-b from-red-500 to-yellow-400" />
                        <div className="min-w-0">
                          <div className="text-amber-900 font-semibold">Lisa W.</div>
                          <div className="text-[11px] text-amber-900/70">gestern</div>
                          <p className="mt-2 text-amber-900">Sehr freundlicher Service und fairer Preis. Komme wieder.</p>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-2xl bg-white/75 border border-white/60 px-4 py-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-10 w-1 rounded-full bg-gradient-to-b from-red-500 to-yellow-400" />
                        <div className="min-w-0">
                          <div className="text-amber-900 font-semibold">Thanh N.</div>
                          <div className="text-[11px] text-amber-900/70">vor 3 Wochen</div>
                          <p className="mt-2 text-amber-900">Bun Bo Nam Bo richtig gut gewürzt. Authentischer Geschmack.</p>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-2xl bg-white/75 border border-white/60 px-4 py-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-10 w-1 rounded-full bg-gradient-to-b from-red-500 to-yellow-400" />
                        <div className="min-w-0">
                          <div className="text-amber-900 font-semibold">Jonas P.</div>
                          <div className="text-[11px] text-amber-900/70">vor 5 Tagen</div>
                          <p className="mt-2 text-amber-900">Zur Mittagszeit etwas Wartezeit, Essen trotzdem sehr lecker.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width info cards (below map and reviews) */}
          <div className="mt-8">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-900/70">Standort, Öffnungszeiten & Telefon</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm overflow-hidden">
                <div className="flex items-center justify-center gap-3 h-16 px-4 text-amber-900">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                  <span className="truncate" title="Bayerstraße 15, 80335 München">Bayerstraße 15, 80335 München</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur shadow-sm overflow-hidden">
                <div className="flex items-center justify-center gap-3 h-16 px-4 text-amber-900">
                  <Clock className="w-6 h-6" aria-hidden="true" />
                  <span className="whitespace-nowrap" title="11:00–22:00 Uhr">11:00–22:00 Uhr</span>
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
        </div>
      </section>
    </main>
  )
}


