"use client";

import useProjectManager from "@/hooks/useProjectManager";
import Link from "next/link";
import NewPage from "@/components/NewPage";
import Carousel from "@/components/Carousel";
import BackButton from "@/components/BackButton";

export default function Page() {
    const { projects } = useProjectManager();

    const featured = projects.slice(0, 6);

    return (
        <NewPage>
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <h1 className="section-title m-0">Welcome</h1>
                    <p className="text-blue-200/80 tracking-wide mt-1">
                        AbdulMoyeed Mohammed · Software Engineering
                    </p>
                </div>

                <div className="flex gap-2 items-center">
                    <BackButton />
                </div>
            </div>

            <div className="divider" />

            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <section className="item">
                    <div className="item-title">Status</div>
                    <div className="divider" />
                    <p className="text-blue-100 leading-relaxed mt-3">
                        I build clean, fast interfaces and the systems behind them — from{" "}
                        <span className="text-blue-200">React/Next.js</span> frontends to{" "}
                        <span className="text-blue-200">data + automation</span> workflows.
                        <br />
                        <span className="text-blue-200/80">
              Current focus:
            </span>{" "}
                        shipping a retro-styled portfolio and evolving my projects from static data into a proper backend.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        <Link className="startbtn" href="/projects">
                            Browse Projects <span className="blink">▌</span>
                        </Link>
                        <Link className="btn-ghost" href="/about">
                            About Me
                        </Link>
                        <Link className="btn-ghost" href="/contact">
                            Contact
                        </Link>
                    </div>

                    <div className="mt-4 text-xs tracking-widest text-blue-200/60">
                        TIP: Use the sidebar to navigate. Press Prev/Next to skim featured projects.
                    </div>
                </section>

                <aside className="grid gap-4">
                    <div className="item">
                        <div className="item-title">Highlights</div>
                        <div className="divider" />
                        <ul className="bullets mt-3">
                            <li>Next.js migration (App Router)</li>
                            <li>Reusable UI system (panels, items, buttons)</li>
                            <li>Projects moving from JSON → DB (planned)</li>
                            <li>Cybersecurity + AI/ML interest</li>
                        </ul>
                    </div>

                    <div className="item">
                        <div className="item-title">Tech I like</div>
                        <div className="divider" />
                        <div className="mt-3 flex flex-wrap gap-2">
                            <span className="btn-ghost text-xs">Next.js</span>
                            <span className="btn-ghost text-xs">React</span>
                            <span className="btn-ghost text-xs">TypeScript</span>
                            <span className="btn-ghost text-xs">Tailwind</span>
                            <span className="btn-ghost text-xs">C#</span>
                            <span className="btn-ghost text-xs">SQL</span>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
                <h2 className="text-xl tracking-widest text-blue-200 uppercase">
                    Featured Projects
                </h2>
                <Link className="btn-ghost" href="/projects">
                    Open Projects
                </Link>
            </div>

            <Carousel>
                {featured.map((project) => (
                    <Link
                        href={`/projects/${encodeURIComponent(project.id)}`}
                        className="item block w-full relative hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all"
                        key={project.id}
                    >
                        <div className="item-title">{project.title}</div>
                        <div className="item-subtitle">{project.subtitle}</div>

                        <div className="divider" />

                        <p className="text-blue-100/90 text-sm leading-relaxed mt-3">
                            {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack.slice(0, 4).map((t) => (
                                <span key={t} className="btn-ghost text-xs">
                  {t}
                </span>
                            ))}
                            {project.stack.length > 4 && (
                                <span className="btn-ghost text-xs">+{project.stack.length - 4}</span>
                            )}
                        </div>

                        <div className="mt-4 text-xs text-blue-200/70 tracking-widest">
                            Click to open details →
                        </div>
                    </Link>
                ))}
            </Carousel>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="item">
                    <div className="item-title">Now</div>
                    <div className="divider" />
                    <ul className="bullets mt-3">
                        <li>Finish migrating remaining pages into App Router</li>
                        <li>Polish layout + mobile navigation</li>
                        <li>Improve project detail pages and write-ups</li>
                    </ul>
                </div>

                <div className="item">
                    <div className="item-title">Next</div>
                    <div className="divider" />
                    <ul className="bullets mt-3">
                        <li>Replace JSON with Postgres + Prisma</li>
                        <li>Admin/editor page to update projects easily</li>
                        <li>Search + tags + filters across projects</li>
                    </ul>
                </div>
            </div>
        </NewPage>
    );
}
