import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content.js'
import { Container } from './Layout.jsx'

const SECTION_IDS = ['home', 'story', 'menu', 'promo', 'experience', 'testimonials', 'reserve']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  // Scroll spy + border emphasis
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 8)
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 6
      if (atBottom) return setActive('contact')
      let current = 'home'
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  // Close the mobile menu with Escape and when resizing to desktop
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const isActive = (href) => href.slice(1) === active

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur transition-[border-color] duration-300 border-b ${
        scrolled || open ? 'border-espresso/15' : 'border-espresso/10'
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="font-display text-[1.75rem] font-medium tracking-tight text-espresso"
          aria-label="Savouria, back to top"
        >
          Savouria<span className="text-terracotta">.</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9 lg:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive(link.href) ? 'true' : undefined}
                  className={`group relative font-ui text-[0.8125rem] font-medium tracking-wide transition-colors duration-300 hover:text-terracotta-deep ${
                    isActive(link.href) ? 'text-terracotta-deep' : 'text-espresso'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-terracotta transition-transform duration-300 ${
                      isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#reserve" className="btn btn-primary hidden !px-5 !py-3 sm:inline-flex">
            Reserve a Table
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-espresso transition-colors hover:text-terracotta-deep md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden grid transition-[grid-template-rows] duration-400 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile"
            className="border-t border-espresso/10 bg-cream px-5 pb-8 pt-4 sm:px-8"
            hidden={!open}
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-espresso/10">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? 'true' : undefined}
                    className={`flex items-center justify-between py-4 font-display text-2xl ${
                      isActive(link.href) ? 'text-terracotta-deep' : 'text-espresso'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#reserve" onClick={() => setOpen(false)} className="btn btn-primary mt-7 w-full">
              Reserve a Table
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
