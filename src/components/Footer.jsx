export default function Footer() {
    return (
        <footer className="flex flex-col w-full bg-[#e34926] mt-20 pt-16 pb-8 items-center">

            <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[2300px] px-8 lg:px-20">

                <div className="flex flex-col justify-center items-baseline w-full lg:w-1/3 mb-10 lg:mb-0">
                    <h1 className="text-3xl lg:text-4xl font-mont font-bold text-white mb-5">
                        Contato
                    </h1>
                    <p className="text-lg lg:text-xl text-white mb-4 font-mont">
                        R. Antônio da Veiga, 419, Sala 10 -
                        Victor Konder, Blumenau - SC - <br /> 89012-500
                    </p>
                    <p className="text-lg lg:text-xl text-white mb-4 font-mont cursor-pointer">
                        (47) 96427-5326 <br />
                        (47) 3516-4418
                    </p>
                    <p className="text-lg lg:text-xl text-white mb-5 font-mont cursor-pointer">
                        contato@toteduca.com.br
                    </p>

                    <img src="./images/icons-footer.png" alt="icons-footer" className="cursor-pointer h-10 lg:h-12" />
                </div>

                <div className="flex flex-col justify-center gap-6 lg:gap-8 w-full lg:w-[35%]">
                    <h1 className="flex text-xl lg:text-2xl font-mont font-bold text-white">
                        Se inscreva para receber novidades
                    </h1>

                    <input type="text" placeholder="Escreva o seu nome aqui" className="bg-white h-[60px] lg:h-[80px] w-full px-4 lg:px-8 font-mont text-lg lg:text-xl placeholder:font-mont placeholder:text-lg lg:placeholder:text-xl placeholder:text-gray-300 outline-none" />

                    <input type="text" placeholder="Escreva o seu melhor e-mail aqui" className="bg-white h-[60px] lg:h-[80px] w-full px-4 lg:px-8 font-mont text-lg lg:text-xl placeholder:font-mont placeholder:text-lg lg:placeholder:text-xl placeholder:text-gray-300 outline-none" />

                    <img src="./images/captcha.png" alt="captcha" className="h-[60px] lg:h-[75px] w-[240px] lg:w-[300px]" />

                    <a href="#" className="flex items-center justify-center text-lg lg:text-xl font-mont font-semibold h-[60px] w-full bg-[#ffe5c9] rounded-2xl hover:bg-[#ee5923] hover:text-white hover:duration-600 transition-colors">
                        OK
                    </a>
                </div>
            </div>

            <div className="w-full max-w-[1400px] px-8 lg:px-20 mt-16 flex flex-col items-center">
                <hr className="w-full border-t border-white/20 mb-6" />
                <p className="text-white font-mont text-xs lg:text-sm font-medium tracking-wide text-center">
                    COPYRIGHT © 2025. TOT EDUCAÇÃO CORPORATIVA. TODOS OS DIREITOS RESERVADOS
                </p>
            </div>
        </footer>
    )
}