"use client"

import React, {ReactNode, useState, useRef, useEffect} from "react";

export default function Carousel({children}: { children: ReactNode }) {
    const items = React.Children.toArray(children)

    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [selected, setSelected] = useState(0);

    const scrollTo = (i: number) => {
        const el = itemRefs.current[i];
        if (!el) return;

        el.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
        });
    };

    return (
        <div className="pt-3">
            <div className="flex justify-between items-center my-scroll-container">
                <button className="btn-ghost" onClick={() => {
                        const next = selected - 1 < 0 ? items.length - 1 : selected - 1;
                        setSelected(next);
                        scrollTo(next);
                    }}
                >
                    Prev
                </button>
                <p>{`${selected + 1 + "/" + items.length}`}</p>
                <button className="btn-ghost" onClick={() => {
                        const next = selected + 1 >= items.length ? 0 : selected + 1;
                        setSelected(next);
                        scrollTo(next);
                    }}
                >
                    Next
                </button>
            </div>
            <div className="my-scroll-container mt-4 flex flex-row overflow-x-auto">
                {items.map((item, i) => (
                    <div key={i}
                         ref={(el) => {itemRefs.current[i] = el}}
                         className={"flex gap-4 pb-3 p-2 snap-x snap-mandatory " + (i === selected ? "bg-blue-700 opacity-80 rounded-lg" : "")}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}