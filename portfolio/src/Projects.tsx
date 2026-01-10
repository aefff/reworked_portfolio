import { Link } from "react-router-dom"
import useProjectManager from "./useProjectManager"

function Projects() {

    const { projects } = useProjectManager()

    return (
        <div className="page-wrap">
            <section className="panel">
                <div className="panel-inner">
                    <div className="flex flex-wrap justify-between gap-3">
                        <h1 className="section-title m-0">Projects</h1>
                        <div className="flex gap-2">
                            <Link to="/" className="btn-ghost">Back</Link>
                        </div>
                    </div>

                    <div className="divider"/>

                    <div className="grid grid-cols-1 gap-5">

                        {projects.map(project => (
                            <article className="item">

                                <div className="item-title">{project?.title ? project.title : "Invalid name"}</div>

                                <div className="item-subtitle">{project?.subtitle ? project.subtitle : "Invalid subtitle"}</div>

                                <ul className="bullets">
                                    {project.features.slice(0, 3).map((f, i) => {
                                        if (i === 2 && project.features.length > 3) {
                                            return (<li>...</li>)
                                        }
                                        return <li>{f}</li>
                                    })}
                                </ul>
                                <div className="mt-4 flex gap-2">
                                    {project?.id ?
                                        (<Link className="startbtn" to={`/projects/${project.id}`}>Open</Link>) 
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
                </div>
            </section>
        </div>
    )
}

export default Projects
