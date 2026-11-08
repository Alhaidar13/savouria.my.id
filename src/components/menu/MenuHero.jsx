import { ArrowDown } from 'lucide-react'

export default function MenuHero() {
  return (
    <section
      id="menu-hero"
      aria-labelledby="menu-hero-title"
      className="relative overflow-hidden bg-cream"
    >
      {/* Decorative terracotta accents */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 hidden h-72 w-72 rounded-full bg-terracotta/15 lg:block"
      />
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-full bg-terracotta/30 lg:hidden" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-28 lg:pt-24">
        {/* Copy */}
        <div className="relative z-10 lg:col-span-6">
          <p className="eyebrow hero-in mb-7 flex items-center gap-4" style={{ '--hero-delay': '100ms' }}>
            <span aria-hidden="true" className="h-px w-10 bg-terracotta" />
            Explore Our Selection
          </p>
          <h1
            id="menu-hero-title"
            className="hero-in font-display text-[clamp(2.9rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.02em]"
            style={{ '--hero-delay': '220ms' }}
          >
            A Menu Crafted to{' '}
            <em className="font-normal italic text-terracotta-deep">Delight.</em>
          </h1>
          <p
            className="hero-in mt-8 max-w-lg text-base leading-relaxed text-espresso/80 sm:text-lg"
            style={{ '--hero-delay': '360ms' }}
          >
            From comforting classics to signature creations, discover dishes made with passion,
            quality ingredients, and a love for great food.
          </p>
          <div className="hero-in mt-10" style={{ '--hero-delay': '480ms' }}>
            <a href="#menu-grid" className="btn btn-primary w-full sm:w-auto">
              Browse the Menu
              <ArrowDown size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Editorial image composition */}
        <div className="hero-img-in relative mx-auto w-full max-w-xl pb-10 pr-6 sm:pr-10 lg:col-span-6 lg:max-w-none lg:pb-12">
          <div
            aria-hidden="true"
            className="absolute -left-3 top-6 h-[85%] w-[70%] border border-terracotta sm:-left-5"
          />
          <figure className="relative ml-4 aspect-[4/3] overflow-hidden bg-espresso/10 sm:ml-6 lg:aspect-[5/4]">
            <img
              src="/images/ribeye.webp"
              width="900"
              height="675"
              alt="Sliced bone-in ribeye steak on a dark plate with a steak knife"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </figure>
          <figure className="absolute bottom-0 right-0 aspect-square w-[42%] overflow-hidden border-[6px] border-cream bg-espresso/10 shadow-[0_24px_40px_-24px_rgb(44_34_30/0.5)] sm:border-8">
            <img
              src="/images/pasta.webp"
              width="900"
              height="709"
              alt="Tagliatelle pasta topped with shavings of black truffle"
              loading="eager"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
