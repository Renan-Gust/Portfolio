"use client";

import { useState } from "react";

import { Globe, GithubLogo } from "phosphor-react";

import { Filter } from "./filter";

export function Projects() {
    const [icon, setIcon] = useState<"site" | "github">("site");
    const [project, setProject] = useState("");
    const [hoverActive, setHoverActive] = useState(false);

    function handleChangeIconColorMouseOver(icon: "site" | "github", project: string) {
        setIcon(icon);
        setProject(project);
        setHoverActive(true);
    }

    function handleChangeIconColorMouseOut() {
        setHoverActive(false);
    }

    return(
        <section>
            <h1 className="text-primary-white text-2xl font-bold uppercase text-center mb-8">Projetos</h1>

            <Filter />

            <div className="mt-8 flex flex-col md:grid md:grid-cols-2 gap-4">
                <article className="rounded-md bg-dark-gray p-4 h-[300px] flex flex-col justify-between relative">
                    <div className="bg-green absolute top-0 left-0 rounded-tl-md">
                        <p className="text-primary-white uppercase font-bold px-2">Devsfood</p>
                    </div>

                    <div className="flex gap-4 justify-end">
                        <span className="uppercase text-secondary-gray text-sm font-bold">FRONTEND</span>
                        <span className="uppercase text-secondary-gray text-sm font-bold">FRONTEND</span>
                    </div>

                    <p className="text-primary-white">Aplicativo resultante da semana Omnistack #10 da Rocketseat. A aplicação visa conectar desenvolvedores próximos de sua localização atual e que trabalham com as mesmas tecnologias.</p>

                    <div className="flex justify-between">
                        <div>
                            <span className="text-secondary-gray text-sm">Criando em: 27/05/2023</span>
                        </div>

                        <div className="flex gap-2 items-center">
                            <a href="#" target="_blank">
                                <Globe
                                    size={24}
                                    color={hoverActive && icon === "site" && project === "devsfood" ? "#00DF5E" : "#828282"}
                                    id="site"
                                    onMouseOver={() => handleChangeIconColorMouseOver("site", "devsfood")}
                                    onMouseOut={handleChangeIconColorMouseOut}
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Acessar Website"
                                    data-tooltip-place="top"
                                />
                            </a>

                            <a href="#" target="_blank">
                                <GithubLogo
                                    size={24}
                                    color={hoverActive && icon === "github" && project === "devsfood" ? "#00DF5E" : "#828282"}
                                    id="github"
                                    onMouseOver={() => handleChangeIconColorMouseOver("github", "devsfood")}
                                    onMouseOut={handleChangeIconColorMouseOut}
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Acessar Github"
                                    data-tooltip-place="top"
                                />
                            </a>
                        </div>
                    </div>
                </article>

                <article className="rounded-md bg-dark-gray p-4 h-[300px] flex flex-col justify-between relative">
                    <div className="bg-green absolute top-0 left-0 rounded-tl-md">
                        <p className="text-primary-white uppercase font-bold px-2">Book Wise</p>
                    </div>

                    <div className="flex gap-4 justify-end">
                        <span className="uppercase text-secondary-gray text-sm font-bold">FRONTEND</span>
                        <span className="uppercase text-secondary-gray text-sm font-bold">FRONTEND</span>
                    </div>

                    <p className="text-primary-white">Aplicativo resultante da semana Omnistack #10 da Rocketseat. A aplicação visa conectar desenvolvedores próximos de sua localização atual e que trabalham com as mesmas tecnologias.</p>

                    <div className="flex justify-between">
                        <div>
                            <span className="text-secondary-gray text-sm">Criando em: 27/05/2023</span>
                        </div>

                        <div className="flex gap-2 items-center">
                            <a href="#" target="_blank">
                                <Globe
                                    size={24}
                                    color={hoverActive && icon === "site"  && project === "book wise" ? "#00DF5E" : "#828282"}
                                    id="site"
                                    onMouseOver={() => handleChangeIconColorMouseOver("site", "book wise")}
                                    onMouseOut={handleChangeIconColorMouseOut}
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Acessar Website"
                                    data-tooltip-place="top"
                                />
                            </a>

                            <a href="#" target="_blank">
                                <GithubLogo
                                    size={24}
                                    color={hoverActive && icon === "github"  && project === "book wise" ? "#00DF5E" : "#828282"}
                                    id="github"
                                    onMouseOver={() => handleChangeIconColorMouseOver("github", "book wise")}
                                    onMouseOut={handleChangeIconColorMouseOut}
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Acessar Github"
                                    data-tooltip-place="top"
                                />
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}