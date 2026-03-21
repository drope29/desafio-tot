export default function Hero() {
    return (
        <section className="bg-[#e34926] text-white pt-10 pb-16 lg:pt-8 lg:pb-16 flex flex-col items-center text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-[55px] font-extrabold leading-[1.15] tracking-wide mb-6 lg:mb-2 [&_br]:hidden lg:[&_br]:block">
                Soluções educativas, entrega de conhecimento <br />
                e conexão para a sua organização.
            </h1>
            <p className="text-lg md:text-[25px] mb-10 font-mont tracking-wide [&_br]:hidden lg:[&_br]:block">
                Conteúdos estratégicos, desenvolvidos para a sua realidade, adaptados para os seus <br />
                colaboradores e personalizados para sua empresa.{' '}
                <span className="font-bold">
                    Com a TOT, o cliente nunca anda <br /> sozinho.
                </span>
            </p>
            <button className="bg-[#ffe5c9] text-black font-bold text-lg lg:text-xl px-8 py-4 lg:px-11 lg:py-5 rounded-full hover:bg-black hover:text-white transition-all duration-500 cursor-pointer w-full max-w-[350px] sm:w-auto">
                Agendar demonstração
            </button>
        </section>
    )
}