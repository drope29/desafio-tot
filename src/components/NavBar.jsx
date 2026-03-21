export default function NavBar() {
    return (
        <nav className="flex bg-[#ca3f1f] w-full h-[125px] justify-between items-center">
            <div>
                <a href="#">
                    <img src="/images/logo-tot.png" alt="LOGO" className="h-33 w-auto ml-20" />
                </a>
            </div>

            <ul className="flex space-x-2 text-black text-[20px] cursor-pointer mr-30 font-mont">
                <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px] hover:bg-black hover:text-white transition-all duration-450">Cursos Personalizados</a></li>
                <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px] hover:bg-black hover:text-white transition-all duration-450">Cursos de Prateleira</a></li>
                <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px] hover:bg-black hover:text-white transition-all duration-450">Plataforma de Aprendizagem</a></li>
                <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px] hover:bg-black hover:text-white transition-all duration-450">Consultoria</a></li>
                <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px] hover:bg-black hover:text-white transition-all duration-450">Blog</a></li>
                <li><a href="#" className="bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[21px] hover:bg-black hover:text-white transition-all duration-450">eBooks</a></li>
            </ul>
        </nav>
    )
}
