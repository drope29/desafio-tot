import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx'
import Slide from './Slide.jsx'

export default function App() {
  return (
    <>
      <header>
        <Header />
        <NavBar />
      </header>

      <main>
        <Hero />
        <img className='w-full' src="/images/image-hero-section.png" alt="" />
        <Slide />
      </main>
    </>
  )
}


