export default function Infos() {
    return (
        <section className="flex flex-col lg:flex-row h-auto min-h-[500px] lg:h-[500px] w-full bg-white items-center justify-center gap-8 py-12 lg:py-0 px-4 lg:px-8">

            <div className="flex flex-col h-auto min-h-[350px] lg:h-[350px] w-full max-w-[700px] flex-1 bg-[#ffe5c9] items-center justify-center rounded-4xl shadow-md p-6 lg:p-0 text-center">
                <img src="./images/img-infos1.png" alt="info1" className="h-[150px] lg:h-[200px] object-contain" />
                <p className="text-[18px] lg:text-[22px] mt-4 lg:mt-2 font-mont font-semibold px-2">
                    de aprendizes impactados com os nossos cursos.
                </p>
            </div>

            <div className="flex flex-col h-auto min-h-[350px] lg:h-[350px] w-full max-w-[700px] flex-1 bg-[#ffe5c9] items-center justify-center rounded-4xl shadow-md p-6 lg:p-0 text-center">
                <img src="./images/img-infos2.png" alt="info12" className="h-[150px] lg:h-[200px] object-contain" />
                <p className="text-[18px] lg:text-[22px] mt-4 lg:mt-2 font-mont font-semibold px-2">
                    projetos entregues para os nossos clientes.
                </p>
            </div>

            <div className="flex flex-col h-auto min-h-[350px] lg:h-[350px] w-full max-w-[700px] flex-1 bg-[#ffe5c9] items-center justify-center rounded-4xl shadow-md p-6 lg:p-0 text-center">
                <img src="./images/img-infos3.png" alt="info3" className="h-[170px] lg:h-[220px] object-contain" />

                <p className="text-[18px] lg:text-[22px] mt-4 lg:mt-2 font-mont font-semibold px-2 [&>br]:hidden lg:[&>br]:block">
                    de engajamento e conclusão dos cursos <br />
                    desenvolvidos pela TOT
                </p>
            </div>
        </section>
    )
}