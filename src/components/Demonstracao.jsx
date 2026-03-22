export default function Demonstracao() {
    return (
        <section className="flex justify-center w-full h-auto min-h-[500px] px-4 lg:px-10 py-10 lg:py-0">
            <div className="flex flex-col h-auto lg:h-[750px] w-full max-w-[1900px] py-12 lg:py-0 bg-[#151616] rounded-3xl lg:rounded-4xl text-center items-center justify-center gap-8 lg:gap-10">

                <h1 className="text-white font-mont font-semibold text-2xl lg:text-4xl px-4">
                    Agende uma demonstração
                </h1>

                <div className="flex flex-col gap-4 w-full max-w-[1150px] px-4 lg:px-0">
                    <input
                        type="text"
                        placeholder="Nome"
                        className="bg-[#f3c0c0] h-[60px] lg:h-[80px] w-full rounded-sm px-4 lg:px-8 font-mont font-semibold text-black placeholder:text-black placeholder:font-mont placeholder:font-semibold outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Seu email corporativo"
                        className="bg-[#f3c0c0] h-[60px] lg:h-[80px] w-full rounded-sm px-4 lg:px-8 font-mont font-semibold text-black placeholder:text-black placeholder:font-mont placeholder:font-semibold outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Qual empresa você trabalha"
                        className="bg-[#f3c0c0] h-[60px] lg:h-[80px] w-full rounded-sm px-4 lg:px-8 font-mont font-semibold text-black placeholder:text-black placeholder:font-mont placeholder:font-semibold outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Digite aqui como podemos te ajudar"
                        className="bg-[#f3c0c0] h-[60px] lg:h-[80px] w-full rounded-sm px-4 lg:px-8 font-mont font-semibold text-black placeholder:text-black placeholder:font-mont placeholder:font-semibold outline-none"
                    />
                </div>

                <img src="./images/captcha.png" alt="captcha" className="h-[50px] lg:h-[70px]" />

                <a href="#" className="flex h-[60px] lg:h-[70px] w-[200px] lg:w-[275px] bg-[#ee5923] justify-center items-center rounded-xl text-lg lg:text-xl font-mont font-semibold">
                    Enviar
                </a>
            </div>
        </section>
    )
}