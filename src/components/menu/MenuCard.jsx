import { CATEGORY_LABEL, formatIDR } from '../../data/menu.js'

export default function MenuCard({ item, index, highlighted }) {
  return (
    <li id={`dish-${item.id}`} className="card-in h-full scroll-mt-44" style={{ '--i': index }}>
      <article
        className={`group flex h-full flex-col bg-white/60 transition-[box-shadow,transform] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_40px_-24px_rgb(44_34_30/0.45)] ${
          highlighted ? 'outline outline-2 outline-offset-4 outline-terracotta' : ''
        }`}
      >
        <div className="relative aspect-[5/4] overflow-hidden bg-espresso/10">
          <img
            src={item.image}
            width="1000"
            height="800"
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          />
          {item.badge && (
            <span
              className={`absolute left-4 top-4 px-3 py-1 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.16em] ${
                item.badge === 'Popular' ? 'bg-cream text-espresso' : 'bg-terracotta-deep text-cream'
              }`}
            >
              {item.badge}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-terracotta-deep">
            {CATEGORY_LABEL[item.category]}
          </p>
          <h3 className="mt-2 font-display text-2xl leading-snug">{item.name}</h3>
          <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-espresso/75">{item.description}</p>
          <div className="mt-6 flex items-center justify-between border-t border-espresso/15 pt-4">
            <span className="font-ui text-[0.6875rem] uppercase tracking-[0.18em] text-espresso/60">Price</span>
            <span className="font-ui text-base font-medium text-terracotta-deep">{formatIDR(item.price)}</span>
          </div>
        </div>
      </article>
    </li>
  )
}
