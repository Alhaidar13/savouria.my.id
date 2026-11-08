import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Philosophy from './components/Philosophy.jsx'
import SignatureDishes from './components/SignatureDishes.jsx'
import Experience from './components/Experience.jsx'
import Promotion from './components/Promotion.jsx'
import Testimonials from './components/Testimonials.jsx'
import Reservation from './components/Reservation.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-espresso focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Philosophy />
        <SignatureDishes />
        <Experience />
        <Promotion />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </>
  )
}
