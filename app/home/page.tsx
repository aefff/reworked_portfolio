"use client";

import useProjectManager from "@/hooks/useProjectManager";
import Link from "next/link";
import NewPage from "@/components/NewPage";
import Carousel from "@/components/Carousel";

export default function Page() {
    const {projects} = useProjectManager();

    return (
        <NewPage>
            <p className="section-title mb-2">WELCOME</p>

            <div className="text-lg text-blue-100 leading-relaxed">
                <div className="text-blue-200">About me:</div>
                My name is AbdulMoyeed Mohammed.
            </div>

            <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl tracking-widest text-blue-200 uppercase">Featured Projects</h2>
                <Link className="btn-ghost" href="/projects">
                    Open Projects
                </Link>
            </div>

            <Carousel>
                {projects.map((project, i) => (
                    <Link href={`/projects/${encodeURIComponent(project.id)}`}
                          className="snap-start min-w-65 md:min-w-[320px] item hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all opacity-100"
                          key={i}>
                        <div className="item-title">{project.title}</div>
                        <div className="item-subtitle">{project.subtitle}</div>
                        <div className="item-meta">Click to open details</div>
                    </Link>
                ))}
            </Carousel>
        </NewPage>
    )
}
