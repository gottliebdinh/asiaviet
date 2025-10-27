import { ArrowRight } from 'lucide-react'

const menuCategories = [
  {
    title: 'Vorspeisen',
    items: [
      { name: 'Frühlingsrollen (Vegan möglich)', description: 'Knusprige Rolle mit Gemüse oder Garnelen', price: '6,50 €' },
      { name: 'Sommerrollen', description: 'Frische Reisrollen mit Krabben und Gemüse', price: '7,50 €' },
      { name: 'Hühnersalat', description: 'Zarter Hühnersalat mit vietnamesischer Note', price: '8,50 €' },
      { name: 'Pomelo-Salat mit Garnelen', description: 'Exotischer Salat mit rosa Grapefruit', price: '9,50 €' },
    ]
  },
  {
    title: 'Suppen',
    items: [
      { name: 'Phở Bò', description: 'Traditionelle vietnamesische Rindersuppe', price: '12,50 €' },
      { name: ' gov Gai', description: 'Nudelsuppe mit Hühnerfleisch', price: '11,50 €' },
      { name: 'Tom Yam Kung', description: 'Scharfe thailändische Garnelensuppe', price: '13,50 €' },
      { name: 'Coconut Curry Soup', description: 'Cremige Kokoscurry-Suppe mit Gemüse', price: '10,50 €' },
    ]
  },
  {
    title: 'Hauptgerichte',
    items: [
      { name: 'Bun Cha', description: 'Gegrilltes Schweinefleisch mit Reisnudeln', price: '14,50 €' },
      { name: 'Pad Thai', description: 'Gebratene Reisnudeln mit Ei und Gemüse', price: '13,50 €' },
      { name: 'Gegrillte Ente', description: 'Marinierte Ente mit Reis und Gemüse', price: '16,50 €' },
      { name: 'Vietnamesisches Curry', description: 'Dufendes Curry mit Kokosmilch', price: '15,50 €' },
    ]
  },
  {
    title: 'Vegetarische Gerichte',
    items: [
      { name: 'Gebratenes Gemüse', description: 'Frisches saisonales Gemüse in Sojasauce', price: '11,50 €' },
      { name: 'Tofu Curry', description: 'Würziges Curry mit Tofu und Gemüse', price: '12,50 €' },
      { name: 'Vegetarische Pfanne', description: 'Gemischtte Gemüse in aromatischer Sauce', price: '10,50 €' },
    ]
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Mango mit Klebreis', description: 'Süße Mango mit Kokosreis', price: '5,50 €' },
      { name: 'Vietnamesischer Pudding', description: 'Traditioneller Chè Pudding', price: '4,50 €' },
      { name: 'Eiscreme (3 Sorten)', description: 'Vanille, Kokos, Grüner Tee', price: '4,50 €' },
    ]
  },
]

export default function Menu() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Unser Menü</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Entdecken Sie unsere Auswahl an authentischen vietnamesischen und asiatischen Spezialitäten
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-primary-600 mb-8 flex items-center">
                {category.title}
                <ArrowRight className="ml-3 w-6 h-6" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                      <span className="text-xl font-bold text-primary-600 ml-4">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-6xl mx-auto mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-gray-700">
            <strong>Hinweis:</strong> Alle Preise inklusive MwSt. Gerichte können je nach Allergien oder Vorlieben angepasst werden. 
            Bitte sprechen Sie uns an!
          </p>
        </div>
      </section>
    </div>
  )
}

