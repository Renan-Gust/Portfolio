"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";

import { Funnel } from "phosphor-react";

import { Projects } from ".";

const filters = ["TODOS", "FRONTEND", "BACKEND", "FULLSTACK"] as const;

type FilterType = typeof filters[number];

interface ProjectsProps {
    projects: Projects[],
    setProjects: Dispatch<SetStateAction<Projects[]>>;
}

export function Filter({ projects, setProjects }: ProjectsProps) {
    const [currentFilter, setCurrentFilter] = useState<FilterType>("TODOS");
    function filterProjects(){
        if(currentFilter !== "TODOS"){
            const projectsFiltered = projects.filter(project => project.category === currentFilter);
            
            setProjects(projectsFiltered);
        } else{
            setProjects(projects);
        }
    }

    useEffect(() => {
        filterProjects();
    }, [currentFilter]);

    return(
        <article className="flex gap-2 items-center">
            <Funnel size={32} color="#00DF5E" />

            <div className="flex flex-wrap gap-1">
                {filters.map((filter, index) => (
                    <span
                        className={`border border-gray rounded-md px-2 cursor-pointer ${currentFilter !== filter ? 'text-secondary-gray' : 'text-primary-white font-bold bg-green'}`}
                        key={index}
                        onClick={() => setCurrentFilter(filter)}
                    >
                        {filter}
                    </span>
                ))}
            </div>
        </article>
    )
}