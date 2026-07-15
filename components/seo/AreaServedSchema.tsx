type AreaServedSchemaProps = {
  areaName: string
  url: string
}

export function AreaServedSchema({ areaName, url }: AreaServedSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'The Derm Studio',
    telephone: '+61414185007',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1/93 Marine Parade',
      addressLocality: 'Redcliffe',
      addressRegion: 'QLD',
      postalCode: '4020',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.234,
      longitude: 153.1149,
    },
    areaServed: {
      '@type': 'Place',
      name: areaName,
    },
    url,
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
