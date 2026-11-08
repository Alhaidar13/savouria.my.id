# Savouria — Premium Restaurant Homepage

## Project Overview
- **Name**: Savouria
- **Goal**: Single-page homepage for a premium casual dining restaurant (modern editorial, warm and welcoming).
- **Stack**: React 19 + Tailwind CSS v4 + Vite + Lucide icons
- **Scope**: Homepage only. No extra routes or pages; all navigation uses smooth scrolling to anchors.

## Completed Features
1. Sticky navbar: wordmark, Home / Our Story / Menu / Experience / Contact, Reserve a Table CTA, scroll-spy, mobile hamburger menu
2. Hero: asymmetrical editorial layout, entrance animation, two CTAs
3. Brand introduction ("Our Philosophy")
4. Signature dishes: 4 cards (4 / 2 / 1 columns), IDR placeholder prices, hover interaction
5. Dining experience: espresso full-width section with interior photo and 3 highlights
6. Special promotion banner (terracotta)
7. Testimonials: 3 cards with star ratings
8. Reservation form: frontend validation + confirmation state (no external service)
9. Footer: links, address, phone, email, opening hours, Instagram / Facebook / TikTok icons

## Section Anchors (single page)
`#home` · `#story` · `#menu` · `#experience` · `#promo` · `#testimonials` · `#reserve` · `#contact` (footer)

## Design Tokens (`src/index.css`)
- Fonts: Playfair Display (headings), Poppins (nav/buttons/labels), Inter (body)
- Colors: Deep Espresso `#2C221E`, Warm Cream `#F7F3EE`, Terracotta `#C86D51`
- Terracotta `#C86D51` has 3.3:1 contrast on cream, so two tonal shades of the same hue are used only where text needs WCAG AA (4.5:1):
  `terracotta-deep #A8503A` (text/buttons on cream) and `terracotta-soft #E0917A` (text on espresso).

## Project Structure
```
src/
  App.jsx
  index.css            # design tokens + component classes
  data/content.js      # all copy: dishes, testimonials, hours, contact
  components/          # Navbar, Hero, Philosophy, SignatureDishes, Experience,
                       # Promotion, Testimonials, Reservation, Footer,
                       # Reveal (scroll animation), Layout, SocialIcons
public/images/         # optimized WebP photography
```

## Development
```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # outputs dist/
npm run preview
```

## Accessibility and Performance
- Skip link, semantic landmarks, `aria-current`, labelled form with `role="alert"` errors, visible focus rings
- `prefers-reduced-motion` respected
- WebP images, explicit width/height, lazy loading below the fold, hero image preloaded

## Not Yet Implemented
- Real booking backend / email confirmation
- Full menu page, online ordering (intentionally out of scope)
- "View Full Menu" and "Discover What's New" currently scroll to on-page sections

## Notes
- Photography comes from Creative-Commons-filtered image search results. Replace with the restaurant's own photography before launch.
- Address, phone, email and prices are placeholders.
