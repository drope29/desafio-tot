import NavBar from '../components/NavBar.jsx'

export default function Header() {
    return (
        <>

            <header className="top-0 bg-[#e34926] w-full h-auto min-h-[55px] flex items-center justify-center text-center text-white py-3 px-4 font-sans">

                <h1 className="text-[15px] md:text-[18px] lg:text-[21px] font-medium leading-snug">
                    TOT News - A sua nova newsletter sobre Educação Corporativa!{' '}
                    <a href="#" className="underline whitespace-nowrap"> Inscreva-se aqui.</a>
                </h1>

            </header>
            <NavBar />
        </>
    )
}