import Image from "next/image";

import { SocialMedia } from "./SocialMedia";
import { Button } from "./Button";
import { Techs } from "./Techs";

import euImg from '../../public/eu.webp';
const urlCurriculo = '../../curriculo.pdf';

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

                        <p className="text-secondary-gray">Fullstack developer com maior experiência na stack Javascript, React, NextJS, PHP e Laravel.</p>
                    </div>
                </article>

                <article className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-primary-white text-2xl font-bold uppercase">Sobre Mim</h1>

                        <p className="text-secondary-gray text-justify my-4">Sou um desenvolvedor web full stack com conhecimento em Javascript, React, NextJS, PHP e Laravel. Apaixonado por criar experiências digitais incríveis, tenho habilidades em desenvolvimento de interfaces envolventes e implementação de funcionalidades complexas. Estou comprometido em entregar projetos de alta qualidade. Sou autodidata, colaborativo e valorizo a comunicação eficaz. Estou pronto para enfrentar novos desafios e trabalhar em projetos inovadores. Vamos transformar suas ideias em realidade e criar algo incrível juntos!</p>
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