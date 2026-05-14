export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "The Derm Studio",
    "url": "https://thedermstudio.com.au",
    "telephone": "+61414185007",
    "email": "thedermstudio.contact@gmail.com",
    "description": "The Derm Studio is Redcliffe's results-focused skin clinic offering corrective facials, Lira Clinical corrective peels, skin needling with NCTF and Exosomes, dermaplaning, and Korean lash lifting.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1/93 Marine Parade",
      "addressLocality": "Redcliffe",
      "addressRegion": "QLD",
      "postalCode": "4020",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.2308,
      "longitude": 153.1154
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "14:00"
        /* TODO: Confirm hours with client */
      }
    ],
    "priceRange": "$$",
    "areaServed": "Redcliffe, Moreton Bay Peninsula, QLD",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Skin Treatments",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corrective Facial" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hybrid Facial" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dermaplaning Facial" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corrective Peel" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skin Needling with NCTF" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skin Needling with Exosomes" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Korean Lash Lift & Tint" } }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/thedermstudio_/",
      "https://www.facebook.com/100089228680337/photos/"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
