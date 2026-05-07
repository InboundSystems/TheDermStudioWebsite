/* TODO: Replace with live Google Reviews widget when 10+ reviews exist.
 *
 * To activate Elfsight:
 *   1. Create account at elfsight.com
 *   2. Add a Google Reviews widget and connect The Derm Studio GBP listing
 *   3. Copy the APP-ID from the embed code snippet
 *   4. Install next/script if not already available
 *   5. Add <Script src="https://static.elfsight.com/platform/platform.js" defer />
 *      to app/layout.tsx inside <head> or before </body>
 *   6. Uncomment the div below and replace [APP-ID] with the real ID
 *
 * For Trustindex alternative: https://trustindex.io/google-reviews-widget/
 */
export function GoogleReviewsWidget() {
  return (
    <div className="mt-8 text-center">
      {/*
        <div
          className="elfsight-app-[APP-ID]"
          data-elfsight-app-lazy
        />
      */}
      {/* TODO: Replace placeholder testimonials above with live widget once GBP has 10+ reviews */}
    </div>
  )
}
