export default function MaterialGratuito() {
    return (
        <section className="flex w-full justify-center items-center px-4 py-14 lg:py-15">

            <div className="flex flex-col lg:flex-row h-auto lg:h-[450px] w-full max-w-[1800px] bg-[#ee5923] rounded-3xl justify-around items-center p-10 lg:p-0 gap-10 lg:gap-0">

                <div className="flex flex-col gap-5 items-center lg:items-start text-center lg:text-left">
                    <h1 className="text-3xl lg:text-4xl text-white font-mont font-semibold">
                        Material Gratuito
                    </h1>

                    <p className="text-lg lg:text-2xl font-mont text-white [&>br]:hidden lg:[&>br]:block">
                        Conheça o nosso Manual da Universidade Corporativa. Nele, <br />
                        você encontrará os 6
                        passos para uma implantação de <br />
                        sucesso na sua empresa. Aproveite!
                    </p>

                    <a href="#" className="flex bg-white text-[#ee5923] font-mont font-bold text-xl h-[60px] w-[250px] rounded-full text-center justify-center items-center hover:bg-lime-500 hover:text-black duration-500">
                        BAIXE AGORA
                    </a>
                </div>

                <img src="./images/livro-material.png" alt="" className="h-[250px] sm:h-[300px] lg:h-[400px] object-contain shadow-2xl shadow-black rounded-xl" />
            </div>
        </section>
    )
}