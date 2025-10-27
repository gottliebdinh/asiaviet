import { Heart, Leaf, Award, Clock } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Über uns</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Die Geschichte und Vision hinter AsiaViet
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-4xl font-bold text-primary-600 mb-6">Unsere Geschichte</h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Seit über einem Jahrzehnt steht AsiaViet für authentische vietnamesische und asiatische Küche in Deutschland. 
              Was als kleiner Traum begann, ist heute zu einer liebevoll geführten kulinarischen Institution geworden.
            </p>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Unser Gründer und Küchenchef, geboren und aufgewachsen in Vietnam, brachte seine Leidenschaft und 
              jahrhundertealte Familienerzeugnisse nach Deutschland. Jedes Rezept wurde über Generationen hinweg 
              verfeinert und mit modernen Akzenten versehen, ohne den authentischen Charakter zu verlieren.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Bei AsiaViet vereinen wir die kunstvolle Zubereitung traditioneller Gerichte mit der herzlichen 
              Gastfreundschaft, für die Vietnam weltweit bekannt ist. Wir glauben daran, dass Essen mehr ist als nur 
              Nahrungsaufnahme - es ist eine Reise, eine Erinnerung und eine Verbindung zu anderen Kulturen.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-600 mb-12 text-center">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
                <Heart className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Leidenschaft</h3>
              <p className="text-gray-600">
                Jedes Gericht wird mit Hingabe und Liebe zum Detail zubereitet
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
                <Leaf className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Frische</h3>
              <p className="text-gray-600">
                Nur die frischesten Zutaten aus regionalen und internationalen Quellen
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
                <Award className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualität</h3>
              <p className="text-gray-600">
                Höchste Standards in der Zubereitung und Präsentation
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
                <Clock className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Tradition
              </h3>
              <p className="text-gray-600">
                Bewahrung traditioneller Aromen mit zeitgemäßem Touch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-600 mb-8 text-center">Unsere Philosophie</h2>
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-10 shadow-lg">
            <p className="text-lg text-gray-800 mb-4 leading-relaxed text-center italic">
              &quot;Kulinarik ist nicht nur Nahrung - es ist Kunst, Kultur und Gemeinschaft. 
              Bei AsiaViet laden wir Sie ein, die reichen Aromen und Traditionen Vietnams zu entdecken 
              und in eine Welt außergewöhnlicher Genüsse einzutauchen.&quot;
            </p>
            <p className="text-right text-gray-700 font-semibold">— Das AsiaViet Team</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Lernen Sie uns kennen</h2>
          <p className="text-xl mb-8 text-primary-100">
            Besuchen Sie uns und erleben Sie persönlich, was AsiaViet ausmacht
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-secondary inline-block bg-white text-primary-600 hover:bg-gray-50">
              Zum Menü
            </Link>
            <Link href="/contact" className="btn-secondary inline-block bg-white/10 border-white text-white hover:bg-white/20">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

