import Image from "next/image";

import { Button } from "./Button";
import { SocialMedia } from "./SocialMedia";

import bannerImg from '../../public/banner.svg';

export function Banner() {
    return(
        <section className="h-screen flex justify-center flex-col gap-5" id="home">
            <article className="flex flex-col lg:flex-row items-center justify-between">
                <div className="order-1 mt-8 lg:order-none lg:mt-0">
                    <div className="mb-4">
                        <span className="text-secondary-gray text-2xl">Olá, eu sou o</span>
                        <h1 className="text-primary-white text-6xl font-bold my-1">Renan Gustavo</h1>
                        <p className="text-secondary-gray text-2xl mb-8">Desenvolvedor Full-Stack</p>

                        <Button text="Saiba Mais" href="#about-me" />
                    </div>
                    <SocialMedia />
                </div>
                
                <div>
                    <Image
                        src={bannerImg}
                        alt=""
                        height={800}
                        width={800}
                        className="max-w-[400px] max-h-[400px] 2xl:max-w-[800px] 2xl:max-h-[800px] laptop:max-h-[450px] w-full h-full"
                    />
                </div>
            </article>
        </section>
    )
}