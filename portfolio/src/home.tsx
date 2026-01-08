import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="page-wrap">
            <section className="panel">
                <div className="panel-inner">
                    <p className="section-title mb-2">WELCOME</p>

                    <div className="text-lg text-blue-100 leading-relaxed">
                        <div className="text-blue-200">About me:</div>
                        My name is AbdulMoyeed Mohammed.
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                        <Link className="startbtn" to="/projects">
                            Start <span className="blink">▌</span>
                        </Link>
                        <Link className="btn-ghost" to="/projects">
                            View all projects
                        </Link>
                    </div>

                    <div className="divider" />

                    <div className="flex items-center justify-between gap-3">
                        <h2 className="text-xl tracking-widest text-blue-200 uppercase">Featured Projects</h2>
                        <Link className="btn-ghost" to="/projects">
                            Open Projects
                        </Link>
                    </div>

                    <div className="mt-4">
                        <div className="flex gap-4 overflow-x-auto pb-3 pr-2 snap-x snap-mandatory">
                            <Link to="/projects/task-manager" className="snap-start min-w-[260px] md:min-w-[320px] item hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all">
                                <div className="item-title">Task Manager Web App</div>
                                <div className="item-subtitle">React + TypeScript calendar UI</div>
                                <div className="item-meta">Click to open details</div>
                            </Link>

                            <Link to="/projects/3d-visualizer" className="snap-start min-w-[260px] md:min-w-[320px] item hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all">
                                <div className="item-title">3D Visualizer</div>
                                <div className="item-subtitle">C# backend + Three.js renderer</div>
                                <div className="item-meta">Click to open details</div>
                            </Link>

                            <Link to="/projects/tensorflow-ml" className="snap-start min-w-[260px] md:min-w-[320px] item hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all">
                                <div className="item-title">TensorFlow ML</div>
                                <div className="item-subtitle">Training + evaluation experiments</div>
                                <div className="item-meta">Click to open details</div>
                            </Link>

                            <Link to="/projects/project-manager-wpf" className="snap-start min-w-[260px] md:min-w-[320px] item hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all">
                                <div className="item-title">Project Manager (WPF)</div>
                                <div className="item-subtitle">C#/.NET desktop productivity</div>
                                <div className="item-meta">Click to open details</div>
                            </Link>
                        </div>

                        <div className="text-blue-200/70 text-sm mt-2">
                            Tip: scroll sideways (later you can add arrow buttons + snapping logic)
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
