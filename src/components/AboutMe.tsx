import Image from "next/image";

import euImg from '../../public/eu.webp';

export function AboutMe() {
    return(
        <section>
            <div className="flex">
                <article>
                    <Image
                        src={euImg}
                        alt=""
                        height={130}
                        width={130}
                        className="rounded-full object-cover h-[130]"
                    />

                    <p className="text-secondary-gray text-lg text-justify">Fullstack developer com maior experiência na stack Javascript, React, Next.js, PHP e Laravel.</p>
                </article>

                <article>
                    <div>
                        <h1 className="text-primary-white text-2xl font-bold uppercase">Sobre Mim</h1>
                        <p className="text-secondary-gray text-lg text-justify">Meu nome é Renan Gustavo, tenho 20 anos. Sou desenvolvedor web front-end há mais de 3 ano. Forneço meus serviços a você para que você solucionando seu problema.</p>
                    </div>

                    <div></div>
                </article>
            </div>
        </section>
    )
}