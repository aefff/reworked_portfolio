"use client";

import useOpen from "@/hooks/useOpen";
import React, { useEffect } from "react";
import SidebarNav from "@/components/SidebarNav";
import useScreenSize from "@/hooks/useScreenSize";

export default function Shell ({children} : {children: React.ReactNode}) {
    const { open, setOpen } = useOpen();
    const { screenSize } = useScreenSize();


    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;

        const shouldLock = open && !screenSize.isMd;
        html.style.overflow = shouldLock ? "hidden" : "";
        body.style.overflow = shouldLock ? "hidden" : "";
        body.style.touchAction = shouldLock ? "none" : "";

        return () => {
            html.style.overflow = "";
            body.style.overflow = "";
            body.style.touchAction = "";
        };
    }, [open, screenSize.isMd]);


    return (
        <main className="relative min-h-screen overflow-hidden bg-linear-to-b from-blue-950 via-blue-900 to-blue-950 text-white font-iceland">
            <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100%_4px] opacity-20"
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
                        "z-40 p-5 md:p-6 w-55 lg:w-65",
                        "md:static md:translate-x-0 md:opacity-100 md:pointer-events-auto",
                        "fixed inset-y-0 left-0 transition-transform duration-300",
                        open ? "translate-x-0" : "-translate-x-full",
                    ].join(" ")}
                >
                    <SidebarNav onClose={() => setOpen(false)} />
                </aside>

                <section className={["flex-1 p-4 md:p-6 min-w-0",
                    open?"opacity-60 md:opacity-100 pointer-events-none md:pointer-events-auto overflow-hidden md:overflow-auto" : ""
                ].join(" ")}>
                    {children}
                </section>
            </div>
        </main>
    )
}