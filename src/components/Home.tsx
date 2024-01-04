import dadsLogo from "../assets/images/dads.png";

export default function Home() {
    return (
        <div
            id="home"
            className="w-full h-full flex flex-col -mt-96 md:-mt-96 py-52 -mb-12 md:mb-40 scroll-mt-96"
        >
            <img
                src={dadsLogo}
                className="h-auto w-3/6 md:w-1/4 mb-4 md:mb-0 ml-8 md:mt-24 md:ml-20 -mt-2 "
            />
            <h3 className="text-2xl ml-8 md:ml-20">
                Mais do que uma agência de comunicação, uma agência de criação!
            </h3>
        </div>
    );
}
