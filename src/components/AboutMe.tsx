import Image from "next/image";

import euImg from '../../public/eu.webp';
import { SocialMedia } from "./SocialMedia";
import { Button } from "./Button";

export function AboutMe() {
    return(
        <section className="mb-72" id="about-me">
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

                        <p className="text-secondary-gray">Fullstack developer com maior experiência na stack Javascript, React, Next.js, PHP e Laravel.</p>
                    </div>
                </article>

                <article className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-primary-white text-2xl font-bold uppercase">Sobre Mim</h1>

                        <p className="text-secondary-gray text-justify my-4">Sou um desenvolvedor front-end altamente motivado e sempre buscando aprender novas tecnologias. Tenho experiência sólida em React, React Native e Next.js, e estou sempre disponível para enfrentar novos desafios e aprimorar minhas habilidades. Tenho paixão por criar interfaces de usuário incríveis e responsivas, e gosto de trabalhar em problemas desafiadores. Além disso, sou capaz de trabalhar eficazmente em equipe e comunicar claramente com outros membros do time. Estou sempre disposto a aprender e me adaptar a novas situações, fazendo com que eu seja um desenvolvedor flexível e confiável para qualquer projeto.</p>

                        <p className="text-secondary-gray text-justify">Possuo maior aptidão para área de Front-end e conhecimentos sólidos na stack: React.Js, Next.Js, HTML, Css e Styled components.</p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-between items-center mt-4 gap-8">
                        <SocialMedia />
                        <Button text="Download CV" className="w-full" />
                    </div>
                </article>
            </div>
        </section>
    )
}