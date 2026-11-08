import { CalendarCheck } from 'lucide-react'
import { homeHref } from '../../lib/routes.js'
import { Container } from '../Layout.jsx'
import Reveal from '../Reveal.jsx'

export default function ReservationCTA() {
  return (
    <section
      id="menu-reserve"
      aria-labelledby="menu-reserve-title"
      className="on-dark relative overflow-hidden bg-espresso text-cream"
    >
      <img
        src="/images/reserve.webp"
        width="1200"
        height="800"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-espresso/80" />

      <Container className="relative py-24 text-center sm:py-32">
        <Reveal>
          <p className="eyebrow mb-5">Reservations</p>
          <h2 id="menu-reserve-title" className="font-display text-4xl sm:text-5xl lg:text-6xl">
            Found Your <em className="italic text-terracotta-soft">Favorite?</em>
          </h2>
          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-cream/80 sm:text-lg">
            Your next memorable dining experience starts with a seat at Savouria.
          </p>
          <a href={homeHref('menu', '#reserve')} className="btn btn-primary mt-10 w-full sm:w-auto">
            <CalendarCheck size={17} strokeWidth={1.6} aria-hidden="true" />
            Reserve a Table
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
