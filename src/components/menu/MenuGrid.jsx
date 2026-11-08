import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menu.js'
import { Container, SectionHeading } from '../Layout.jsx'
import Reveal from '../Reveal.jsx'
import CategoryNav from './CategoryNav.jsx'
import MenuCard from './MenuCard.jsx'

const COUNTS = Object.fromEntries(
  MENU_CATEGORIES.map((c) => [c.id, c.id === 'all' ? MENU_ITEMS.length : MENU_ITEMS.filter((i) => i.category === c.id).length]),
)

/** Sections 2 + 3: category filter and the menu grid. State is owned by the page. */
export default function MenuGrid({ category, onCategoryChange, highlightId }) {
  const items = category === 'all' ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === category)
  const label = MENU_CATEGORIES.find((c) => c.id === category)?.label

  return (
    <section id="menu-grid" aria-labelledby="menu-grid-title" className="scroll-mt-20 bg-cream">
      <CategoryNav active={category} onChange={onCategoryChange} counts={COUNTS} />

      <Container className="py-20 sm:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Made With Passion"
              title={
                <>
                  Discover Our <em className="italic text-terracotta-deep">Menu.</em>
                </>
              }
              titleId="menu-grid-title"
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-espresso/80 sm:text-lg">
              Every dish tells a story of flavor, craftsmanship, and carefully selected ingredients.
            </p>
          </Reveal>
        </div>

        <p className="mt-12 font-ui text-xs tracking-wide text-espresso/60" role="status" aria-live="polite">
          Showing {items.length} {items.length === 1 ? 'dish' : 'dishes'} &middot; {label}
        </p>

        {/* key forces the staggered entrance to replay on every filter change */}
        <ul key={category} className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} highlighted={item.id === highlightId} />
          ))}
        </ul>

        <p className="mt-12 text-center font-ui text-xs text-espresso/55">
          Prices are placeholders and may change.
        </p>
      </Container>
    </section>
  )
}
