import Image from "next/image";

import { SocialMedia } from "./SocialMedia";
import { Button } from "./Button";
import { Techs } from "./Techs";

import euImg from '../../public/eu.webp';
const urlCurriculo = '../../renan-gustavo-cv.pdf';

export function AboutMe() {
    return(
        <section className="mb-28" id="about-me">
            <div className="flex flex-col lg:flex-row gap-6">
                <article className="w-full min-w-[300px] max-w-[300px] mx-auto">
                    <div className="p-8 border border-solid border-gray rounded-md text-center">
                        <Image
                            src={euImg}
                            alt=""
                            height={130}
                            width={130}
                            className="rounded-full object-cover h-[130px] mx-auto"
                        />

                        <p className="text-primary-white text-xl my-4">Renan Gustavo</p>
                        <p className="text-secondary-gray">Web developer com experiência em Javascript, React, NextJS, PHP e Laravel.</p>
                    </div>
                </article>

                <article className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-primary-white text-2xl font-bold uppercase">Sobre Mim</h1>

                        <p className="text-secondary-gray text-justify my-4">
                            Sou um desenvolvedor web com experiência em front-end e back-end. Meu objetivo é desenvolver aplicativos dinâmicos, escaláveis e otimizados, sempre com foco na experiência do usuário e na qualidade do código.
                            <br />
                            Ao longo da minha jornada, tive a oportunidade de trabalhar em diversos projetos desafiadores, o que me permitiu aprimorar minhas habilidades e explorar uma variedade de tecnologias. Adoro aprender coisas novas e estou sempre em busca de novas ferramentas e boas práticas de desenvolvimento para manter meu trabalho atualizado e eficiente.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-between items-center mt-4 gap-8">
                        <SocialMedia />
                        <Button text="Download CV" href={urlCurriculo} download={true} className="w-full" />
                    </div>
                </article>
            </div>

            <Techs />
        </section>
    )
}