"use client"

import { useState } from 'react';

import { List, X } from 'phosphor-react';

const menuItems = [
    {
        title: "Home",
        href: "home",
    },
    // {
    //     title: "Serviços",
    //     href: "services"
    // },
    {
        title: "Sobre Mim",
        href: "about-me"
    },
    // {
    //     title: "Projetos",
    //     href: "projects"
    // },
    {
        title: "Experiência",
        href: "experience"
    }
];

export function Header() {
    const [active, setActive] = useState(false);

    return(
        <header className="bg-dark-gray fixed top-0 z-50 w-full">
            <section className="flex items-center justify-between py-6 px-8 xl:px-52 text-primary-white">
                <h1 className="text-2xl font-semibold">Portfólio</h1>

                <div className="md:hidden cursor-pointer" onClick={() => setActive(!active)}>
                    {!active ? <List size={24} /> : <X size={24} />}
                </div>

                {active &&
                    <nav className="fixed top-20 w-full bg-dark-gray h-screen left-0">
                        <ul className="flex flex-col items-center gap-4 mt-20 w-full">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${item.href}`}
                                        onClick={() => setActive(false)}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                }

                <nav className="w-2/3 hidden md:block lg:w-1/2 3xl:w-1/3">
                    <ul className="flex justify-between">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={`#${item.href}`} className="relative after:content-[''] after:h-[2px] after:bg-green after:absolute after:bottom-0 after:left-0 after:right-0 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:duration-500">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </header>
    )
}