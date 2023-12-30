import dadsLogo from "../assets/images/dads.png";

export default function Header() {
    return (
        <header className="fixed z-10 top-0 left-12 right-12 bg-slate-700 flex flex-row mx-auto items-center justify-evenly h-20 w-11/12 mt-10  rounded-full">
            <div className="text-4xl font-bold ml-12 ">
                <a href="#home" className="text-white ">
                    <img className="h-52 -ml-6" src={dadsLogo} alt="" />
                </a>
            </div>
            <ul className="flex flex-row justify-evenly ml-auto w-2/6 text-white">
                <li>
                    <a href="#about" className="text-white cursor-pointer">
                        Sobre
                    </a>
                </li>
                <li>
                    <a className="text-white cursor-pointer" href="#services">
                        Serviços
                    </a>
                </li>
                <li>
                    <a className="text-white cursor-pointer" href="#portfolio">
                        Portfólio
                    </a>
                </li>
                <li>
                    <a className="text-white cursor-pointer" href="#clients">
                        Clientes
                    </a>
                </li>
            </ul>
            <a href="#footer">
                <button className="rounded-full border-2 border-green-600 ml-4 mr-8 bg-gradient-to-r  from-blue-500 to-green-500 text-white font-bold   animate-pulse px-6">
                    Contato
                </button>
            </a>
        </header>
    );
}
