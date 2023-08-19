import { useState } from "react"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const [menuShowed, setMenuShowed] = useState(false);

    const handledMenu = () => {
        setMenuShowed(isShowed => !isShowed)
    }

    return (
        <header className="w-full h-24 flex flex-row justify-between lg:justify-normal">
            <h1 className="basis-1/5 flex flex-row justify-center">
                <img className="w-32" alt="logo-portafolio" src="src/assets/logo-portafolio-large-light.svg" />
            </h1>
            <ul className="nav-opts basis-4/5 hidden lg:flex flex-row justify-center text-2xl">
                <li className="inline leading-[96px] mx-6 hover:underline hover:text-complementary hover:underline-offset-8">
                    <a href="#profile">Inicio</a>
                </li>
                <li className="inline leading-[96px] mx-6 hover:underline hover:text-complementary hover:underline-offset-8">
                    <a href="#summary">Acerca de mi</a>
                </li>
                <li className="inline leading-[96px] mx-6 hover:underline hover:text-complementary hover:underline-offset-8">
                    <a href="#mision-vision">Mision/Vision</a>
                </li>
                <li className="inline leading-[96px] mx-6 hover:underline hover:text-complementary hover:underline-offset-8">
                    <a href="#projects">Proyectos</a>
                </li>
                <li className="inline leading-[96px] mx-6 hover:underline hover:text-complementary hover:underline-offset-8">
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
            <div className="flex lg:hidden lg:order-2 pr-4 relative">
                <button data-collapse-toggle="mobile-menu-3" type="button" onClick={handledMenu}
                    className="lg:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                    aria-controls="mobile-menu-3" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg className={classNames(
                        menuShowed ? 'hidden' : 'block',
                        "w-8 h-6"
                    )} fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg className={classNames(
                        menuShowed ? 'block' : 'hidden',
                         "w-6 h-6" 
                    )} fill="white" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <ul className={classNames(
                    menuShowed ? 'block' : 'hidden',
                    "basis-4/5 absolute right-0 bottom-[-220px] w-[300px] z-20 flex-col text-2xl bg-secondary p-4 rounded-md"
                )}>
                    <li className="hover:text-complementary">
                        <a className="inline-block leading-10" href="#profile">Inicio</a>
                    </li>
                    <li className="hover:text-complementary">
                        <a className="inline-block leading-10" href="#summary">Acerca de mi</a>
                    </li>
                    <li className="hover:text-complementary">
                        <a className="inline-block leading-10" href="#mision-vision">Mision/Vision</a>
                    </li>
                    <li className="hover:text-complementary">
                        <a className="inline-block leading-10" href="#projects">Proyectos</a>
                    </li>
                    <li className="hover:text-complementary">
                        <a className="inline-block leading-10" href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}