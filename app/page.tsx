import Link from "next/link";

export default function Home() {
    return (
        <div className="page-wrap flex min-h-[calc(100vh-2.5rem)] items-center justify-center">
            <div className="panel text-center max-w-lg w-full">
                <div className="panel-inner p-4">

                    <p className="section-title mb-1! leading-none">WELCOME</p>

                    <p className="text-blue-200/90 tracking-wide mb-3">
                        AbdulMoyeed Mohammed
                    </p>

                    <div className="text-blue-100/90 leading-relaxed text-sm max-w-md mx-auto">
                        Software Engineering student building modern web, AI, and 3D systems.
                        <br />
                        Explore projects, experiments, and engineering work.
                    </div>

                    <div className="mt-4 flex justify-center">
                        <Link className="startbtn" href="/home">
                            Start <span className="blink">▌</span>
                        </Link>
                    </div>

                    <div className="mt-3 text-xs text-blue-200/60 tracking-widest">
                        Press Start to continue
                    </div>
                </div>
            </div>
        </div>
    )
}
