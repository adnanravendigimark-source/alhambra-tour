import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function Hero() {
  const content = await getHomepageContent();

  return (
    <section id="top" className="relative w-full bg-[#FAFAF8] text-[#29302A] overflow-hidden">
      {/* Background Hero Image & Smooth Gradient Blending */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Right side image container */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5">
          <SafeImage
            src={content.heroImage || "/images/hero-alhambra.jpg"}
            alt={content.heroImageAlt || "Panoramic view of the Alhambra Palace in Granada Spain"}
            fill
            priority
            quality={90}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-[75%_center] lg:object-center"
          />
          {/* Gradient Overlay — mobile and desktop need opposite treatment.
              Desktop: the text sits in a separate solid-cream panel beside
              the photo, so the overlay only needs to be opaque right at
              that seam; the rest of the photo should stay fully clear.
              Mobile: there's no side panel — the eyebrow/heading/subtitle/
              paragraph/buttons/badges are all stacked directly on top of
              the full-bleed photo, spanning nearly the whole section
              height, so the overlay has to stay strong through almost that
              entire height (previously it only covered the bottom ~40%,
              leaving the heading/subtitle unreadable against the photo
              behind them) and only ease off near the very top, where
              there's just sky behind the floating header. Inline gradients
              (not Tailwind's via-color / via-position utilities) so the
              stop positions are exact and easy to verify. */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to top, #FAFAF8 0%, rgba(250, 250, 248,0.92) 60%, rgba(250, 250, 248,0.85) 85%, rgba(250, 250, 248,0.5) 100%)",
            }}
          />
          <div
            className="hidden lg:block absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #FAFAF8 0%, rgba(250, 250, 248,0.65) 12%, rgba(250, 250, 248,0.15) 24%, transparent 38%)",
            }}
          />
        </div>

        {/* Hero Content Left Column — extra top padding (beyond the bottom
            padding) makes room for the new floating StickyHeader, which is
            transparent and overlapping the top ~5rem of this section until
            the page scrolls. */}
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8 lg:pt-32 lg:pb-20 z-10">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Tag / Eyebrow */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#B8863B] mb-3">
              {content.heroBadge || "ALHAMBRA TOUR"}
            </p>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.4rem] font-bold leading-[1.04] tracking-tight text-[#0F5C56] drop-shadow-xs mb-3">
              {content.heroHeading || "Alhambra Tour"}
            </h1>

            {/* Subtitle */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#B8863B] leading-snug mb-5">
              {content.heroSubheading || "Step Into the Soul of Andalusia"}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed text-[#29302A]/90 max-w-lg mb-8 font-normal">
              Explore the breathtaking Alhambra Palace with expert local guides. Discover Nasrid Palaces, Generalife Gardens and Granada's rich history.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href={content.heroCtaPrimaryHref || "#tours"}
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#0F5C56] hover:bg-[#0B4640] px-7 py-3.5 text-sm font-bold tracking-wider uppercase text-white shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{content.heroCtaPrimaryText || "EXPLORE TOURS"}</span>
                <span className="text-base">→</span>
              </a>

              <a
                href={content.heroCtaSecondaryHref || "#prices"}
                className="inline-flex items-center gap-2 rounded-xl border border-[#29302A]/30 bg-[#FAFAF8]/80 hover:bg-[#E5D6BE]/60 px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-[#29302A] backdrop-blur-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#B8863B]">
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                  <path d="M13 5v2" />
                  <path d="M13 11v2" />
                  <path d="M13 17v2" />
                </svg>
                <span>{content.heroCtaSecondaryText || "VIEW TICKETS"}</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-[#29302A]">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D6E8E4] text-[#0F5C56] text-xs font-bold">🛡️</span>
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D6E8E4] text-[#0F5C56] text-xs font-bold">🛡️</span>
                <span>Free Cancellation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D6E8E4] text-[#0F5C56] text-xs font-bold">⚡</span>
                <span>Instant Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlights Bar (Below Hero Image) */}
      <div className="border-t border-[#E5D6BE] bg-[#FAFAF8] py-7 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Item 1 */}
          <div className="flex items-center gap-4 rounded-xl bg-white/70 p-4 border border-[#E5D6BE]/60 shadow-xs">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5D6BE]/50 text-[#B8863B]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" />
                <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0F5C56]">Instant E-Tickets</h4>
              <p className="text-xs text-[#29302A]/80 mt-0.5">Get your tickets instantly by email.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 rounded-xl bg-white/70 p-4 border border-[#E5D6BE]/60 shadow-xs">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5D6BE]/50 text-[#B8863B]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0F5C56]">Expert Local Guides</h4>
              <p className="text-xs text-[#29302A]/80 mt-0.5">Official guides with in-depth knowledge.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 rounded-xl bg-white/70 p-4 border border-[#E5D6BE]/60 shadow-xs">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5D6BE]/50 text-[#B8863B]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0F5C56]">Skip the Line</h4>
              <p className="text-xs text-[#29302A]/80 mt-0.5">Save time with priority access.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-4 rounded-xl bg-white/70 p-4 border border-[#E5D6BE]/60 shadow-xs">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5D6BE]/50 text-[#B8863B]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0F5C56]">24/7 Support</h4>
              <p className="text-xs text-[#29302A]/80 mt-0.5">We're here to help you before and during your visit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
