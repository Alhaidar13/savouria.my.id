import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT, HOURS, NAV_LINKS } from '../data/content.js'
import { Container } from './Layout.jsx'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './SocialIcons.jsx'

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'TikTok', href: 'https://tiktok.com', Icon: TikTokIcon },
]

const heading = 'font-ui text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-terracotta-soft'

export default function Footer() {
  return (
    <footer id="contact" aria-labelledby="footer-brand" className="on-dark border-t border-cream/10 bg-espresso text-cream">
      <Container className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <a href="#home" id="footer-brand" className="font-display text-4xl" aria-label="Savouria, back to top">
            Savouria<span className="text-terracotta-soft">.</span>
          </a>
          <p className="mt-4 font-display text-lg italic text-cream/80">Good Food. Beautiful Moments.</p>
          <ul className="mt-8 flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Savouria on ${label}`}
                  className="flex h-11 w-11 items-center justify-center border border-cream/25 text-cream transition-colors duration-300 hover:border-terracotta-soft hover:bg-terracotta-deep"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className={heading}>Explore</h2>
          <ul className="mt-6 space-y-3 font-ui text-sm">
            {NAV_LINKS.filter((l) => l.href !== '#contact').map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-cream/80 transition-colors hover:text-terracotta-soft">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#reserve" className="text-cream/80 transition-colors hover:text-terracotta-soft">
                Reservations
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className={heading}>Visit Us</h2>
          <address className="mt-6 space-y-4 text-sm not-italic text-cream/80">
            <p className="flex gap-3">
              <MapPin size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-terracotta-soft" aria-hidden="true" />
              <span>
                {CONTACT.address[0]}
                <br />
                {CONTACT.address[1]}
              </span>
            </p>
            <p className="flex gap-3">
              <Phone size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-terracotta-soft" aria-hidden="true" />
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-terracotta-soft">
                {CONTACT.phone}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-terracotta-soft" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors hover:text-terracotta-soft">
                {CONTACT.email}
              </a>
            </p>
          </address>
        </div>

        <div className="lg:col-span-3">
          <h2 className={heading}>Opening Hours</h2>
          <ul className="mt-6 space-y-4 text-sm text-cream/80">
            {HOURS.map((h) => (
              <li key={h.days} className="flex gap-3">
                <Clock size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-terracotta-soft" aria-hidden="true" />
                <span>
                  <span className="block text-cream">{h.days}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 font-ui text-xs text-cream/65 sm:flex-row">
          <p>&copy; 2026 Savouria. All Rights Reserved.</p>
          <p>Crafted with care in Jakarta.</p>
        </Container>
      </div>
    </footer>
  )
}
