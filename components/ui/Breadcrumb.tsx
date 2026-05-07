import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  light?: boolean
}

export function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const textColor = light ? 'rgba(255,255,255,0.75)' : 'var(--color-charcoal)'
  const activeColor = light ? '#FFFFFF' : 'var(--color-espresso)'

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className="flex flex-wrap items-center gap-x-2 text-sm"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && (
              <span style={{ color: textColor }} aria-hidden>
                ›
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="transition-opacity hover:opacity-80"
                style={{ color: textColor }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: activeColor }} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
