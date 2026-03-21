export default function Solucoes() {
    return (
        <section className="flex flex-col justify-center bg-[#e34926] w-full h-[500px] px-4 overflow-hidden">
            <div className="flex flex-col mb-20 items-start lg:ml-20">
                <h1 className="text-[#ffe5c9] font-mont font-bold text-4xl mb-3 tracking-wide">
                    Soluções com propósito
                </h1>
                <p className="text-black font-mont text-xl max-w-2xl leading-normal">
                    Entender o contexto, personalizar a jornada e caminhar lado a lado.
                </p>
            </div>

            <div>
                <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
                    <img src="/images/img-solucoes1.png" alt="Soluções" className="w-[450px] h-auto rounded-2xl shadow-lg hover:scale-110 cursor-pointer duration-300"/>
                    <img src="/images/img-solucoes2.png" alt="Soluções" className="w-[450px] h-auto rounded-2xl shadow-lg hover:scale-110 cursor-pointer duration-300"/>
                    <img src="/images/img-solucoes3.png" alt="Soluções" className="w-[450px] h-auto rounded-2xl shadow-lg hover:scale-110 cursor-pointer duration-300"/>
                    <img src="/images/img-solucoes4.png" alt="Soluções" className="w-[450px] h-auto rounded-2xl shadow-lg hover:scale-110 cursor-pointer duration-300"/>
                </div>
            </div>

        </section>
    )
}