import { ArrowRight } from 'lucide-react'
import { Container } from './Layout.jsx'
import Reveal from './Reveal.jsx'

export default function Promotion() {
  return (
    <section id="promo" aria-labelledby="promo-title" className="bg-cream py-24 sm:py-32">
      <Container>
        <div className="relative grid overflow-hidden bg-terracotta-deep text-cream lg:grid-cols-12">
          {/* Image */}
          <Reveal className="relative min-h-[320px] lg:col-span-6 lg:min-h-[560px]">
            <img
              src="/images/promo.webp"
              width="1600"
              height="1066"
              alt="Chocolate dessert with truffles, shaved chocolate and fresh mint on a white plate"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Reveal>

          {/* Copy */}
          <div className="flex flex-col justify-center px-7 py-14 sm:px-12 lg:col-span-6 lg:px-16 lg:py-20">
            <Reveal delay={100}>
              <p className="flex items-center gap-4 font-ui text-xs font-medium uppercase tracking-[0.22em] text-cream/90">
                <span aria-hidden="true" className="h-px w-10 bg-cream/70" />
                Made for Special Moments
              </p>
              <h2
                id="promo-title"
                className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl"
              >
                A Little Something <em className="italic">Special.</em>
              </h2>
              <p className="mt-7 max-w-md text-base leading-relaxed text-cream/90 sm:text-lg">
                Enjoy selected signature dishes and seasonal creations made to make your dining
                experience even more memorable.
              </p>
              <a
                href="#reserve"
                className="btn mt-10 w-full bg-cream text-espresso hover:bg-espresso hover:text-cream sm:w-auto"
              >
                Discover What&rsquo;s New
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
