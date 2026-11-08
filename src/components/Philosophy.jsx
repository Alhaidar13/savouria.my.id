import { ArrowRight } from 'lucide-react'
import { Container } from './Layout.jsx'
import Reveal from './Reveal.jsx'

export default function Philosophy() {
  return (
    <section id="story" aria-labelledby="story-title" className="bg-cream py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Large photograph */}
          <Reveal className="lg:col-span-7">
            <figure className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-espresso/10 sm:aspect-[16/11]">
                <img
                  src="/images/philosophy.webp"
                  width="1200"
                  height="673"
                  alt="Guests laughing and sharing plates around a long candlelit restaurant table"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4 flex items-center gap-4 font-ui text-[0.6875rem] uppercase tracking-[0.2em] text-espresso/70">
                <span aria-hidden="true" className="h-px w-10 bg-terracotta" />
                Shared tables, shared stories
              </figcaption>
            </figure>
          </Reveal>

          {/* Copy, offset downward for asymmetry */}
          <div className="lg:col-span-5 lg:col-start-8 lg:mt-24">
            <Reveal delay={120}>
              <p className="eyebrow mb-5">Our Philosophy</p>
              <h2
                id="story-title"
                className="font-display text-4xl sm:text-5xl lg:text-[3.5rem]"
              >
                Good Food. <em className="italic text-terracotta-deep">Beautiful Moments.</em>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-espresso/85">
                At Savouria, we believe that great food is more than just a meal. It is about the
                ingredients, the craftsmanship, and the moments shared around the table.
              </p>
              <p className="mt-5 leading-relaxed text-espresso/70">
                From market-fresh produce to slow-simmered sauces, every detail is considered, so
                that what lands on your table is something worth remembering long after the last
                bite.
              </p>
              <a href="#experience" className="link-underline mt-10">
                Discover Our Story
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
