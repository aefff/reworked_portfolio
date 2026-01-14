import NewPage from "@/components/NewPage";
import Link from "next/link";

export default function Page() {
    return (
        <NewPage>
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="section-title m-0">Experience</h1>
                    <p className="text-blue-200 text-sm">
                        Projects, teamwork, and practical engineering work
                    </p>
                </div>

                <div className="flex gap-2">
                    <Link href="/" className="btn-ghost">
                        Back
                    </Link>
                </div>
            </div>

            <div className="divider"/>

            <div className="space-y-5">
                <article className="item">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                            <div className="item-title">Personal Projects (Ongoing)</div>
                            <div className="item-subtitle">React • TypeScript • Tailwind • C#/.NET</div>
                        </div>
                        <div className="text-sm text-blue-200/70 tracking-widest">
                            2024 — Present
                        </div>
                    </div>

                    <ul className="bullets mt-3">
                        <li>Built a portfolio UI system with reusable components and a retro theme</li>
                        <li>Created JSON-driven project pages and a feature carousel</li>
                        <li>Focused on clean architecture: layout ownership, routing, and UI consistency</li>
                    </ul>
                </article>

                <article className="item">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                            <div className="item-title">University + Coursework Engineering</div>
                            <div className="item-subtitle">Problem-solving • Algorithms • Systems thinking</div>
                        </div>
                        <div className="text-sm text-blue-200/70 tracking-widest">
                            2024 — Present
                        </div>
                    </div>

                    <ul className="bullets mt-3">
                        <li>Applied structured problem solving across programming and systems modules</li>
                        <li>Built confidence with debugging, tooling, and clean implementation patterns</li>
                        <li>Emphasised clarity: readable code, consistent structure, and incremental progress</li>
                    </ul>
                </article>

                <article className="item">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                            <div className="item-title">Self-directed Learning</div>
                            <div className="item-subtitle">Frontend • Backend • Security • ML basics</div>
                        </div>
                        <div className="text-sm text-blue-200/70 tracking-widest">
                            Ongoing
                        </div>
                    </div>

                    <ul className="bullets mt-3">
                        <li>Practiced building full features end-to-end (UI → data → behaviour)</li>
                        <li>Explored backend concepts and data-driven dashboards</li>
                        <li>Iterated quickly: prototype → test → refine</li>
                    </ul>
                </article>
            </div>

            <div className="divider"/>

            <div className="flex flex-wrap items-center justify-between gap-3">
                <Link className="btn-ghost" href="/about">
                    About Me
                </Link>
            </div>
        </NewPage>
    )
}