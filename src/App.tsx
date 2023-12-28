import pencil from "./assets/icons/pencil.svg";
import lamp from "./assets/icons/lamp.svg";
import trophy from "./assets/icons/trophy.svg";
import exclamation from "./assets/icons/exclamation.svg";
import flag from "./assets/icons/flag.svg";
import handshake from "./assets/icons/handshake.svg";
import passionVisibility from "./assets/icons/passionVisibility.svg";

export default function App() {
    return (
        <div className="border-2 h-screen w-screen">
            <header className="bg-green-500 flex flex-row mx-auto items-center justify-evenly h-20 mt-10  w-11/12 rounded-full">
                <div className="text-4xl font-bold ml-12">Dads</div>
                <ul className="flex flex-row justify-evenly ml-auto w-2/6 text-white">
                    {/* <li>
                        <a className="text-white">HOME</a>
                      </li> */}
                    <li>
                        <a href="#about" className="text-white cursor-pointer">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-white cursor-pointer"
                            href="#services"
                        >
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a className="text-white cursor-pointer">Portfólio</a>
                    </li>
                    <li>
                        <a className="text-white cursor-pointer">Clientes</a>
                    </li>
                </ul>
                <button className="rounded-full border-2 border-green-600 -ml-4 mr-8 bg-gradient-to-r  from-blue-500 to-green-500 text-white font-bold   animate-pulse px-6">
                    Contato
                </button>
            </header>
            <main>
                <div className=" w-full h-auto flex flex-col  mt-72 mb-96">
                    <h1 className="text-8xl pl-20 -mt-2">dads</h1>
                    <h3 className="text-xl pl-20">
                        Mais que uma agencia de comunicação, uma agencia de
                        criação!
                    </h3>
                </div>
                <div id="about" className=" w-full h-auto flex flex-col ">
                    <div className="h-auto w-6/12 ml-20 mb-20">
                        <h3 className="text-4xl">Quem somos</h3>
                        <p className="p-4">
                            Na vastidão digital, somos os arquitetos do sucesso,
                            Criando sites que cativam, design que causa
                            impressão. Marketing que amplifica, publicidade que
                            alcança voos, Na trilha do crescimento, somos a sua
                            direção.
                        </p>
                        <p className="p-4">
                            Construímos pixels de inovação, onde cada detalhe
                            conta, Transformamos ideias em visuais que encantam.
                            Do código ao impacto, nossa missão é clara, Elevamos
                            sua marca, enquanto o mercado se levanta.
                        </p>
                        <p className="p-4">
                            Seja notado, seja lembrado, conquiste o olhar, Somos
                            a ponte entre sonhos e a realidade a brilhar.
                            Explore conosco o poder da visibilidade, Porque no
                            mundo digital, sua história é nossa prioridade.
                        </p>
                    </div>
                    <div className="w-full flex flex-col justify-center mx-auto">
                        <h3 className="text-4xl flex justify-center mb-12">
                            Valores
                        </h3>
                        <div className="flex flex-row justify-evenly  ">
                            <div className="h-40 w-40 flex flex-col rounded-xl ">
                                <div className="h-24 w-24 grid self-center bg-yellow-100 rounded-full">
                                    <img
                                        className="h-16  m-auto"
                                        src={pencil}
                                        alt=""
                                    />
                                </div>
                                <h4 className="text-center my-auto">
                                    Excelência Criativa
                                </h4>
                            </div>
                            <div className="h-40 w-40 flex flex-col rounded-xl ">
                                <div className="h-24 w-24 grid self-center bg-yellow-100 rounded-full">
                                    <img
                                        className="h-16  m-auto"
                                        src={lamp}
                                        alt=""
                                    />
                                </div>
                                <h4 className="text-center my-auto">
                                    Compromisso Inovador
                                </h4>
                            </div>
                            <div className="h-40 w-40 flex flex-col rounded-xl ">
                                <div className="h-24 w-24 grid self-center bg-yellow-100 rounded-full">
                                    <img
                                        className="h-16  m-auto"
                                        src={trophy}
                                        alt=""
                                    />
                                </div>
                                <h4 className="text-center my-auto">
                                    Orientação para o sucesso
                                </h4>
                            </div>
                            <div className="h-40 w-40 flex flex-col rounded-xl ">
                                <div className="h-24 w-24 grid self-center bg-yellow-100 rounded-full">
                                    <img
                                        className="h-16  m-auto"
                                        src={exclamation}
                                        alt=""
                                    />
                                </div>
                                <h4 className="text-center my-auto">
                                    Atenção Personalizada
                                </h4>
                            </div>
                            <div className="h-40 w-40 flex flex-col rounded-xl ">
                                <div className="h-24 w-24 grid self-center bg-yellow-100 rounded-full">
                                    <img
                                        className="h-16  m-auto"
                                        src={flag}
                                        alt=""
                                    />
                                </div>
                                <h4 className="text-center my-auto">
                                    Prioridade na Narrativa
                                </h4>
                            </div>

                            <div className="h-40 w-40 flex flex-col rounded-xl ">
                                <div className="h-24 w-24 grid self-center bg-yellow-100 rounded-full">
                                    <img
                                        className="h-16  m-auto"
                                        src={handshake}
                                        alt=""
                                    />
                                </div>
                                <h4 className="text-center my-auto">
                                    Parceria Transparente
                                </h4>
                            </div>
                            <div className="h-40 w-40 flex flex-col rounded-xl ">
                                <div className="h-24 w-24 grid self-center bg-yellow-100 rounded-full">
                                    <img
                                        className="h-16  m-auto"
                                        src={passionVisibility}
                                        alt=""
                                    />
                                </div>
                                <h4 className="text-center my-auto">
                                    Paixão pela Visibilidade
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 w-full h-auto" id="services">
                    <h2>Serviços</h2>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                    </div>
                </div>

                <div>Portfólio</div>
                <div>Clientes</div>
            </main>
            <footer>
                {/* redes sociais
              mapa com o local 
              contatos */}
            </footer>
        </div>
    );
}
