"use client"

import { Code, Laptop, Robot } from "phosphor-react";

export function Services() {
    return(
        <section className="mb-28" id="services">
            <div className="grid grid-cols-3 gap-6">
                <article className="bg-dark-gray border-solid border border-gray">
                    <div className="p-8 border-b-4 border-green h-full">
                        <Laptop size={48} color="#00DF5E" />
                        <h2 className="text-primary-white text-2xl font-bold my-4 uppercase">Desenvolvimento</h2>
                        <p className="text-secondary-gray text-lg">Desenvolvimento de sistemas 100% personalizados que vão automatizar a administração do seu negócio.</p>
                    </div>
                </article>

                <article className="bg-dark-gray border-solid border border-gray">
                    <div className="p-8 border-b-4 border-green h-full">
                        <Code size={48} color="#00DF5E" />
                        <h2 className="text-primary-white text-2xl font-bold my-4 uppercase">Sites responsivos</h2>
                        <p className="text-secondary-gray text-lg">Sites que adaptam o tamanho das suas páginas ao tamanho das telas que estão sendo exibidos, facilitando a sua visualização.</p>
                    </div>
                </article>

                <article className="bg-dark-gray border-solid border border-gray">
                    <div className="p-8 border-b-4 border-green h-full">
                        <Robot size={48} color="#00DF5E" />
                        <h2 className="text-primary-white text-2xl font-bold my-4 uppercase">SEO</h2>
                        <p className="text-secondary-gray text-lg">Forma de deixar o site com suas informações bem compreensíveis para o computador, ajudando sua busca no Google e facilitando o entendimento de leitores de acessibilidade.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}