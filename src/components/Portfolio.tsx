import sample from "../assets/images/portfolioImages/sample.jpg";

export default function Porfolio() {
    return (
        <div className="pt-16 pb-40" id="portfolio">
            <h2 className="text-4xl font-bold my-12 pt-16 mt-16 ml-6 md:ml-20">
                Portfólio
            </h2>
            <p className="text-2xl mb-20 m-6 md:ml-20">
                Alguns de nossos cases de sucesso.
            </p>
            <div className="flex flex-col md:flex-row gap-6  md:justify-around mx-2 md:mx-auto">
                <div>
                    <img
                        className="h-96 transition duration-500 ease-in-out transform hover:scale-105"
                        src={sample}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className="h-96  transition duration-500 ease-in-out transform hover:scale-105"
                        src={sample}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className="h-96 transition duration-500 ease-in-out transform hover:scale-105"
                        src={sample}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
