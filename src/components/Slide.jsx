import { useRef } from 'react'
import { ListaLogos } from '../data/LogosSlide'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'

export default function Slide() {
    const swiperRef = useRef(null)

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop()
        }
    }

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.start()
        }
    }

    return (
        <section className="flex flex-col justify-center bg-[#ffe5c9] w-full h-[361px] px-4 overflow-hidden">

            <div className="flex flex-col mb-12 items-start lg:ml-64 mt-9">
                <h1 className="text-[#e34926] font-mont font-bold text-4xl mb-3 tracking-wide">
                    Nossos clientes
                </h1>
                <p className="text-black font-mont text-xl max-w-2xl leading-normal">
                    As empresas que geramos as experiências desejadas!
                </p>
            </div>

            <div
                className="w-full max-w-[2240px] mx-auto relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    loop={true}
                    speed={3000}

                    freeMode={{
                        enabled: true,
                        momentum: false,
                    }}

                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}

                    allowTouchMove={false}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}

                    breakpoints={{
                        320: { slidesPerView: 3 },
                        768: { slidesPerView: 6 },
                        1024: { slidesPerView: 10 },
                    }}

                    className="flex items-center"
                >
                    {ListaLogos.map((logo, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center !w-auto">
                            <img
                                src={logo}
                                alt="Logo do cliente"
                                className="h-24 w-auto shrink-0 pointer-events-none"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}