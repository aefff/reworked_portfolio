"use client";

import Link from "next/link";
import NewPage from "@/components/NewPage"
import useProjectManager from "@/hooks/useProjectManager";

type pageProps = {
    params: {
        projectId: string;
    };
};

export default function Page({params}: { params?: pageProps }) {
    const {projects} = useProjectManager();
    return (
        <NewPage>
            <div className="flex flex-wrap justify-between gap-3">
                <h1 className="section-title m-0">Projects</h1>
                <div className="flex gap-2">
                    <Link href="/" className="btn-ghost">Back</Link>
                </div>
            </div>

            <div className="divider"/>

            <div className="grid grid-cols-1 gap-5">

                {projects.map((project, index) => (
                    <article className="item" key={index}>

                        <div className="item-title">{project?.title ? project.title : "Invalid name"}</div>

                        <div className="item-subtitle">{project?.subtitle ? project.subtitle : "Invalid subtitle"}</div>

                        <ul className="bullets">
                            {project.features.slice(0, 3).map((f, i) => {
                                if (i === 2 && project.features.length > 3) {
                                    return (<li key={i}>...</li>)
                                }
                                return <li key={i}>{f}</li>
                            })}
                        </ul>
                        <div className="mt-4 flex gap-2">
                            {project?.id ?
                                (<Link className="startbtn"
                                       href={`/projects/${encodeURIComponent(project.id)}`}>Open</Link>)
                                :
                                (<button className="startbtn">Invalid Link</button>)
                            }
                            {project?.github ?
                                (<a className="btn-ghost" href={project.github}>Github</a>)
                                :
                                (<button className="btn-ghost cursor-not-allowed opacity-50 ">Github (no link)</button>)

                            }
                        </div>
                    </article>
                ))}

            </div>
        </NewPage>
    )
}