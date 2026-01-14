export default function NewPage({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="page-wrap">
            <section className="panel">
                <div className="panel-inner">
                    {children}
                </div>
            </section>
        </div>
    )
}