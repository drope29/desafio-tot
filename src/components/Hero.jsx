export default function Hero() {
    return (
        <section className="bg-[#e34926] text-white pt-8 pb-15 flex flex-col items-center text-center">
            <h1 className="lg:text-[55px] font-extrabold leading-[1.15] tracking-wide mb-2">
                Soluções educativas, entrega de conhecimento <br/>
                e conexão para a sua organização.
            </h1>

            <p className="md:text-[25px] mb-10 font-mont tracking-wide">
                Conteúdos estratégicos, desenvolvidos para a sua realidade, adaptados para os seus <br/>
                colaboradores e personalizados para sua empresa.{' '}
                <span className="font-bold">
                    Com a TOT, o cliente nunca anda <br/> sozinho.
                </span>
            </p>
            
            <button className="bg-[#ffe5c9] text-black font-bold text-xl px-11 py-5 rounded-full hover:bg-black hover:text-white transition-all duration-450 cursor-pointer">
                Agendar demonstração
            </button>
        </section>
    )
}