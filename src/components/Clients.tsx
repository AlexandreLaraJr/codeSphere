import { Carousel } from "flowbite-react";
import sample from "../assets/images/sample.jpg";

export default function Clients() {
    return (
        <div
            id="clients"
            className="w-full grid grid-flow-row  mx-auto bg-gradient-to-b from-transparent to-lime-500 via-lime-500 shadow-inner pt-16 -mt-14"
        >
            <h3 className="text-4xl font-bold flex justify-start ml-6 md:ml-20 mb-12 mt-32 text-slate-50">
                Clientes
            </h3>
            <div className="h-96 ">
                <Carousel
                    indicators={false}
                    leftControl={true}
                    rightControl={true}
                >
                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={sample}
                        alt="sample"
                    />
                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={sample}
                        alt="sample"
                    />
                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={sample}
                        alt="sample"
                    />
                    <img
                        className="h-auto w-auto transition duration-500 ease-in-out transform hover:scale-110"
                        src={sample}
                        alt="sample"
                    />
                </Carousel>
            </div>
        </div>
    );
}
