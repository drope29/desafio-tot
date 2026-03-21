export default function Demonstracao() {
    return (
        <section className="flex justify-center w-full h-auto min-h-[500px]">
            <div className="flex flex-col h-[750px] w-[1900px] bg-[#151616] rounded-4xl text-center items-center justify-center gap-10">
                <h1 className="text-white font-mont font-semibold text-4xl">
                    Agende uma demonstração
                </h1>
                <div className="flex flex-col gap-4 w-[1150px]">
                    <input type="text" placeholder="Nome" className="bg-[#f3c0c0] h-[80px] rounded-sm placeholder:text-black placeholder:font-mont placeholder:font-semibold placeholder:px-8" />
                    <input type="text" placeholder="Seu email corporativo" className="bg-[#f3c0c0] h-[80px] rounded-sm placeholder:text-black placeholder:font-mont placeholder:font-semibold placeholder:px-8" />
                    <input type="text" placeholder="Qual empresa você trabalha" className="bg-[#f3c0c0] h-[80px] rounded-sm placeholder:text-black placeholder:font-mont placeholder:font-semibold placeholder:px-8" />
                    <input type="text" placeholder="Digite aqui como podemos te ajudar" className="bg-[#f3c0c0] h-[80px] rounded-sm placeholder:text-black placeholder:font-mont placeholder:font-semibold placeholder:px-8" />
                </div>

                <img src="./images/captcha.png" alt="captcha" className="h-[70px]"/>

                <a href="#" className="flex h-[70px] w-[275px] bg-[#ee5923] justify-center items-center rounded-xl text-xl font-mont font-semibold">Enviar</a>
            </div>
        </section>
    )
}