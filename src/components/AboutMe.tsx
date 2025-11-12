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
                            alt="Renan Gustavo"
                            height={130}
                            width={130}
                            className="rounded-full object-cover h-[130px] mx-auto"
                        />

                        <p className="text-primary-white text-xl my-4">Renan Gustavo</p>
                        <p className="text-secondary-gray">
                            Javascript | Typescript | ReactJS | NextJS | PHP | MySQL | Wordpres | Docker | Laravel | GraphQL | AWS | Cloudflare | Cibersegurança
                        </p>
                    </div>
                </article>

                <article className="flex flex-col justify-center">
                    <div>
                        <h1 className="text-primary-white text-2xl font-bold uppercase">Sobre Mim</h1>

                        <p className="text-secondary-gray text-justify my-4">
                            Sou um desenvolvedor focado em criar aplicativos dinâmicos, escaláveis e otimizados. Ao longo da minha jornada, trabalhei em diversos projetos desafiadores, sempre buscando entregar soluções eficientes. Tenho um forte compromisso com a qualidade do código e a experiência do usuário, além de estar sempre em busca de novas ferramentas e boas práticas de desenvolvimento.
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