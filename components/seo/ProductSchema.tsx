type ProductSchemaItem = {
  name: string
  image: string
  category: string
  description: string
}

export function ProductSchema({ products }: { products: ProductSchemaItem[] }) {
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
