type ServiceSchemaProps = {
  serviceName: string
  description: string
  url: string
}

export function ServiceSchema({ serviceName, description, url }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: `${serviceName} | The Derm Studio`,
    description,
    provider: {
      '@type': 'BeautySalon',
      name: 'The Derm Studio',
      url: 'https://thedermstudio.com.au',
      telephone: '+61414185007',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1/93 Marine Parade',
        addressLocality: 'Redcliffe',
        addressRegion: 'QLD',
        postalCode: '4020',
        addressCountry: 'AU',
      },
    },
    areaServed: {
      '@type': 'Place',
      name: 'Redcliffe, Moreton Bay Peninsula, QLD',
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
