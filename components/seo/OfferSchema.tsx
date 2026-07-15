type OfferSchemaProps = {
  name: string
  description: string
  price: number
  url: string
}

export function OfferSchema({ name, description, price, url }: OfferSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name,
    description,
    price,
    priceCurrency: 'AUD',
    availability: 'https://schema.org/InStock',
    url,
    seller: {
      '@type': 'BeautySalon',
      name: 'The Derm Studio',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1/93 Marine Parade',
        addressLocality: 'Redcliffe',
        addressRegion: 'QLD',
        postalCode: '4020',
        addressCountry: 'AU',
      },
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
