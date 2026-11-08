# Savouria — Premium Restaurant Website (Homepage + Menu Page)

## Project Overview
- **Name**: Savouria
- **Goal**: Single-page homepage for a premium casual dining restaurant (modern editorial, warm and welcoming).
- **Stack**: React 19 + Tailwind CSS v4 + Vite + Lucide icons
- **Scope**: Homepage (`/`) and Menu Page (`/menu`). Lightweight path-based routing in `src/lib/routes.js` (no router dependency). Hosting must serve `index.html` for `/menu` (SPA fallback); Vite dev/preview already does.

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

## Menu Page (`/menu`)
1. Hero: "A Menu Crafted to Delight." with editorial photo composition and terracotta accents
2. Category navigation: 8 pill tabs (All Menu, Starters, Main Course, Pasta, Burgers, Chicken, Desserts, Beverages), item counts, active = terracotta, horizontal scroll on mobile, sticky under the navbar
3. Menu grid: 12 items, 3 / 2 / 1 columns, 5:4 images, category label, name, description, IDR price, "Popular" / "Chef's Choice" badge, filter with staggered fade-in
4. Chef's Special: Signature Ribeye Steak, espresso/cream editorial layout; "Explore This Dish" filters to Main Course, scrolls to the card and outlines it
5. Promotion banner: "Good Food, Better Moments." (terracotta overlay); CTA resets the filter to All Menu
6. Reservation CTA: "Found Your Favorite?" links to the homepage reservation form (`/#reserve`)
7. Footer: same component as the homepage

Menu data lives in `src/data/menu.js` (add or edit dishes there). Prices are formatted by `formatIDR`.

## Section Anchors (homepage)
`#home` · `#story` · `#menu` · `#experience` · `#promo` · `#testimonials` · `#reserve` · `#contact` (footer)

## Design Tokens (`src/index.css`)
- Fonts: Playfair Display (headings), Poppins (nav/buttons/labels), Inter (body)
- Colors: Deep Espresso `#2C221E`, Warm Cream `#F7F3EE`, Terracotta `#C86D51`
- Terracotta `#C86D51` has 3.3:1 contrast on cream, so two tonal shades of the same hue are used only where text needs WCAG AA (4.5:1):
  `terracotta-deep #A8503A` (text/buttons on cream) and `terracotta-soft #E0917A` (text on espresso).

## Project Structure
```
src/
  App.jsx              # picks Home or Menu from the URL path
  pages/MenuPage.jsx
  lib/routes.js        # getPage, navLinks(page), homeHref(page, hash)
  index.css            # design tokens + component classes
  data/content.js      # homepage copy: dishes, testimonials, hours, contact
  data/menu.js         # menu categories, 12 items, featured dish, IDR formatter
  components/          # Navbar, Hero, Philosophy, SignatureDishes, Experience,
                       # Promotion, Testimonials, Reservation, Footer,
                       # Reveal (scroll animation), Layout, SocialIcons
  components/menu/     # MenuHero, CategoryNav, MenuGrid, MenuCard, ChefSpecial,
                       # MenuPromo, ReservationCTA
public/images/         # optimized WebP photography (menu dishes in images/menu/)
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
- Dedicated reservation page (the Menu CTA uses the homepage `#reserve` form)
- Online ordering, per-dish detail pages ("Explore This Dish" scrolls to and highlights the card)
- "Discover What's New" on the homepage still scrolls to the reservation section

## Notes
- Photography comes from Creative-Commons-filtered image search results. Replace with the restaurant's own photography before launch.
- Address, phone, email and prices are placeholders.
