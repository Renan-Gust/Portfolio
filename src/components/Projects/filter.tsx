"use client";

import { Funnel } from "phosphor-react";

export function Filter() {
    return(
        <article className="flex gap-2 items-center">
            <Funnel size={32} color="#00DF5E" />

            <div className="flex flex-wrap gap-1">
                <span className="border border-gray rounded-md px-2 cursor-pointer bg-green text-primary-white font-bold">TODOS</span>
                <span className="border border-gray rounded-md text-secondary-gray px-2 cursor-pointer">FRONTEND</span>
                <span className="border border-gray rounded-md text-secondary-gray px-2 cursor-pointer">BACKEND</span>
                <span className="border border-gray rounded-md text-secondary-gray px-2 cursor-pointer">FULLSTACK</span>
            </div>
        </article>
    )
}