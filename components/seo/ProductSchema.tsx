type ProductSchemaItem = {
  name: string
  image: string
  category: string
  description: string
}

export function ProductSchema({ products }: { products: ProductSchemaItem[] }) {
  // No `offers`/`review`/`aggregateRating`: pricing is intentionally not published
  // (practitioner-only, in-clinic sales) and no genuine review data exists per product.
  // This is valid Product markup for general SEO but is not eligible for Google's
  // Product rich-snippet feature, which requires one of those three fields. Accepted
  // tradeoff, not a bug — revisit only if per-product pricing or real reviews exist.
  const schema = {
    '@context': 'https://schema.org',
    '@graph': products.map((p) => ({
      '@type': 'Product',
      name: p.name,
      image: `https://www.thedermstudio.com.au${p.image}`,
      description: p.description,
      category: p.category,
      brand: {
        '@type': 'Brand',
        name: 'Lira Clinical',
      },
      url: 'https://www.thedermstudio.com.au/lira-clinical',
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
