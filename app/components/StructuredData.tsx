export default function StructuredData() {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'AsiaViet Restaurant',
    image: 'https://asiaviet.de/logo.png',
    '@id': 'https://asiaviet.de',
    url: 'https://asiaviet.de',
    telephone: '+498959068703',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bayerstraße 15',
      addressLocality: 'München',
      postalCode: '80335',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.1405',
      longitude: '11.5627',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:00',
        closes: '22:00',
      },
    ],
    servesCuisine: ['Vietnamese', 'Japanese', 'Asian'],
    description: 'Authentische vietnamesische und japanische Küche im Herzen Münchens. Direkt am Hauptbahnhof. Pho, Sushi, Frühlingsrollen & mehr.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      reviewCount: '600',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      // TODO: Add social media links if available
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AsiaViet Restaurant',
    image: 'https://asiaviet.de/logo.png',
    '@id': 'https://asiaviet.de',
    url: 'https://asiaviet.de',
    telephone: '+498959068703',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bayerstraße 15',
      addressLocality: 'München',
      postalCode: '80335',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.1405',
      longitude: '11.5627',
    },
    openingHours: 'Mo-Su 11:00-22:00',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}

