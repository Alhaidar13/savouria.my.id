/** Minimal path-based routing (no router dependency needed for two pages). */
export const getPage = () => (/^\/menu\/?$/.test(window.location.pathname) ? 'menu' : 'home')

const NAV = [
  { label: 'Home', id: 'home', onHome: '#home', elsewhere: '/' },
  { label: 'Our Story', id: 'story', onHome: '#story', elsewhere: '/#story' },
  { label: 'Menu', id: 'menu', onHome: '/menu', elsewhere: '/menu' },
  { label: 'Experience', id: 'experience', onHome: '#experience', elsewhere: '/#experience' },
  { label: 'Contact', id: 'contact', onHome: '#contact', elsewhere: '#contact' },
]

/** Navigation links with hrefs that work from the current page. */
export const navLinks = (page) =>
  NAV.map(({ label, id, onHome, elsewhere }) => ({ label, id, href: page === 'home' ? onHome : elsewhere }))

/** Homepage section link that works from any page, e.g. homeHref(page, '#reserve'). */
export const homeHref = (page, hash) => (page === 'home' ? hash : `/${hash}`)
