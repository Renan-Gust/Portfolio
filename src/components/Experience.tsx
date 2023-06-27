'use client';

import { Briefcase, GraduationCap } from 'phosphor-react';

export function Experience() {
    return(
        <section className="mb-28" id="experience">
            <h1 className="text-primary-white text-2xl font-bold uppercase text-center mb-8">Experiência</h1>

            {/* Mtrek */}
            <div className="relative before:content-[''] before:w-1 before:h-full before:absolute before:bg-green before:left-auto md:before:left-1/2">
                <article className="relative pt-6">
                    <div className="absolute bg-green left-auto md:left-1/2 w-8 h-8 md:w-16 md:h-16 rounded-full -ml-4 md:-ml-8 flex justify-center items-center max-md:top-9">
                        <Briefcase color="#212121" className="w-6 h-6 md:w-8 md:h-8" />
                    </div>

                    <div className="relative bg-primary-white mr-auto md:max-w-[300px] lg:max-w-[40%] 2xl:max-w-[45%] lg:w-full rounded-lg p-3 ml-10 md:ml-0">
                        <span className="absolute right-full md:left-full top-6 border-[7px] border-r-primary-white md:rotate-180"></span>

                        <div className="text-dark-gray">
                            <h2 className="p-1 rounded-lg bg-green font-bold w-12 mb-2">2021</h2>
                            <p className="font-bold">Empresa: <span className="font-normal">MTREK</span></p>
                            <p className="font-bold">Cargo: <span className="font-normal">Desenvolvedor fullstack</span></p>
                            <p className="font-bold">Tecnologias: <span className="font-normal">Javascript, Laravel, MySQL</span></p>
                            <p className="font-bold">Categoria: <span className="font-normal">Freelancer</span></p>
                            <p className="font-bold">Período: <span className="font-normal">03/2021 - 01/2023</span></p>
                        </div>
                    </div>
                </article>
            </div>

            {/* Uninter */}
            <div className="relative before:content-[''] before:w-1 before:h-full before:absolute before:bg-green before:left-auto md:before:left-1/2">
                <article className="relative pt-6">
                    <div className="absolute bg-green left-auto md:left-1/2 w-8 h-8 md:w-16 md:h-16 rounded-full -ml-4 md:-ml-8 flex justify-center items-center max-md:top-9">
                        <GraduationCap color="#212121" className="w-6 h-6 md:w-8 md:h-8" />
                    </div>

                    <div className="relative bg-primary-white md:max-w-[300px] lg:max-w-[40%] 2xl:max-w-[45%] lg:w-full rounded-lg p-3 ml-10 md:ml-auto">
                        <span className="absolute right-full top-6 border-[7px] border-r-primary-white"></span>

                        <div className="text-dark-gray">
                            <h2 className="p-1 rounded-lg bg-green font-bold w-12 mb-2">2022</h2>
                            <p className="font-bold">Instituição: <span className="font-normal">Uninter</span></p>
                            <p className="font-bold">Curso: <span className="font-normal">Análise e Desenvolvimento de Sistemas</span></p>
                            <p className="font-bold">Período: <span className="font-normal">03/2022 - Atualmente</span></p>
                        </div>
                    </div>
                </article>
            </div>

            {/* Fastnfe */}
            <div className="relative before:content-[''] before:w-1 before:h-full before:absolute before:bg-green before:left-auto md:before:left-1/2">
                <article className="relative pt-6">
                    <div className="absolute bg-green left-auto md:left-1/2 w-8 h-8 md:w-16 md:h-16 rounded-full -ml-4 md:-ml-8 flex justify-center items-center max-md:top-9">
                        <Briefcase color="#212121" className="w-6 h-6 md:w-8 md:h-8" />
                    </div>

                    <div className="relative bg-primary-white mr-auto md:max-w-[300px] lg:max-w-[40%] 2xl:max-w-[45%] lg:w-full rounded-lg p-3 ml-10 md:ml-0">
                        <span className="absolute right-full md:left-full top-6 border-[7px] border-r-primary-white md:rotate-180"></span>

                        <div className="text-dark-gray">
                            <h2 className="p-1 rounded-lg bg-green font-bold w-12 mb-2">2022</h2>
                            <p className="font-bold">Empresa: <span className="font-normal">Fastnfe</span></p>
                            <p className="font-bold">Cargo: <span className="font-normal">Desenvolvedor fullstack</span></p>
                            <p className="font-bold">Tecnologias: <span className="font-normal">Javascript, Laravel, MySQL</span></p>
                            <p className="font-bold">Categoria: <span className="font-normal">Freelancer</span></p>
                            <p className="font-bold">Período: <span className="font-normal">09/2022 - Atualmente</span></p>
                        </div>
                    </div>
                </article>
            </div>

            {/* Internit */}
            <div className="relative before:content-[''] before:w-1 before:h-full before:absolute before:bg-green before:left-auto md:before:left-1/2">
                <article className="relative pt-6">
                    <div className="absolute bg-green left-auto md:left-1/2 w-8 h-8 md:w-16 md:h-16 rounded-full -ml-4 md:-ml-8 flex justify-center items-center max-md:top-9">
                        <Briefcase color="#212121" className="w-6 h-6 md:w-8 md:h-8" />
                    </div>

                    <div className="relative bg-primary-white md:max-w-[300px] lg:max-w-[40%] 2xl:max-w-[45%] lg:w-full rounded-lg p-3 ml-10 md:ml-auto">
                        <span className="absolute right-full top-6 border-[7px] border-r-primary-white"></span>

                        <div className="text-dark-gray">
                            <h2 className="p-1 rounded-lg bg-green font-bold w-12 mb-2">2022</h2>
                            <p className="font-bold">Empresa: <span className="font-normal">Internit</span></p>
                            <p className="font-bold">Cargo: <span className="font-normal">Desenvolvedor frontend</span></p>
                            <p className="font-bold">Tecnologias: <span className="font-normal">Javascript, NextJS, PHP, Wordpress, Symfony</span></p>
                            <p className="font-bold">Categoria: <span className="font-normal">Estágio</span></p>
                            <p className="font-bold">Período: <span className="font-normal">09/2022 - Atualmente</span></p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}