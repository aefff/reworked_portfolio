    import { NavLink, Link } from "react-router-dom"

function SidebarNav() {
    return (
        <div className="panel h-[calc(100vh-40px)] md:h-[calc(100vh-48px)]">
            <div className="panel-inner flex h-full flex-col gap-6">
                <div>
                    <div className="text-2xl tracking-widest text-blue-100">ABDULMOYEED.exe</div>
                    <div className="text-blue-200/80 mt-1">Software Engineering</div>
                </div>

                <nav className="flex flex-col gap-2">
                    <NavLink to="/" end className="nav-link">
                        Home
                    </NavLink>

                    <NavLink to="/projects" className="nav-link">
                        Projects
                    </NavLink>

                    <Link to="#" className="nav-link opacity-60 cursor-not-allowed">
                        About (soon)
                    </Link>
                    <Link to="#" className="nav-link opacity-60 cursor-not-allowed">
                        Experience (soon)
                    </Link>
                    <Link to="#" className="nav-link opacity-60 cursor-not-allowed">
                        Education (soon)
                    </Link>
                    <Link to="#" className="nav-link opacity-60 cursor-not-allowed">
                        Skills (soon)
                    </Link>
                    <Link to="#" className="nav-link opacity-60 cursor-not-allowed">
                        Contact (soon)
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
