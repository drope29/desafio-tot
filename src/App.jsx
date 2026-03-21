import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Slide from './components/Slide.jsx'
import Solucoes from './components/Solucoes.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <img className='w-full' src="/images/image-hero-section.png" alt="" />
        <Slide />
        <Solucoes />
      </main>
    </>
  )
}


