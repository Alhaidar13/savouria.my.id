import { useCallback, useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import MenuHero from '../components/menu/MenuHero.jsx'
import MenuGrid from '../components/menu/MenuGrid.jsx'
import ChefSpecial from '../components/menu/ChefSpecial.jsx'
import MenuPromo from '../components/menu/MenuPromo.jsx'
import ReservationCTA from '../components/menu/ReservationCTA.jsx'

export default function MenuPage() {
  const [category, setCategory] = useState('all')
  const [highlightId, setHighlightId] = useState(null)
  const timer = useRef(0)

  useEffect(() => {
    document.title = 'Menu | Savouria — Good Food. Beautiful Moments.'
    return () => clearTimeout(timer.current)
  }, [])

  const scrollTo = (id, block = 'start') =>
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block }), 60)

  // "Explore This Dish": filter to the dish's category, scroll to its card and outline it briefly
  const exploreDish = useCallback((dish) => {
    setCategory(dish.category)
    setHighlightId(dish.id)
    scrollTo(`dish-${dish.id}`, 'center')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setHighlightId(null), 3500)
  }, [])

  const exploreAll = useCallback(() => {
    setCategory('all')
    scrollTo('menu-grid')
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-espresso focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar page="menu" />
      <main id="main">
        <MenuHero />
        <MenuGrid category={category} onCategoryChange={setCategory} highlightId={highlightId} />
        <ChefSpecial onExplore={exploreDish} />
        <MenuPromo onExplore={exploreAll} />
        <ReservationCTA />
      </main>
      <Footer page="menu" />
    </>
  )
}
