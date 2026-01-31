"use client";

import { useState, useEffect } from "react";

export default function useScreenSize() {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
        isMd: false,
    });

    useEffect(() => {
        const update = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const isMd = width >= 768;
            setScreenSize({ width, height, isMd });
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        console.log("screenSize state updated:", screenSize);
    }, [screenSize]);

    return { screenSize };
}
