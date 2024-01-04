import coding from "../assets/images/servicesImages/coding.jpg";
import marketing from "../assets/images/servicesImages/marketing.jpg";
import design from "../assets/images/servicesImages/design.jpg";
import publicity from "../assets/images/servicesImages/publicity.jpg";

export default function Services() {
    return (
        <div
            className="grid grid-flow-row  w-auto h-auto mt-40 pb-20"
            id="services"
        >
            <h3 className="text-4xl font-bold my-12 pt-32 mt-16 ml-4 md:ml-20">
                Serviços
            </h3>
            <div className="flex flex-col md:flex-col ">
                <p className="text-xl font-bold w-11/12 mx-auto mb-6 md:mb-10 md:w-4/6 md:ml-20 md:mt-10">
                    Nos comprometemos em cada serviço, com inovação, atenção aos
                    detalhes e orientação para o sucesso do cliente.
                </p>
                <div className="flex flex-col w-11/12 md:grid md:grid-cols-2 mx-auto gap-10 md:gap-4 my-6">
                    <div className=" h-64 w-auto relative group">
                        <img
                            className=" rounded-xl object-cover object-center w-full h-full group-hover:brightness-20 transition-all duration-500 ease-in-out"
                            src={coding}
                            alt=""
                        />
                        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out">
                            Sites
                        </h3>
                    </div>
                    <div className="h-64 w-auto relative group">
                        <img
                            className="rounded-xl object-cover object-center w-full h-full group-hover:brightness-20 transition-all duration-500 ease-in-out"
                            src={design}
                            alt=""
                        />
                        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out">
                            Design
                        </h3>
                    </div>
                    <div className="h-64 w-auto relative group">
                        <img
                            className="rounded-xl object-cover object-center w-full h-full group-hover:brightness-20 transition-all duration-500 ease-in-out"
                            src={marketing}
                            alt=""
                        />
                        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out">
                            Marketing
                        </h3>
                    </div>
                    <div className=" h-64 w-auto relative group">
                        <img
                            className="rounded-xl object-cover object-center w-full h-full group-hover:brightness-20 transition-all duration-500 ease-in-out"
                            src={publicity}
                            alt=""
                        />
                        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out">
                            Publicidade
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
