import NewPage from "@/components/NewPage";
import Link from "next/link";

export default function Page() {
    return (
        <NewPage>
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="section-title m-0">Skills</h1>
                    <p className="text-blue-200 text-sm">
                        Tooling, languages, and what I&#39;m actively improving
                    </p>
                </div>

                <div className="flex gap-2">
                    <Link href="/" className="btn-ghost">
                        Back
                    </Link>
                </div>
            </div>

            <div className="divider"/>

            <div className="two-col">
                <div className="main-col">
                    <article className="item">
                        <div className="item-title">Core</div>
                        <ul className="bullets mt-3">
                            <li>React + TypeScript (components, routing, state patterns)</li>
                            <li>Tailwind CSS (responsive UI, design systems, consistent layouts)</li>
                            <li>JavaScript fundamentals (DOM, events, async patterns)</li>
                            <li>Git/GitHub workflows (branches, commits, project structure)</li>
                        </ul>
                    </article>

                    <article className="item mt-5">
                        <div className="item-title">Also comfortable with</div>
                        <ul className="bullets mt-3">
                            <li>C# / .NET (desktop + tooling, strong OOP foundation)</li>
                            <li>Python (scripting, ML experiments, automation)</li>
                            <li>Basic SQL + data modelling concepts</li>
                            <li>APIs + JSON-driven UI patterns</li>
                        </ul>
                    </article>

                    <article className="item mt-5">
                        <div className="item-title">Currently improving</div>
                        <ul className="bullets mt-3">
                            <li>Clean architecture for larger React apps</li>
                            <li>Performance and UX polish (smooth scroll, state control, UI feedback)</li>
                            <li>Backend foundations (auth, persistence, deployment)</li>
                        </ul>
                    </article>
                </div>

                <aside className="side-col">
                    <div className="item">
                        <div className="item-title">Skill Stats</div>
                        <div className="divider"/>

                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between text-sm text-blue-200">
                                    <span>React / TS</span>
                                    <span className="text-blue-200/70">LV 07</span>
                                </div>
                                <div className="mt-1 h-2 rounded bg-blue-900/60 overflow-hidden">
                                    <div className="h-full w-[70%] bg-blue-300/80"/>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between text-sm text-blue-200">
                                    <span>UI / Tailwind</span>
                                    <span className="text-blue-200/70">LV 07</span>
                                </div>
                                <div className="mt-1 h-2 rounded bg-blue-900/60 overflow-hidden">
                                    <div className="h-full w-[70%] bg-blue-300/80"/>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between text-sm text-blue-200">
                                    <span>C# / .NET</span>
                                    <span className="text-blue-200/70">LV 06</span>
                                </div>
                                <div className="mt-1 h-2 rounded bg-blue-900/60 overflow-hidden">
                                    <div className="h-full w-[60%] bg-blue-300/80"/>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between text-sm text-blue-200">
                                    <span>Python</span>
                                    <span className="text-blue-200/70">LV 05</span>
                                </div>
                                <div className="mt-1 h-2 rounded bg-blue-900/60 overflow-hidden">
                                    <div className="h-full w-[50%] bg-blue-300/80"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item mt-5">
                        <div className="item-title">Next unlocks</div>
                        <div className="divider"/>
                        <ul className="bullets">
                            <li>Deployment (Vercel / Render)</li>
                            <li>Backend APIs (FastAPI / Spring Boot)</li>
                            <li>Auth + database integration</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </NewPage>
    )
}