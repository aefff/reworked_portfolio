"use client";

import useProjectManager from "@/hooks/useProjectManager";
import Link from "next/link";
import NewPage from "@/components/NewPage"

class LinkedList <T> {
    constructor (public value: T,
                 public pointer: number) {}
}

export default function Page() {
    const { projects } = useProjectManager();
    const linkedListCarousel = projects.map((v, i) => {
        if ((i + 1) >= projects.length) {
            return new LinkedList(v, 0);
        }
        return new LinkedList(v, i + 1);
    })

    console.log(linkedListCarousel.map((l) => { return l.value, l.pointer }))

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

            <div className="mt-4">
                <div className="flex gap-4 overflow-x-auto pb-3 pr-2 snap-x snap-mandatory">
                    {linkedListCarousel.map((project, i) => (
                        <Link href={`/projects/${encodeURIComponent(project.value.id)}`} className="snap-start min-w-65 md:min-w-[320px] item hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all" key={i}>
                            <div className="item-title">{project.value.title}</div>
                            <div className="item-subtitle">{project.value.subtitle}</div>
                            <div className="item-meta">Click to open details</div>

                        </Link>
                    ))}
                </div>
            </div>
        </NewPage>
    )
}
