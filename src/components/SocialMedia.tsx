"use client"

import { Envelope, WhatsappLogo, GithubLogo, LinkedinLogo } from 'phosphor-react'

export function SocialMedia() {
    return(
        <article className="flex gap-2">
            <div className="p-1 bg-gray cursor-pointer rounded-md">
                <a href="mailto:renandevfullstack@gmail.com" target="_blank">
                    <Envelope size={26} color="#00DF5E" />
                </a>
            </div>
            <div className="p-1 bg-gray cursor-pointer rounded-md">
                <a href="https://api.whatsapp.com/send?phone=552174295311&text=Ol%C3%A1%2C%20podemos%20conversar%3F" target="_blank">
                    <WhatsappLogo size={26} color="#00DF5E" />
                </a>
            </div>
            <div className="p-1 bg-gray cursor-pointer rounded-md">
                <a href="https://github.com/Renan-Gust" target="_blank">
                    <GithubLogo size={26} color="#00DF5E" />
                </a>
            </div>
            <div className="p-1 bg-gray cursor-pointer rounded-md">
                <a href="https://www.linkedin.com/in/r-gustavo" target="_blank">
                    <LinkedinLogo size={26} color="#00DF5E" />
                </a>
            </div>
        </article>
    )
}