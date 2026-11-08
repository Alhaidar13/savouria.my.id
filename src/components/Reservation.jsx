import { useMemo, useRef, useState } from 'react'
import { CalendarCheck, Check } from 'lucide-react'
import { TIME_SLOTS } from '../data/content.js'
import { Container } from './Layout.jsx'
import Reveal from './Reveal.jsx'

const EMPTY = { name: '', email: '', phone: '', date: '', time: '', guests: '' }

const todayISO = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function validate(v, min) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  const digits = v.phone.replace(/\D/g, '')
  if (!/^[+\d][\d\s().-]*$/.test(v.phone.trim()) || digits.length < 8 || digits.length > 15)
    e.phone = 'Please enter a valid phone number (8–15 digits).'
  if (!v.date) e.date = 'Please choose a date.'
  else if (v.date < min) e.date = 'Please choose today or a future date.'
  if (!v.time) e.time = 'Please choose a time.'
  if (!v.guests) e.guests = 'Please select the number of guests.'
  return e
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Reservation() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [confirmed, setConfirmed] = useState(null)
  const formRef = useRef(null)
  const min = useMemo(todayISO, [])

  const bind = (id) => ({
    id,
    name: id,
    value: values[id],
    'aria-invalid': errors[id] ? 'true' : 'false',
    'aria-describedby': errors[id] ? `${id}-error` : undefined,
    onChange: (ev) => {
      const next = { ...values, [id]: ev.target.value }
      setValues(next)
      if (errors[id]) setErrors((prev) => ({ ...prev, [id]: validate(next, min)[id] }))
    },
    onBlur: () => values[id] && setErrors((prev) => ({ ...prev, [id]: validate(values, min)[id] })),
  })

  const onSubmit = (ev) => {
    ev.preventDefault()
    const found = validate(values, min)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      formRef.current?.querySelector(`#${first}`)?.focus()
      return
    }
    // Frontend only: no external booking service is called.
    setConfirmed({ ...values })
    setValues(EMPTY)
  }

  const prettyDate = (iso) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

  return (
    <section
      id="reserve"
      aria-labelledby="reserve-title"
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

      <Container className="relative grid gap-14 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-5">Reservations</p>
          <h2 id="reserve-title" className="font-display text-4xl sm:text-5xl lg:text-6xl">
            Your Table <em className="italic text-terracotta-soft">Is Waiting.</em>
          </h2>
          <p className="mt-7 max-w-md text-base leading-relaxed text-cream/80 sm:text-lg">
            Make room for good food, great company, and unforgettable moments.
          </p>
          <ul className="mt-10 space-y-4 font-ui text-sm text-cream/80">
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-terracotta" />
              Open daily from 11:00 to 22:00
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-terracotta" />
              Groups of 9 or more? Call us directly
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="border border-cream/20 bg-espresso/70 p-6 backdrop-blur-sm sm:p-10">
            {confirmed ? (
              <div role="status" aria-live="polite" className="py-6 text-center sm:py-10">
                <span className="mx-auto flex h-14 w-14 items-center justify-center border border-terracotta-soft text-terracotta-soft">
                  <Check size={26} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-7 font-display text-3xl sm:text-4xl">Thank you, {confirmed.name.trim().split(' ')[0]}.</h3>
                <p className="mx-auto mt-4 max-w-md leading-relaxed text-cream/80">
                  Your reservation request for{' '}
                  <strong className="font-medium text-cream">
                    {confirmed.guests} {confirmed.guests === '1' ? 'guest' : 'guests'}
                  </strong>{' '}
                  on <strong className="font-medium text-cream">{prettyDate(confirmed.date)}</strong> at{' '}
                  <strong className="font-medium text-cream">{confirmed.time}</strong> has been received.
                  A confirmation will be sent to{' '}
                  <strong className="font-medium text-cream">{confirmed.email}</strong>.
                </p>
                <p className="mt-3 text-xs text-cream/55">
                  Demo only: no booking is actually made yet.
                </p>
                <button type="button" className="btn btn-outline mt-9" onClick={() => setConfirmed(null)}>
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Table reservation">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Field id="name" label="Full Name" error={errors.name}>
                      <input type="text" autoComplete="name" placeholder="Your full name" className="field" {...bind('name')} />
                    </Field>
                  </div>
                  <Field id="email" label="Email Address" error={errors.email}>
                    <input type="email" autoComplete="email" placeholder="you@example.com" className="field" {...bind('email')} />
                  </Field>
                  <Field id="phone" label="Phone Number" error={errors.phone}>
                    <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+62 812 0000 0000" className="field" {...bind('phone')} />
                  </Field>
                  <Field id="date" label="Date" error={errors.date}>
                    <input type="date" min={min} className="field" {...bind('date')} />
                  </Field>
                  <Field id="time" label="Time" error={errors.time}>
                    <select className="field" {...bind('time')}>
                      <option value="" disabled>
                        Select a time
                      </option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field id="guests" label="Number of Guests" error={errors.guests}>
                      <select className="field" {...bind('guests')}>
                        <option value="" disabled>
                          Select number of guests
                        </option>
                        {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={String(n)}>
                            {n} {n === 1 ? 'guest' : 'guests'}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-9 w-full !bg-terracotta-deep hover:!bg-cream hover:!text-espresso">
                  <CalendarCheck size={17} strokeWidth={1.6} aria-hidden="true" />
                  Reserve Your Table
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
