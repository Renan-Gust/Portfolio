"use client";

import { useEffect, useState } from "react";

import { Globe, GithubLogo } from "phosphor-react";

import { Filter } from "./filter";

export interface Projects {
    name: string;
    description: string;
    links: {
        github: string;
        website: string;
    };
    techs: string[];
    category: string;
    created_at: string;
}

export function Projects() {
    const [icon, setIcon] = useState<"site" | "github">("site");
    const [projectName, setProjectName] = useState("");
    const [hoverActive, setHoverActive] = useState(false);
    const [projects, setProjects] = useState<Projects[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Projects[]>([]);

    function handleChangeIconColorMouseOver(icon: "site" | "github", projectName: string) {
        setIcon(icon);
        setProjectName(projectName);
        setHoverActive(true);
    }

    function handleChangeIconColorMouseOut() {
        setHoverActive(false);
    }

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3000/api/projects");
            const data = await response.json();
            setProjects(data);
            setFilteredProjects(data);
        })();
    }, []);

    return(
        <section className="mb-28" id="projects">
            <h1 className="text-primary-white text-2xl font-bold uppercase text-center mb-8">Projetos</h1>

            <Filter projects={projects} setProjects={setFilteredProjects} />

            <div className="mt-8 flex flex-col md:grid md:grid-cols-2 gap-4">
                {filteredProjects.length === 0 && <span className="text-primary-white text-center">Nenhum projeto encontrado!</span>}
                
                {filteredProjects.map((project, index) => (
                    <article className="rounded-md bg-dark-gray p-4 h-[300px] flex flex-col justify-between relative" key={index}>
                        <div className="bg-green absolute top-0 left-0 rounded-tl-md">
                            <p className="text-primary-white uppercase font-bold px-2">{project.name}</p>
                        </div>

                        <div className="flex gap-4 justify-end">
                            <span className="uppercase text-secondary-gray text-sm font-bold">
                                {project.category}
                            </span>
                        </div>

                        <p className="text-primary-white">{project.description}</p>

                        <div className="flex justify-between">
                            <div>
                                <span className="text-secondary-gray text-sm">
                                    Criando em: {project.created_at}
                                </span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <a href={project.links.website} target="_blank">
                                    <Globe
                                        size={24}
                                        color={hoverActive && icon === "site" && projectName === project.name ? "#00DF5E" : "#828282"}
                                        id="site"
                                        onMouseOver={() => handleChangeIconColorMouseOver("site", project.name)}
                                        onMouseOut={handleChangeIconColorMouseOut}
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Acessar Website"
                                        data-tooltip-place="top"
                                    />
                                </a>

                                <a href={project.links.github} target="_blank">
                                    <GithubLogo
                                        size={24}
                                        color={hoverActive && icon === "github" && projectName === project.name ? "#00DF5E" : "#828282"}
                                        id="github"
                                        onMouseOver={() => handleChangeIconColorMouseOver("github", project.name)}
                                        onMouseOut={handleChangeIconColorMouseOut}
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content="Acessar Github"
                                        data-tooltip-place="top"
                                    />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}