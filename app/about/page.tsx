import NewPage from "@/components/NewPage";
import Link from "next/link";

export default function Page() {
    return (
        <NewPage>
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="section-title m-0">About</h1>
                    <p className="text-blue-200 text-sm">
                        A quick intro + what I&#39;m working towards
                    </p>
                </div>

                <div className="flex gap-2">
                    <a className="btn-ghost" href="https://github.com/aefff/reworked_portfolio" target="_blank">
                        Website Github
                    </a>
                    <Link href="/" className="btn-ghost">
                        Back
                    </Link>
                </div>
            </div>

            <div className="divider"/>

            <div className="two-col">
                <div className="main-col">
                    <article className="item">
                        <div className="item-title">Who I am</div>
                        <p className="mt-3 text-blue-100 leading-relaxed">
                            I&#39;m AbdulMoyeed Mohammed - a Software Engineering student who enjoys building
                            clean, interactive UIs and systems that feel &#39;engineered&#39;, not just assembled.
                            I like learning by shipping: starting small, iterating fast, and polishing until
                            the experience feels solid.
                        </p>

                        <p className="mt-3 text-blue-100 leading-relaxed">
                            This portfolio is styled like a retro interface on purpose - I want it to feel
                            like a playable menu: clear navigation, glowing panels, and a focus on projects.
                        </p>
                    </article>

                    <article className="item mt-5">
                        <div className="item-title">What I&#39;m focused on</div>
                        <ul className="bullets">
                            <li>Frontend engineering with React + TypeScript (layout, routing, UI systems)</li>
                            <li>Building reusable components and clean design patterns</li>
                            <li>Full-stack foundations: APIs, databases, and data-driven dashboards</li>
                            <li>Performance + UX: smooth scrolling, interaction design, responsive layouts</li>
                        </ul>
                    </article>

                    <article className="item mt-5">
                        <div className="item-title">Goals</div>
                        <ul className="bullets">
                            <li>Ship complete, polished projects end-to-end</li>
                            <li>Write clearer technical explanations for each project</li>
                            <li>Experiment with newer technologies on all levels</li>
                        </ul>
                    </article>
                </div>

                <aside className="side-col">
                    <div className="item">
                        <div className="item-title">Quick Facts</div>
                        <div className="divider"/>
                        <ul className="bullets">
                            <li>Role: Software Engineering student</li>
                            <li>Primary tools: React, TypeScript, Tailwind</li>
                            <li>Also enjoy: C#/.NET, 3D, ML experiments</li>
                        </ul>
                    </div>

                    <div className="item mt-5">
                        <div className="item-title">Currently building</div>
                        <div className="divider"/>
                        <ul className="bullets">
                            <li>Portfolio UI system (retro theme + responsive sidebar)</li>
                            <li>Projects database (JSON-driven pages)</li>
                            <li>Project write-ups + structured case studies</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </NewPage>
    )
}