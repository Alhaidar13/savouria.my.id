import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Philosophy from './components/Philosophy.jsx'
import SignatureDishes from './components/SignatureDishes.jsx'
import Experience from './components/Experience.jsx'
import Promotion from './components/Promotion.jsx'
import Testimonials from './components/Testimonials.jsx'
import Reservation from './components/Reservation.jsx'
import Footer from './components/Footer.jsx'
import MenuPage from './pages/MenuPage.jsx'
import { getPage } from './lib/routes.js'

function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-espresso focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar page="home" />
      <main id="main">
        <Hero />
        <Philosophy />
        <SignatureDishes />
        <Experience />
        <Promotion />
        <Testimonials />
        <Reservation />
      </main>
      <Footer page="home" />
    </>
  )
}

export default function App() {
  const page = getPage()

  // Cross-page anchors (e.g. /#reserve): the target is rendered by React, so scroll once mounted.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 80)
    return () => clearTimeout(t)
  }, [])

  return page === 'menu' ? <MenuPage /> : <HomePage />
}
