import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Porfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import facebook from "./assets/icons/facebook.svg";
import instagram from "./assets/icons/instagram.svg";
import whatsapp from "./assets/icons/whatsapp.svg";

export default function App() {
    return (
        <div className=" h-screen w-screen absolute right-0 scroll-smooth ">
            <Header />
            <main className="relative z-0 mt-0">
                <Home />
                <About />
                <Services />

                <Porfolio />
                <Clients />
            </main>
            <footer id="footer">
                <div className="bg-lime-500 py-20 flex flex-row justify-around px-6">
                    <div>
                        <h3 className="text-3xl font-bold text-slate-700">
                            Nossas redes sociais:
                        </h3>
                        <div className="flex flex-col justify-around gap-4 mt-20 ml-6">
                            <a
                                className="flex flex-row items-center text-black font-bold"
                                href=""
                            >
                                <img
                                    className="h-12 "
                                    src={facebook}
                                    alt=""
                                    rel="noopener noreferrer"
                                />
                                <p className="ml-4 text-xl">/agenciadads</p>
                            </a>
                            <a
                                className="flex flex-row items-center text-black font-bold"
                                href=""
                            >
                                <img
                                    className="h-12"
                                    src={instagram}
                                    alt=""
                                    rel="noopener noreferrer"
                                />
                                <p className="ml-4 text-xl">/agenciadads</p>
                            </a>
                            <a
                                className="flex flex-row items-center text-black font-bold"
                                href=""
                            >
                                <img
                                    className="h-12"
                                    src={whatsapp}
                                    alt=""
                                    rel="noopener noreferrer"
                                />
                                <p className="ml-4 text-xl">(13) 3219 2113 </p>
                            </a>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.840808235727!2d-46.32654428828029!3d-23.966068776497163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03a9df27b443%3A0xa18bfa213e6032ad!2sAv.%20Conselheiro%20N%C3%A9bias%2C%20726%20-%20Boqueir%C3%A3o%2C%20Santos%20-%20SP%2C%2011045-002!5e0!3m2!1spt-BR!2sbr!4v1703903473895!5m2!1spt-BR!2sbr"
                        loading="lazy"
                        className="rounded-2xl ml-20 h-96 w-2/5 "
                    ></iframe>
                    <form className="flex flex-col ml-20 w-1/5 gap-2" action="">
                        <input
                            className="placeholder:text-gray-500 bg-slate-50 rounded-md h-8 pl-2 text-black"
                            type="text"
                            placeholder="Nome"
                        />
                        <input
                            className="placeholder:text-gray-500 bg-slate-50 rounded-md h-8 pl-2 text-black"
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            className="placeholder:text-gray-500 bg-slate-50 rounded-md h-8 pl-2 text-black"
                            type="text"
                            placeholder="Assunto"
                        />
                        <input
                            className="placeholder:text-gray-500 pb-[10rem] pl-2 bg-slate-50 rounded-md h-52 mb-2 text-black"
                            type="text"
                            placeholder="Mensagem"
                        />
                        <button
                            className="border-2 border-slate-600"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </footer>
        </div>
    );
}
