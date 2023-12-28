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
                        <a className="text-white cursor-pointer">Sobre</a>
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
                <div className="border-2 w-full h-auto flex flex-col  mt-16">
                    <h1 className="text-8xl pl-20 -mt-2">dads</h1>
                    <h3 className="text-xl pl-20">
                        Mais que uma agencia de comunicação, uma agencia de
                        criação!
                    </h3>
                </div>
                <div className="border-2 w-full h-auto flex flex-col ">
                    <div className="border-2 h-auto w-6/12 ml-20 mb-20">
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
                    <div className="border-2 w-5/6 flex flex-col justify-center mx-auto">
                        <h3 className="text-4xl flex justify-center">
                            Valores
                        </h3>
                        <ul className="flex flex-row">
                            <li className="">lapis Excelência Criativa</li>
                            <li> lampada Compromisso Inovador</li>
                            <li>trofeu Orientação para o sucesso</li>
                            <li> exclamacao Atenção Personalizada</li>
                            <li>bandeira Prioridade na Narrativa</li>
                            <li>handshake Parceria Transparente</li>
                            <li>
                                mao segurando coracao Paixão pela Visibilidade
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-2 w-full h-auto" id="services">
                    <h2>Servicos</h2>
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
