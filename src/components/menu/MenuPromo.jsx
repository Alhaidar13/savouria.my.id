import { ArrowRight } from 'lucide-react'
import { Container } from '../Layout.jsx'
import Reveal from '../Reveal.jsx'

export default function MenuPromo({ onExplore }) {
  return (
    <section id="menu-promo" aria-labelledby="menu-promo-title" className="bg-cream pb-24 sm:pb-32">
      <Container>
        <div className="on-dark relative overflow-hidden bg-espresso text-cream">
          <img
            src="/images/menu/banner.webp"
            width="1600"
            height="900"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Terracotta wash keeps the copy legible and ties the banner to the brand */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-terracotta-deep via-terracotta-deep/85 to-espresso/40 lg:via-terracotta-deep/75 lg:to-transparent"
          />

          <Reveal className="relative px-7 py-16 sm:px-12 sm:py-20 lg:max-w-2xl lg:px-16 lg:py-28">
            <p className="flex items-center gap-4 font-ui text-xs font-medium uppercase tracking-[0.22em] text-cream/90">
              <span aria-hidden="true" className="h-px w-10 bg-cream/70" />
              Seasonal &amp; Special
            </p>
            <h2 id="menu-promo-title" className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl">
              Good Food, Better <em className="italic">Moments.</em>
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-cream/90 sm:text-lg">
              Discover our seasonal selections and special creations, thoughtfully prepared for every
              occasion.
            </p>
            <button
              type="button"
              onClick={onExplore}
              className="btn mt-10 w-full bg-cream text-espresso hover:bg-espresso hover:text-cream sm:w-auto"
            >
              Explore Our Selection
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
