'use client';

import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { TailwindCss } from "@styled-icons/boxicons-logos/TailwindCss";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Php } from '@styled-icons/boxicons-logos/Php';
import { Laravel } from '@styled-icons/fa-brands/Laravel';
import { Wordpress } from '@styled-icons/boxicons-logos/Wordpress';

export function Techs() {
    return(
        <div className="flex gap-12 justify-center flex-wrap mt-14">
            <Html5
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="HTML5"
                data-tooltip-place="bottom"
            />
            <Css3
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="CSS3"
                data-tooltip-place="bottom"
            />
            <Javascript
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Javascript"
                data-tooltip-place="bottom"
            />
            <TailwindCss
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Tailwind CSS"
                data-tooltip-place="bottom"
            />
            <Sass
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="SASS"
                data-tooltip-place="bottom"
            />
            <Typescript
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Typescript"
                data-tooltip-place="bottom"
            />
            <Git
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Git"
                data-tooltip-place="bottom"
            />
            <Styledcomponents
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Styled components"
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
            <Mysql
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="MySQL"
                data-tooltip-place="bottom"
            />
            <Php
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Php"
                data-tooltip-place="bottom"
            />
            <Laravel
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Laravel"
                data-tooltip-place="bottom"
            />
            <Wordpress
                className="w-10 h-10 text-secondary-gray hover:text-green hover:transition"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Wordpress"
                data-tooltip-place="bottom"
            />
        </div>
    )
}