import { Button } from "./Button";
import { SocialMedia } from "./SocialMedia";

export function Banner() {
    return(
        <section className="h-full flex justify-center flex-col gap-5">
            <article>
                <span className="text-secondary-gray text-2xl">Olá, eu sou o</span>
                <h1 className="text-primary-white text-6xl font-bold my-1">Renan Gustavo</h1>
                <p className="text-secondary-gray text-2xl mb-8">Desenvolvedor Full-Stack</p>

                <Button text="Saiba Mais" />
            </article>

            <SocialMedia />
        </section>
    )
}