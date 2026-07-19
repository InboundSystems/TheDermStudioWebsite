'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { ServiceFaq } from '@/lib/services'

export function FaqAccordion({ faqs }: { faqs: ServiceFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y" style={{ borderColor: 'var(--color-cream-dark)' }}>
      {faqs.map((faq, i) => {
        const open = openIndex === i
        return (
          <div key={i}>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
            >
              <span
                className="text-base font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
              >
                {faq.q}
              </span>
              <ChevronDown
                className="w-5 h-5 shrink-0 transition-transform duration-200 ease-in-out"
                style={{ color: 'var(--color-rose)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-[250ms] ease-in-out"
              style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p
                  className="pb-5 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
