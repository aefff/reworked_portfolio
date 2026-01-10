import { Link, useLocation } from "react-router-dom"
import useProjectManager from "./useProjectManager"

function ProjectTemplate() {
    const { projects } = useProjectManager()
    const projectId = useLocation().pathname.split("/").pop()
    const currentProject = projects.find(proj => proj.id === projectId)

    if (!currentProject) {
        return (
            <div className="page-wrap">
                <section className="panel">
                    <div className="panel-inner">
                        <h1 className="section-title">Project not found</h1>
                        <Link to="/projects" className="btn-ghost mt-3">Back</Link>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="page-wrap">
            <section className="panel">
                <div className="panel-inner">

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

                            <Link to="/projects" className="btn-ghost">Back</Link>
                        </div>
                    </div>

                    <div className="divider" />

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
                                        {currentProject.challenges.map((line, i) => (
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
                                <div className="divider" />
                                <ul className="bullets">
                                    {currentProject.stack.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="item mt-5">
                                <div className="item-title">Features</div>
                                <div className="divider" />
                                <ul className="bullets">
                                    {currentProject.features.map((feat, i) => (
                                        <li key={i}>{feat}</li>
                                    ))}
                                </ul>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectTemplate
