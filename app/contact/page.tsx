import NewPage from "@/components/NewPage";
import Link from "next/link";

export default function Page() {
    return (
        <NewPage>
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="section-title m-0">Contact</h1>
                    <p className="text-blue-200 text-sm">
                        Reach out - I&#39;m happy to connect about projects and opportunities.
                    </p>
                </div>

                <div className="flex gap-2">
                    <Link href="/projects" className="btn-ghost">
                        View Work
                    </Link>
                </div>
            </div>

            <div className="divider"/>

            <div className="two-col">
                <div className="main-col">
                    <article className="item">
                        <div className="item-title">Message</div>
                        <p className="mt-3 text-blue-100 leading-relaxed">
                            If you&#39;d like to collaborate, discuss an internship, or just talk about software,
                            feel free to reach out. I&#39;m especially interested in full-stack engineering,
                            UI systems, and building clean, reliable products.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <a className="startbtn" href="mailto:abdulmoyeed3211@gmail.com">
                                Email
                            </a>
                            <a className="startbtn" href="https://github.com/aefff" target="_blank">
                                GitHub
                            </a>
                            <a className="startbtn" href="https://www.linkedin.com/in/abdulmoyeed-mohammed-308a14281/"
                               target="_blank">
                                LinkedIn
                            </a>
                        </div>
                    </article>

                    <article className="item mt-5">
                        <div className="item-title">Availability</div>
                        <ul className="bullets mt-3">
                            <li>Open to internships and project-based opportunities</li>
                            <li>Happy to share code, demos, or a short walkthrough</li>
                            <li>Response time: usually within 24-48 hours</li>
                        </ul>
                    </article>
                </div>

                <aside className="side-col">
                    <div className="item">
                        <div className="item-title">Contact Info</div>
                        <div className="divider"/>

                        <ul className="bullets wrap-break-word">
                            <li>Email: abdulmoyeed3211@gmail.com</li>
                            <li>GitHub: <a href="https://github.com/aefff" target="_blank">https://github.com/aefff</a></li>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/abdulmoyeed-mohammed-308a14281/" target="_blank">https://www.linkedin.com/in/abdulmoyeed-mohammed-308a14281/</a></li>
                            <li>Location: Birmingham, UK</li>
                        </ul>
                    </div>

                    <div className="item mt-5">
                        <div className="item-title">Preferred topics</div>
                        <div className="divider"/>
                        <ul className="bullets">
                            <li>Frontend/Full-stack engineering</li>
                            <li>React + TypeScript architecture</li>
                            <li>UI/UX polish and design systems</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </NewPage>
    )
}