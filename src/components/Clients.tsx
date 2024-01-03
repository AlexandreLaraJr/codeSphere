import { Carousel } from "flowbite-react";
import actioncoach from "../assets/images/clientsImages/actioncoach.png";
import crego from "../assets/images/clientsImages/crego.png";
import criaset from "../assets/images/clientsImages/criaset.png";
import kombina from "../assets/images/clientsImages/kombina.png";
import latina from "../assets/images/clientsImages/latina.png";
import luizapossi from "../assets/images/clientsImages/luizapossi.png";
import madalena from "../assets/images/clientsImages/madalena.png";
import mercedes from "../assets/images/clientsImages/mercedes.png";
import movesq from "../assets/images/clientsImages/movesq.png";

export default function Clients() {
    return (
        <div
            id="clients"
            className="w-full grid grid-flow-row  mx-auto bg-slate-300 pt-16 -mt-14"
        >
            <h3 className="text-4xl font-bold flex justify-start ml-20 mb-12 mt-32 text-slate-700">
                Clientes
            </h3>
            <div className="h-96 bg-slate-300">
                <Carousel indicators={false}>
                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={actioncoach}
                        alt="Action Coach"
                    />

                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={crego}
                        alt="Crego"
                    />

                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={criaset}
                        alt="CriAset"
                    />

                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={kombina}
                        alt="Kombina"
                    />

                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={latina}
                        alt="Latina"
                    />

                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={luizapossi}
                        alt="Luiza Possi"
                    />

                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={madalena}
                        alt="Madalena"
                    />

                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={mercedes}
                        alt="Mercedes"
                    />

                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={movesq}
                        alt="Move SQ"
                    />
                </Carousel>
            </div>
        </div>
    );
}
