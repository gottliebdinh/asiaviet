import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum des AsiaViet Restaurants München',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen py-20 md:pt-32">
      <div className="max-w-4xl mx-auto px-6 xl:px-12 2xl:px-16">
        <div className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-lg p-8 xl:p-10 2xl:p-12">
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-amber-900 mb-8">
            Impressum
          </h1>
          
          <div className="prose prose-amber max-w-none text-amber-900/80 space-y-6">
            <section>
              <h2 className="text-2xl xl:text-3xl font-semibold text-amber-900 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <address className="not-italic">
                <p className="mb-2">
                  <strong>AsiaViet</strong>
                </p>
                <p className="mb-2">
                  Bayerstraße 15<br />
                  80335 München<br />
                  Germany
                </p>
                <p className="mb-4">
                  <strong>Kontakt:</strong>
                </p>
                <p className="mb-2">
                  Telefon: <a href="tel:+4915738848357" className="text-red-600 hover:text-red-700">+49 157 38848357</a>
                </p>
                <p>
                  E-Mail: <a href="mailto:dinhchienv@yahoo.de" className="text-red-600 hover:text-red-700">dinhchienv@yahoo.de</a>
                </p>
              </address>
            </section>

            <section>
              <h2 className="text-2xl xl:text-3xl font-semibold text-amber-900 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <address className="not-italic">
                <p>
                  AsiaViet<br />
                  Bayerstraße 15<br />
                  80335 München<br />
                  Germany
                </p>
              </address>
            </section>

            <section>
              <h2 className="text-2xl xl:text-3xl font-semibold text-amber-900 mb-4">
                Haftungsausschluss
              </h2>
              
              <h3 className="text-xl xl:text-2xl font-semibold text-amber-900 mt-6 mb-3">
                Haftung für Inhalte
              </h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich.
              </p>

              <h3 className="text-xl xl:text-2xl font-semibold text-amber-900 mt-6 mb-3">
                Haftung für Links
              </h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>

              <h3 className="text-xl xl:text-2xl font-semibold text-amber-900 mt-6 mb-3">
                Urheberrecht
              </h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
                des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-amber-200/50">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-medium"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

