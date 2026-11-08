import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/content.js'
import { Container, SectionHeading } from './Layout.jsx'
import Reveal from './Reveal.jsx'

function Stars({ rating }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          strokeWidth={1.5}
          aria-hidden="true"
          className={i < rating ? 'fill-terracotta text-terracotta' : 'text-espresso/25'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-cream py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Guest Stories"
            title={
              <>
                Words From <em className="italic text-terracotta-deep">Our Guests.</em>
              </>
            }
            titleId="testimonials-title"
            align="center"
          />
        </Reveal>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 110} className="h-full">
              <figure
                className={`flex h-full flex-col border border-espresso/10 bg-white/70 p-8 shadow-[0_10px_30px_-18px_rgb(44_34_30/0.35)] lg:p-9 ${
                  i === 1 ? 'md:-translate-y-4' : ''
                }`}
              >
                <Stars rating={t.rating} />
                <blockquote className="mt-6 flex-1 font-display text-[1.2rem] italic leading-relaxed text-espresso">
                  &ldquo;{t.review}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-espresso/10 pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center bg-espresso font-display text-lg text-cream"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-ui text-sm font-medium">{t.name}</span>
                    <span className="block text-[0.8125rem] text-espresso/65">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
