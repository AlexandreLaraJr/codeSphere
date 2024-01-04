import { useState } from "react";
import dadsLogo from "../assets/images/dads.png";

export default function Header() {
    const [menuClosed, setMenuClosed] = useState("hidden");

    const toggleMenuHiden = () => {
        setMenuClosed((previousState) =>
            previousState === "hidden" ? "fixed" : "hidden"
        );
    };

    return (
        <header className="fixed z-10 top-0 h-16 h-22 left-4 right-4 w-auto mt-10">
            <nav className=" bg-slate-100 border-slate-100  rounded-full">
                <div className=" max-w-screen-xl md:max-w-full flex flex-wrap items-center justify-between md:w-full p-2 mx-auto md:mx-auto md:p-4 ">
                    <div className="h-auto w-auto">
                        <a href="#home" className="text-white ">
                            <img
                                className=" ml-2  w-20 md:w-20"
                                src={dadsLogo}
                                alt=""
                            />
                        </a>
                    </div>
                    <button
                        type="button"
                        className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                        onClick={toggleMenuHiden}
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${menuClosed} mt-80 mr-12  w-40 flex flex-row right-0 md:mt-0 md:mr-20 md:block md:w-auto`}
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0  border w-full border-slate-100 rounded-lg bg-slate-100 md:flex-row md:space-x-8 rtl:space-x-reverse mt-6 md:mt-0 md:border-0 md:bg-slate-100  ">
                            <li>
                                <a
                                    href="#home"
                                    className="block py-2 px-3 text-gray-900 rounded  md:p-0 hover:text-lime-500"
                                    aria-current="page"
                                    onClick={() => {
                                        if (menuClosed === "fixed")
                                            toggleMenuHiden();
                                    }}
                                >
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block py-2 px-3 text-gray-900 rounded  md:p-0 hover:text-lime-500"
                                    onClick={() => {
                                        if (menuClosed === "fixed")
                                            toggleMenuHiden();
                                    }}
                                >
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="block py-2 px-3 text-gray-900 rounded  md:p-0 hover:text-lime-500"
                                    onClick={() => {
                                        if (menuClosed === "fixed")
                                            toggleMenuHiden();
                                    }}
                                >
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="block py-2 px-3 text-gray-900 rounded  md:p-0 hover:text-lime-500"
                                    onClick={() => {
                                        if (menuClosed === "fixed")
                                            toggleMenuHiden();
                                    }}
                                >
                                    Portfólio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#clients"
                                    className="block py-2 px-3 text-gray-900 rounded  md:p-0 hover:text-lime-500"
                                    onClick={() => {
                                        if (menuClosed === "fixed")
                                            toggleMenuHiden();
                                    }}
                                >
                                    Clientes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#footer"
                                    className="block py-2 px-3 text-white rounded-xl text-center md:-my-2 md:border-8 border-lime-500 bg-lime-500 md:p-0 hover:text-gray-900"
                                    onClick={() => {
                                        if (menuClosed === "fixed")
                                            toggleMenuHiden();
                                    }}
                                >
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
