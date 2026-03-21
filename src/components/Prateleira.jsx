import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import { useRef } from 'react'
import { ListaImgPrateleira } from '../data/ImgPrateleira'

import 'swiper/css'
import 'swiper/css/free-mode'

export default function Prateleira() {
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
        <section className="flex w-full justify-center items-center px-4 py-14 lg:py-15">
            <div className="flex flex-col w-full">
                <h1 className="text-[#ee5923] text-4xl font-mont font-bold mb-15 text-center">
                    Confira os nossos Cursos de Prateleira
                </h1>

                <div
                    className="w-full max-w-[2240px] mx-auto relative overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={15}
                        slidesPerView={'auto'}
                        loop={true}
                        speed={3500}
                        freeMode={{
                            enabled: false,
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

                        className="flex items-center"
                    >
                        {ListaImgPrateleira.map((img, index) => (
                            <SwiperSlide
                                key={index}
                                className="flex items-center justify-center !w-[160px] md:!w-[240px] lg:!w-[320px]"
                            >
                                <img
                                    src={img}
                                    alt="Imagem do curso"
                                    className="w-full h-auto shrink-0 pointer-events-none object-contain rounded-xl"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}