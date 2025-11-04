import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-amber-200/50 bg-gradient-to-b from-white/60 to-white/40 backdrop-blur-xl">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-12 2xl:px-16 py-12 xl:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.png" 
                alt="AsiaViet Restaurant München Logo" 
                width={140} 
                height={48} 
                className="h-10 xl:h-11 w-auto"
              />
            </Link>
            <p className="text-sm xl:text-base text-amber-900/80 leading-relaxed">
              Authentische vietnamesische und japanische Küche im Herzen Münchens. Direkt am Hauptbahnhof.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg xl:text-xl font-semibold text-amber-900 mb-4">Navigation</h3>
            <nav className="flex flex-col gap-3">
              <Link 
                href="/#home" 
                className="text-sm xl:text-base text-amber-900/80 hover:text-red-600 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/#about" 
                className="text-sm xl:text-base text-amber-900/80 hover:text-red-600 transition-colors"
              >
                Unsere Geschichte
              </Link>
              <Link 
                href="/#visit" 
                className="text-sm xl:text-base text-amber-900/80 hover:text-red-600 transition-colors"
              >
                Besuche uns
              </Link>
              <Link 
                href="/menu" 
                className="text-sm xl:text-base text-amber-900/80 hover:text-red-600 transition-colors"
              >
                Speisekarte
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg xl:text-xl font-semibold text-amber-900 mb-4">Kontakt</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <address className="text-sm xl:text-base text-amber-900/80 not-italic">
                  Bayerstraße 15<br />
                  80335 München
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-600 flex-shrink-0" aria-hidden="true" />
                <time className="text-sm xl:text-base text-amber-900/80" dateTime="11:00">
                  Täglich 11:00–22:00 Uhr
                </time>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+4915738848357" 
                  className="text-sm xl:text-base text-amber-900/80 hover:text-red-600 transition-colors"
                >
                  +49 157 38848357
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:dinhchienv@yahoo.de" 
                  className="text-sm xl:text-base text-amber-900/80 hover:text-red-600 transition-colors"
                >
                  dinhchienv@yahoo.de
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-lg xl:text-xl font-semibold text-amber-900 mb-4">Restaurant</h3>
            <div className="flex flex-col gap-3 text-sm xl:text-base text-amber-900/80">
              <p>Vietnamesische & Japanische Küche</p>
              <p>Familienbetrieb</p>
              <p>Fußläufig zum Hauptbahnhof</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-amber-900/70">
              © {new Date().getFullYear()} AsiaViet Restaurant München. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-5 text-xs text-amber-900/70">
              <Link href="/impressum" className="hover:text-red-600 transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-red-600 transition-colors">
                Datenschutz
              </Link>
              <span className="text-xs text-amber-900/60">
                Made with <span className="text-red-400">♥</span> by <a href="https://www.instagram.com/qottlieb/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 underline underline-offset-4 transition-colors">Gottlieb Dinh</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

