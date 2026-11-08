import { ArrowRight, ChefHat } from 'lucide-react'
import { FEATURED_ID, MENU_ITEMS, formatIDR } from '../../data/menu.js'
import { Container } from '../Layout.jsx'
import Reveal from '../Reveal.jsx'

export default function ChefSpecial({ onExplore }) {
  const dish = MENU_ITEMS.find((i) => i.id === FEATURED_ID)

  return (
    <section id="chef-special" aria-labelledby="chef-title" className="border-t border-espresso/10 bg-cream py-24 sm:py-32">
      <Container>
        <div className="grid lg:grid-cols-12">
          {/* Image */}
          <Reveal className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-espresso/10 lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <img
                src={dish.image}
                width="900"
                height="675"
                alt={dish.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Copy panel */}
          <Reveal
            delay={120}
            className="on-dark relative bg-espresso px-7 py-14 text-cream sm:px-12 lg:col-span-5 lg:-ml-16 lg:my-14 lg:px-14 lg:py-16"
          >
            <p className="eyebrow mb-5 flex items-center gap-3">
              <ChefHat size={16} strokeWidth={1.5} aria-hidden="true" />
              Chef&rsquo;s Recommendation
            </p>
            <h2 id="chef-title" className="font-display text-4xl sm:text-5xl">
              Something Worth Coming{' '}
              <em className="italic text-terracotta-soft">Back For.</em>
            </h2>

            <div className="mt-9 border-t border-cream/20 pt-8">
              <h3 className="font-display text-2xl text-cream sm:text-3xl">{dish.name}</h3>
              <p className="mt-4 text-base leading-relaxed text-cream/80">
                A beautifully grilled ribeye steak, prepared with our signature seasoning and served
                with a delicious house sauce.
              </p>
              <p className="mt-6 font-ui text-xl font-medium text-terracotta-soft">{formatIDR(dish.price)}</p>
            </div>

            <button type="button" onClick={() => onExplore(dish)} className="btn btn-primary mt-9 w-full sm:w-auto">
              Explore This Dish
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
