import dadsLogo from "../assets/images/dads.png";

export default function Home() {
    return (
        <div
            id="home"
            className="w-full h-full flex flex-col -mt-96 py-52 mb-40 scroll-mt-96"
        >
            <img src={dadsLogo} className="h-96 w-96 ml-8 -mt-2 -mb-32" />
            <h3 className="text-2xl ml-20">
                Mais que uma agencia de comunicação, uma agencia de criação!
            </h3>
        </div>
    );
}
