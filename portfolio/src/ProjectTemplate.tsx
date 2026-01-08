import { Link } from "react-router-dom"

function ProjectTemplate() {
    return (
        <div className="page-wrap">
            <section className="panel">
                <div className="panel-inner">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <h1 className="section-title m-0">Project Title</h1>
                        <div className="flex gap-2">
                            <button className="startbtn">GitHub</button>
                            <Link to="/projects" className="btn-ghost">Back</Link>
                        </div>
                    </div>

                    <div className="divider" />

                    <div className="two-col">
                        <div className="main-col">
                            <article className="item">
                                <div className="item-title">Overview</div>
                                <div className="item-subtitle">What it is + what it solves</div>
                                <p className="mt-3 text-blue-100 leading-relaxed">
                                    Write a short summary here. Keep it punchy.
                                </p>
                            </article>

                            <article className="item mt-5">
                                <div className="item-title">How I built it</div>
                                <div className="item-subtitle">Your explanation section</div>
                                <ul className="bullets">
                                    <li>Step 1: …</li>
                                    <li>Step 2: …</li>
                                    <li>Step 3: …</li>
                                </ul>
                            </article>

                            <article className="item mt-5">
                                <div className="item-title">Challenges & lessons</div>
                                <div className="item-subtitle">What you learned</div>
                                <ul className="bullets">
                                    <li>Challenge: … → Fix: …</li>
                                    <li>Lesson learned: …</li>
                                </ul>
                            </article>
                        </div>

                        <aside className="side-col">
                            <div className="item">
                                <div className="item-title">Tech Stack</div>
                                <div className="divider" />
                                <ul className="bullets">
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>Tailwind</li>
                                </ul>
                            </div>

                            <div className="item mt-5">
                                <div className="item-title">Features</div>
                                <div className="divider" />
                                <ul className="bullets">
                                    <li>Feature A</li>
                                    <li>Feature B</li>
                                    <li>Feature C</li>
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
