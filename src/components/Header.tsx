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
        <header className=" fixed z-10 top-0 h-16 h-22 left-8 right-8 w-auto mt-10">
            <nav className=" bg-white border-gray-200 dark:bg-gray-900 rounded-full">
                <div className=" max-w-screen-xl flex flex-wrap items-center justify-between p-2 mx-auto md:p-4 ">
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
                        className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                        className={`${menuClosed}  mt-80 mr-12 w-40 flex flex-row right-0 md:mt-0 md:mr-20 md:block md:w-auto`}
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0  border w-full border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="#home"
                                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Portfólio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#clients"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Clientes
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
