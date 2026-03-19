export default function NavBar() {
    return (
        <>
            <nav className="flex bg-[#ca3f1f] w-full h-[125px] justify-between items-center">
                <div>
                    <a href="#">
                    <img src="/images/logo-tot.png" alt="LOGO" className="h-33 w-auto ml-20" />
                    </a>
                </div>

                <ul className="flex space-x-2 text-black text-[20px] cursor-pointer mr-30 font-mont">
                    <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px]">Cursos Personalizados</a></li>
                    <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px]">Cursos de Prateleira</a></li>
                    <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px]">Plataforma de Aprendizagem</a></li>
                    <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px]">Consultoria</a></li>
                    <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px]">Blog</a></li>
                    <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px]">eBooks</a></li>  
                </ul>
            </nav>
        </>
    )
}
