import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Porfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className=" h-screen w-screen absolute right-0 scroll-smooth ">
            <Header />
            <main className="relative z-0 mt-0">
                <Home />
                <About />
                <Services />

                <Porfolio />
                <Clients />
            </main>
            <Footer />
        </div>
    );
}
