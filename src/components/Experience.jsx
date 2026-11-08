import { HIGHLIGHTS } from '../data/content.js'
import { Container } from './Layout.jsx'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="on-dark relative overflow-hidden bg-espresso text-cream"
    >
      {/* Full-width interior photograph */}
      <div className="relative h-[46vh] min-h-[320px] w-full sm:h-[58vh] lg:h-[68vh]">
        <img
          src="/images/experience.webp"
          width="1920"
          height="1088"
          alt="Warmly lit Savouria dining room with leather banquettes, timber ceiling and set tables"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/10 to-espresso"
        />
      </div>

      <Container className="relative -mt-24 pb-24 sm:-mt-32 sm:pb-32 lg:-mt-44">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">The Savouria Experience</p>
          <h2
            id="experience-title"
            className="font-display text-4xl sm:text-5xl lg:text-6xl"
          >
            More Than a Meal, <em className="italic text-terracotta-soft">It&rsquo;s an Experience.</em>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            From intimate dinners to meaningful gatherings, Savouria creates the perfect setting
            for every occasion.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden border border-cream/15 bg-cream/15 md:grid-cols-3">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal as="li" key={item.number} delay={i * 110} className="bg-espresso p-8 lg:p-10">
              <span className="font-display text-5xl italic text-terracotta-soft/90">
                {item.number}
              </span>
              <h3 className="mt-6 font-display text-2xl leading-snug">{item.title}</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-cream/75">{item.text}</p>
              <span aria-hidden="true" className="mt-8 block h-px w-12 bg-terracotta" />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
