import pencil from "../assets/icons/pencil.svg";
import lamp from "../assets/icons/lamp.svg";
import trophy from "../assets/icons/trophy.svg";
import exclamation from "../assets/icons/exclamation.svg";
import flag from "../assets/icons/flag.svg";
import handshake from "../assets/icons/handshake.svg";
import passionVisibility from "../assets/icons/passionVisibility.svg";

export default function About() {
    return (
        <div
            id="about"
            className=" w-full h-auto flex flex-col mt-22 bg-gradient-to-b from-transparent to-transparent via-slate-500 shadow-inner"
        >
            <div className="h-auto w-6/12 ml-20 -mt-12 mb-20">
                <h3 className="text-4xl font-bold mt-60">Quem somos</h3>
                <p className="p-4 font-bold">
                    Na vastidão digital, somos os arquitetos do sucesso, Criando
                    sites que cativam, design que causam impressão. Marketing
                    que amplifica, publicidade que alcança voos, Na trilha do
                    crescimento, somos a sua direção.
                </p>
                <p className="p-4 font-bold">
                    Construímos pixels de inovação, onde cada detalhe conta,
                    Transformamos ideias em visuais que encantam. Do código ao
                    impacto, nossa missão é clara, Elevamos sua marca, enquanto
                    o mercado se levanta.
                </p>
                <p className="p-4 font-bold">
                    Seja notado, seja lembrado, conquiste o olhar, Somos a ponte
                    entre sonhos e a realidade a brilhar. Explore conosco o
                    poder da visibilidade, Porque no mundo digital, sua história
                    é nossa prioridade.
                </p>
            </div>
            <div className="w-full flex flex-col justify-center mx-auto">
                <h3 className="text-4xl font-bold flex justify-center mb-12">
                    Nossos valores
                </h3>
                <div className="flex flex-row justify-evenly  ">
                    <div className="h-40 w-40 flex flex-col rounded-xl ">
                        <div className="transition duration-500 ease-in-out transform hover:scale-110 h-24 w-24 grid self-center bg-lime-500 rounded-full">
                            <img className="h-16  m-auto" src={pencil} alt="" />
                        </div>
                        <h4 className="text-center my-auto font-bold">
                            Excelência Criativa
                        </h4>
                    </div>
                    <div className="h-40 w-40 flex flex-col rounded-xl ">
                        <div className="transition duration-500 ease-in-out transform hover:scale-110 h-24 w-24 grid self-center bg-lime-500 rounded-full">
                            <img className="h-16  m-auto" src={lamp} alt="" />
                        </div>
                        <h4 className="text-center my-auto font-bold">
                            Compromisso Inovador
                        </h4>
                    </div>
                    <div className="h-40 w-40 flex flex-col rounded-xl ">
                        <div className="transition duration-500 ease-in-out transform hover:scale-110 h-24 w-24 grid self-center bg-lime-500 rounded-full">
                            <img className="h-16  m-auto" src={trophy} alt="" />
                        </div>
                        <h4 className="text-center my-auto font-bold">
                            Orientação para o sucesso
                        </h4>
                    </div>
                    <div className="h-40 w-40 flex flex-col rounded-xl ">
                        <div className="transition duration-500 ease-in-out transform hover:scale-110 h-24 w-24 grid self-center bg-lime-500 rounded-full">
                            <img
                                className="h-16  m-auto"
                                src={exclamation}
                                alt=""
                            />
                        </div>
                        <h4 className="text-center my-auto font-bold">
                            Atenção Personalizada
                        </h4>
                    </div>
                    <div className="h-40 w-40 flex flex-col rounded-xl ">
                        <div className="transition duration-500 ease-in-out transform hover:scale-110 h-24 w-24 grid self-center bg-lime-500 rounded-full">
                            <img className="h-16  m-auto" src={flag} alt="" />
                        </div>
                        <h4 className="text-center my-auto font-bold">
                            Prioridade na Narrativa
                        </h4>
                    </div>

                    <div className="h-40 w-40 flex flex-col rounded-xl ">
                        <div className="transition duration-500 ease-in-out transform hover:scale-110 h-24 w-24 grid self-center bg-lime-500 rounded-full">
                            <img
                                className="h-16  m-auto"
                                src={handshake}
                                alt=""
                            />
                        </div>
                        <h4 className="text-center my-auto font-bold">
                            Parceria Transparente
                        </h4>
                    </div>
                    <div className="h-40 w-40 flex flex-col rounded-xl ">
                        <div className="transition duration-500 ease-in-out transform hover:scale-110 h-24 w-24 grid self-center bg-lime-500 rounded-full">
                            <img
                                className="h-16  m-auto"
                                src={passionVisibility}
                                alt=""
                            />
                        </div>
                        <h4 className="text-center my-auto font-bold">
                            Paixão pela Visibilidade
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
