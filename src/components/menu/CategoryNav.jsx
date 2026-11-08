import { MENU_CATEGORIES } from '../../data/menu.js'

/** Horizontally scrollable filter pills. Sticks under the global navbar. */
export default function CategoryNav({ active, onChange, counts }) {
  return (
    <div className="sticky top-20 z-40 border-y border-espresso/10 bg-cream/95 backdrop-blur">
      <nav aria-label="Menu categories" className="mx-auto w-full max-w-7xl">
        <ul className="no-scrollbar flex gap-2.5 overflow-x-auto px-5 py-4 sm:gap-3 sm:px-8 lg:justify-center lg:px-10">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = cat.id === active
            return (
              <li key={cat.id} className="shrink-0">
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={(e) => {
                    onChange(cat.id)
                    e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
                  }}
                  className={`inline-flex min-h-11 items-center gap-2 border px-5 py-2.5 font-ui text-[0.8125rem] font-medium tracking-wide transition-colors duration-300 ${
                    isActive
                      ? 'border-terracotta-deep bg-terracotta-deep text-cream'
                      : 'border-espresso/25 text-espresso hover:border-terracotta hover:text-terracotta-deep'
                  }`}
                >
                  {cat.label}
                  <span
                    className={`text-[0.6875rem] ${isActive ? 'text-cream/80' : 'text-espresso/55'}`}
                    aria-label={`${counts[cat.id]} dishes`}
                  >
                    {counts[cat.id]}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
