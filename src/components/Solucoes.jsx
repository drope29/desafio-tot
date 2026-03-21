export default function Solucoes() {
    return (
        <section className="flex flex-col justify-center bg-[#e34926] w-full h-auto min-h-[500px] py-16 lg:py-0 px-4 overflow-hidden">

            <div className="flex flex-col mb-10 lg:mb-10 items-start lg:ml-20">
                <h1 className="text-[#ffe5c9] font-mont font-bold text-3xl lg:text-4xl mb-3 tracking-wide">
                    Soluções com propósito
                </h1>
                <p className="text-black font-mont text-lg lg:text-xl max-w-2xl leading-normal">
                    Entender o contexto, personalizar a jornada e caminhar lado a lado.
                </p>
            </div>

            <div>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-center">
                    <img src="/images/img-solucoes1.png" alt="Soluções" className="w-full max-w-[400px] lg:max-w-none lg:w-[450px] lg:min-w-[450px] lg:flex-none h-auto rounded-2xl shadow-lg hover:scale-110 cursor-pointer duration-300" />
                    <img src="/images/img-solucoes2.png" alt="Soluções" className="w-full max-w-[400px] lg:max-w-none lg:w-[450px] lg:min-w-[450px] lg:flex-none h-auto rounded-2xl shadow-lg hover:scale-110 cursor-pointer duration-300" />
                    <img src="/images/img-solucoes3.png" alt="Soluções" className="w-full max-w-[400px] lg:max-w-none lg:w-[450px] lg:min-w-[450px] lg:flex-none h-auto rounded-2xl shadow-lg hover:scale-110 cursor-pointer duration-300" />
                    <img src="/images/img-solucoes4.png" alt="Soluções" className="w-full max-w-[400px] lg:max-w-none lg:w-[450px] lg:min-w-[450px] lg:flex-none h-auto rounded-2xl shadow-lg hover:scale-110 cursor-pointer duration-300" />
                </div>
            </div>

        </section>
    )
}