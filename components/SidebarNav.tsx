import Link from "next/link";

type SidebarNavProps = {
    onClose: () => void
}

function SidebarNav({ onClose }: SidebarNavProps) {
    return (
        <div className="panel h-[calc(100vh-40px)] md:h-[calc(100vh-48px)]">
            <div className="panel-inner flex h-full flex-col gap-6">
                <div>
                    <div className="text-xl tracking-widest text-blue-100 break-words">
                        ABDULMOYEED.exe
                    </div>
                    <div className="text-blue-200/80 mt-1">Software Engineering</div>
                </div>

                <button className="startbtn md:hidden" onClick={onClose}>
                    Close
                </button>

                <nav className="flex flex-col gap-2">
                    <Link className="nav-link" onClick={onClose} href="/">
                        Home
                    </Link>

                    <Link className="nav-link" onClick={onClose} href="/projects">
                        Projects
                    </Link>

                    <Link className="nav-link" onClick={onClose} href="/about">
                        About
                    </Link>

                    <Link className="nav-link" onClick={onClose} href="/experience">
                        Experience
                    </Link>

                    <Link className="nav-link" onClick={onClose} href="/skills">
                        Skills
                    </Link>

                    <Link className="nav-link" onClick={onClose} href="/contact">
                        Contact
                    </Link>
                </nav>

                <div className="mt-auto">
                    <div className="divider" />
                    <div className="text-blue-200/70 text-sm leading-relaxed">
                        Status: <span className="text-blue-200">Online</span>
                        <br />
                        Tip: Use Tab to navigate
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarNav
