'use client';

import { Docker, Typescript, Graphql, Aws, Php, Javascript, ReactLogo, Wordpress } from "styled-icons/boxicons-logos";
import { Laravel, Cloudflare, Mysql, Nextdotjs } from "styled-icons/simple-icons";

export function Techs() {
    return(
        <div className="flex gap-12 justify-center flex-wrap mt-14">
            <Javascript
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Javascript"
                data-tooltip-place="bottom"
            />
            <Typescript
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Typescript"
                data-tooltip-place="bottom"
            />
            <ReactLogo
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="ReactJS"
                data-tooltip-place="bottom"
            />
            <Nextdotjs
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="NextJS"
                data-tooltip-place="bottom"
            />
            <Php
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Php"
                data-tooltip-place="bottom"
            />
            <Mysql
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="MySQL"
                data-tooltip-place="bottom"
            />
            <Wordpress
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Wordpress"
                data-tooltip-place="bottom"
            />
            <Docker
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Docker"
                data-tooltip-place="bottom"
            />
            <Laravel
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Laravel"
                data-tooltip-place="bottom"
            />
            <Graphql
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="GraphQL"
                data-tooltip-place="bottom"
            />
            <Aws
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="AWS"
                data-tooltip-place="bottom"
            />
            <Cloudflare
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Cloudflare"
                data-tooltip-place="bottom"
            />
        </div>
    )
}