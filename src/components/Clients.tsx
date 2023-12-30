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
            className="w-full grid grid-flow-row  mx-auto bg-slate-50 pt-16 -mt-14"
        >
            <h3 className="text-4xl font-bold flex justify-start ml-20 mb-12 mt-32 text-slate-700">
                Clientes
            </h3>
            <div className="grid grid-cols-3 w-full mx-auto mb-28 gap-8">
                <div className="flex justify-center items-center">
                    <img
                        className="transition duration-500 ease-in-out transform hover:scale-110"
                        src={actioncoach}
                        alt="Action Coach"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="transition duration-500 ease-in-out transform hover:scale-110"
                        src={crego}
                        alt="Crego"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="transition duration-500 ease-in-out transform hover:scale-110"
                        src={criaset}
                        alt="CriAset"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="transition duration-500 ease-in-out transform hover:scale-110"
                        src={kombina}
                        alt="Kombina"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="transition duration-500 ease-in-out transform hover:scale-110"
                        src={latina}
                        alt="Latina"
                    />
                </div>
                <div className=" flex justify-center items-center">
                    <img
                        className="transition duration-500 ease-in-out transform hover:scale-110"
                        src={luizapossi}
                        alt="Luiza Possi"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="transition duration-500 ease-in-out transform hover:scale-110"
                        src={madalena}
                        alt="Madalena"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="transition duration-500 ease-in-out transform hover:scale-110"
                        src={mercedes}
                        alt="Mercedes"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="transition duration-500 ease-in-out transform hover:scale-110"
                        src={movesq}
                        alt="Move SQ"
                    />
                </div>
            </div>
        </div>
    );
}
