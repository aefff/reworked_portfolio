import { Link } from "react-router-dom"

function Projects() {
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
                        <article className="item">
                            <div className="item-title">Task Manager Web App</div>
                            <div className="item-subtitle">React + TypeScript</div>
                            <ul className="bullets">
                                <li>Calendar-based scheduling UI</li>
                                <li>Task creation/editing/completion</li>
                                <li>Week/month views (you’re building this)</li>
                            </ul>
                            <div className="mt-4 flex gap-2">
                                <Link className="startbtn" to="/projects/task-manager">Open</Link>
                                <button className="btn-ghost">GitHub</button>
                            </div>
                        </article>

                        <article className="item">
                            <div className="item-title">3D Visualizer</div>
                            <div className="item-subtitle">C# + Three.js</div>
                            <ul className="bullets">
                                <li>Create and manipulate 3D objects</li>
                                <li>Rotation, scaling, camera controls</li>
                                <li>Backend logic + renderer integration</li>
                            </ul>
                            <div className="mt-4 flex gap-2">
                                <Link className="startbtn" to="/projects/3d-visualizer">Open</Link>
                                <button className="btn-ghost">GitHub</button>
                            </div>
                        </article>

                        <article className="item">
                            <div className="item-title">Machine Learning with TensorFlow</div>
                            <div className="item-subtitle">Experiments + classifiers</div>
                            <ul className="bullets">
                                <li>Training / evaluation pipeline</li>
                                <li>Image classifier practice</li>
                                <li>Preprocessing + metrics</li>
                            </ul>
                            <div className="mt-4 flex gap-2">
                                <Link className="startbtn" to="/projects/tensorflow-ml">Open</Link>
                                <button className="btn-ghost">GitHub</button>
                            </div>
                        </article>

                        <article className="item">
                            <div className="item-title">Project Manager Desktop App</div>
                            <div className="item-subtitle">C# / .NET (WPF) — Ongoing</div>
                            <ul className="bullets">
                                <li>Project tracking + timeline</li>
                                <li>Local persistence</li>
                                <li>Event-driven UI</li>
                            </ul>
                            <div className="mt-4 flex gap-2">
                                <Link className="startbtn" to="/projects/project-manager-wpf">Open</Link>
                                <button className="btn-ghost">GitHub</button>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
