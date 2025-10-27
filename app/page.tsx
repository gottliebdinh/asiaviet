import Link from 'next/link'
import { ChefHat, Award, Users, Utensils } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Willkommen bei AsiaViet
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Authentische vietnamesische und asiatische Küche in exquisiter Atmosphäre
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-primary inline-block">
              Unser Menü
            </Link>
            <Link href="/contact" className="btn-secondary inline-block bg-white/10 border-white text-white hover:bg-white/20">
              Reservierung
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
              <ChefHat className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Meisterköche</h3>
            <p className="text-gray-600">Erfahrene Köche mit Leidenschaft für authentische Aromen</p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Qualität</h3>
            <p className="text-gray-600">Frischeste Zutaten in höchster Qualität</p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Family Friendly</h3>
            <p className="text-gray-600">Perfekt für Familie, Freunde und Geschäftstreffen</p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
              <Utensils className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vielfältig</h3>
            <p className="text-gray-600">Von traditionell bis modern - für jeden Geschmack</p>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-container bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary-600">Unsere Geschichte</h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Seit über einem Jahrzehnt bringen wir die authentischen Aromen Vietnams und Asiens zu Ihnen. 
              Unsere Leidenschaft für exquisite Küche gepaart mit warmer Gastfreundschaft macht jeden 
              Besuch bei AsiaViet zu einem besonderen Erlebnis.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Jedes Gericht wird mit Sorgfalt und Liebe zum Detail zubereitet, um Ihnen ein unvergessliches 
              kulinarisches Erlebnis zu bieten.
            </p>
            <Link href="/about" className="btn-primary inline-block">
              Mehr erfahren
            </Link>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
              🍜
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-primary-600 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Bereit für ein kulinarisches Abenteuer?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Reservieren Sie jetzt Ihren Tisch und erleben Sie die besten Aromen Asiens
          </p>
          <Link href="/contact" className="btn-secondary inline-block bg-white text-primary-600 hover:bg-primary-50">
            Jetzt reservieren
          </Link>
        </div>
      </section>
    </>
  )
}
