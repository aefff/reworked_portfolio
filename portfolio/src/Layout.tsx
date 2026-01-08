import { Outlet } from "react-router-dom"
import SidebarNav from "./SidebarNav"

function Layout() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white font-iceland">
            <div
                className="pointer-events-none absolute inset-0
                   bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]
                   bg-[length:100%_4px]
                   opacity-20"
            />

            <div className="relative flex min-h-screen">
                <aside className="w-[260px] shrink-0 p-5 md:p-6">
                    <SidebarNav />
                </aside>

                <section className="flex-1 p-4 md:p-6">
                    <Outlet />
                </section>
            </div>
        </main>
    )
}

export default Layout
