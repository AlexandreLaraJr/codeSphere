import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import whatsapp from "../assets/icons/whatsapp.svg";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="bg-lime-500 py-20 flex flex-col md:flex-row justify-around px-6">
                <div>
                    <h3 className="text-3xl font-bold md:ml-6 text-slate-50">
                        Nossas redes sociais:
                    </h3>
                    <div className="flex flex-row md:flex-col flex-wrap justify-around gap-2 md:gap-4 mt-20 ml-0 md:ml-12">
                        <a
                            className="flex flex-row items-center text-black font-bold"
                            href=""
                        >
                            <img
                                className="h-8 md:h-12 "
                                src={facebook}
                                alt=""
                                rel="noopener noreferrer"
                            />
                            <p className="ml-2 md:ml-4 text-lg md:text-xl">
                                /codeSphere
                            </p>
                        </a>
                        <a
                            className="flex flex-row items-center text-black font-bold"
                            href=""
                        >
                            <img
                                className="h-8 md:h-12 "
                                src={instagram}
                                alt=""
                                rel="noopener noreferrer"
                            />
                            <p className="ml-2 md:ml-4  text-lg md:text-xl">
                                /codeSphere
                            </p>
                        </a>
                        <a
                            className="flex flex-row items-center text-black font-bold"
                            href=""
                        >
                            <img
                                className="h-8 md:h-12 "
                                src={whatsapp}
                                alt=""
                                rel="noopener noreferrer"
                            />
                            <p className="ml-2 md:ml-4  text-lg md:text-xl">
                                {"(0XX)91234-1234"}
                            </p>
                        </a>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330778.9967257498!2d-46.83846341566168!3d-23.653557049947924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1705614197819!5m2!1spt-BR!2sbr"
                    loading="lazy"
                    className="border-2 border-slate-700 rounded-2xl mx-auto mt-10 md:mr-10 h-64 w-5/6 md:h-96 md:w-3/5"
                ></iframe>
            </div>
        </footer>
    );
}
