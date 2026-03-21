import { useState } from 'react'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="flex relative bg-[#ca3f1f] w-full h-[80px] lg:h-[125px] justify-between items-center px-6 lg:px-0 z-50">

            <div>
                <a href="#">
                    <img src="/images/logo-tot.png" alt="LOGO" className="h-12 lg:h-[90px] w-auto lg:ml-20" />
                </a>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex flex-col gap-[6px] p-2 cursor-pointer z-50"
            >
                <div className={`w-8 h-1 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></div>
                <div className={`w-8 h-1 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-8 h-1 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></div>
            </button>

            <ul className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-[80px] lg:top-0 left-0 w-full lg:w-auto bg-[#ca3f1f] lg:bg-transparent items-center gap-4 lg:gap-0 lg:space-x-2 py-8 lg:py-0 text-black text-[20px] cursor-pointer lg:mr-30 font-mont shadow-2xl lg:shadow-none`}>

                <li className="w-full lg:w-auto px-4 lg:px-0">
                    <a href="#" className="block lg:inline-block bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[16px] lg:text-[21px] hover:bg-black hover:text-white transition-all duration-450 text-center">Cursos Personalizados</a>
                </li>
                <li className="w-full lg:w-auto px-4 lg:px-0">
                    <a href="#" className="block lg:inline-block bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[16px] lg:text-[21px] hover:bg-black hover:text-white transition-all duration-450 text-center">Cursos de Prateleira</a>
                </li>
                <li className="w-full lg:w-auto px-4 lg:px-0">
                    <a href="#" className="block lg:inline-block bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[16px] lg:text-[21px] hover:bg-black hover:text-white transition-all duration-450 text-center">Plataforma de Aprendizagem</a>
                </li>
                <li className="w-full lg:w-auto px-4 lg:px-0">
                    <a href="#" className="block lg:inline-block bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[16px] lg:text-[21px] hover:bg-black hover:text-white transition-all duration-450 text-center">Consultoria</a>
                </li>
                <li className="w-full lg:w-auto px-4 lg:px-0">
                    <a href="#" className="block lg:inline-block bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[16px] lg:text-[21px] hover:bg-black hover:text-white transition-all duration-450 text-center">Blog</a>
                </li>
                <li className="w-full lg:w-auto px-4 lg:px-0">
                    <a href="#" className="block lg:inline-block bg-[#ffe5c9] shadow-xl/20 rounded-full py-2.5 px-5 text-[16px] lg:text-[21px] hover:bg-black hover:text-white transition-all duration-450 text-center">eBooks</a>
                </li>
            </ul>
        </nav>
    )
}