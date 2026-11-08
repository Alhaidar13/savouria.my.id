import { ArrowRight } from 'lucide-react'
import { DISHES } from '../data/content.js'
import { Container, SectionHeading } from './Layout.jsx'
import Reveal from './Reveal.jsx'

function DishCard({ dish, index }) {
  return (
    <Reveal as="li" delay={(index % 4) * 90} className="h-full">
      <article className="group flex h-full flex-col bg-white/60 transition-[box-shadow,transform] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_40px_-24px_rgb(44_34_30/0.45)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-espresso/10">
          <img
            src={dish.image}
            width={dish.width}
            height={dish.height}
            alt={dish.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          />
          <span className="absolute left-4 top-4 bg-cream px-3 py-1 font-ui text-[0.6875rem] font-medium tracking-[0.18em] text-espresso">
            0{index + 1}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl leading-snug">{dish.name}</h3>
          <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-espresso/75">
            {dish.description}
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-espresso/15 pt-4">
            <span className="font-ui text-[0.6875rem] uppercase tracking-[0.18em] text-espresso/60">
              From
            </span>
            <span className="font-ui text-base font-medium text-terracotta-deep">{dish.price}</span>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function SignatureDishes() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="border-t border-espresso/10 bg-cream py-24 sm:py-32"
    >
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Curated With Passion"
              title={
                <>
                  Made to Be <em className="italic text-terracotta-deep">Savoured.</em>
                </>
              }
              titleId="menu-title"
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-espresso/80 sm:text-lg">
              Explore our selection of signature dishes, thoughtfully prepared to delight every
              palate.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DISHES.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} />
          ))}
        </ul>

        <Reveal className="mt-14 flex justify-center">
          <a href="/menu" className="btn btn-outline">
            View Full Menu
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </Reveal>
        <p className="mt-4 text-center font-ui text-xs text-espresso/55">
          Prices are placeholders and may change.
        </p>
      </Container>
    </section>
  )
}
