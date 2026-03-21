import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Slide from './components/Slide.jsx'
import Solucoes from './components/Solucoes.jsx'
import Infos from './components/Infos.jsx'
import Material from './components/MaterialGratuito.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <img className='w-full h-auto max-h-[500px] lg:max-h-[700px] object-cover object-top' src="/images/image-hero-section.png" alt="" />
        <Slide />
        <Solucoes />
        <Infos/>
        <Material />
      </main>
    </>
  )
}


