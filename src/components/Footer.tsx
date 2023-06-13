import { SocialMedia } from "./SocialMedia";

export function Footer(){
    return(
        <section className="py-4 border-solid border-t-[1px] border-dark-gray">
            <article className="flex items-center justify-center md:justify-between flex-wrap gap-4">
                <p className="text-primary-white">Orgulhosamente feito por Renan Gustavo</p>

                <SocialMedia />
            </article>
        </section>
    )
}