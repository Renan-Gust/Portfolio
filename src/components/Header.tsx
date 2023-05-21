"use client"

import { useState } from 'react';

import { List, X } from 'phosphor-react';

const menuItems = ["Sobre Mim", "Projetos", "Serviços", "Minhas Skills"];

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
                                <li key={index}><a href="">{item}</a></li>
                            ))}
                        </ul>
                    </nav>
                }

                <nav className="w-3/6 hidden md:block lg:w-1/3 xl:w-5/12 3xl:w-1/4">
                    <ul className="flex justify-between">
                        {menuItems.map((item, index) => (
                            <li key={index}><a href="">{item}</a></li>
                        ))}
                    </ul>
                </nav>
            </section>
        </header>
    )
}