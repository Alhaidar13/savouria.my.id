import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-cream"
    >
      <div className="grid items-stretch lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)]">
        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center px-5 pb-12 pt-14 sm:px-8 sm:pt-20 lg:pb-24 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pr-14 lg:pt-24">
          <p
            className="eyebrow hero-in mb-7 flex items-center gap-4"
            style={{ '--hero-delay': '100ms' }}
          >
            <span aria-hidden="true" className="h-px w-10 bg-terracotta" />
            An Experience Worth Savouring
          </p>

          <h1
            id="hero-title"
            className="hero-in font-display text-[clamp(2.9rem,6.4vw,6rem)] font-medium leading-[1.02] tracking-[-0.02em]"
            style={{ '--hero-delay': '220ms' }}
          >
            Where Every Bite{' '}
            <em className="font-normal italic text-terracotta-deep">Tells a Story.</em>
          </h1>

          <p
            className="hero-in mt-8 max-w-lg text-base leading-relaxed text-espresso/80 sm:text-lg"
            style={{ '--hero-delay': '360ms' }}
          >
            Discover a place where thoughtfully crafted dishes, beautiful flavors, and warm
            hospitality come together to create unforgettable moments.
          </p>

          <div
            className="hero-in mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ '--hero-delay': '480ms' }}
          >
            <a href="#menu" className="btn btn-primary">
              Explore Our Menu
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
            <a href="#reserve" className="btn btn-outline">
              Reserve a Table
            </a>
          </div>

          <dl
            className="hero-in mt-14 hidden gap-10 border-t border-espresso/15 pt-6 font-ui sm:flex"
            style={{ '--hero-delay': '600ms' }}
          >
            <div>
              <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-espresso/60">
                Open daily
              </dt>
              <dd className="mt-1 text-sm font-medium">11:00 – 22:00</dd>
            </div>
            <div>
              <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-espresso/60">
                Find us
              </dt>
              <dd className="mt-1 text-sm font-medium">Jakarta Selatan</dd>
            </div>
          </dl>
        </div>

        {/* Image */}
        <div className="relative px-5 pb-16 sm:px-8 lg:px-0 lg:pb-0">
          <div className="hero-img-in relative mx-auto h-full max-w-xl lg:mx-0 lg:max-w-none">
            {/* Offset frame for an editorial feel */}
            <div
              aria-hidden="true"
              className="absolute -left-3 top-6 hidden h-[88%] w-[78%] border border-terracotta sm:block lg:-left-6 lg:top-14"
            />
            <figure className="relative aspect-[4/5] overflow-hidden bg-espresso/10 lg:ml-0 lg:aspect-auto lg:h-full lg:min-h-[640px]">
              <img
                src="/images/hero.webp"
                width="1100"
                height="1375"
                alt="Creamy mushroom tagliatelle served on a rustic wooden board with a silver fork"
                fetchpriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[30%_50%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent"
              />
              <figcaption className="absolute bottom-6 left-6 right-6 text-cream sm:right-auto sm:max-w-xs">
                <span className="font-ui text-[0.6875rem] uppercase tracking-[0.2em] text-cream/80">
                  This season
                </span>
                <span className="mt-1 block font-display text-2xl italic">
                  Wild Mushroom Tagliatelle
                </span>
              </figcaption>
            </figure>

            {/* Decorative vertical type */}
            <p
              aria-hidden="true"
              className="vertical-text absolute -right-1 top-10 hidden font-ui text-[0.6875rem] uppercase tracking-[0.35em] text-espresso/60 xl:block"
              style={{ right: '0.9rem', color: 'rgb(247 243 238 / 0.85)' }}
            >
              Est. 2026 &nbsp;·&nbsp; Jakarta
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
