import NavBar from '../components/NavBar.jsx'
export default function Header() {
    return (
        <>
            <header className="top-0 bg-[#e34926] w-full h-[55px] text-center text-white p-3 font-sans">
                <h1 className="text-[21px] font-medium">
                    TOT News - A sua nova newsletter sobre Educação Corporativa!{''}
                    <a href="#" className="underline"> Inscreva-se aqui.</a>
                </h1>
            </header>
            <NavBar />
        </>
    )
}
