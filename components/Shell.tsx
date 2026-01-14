"use client";

import useOpen from "@/hooks/useOpen";
import SidebarNav from "@/components/SidebarNav";

export default function Shell ({children} : {children: React.ReactNode}) {
    const { open, setOpen } = useOpen();

    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white font-iceland">
            <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_4px] opacity-20"
            />

            <div className="relative flex min-h-screen">
                {!open && (
                    <button
                        className="startbtn md:hidden fixed top-4 left-4 z-50"
                        onClick={() => setOpen(true)}
                    >
                        Navbar
                    </button>
                )}

                <aside
                    className={[
                        "fixed inset-y-0 left-0 z-40 w-[220px] lg:w-[260px] p-5 md:p-6",
                        "transition-transform duration-300",
                        open ? "translate-x-0" : "-translate-x-full",
                        "md:static md:translate-x-0"
                    ].join(" ")}
                >
                    <SidebarNav onClose={() => setOpen(false)} />
                </aside>

                <section className="flex-1 p-4 md:p-6 min-w-0">
                    {children}
                </section>
            </div>
        </main>
    )
}