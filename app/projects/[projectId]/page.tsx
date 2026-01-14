"use client";

import Link from "next/link";
import useProjectManager from "@/hooks/useProjectManager";
import {use} from "react";
import NewPage from "@/components/NewPage"

type Params = { projectId: string; }

export default function Page({params}: { params: Promise<Params> }) {
    const {projects} = useProjectManager();
    const {projectId} = use(params);
    const currentProject = projects.find(proj => proj.id === projectId);

    if (!projects.length) {
        return (
            <NewPage>
                <h1 className="section-title">
                    Loading...
                </h1>
            </NewPage>
        )
    }

    if (!currentProject) {
        return (
            <NewPage>
                <h1 className="section-title">Project not found</h1>
                <Link href="/projects" className="btn-ghost mt-3">Back</Link>
            </NewPage>
        )
    }

    return (
        <NewPage>
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="section-title m-0">{currentProject.title}</h1>
                    <p className="text-blue-200 text-sm">{currentProject.subtitle}</p>
                </div>

                <div className="flex gap-2">

                    {currentProject.github
                        ? (
                            <a
                                href={currentProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="startbtn">GitHub</button>
                            </a>
                        )
                        : (
                            <button className="startbtn cursor-not-allowed opacity-50">
                                GitHub (no link)
                            </button>
                        )
                    }

                    <Link href="/projects" className="btn-ghost">Back</Link>
                </div>
            </div>

            <div className="divider"/>

            <div className="two-col">
                <div className="main-col">

                    <article className="item">
                        <div className="item-title">Overview</div>
                        <p className="mt-3 text-blue-100 leading-relaxed">
                            {currentProject.description}
                        </p>
                    </article>

                    <article className="item mt-5">
                        <div className="item-title">How I built it</div>

                        {currentProject.howBuilt?.length ? (
                            <ul className="bullets">
                                {currentProject.howBuilt.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="mt-3 text-blue-200/80">
                                (Coming soon) — I’ll write up the build process for this project.
                            </p>
                        )}
                    </article>

                    <article className="item mt-5">
                        <div className="item-title">Challenges & lessons</div>

                        {currentProject.challenges?.length ? (
                            <ul className="bullets">
                                {currentProject.challenges.map((line: string, i: number) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="mt-3 text-blue-200/80">
                                (Coming soon) — I’ll document key challenges and takeaways here.
                            </p>
                        )}
                    </article>

                </div>

                <aside className="side-col">

                    <div className="item">
                        <div className="item-title">Tech Stack</div>
                        <div className="divider"/>
                        <ul className="bullets">
                            {currentProject.stack.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="item mt-5">
                        <div className="item-title">Features</div>
                        <div className="divider"/>
                        <ul className="bullets">
                            {currentProject.features.map((feat, i) => (
                                <li key={i}>{feat}</li>
                            ))}
                        </ul>
                    </div>

                </aside>
            </div>
        </NewPage>
    )
}