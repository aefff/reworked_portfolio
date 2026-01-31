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

        if (open && !screenSize.isMd) {
            html.style.overflow = "hidden";
            body.style.overflow = "hidden";
            body.style.touchAction = "none";
        } else {
            html.style.overflow = "";
            body.style.overflow = "";
            body.style.touchAction = "";
        }

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
                        "fixed inset-y-0 left-0 z-40 lg:w-65 md:p-6 transition-[transform,opacity] duration-300 ease-in-out overflow-x-hidden w-60 p-0",
                        open
                            ? "translate-x-0 opacity-100 pointer-events-auto overflow-y-auto"
                            : "-translate-x-full opacity-0 pointer-events-none overflow-y-auto md:static md:translate-x-0 md:opacity-100 md:pointer-events-auto md:overflow-hidden"
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